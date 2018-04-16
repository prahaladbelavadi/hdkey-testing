var HDKey = require('hdkey')

var seed = 'a0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af'


function genExtendedKeyfromMasterSeed(){
      var hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'))
      console.log("From Seed;Ext Key;PRV:",hdkey.privateExtendedKey)
      console.log("From Seed;Ext Key;PUB:",hdkey.publicExtendedKey)
    }

function fromExtendedPrivKey(){
  var key = 'xprvA2nrNbFZABcdryreWet9Ea4LvTJcGsqrMzxHx98MMrotbir7yrKCEXw7nadnHM8Dq38EGfSh6dqA9QWTyefMLEcBYJUuekgW4BYPJcr9E7j'
  var hdkey = HDKey.fromExtendedKey(key)
  console.log("From Ext Key;PRV:",key);
}

function fromExtendedPubKey(){
  var key = 'xpub6FnCn6nSzZAw5Tw7cgR9bi15UV96gLZhjDstkXXxvCLsUXBGXPdSnLFbdpq8p9HmGsApME5hQTZ3emM2rnY5agb9rXpVGyy3bdW6EEgAtqt'
  var hdkey = HDKey.fromExtendedKey(key)
  console.log("From Ext Key;PUB:",key);
}

function convtoJson(){
  var seed = 'fffcf9f6f3f0edeae7e4e1dedbd8d5d2cfccc9c6c3c0bdbab7b4b1aeaba8a5a29f9c999693908d8a8784817e7b7875726f6c696663605d5a5754514e4b484542'
  var hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'))
  HDkeytojson = hdkey.toJSON()
  console.log("JSON output:"+"\n", HDkeytojson)
}

function convtoJson2(){
  var key = 'xpub6FnCn6nSzZAw5Tw7cgR9bi15UV96gLZhjDstkXXxvCLsUXBGXPdSnLFbdpq8p9HmGsApME5hQTZ3emM2rnY5agb9rXpVGyy3bdW6EEgAtqt'
  var hdkey = HDKey.fromExtendedKey(key)
  console.log(hdkey.toJSON());
}

genExtendedKeyfromMasterSeed()
fromExtendedPrivKey()
fromExtendedPubKey()
convtoJson()
convtoJson2()
