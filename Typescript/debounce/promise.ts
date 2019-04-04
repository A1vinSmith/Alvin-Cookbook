type debouncedFn = (...args: any[]) => any

const debounce = (fn: debouncedFn, waitMilliseconds: number): debouncedFn => {
  let timeout: number | undefined
  let resolves: any[] = []
  return function (this: any, ...args) {
    if (timeout !== undefined) clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      const result = fn.apply(this, args)
      resolves.length > 0 && resolves.forEach(r => r(result))
      resolves = []
    }, waitMilliseconds)
    return new Promise(r => resolves.push(r))
  }
}

export default debounce
