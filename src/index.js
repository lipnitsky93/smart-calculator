class SmartCalculator {
  constructor(initialValue) {
    this.str = `${initialValue}`;
    this.res = eval(this.str);
    this.lastItem = initialValue;
  }

  add(number) {
    this.str += ` + ${number}`;
    this.res = eval(this.str);
    this.lastItem = number + '';
    return this;
  }
  
  subtract(number) {
    this.str += ` - ${number}`;
    this.res = eval(this.str);
    this.lastItem = number + '';
    return this;
  }

  multiply(number) {
    this.str += ` * ${number}`;
    this.res = eval(this.str);
    this.lastItem = number + '';
    return this;
  }

  devide(number) {
    this.str += ` / ${number}`;
    this.res = eval(this.str);
    this.lastItem = number + '';
    return this;
  }

  pow(number) {
    if (number == 1) {
      this.lastItem = 1 + '';
      this.res = eval(this.str);
      return this;
    } else if (number == 2) {
      if (this.lastItem == 1) {
        return this;
      }
      this.str = this.str.slice(0, this.str.length - this.lastItem.length - 1);
      this.lastItem *= this.lastItem;
      this.lastItem += '';
      this.str += ` ${this.lastItem}`;
      this.res = eval(this.str);
      return this;
    }
   return this;
  }

  valueOf() {
    return this.res;
  }
}

module.exports = SmartCalculator;
