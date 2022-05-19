var TeleSignSDK = require("telesignsdk");

module.exports = {
  sendSms: async () => {
    
  const customerId = "C43FE0DB-04CC-482E-9B2C-0651E6E2EFF5";
  const apiKey = "0PUKLwVUkwkQxOz8nwklg6JEAbKvKkTBfHiKtCPFyRe4bxyV7SumnvG38KOnVku4ZTZsbpgeVyXFibKPSnliEw==";
  const rest_endpoint = "https://rest-api.telesign.com";
  const timeout = 10*1000; // 10 secs

  const client = new TeleSignSDK( customerId,
      apiKey,
      rest_endpoint,
      timeout // optional
      // userAgent
  );

  const phoneNumber = "94714739237";
  const message = "You're scheduled for a dentist appointment at 2:30PM.";
  const messageType = "ARN";

  console.log("## MessagingClient.message ##");

  function messageCallback(error, responseBody) {
      if (error === null) {
          console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
              ` => code: ${responseBody['status']['code']}` +
              `, description: ${responseBody['status']['description']}`);
      } else {
          console.error("Unable to send message. " + error);
      }
  }
  client.sms.message(messageCallback, phoneNumber, message, messageType);
  },
};
