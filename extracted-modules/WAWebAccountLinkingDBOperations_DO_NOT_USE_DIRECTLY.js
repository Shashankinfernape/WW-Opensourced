__d("WAWebAccountLinkingDBOperations_DO_NOT_USE_DIRECTLY", [
    "WATimeUtils",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingSchema",
    "WAWebBackendApi",
    "WAWebModelStorageUtils",
    "WAWebOpaqueDataEncryption",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebAccountLinkingSchema").getTable().createOrReplace(e);
            o("WAWebBackendApi").frontendFireAndForget("updateAccountLinkingStatus", {
                isFBLinked: e.fbCrosspostingDestinationId != null,
                isIGLinked: e.igCrosspostingDestinationId != null,
                linkState: e.linkState
            });
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(linkState) {
            const t = yield o("WAWebAccountLinkingSchema").getTable().get(o("WAWebAccountLinkingConstants").AccountLinkKey);
            const n = babelHelpers.extends({}, t, {
                linkState
            });
            yield o("WAWebAccountLinkingSchema").getTable().createOrReplace(n);
            o("WAWebBackendApi").frontendFireAndForget("updateAccountLinkingStatus", {
                isFBLinked: n.fbCrosspostingDestinationId != null,
                isIGLinked: n.igCrosspostingDestinationId != null,
                linkState: n.linkState
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebAccountLinkingSchema").getTable().get(o("WAWebAccountLinkingConstants").AccountLinkKey);
            if (n != null) {
                const r = babelHelpers.extends({}, n, {
                    nonce: e,
                    fbid: t
                });
                r.accountLinkingOpaqueData = o("WAWebOpaqueDataEncryption").moveEncFieldToOpaqueData(r);
                return o("WAWebAccountLinkingSchema").getTable().createOrReplace(r);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, encryptedPassword) {
            const n = yield C();
            const r = babelHelpers.extends({
                accountLinkKey: o("WAWebAccountLinkingConstants").AccountLinkKey,
                linkState: o("WAWebAccountLinkingConstants").AccountLinkState.Unknown,
                linkTimestamp: o("WATimeUtils").unixTime()
            }, n, {
                fbid: e,
                encryptedPassword
            });
            r.accountLinkingOpaqueData = o("WAWebOpaqueDataEncryption").moveEncFieldToOpaqueData(r);
            return o("WAWebAccountLinkingSchema").getTable().createOrReplace(r);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(accesstoken) {
            const t = yield C();
            if (t != null) {
                const n = babelHelpers.extends({}, t, {
                    accesstoken
                });
                n.accountLinkingOpaqueData = o("WAWebOpaqueDataEncryption").moveEncFieldToOpaqueData(n);
                return o("WAWebAccountLinkingSchema").getTable().createOrReplace(n);
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebAccountLinkingSchema").getTable().get(o("WAWebAccountLinkingConstants").AccountLinkKey);
            const n = e + Date.now() / 1000;
            const r = babelHelpers.extends({}, t, {
                pingInterval: n
            });
            return o("WAWebAccountLinkingSchema").getTable().createOrReplace(r);
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t = yield o("WAWebAccountLinkingSchema").getTable().get("AccountLinkKey");
            if (t?.accountLinkingOpaqueData != null) {
                const r = o("WAWebOpaqueDataEncryption").moveOpaqueDataToEncField(t?.accountLinkingOpaqueData);
                t = babelHelpers.extends({}, t, {
                    accesstoken: r.accesstoken,
                    fbid: r.fbid,
                    nonce: r.nonce,
                    encryptedPassword: r.encryptedPassword
                });
            }
            return t;
        });
        return b.apply(this, arguments);
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield C();
            if (e == null || e.pingInterval == null) {
                return 0;
            }
            return e.pingInterval;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "account-linking"
            ], (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const r = yield n.get(o("WAWebAccountLinkingConstants").AccountLinkKey);
                    if (r != null) {
                        const a = babelHelpers.extends({}, r, {
                            foAToWALinkEligibility: e.foAToWALinkEligibility
                        });
                        if (e.fbCrosspostingDestinationId != null) {
                            a.fbCrosspostingDestinationId = e.fbCrosspostingDestinationId;
                        }
                        if (e.igCrosspostingDestinationId != null) {
                            a.igCrosspostingDestinationId = e.igCrosspostingDestinationId;
                        }
                        yield n.createOrReplace(a);
                        o("WAWebBackendApi").frontendFireAndForget("updateAccountLinkingStatus", {
                            isFBLinked: a.fbCrosspostingDestinationId != null,
                            isIGLinked: a.igCrosspostingDestinationId != null,
                            linkState: a.linkState
                        });
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "account-linking"
            ], (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const r = yield n.get(o("WAWebAccountLinkingConstants").AccountLinkKey);
                    if (r != null) {
                        const a = babelHelpers.extends({}, r);
                        if (e.fbCrosspostingDestinationId != null) {
                            a.fbCrosspostingDestinationId = e.fbCrosspostingDestinationId;
                        }
                        if (e.igCrosspostingDestinationId != null) {
                            a.igCrosspostingDestinationId = e.igCrosspostingDestinationId;
                        }
                        yield n.createOrReplace(a);
                        o("WAWebBackendApi").frontendFireAndForget("updateAccountLinkingStatus", {
                            isFBLinked: a.fbCrosspostingDestinationId != null,
                            isIGLinked: a.igCrosspostingDestinationId != null,
                            linkState: a.linkState
                        });
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ accesstoken, fbid, nonce, pingInterval }) {
            const i = yield C();
            if (i != null) {
                const l = pingInterval + o("WATimeUtils").unixTime();
                const s = babelHelpers.extends({}, i, {
                    accesstoken,
                    pingInterval: l
                });
                if (nonce != null) {
                    s.nonce = nonce;
                }
                if (fbid != null) {
                    s.fbid = fbid;
                }
                s.accountLinkingOpaqueData = o("WAWebOpaqueDataEncryption").moveEncFieldToOpaqueData(s);
                return o("WAWebAccountLinkingSchema").getTable().createOrReplace(s);
            }
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(lastResyncTimestamp) {
            const t = yield o("WAWebAccountLinkingSchema").getTable().get(o("WAWebAccountLinkingConstants").AccountLinkKey);
            if (t != null) {
                const n = babelHelpers.extends({}, t, {
                    lastResyncTimestamp
                });
                return o("WAWebAccountLinkingSchema").getTable().createOrReplace(n);
            }
        });
        return x.apply(this, arguments);
    }
    function $() {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebAccountLinkingSchema").getTable().get(o("WAWebAccountLinkingConstants").AccountLinkKey);
            return e?.lastResyncTimestamp;
        });
        return P.apply(this, arguments);
    }
    function N() {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebAccountLinkingSchema").getTable().clear();
            o("WAWebBackendApi").frontendFireAndForget("updateAccountLinkingStatus", {
                isFBLinked: false,
                isIGLinked: false,
                linkState: o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked
            });
        });
        return M.apply(this, arguments);
    }
    function w() {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield C();
            return {
                isFBLinked: t?.fbCrosspostingDestinationId != null,
                isIGLinked: t?.igCrosspostingDestinationId != null,
                linkState: t?.linkState ?? o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked
            };
        });
        return A.apply(this, arguments);
    }
    l.createOrUpdateAccountLinkingState = e;
    l.updateAccountLinkingState = u;
    l.updateAccountLinkingData = d;
    l.updateEntCreationData = p;
    l.updateAccesstoken = f;
    l.updatePingInterval = h;
    l.getAccountLinkingData = C;
    l.getPingExpirationTime = v;
    l.updateServiceData = R;
    l.updateDestinationIdentities = E;
    l.updateGenerateAccessTokensData = I;
    l.updateLastResyncTimestamp = D;
    l.getLastResyncTimestamp = $;
    l.purgeWaffleData = N;
    l.getAccountLinkingStatus = w;
}, 98);