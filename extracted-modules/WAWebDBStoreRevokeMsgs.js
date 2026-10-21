__d("WAWebDBStoreRevokeMsgs", [
    "Promise",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "cr:375"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = n("cr:375") ?? {};
    const u_ftsLightClient = u.ftsLightClient;
    const d = 20;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = [];
            let a = [];
            const i = e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = yield _(e);
                    const { pluginLinkMsgIds, pluginLinkMsgIdsRowIds } = n;
                    t = [].concat(t, pluginLinkMsgIds);
                    a = [].concat(a, pluginLinkMsgIdsRowIds);
                    yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(t);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            yield (s || (s = n("Promise"))).all(i);
            if (u_ftsLightClient != null) {
                u_ftsLightClient.purge(a).catch(r("WAWebNoop"));
            }
            o("WAWebBackendApi").frontendFireAndForget("deleteAssociatedBotCarouselMsgs", {
                msgKeys: t
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const pluginLinkMsgIds = [];
            const pluginLinkMsgIdsRowIds = [];
            const { internalId, targetId } = e;
            const i = internalId.split("_")[0];
            yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], internalId, `${i}_g`, {
                reverse: false,
                limit: d,
                shouldDecrypt: false
            }, function(e) {
                if (e.botResponseTargetId === targetId) {
                    pluginLinkMsgIds.push(e.id);
                    pluginLinkMsgIdsRowIds.push(String(e.rowId));
                } else {
                    return true;
                }
                return false;
            });
            return {
                pluginLinkMsgIds,
                pluginLinkMsgIdsRowIds
            };
        });
        return f.apply(this, arguments);
    }
    l.findAndDeleteAssociatedPluginMsg = m;
    l.findAssociatedPluginMsgs = _;
}, 98);