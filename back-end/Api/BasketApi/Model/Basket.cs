﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasketApi.Model
{
    public class Basket
    {
        public Guid? Uid { get; set; }
        public DateTime Date { get; set; }
        public List<Offerings> Items { get; set; }
        
        public Basket() { }
    }

    public class Offerings
    {
        public string Offering_key { get; set; }
        public string Product_key { get; set; }
        public string Product_name { get; set; }
        public string Supplier_key { get; set; }
        public string Supplier_name { get; set; }
        public decimal Unit_retail { get; set; }
        public string Uom { get; set; }
        public int Quantity { get; set; }
    }
}
