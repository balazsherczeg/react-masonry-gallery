const neutrino = require('neutrino');

// module.exports = {
//   ...neutrino().eslintrc(),
//   "rules": {
//     ...neutrino().eslintrc().rules,
//     "arrow-parens": ["error", "always"],
//     "camelcase": ["error", {allow: ["UNSAFE_componentWillReceiveProps"]}],
//     "import/no-extraneous-dependencies": [0],
//     "import/no-unresolved": 0,
//     "import/prefer-default-export": 0,
//     "no-bitwise": 0,
//     "no-floating-decimal": 0,
//     "no-mixed-operators": 0,
//     "no-multi-assign": 0,
//     "no-plusplus": [0],
//     "no-underscore-dangle": 0,
//     "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
//     "object-curly-newline": 0,
//     "object-curly-spacing": ["error", "never"],
//     "react/destructuring-assignment": [0],
//     "react/forbid-prop-types": [2, { "forbid": ["any"]}],
//     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
//     "react/jsx-props-no-spreading": 0,
//     "react/no-access-state-in-setstate": 0,
//     "react/no-array-index-key": 0,
//     "react/state-in-constructor": 0,
//     'babel/object-curly-spacing': [ 'error', 'never' ]
//   },
//   "globals": {
//     ...neutrino().eslintrc().globals,
//     "requestAnimationFrame": "readonly",
//     "__DEV__": "readonly",
//     "fetch": false
//   }
// };

module.exports = neutrino().eslintrc();