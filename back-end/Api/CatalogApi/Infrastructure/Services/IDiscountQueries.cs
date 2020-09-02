using CatalogApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogApi.Infrastructure.Services
{
    public interface IDiscountQueries
    {
        Task<List<Discounts>> GetOfferingDiscounts(List<string> OfferingIDs);
    }
}
