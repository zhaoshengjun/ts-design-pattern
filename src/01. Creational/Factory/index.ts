class Rocket {
  payload: Payload;
  stages: Stage[];
}

class Payload {
  constructor(public weight: number) {}
}
class Engine {
  constructor(public power: number) {}
}
class Stage {
  constructor(public engines: Engine[]) {}
}

class RocketFactory {
  buildRocket(): Rocket {
    let rocket = new Rocket();
    let payload = this.createPayload();
    let stage = this.createStages();
    rocket.payload = payload;
    rocket.stages = stage;
    return rocket;
  }
  createPayload(): Payload {
    return new Payload(0);
  }

  createStages(): Stage[] {
    let engine = new Engine(1000);
    let stage = new Stage([engine]);
    return [stage];
  }
}

let rocketFactory = new RocketFactory();
let rocket = rocketFactory.buildRocket();
console.log(`Rocket: ${JSON.stringify(rocket)}`);
