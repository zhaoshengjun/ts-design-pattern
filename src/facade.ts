class BluerayPlayer {
  on() {
    console.log("Blueray player is on ...");
  }

  turnOff() {
    console.log("Blueray player is off ...");
  }

  play() {
    console.log("Blueray player is playing ...");
  }
}

class Amplifier {
  on() {
    console.log("Amplifier is on ...");
  }

  turnOff() {
    console.log("Amplifier is off ...");
  }

  setSource(source: string) {
    console.log("Setting source to " + source);
  }

  setVolume(volume: number) {
    console.log("Setting volume to " + volume);
  }
}

class Light {
  dim() {
    console.log("Light is dimming ...");
  }
}

class TV {
  turnOn() {
    console.log("TV is turning on ...");
  }

  turnOff() {
    console.log("TV is turning off ...");
  }
}

class PopcornMaker {
  turnOn() {
    console.log("Popcorn maker is turning on ...");
  }

  turnOff() {
    console.log("Popcorn maker is turning off ...");
  }

  pop() {
    console.log("Popoing corn!");
  }
}

class HomeTheaterFacade {
  constructor(
    public blueray: BluerayPlayer,
    public amp: Amplifier,
    public light: Light,
    public tv: TV,
    public popcornMaker: PopcornMaker
  ) {}

  public watchMovie() {
    this.popcornMaker.turnOn();
    this.popcornMaker.pop();

    this.light.dim();
    this.tv.turnOn();
    this.amp.on();
    this.amp.setSource("blueray");
    this.amp.setVolume(11);
    this.blueray.on();
    this.blueray.play();
  }

  public endMovie() {
    this.popcornMaker.turnOff();
    this.amp.turnOff();
    this.tv.turnOff();
    this.blueray.turnOff();
  }
}

let blueray = new BluerayPlayer();
let amp = new Amplifier();
let tv = new TV();
let light = new Light();
let popcornMaker = new PopcornMaker();
let homeTheater = new HomeTheaterFacade(blueray, amp, light, tv, popcornMaker);
homeTheater.watchMovie();
