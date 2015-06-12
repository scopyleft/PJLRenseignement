(function() {
  "use strict";

  window.linksener = function(selectors) {
    [].map.call(selectors, function(a) {
      a.addEventListener('click', function(a) {
        a.preventDefault();
        console.log('lien cliqué', a);
      });
    });
  }
})();
