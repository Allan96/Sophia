const fetch = require("node-fetch");

module.exports = function putDriver(number, content) {
    fetch(`https://sheet.best/api/sheets/133b59dc-be00-49a7-9008-31f07c8987ac/whatsapp/*${number}*`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content),
        })
        .then(r => r.json())
}