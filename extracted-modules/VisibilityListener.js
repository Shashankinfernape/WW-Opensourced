__d("VisibilityListener", [
    "Visibility",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = Date.now() - (e || (e = r("performanceNow")))();
    const u = [];
    let c = false;
    const d = 10000;
    u.push({
        key: s,
        value: r("Visibility").isHidden()
    });
    function m(changeTime, t) {
        if (c || u.length > d) {
            c = true;
            return;
        }
        u.push({
            key: changeTime + s,
            value: t
        });
    }
    r("Visibility").addListener(r("Visibility").VISIBLE, function(e) {
        m(e.changeTime, false);
    });
    r("Visibility").addListener(r("Visibility").HIDDEN, function(e) {
        m(e.changeTime, true);
    });
    function p(e, t) {
        if (c) {
            return null;
        }
        let n;
        for(let o = u.length - 1; o >= 0; o--){
            if (u[o].key <= t) {
                n = u.slice(0, o + 1);
                break;
            }
        }
        if (n === undefined) {
            return null;
        }
        if (n[n.length - 1].value !== r("Visibility").isHidden()) {
            n[n.length] = {
                key: t,
                value: r("Visibility").isHidden()
            };
        }
        return n;
    }
    function _(e, t) {
        const n = p(e, t);
        if (!n) {
            return null;
        }
        if (n.length < 2) {
            if (r("Visibility").isHidden()) {
                return t - e;
            }
            return 0;
        }
        let o = n.length - 1;
        let a = n[o].value ? t - n[o].key : 0;
        for(--o; o > 0 && n[o].key > e; o--){
            if (n[o].value) {
                a += n[o + 1].key - n[o].key;
            }
        }
        if (n[o].value) {
            a = n[o + 1].key - e;
        }
        return a;
    }
    function f() {
        return true;
    }
    l.getHiddenTimings = p;
    l.getHiddenTime = _;
    l.supported = f;
}, 98);