__d("WAWebAddonProcessRevoke", [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonGatingUtils",
    "WAWebAddonLogUtils",
    "WAWebAddonProcessRevokeDataUtils",
    "WAWebAddonRetryRequestUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const a = [];
            for (const i of o("WAWebAddonConstants").AddonTableMode.members()){
                if (i !== o("WAWebAddonConstants").AddonTableMode.None) {
                    a.push(o("WAWebAddonDBTable").addonInternalDBTable.bulkGetByMsgKey(i, e, false).then((e)=>{
                        for (const n of e){
                            if (n != null) {
                                t.set(n.id.toString(), n);
                            }
                        }
                    }).catch(r("WAWebNoop")));
                }
            }
            yield (m || (m = n("Promise"))).all(a);
            return o("WAWebAddonSelectUtils").createAddonSelector(t);
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = [];
            const i = function*() {
                const e = l[0];
                const n = l[1];
                a.push(o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
                    processMode: t.mode,
                    tableMode: e
                }, n).catch((t)=>{
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "storeRevokesForTableMode for ",
                        ": ",
                        ""
                    ])), e, t);
                    throw t;
                }));
            };
            for (var l of r){
                yield* i();
            }
            const u = yield (m || (m = n("Promise"))).allSettled(a);
            if (o("WAWebAddonLogUtils").hasSettledWithError(u)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "revoking addons finished with errors"
                ]))).tags("addons", "messaging").sendLogs("revokeAddonMsgs");
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = [];
            const i = new Map;
            for (const l of t){
                const s = n.get(r("nullthrows")(l.protocolMessageKey));
                if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(s)) {
                    const c = o("WAWebAddonSelectUtils").getTableModeByMsgType(s.type);
                    if (!i.has(c)) {
                        i.set(c, {
                            add: [],
                            remove: []
                        });
                    }
                    const d = r("nullthrows")(i.get(c));
                    if (!l.id.equals(s.id)) {
                        d.remove.push(s);
                    }
                    d.add.push(l);
                    if (o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebMsgGetters").getFrom(s))) {
                        a.push([
                            s,
                            l
                        ]);
                    }
                }
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-infra]: processRevokeMsgs ",
                " addon(s)"
            ])), i.size);
            yield f(e, i);
            yield o("WAWebAddonRetryRequestUtils").replaceSelfMessageTypeRows(a);
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = {
                mode: o("WAWebAddonConstants").AddonProcessMode.SendRevoke
            };
            try {
                yield h(n, [
                    o("WAWebAddonProcessRevokeDataUtils").protocolRevokeToRevokeMsgData(e)
                ], o("WAWebAddonSelectUtils").createAddonSelector(new Map([
                    [
                        t.id.toString(),
                        t
                    ]
                ])));
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "process addon revoke ",
                    ", ",
                    ": ",
                    ""
                ])), e.id, t.id, error).tags("addons", "messaging").sendLogs("processSentRevokeMsg");
                throw error;
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                mode: o("WAWebAddonConstants").AddonProcessMode.Revoke
            };
            const n = new Set;
            try {
                const r = e.map((e)=>e.revokeMsgKey);
                const a = yield p(r);
                const i = [];
                for (const l of e){
                    const s = l.revokeMsgKey;
                    if (!a.has(s)) {
                        n.add(s);
                        continue;
                    }
                    const u = a.get(s);
                    const c = o("WAWebAddonProcessRevokeDataUtils").revokeMsgInfoToRevokeMsgData(l, u);
                    i.push(c);
                }
                yield h(t, i, a);
                return n;
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "process addon revokes: ",
                    ""
                ])), error).tags("addons", "messaging").sendLogs("processAddonRevokes");
                throw error;
            }
        });
        return S.apply(this, arguments);
    }
    l.processSentRevokeMsg = C;
    l.processRevokeMsgs = v;
}, 98);