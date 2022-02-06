export class ZmqMiddlewareManager {
  constructor (socket) {
    this.socket = socket
    this.inboundMiddleware = []
    this.outboundMiddleware = []

    this.handleIncomingMessages()
      .catch(err => console.error(err))
  }

  async handleIncomingMessages () {
    console.log('~~~~start');
    for await (const [message] of this.socket) {
      
      console.log('~in');
      // console.log(message);
      await this
        .executeMiddleware(this.inboundMiddleware, message)
        .catch(err => {
          console.error('Error while processing the message', err)
        })
    }
  }

  async send (message) {
    const finalMessage = await this
      .executeMiddleware(this.outboundMiddleware, message)
    return this.socket.send(finalMessage)
  }

  use (middleware) {
    if (middleware.inbound) {
      this.inboundMiddleware.push(middleware.inbound)
    }
    if (middleware.outbound) {
      this.outboundMiddleware.unshift(middleware.outbound)
    }
  }

  async executeMiddleware (middlewares, initialMessage) {
    let message = initialMessage
    console.log('~in2');
    console.log(middlewares);
    for await (const middlewareFunc of middlewares) {
      message = await middlewareFunc.call(this, message)
      // console.log(message);
    }
    return message
  }
}
