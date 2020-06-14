const fetch = require("node-fetch");
const registerDriver = require('../utils/registerDriver');
const sendMessage = require('../utils/sendMessage');
const putDriver = require('../utils//putDriver');
module.exports = {
    async index(req, res) {
        const whatsapp = req.body;
        const response = await fetch('https://sheet.best/api/sheets/133b59dc-be00-49a7-9008-31f07c8987ac');
        const motoristas = await response.json();
        let motorista = await motoristas.filter((moto) => {
            return moto.whatsapp == whatsapp.From;
        });

        if (motorista.length == 0) {
            registerDriver(whatsapp.From, res);
        } else if (!motorista[0].name) {
            putDriver(whatsapp.From, { name: whatsapp.Body, });
            sendMessage(`Salve salve, ${ whatsapp.Body }, prazer em conhecer você! Seremos ótimos amigos! Agora, aquela pergunta difícil de responder. Quantos anos você tem, hein?`, res, whatsapp.From);

        } else if (!motorista[0].age) {
            putDriver(whatsapp.From, { age: whatsapp.Body, });
            sendMessage(`Legal!! Só ${ whatsapp.Body }? Tá jovem ainda! 😎Bora continuar, amigão, vamos nos conhecer melhor! Você possui algum tipo de doença crônica, qual?`, res, whatsapp.From);

        } else if (!motorista[0].disease) {
            putDriver(whatsapp.From, { disease: 'Hipertensão', });
            sendMessage(`Humm… ${ whatsapp.Body } é uma doença que precisa de um cuidado especial! Quero te ajudar a cuidar da sua saúde! Você tem tomado algum medicamento para controlá-la?
1) SIM 
*2) NÃO*
            `, res, whatsapp.From);

        } else if (!motorista[0].medicine) {
            putDriver(whatsapp.From, { medicine: whatsapp.Body, });
            sendMessage(`Oloco, ${ motorista[0].name } . Você sabia que a ${ motorista[0].disease } pode levar a danos permanentes e ocasionar graves problemas de saúde e até mesmo alterações na visão que podem levar à cegueira? Sabendo disso, bora começar a se cuidar, então?
*1) SIM*
2) NÃO`, res, whatsapp.From);
        } else if (!motorista[0].treatment) {
            putDriver(whatsapp.From, { treatment: whatsapp.Body, });
            sendMessage(`Massa!! Qual foi a última vez que você passou em um Cardiologista?
1) Menos de 1 ano
2) De 02 à 04 anos
3) Mais de 05 anos
            `, res, whatsapp.From);
        } else if (!motorista[0].last_query) {
            let last_query = 0;
            if (whatsapp.Body == 1) { let = 'Menos de 1 ano' } else if (whatsapp.Body == 2) { let last_query = 'De 02 à 04 anos' } else if (whatsapp.Body == 3) { let last_query = 'Mais de 05 anos' }
            putDriver(whatsapp.From, { last_query: last_query, });
            sendMessage(`Nossa, faz tempo, hein 😴. O cuidado com a saúde, nunca pode parar! Para isso, eu tenho vários amigos médicos que estão dispostos a cuidar da sua ${ motorista[0].disease } para melhorar sua qualidade de vida. 
            
Que tal agendar uma consulta com alguns deles, topa? 
*1) SIM*
2) NÃO`, res, whatsapp.From);
        } else if (!motorista[0].accept_query) {
            putDriver(whatsapp.From, { accept_query: whatsapp.Body, });
            sendMessage(`Uhuuuul! 🎉 Escolha uma das clínicas que eu conheço e confio:
*1) Clinica A* - (11) 9999-999 - www.site.com.br
*2) Clinica B* - (11) 9999-999 - www.site.com.br
*3) Clinica C* - (11) 9999-999 - www.site.com.br
            `, res, whatsapp.From);
        } else if (!motorista[0].clinic) {
            putDriver(whatsapp.From, { clinic: 'Clinica X', });
            sendMessage(`Perfeito! Qual dia?`, res, whatsapp.From);
        } else if (!motorista[0].query_day) {
            putDriver(whatsapp.From, { query_day: whatsapp.Body, });
            sendMessage(`Qual horário é melhor para você?`, res, whatsapp.From);
        } else if (!motorista[0].query_hour) {
            putDriver(whatsapp.From, { query_hour: whatsapp.Body, });
            sendMessage(`Beleza! Combinado, nós vemos na dia ${ motorista[0].query_day } às ${ whatsapp.Body }. 
O link para a consulta será http://telemedicina.allansouza.com/

Se precisar consultar novamente a data e horário só digitar *consulta*" Até lá!!`, res, whatsapp.From);
        } else if (whatsapp.Body == 'consulta' || whatsapp.Body == 'Consulta') {
            sendMessage(`Olá ${motorista[0].name}, sua consulta para a ${ motorista[0].disease } é no dia ${ motorista[0].query_day } às ${ motorista[0].query_hour }
            
O link para a consulta será http://telemedicina.allansouza.com/`, res, whatsapp.From);
        }


    }
};