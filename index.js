#!/usr/bin/env node

const Runner = require('./runner');
const runner = new Runner();

const run = async () => {
  const result = await runner.collectFiles(process.cwd());
  console.log(result);
};

run();
