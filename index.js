import * as tools from './tools.js';

const html = await tools.getHtmlFromUrl(`https://news.ycombinator.com`);

console.log(html);
