__d("WAWebMessageListAlbums", [
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = 4;
    const s = 102;
    const u = 168;
    const c = 240;
    const d = 3;
    const m = 600;
    const p = [
        o("WAWebMsgType").MSG_TYPE.CALL_LOG
    ];
    function _(e, t) {
        if (h(e, t)) {
            return false;
        }
        return (o("WAWebMsgGetters").getIsGroupMsg(e) ? r("WAWebWid").equals(e.author, t.author) : r("WAWebWid").equals(e.from, t.from)) && e.isForwarded === t.isForwarded && e.forwardedNewsletterMessageInfo?.newsletterId === t.forwardedNewsletterMessageInfo?.newsletterId && t.t - e.t <= m;
    }
    const f = (t)=>!p.includes(t.type) && o("WAWebMsgGetters").getIsNotification(t);
    function g(e, t) {
        if (f(e) || f(t)) {
            return false;
        }
        if (e.forwardedNewsletterMessageInfo != null) {
            if (t.forwardedNewsletterMessageInfo == null) {
                return false;
            }
            return e.forwardedNewsletterMessageInfo.newsletterId === t.forwardedNewsletterMessageInfo.newsletterId;
        }
        if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
            return r("WAWebWid").equals(e.author, t.author) && o("WAWebMsgGetters").getIsSentByMe(e) === o("WAWebMsgGetters").getIsSentByMe(t);
        }
        if (h(e, t)) {
            return false;
        }
        return r("WAWebWid").equals(e.from, t.from);
    }
    function h(e, t) {
        const n = o("WAWebMsgGetters").getNewsletterAdminProfile(e);
        const r = o("WAWebMsgGetters").getNewsletterAdminProfile(t);
        return (n != null || r != null) && (n?.id !== r?.id || n?.name !== r?.name || n?.pictureId !== r?.pictureId);
    }
    l.ALBUM_MIN_SIZE = e;
    l.ALBUM_MAX_SIZE = s;
    l.ALBUM_MAX_HEIGHT = u;
    l.ALBUM_ANNOUNCEMENT_MAX_HEIGHT = c;
    l.ALBUM_PADDING = d;
    l.canBeGroupedAsAlbum = _;
    l.canBeGroupedWithNext = g;
}, 98);