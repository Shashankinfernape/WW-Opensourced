__d("WAWebAddonSortUtils", [
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebMessageAssociationConstants",
    "WAWebMsgType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = s(e, t);
        const { nonOrphans, orphans } = n;
        return {
            orphans,
            validAddons: nonOrphans
        };
    }
    function s(e, t) {
        const n = [];
        const nonOrphans = [];
        for (const i of e){
            const l = t.get(o("WAWebAddonProcessMsgsUtils").getParentMsgKey(i).toString());
            let s = l == null || l?.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
            if (l?.futureproofType != null) {
                s = !o("WAWebMessageAssociationConstants").orphanIneligibleFutureproofTypes.has(l.futureproofType);
            } else if (l?.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || l?.type === o("WAWebMsgType").MSG_TYPE.QUARANTINED) {
                s = true;
            }
            if (s) {
                n.push(i);
            } else if (l != null) {
                let u;
                const c = l.broadcastId != null && r("WAWebWid").isWid(l.broadcastId) && !!((u = l.broadcastId) != null && u.isBroadcastList());
                if (c) {
                    nonOrphans.push(babelHelpers.extends({}, i, {
                        author: undefined
                    }));
                } else {
                    nonOrphans.push(i);
                }
            }
        }
        return {
            orphans: n,
            nonOrphans
        };
    }
    function u(e) {
        const t = new Map;
        for (const n of e){
            const a = o("WAWebAddonSelectUtils").getAddonTableMode(n);
            if (!t.has(a)) {
                t.set(a, []);
            }
            t.get(a)?.push(n);
        }
        return t;
    }
    function c(processMode, t, n) {
        const r = new Map;
        for (const a of n){
            const l = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(a);
            if (!r.has(l)) {
                const processor = o("WAWebAddonPluginProcessor").getAddonProcessor(l);
                r.set(l, {
                    processor,
                    processMode,
                    tableMode: t,
                    addons: []
                });
            }
            r.get(l)?.addons.push(a);
        }
        return Array.from(r.values());
    }
    l.collectValidAndOrphanAddons = e;
    l.collectValidAndOrphans = s;
    l.groupAddonsByTableMode = u;
    l.groupAddonsByProcessor = c;
}, 98);