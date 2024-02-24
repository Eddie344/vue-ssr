import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    singleQuote: true,
    trailingComma: 'es5',
    tabWidth: 2,
    useTabs: false,
    semi: true,
    jsxBracketSameLine: false,
  },
});
