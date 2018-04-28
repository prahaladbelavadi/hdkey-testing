var HDKey = require('hdkey')

var key = 'xprvA2nrNbFZABcdryreWet9Ea4LvTJcGsqrMzxHx98MMrotbir7yrKCEXw7nadnHM8Dq38EGfSh6dqA9QWTyefMLEcBYJUuekgW4BYPJcr9E7j'
var hdkey = HDKey.fromExtendedKey(key)
        console.log("HD Extended from: " + key + "\n");
        console.log("hdkey.versions.private: " + hdkey.versions.private)
        console.log("hdkey.versions.public: " + hdkey.versions.public)
        console.log("hdkey.depth:" + hdkey.depth)
        console.log("hdkey.parentFingerprint: " + hdkey.parentFingerprint)
        console.log("hdkey.index: " + hdkey.index)
        console.log("hdkey.chainCode Hex: " + hdkey.chainCode.toString('hex'))
        console.log("hdkey.privateKey Hex: " + hdkey.privateKey.toString('hex'))
        console.log("hdkey.publicKey Hex: " + hdkey.publicKey.toString('hex'))
        console.log("hdkey.identifier Hex: " + hdkey.identifier.toString('hex'))
