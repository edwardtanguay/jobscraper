import * as tools from './tools.js';

const html = await tools.getHtmlFromUrl(`https://www.get-in-it.de/jobsuche`);
// tools.createFile('getinit.html', html);

const jobs = tools.getJobsFromHtml(html);
console.log(`${jobs.length} items`);
jobs.forEach(job => {
	console.log(job)
})
