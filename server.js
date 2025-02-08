const express = require('express')

const cron = require('node-cron')

const app = express()

app.get('/', (req, res) => {
  console.log('hello world!')
  res.send('Hello, World!')
})

cron.schedule('0 */20 * * * *', () => {
  console.log('running a task every 20 minutes')
})

app.listen('3000', (req, res) => {
  console.log('Server is running on port 3000')
})
