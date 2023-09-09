class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval((printTimeCallback) => { //why she dark?
      this.currentTime += 1;
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
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
