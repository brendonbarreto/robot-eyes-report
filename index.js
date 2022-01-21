#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

const getFailedTests = require('./getFailedTests')
const runServer = require('./runServer')

program
   .command('report')
   .description('Open report')
   .option('-p, --port <port-number>', 'Run report on specific port')
   .action((options) => {
     report(options.port)
})

const report = port => {
   const failedTests = getFailedTests()
   runServer(testOutput, port)
 }

program.parse(process.argv)
