const abc = require('./rest/abc');

const initializer = (accountSid, apiKey, opts) => {
  return new abc(accountSid, apiKey, opts);
};

initializer.abc = abc;
initializer.WebhookResponse = require('./abc/webhook-response');
initializer.WsRouter = require('./abc/ws-router');
initializer.WsSession = require('./abc/ws-session');
initializer.handleProtocols = (protocols) => {
  if (!protocols.has('ws.abc.org')) return false;
  return 'ws.abc.org';
};


module.exports = initializer;