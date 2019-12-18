function flatten(arr) {
    return arr.reduce((previous, current) => {
        return previous.concat(current);
    }, [])
}

module.exports = flatten;