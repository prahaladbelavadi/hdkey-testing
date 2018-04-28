var HDKey = require('hdkey')

// m/0/2147483647'/1/2147483646'/2

var key = 'xprvA2nrNbFZABcdryreWet9Ea4LvTJcGsqrMzxHx98MMrotbir7yrKCEXw7nadnHM8Dq38EGfSh6dqA9QWTyefMLEcBYJUuekgW4BYPJcr9E7j'
var hdkey = HDKey.fromExtendedKey(key)

function keyType(key){
  if (key.slice(0,4)=='xprv'){
    return "Private Key"
  }if (key.slice(0,4)=='xpub') {
    return "Public Key"
  }
}

        console.log("HD Extended from " + keyType(key)+ ": "+ key + "\n");
        console.log("hdkey.versions.private: " + hdkey.versions.private)
        console.log("hdkey.versions.public: " + hdkey.versions.public)
        console.log("hdkey.depth:" + hdkey.depth)
        console.log("hdkey.parentFingerprint: " + hdkey.parentFingerprint)
        console.log("hdkey.index: " + hdkey.index)
        console.log("hdkey.chainCode Hex: " + hdkey.chainCode.toString('hex'))
        console.log("hdkey.privateKey Hex: " + hdkey.privateKey.toString('hex'))
        console.log("hdkey.publicKey Hex: " + hdkey.publicKey.toString('hex'))
        console.log("hdkey.identifier Hex: " + hdkey.identifier.toString('hex'))
