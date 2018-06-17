interface iPhone {
  useLightning();
}

interface Android {
  useMicroUSB();
}

class iPhone7 implements iPhone {
  useLightning() {
    console.log("Using lightning port ...");
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log("Using micro USB ...");
  }
}

class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: iPhone;
  constructor(iphone: iPhone) {
    this.iphoneDevice = iphone;
  }

  useMicroUSB() {
    console.log("Want to use micro USB, converting from lightning ...");

    this.iphoneDevice.useLightning();
  }
}

let iphone = new iPhone7();
let charger = new LightningToMicroUSBAdapter(iphone);

charger.useMicroUSB();
