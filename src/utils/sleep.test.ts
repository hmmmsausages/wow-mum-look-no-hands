import sleep from './sleep'

describe('sleep', () => {
  it('resolves after specified time', async () => {
    const sleepPromise = sleep(100)
    jest.runAllTimers()
    await sleepPromise

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100)
  })

  it('uses default sleep timeout, if no time was provided', async () => {
    const sleepPromise = sleep()
    jest.runAllTimers()
    await sleepPromise

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 250)
  })
})
