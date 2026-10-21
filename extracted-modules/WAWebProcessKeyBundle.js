__d("WAWebProcessKeyBundle", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "cr:510",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = [
        "aeaEvidence"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e) {
        let depletedPrekeyCount = 0;
        const primaryBundle = [];
        const companionBundle = [];
        for (const i of e){
            if (i.wid.device != null && i.wid.device !== o("WAJids").DEFAULT_DEVICE_ID) {
                companionBundle.push(i);
            } else {
                primaryBundle.push(i);
            }
            if (!i.key && !i.wid.isBot()) {
                depletedPrekeyCount++;
            }
        }
        if (primaryBundle.length === 0 && companionBundle.length === 0) {
            throw r("err")("establishE2ESession: no keys in the response");
        }
        return {
            primaryBundle,
            companionBundle,
            depletedPrekeyCount
        };
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = e.map((e)=>o("WAWebSignalCommonUtils").createSignalAddress(e.wid).toString());
                yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkLoadIdentityKey(t);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "establishE2ESession: warmed up identity cache: ",
                    " records"
                ])), t.length);
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "establishE2ESession: failed to warm up identity cache: ",
                    ""
                ])), error);
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            let processedPrekeyCount = 0;
            let hasResolvedAeaPrimary = false;
            const s = f(t);
            const { companionBundle, depletedPrekeyCount, primaryBundle } = s;
            yield g([].concat(primaryBundle, companionBundle));
            const h = yield b(primaryBundle);
            const y = (s, u)=>{
                const s_aeaEvidence = s.aeaEvidence;
                const d = babelHelpers.objectWithoutPropertiesLoose(s, e);
                return o("WAWebSignal").Session.createSignalSession(d, r).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    processedPrekeyCount++;
                    if (yield S(u, a)) {
                        hasResolvedAeaPrimary = true;
                    }
                })).catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "createSignalSession: failed for device ",
                        " with error ",
                        ""
                    ])), s.wid, String(e)).sendLogs("createSignalSession-fail");
                });
            };
            yield (_ || (_ = n("Promise"))).all(primaryBundle.map((e, t)=>{
                const r = h[t];
                if ((n("cr:510") == null ? undefined : n("cr:510").isAeaKeyResponseRejected(r)) === true) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] rejected key response for ",
                        ""
                    ])), e.wid.toLogString());
                    hasResolvedAeaPrimary = true;
                    return null;
                }
                return y(e, r);
            }));
            yield _.all(companionBundle.map((e)=>y(e, null)));
            return {
                depletedPrekeyCount,
                processedPrekeyCount,
                hasResolvedAeaPrimary
            };
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (_ || (_ = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (n("cr:510") == null) {
                        return null;
                    }
                    try {
                        return yield n("cr:510").prepareAeaKeyResponse(e);
                    } catch (error) {
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[aea] failed to evaluate key response"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("aea-key-response-prepare-fail");
                        return null;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e == null || n("cr:510") == null) {
                return false;
            }
            try {
                return yield n("cr:510").commitAeaKeyResponse(e, t);
            } catch (error) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to store key response result"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("aea-key-response-commit-fail");
                return false;
            }
        });
        return R.apply(this, arguments);
    }
    l.processKeyBundles = y;
    l.prepareAeaKeyResponses = b;
    l.commitAeaKeyResponse = S;
}, 98);