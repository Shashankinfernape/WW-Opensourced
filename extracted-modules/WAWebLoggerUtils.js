__d("WAWebLoggerUtils", [
    "WAHashStringToNumber"
], function(t, n, r, o, a, i, l) {
    let e = false;
    function s() {
        return e;
    }
    function u(t) {
        e = t;
    }
    function c(e) {
        if (e <= 0) {
            return false;
        }
        if (e >= 1) {
            return true;
        }
        return Math.random() < e;
    }
    function d(e, t, n) {
        if (e <= 0) {
            return false;
        }
        if (e >= 1) {
            return true;
        }
        let r = 1;
        e: {
            if (e === 0.1) {
                r = 10;
                break e;
            }
            if (e === 0.01) {
                r = 100;
                break e;
            }
            if (e === 0.001) {
                r = 1000;
                break e;
            }
            return c(e);
        }
        return o("WAHashStringToNumber").hashStringToNumber(t + n) % r === 0;
    }
    l.isWaitingForUpload = s;
    l.setWaitingForUpload = u;
    l.passesSampling = c;
    l.passesSamplingPerUser = d;
}, 98);