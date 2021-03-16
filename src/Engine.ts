enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug'
}
class Message {
  message: string = 'Starting up...'
  logLevel: LogLevel = LogLevel.INFO

  constructor (message?: Partial<Message>) {
    Object.assign(this, message)
  }
}

const DEFAULT_LOGGER: (message: Message) => void = message => {
  let consoleLogFunction: CallableFunction = console.info
  switch (message.logLevel) {
    case LogLevel.DEBUG: consoleLogFunction = console.debug
      break
    case LogLevel.ERROR: consoleLogFunction = console.error
      break
    case LogLevel.WARN: consoleLogFunction = console.warn
      break
    default:
      consoleLogFunction = console.info
      break
  }

  consoleLogFunction(message.message)
}
class Engine {
  messages: Message[] = [new Message()]
  logger: (message: Message) => void = DEFAULT_LOGGER

  constructor (engine?: Partial<Engine>) {
    Object.assign(this, engine)
  }

  startUp (): void {
    this.messages.forEach(message => {
      this.logger(message)
    })
  }
}

export default Engine
export {
  LogLevel,
  Message
}
