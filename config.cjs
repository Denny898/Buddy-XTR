// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;dNYACDQJ#pgSriHYY3tPpf7sEJqB4wbFMj_gUxsfBz52Yr1tWMHY",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : false, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'false' : false, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  ANTI_TEXT: process.env.ANTI_TEXT !== undefined ? process.env.ANTI_TEXT === 'false' : false,
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'false' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "DENBOY",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263789085533",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
