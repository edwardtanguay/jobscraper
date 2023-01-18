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
};

export const getJobsFromHtml = (html) => {
	const data = [];
	const $ = cheerio.load(html);
	$('a').each((i, elem) => {
		const href = String($(elem).attr('href')); // e.g. /jobsuche/p211338?start=0&limit=39&ref=Jobsuche
		if (href && href.startsWith('/jobsuche/')) {
			// find job title
			const elem2 = $(elem).next();
			const elem3 = $(elem2).next();
			const elem4 = $(elem3).find('div');
			// console.log('-----------------------');
			// console.log($(elem).html())
			// console.log('-----------------------');

			const elemWithTitle = $(elem).find('.d-block');
			const jobTitle = $(elemWithTitle).text();

			const parts = href.split('?');
			const urlSuffix = parts[0];
			const url = 'https://www.get-in-it.de' + urlSuffix;
			data.push({
				jobTitle,
				url
			});
		}
	});

	// $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
	// 	data.push({
	// 		title: $(elem).text(),
	// 		link: $(elem).find('a.storylink').attr('href')
	// 	});
	// });
	return data;
};
