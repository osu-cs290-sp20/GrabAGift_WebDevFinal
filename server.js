const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const Api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/:keyword', async (req, res) => {
  const response = await Api.getByKeywords(req.params.keyword)
  const items = response.map(i => ({
    ...i,
    image: i.pictureURLLarge || i.galleryURL,
  }))

  res.render('results', { items })
})

app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
