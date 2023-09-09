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
    this.value = value;
    if (this.value.length < 2) {
      this.value.toString();

    }
    else if (this.value.length === 2) {
      this.value.toString()
      return this.value.slice(0);
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
