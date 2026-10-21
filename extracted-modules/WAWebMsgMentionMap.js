__d("WAWebMsgMentionMap", [
    "WAWebContactCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (!e.mentionedJidList || !e.mentionedJidList.length) {
            return null;
        }
        const t = {};
        e.mentionedJidList.forEach((e)=>{
            t[`@${r("WAWebWid").user(e) || ""}`] = o("WAWebContactCollection").ContactCollection.gadd(e);
        });
        return t;
    }
    function s(e) {
        if (!e.groupMentions || !e.groupMentions.length) {
            return null;
        }
        return e.groupMentions.reduce((acc, groupMention)=>{
            const r = `@${groupMention.groupJid.toString()}`;
            acc[r] = groupMention.groupSubject ?? "";
            return acc;
        }, {});
    }
    l.calculateMsgMentionMap = e;
    l.calculateMsgGroupMentionMap = s;
}, 98);