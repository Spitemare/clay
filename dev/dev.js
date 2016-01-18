'use strict';

window.returnTo = '$$RETURN_TO$$';
window.clayConfig = require('./config.js');
window.claySettings = {};
window.customFn = require('./custom-fn.js');

var platform = window.navigator.userAgent.match('Android') ? 'android' : 'ios';
document.documentElement.classList.add('platform-' + platform);

window.expand = function(obj) {
  obj.size = 5;
};

function unexpand(obj) {
  obj.size = 1;
}
