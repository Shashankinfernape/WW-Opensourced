__d("WAWebGroupQueryBridgeOneAlreadyInFlightLogger", [
    "WALogger",
    "WAWebWamEnumMismatchOriginType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = Object.fromEntries(Object.entries(o("WAWebWamEnumMismatchOriginType").MISMATCH_ORIGIN_TYPE).map(([t, n])=>[
            n,
            t
        ]));
    const u = (()=>{
        function e() {
            this.$1 = new Map;
        }
        const t = e.prototype;
        t.$2 = function(t) {
            return this.$1.get(t) ?? 0;
        };
        t.increment = function(t) {
            const e = t.toString();
            const n = this.$2(e) + 1;
            this.$1.set(e, n);
            return n;
        };
        t.decrement = function(t) {
            const e = t.toString();
            this.$1.set(e, Math.max(this.$2(e) - 1, 0));
        };
        return e;
    })();
    function c(t) {
        const r = new u;
        return (()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, a) {
                if (r.increment(n) > 1) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "lid_migration - ",
                        ""
                    ])), s[a]).sendLogs("GroupLidInfra/one_in_flight_group_info_mismatch");
                }
                try {
                    const i = yield t(n);
                    r.decrement(n);
                    return i;
                } catch (e) {
                    r.decrement(n);
                    throw e;
                }
            });
            function i(e, t) {
                return a.apply(this, arguments);
            }
            return i;
        })();
    }
    l.logDuplicateRequestsWrapper = c;
}, 98);