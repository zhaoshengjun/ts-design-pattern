interface State {
  order: Order;
  cancelOrder();
  verifyPayment();
  shipOrder();
}

class Order {
  public currentState: State;
  public paymentPendingState: State;
  public orderCancelledState: State;
  public orderPreparedState: State;
  public orderShippedState: State;
  constructor() {
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderCancelledState = new OrderCancelledState(this);
    this.orderPreparedState = new OrderPreparedState(this);
    this.orderShippedState = new OrderShippedState(this);

    this.setState(this.paymentPendingState);
  }

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  constructor(public order: Order) {}
  cancelOrder() {
    console.log("Cancelling your unpaid order ...");
  }
  verifyPayment() {
    console.log("Payment verified, shipping soon...");
    this.order.setState(this.order.orderPreparedState);
  }
  shipOrder() {
    console.log("Cannot ship the order when payment is pending ...");
  }
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
