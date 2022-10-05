import React from 'react';
import { Link } from 'gatsby';
import { PrismicProvider } from '@prismicio/react';

import './src/styles/global.scss';

const component = {
	pre: CodeBlock,
};

export const wrapRootElement = ({ element }) => {
	return <MDXProvider components={component}>{element}</MDXProvider>;
};
