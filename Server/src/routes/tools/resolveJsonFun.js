function circularToJSON(obj) {
  const cache = new Set();
  return JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        // Circular reference found, replace with a placeholder
        return "[Circular Reference]";
      }
      // Store the value in our cache
      cache.add(value);
    }
    return value;
  });
}
module.exports = circularToJSON;
