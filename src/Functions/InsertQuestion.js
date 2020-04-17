const axios = require('axios');

const titel = "Op welke positie begon de mol bij de eerste opdracht? 45678910";
const answers = ["Het Stadion",
    "Het Centrale OV-station",
    "De Bios",
    "De Haven",
    "De Jachthaven",
    "De IKEA",
    "De Rooftop"];


axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/tracker-pxmwp/service/HTTP/incoming_webhook/insertQuestions', {
    titel: titel,
    array: answers
})