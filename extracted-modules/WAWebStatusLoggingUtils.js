__d("WAWebStatusLoggingUtils", [
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WATimeUtils",
    "WAWebMsgGetters",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new TextEncoder;
    function u(e) {
        return s.encode(e).buffer;
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = e.id.id;
            const i = e.id.remote?.toString({
                legacy: true
            });
            const l = yield E();
            if (!l || !i) {
                return a;
            }
            const s = e.id.fromMe ? 1 : 0;
            const c = e.id.fromMe ? "0" : e.id.participant?.toString({
                legacy: true
            }) ?? "0";
            const d = u([
                i,
                a,
                s,
                c
            ].join("_"));
            const m = yield o("WACryptoHmac").hmacSha256(l, d);
            return o("WABase64").encodeB64(m);
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                return yield c(t);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[StatusLogging] could not hash the status id"
                ]))).catching(r("getErrorSafe")(error)).sendLogs(n);
                return;
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebMsgGetters").getIsGroupStatus(e)) {
                return v(e, t);
            }
            return g(e, t);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebStatusGatingUtils").isStatusViewerSidePosterIdentifiersEnabled()) {
                return null;
            }
            if (o("WAWebMsgGetters").getIsNewsletterStatus(e)) {
                const r = e.id.remote?.toJid();
                if (r == null) {
                    return null;
                }
                return R(r, t);
            }
            if (e.author) {
                return R(e.author.toJid(), t);
            }
            return null;
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebStatusGatingUtils").isStatusViewerSidePosterIdentifiersEnabled()) {
                return R(e.toJid(), t);
            }
            return null;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        if (e != null && e.isNewsletter()) {
            return e.user;
        }
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const remote = e.id.remote;
            if (!o("WAWebStatusGatingUtils").isStatusViewerSidePosterIdentifiersEnabled() || !o("WAWebMsgGetters").getIsGroupStatus(e) || remote == null) {
                return null;
            }
            return R(remote.toJid(), t);
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebStatusGatingUtils").statusPogIdRotationWindowDays();
            const r = yield E();
            if (n === -1 || !r) {
                return null;
            }
            const a = k(t, n);
            const i = yield o("WACryptoHmac").hmacSha256(r, u(e + a));
            return o("WABase64").encodeB64(i);
        });
        return L.apply(this, arguments);
    }
    function E() {
        const e = o("WAWebUserPrefsMultiDevice").getChatThreadLoggingSecretB64().then((e)=>{
            if (e == null) {
                return null;
            }
            return o("WABase64").decodeB64(e);
        });
        return e;
    }
    function k(e, t) {
        if (t === 0) {
            return "";
        }
        return I(e, t);
    }
    function I(e, t) {
        const n = new Date(e.getTime() - 28800);
        const r = n.getUTCFullYear();
        const a = (n.getUTCMonth() + 1).toString().padStart(2, "0");
        const i = o("WATimeUtils").weekOfYear(n).toString().padStart(2, "0");
        const l = Math.floor((o("WATimeUtils").weekOfYear(n) + 1) / 2).toString().padStart(2, "0");
        const s = n.getUTCDate().toString().padStart(2, "0");
        switch(t){
            case 1:
                return `${r}/${a}/${s}`;
            case 7:
                return `${r}/${i}`;
            case 14:
                return `${r}/${l}`;
            case 30:
                return `${r}/${a}`;
            default:
                return `${r}/${a}/${s}`;
        }
    }
    l.statusIdForLogging = c;
    l.statusIdForLoggingOrUndefined = m;
    l.statusPosterHashIdForLogging = _;
    l.statusPosterIdForLogging = g;
    l.channelStatusPosterHashId = y;
    l.channelStatusCid = b;
    l.statusGroupIdForLogging = v;
}, 98);