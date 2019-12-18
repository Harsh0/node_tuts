function without(exclude, arr) {
    return arr.reduce((previous, current) => {
        if (!exclude.some((value, index) => {
            if (Object.is(value, current)) {
                return true;
            }
        })) {
            previous.push(current)
        }
        return previous;
    }, [])
}

module.exports = without;