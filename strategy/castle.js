/* eslint-disable linebreak-style */
class Castle {
  constructor(name, country) {
    this.name = name;
    this.owner = country;
    this.archer = 33;
  }

  getOwner() {
    return this.owner;
  }

  setOwner(country) {
    this.owner = country;
  }
}

module.exports = Castle;
