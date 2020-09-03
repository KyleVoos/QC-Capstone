using CatalogApi.Model;
using CatalogApi.ViewModel;
using Couchbase.Core;
using Couchbase.Extensions.DependencyInjection;
using Couchbase.N1QL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogApi.Infrastructure.Services
{
    public class DiscountQueries : IDiscountQueries
    {
        private readonly IBucket _discountsContext;
        private readonly Dictionary<int, string> queryStatements;

        public DiscountQueries(IBucketProvider bucketProvider)
        {
            _discountsContext = bucketProvider.GetBucket("Discounts");
            queryStatements = new Dictionary<int, string>
            {
                { 1, "select * from Discounts where product_key = $id" },
                { 2, "select id, offering_keys, tiers, product_key, supplier_key, type from Discounts where any k in offering_keys satisfies " },
                { 3, "SELECT tiers FROM Discounts where " }
            };
        }

        public Task GetOfferingDiscounts(List<OfferingDiscModel> offerings)
        {
            try
            {
                var keys = offerings.Select(off => off.Offering_key).ToList();
                var statement = BuildQueryStatement(2, keys);

                // add the query string as the QueryRequest statement
                var queryRequest = new QueryRequest()
                    .Statement(statement);

                
                // send the query to the Couchbase Discounts bucket
                var result = _discountsContext.Query<Discounts>(queryRequest);
                Console.WriteLine($"result: {result.Status} {result.Message}");
                FindOfferingsDiscount(offerings, result.Rows);
            }
            catch (Exception ex)
            {
                return Task.FromException(ex);
            }

            return Task.CompletedTask;
        }

        private void FindOfferingsDiscount(List<OfferingDiscModel> offerings, List<Discounts> discounts)
        {
            // trying t0 find which discount contains the offerings ID, if any
            var offeringsIdToIndexMap = new Dictionary<string, int>();

            int i = 0;

            foreach (var discount in discounts)
            {
                foreach (var offeringKey in discount.Offering_keys)
                    offeringsIdToIndexMap.TryAdd(offeringKey, i);
                ++i;
            }

            foreach (var offering in offerings)
            {
                if (offeringsIdToIndexMap.ContainsKey(offering.Offering_key))
                    ApplyDiscountToOffering(offering, discounts[offeringsIdToIndexMap[offering.Offering_key]]);
            }
        }

        private void ApplyDiscountToOffering(OfferingDiscModel offering, Discounts discount)
        {
            Console.WriteLine($"applying discount {offering.Offering_key}");
            if (discount.Type == "PRODUCT_DISCOUNT")
                offering.ApplyDiscount(discount.tiers[0], discount.Type, discount.Id);
            else if (discount.Type == "SUPPLIER_DISCOUNT")
            {
                int index = discount.Offering_keys.IndexOf(offering.Offering_key, 0);
                offering.ApplyDiscount(discount.tiers[index], discount.Type, discount.Id);
            }
        }

        private string BuildQueryStatement(int queryType, List<string> keys)
        {
            var statement = queryStatements[queryType];

            switch (queryType)
            {
                case 1:
                    break;
                case 2:
                    int i = 0;
                    foreach(var key in keys)
                    {
                        if (i == 0)
                            statement += " k = '" + key + "'";
                        else
                            statement += " or k = '" + key + "'";
                        
                    }
                    statement += " end";
                    break;
                case 3:
                    break;
            }


            return statement;
        }


    }
}
