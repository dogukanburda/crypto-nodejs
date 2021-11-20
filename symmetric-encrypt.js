const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

//Cipher

const message = 'skills, you can demonstrate';
const key = randomBytes(32);

//initialization vector
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);
const encryptedMessage = cipher.update(message,'utf-8','hex') + cipher.final('hex');

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log(encryptedMessage);
console.log(decryptedMessage);
