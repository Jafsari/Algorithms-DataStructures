class ParkingLot{
    constructor(capacity){
      this.capacity = capacity;
      this.number = 0;
      this.cars = {};
    }
    park(brand,model){
      if (this.number < this.capacity){
        this.cars[brand] = model;
        this.number++;
      } else {
      if (this.number >= this.capacity){
        console.log('The parking lot is full');
        }
      }
    }
    exit(brand,model){
      if (!this.cars[brand]){
        console.log('We cant seem to find your car');
      }
      for (let key in this.cars){
        if (this.cars[key] === model){
          console.log('Here is your car');
          delete this.cars[key];
          this.number--;
        }
      }
    }
  }
  
  var parkingLot = new ParkingLot(3);
  
  parkingLot.park('Mercedes','E350');
  parkingLot.park('Honda','Civic');
  parkingLot.park('Toyota','Camry');
  parkingLot.park('Lamborghini','Murcialago')
  parkingLot.exit('Toyota','Camry');
  console.log(parkingLot);