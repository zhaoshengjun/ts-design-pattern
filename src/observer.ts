interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}
class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];
  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }
  notifyObservers() {
    this.observers.forEach(o => {
      o.update(this.temperature);
    });
  }

  setTemperature(temp: number) {
    console.log("WeatherStation: new temperature: ", temp);
    this.temperature = temp;
    this.notifyObservers();
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;
  constructor(ws: Subject) {
    this.subject = ws;
    ws.registerObserver(this);
  }
  update(temperature: number) {
    console.log("New temperature: ", temperature);
  }
}
class Fan implements Observer {
  private subject: Subject;
  constructor(ws: Subject) {
    this.subject = ws;
    ws.registerObserver(this);
  }
  update(temperature: number) {
    if (temperature > 25) {
      console.log("Fan: turning on...");
    } else {
      console.log("Fan: turning off ...");
    }
  }
}

let ws = new WeatherStation();
let tempDisplay = new TemperatureDisplay(ws);
let fan = new Fan(ws);

ws.setTemperature(20);
ws.setTemperature(30);
