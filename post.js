var ghpages = require('gh-pages');

ghpages.publish('bin2dec/build', {
    repo: 'https://github.com/jecrs687/miniProjects.git',
    message: 'Auto-generated commit with gh-pages',
    dest: 'bin2dec',
    branch:'gh-pages'
  }, function(err) {console.log(err)});