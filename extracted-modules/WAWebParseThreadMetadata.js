__d("WAWebParseThreadMetadata", [
    "WAWebHandleInfoBulletinTypes"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = e.child(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.THREAD_META);
        const chatTimestamp = {};
        t.forEachChildWithTag("item", function(e) {
            const t = e.attrChatJid("from");
            const r = e.attrTime("t");
            chatTimestamp[String(t)] = r;
        });
        return {
            chatTimestamp,
            watermarks: null
        };
    }
    l.parseThreadMetadata = e;
}, 98);