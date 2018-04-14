var HDKey = require('hdkey')

var seed = 'a0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af'


function time1(){
      var hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'))
      console.log("time1",hdkey.privateExtendedKey)

      console.log("time1",hdkey.publicExtendedKey)
    }

function time2(){
      var hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'))
      console.log("time2:",hdkey.privateExtendedKey)

      console.log("time2",hdkey.publicExtendedKey)
    }

function time3(){
  var key = 'xprvA2nrNbFZABcdryreWet9Ea4LvTJcGsqrMzxHx98MMrotbir7yrKCEXw7nadnHM8Dq38EGfSh6dqA9QWTyefMLEcBYJUuekgW4BYPJcr9E7j'
  var hdkey = HDKey.fromExtendedKey(key)
  console.log(key);
  console.log("HD key from extended Private key",toString(hdkey,"hex"));
}

function time4(){
  var key = 'xprvA2nrNbFZABcdryreWet9Ea4LvTJcGsqrMzxHx98MMrotbir7yrKCEXw7nadnHM8Dq38EGfSh6dqA9QWTyefMLEcBYJUuekgW4BYPJcr9E7j'
  var hdkey = HDKey.fromExtendedKey(key)
  console.log(key);
  console.log("HD key from extended public key",);
}


time1()
time2()
time3()
time4()
