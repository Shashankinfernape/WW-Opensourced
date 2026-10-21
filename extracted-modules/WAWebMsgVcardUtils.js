__d("WAWebMsgVcardUtils", [
    "WAWebCompactMapString",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebVcardParsingUtils",
    "WAWebWorkerSafeBackendApi"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.VCARD) {
            return null;
        }
        return o("WAWebVcardParsingUtils").vcardAllWids(o("WAWebMsgGetters").getVcard(e));
    }
    function s(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
            return null;
        }
        const t = o("WAWebMsgGetters").getVcardList(e);
        const n = r("WAWebCompactMapString")(t, function(e) {
            return e.vcard;
        }).map((e)=>o("WAWebVcardParsingUtils").parseMultiVcard(e)).flat();
        const a = n.map((e)=>o("WAWebVcardParsingUtils").vcardAllWids(e)).flat();
        return Array.from(new Set(a));
    }
    function u(t) {
        const n = t.reduce((acc, item)=>{
            if (item == null || item.type !== o("WAWebMsgType").MSG_TYPE.VCARD && item.type !== o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
                return acc;
            }
            const r = item.type === o("WAWebMsgType").MSG_TYPE.VCARD ? e(item) : s(item);
            if (r == null) {
                return acc;
            }
            const a = r.filter((e)=>o("WAWebLidMigrationUtils").toUserLid(e) == null);
            if (a.length === 0) {
                return acc;
            }
            if (acc == null) {
                return new Set(a);
            }
            a.forEach((e)=>acc.add(e));
            return acc;
        }, null);
        if (n != null) {
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("syncContactListJob", {
                contactIds: Array.from(n),
                shouldSyncDevice: false,
                mode: "query"
            });
        }
    }
    l.getVcardWids = e;
    l.getMultiVcardWids = s;
    l.processVCardMessagesForLidMappings = u;
}, 98);