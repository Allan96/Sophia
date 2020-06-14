const fetch = require("node-fetch");

module.exports = {
    async index(req, res) {
        const response = await fetch('https://sheet.best/api/sheets/133b59dc-be00-49a7-9008-31f07c8987ac');
        const motoristas = await response.json();
        res.json(motoristas)
    }
};