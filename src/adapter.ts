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
