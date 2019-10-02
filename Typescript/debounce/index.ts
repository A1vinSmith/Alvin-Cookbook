const debounce = (fn: (...args: any[]) => any, wait: number) => {
    let timeout: number | undefined
    return function (this: any, ...args: any[]) {
        if (timeout !== undefined) clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(this, args), wait)
    }
}


/*
const debounce = (fn, wait) => {
  let timeout;

  return function() {
    if (timeout !== undefined) clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), wait);
  }
}
*/
