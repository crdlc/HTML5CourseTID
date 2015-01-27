'use strict';

(function(exports) {
  exports.MyTest = {
    test: function() {
      console.log('form', document.currentScript.ownerDocument.querySelector('form-test'));
      console.log('list: ', document.currentScript.ownerDocument.querySelector('list-test'));
    }
  };
}(this));
