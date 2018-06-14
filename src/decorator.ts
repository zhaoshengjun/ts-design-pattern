abstract class Car {
  public description: string;
  public getDescription(): string {
    return this.description;
  }
  public abstract cost(): number;
}

class ModelS extends Car {
  public description = "Model S";
  public cost() {
    return 77000;
  }
}
class ModelX extends Car {
  public description = "Model X";
  public cost() {
    return 73000;
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Rear Facing Seats";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 7000;
  }
}
