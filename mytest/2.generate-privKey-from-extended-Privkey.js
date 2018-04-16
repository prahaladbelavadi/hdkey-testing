var HDKey = require('hdkey')

function fromExtendedPrivKey(){
  var key = 'xprvA2nrNbFZABcdryreWet9Ea4LvTJcGsqrMzxHx98MMrotbir7yrKCEXw7nadnHM8Dq38EGfSh6dqA9QWTyefMLEcBYJUuekgW4BYPJcr9E7j'
  var hdkey = HDKey.fromExtendedKey(key)
  console.log("Private key from Extended Private Key:",key);
}

fromExtendedPrivKey()
