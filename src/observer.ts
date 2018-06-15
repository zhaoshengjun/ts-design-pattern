interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}
class WeatherStation {
  private temperature: number;

  setTemperature(temp: number) {
    console.log("WeatherStation: new temperature: ", temp);
    this.temperature = temp;
  }
}

class TemperatureDisplay {}
