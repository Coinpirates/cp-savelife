/**
 * Main EOS wrapper
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
class logWrapper {
    constructor (logName) {
        this.logName = logName;
        this.sleep = sleep;
    }
    log () {
        console.log.apply(console.log, ['\x1b[36m%s\x1b[0m', `[${new Date().toISOString()}] ${this.logName} -`, ...arguments]);
    }
    info () {
        console.log.apply(console.log, ['\x1b[36m%s\x1b[0m', `[${new Date().toISOString()}] ${this.logName} -`, ...arguments]);
    }
    error () {
        console.error.apply(console.error, ['\x1b[33m%s\x1b[0m', `[${new Date().toISOString()}] ${this.logName} -`, ...arguments]);
    }
    crash () {
        console.error.apply(console.error, ['\x1b[31m%s\x1b[0m', `[${new Date().toISOString()}] ${this.logName} -`, ...arguments]);
    }
    to (promise) {
        return promise.then(result => [null, result])
            .catch(err => [err, null]);
    }
}
 
module.exports = { sleep, logWrapper };
  