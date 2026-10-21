__d("WAWebWamInterop", [
    "Promise",
    "WACustomError",
    "WATimeUtils",
    "WAWamStorage",
    "WAWebUserPrefsGeneral",
    "WAWebWamPrivateStats",
    "WAWebWamStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = function(r, a) {
        return (e || (e = n("Promise"))).reject(new (o("WACustomError")).UnimplementedMethod("saveBuffer not implemented yet"));
    };
    const u = function(r) {
        return (e || (e = n("Promise"))).resolve();
    };
    const c = function(r) {
        return (e || (e = n("Promise"))).reject(new (o("WACustomError")).UnimplementedMethod("getStartingSequenceRow not implemented yet"));
    };
    const d = function() {
        return (e || (e = n("Promise"))).reject(new (o("WACustomError")).UnimplementedMethod("getBuffers not implemented yet"));
    };
    const m = function() {
        return (e || (e = n("Promise"))).reject(new (o("WACustomError")).UnimplementedMethod("nukeMetrics not implemented yet"));
    };
    const p = function(r) {
        return (e || (e = n("Promise"))).reject(new (o("WACustomError")).UnimplementedMethod("finishBuffer not implemented yet"));
    };
    const _ = function() {
        return (e || (e = n("Promise"))).reject(new (o("WACustomError")).UnimplementedMethod("updatePrivateStatsIds not implemented yet"));
    };
    const f = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const o = yield r("WAWebWamStorage").getPsToken();
            if (o) {
                if (t({
                    redeemCount: o.redeemCount,
                    creationTs: o.creationTs
                }, {
                    maxExpirySeconds: 86400
                })) {
                    return r("WAWebWamStorage").savePsToken(babelHelpers.extends({}, o, {
                        redeemCount: o.redeemCount + 1
                    })).then(()=>o.token);
                }
                return (e || (e = n("Promise"))).resolve(null);
            }
            return null;
        });
        return function(n) {
            return t.apply(this, arguments);
        };
    })();
    function g(e) {
        return r("WAWebWamStorage").savePsToken({
            key: "token",
            token: e,
            creationTs: o("WATimeUtils").unixTime(),
            redeemCount: 1
        });
    }
    function h() {
        return (e || (e = n("Promise"))).resolve(o("WAWebUserPrefsGeneral").getPsKillSwitchToken());
    }
    function y(t) {
        o("WAWebUserPrefsGeneral").setPsKillSwitchToken(t);
        return (e || (e = n("Promise"))).resolve();
    }
    const C = {
        getStreamId: function() {
            return 1;
        },
        saveBuffer: s,
        finishBuffer: p,
        getStartingSequenceRow: c,
        getBuffers: d,
        removeBufferByKey: u,
        nukeMetrics: m,
        updatePrivateStatsIds: _,
        redeemPrivateStatsToken: f,
        savePrivateStatsToken: g,
        privateStatsKillSwitchGetBlockedToken: h,
        privateStatsKillSwitchSet: y
    };
    function b() {
        o("WAWamStorage").startWamStorage(C);
    }
    l.startWamStore = b;
}, 98);