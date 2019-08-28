// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
     this.name = name;
     this.id = neighborhoodId++;
     store.neighborhoods.push(this);
   }

   deliveries() {
     return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id)
   };
}

let customerId = 0;

class Customer {
  constructor(name, neighborhoodId) {
     this.name = name;
     this.id = customerId++;
     this.neighborhoodId = neighborhoodId;
     store.customers.push(this);
   }
}

let mealId = 0;

class Meal {
  constructor(title, price) {
     this.title = title;
     this.id = mealId++;
     this.price = price;
     store.meals.push(this);
   }
}

let deliveryId = 0;

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
     this.id = deliveryId++;
     this.mealId = mealId;
     this.customerId = customerId;
     this.neighborhoodId = neighborhoodId;
     store.deliveries.push(this);
   }
}
