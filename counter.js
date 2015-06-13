(function() {
  "use strict";

  window.counter = {

    get storage() {
      return JSON.parse(localStorage.getItem('_counter')) || {};
    },

    set storage(value) {
      localStorage.setItem('_counter', JSON.stringify(value));
    },

    increment: function(key) {
      var storage = this.storage;
      if(!(key in storage)) {
        storage[key] = 0;
      }
      ++storage[key];
      this.storage = storage;
    },

    getCount: function(key) {
      if(!key) {
        throw new Error("counter.getCount(key) requires a 'key' parameter");
      }
      return this.storage[key];
    }
  };
})();
