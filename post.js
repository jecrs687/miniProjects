var ghpages = require('gh-pages');
 
ghpages.publish('border_creator/build', {
    repo: 'https://github.com/jecrs687/miniProjects.git',
    message: 'Auto-generated commit with gh-pages',
    dest: 'border-creator',
    branch:'gh-pages'
  }, function(err) {console.log(err)});