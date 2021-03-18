import Message from '../Message/Message'
import LogLevel from '../Message/LogLevel'

const DEFAULT_MESSAGES: Message[] = [
  {
    logLevel: LogLevel.INFO,
    delayInMS: 100,
    message: '🚀 Starting up ...'
  }
]

export default DEFAULT_MESSAGES
