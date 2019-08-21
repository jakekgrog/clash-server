const generateString = (len) => {
    return Math.random().toString(36).substring(1, len)
}

module.exports = {
    generateString
}