'use strict';

console.log('HOLA', document.currentScript);

(function(exports) {

  exports.MyTest = {
    test: function() {
      console.log('form:', document.currentScript && document.currentScript.ownerDocument.querySelector('form-test'));
      console.log('list:', document.currentScript && document.currentScript.ownerDocument.querySelector('list-test'));
    }
  };

}(window));
