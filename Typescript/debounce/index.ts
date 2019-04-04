const debounce = (fn: (...args: any[]) => any, wait: number) => {
    let timeout: number | undefined
    return function (this: any, ...args: any[]) {
        if (timeout !== undefined) clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(this, args), wait)
    }
}