const express = require('express');
const bodyPasrser = require('body-parser');

const path = require('path');
const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyPasrser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));
app.use(express.static(path.join(rootDir, 'views')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: '404' });
});

app.listen(5000);
