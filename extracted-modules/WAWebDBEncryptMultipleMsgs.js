__d("WAWebDBEncryptMultipleMsgs", [
    "Promise",
    "WAAsyncSleep",
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebLinkify",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "DroppingMsgRowDueToLogout";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a = false) {
            yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
            yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
            let i;
            if (a) {
                i = [];
                for(let l = 0; l < t.length; l++){
                    try {
                        const d = t[l];
                        const m = yield p(d, l);
                        i.push(m);
                    } catch (error) {
                        if (error instanceof c) {
                            throw error;
                        }
                        const _ = r("getErrorSafe")(error);
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "processAndEncryptSingleMsgRow throttle"
                        ]))).catching(_).tags("message-store");
                    }
                }
            } else {
                const f = yield (u || (u = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = yield p(e).catch((e)=>{
                            if (e instanceof c) {
                                throw e;
                            }
                            const t = r("getErrorSafe")(e);
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "processAndEncryptSingleMsgRow no-throttle"
                            ]))).catching(t).tags("message-store");
                        }).finally(()=>{});
                        return t;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                i = f.filter(Boolean);
            }
            return i;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (r("WAWebBrokerGlobalAppState").isLogoutInProgress) {
                return (u || (u = n("Promise"))).reject(new c);
            }
            if (t != null) {
                yield o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(t, 35, 100);
            }
            const a = o("WAWebSchemaMessage").getMessageTable();
            const i = o("WAWebDBMessageUtils").getVcardWids(e);
            const l = o("WAWebDBMessageSerialization").dbRowFromMessage(e);
            const s = yield a.preflightEncryptSingleRecord(babelHelpers.extends({}, l));
            const d = babelHelpers.extends({}, l, s);
            if (i != null) {
                d.vcardWAids = i;
            }
            return [
                d,
                o("WAWebLinkify").hasHttpLink(e)
            ];
        });
        return _.apply(this, arguments);
    }
    l.DroppingMsgRowDueToLogout = c;
    l.encryptMultipleDBMsgs = d;
    l.processAndEncryptSingleMsgRow = p;
}, 98);