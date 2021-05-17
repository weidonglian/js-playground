const axios = require('axios');

async function request_tyson(description) {
    console.log("==>begin request tyson:" + description);
    try {
        const respSoundzone = await axios.get('http://localhost:8888/soundzone.json');
        console.log(respSoundzone.statusText);
        const respPlayback = await axios.get('http://localhost:8888/playback.json');
        console.log(respPlayback.statusText);
    } catch (error) {
        console.log("error:" + error);
    }
    console.log("<==end request tyson:" + description);
}

var counter = 0;
setInterval(async()=>{
    counter++;
    await request_tyson("Calling " + counter + " times");
}, 400);