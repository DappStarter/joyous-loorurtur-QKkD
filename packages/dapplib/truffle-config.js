require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy renew sad unusual install neck bubble tornado'; 
let testAccounts = [
"0x16adeb38d05206f28794b431795a677e45b5835aee1e2a7c1005a7d1d71fb38f",
"0x7c1f948e7a1514b63002ce2171e94f1c665acb2ab74bc76964c83bb08514a957",
"0x361c24057d568678c0a068ef37fbe8b802af0b151c7179ad0fe4758dd7f5b50e",
"0x75183c5e4762ec2270f6c7cb22e04e4646e151bfca9cf3f2625abd3269e173be",
"0xb6e15b59772928521b0bad0b0eb30ca43f64a7b6605458abb3b2da09f389eb33",
"0x579a79349d5ff8437f5a451fb4bf265b6de02b116e09ba56375620b0c57d596f",
"0x5a87e6733895b1fea4c4d4d445837c23fccfb22d77c666cac7a2cc5df4e25a23",
"0x1aa03ef0d0a833633421cb5892fa654d30e5317d29ad9a323c44e790b3a9668c",
"0xc1e2eadcbe586fa6fea5ab45131ee2d01b8e3a77711864a3307f4f51813b8e91",
"0xc4ce735db936e3c82a727ab1c271fe719f9822098258432b7db3338010c1ea76"
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
            version: '^0.8.0'
        }
    }
};

