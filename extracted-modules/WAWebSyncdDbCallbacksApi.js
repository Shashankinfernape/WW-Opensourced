__d("WAWebSyncdDbCallbacksApi", [
    "Promise",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebSyncdFatal",
    "WAWebSyncdLogs",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = function(o) {
        if (o.deviceIndex === 0) {
            r("WAWebAndroidUnsupportedActionsSync").updatePrimaryAllowsAllMutationsFlag("device index");
        }
        return (e || (e = n("Promise"))).resolve();
    };
    const u = function(r) {
        o("WAWebBackendEventBus").BackendEventBus.triggerAppStateSyncCompleted(r);
        return (e || (e = n("Promise"))).resolve();
    };
    const c = function() {
        return o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {}));
    };
    const d = function(t) {
        return o("WAWebSyncdFatal").handleFatalError(t?.collections);
    };
    function m(e) {
        return o("WAWebSchemaChat").getChatTable().bulkGet(e).then((e)=>e.map((e)=>e?.accountLid));
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaChat").getChatTable().bulkGet(e, false);
            const n = [];
            for (const r of t){
                if (r?.historyChatId != null && r.historyChatId !== "") {
                    n.push(r.historyChatId);
                }
            }
            return n;
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                return [];
            }
            for(var t = e.map((e)=>r("WAWebMsgKey").fromString(e)).filter((e)=>e.remote.isUser() && !e.remote.isLid()), n = (yield o("WAWebSchemaChat").getChatTable().bulkGet(t.map((e)=>e.remote.toString()))).map((e)=>e?.accountLid), a = [], i = 0; i < t.length; i++){
                const l = n[i];
                if (l != null) {
                    const s = t[i];
                    a.push(new (r("WAWebMsgKey"))({
                        fromMe: s.fromMe,
                        remote: o("WAWebWidFactory").createWid(l),
                        id: s.id
                    }).toString());
                }
            }
            return a;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>r("WAWebMsgKey").fromString(e)).filter((e)=>e.remote.isLid());
            if (t.length === 0) {
                return [];
            }
            for(var n = Array.from(new Set(t.map((e)=>e.remote.toString()))), a = yield o("WAWebSchemaChat").getChatTable().bulkGet(n, false), i = new Map, l = 0; l < n.length; l++){
                const u = a[l]?.historyChatId;
                if (u != null && u !== "") {
                    i.set(n[l], u);
                }
            }
            const c = [];
            for (const d of t){
                const m = i.get(d.remote.toString());
                if (m != null) {
                    c.push(new (r("WAWebMsgKey"))({
                        fromMe: d.fromMe,
                        remote: o("WAWebWidFactory").createWid(m),
                        id: d.id,
                        participant: d.participant
                    }).toString());
                }
            }
            return c;
        });
        return y.apply(this, arguments);
    }
    l.handleSyncBeforeApplyPatch = s;
    l.handleSyncCompleted = u;
    l.handleSyncDelayApplyingPatchUntilUIUnblocks = c;
    l.handleSyncdFatal = d;
    l.writeSyncdLog = o("WAWebSyncdLogs").writeSyncdLogImpl;
    l.printSyncdLog = o("WAWebSyncdLogs").printSyncdLogs;
    l.bulkGetAccountLid = m;
    l.getAdditionalHistoryChatIds = p;
    l.getAdditionalLidMsgKeys = f;
    l.getAdditionalHistoryChatIdMsgKeys = h;
}, 98);