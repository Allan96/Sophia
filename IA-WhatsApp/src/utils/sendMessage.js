//TWILLO
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

module.exports = function SendMessage(message, res, number) {
    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: message,
            to: number
        })
        .then(message => console.log(message.sid));
}