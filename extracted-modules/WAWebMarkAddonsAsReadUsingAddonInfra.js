__d("WAWebMarkAddonsAsReadUsingAddonInfra", [
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMsgGetters",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = e.map((e)=>({
                        msgKey: e.id,
                        sender: r("nullthrows")(o("WAWebMsgGetters").getSender(e)).toString()
                    }));
                yield o("WAWebSendReadReceiptJob").sendAddOnReadReceipts(t);
                yield o("WAWebMarkAddOnsAsReadJob").markAddOnsAsReadUsingAddonInfraJob(e);
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        const e = o("react-compiler-runtime").c(5);
        const t = r("useLazyRef")(m);
        let n;
        if (e[0] !== t) {
            n = function() {
                if (!(!document.hasFocus() || t.current.length === 0)) {
                    u(t.current);
                    t.current = [];
                }
            };
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        const a = n;
        let i;
        if (e[2] !== a || e[3] !== t) {
            i = function(n) {
                t.current.push(...n);
                a();
            };
            e[2] = a;
            e[3] = t;
            e[4] = i;
        } else {
            i = e[4];
        }
        const l = i;
        o("useWAWebListener").useListener(window, "focus", a);
        return l;
    }
    function m() {
        return [];
    }
    l.useMarkAddonsAsRead = d;
}, 98);