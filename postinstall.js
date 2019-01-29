const fs = require('fs');
if (fs.existsSync(`${__dirname}/build/Release/tera_crypto_native.node`))
  fs.copyFileSync(`${__dirname}/build/Release/tera_crypto_native.node`, `${__dirname}/bin/${process.arch}/tera_crypto_native_${process.platform}_${process.versions.modules}.node`);
