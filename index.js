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
.get('/csc3322018010101seo1', (req, res) => res.render('questions/csc322/csc332'))
.get('/csc3322018010102seo1', (req, res) => res.render('questions/csc322/csc332two'))
.get('/csc3322018010103seo1', (req, res) => res.render('questions/csc322/csc332three'))



  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
