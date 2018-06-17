interface State {
  order: Order;
  cancelOrder();
  verifyPayment();
  shipOrder();
}

class Order {
  public currentState: State;
  constructor() {}

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  constructor(public order: Order) {}
  cancelOrder() {}
  verifyPayment() {}
  shipOrder() {}
}
class OrderCancelledState implements State {
  constructor(public order: Order) {}
  cancelOrder() {}
  verifyPayment() {}
  shipOrder() {}
}
class OrderPreparedState implements State {
  constructor(public order: Order) {}
  cancelOrder() {}
  verifyPayment() {}
  shipOrder() {}
}
class OrderShippedState implements State {
  constructor(public order: Order) {}
  cancelOrder() {}
  verifyPayment() {}
  shipOrder() {}
}
