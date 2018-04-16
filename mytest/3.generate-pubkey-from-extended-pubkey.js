var HDKey = require('hdkey')

function fromExtendedPubKey(){
  var key = 'xpub6FnCn6nSzZAw5Tw7cgR9bi15UV96gLZhjDstkXXxvCLsUXBGXPdSnLFbdpq8p9HmGsApME5hQTZ3emM2rnY5agb9rXpVGyy3bdW6EEgAtqt'
  var hdkey = HDKey.fromExtendedKey(key)
  console.log("Private key from Extended Private Key:",key);
}

fromExtendedPubKey()
