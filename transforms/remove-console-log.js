// jscodeshift can take a parser, like "babel", "babylon", "flow", "ts", or "tsx"
// Read more: https://github.com/facebook/jscodeshift#parser

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.CallExpression, {
      callee: {
        object: {
          name: 'console',
        },
        property: {
          name: 'log',
        },
      },
    })
    .remove()
    .toSource();
};

module.exports.parser = 'ts';
