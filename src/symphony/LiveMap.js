class LiveMap {
  constructor(ydoc, name) {
    // values should be private
    this.values = ydoc.getMap(name);
  }

  // Removes the specified element by key. Returns true if an element existed and has been removed, or false if the element does not exist.
  delete(key) {

  }

  // Returns a new Iterator object that contains the [key, value] pairs for each element.
  entries() {

  }

  // Executes a provided function once per each key/value pair in the Map object.
  forEach(callback) {

  }

  // Returns a specified element from the LiveMap or undefined if the key can’t be found.
  get(key) {
    return this.values.get(key);
  }

  // Returns a boolean indicating whether an element with the specified key exists or not.
  has(key) {

  }

  // Returns a new Iterator object that contains the keys for each element.
  keys() {

  }

  // Adds or updates an element with a specified key and a value.
  set(key, value) {
    this.values.set(key, value);
  }

  // Returns the number of elements in the LiveMap.
  size() {

  }

  // Returns a new Iterator object that contains the the values for each element.
  values() {

  }

  // Returns an immutable ES6 Map that is equivalent to the LiveMap. Nested values will also be immutable.
  toImmutable() {

  }

  // yjs
  toJSON() {

  }

  // yjs - Clone all values into a fresh Y.Map instance. The returned type can be included into the Yjs document.
  clone() {

  }

  // yjs
  observe(callback) {

  }

  // yjs
  unobserve(callback) {

  }

  // yjs
  observeDeep(callback) {

  }

  // yjs
  unobserveDeep(callback) {
    
  }
}

export default LiveMap;