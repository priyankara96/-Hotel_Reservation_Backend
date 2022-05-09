var TeleSignSDK = require("telesignsdk");

const customerId = "FB538802-7C89-41F9-9DDF-408AE392162D";
const apiKey =
  "/H8jLw8FX2NWw/FGF/4USJq2YWf3BXZujsRXfcohLD4VToUNdXHw/VT4Ac0rdPoS7MPf2PPHH6np7g5JDHvd7w==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10 * 1000; // 10 secs

const client = new TeleSignSDK(
  customerId,
  apiKey,
  rest_endpoint,
  timeout // optional
  // userAgent
);

const phoneNumber = "94714739237";
const message = "You reservation is placed. See you soon.Kings Hotel";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
  if (error === null) {
    console.log(
      `Messaging response for messaging phone number: ${phoneNumber}` +
        ` => code: ${responseBody["status"]["code"]}` +
        `, description: ${responseBody["status"]["description"]}`
    );
  } else {
    console.error("Unable to send message. " + error);
  }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
