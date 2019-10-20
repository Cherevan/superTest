/* eslint-disable linebreak-style */
class Army {
  constructor(country) {
    this.name = country;
    this.infantry = 1000;
    this.cavalry = 500;
    this.archer = 250;
    this.castles = [];
    this.warWith = [];
  }

  getPower() {
    return this.infantry + this.cavalry * 1.7 + this.archer * 1.3;
  }

  damage(damage) {
    const score = Math.floor(damage);

    this.infantry -= score;

    if (this.infantry < 0) {
      this.cavalry += this.infantry;
      this.infantry = 0;
    }

    if (this.cavalry < 0) {
      this.archer += this.cavalry;
      this.cavalry = 0;
    }

    if (this.archer < 0) {
      this.archer = 0;
    }
  }

  addCastle(castle) {
    this.castles.push(castle);
  }

  removeCastle(castle) {
    if (this.castles.includes(castle)) {
      this.castles.splice(this.castles.indexOf(castle), 1);
    }
  }

  getWarList() {
    if (this.warWith.length) {
      return this.warWith;
    }

    return false;
  }

  addEnemy(enemy) {
    this.warWith.push(enemy);
  }

  removeEnemy(enemy) {
    if (this.warWith.includes(enemy)) {
      this.warWith.splice(this.warWith.indexOf(enemy), 1);
    }
  }
}

module.exports = Army;
