### HDkey BIP32 testing

Original repo: https://github.com/cryptocoinjs/hdkey

This implementation requires python v2.5.0 & < 3.0.0



For switching python envs using anaconda:
- https://conda.io/docs/user-guide/tasks/manage-environments.html
- https://conda.io/docs/user-guide/tasks/manage-python.html
- https://conda.io/docs/user-guide/tasks/manage-environments.html#activating-an-environment

On Hardened Keys:
- [Reference: Bitoin talk forum](https://bitcointalk.org/index.php?topic=679487.0)


- [Chain Documentation^*^](https://chain.com/docs/1.1/protocol/specifications/chainkd#introduction)
- [EdDSA Wiki](https://en.wikipedia.org/wiki/EdDSA)
- [Some edwards paper; has examples tho](https://tools.ietf.org/html/draft-irtf-cfrg-eddsa-08)
-

##### [Stack overflow answer on Key derivation in HD wallets using the extended private key vs hardened derivation](https://bitcoin.stackexchange.com/questions/62533/key-derivation-in-hd-wallets-using-the-extended-private-key-vs-hardened-derivati)
- [HD node fixtures JSON](https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/test/fixtures/hdnode.json)
  - provides a hardened == true/false option
  - [Bitcoin wallets 1](https://steemit.com/bitcoin/@sevcsik/working-with-bitcoin-hd-wallets-key-derivation)
  - [Richard Kiss Blog](http://blog.richardkiss.com/?p=313)
  - [Hardened Keys](https://bitcoin.org/en/developer-guide#hardened-keys)
  - [Blue ledger password manager app](https://github.com/belavadi/blue-app-password-manager)
- [Bitcoin JS line 50 integration ](https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/test/integration/bip32.js#L50)
- [BItcoin Magazine links to pybitcoin tools(https://bitcoinmagazine.com/articles/deterministic-wallets-advantages-flaw-1385450276/)
- [Programming blocjchain book](https://programmingblockchain.gitbooks.io/programmingblockchain/content/key_generation/key_generation.html#dark-wallet)
- [Derive bip 44 hardened addressses from xpubs issue ](https://github.com/bitcoinjs/bitcoinjs-lib/issues/914)
- https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses
