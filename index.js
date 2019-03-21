const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('index'))
  // --------------------------csc320 ------------------------------------
  .get('/csc32020180101seo', (req, res) => res.render('questions/csc320/csc320'))
  .get('/csc32020180101seo1', (req, res) => res.render('questions/csc320/csc320two'))
  .get('/csc32020180101seo2', (req, res) => res.render('questions/csc320/csc320three'))

// --------------------------csc332 ------------------------------------

.get('/error', (req, res) => res.render('questions/unprocessed'))
.get('/terms', (req, res) => res.render('terms'))
.get('/pinfinder', (req, res) => res.render('pinFinder'))
.get('/csc1', (req, res) => res.render('cscexamtimetable'))
.get('/test260219', (req, res) => res.render('others/toyintest260219'))



.get('/csc3322018010101seo1', (req, res) => res.render('questions/csc322/csc332'))
.get('/csc3322018010102seo1', (req, res) => res.render('questions/csc322/csc332two'))
.get('/csc3322018010103seo1', (req, res) => res.render('questions/csc322/csc332three'))

// --------------------------------csc340-------------------------

.get('/csc340a', (req, res) => res.render('questions/csc340/csc340a'))
.get('/csc340b', (req, res) => res.render('questions/csc340/csc340b'))
.get('/csc340c', (req, res) => res.render('questions/csc340/csc340c'))

// --------------------------------csc328-------------------------

.get('/csc328a', (req, res) => res.render('questions/csc328/csc328a'))
.get('/csc328b', (req, res) => res.render('questions/csc328/csc328b'))
.get('/csc328c', (req, res) => res.render('questions/csc328/csc328c'))

// --------------------------------csc326-------------------------

.get('/csc326a', (req, res) => res.render('questions/csc326/csc326a'))
.get('/csc326b', (req, res) => res.render('questions/csc326/csc326b'))
.get('/csc326c', (req, res) => res.render('questions/csc326/csc326c'))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
