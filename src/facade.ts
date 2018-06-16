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
