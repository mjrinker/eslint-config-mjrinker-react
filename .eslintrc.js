/* eslint-disable no-magic-numbers */
module.exports = {
  'env': {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  'parserOptions': {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  'plugins': [
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  'rules': {
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/autocomplete-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    'jsx-a11y/no-onchange': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    'max-lines-per-function': [
      'error', {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'error',
    'react/forbid-elements': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [
      'error', 2, {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': ['error', {
      ignoreCase: true,
      callbacksLast: true,
    }],
    'react/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error', {
        'arrow': 'parens-new-line',
        'assignment': 'parens-new-line',
        'condition': 'parens-new-line',
        'declaration': 'parens-new-line',
        'logical': 'parens-new-line',
        'prop': 'parens-new-line',
        'return': 'parens-new-line',
      },
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  'settings': { react: { version: 'detect' } },
};
