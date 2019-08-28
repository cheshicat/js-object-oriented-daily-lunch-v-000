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
