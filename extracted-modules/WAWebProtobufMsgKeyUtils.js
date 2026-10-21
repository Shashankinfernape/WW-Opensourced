__d("WAWebProtobufMsgKeyUtils", [
    "invariant",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l, s) {
    function e({ fromMe, id, participant, remoteJid }, t) {
        const u = participant ?? t?.toString();
        if (!(fromMe != null && remoteJid != null && id != null)) {
            s(0, 56276);
        }
        let c = u != null && o("WAWebWidFactory").isWidlike(u) ? o("WAWebWidFactory").createWid(u) : undefined;
        const d = o("WAWebWidFactory").createWid(remoteJid);
        if ((d.isGroup() || d.isBroadcast()) && fromMe) {
            c = o("WAWebUserPrefsMeUser").getMaybeMePnUser() ?? undefined;
        }
        return new (r("WAWebMsgKey"))({
            fromMe,
            id,
            participant: c,
            remote: o("WAWebWidFactory").createWid(remoteJid)
        });
    }
    function u(e) {
        let t;
        return {
            fromMe: e.fromMe,
            id: e.id,
            participant: e.fromMe || (t = e.participant) == null ? undefined : t.toString({
                legacy: true
            }),
            remoteJid: e.remote.toString({
                legacy: true
            })
        };
    }
    l.protobufToMsgKey = e;
    l.msgKeyToProtobuf = u;
}, 98);