const ioc = require('../app/ioc');
const { filter } = require('rxjs/operators');

const receive = dispatcher$ => dispatcher$
  .pipe(
    filter(a => a && a.type === 'RECEIVE')
  )
  .subscribe(a => {
    console.log("   Message received...");
    console.log("      ", a.payload);
    console.log("   Current State: ", ioc.get("state$"))
    ioc.get("state$").light = a.payload.light;
    console.log("   Changed State: ", ioc.get("state$"))
    const responseMessage = { date: new Date(), message: "State updated!" };
    console.log("\nCalling SEND_RESPONSE...")
    dispatcher$.next({ type: 'SEND_RESPONSE', payload: responseMessage });
  })

module.exports = receive
