
(function(win) {
  var doc = win.document;
  // console.log(doc);
  var docEl = doc.documentElement;
  // console.log(docEl);
  var tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    // console.log(width);
    var rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem
    docEl.style.fontSize = rem + 'px';
    // console.log(docEl.style.fontSize);
  }

  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 10);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 10);
    }
  }, false);

  refreshRem();
})(window);





