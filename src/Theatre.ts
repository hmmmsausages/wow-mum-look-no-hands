import sleep from './utils/sleep'
import Message from './Message/Message'

import DEFAULT_MESSAGES from './Defaults/DefaultMessages'
import DEFAULT_LOGGER from './Defaults/DefaultLogger'

class Theatre {
  messages: Message[] = DEFAULT_MESSAGES
  logger: (message: Message) => void = DEFAULT_LOGGER

  /**
   * Creates a Theatre instance with the specified messages and logger.
   * Uses defaults if some or all of them are not provided.
   * @param {Partial<Theatre} engine partial of Theatre class
   */
  constructor (engine?: Partial<Theatre>) {
    Object.assign(this, engine)
  }

  /**
   * Logs all messages sequentially by calling configured logger function
   * and enforcing configured delay before each message is logged
   * @returns {Promise<void>} Promise that resolves after all messages have been logged
   */
  async showtime (): Promise<void> {
    for (const message of this.messages) {
      await sleep(message.delayInMS)
      this.logger(message)
    }
  }
}

export default Theatre
