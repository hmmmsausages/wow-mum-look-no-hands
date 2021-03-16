import Engine, { LogLevel, Message } from './Engine'

describe('Engine', () => {
  describe('startUp()', () => {
    it('prints default message when created with default constructor', () => {
      console.info = jest.fn()

      const engine = new Engine()
      engine.startUp()

      expect(console.info).toHaveBeenCalledWith('Starting up...')
    })

    it('prints specified messages when created with specific messages', () => {
      console.info = jest.fn()

      const engine = new Engine({
        messages: [
          new Message({ message: 'test123' }),
          new Message({ message: 'test456' })
        ]
      })
      engine.startUp()

      expect(console.info).toHaveBeenCalledWith('test123')
      expect(console.info).toHaveBeenCalledWith('test456')
    })

    it('calls logger function with specified messages', () => {
      const logger = jest.fn()

      const engine = new Engine({
        messages: [
          new Message({ message: 'test123' })
        ],
        logger: logger
      })
      engine.startUp()

      expect(logger).toHaveBeenCalledWith({
        logLevel: 'info',
        message: 'test123'
      })
    })

    it('prints messages with specified log level', () => {
      console.debug = jest.fn()
      console.info = jest.fn()
      console.warn = jest.fn()
      console.error = jest.fn()

      const engine = new Engine({
        messages: [
          new Message({ logLevel: LogLevel.DEBUG, message: 'debug' }),
          new Message({ logLevel: LogLevel.INFO, message: 'info' }),
          new Message({ logLevel: LogLevel.WARN, message: 'warn' }),
          new Message({ logLevel: LogLevel.ERROR, message: 'error' })
        ]
      })
      engine.startUp()

      expect(console.debug).toHaveBeenCalledWith('debug')
      expect(console.info).toHaveBeenCalledWith('info')
      expect(console.warn).toHaveBeenCalledWith('warn')
      expect(console.error).toHaveBeenCalledWith('error')
    })
  })
})
