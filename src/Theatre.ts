import sleep from './utils/sleep'
import Message from './Message/Message'

import DEFAULT_MESSAGES from './Defaults/DefaultMessages'
import DEFAULT_LOGGER from './Defaults/DefaultLogger'

class Theatre {
  messages: Message[] = DEFAULT_MESSAGES
  logger: (message: Message) => void = DEFAULT_LOGGER

  constructor (engine?: Partial<Theatre>) {
    Object.assign(this, engine)
  }

  async showtime (): Promise<void> {
    for (const message of this.messages) {
      await sleep(message.delayInMS)
      this.logger(message)
    }
  }
}

export default Theatre
