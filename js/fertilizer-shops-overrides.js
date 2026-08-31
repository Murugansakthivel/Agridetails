/* Agridetails — manual overrides for Tamil Nadu Fertilizer Shop Details.
   Verified facts the government portal does NOT publish (postal address,
   landmark, pesticide/pest-control stock) go here, keyed by shop id from
   js/fertilizer-shops.js (e.g. "ariyalur-1"). This file is NEVER overwritten
   by the daily auto-refresh job — edit it by hand whenever a shop address or
   pesticide stock is confirmed by phone/visit, then commit + push as usual.

   Shape:
   FERTILIZER_SHOP_OVERRIDES = {
     "ariyalur-1": {
       address: "123 Main Road, Ariyalur",
       landmark: "Near Bus Stand",
       pesticides: [
         { name: "Chlorpyrifos 20% EC", stock: "In stock" },
         { name: "Cypermethrin 10% EC", stock: "Out of stock" }
       ]
     }
   };
*/
const FERTILIZER_SHOP_OVERRIDES = {};
