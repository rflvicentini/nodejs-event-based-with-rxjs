const receive = require('./receive');
const send = require('./send');

const loadStreams =  (dispatcher$) => {
  return [
    receive(dispatcher$),
    send(dispatcher$),
  ]
}

module.exports = loadStreams;