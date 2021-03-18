import LogLevel from './LogLevel'

interface MinimumMessage {
  message: string
  logLevel?: LogLevel
  delayInMS?: number
}

class Message {
  message: string
  logLevel: LogLevel = LogLevel.INFO
  delayInMS: number = 250

  /**
   * Creates a Message instance based on a message string or MinimumMessage object
   * @param message message string or object with message property and optional further instance properties
   */
  constructor (message: MinimumMessage | string) {
    if (typeof message === 'string') {
      this.message = message
    } else {
      Object.assign(this, message)
      this.message = message.message
    }
  }
}

export default Message
