__d("WAWebScheduledMsgOutgoingMsgKey", [
    "WAWebMsgKey",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        try {
            const o = r("WAWebMsgKey").fromString(e);
            if (t.equals(o.remote)) {
                return o;
            }
            return new (r("WAWebMsgKey"))({
                fromMe: o.fromMe,
                remote: t,
                id: o.id,
                participant: o.participant
            });
        } catch (o) {
            return new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: t,
                id: e,
                participant: t.isGroup() ? n : void 0
            });
        }
    }
    function s(e, t, n) {
        let a;
        if (t.isGroup() && n != null) {
            try {
                a = o("WAWebWidFactory").asUserWidOrThrow(o("WAWebWidFactory").createWid(n));
            } catch (e) {
                a = void 0;
            }
        }
        return new (r("WAWebMsgKey"))({
            fromMe: false,
            remote: t,
            id: e,
            participant: a
        });
    }
    l.buildScheduledMsgOutgoingMsgKey = e;
    l.buildScheduledMsgIncomingMsgKey = s;
}, 98);