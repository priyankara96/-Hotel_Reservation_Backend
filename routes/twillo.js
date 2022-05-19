const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = {
    sendSmss: async () => {

        console.log("Payment successful")

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13202787607',
     to: '+94714739237'
   })
  .then(message => console.log(message.sid));
}
}
