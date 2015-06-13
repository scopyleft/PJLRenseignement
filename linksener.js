(function() {
  "use strict";

  window.linksener = function(selectors, callback) {
    [].map.call(selectors, function(a) {
      a.addEventListener('click', function(a) {
        callback(a);
      });
    });
  }
})();
