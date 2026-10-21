__d("WAIterableOperators", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function* e(e) {
        for (const t of e){
            yield t;
        }
    }
    function* s(e, t) {
        let n = 0;
        for (const r of e){
            yield t(r, n);
            n++;
        }
    }
    function u(e, t, n = 1) {
        return function*() {
            if (n === 0) {
                throw r("err")("Step can't be zero.");
            }
            if (n > 0) {
                if (e > t) {
                    return;
                }
                for(let o = e; o < t; o += n){
                    yield o;
                }
            } else {
                if (e < t) {
                    return;
                }
                for(let a = e; a > t; a += n){
                    yield a;
                }
            }
        }();
    }
    function* c(e, t) {
        let n = 0;
        for (const r of e){
            if (t(r, n)) {
                yield r;
            }
            n++;
        }
    }
    function* d(e, t) {
        if (t < 0) {
            throw r("err")("Count must be a positive integer");
        }
        let n = 0;
        for (const o of e){
            if (n >= t) {
                return;
            }
            yield o;
            n++;
        }
    }
    function m(e) {
        for (const t of e){
            return t;
        }
    }
    l.iteratorFromArray = e;
    l.mapIterator = s;
    l.rangeIterator = u;
    l.filterIterator = c;
    l.takeIterator = d;
    l.first = m;
}, 98);