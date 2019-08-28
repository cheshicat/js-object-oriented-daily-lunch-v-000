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

   customers() {
     return store.customers.filter(customer => customer.neighborhoodId === this.id)
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

   deliveries() {
     return store.deliveries.filter(delivery => delivery.customerId === this.id)
   };

   meals() {
     return store.deliveries.filter(delivery => delivery.customerId === this.id).map(delivery => delivery.meal());
   };
}

let mealId = 0;

class Meal {
  constructor(title, price) {
     this.title = title;
     this.id = mealId++;
     this.price = price;
     store.meals.push(this);
   }

   deliveries() {
     return store.deliveries.filter(delivery => delivery.mealId === this.id)
   };

   customers() {
     return this.deliveries().map(delivery => delivery.customer());
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

   meal() {
     return store.meals.find(meal => meal.id === this.mealId);
   }

   customer() {
     return store.customers.find(customer => customer.id === this.customerId);
   }

   neighborhood() {
     return store.neighborhoods.find(neighborhood => neighborhood.id === this.neighborhoodId);
   }

}
