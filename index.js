function produceDrivingRange(blockRange) {
  return function(range1, range2){
    let range = Math.abs(parseInt(range1)-parseInt(range2));
    let delt = Math.abs(range - blockRange);

    if (range > blockRange) {
      return `${delt} blocks out of range`
    }else {
      return `within range by ${delt}`
    }
  }
}

function produceTipCalculator(amount) {
  return function(percent) {
    return amount*percent;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
