const ioc = require('./app/ioc');
const dispatcher = require('./app/dispatcher');
const loadStreams = require('./streams');

const dispatcher$ = dispatcher();
loadStreams(dispatcher$);
ioc.register('dispatcher$', dispatcher$);

ioc.register('state$', {});

console.log("\nCalling RECEIVE...")
ioc.get('dispatcher$').next({ type: 'RECEIVE', payload: { light: "on" } });

console.log("\n")