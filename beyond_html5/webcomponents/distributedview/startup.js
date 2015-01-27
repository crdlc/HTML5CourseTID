'use strict';

function loadView1() {
  var view = document.getElementById('notes-list-view');
  view.load().then(function() {
    view.querySelector('[data-type="list"] header').textContent =
                                                          'This is my list!';
    MyTest.test();
  });
}

function loadView2() {
  document.getElementById('notes-form-view').load();
}
