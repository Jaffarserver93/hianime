// This file is automatically replaced by `vercel-build` at deploy time.
// It exists only so Vercel registers `/api/index` as a serverless function.
module.exports = (req, res) => {
  res.statusCode = 503;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Build step did not run. Bundle was not generated.');
};
