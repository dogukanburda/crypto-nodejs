const {createHash, randomBytes, scryptSync, createHmac} = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');   
}

let password = 'hi mom';
const hash1 = hash(password);
console.log(hash1)
// always returns the same value

// Introducing salting
function salting(password){
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password,salt,64);
    const store = {password: `${salt}:${hashedPassword}`}

    return hashedPassword
}

let password2 = 'hi mom';
const hash2 = salting(password2);
console.log(hash2)

//HMAC
const key = 'super-secret';
const message = 'boo';
const hmac = createHmac('sha256',key).update(message).digest('hex');
console.log(hmac);

const key2 = 'other-password';
const hmac2 = createHmac('sha256',key2).update(message).digest('hex');
console.log(hmac2);
