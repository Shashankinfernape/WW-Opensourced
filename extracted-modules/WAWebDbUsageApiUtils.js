__d("WAWebDbUsageApiUtils", [
    "Promise",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    let e;
    function l(e) {
        if (e != null && e !== 0) {
            return Math.round(e / 1000000).toString();
        }
        return "0";
    }
    function s(t) {
        return new (e || (e = n("Promise")))(function(e, n) {
            t.onsuccess = function() {
                e(t.result);
            };
            t.onerror = function(e) {
                n(e.target.result);
            };
        });
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const n = yield s(e.open("__dbnames"));
            if ((t = n.objectStoreNames) != null && t.length) {
                const r = n.transaction(n.objectStoreNames, "readonly");
                const o = r.objectStore(r.objectStoreNames[0]);
                const a = yield s(o.getAll());
                return a;
            } else if (e.databases) {
                return e.databases();
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield s(e.open(t));
            return n;
        });
        return m.apply(this, arguments);
    }
    function p(t, r) {
        return new (e || (e = n("Promise")))(function(e, n) {
            const o = t.openCursor(null, "prev");
            o.onsuccess = function() {
                const o_result = o.result;
                if (o_result && r(o_result.value)) {
                    o_result.continue();
                } else {
                    e();
                }
            };
            o.onerror = function() {
                n(o.result);
            };
        });
    }
    i.convertToMBToString = l;
    i.promisifyRequest = s;
    i.getAllDatabases = u;
    i.getDatabase = d;
    i.objectStoreIterator = p;
}, 66);