__d("WAWebReloadReason", [
    "WALogger",
    "WAWebOfflineResumeCounters",
    "WAWebSessionStorage"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "wa_web_last_reload";
    let u = false;
    function c(reason, n) {
        if (!u) {
            u = true;
            try {
                if (r("WAWebSessionStorage") != null) {
                    r("WAWebSessionStorage").setItem(s, JSON.stringify(babelHelpers.extends({
                        reason,
                        ts: Date.now()
                    }, n)));
                }
            } catch (e) {}
            try {
                o("WAWebOfflineResumeCounters").logAppReload(reason);
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] counting reload reason failed: ",
                    ""
                ])), String(error));
            }
        }
    }
    function d() {
        const e = m();
        if (e == null) {
            return null;
        }
        const { msg, reason, receipt, ts } = e;
        const a = {
            reason,
            ageS: Math.round((Date.now() - ts) / 1000)
        };
        if (typeof msg === "number") {
            a.msg = msg;
        }
        if (typeof receipt === "number") {
            a.receipt = receipt;
        }
        return a;
    }
    function m() {
        try {
            const e = r("WAWebSessionStorage") == null ? undefined : r("WAWebSessionStorage").getItem(s);
            if (e == null) {
                return null;
            }
            const t = JSON.parse(e);
            if (t == null || typeof t !== "object") {
                return null;
            }
            const { msg, reason, receipt, ts } = t;
            if (typeof reason !== "string" || typeof ts !== "number") {
                return null;
            }
            return {
                reason,
                ts,
                msg,
                receipt
            };
        } catch (e) {
            return null;
        }
    }
    l.recordReloadReason = c;
    l.getLastReload = d;
}, 98);