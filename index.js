// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
     this.name = name;
     this.id = neighborhoodId++;
     store.neighborhoods.push(this);
   }
}

let customerId = 0;

class Customer {
  constructor(name, neighborhoodId) {
     this.name = name;
     this.id = customerId++;
     this.neighborhoodId = neighborhood.id;
     store.customers.push(this);
   }
}

let mealId = 0;

class Meal {
  constructor(title, price) {
     this.title = title;
     this.id = menuId++;
     this.price = price;
   }
}

let deliveryId = 0;

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
     this.name = name;
     this.id = customerId++;
     this.neighborhoodId = neighborhood.id;
     store.customers.push(this);
   }
}
