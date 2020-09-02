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

        public DiscountQueries(IBucketProvider bucketProvider)
        {
            _discountsContext = bucketProvider.GetBucket("Discounts");
        }

        public Task<List<Discounts>> GetOfferingDiscounts(List<string> OfferingIDs)
        {
            throw new NotImplementedException();
        }

        private string BuildQueryStatement()
        {
            var queryRequest = new QueryRequest();
            return "";
        }


    }
}
