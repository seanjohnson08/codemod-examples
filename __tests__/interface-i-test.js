const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(
  __dirname,
  'transforms/interface-i',
  null,
  'typescript/interface-i',
  {
    parser: 'ts',
  }
);
