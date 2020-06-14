const fetch = require("node-fetch");
const sendMessage = require('./sendMessage');

module.exports = function RegisterDriver(number, res) {
    const data = [{ whatsapp: number }];

    fetch('https://sheet.best/api/sheets/133b59dc-be00-49a7-9008-31f07c8987ac', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(r => r.json())
        .then(response => {
            sendMessage(`Oiii! 😍
Me chamo Sophia e a partir de hoje sou sua Agente Pessoal de Saúde! 😃
            
Meu trabalho é fazer com que você cuide melhor da sua saúde! Lembrando você de tomar seus remédios, agendar consultas e também dar algumas dicas bem bacanas! 
            
Agora, já que você conhece meu nome e sabe bastante sobre mim, me fale, como gosta de ser chamado? 🤔Por exemplo: Bino, Juliana, Zé, Rafaela…
            `, res, number);
        })
        .catch(error => { console.log(error); });
}