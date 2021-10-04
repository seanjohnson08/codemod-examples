// jscodeshift can take a parser, like "babel", "babylon", "flow", "ts", or "tsx"
// Read more: https://github.com/facebook/jscodeshift#parser
// Press ctrl+space for code completion

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const program = j(file.source);
  const blockStatements = program.find(j.BlockStatement);

  blockStatements.forEach((path, i) => {
    path.node.body.unshift(
      j.expressionStatement(
        j.assignmentExpression(
          '=',
          j.memberExpression(j.identifier('i'), j.literal(i)),
          j.literal(true)
        )
      )
    );
  });

  program
    .find('Program')
    .get(0)
    .node.body.unshift(
      j.variableDeclaration('const', [
        j.variableDeclarator(
          j.identifier('i'),
          j.newExpression(j.identifier('Array'), [
            j.literal(blockStatements.length),
          ])
        ),
      ])
    );

  return program.toSource();
};

module.exports.parser = 'ts';
