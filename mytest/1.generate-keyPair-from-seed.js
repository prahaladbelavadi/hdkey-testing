var HDKey = require('hdkey')

var seed = 'a0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af'

function genExtendedKeyfromMasterSeed(){
      var hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'))
      console.log("Extended Private Key from Seed:",hdkey.privateExtendedKey)
      console.log("Extended Public Key from Seed",hdkey.publicExtendedKey)
    }

genExtendedKeyfromMasterSeed()
