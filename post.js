var ghpages = require('gh-pages');
 
ghpages.publish('border-creator', {
    dest: 'static/border-creator'
  }, function(err) {console.log(err)});