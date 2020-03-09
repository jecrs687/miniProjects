var ghpages = require('gh-pages');

ghpages.publish('calculator/build', {
    repo: 'https://github.com/jecrs687/miniProjects.git',
    message: 'Auto-generated commit with gh-pages',
    dest: 'calculator',
    branch:'gh-pages'
  }, function(err) {console.log(err)});