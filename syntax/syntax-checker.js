const fs = require('fs');
const ohm = require('ohm-js');

const grammar = ohm.grammar(fs.readFileSync('syntax/uwuScript.ohm'));

module.exports = text => grammar.match(text).succeeded();