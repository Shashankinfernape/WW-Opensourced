__d("WAWebHandleServerSyncNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebHandleReportServerSyncNotification",
    "WAWebSyncBootstrap",
    "WAWebSyncd",
    "WAWebSyncdCollectionUtils",
    "WAWebSyncdConst"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = new (r("WADeprecatedWapParser"))("serverSyncNotification", function(t) {
        t.assertTag("notification");
        if (!t.hasChild("collection")) {
            throw t.createParseError("Server sync notification does not contain any collections");
        }
        const n = t.attrString("id");
        const changedCollections = new Map(t.mapChildrenWithTag("collection", function(e) {
            return [
                e.attrString("name"),
                e.attrInt("version")
            ];
        }));
        const a = t.hasAttr("offline");
        const i = t.attrString("from");
        if (i !== o("WAWap").S_WHATSAPP_NET.toString()) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                'handleServerSyncNotification: "from" is not domain jid "s.whatsapp.net"'
            ])));
        }
        return {
            changedCollections,
            stanzaId: n,
            offline: a
        };
    });
    function _(success) {
        if (success.changedCollections) {
            const t = new Map;
            const a = [];
            for (const [l, d] of success.changedCollections){
                const p = o("WAWebSyncdConst").CollectionName.cast(l);
                if (p != null) {
                    t.set(p, d);
                } else if (a.length < 3) {
                    a.push(l);
                }
            }
            if (a.length > 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " unknown collection names in notification => ",
                    ""
                ])), a.length, a);
            }
            let _ = Array.from(t.keys());
            if (success.offline) {
                _.forEach((e)=>{
                    const t = o("WAWebHandleReportServerSyncNotification").offlineNotificationsCount.get(e);
                    if (t != null) {
                        o("WAWebHandleReportServerSyncNotification").offlineNotificationsCount.set(e, t + 1);
                    } else {
                        o("WAWebHandleReportServerSyncNotification").offlineNotificationsCount.set(e, 1);
                    }
                });
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: incoming sync notification for collections\n    ",
                ""
            ])), Array.from(t.entries()).map(([t, n])=>`${t} v${n}`).join("\n"));
            if (r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess()) {
                _ = _.filter((e)=>o("WAWebSyncdCollectionUtils").isCriticalCollection(e));
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: filtered non critical collections during bootstrap. new collections: ",
                    ""
                ])), _);
            }
            o("WAWebSyncd").markCollectionsForSync(_, t);
        }
        return (m || (m = n("Promise"))).resolve(o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(success.stanzaId),
            class: "notification",
            type: "server_sync",
            to: o("WAWap").S_WHATSAPP_NET
        }));
    }
    function f(e) {
        const t = p.parse(e);
        if (t.error) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), t.error.toString());
            return (m || (m = n("Promise"))).reject(t.error);
        }
        return _(t.success);
    }
    l.handleServerSyncNotification = f;
}, 98);