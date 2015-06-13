(function() {
  window.counter = {
    _storage: {},

    get storage() {
      return this._storage;
    },

    increment: function(key) {
      if(!(key in this._storage)) {
        this._storage[key] = 0;
      }
      ++this._storage[key];
    },

    getCount: function(key) {
      if(!key) {
        throw new Error("counter.getCount(key) requires a 'key' parameter");
      }
      return this.storage[key];
    }
  };
})();
