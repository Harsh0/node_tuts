function memoize(fn, ...args) {
    // create a cache map and attach to function so the refrence of cache does not lost
    if (!this.cache) {
        this.cache = {};
    }
    return () => {
        // check whether cache already has the function
        if (fn in this.cache) {
            return this.cache[fn];
        } else {
            this.cache[fn] = fn(...args);
            return this.cache[fn];
        }
    }
}

module.exports = memoize;