let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    })
  }


  passengers(){
    let myPassengers = [];
    let trips = this.trips();
    for (let obj of trips){
      myPassengers.push(store.passengers.find(function(passenger){
        return passenger.id === obj.passengerId;
      }))
    }
    return myPassengers
  }
}

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }

  drivers(){
    let myDrivers = [];
    let trips = this.trips();
    for (let obj of trips){
      myDrivers.push(store.drivers.find(function(driver){
        return driver.id === obj.driverId;
      }))
    }
    return myDrivers
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId;
    }.bind(this));
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id = this.driverId;
    }.bind(this));
  }
}
