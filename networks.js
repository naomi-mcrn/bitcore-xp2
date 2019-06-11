var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('d9299602'),
  addressVersion: 75,
  privKeyVersion: 55,
  P2SHVersion: 13,
  bech32Prefix: 'xpc',
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('00000732d7b120985c2051ccc37d1cb55057526fdbeba9666d7760fb51328ecf'),
    merkle_root: hex('fcea3047f39357950b756ed7a3ff4d1344998994d1dc5ea773409f595d9a147c'),
    height: 0,
    nonce: 53347,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1557039007,
    bits: 504365040,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 19324
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fc87bac0'),
  addressVersion: 138,
  privKeyVersion: 239,
  P2SHVersion: 138,
  bech32Prefix: 'txpc',
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('00000000f04d3bdebf907f79b4b096a05d763ac890612202ff9c9cc685221617'),
    merkle_root: hex('daa610662c202dd51c892e6ff17ac1812a3ddcb998ec4923a3a315c409019739'),
    height: 0,
    nonce: 3632110353,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1540301756,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 18798
};
