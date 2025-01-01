const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zrpV0RxB#kFBFLX_om95xPuaNTo3gfX1sSL66NCSc2n6StzeLZUY",
MONGODB: process.env.MONGODB || "mongodb://mongo:zVaTZTYXwMZzdGDKYLJzjtBPHJASnnyW@junction.proxy.rlwy.net:38558"
};
