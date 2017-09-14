'use strict';

import 'funny-text-wrapper';

class UserGroupHelloWorld {
	constructor() {
	    this._loadCss('/o/user-group-js-hello-world/js/bower_components/funnyText.js/jquery.funnyText.css');

	    this._initText();
	  } // constructor()

	  _loadCss(cssURL) {
		  var cssLink = document.createElement('link');
		  cssLink.rel = 'stylesheet';
		  cssLink.type = 'text/css';
		  cssLink.href = cssURL;

		  document.head.insertBefore(cssLink, document.head.querySelector("#liferayThemeCSS"));
	  }

	  _initText() {
		  jQuery('.hello-world-text').funnyText();
	  }
}

export default UserGroupHelloWorld;