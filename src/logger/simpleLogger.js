const emojic = require('emojic'),
      colorIt = require('color-it')
      _ = require('lodash')

const out = (message, color) => {
    switch(color) {
        case 'GREEN':
            console.log(
                colorIt(_.join(message, ' '))
                    .green()
                    .toString()
            )
            break;
        case 'RED':
            console.log(
                colorIt(_.join(message, ' '))
                    .red()
                    .toString()
            )
            break
        default:
            console.log(
                _.join(message, ' ')
            )
    }
}

module.exports = {
    out
}