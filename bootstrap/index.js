export {};

if (!String.prototype.capitalize) {
  Object.defineProperty(String.prototype, "capitalize", {
    value() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    writable: true,
    configurable: true,
  });
}
