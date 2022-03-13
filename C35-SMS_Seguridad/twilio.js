import twilio from 'twilio'

//El código es demostrativo ya que no cuento con una cuenta en Twilio por lo tanto al ejecutar el código dará Error
const accountSid = 'xxxxxxxxxxx'
const authToken = 'xxxxxxxxxxx'

const cliente = twilio(accountSid, authToken)

try {
    const message = await cliente.messages.create({
        body: 'Hola soy un SMS desde Node.js!',
        from: '+1234567',
        to: '+5492644148548'
    })
    console.log(message);
} catch (e) {
    console.log(e);
}