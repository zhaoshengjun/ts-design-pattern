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
