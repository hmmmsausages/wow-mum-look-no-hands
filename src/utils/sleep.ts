/**
 * Returns a promise that resolved after the number of specified
 * milliseconds. Can be used to force process to sleep between
 * steps
 * @param ms Number of milliseconds until sleep resolves promise
 * @returns Promise that resolves after specified milliseconds
 */
const sleep: (ms?: number) => Promise<void> = async (ms = 250) => await new Promise(resolve => setTimeout(resolve, ms))

export default sleep
