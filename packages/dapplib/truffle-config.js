require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain cluster hidden arctic border secret'; 
let testAccounts = [
"0x86babc27781c0aec8b882a3a18b34b97c42486d2e3205f821717e4b373dd0549",
"0xa6a10a425c5fd6a142e74ad220490926a7efb9daae27cf1fab08d5d6a7c35dbf",
"0xeb083047b81e6cee6125b66d4a298f6e556d1e6f06eb3b526e3f2c4eff0e37d9",
"0xaf75cceaab796d06c1b214639abf6b55df727af9f74cb7d067979a5019b5ec42",
"0x30e6556c88ab0759751aa5eca351e3ab4c5db6ed563caa73924fbc41bc2ffc12",
"0xabdafe26c9fce86c86ca24febbff8e3d8877638508d9e020c33283bba4465e09",
"0x33d14288b49bca16d1901ed78a6430f588818b6e84bc84bdfbd4c827eb4da187",
"0xed23343d8bceedaa151f26dae7ff7a7bf9cd463427df9e44ed5075f87f07b534",
"0xf3eedfbd1e9f17f3be59a6777ddda93e4b7d8b05609e82f36c74c045dffc3aed",
"0x69af3b062616fdb99af296d91d94757b9f2c59475a21b004d1c8ea722b934fc3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
