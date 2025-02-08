const express = require('express')

const cron = require('node-cron')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// run cron job every  30 seconds

cron.schedule('* * * * *', () => {
  console.log('running a task every minute')
})

app.listen('3000', (req, res) => {
  console.log('Server is running on port 3000')
})
