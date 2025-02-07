module.exports = {
  "extends": ["prettier"],
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "camelcase": "off",
    "comma-dangle": ["error", "always-multiline"],
    "comma-style": [1, "last"],
    "curly": [1, "multi-line"],
    "eol-last": 1,
    "eqeqeq": 1,
    "linebreak-style": "off",
    "max-len": "off",
    "new-cap": "off",
    "no-array-constructor": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-new-object": 1,
    "no-plusplus": "off",
    "no-shadow-restricted-names": 1,
    "no-unused-vars": [1, {"args":"none"}],
    "no-var": "off",
    "padded-blocks": "off",
    "quotes": "off",
    "radix": 1,
    "semi": 2,
    "space-before-blocks": [1, "always"],
    "vars-on-top": "off"
  },
  "globals": {
    "THREE": true
  }
};
