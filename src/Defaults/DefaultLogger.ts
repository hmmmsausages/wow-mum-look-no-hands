import Message from '../Message/Message'
import LogLevel from '../Message/LogLevel'

const DEFAULT_LOGGER: (message: Message) => void = message => {
  let consoleLogFunction: CallableFunction

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

export default DEFAULT_LOGGER
