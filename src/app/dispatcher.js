const { Subject } = require('rxjs');

const dispatcher = () => new Subject()

module.exports = dispatcher
