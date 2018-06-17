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
  cancelOrder() {
    console.log("Your order has already been cancelled.");
  }
  verifyPayment() {
    console.log("Cannot verify payment, order has been cancelled.");
  }
  shipOrder() {
    console.log("Cannot ship order, order has been cancelled.");
  }
}
class OrderPreparedState implements State {
  constructor(public order: Order) {}
  cancelOrder() {
    console.log("Cancelling your order ...");
    this.order.setState(this.order.orderCancelledState);
  }
  verifyPayment() {
    console.log("Payment has already been verified.");
  }
  shipOrder() {
    console.log("Shipping your order now ...");
    this.order.setState(this.order.orderShippedState);
  }
}
class OrderShippedState implements State {
  constructor(public order: Order) {}
  cancelOrder() {}
  verifyPayment() {}
  shipOrder() {}
}
