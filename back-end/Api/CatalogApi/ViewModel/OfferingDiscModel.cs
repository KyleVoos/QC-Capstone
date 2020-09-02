using System;

namespace CatalogApi.ViewModel
{
    public class OfferingDiscModel
    {
        public string Product_name { get; set; }
        public string Long_description { get; set; }
        public string Product_key { get; set; }
        public string Offering_key { get; set; }
        public string Unit_retail { get; set; }
        public string Uom { get; set; }
        public string Supplier_key { get; set; }
        public string Supplier_name { get; set; }
        public string Discount_price { get; set; }
        public string Discount_percentage { get; set; }
        public int MaxQty { get; set; }                
        public string Discount_key { get; set; }
        public string Type { get; set; }

        public void ApplyDiscount(Tiers tier, string type, string discount_key)
        {
            SetDiscountKey(discount_key);
            SetDiscountType(type);
            SetMaxQuantity(tier.MaxQty);
            SetDiscountPercentage(tier.DiscountPercentage);
            SetDiscountPrice();
        }

        private void SetDiscountKey(string discount_key)
        {
            Discount_key = discount_key;
        }

        private void SetDiscountType(string type)
        {
            Type = type;
        }

        private void SetDiscountPrice()
        {
            Discount_price = (Convert.ToDecimal(Unit_retail) * (PercentageToDecimal())).ToString();
        }        

        private void SetDiscountPercentage(decimal discount_percentage)
        {
            Discount_percentage = discount_percentage.ToString();
        }

        private void SetMaxQuantity(int maxQty)
        {
            MaxQty = maxQty;
        }
        
        private decimal PercentageToDecimal()
        {
            return (1 - (Convert.ToDecimal(Discount_percentage) / 100));
        }
    }
}
