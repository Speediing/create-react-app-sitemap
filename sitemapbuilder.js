const fs = require('fs');
require('@babel/register')({
    'presets': [
      [
        '@babel/preset-env',
        { 'targets': { 'esmodules': true } }
      ],
      '@babel/preset-react'
    ],
    'plugins': [
      ['@babel/plugin-proposal-decorators', { 'legacy': true}],
      ['@babel/plugin-proposal-class-properties'],
      ['@babel/plugin-transform-modules-commonjs', {
        'allowTopLevelThis': true,
        'lazy': true
      }]
    ],
    'ignore': [
      /node_modules/
    ]
  });

const router = require('./src/App').default;
const Sitemap = require('react-router-sitemap').default;

(
	new Sitemap(router)
		.build('http://my-site.ru')
		.save('./build/sitemap.xml')
);
