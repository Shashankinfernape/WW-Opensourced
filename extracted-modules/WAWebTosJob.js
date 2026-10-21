__d("WAWebTosJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = 7200;
    const s = 259200;
    const u = 86400;
    const c = new (r("WADeprecatedWapParser"))("tosNotices", function(t) {
        t.assertTag("iq");
        t.assertFromServer();
        const n = t.child("tos");
        const r = {
            refresh: n.attrInt("refresh"),
            notice: []
        };
        n.forEachChildWithTag("notice", function(e) {
            const state = e.maybeAttrString("state") !== "false";
            const id = e.attrString("id");
            r.notice.push({
                id,
                state
            });
        });
        if (r.refresh > s || r.refresh < e) {
            r.refresh = u;
        }
        return r;
    });
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const n = (t = o("WAWap")).wap("iq", {
                xmlns: "tos",
                id: t.generateId(),
                type: "get",
                to: t.S_WHATSAPP_NET
            }, t.wap("request", null, e.map((e)=>o("WAWap").wap("notice", {
                    id: o("WAWap").CUSTOM_STRING(e)
                }))));
            const r = yield o("WADeprecatedSendIq").deprecatedSendIq(n, c);
            if (r.success) {
                return r.result;
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(r.errorCode, r.errorText);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!r("gkx")("26258")) {
                let t;
                const n = new (r("WADeprecatedWapParser"))("tosNoticesDebug", r("WAWebNoop"));
                const a = (t = o("WAWap")).wap("iq", {
                    xmlns: "tos",
                    id: t.generateId(),
                    type: "set",
                    to: t.S_WHATSAPP_NET
                }, t.wap("delete", {
                    id: t.CUSTOM_STRING(e)
                }));
                const i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, n);
                if (i.success) {
                    return "deleted";
                }
                return "failed";
            }
            return "skipped_on_prod";
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const n = new (r("WADeprecatedWapParser"))("tosNoticesSet", r("WAWebNoop"));
            const a = (t = o("WAWap")).wap("iq", {
                xmlns: "tos",
                id: t.generateId(),
                type: "set",
                to: t.S_WHATSAPP_NET
            }, t.wap("request", {
                type: "session_update"
            }, e.map((e)=>o("WAWap").wap("notice", {
                    id: o("WAWap").CUSTOM_STRING(e)
                }))));
            yield o("WADeprecatedSendIq").deprecatedSendIq(a, n);
        });
        return g.apply(this, arguments);
    }
    l.DEFAULT_TOS_REFRESH_INTERVAL = u;
    l.queryTosState = d;
    l.deleteTosState = p;
    l.updateTosState = f;
}, 98);