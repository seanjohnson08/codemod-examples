// jscodeshift can take a parser, like "babel", "babylon", "flow", "ts", or "tsx"
// Read more: https://github.com/facebook/jscodeshift#parser

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const program = j(file.source);

  // Main program
  program.find(j.TSInterfaceDeclaration).forEach((path) => {
    if (!path.node.id.name.startsWith('T')) {
      replaceTypeReferences(path.node.id.name);
      path.node.id.name = 'T' + path.node.id.name;
    }
  });

  // Helper function to replace references once an interface reference is found
  function replaceTypeReferences(typeName) {
    program
      .find(j.TSTypeReference, { typeName: { name: typeName } })
      .forEach((path) => {
        if (!path.node.typeName.name.startsWith('T')) {
          path.node.typeName.name = 'T' + path.node.typeName.name;
        }
      });
  }

  return program.toSource();
};

module.exports.parser = 'ts';
