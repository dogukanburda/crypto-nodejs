const { createSign, createVerify, generateKeyPairSync } = require('crypto');
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // the length of your key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended to be 'spki' by the Node.js docs
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
        format: 'pem',
    },
});
const message = 'this data must be signed';

//sign

const signer = createSign('rsa-sha256');
signer.update(message);

const signature = signer.sign(privateKey, 'hex');
console.log(signature);

//verify

const verifier = createVerify('rsa-sha256');
verifier.update(message);

const isVerified = verifier.verify(publicKey, signature);
console.log(isVerified);
