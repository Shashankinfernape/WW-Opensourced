__d("WAWebBizBroadcastProReminderHost.react", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizBroadcastProPendingActions",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (s || (s = o("react"))).useEffect;
    let c = false;
    let d = false;
    let m = new Set;
    const p = r("JSResourceForInteraction")("WAWebBizBroadcastProShowReminder").__setRef("WAWebBizBroadcastProReminderHost.react");
    function _() {
        const e = o("WAWebBizBroadcastProPendingActions").getPendingCustomerBaseActions();
        const t = m;
        m = e;
        for (const n of e){
            if (!t.has(n)) {
                return n;
            }
        }
        return null;
    }
    function f() {
        if (!(c || document.visibilityState !== "visible")) {
            const t = _();
            if (t != null) {
                c = true;
                p.load().then((e)=>{
                    if (!d) {
                        m = new Set;
                        return;
                    }
                    e(t);
                }).catch((t)=>{
                    m = new Set;
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to show BB Pro customer base reminder"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("bb-pro-customer-base-reminder-failed");
                }).finally(()=>{
                    c = false;
                });
            }
        }
    }
    function g() {
        const e = o("WAWebBizBroadcastProPendingActions").getPendingCustomerBaseActions();
        m = new Set(Array.from(m).filter((t)=>e.has(t)));
        f();
    }
    function h() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        u(y, t);
        o("useWAWebListener").useListener(o("WAWebBizBroadcastProPendingActions").PendingCustomerBaseActionsEvent, o("WAWebBizBroadcastProPendingActions").CHANGE_EVENT, g);
        o("useWAWebListener").useListener(document, "visibilitychange", f);
        return null;
    }
    function y() {
        d = true;
        f();
        return C;
    }
    function C() {
        d = false;
    }
    l.default = h;
}, 98);