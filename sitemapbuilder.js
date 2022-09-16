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

// const router = require('./src/Routes').default;
// const Sitemap = require('react-router-sitemap').default;

// (
// 	new Sitemap(router)
// 		.build('http://my-site.ru')
// 		.save('./sitemap.xml')
// );
const sitemap = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!--
 This is the parent sitemap linking to additional sitemaps for products, collections and pages as shown below. The sitemap can not be edited manually, but is kept up to date in real time. 
-->
<sitemap>
<loc>
https://www.gymshark.com/sitemap_products_1.xml?from=6453246788&to=6805016412362
</loc>
</sitemap>
<sitemap>
<loc>https://www.gymshark.com/sitemap_pages_1.xml</loc>
</sitemap>
<sitemap>
<loc>https://www.gymshark.com/sitemap_collections_1.xml</loc>
</sitemap>
<sitemap>
<loc>https://www.gymshark.com/sitemap_blogs_1.xml</loc>
</sitemap>
</sitemapindex>`

fs.writeFileSync('static/sitemap.xml', sitemap);