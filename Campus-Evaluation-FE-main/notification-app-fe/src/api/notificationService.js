const axios = require("axios");

async function getNotifications() {

    const response = await axios.get(API_URL,{
       headers:{
           Authorization:"Bearer YOUR_TOKEN"
       }
    });

    return response.data.notifications;
}

module.exports = {
    getNotifications
};