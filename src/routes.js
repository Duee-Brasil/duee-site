const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/home/home.js`)
  },
  {
    path: '/leoes',
    component: path.resolve(`src/pages/about/somosleoes.js`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/pages/404.js`)
  },
  {
    path: '/contato',
    component: path.resolve(`src/pages/contact/contact.js`)
  },
  {
    path: '/starbucks',
    component: path.resolve(`src/pages/starbucks2/starbucks2.js`)
  },
  {
    path: '/faxe',
    component: path.resolve(`src/pages/faxe2/faxe2.js`)
  },
  {
    path: '/madeinbrazil',
    component: path.resolve(`src/pages/made2/made2.js`)
  },
  {
    path: '/oito',
    component: path.resolve(`src/pages/oito/oito.js`)
  },
  {
    path: '/portfolio',
    component: path.resolve(`src/pages/portfolio/portfolio.js`)
  }

]