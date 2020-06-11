const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const Api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

let trending = {}
function updateTrending(items) {
  items.forEach(i => {
    if (trending[i.itemId]) {
      trending[i.itemId].score += 1;
    } else {
      trending[i.itemId] = {
        ...i,
        score: 1,
      };
    }
  });

  const newTrending = {};
  const newTrendingPairs = Object.entries(trending).sort((a, b) => b[1].score - a[1].score).slice(0, 50);
  newTrendingPairs.forEach(i => newTrending[i[0]] = i[1]);

  trending = newTrending;
}

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('aboutUs');
});

app.get('/trending', (req, res) => {
  res.render('trending', { items: Object.values(trending).sort((a, b) => b.score - a.score) });
});

app.get('/gifts/:keyword', async (req, res) => {
  const response = await Api.getByKeywords(req.params.keyword)
  const items = response.map(i => ({
    ...i,
    image: i.pictureURLLarge || i.galleryURL,
  }))

  updateTrending(items);

  res.render('results', { items })
})

app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
