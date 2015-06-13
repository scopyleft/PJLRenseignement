(function() {
  "use strict";

  window.linksener = function(selectors, callback) {
    [].map.call(selectors, function(node) {
      node.addEventListener('click', function(a) {
        callback(a);
      });
    });
  }
})();
