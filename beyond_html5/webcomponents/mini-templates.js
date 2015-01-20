'use strict';

function templateReplace(data) {
  return function(text, property) {
    var out = data[property];
    if (typeof out === 'undefined') {
      out = text;
    }
    return out;
  }
}

var Templates = {
  append: function(container, data, template) {
    template = template || container.querySelector('template');
    // This is a document fragment
    var templateFragment = template.content;

    // We import the root element and then clone
    var newElem = document.importNode(
                templateFragment.firstElementChild, true);
    var inner = newElem.innerHTML;

    var pattern = /#(\w+[\w.]*)#/g;
    // Replace function
    var replaceFunction = templateReplace(data);
    var ninner = inner.replace(pattern, replaceFunction);

    newElem.innerHTML = ninner;

    var attrs = newElem.attributes;

    var total = attrs.length;
    for (var c = 0; c < total; c++) {
      var val = attrs[c].value;
      var nval = val.replace(pattern, replaceFunction);

      newElem.setAttribute(attrs[c].name, nval);
    }

    if (!newElem.id) {
      if (data.id) {
        newElem.id = data.id;
      }
    }

    container.appendChild(newElem);
  }
}
