__d("WAWebCallCollectionUtils", [
    "WAWebCallModel"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const o = {
            id: e,
            isGroup: n?.isGroupCall ?? !!(n != null && n.groupWid),
            groupJid: n?.groupWid
        };
        if (t != null) {
            o.peerJid = t;
        }
        if (n) {
            if (n.isVideo != null) {
                o.isVideo = n.isVideo;
            }
            if (n.offerTime != null) {
                o.offerTime = n.offerTime;
            }
            if (n.isSilenced != null) {
                o.isSilenced = n.isSilenced;
            }
            if (n.offerReceivedWhileOffline != null) {
                o.offerReceivedWhileOffline = n.offerReceivedWhileOffline;
            }
        }
        return o;
    }
    function s(e, t) {
        e.id = t.id;
        if (t.isGroup != null) {
            e.isGroup = t.isGroup;
        }
        if (t.groupJid !== void 0) {
            e.groupJid = t.groupJid ?? null;
        }
        if (t.peerJid != null) {
            e.peerJid = t.peerJid;
        }
        if (t.isVideo != null) {
            e.isVideo = t.isVideo;
        }
        if (t.offerTime != null) {
            e.offerTime = t.offerTime;
        }
        if (t.isSilenced != null) {
            e.isSilenced = t.isSilenced;
        }
        if (t.offerReceivedWhileOffline != null) {
            e.offerReceivedWhileOffline = t.offerReceivedWhileOffline;
        }
        return e;
    }
    function u(e) {
        const t = new (r("WAWebCallModel"))(e.id);
        return s(t, e);
    }
    l.buildCallPropsFromOffer = e;
    l.assignCallPropsToCall = s;
    l.createCallModel = u;
}, 98);