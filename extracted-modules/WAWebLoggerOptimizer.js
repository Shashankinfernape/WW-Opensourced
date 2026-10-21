__d("WAWebLoggerOptimizer", [
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    const e = "==================================================EOU";
    const l = 4000;
    function s(e, t, n, r) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = 0, r = false, o = 1 / 0) {
            const a = [];
            if (r) {
                for(let i = yield t.logs.where("timestamp").between(n, o).reverse().until(function(e) {
                    return e.log.includes("[sendlogs]");
                }, true).toArray(), l = i.length - 1; l >= 0 && (c(i[l], a), !i[l].log.includes(e)); l--);
            } else {
                yield t.logs.where("timestamp").between(n, o).each(function(e) {
                    c(e, a);
                });
            }
            return a;
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        e.log = e.log.slice(0, l);
        t.push(e);
    }
    i.END_OF_UPLOAD = e;
    i.TRIM_LENGTH = l;
    i.getTimeboxedAndTrimmedLogs = s;
}, 66);