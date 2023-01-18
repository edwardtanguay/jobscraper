import * as cheerio from 'cheerio';
import fs from 'fs';
import axios from 'axios';

export const getHtmlFromUrl = (url) => {
	return new Promise(async (resolve, reject) => {
		const response = await axios.get(url);
		const html = response.data;
		resolve(html);
	});
};

export const createFile = (fileName, content) => {
	fs.writeFileSync('output/' + fileName, content);
}

export const getJobsFromHtml = (html) => {
	return 'ok';
}

// const getHackerNewsData = (html) => {
// 	const data = [];
// 	const nextData = {};
// 	const $ = cheerio.load(html);
// 	$('table.itemlist tr td:nth-child(3)').each((i, elem) => {
// 		const pointText = $(elem)
// 			.parent()
// 			.next()
// 			.find('td.subtext')
// 			.find('span.score')
// 			.text();
// 		data.push({
// 			title: $(elem).text(),
// 			link: $(elem).find('a.storylink').attr('href'),
// 			pointText: qstr.isEmpty(pointText) ? '??? points' : pointText
// 		});
// 	});
// 	return data;
// };
