var __BOWER_COMPONENTS_PATH__ = MODULE_PATH + '/js/bower_components/';

Loader.addModule({
  name        : 'funny-text',
  anonymous   : true,
  dependencies: [],
  exports     : 'jQuery.fn.funnyText',
  path        : __BOWER_COMPONENTS_PATH__ + 'funnyText.js/jquery.funnyText.min'
});

define('funny-text-wrapper', ['funny-text'],
  function(funnyText){
    return funnyText;
  }
);