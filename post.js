var ghpages = require('gh-pages');
 
ghpages.publish('box-shadow-generator/build', {
    repo: 'https://github.com/jecrs687/miniProjects.git',
    message: 'Auto-generated commit with gh-pages',
    dest: 'box-shadow-generator',
    branch:'gh-pages'
  }, function(err) {console.log(err)});