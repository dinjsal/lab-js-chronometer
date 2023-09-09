class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.printTimeCallback = printTimeCallback;
    this.intervalId = setInterval(() => { 
      this.currentTime += 1;
      // printTimeCallback(); still red, idk where to put it
    }, 1000);
  }

  getMinutes() {
    const countMinutes = Math.floor(this.currentTime / 60);
    return countMinutes;
  }

  getSeconds() {
    const countSeconds = this.currentTime % 60;
    return countSeconds;
  }

  computeTwoDigitNumber(value) {
    this.value = value;
    const stringAlready = this.value.toString();
    if (stringAlready.length === 2) {
      return stringAlready;
    }
    else {
      const stringNow = this.value.toString();
      return 0 + stringNow;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
