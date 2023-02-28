const Jambonz = require('./rest/abc');

const initializer = (accountSid, apiKey, opts) => {
  return new Jambonz(accountSid, apiKey, opts);
};

initializer.Jambonz = Jambonz;
initializer.WebhookResponse = require('./abc/webhook-response');
initializer.WsRouter = require('./abc/ws-router');
initializer.WsSession = require('./abc/ws-session');
initializer.handleProtocols = (protocols) => {
  if (!protocols.has('ws.jambonz.org')) return false;
  return 'ws.jambonz.org';
};


module.exports = initializer;