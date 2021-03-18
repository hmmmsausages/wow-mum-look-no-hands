import LogLevel from './LogLevel'
import Message from './Message'

const DEFAULT_LOG_LEVEL = LogLevel.INFO
const DEFAULT_DELAY_IN_MS = 250

describe('Message', () => {
  describe('constructor()', () => {
    it('can be initialized with only message object property argument / falls back to defaults for other values', () => {
      const message: Message = new Message({
        message: 'test'
      })

      expect(message.message).toEqual('test')
      expect(message.logLevel).toEqual(DEFAULT_LOG_LEVEL)
      expect(message.delayInMS).toEqual(DEFAULT_DELAY_IN_MS)
    })

    it('can be initialized with only message string argument / falls back to defaults for other values', () => {
      const message: Message = new Message('test')

      expect(message.message).toEqual('test')
      expect(message.logLevel).toEqual(DEFAULT_LOG_LEVEL)
      expect(message.delayInMS).toEqual(DEFAULT_DELAY_IN_MS)
    })

    it('can be initialized by complying to interface of class', () => {
      const message: Message = {
        message: 'test',
        logLevel: LogLevel.ERROR,
        delayInMS: 1
      }

      expect(message.message).toEqual('test')
      expect(message.logLevel).toEqual(LogLevel.ERROR)
      expect(message.delayInMS).toEqual(1)
    })

    it('can be initialized by providing all object property arguments', () => {
      const message: Message = new Message({
        message: 'test',
        logLevel: LogLevel.ERROR,
        delayInMS: 1
      })

      expect(message.message).toEqual('test')
      expect(message.logLevel).toEqual(LogLevel.ERROR)
      expect(message.delayInMS).toEqual(1)
    })
  })
})
