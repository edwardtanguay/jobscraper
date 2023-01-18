import * as tools from './tools.js';

const html = await tools.getHtmlFromUrl(`https://www.get-in-it.de/jobsuche?thematicPriority=5`);

const jobs = tools.getJobsFromHtml(html);
tools.createFile('jobs.json', JSON.stringify(jobs, null, 2));


