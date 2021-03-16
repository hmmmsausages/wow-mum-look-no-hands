import Engine, { LogLevel, Message } from './Engine'

import sleep from './utils/sleep'
jest.mock('./utils/sleep.ts')
const mockedSleep = sleep as jest.MockedFunction<typeof sleep>

describe('Engine', () => {
  beforeEach(() => {
    mockedSleep.mockReturnValue(new Promise(resolve => resolve()))
  })

  describe('startUp()', () => {
    it('prints default message when created with default constructor', async () => {
      console.info = jest.fn()

      const engine = new Engine()

      await engine.startUp()

      expect(console.info).toHaveBeenCalledWith('Starting up...')
    })

    it('prints specified messages when created with specific messages', async () => {
      console.info = jest.fn()

      const engine = new Engine({
        messages: [
          new Message({ message: 'test123' }),
          new Message({ message: 'test456' })
        ]
      })

      await engine.startUp()

      expect(console.info).toHaveBeenCalledWith('test123')
    })

    it('calls logger function with specified message', async () => {
      const logger = jest.fn()

      const engine = new Engine({
        messages: [
          new Message({ message: 'test123' })
        ],
        logger: logger
      })

      await engine.startUp()

      expect(logger).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'test123'
        })
      )
    })

    it('calls logger function with specified log level', async () => {
      const logger = jest.fn()

      const engine = new Engine({
        messages: [
          new Message({ logLevel: LogLevel.DEBUG, message: 'test123' })
        ],
        logger: logger
      })

      await engine.startUp()

      expect(logger).toHaveBeenCalledWith(
        expect.objectContaining({
          logLevel: 'debug'
        })
      )
    })

    it('prints messages with specified log level when using default logger implementation', async () => {
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

      await engine.startUp()

      expect(console.debug).toHaveBeenCalledWith('debug')
      expect(console.info).toHaveBeenCalledWith('info')
      expect(console.warn).toHaveBeenCalledWith('warn')
      expect(console.error).toHaveBeenCalledWith('error')
    })

    it('calls logger sleep function with correct message delay', async () => {
      const logger = jest.fn()

      const engine = new Engine({
        messages: [
          new Message({
            logLevel: LogLevel.DEBUG,
            message: 'test123',
            delayInMS: 100
          })
        ],
        logger: logger
      })

      await engine.startUp()

      expect(mockedSleep).toHaveBeenCalledTimes(1)
      expect(mockedSleep).toHaveBeenLastCalledWith(100)
    })
  })
})
