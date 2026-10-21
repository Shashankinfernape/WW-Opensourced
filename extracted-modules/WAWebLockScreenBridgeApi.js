__d("WAWebLockScreenBridgeApi", [
    "WAWebLockScreenResolver"
], function(t, n, r, o, a, i, l) {
    const e = {
        waitForPasscode: function() {
            return o("WAWebLockScreenResolver").LockScreenResolvable.waitForPasscode();
        },
        waitForPasscodeAfterIncorrectAttempt: function() {
            return o("WAWebLockScreenResolver").LockScreenResolvable.waitForPasscodeAfterIncorrectAttempt();
        },
        correctPasscodeEntered: function({ key }) {
            o("WAWebLockScreenResolver").LockScreenResolvable.correctPasscodeEntered(key);
        }
    };
    l.LockScreenBridgeApi = e;
}, 98);