import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './src/components/CodeBlock';
import './src/styles/global.scss';
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('prismjs/themes/prism-twilight.css');

const component = {
  pre: CodeBlock,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};
