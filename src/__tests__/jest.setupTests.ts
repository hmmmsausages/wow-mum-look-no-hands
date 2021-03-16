global.beforeEach(() => {
  jest.useFakeTimers()
})

global.afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
