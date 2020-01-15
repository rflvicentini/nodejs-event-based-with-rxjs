
const { filter } = require('rxjs/operators');

const sendResponse = dispatcher$ => dispatcher$
  .pipe(
    filter(a => a && a.type === 'SEND_RESPONSE')
  )
  .subscribe(a => {
    console.log("   Sending message:");
    console.log("      ", a.payload);
    console.log("   Message sent successfully!");
  })

module.exports = sendResponse
