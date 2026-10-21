__d("WAWebAddonHydrationUtils", [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonDBTable",
    "WAWebAddonPerfUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsHistorySync",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {};
    const u = {};
    function c(e) {
        let n = e;
        const r = n.length && o("WAWebUserPrefsHistorySync").getHistorySyncStatus()?.recentCompleted === true && n[0].type !== o("WAWebMsgType").MSG_TYPE.REACTION;
        if (r) {
            n = e.filter((e)=>{
                let t;
                if (e.type === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) {
                    t = e.id.remote;
                } else {
                    t = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
                }
                const n = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
                return p(t, n) || f(t, n);
            });
        }
        return n;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ hydrationType, ids }) {
            const i = function(t) {
                if (!s[hydrationType]) {
                    s[hydrationType] = new Set;
                }
                if (!p(t, hydrationType)) {
                    s[hydrationType].add(t.toString());
                }
            };
            const l = ids.filter((e)=>!p(e, hydrationType));
            if (l.length !== 0) {
                _(l, hydrationType);
                let u;
                try {
                    const mode = o("WAWebAddonSelectUtils").getTableModeByMsgType(hydrationType);
                    let m;
                    if (hydrationType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) {
                        u = yield o("WAWebAddonPerfUtils").createAddonQplMarker(o("WAWebAddonPerfUtils").AddonQplMarkerType.UI, {
                            mode,
                            type: o("WAWebAddonPerfUtils").AnnotationRequestType.BulkGetByChatWid,
                            size: 1
                        });
                        const f = r("compactMap")(l, function(e) {
                            if (e instanceof r("WAWebWid")) {
                                return e;
                            }
                            return null;
                        });
                        m = yield o("WAWebAddonDBTable").addonInternalDBTable.bulkGetByChatWid(mode, f);
                    } else {
                        u = yield o("WAWebAddonPerfUtils").createAddonQplMarker(o("WAWebAddonPerfUtils").AddonQplMarkerType.UI, {
                            mode,
                            type: o("WAWebAddonPerfUtils").AnnotationRequestType.BulkGetByParentMsgKeys,
                            size: 1
                        });
                        const g = r("compactMap")(l, function(e) {
                            if (e instanceof r("WAWebMsgKey")) {
                                return e;
                            }
                            return null;
                        });
                        m = yield o("WAWebAddonDBTable").addonInternalDBTable.bulkGetByParentMsgKey(mode, g);
                    }
                    u?.success();
                    if (m.length) {
                        yield o("WAWebAddonPluginProcessor").getAddonProcessor(hydrationType).updateCollection({
                            add: m,
                            remove: []
                        }, o("WAWebAddonConstants").AddonProcessMode.Hydration);
                    }
                    const h = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
                    if (h?.recentCompleted === true) {
                        l.forEach(i);
                    }
                } catch (error) {
                    u?.fail();
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Addon][Hydration] Failed to hydrate ",
                        " for ",
                        " with error, ",
                        ""
                    ])), hydrationType, l.map((e)=>e.toString()), error).sendLogs("hydratingAddonMsgs", {
                        sampling: 0.01
                    });
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        let n;
        return !!((n = s[t]) != null && n.has(e.toString()));
    }
    function _(e, hydrationType) {
        if (!u[hydrationType]) {
            u[hydrationType] = new Set;
        }
        const n = u[hydrationType];
        e.forEach((e)=>n.add(e.toString()));
    }
    function f(e, t) {
        let n;
        return !!((n = u[t]) != null && n.has(e.toString()));
    }
    l.filterAddonsByHydratedStatus = c;
    l.hydrateAddons = d;
}, 98);