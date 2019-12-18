function argsString(str, args) {
    return args.reduce((prev, current) => {
        return prev.replace('{}', current);
    }, str);
}

module.exports = argsString;