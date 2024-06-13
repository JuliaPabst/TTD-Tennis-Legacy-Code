module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/__tests__'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  