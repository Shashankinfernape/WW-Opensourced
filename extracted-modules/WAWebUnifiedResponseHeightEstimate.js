__d("WAWebUnifiedResponseHeightEstimate", [
    "WALogger",
    "WAUnicodeUtils",
    "WAWebMessageCropping",
    "WAWebUnifiedResponseUtils",
    "getErrorSafe",
    "getPlainTextFromUnifiedResponse"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 100;
    const u = 19;
    const c = 13;
    function d(e) {
        try {
            return p(e);
        } catch (error) {
            f(error);
            return 0;
        }
    }
    function m(e) {
        try {
            const t = e.unifiedResponse;
            if (t == null || e.forwardedAiBotMessageInfo != null || !o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
                return 0;
            }
            return p(t) + c;
        } catch (error) {
            f(error);
            return c;
        }
    }
    function p(e) {
        const t = o("WAUnicodeUtils").numCodepoints(r("getPlainTextFromUnifiedResponse")(e));
        let n = Math.ceil(t / s) * u;
        for (const a of o("WAWebUnifiedResponseUtils").getImaginePrimitives(e)){
            n += g(a);
        }
        return n;
    }
    let _ = false;
    function f(error) {
        if (!_) {
            _ = true;
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unified response height estimate failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("ur-height-estimate-failed");
        }
    }
    function g({ media }) {
        const n = media?.width;
        const r = media?.height;
        if (n != null && n > 0 && r != null && r > 0) {
            return Math.round(o("WAWebMessageCropping").IMAGINE_UR_WIDTH * (r / n));
        }
        return o("WAWebMessageCropping").IMAGINE_UR_WIDTH;
    }
    l.estimateUnifiedResponseBodyHeight = d;
    l.estimateRichResponseMsgHeight = m;
}, 98);