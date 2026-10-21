__d("WAWebExtractMentionFieldsFromScheduledMsg", [
    "WAWebDecodeJid",
    "WAWebGetScheduledMsgContextInfo"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(e);
        if (t == null) {
            return {};
        }
        const n = {};
        const { groupMentions: r, mentionedJid: a, nonJidMentions: i } = t;
        if (Array.isArray(a) && a.length > 0) {
            const l = [];
            for (const u of a){
                const c = s(u);
                if (c != null) {
                    l.push(c);
                }
            }
            if (l.length > 0) {
                n.mentionedJidList = l;
            }
        }
        if (Array.isArray(r) && r.length > 0) {
            const d = [];
            for (const m of r){
                const p = s(m.groupJid);
                if (p != null) {
                    d.push({
                        groupJid: p,
                        groupSubject: m.groupSubject
                    });
                }
            }
            if (d.length > 0) {
                n.groupMentions = d;
            }
        }
        if (i != null) {
            n.nonJidMentions = i;
        }
        return n;
    }
    function s(e) {
        const t = o("WAWebDecodeJid").decodeJid(e);
        if (typeof t === "string") {
            return null;
        }
        return t;
    }
    l.extractMentionFieldsFromScheduledMsg = e;
}, 98);