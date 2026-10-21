__d("WAWebAddOnParseWebMsgInfo", [
    "WALongInt",
    "WATimeUtils",
    "WAWebDecodeJid",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ key, outerParticipant: n }) {
        const a = !!key.fromMe;
        const i = o("WAWebDecodeJid").decodeJid(key.remoteJid);
        const l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        let s;
        if (a) {
            if (i != null && typeof i !== "string" && !i.isUser()) {
                s = l;
            }
        } else {
            s = n != null ? o("WAWebDecodeJid").decodeJid(n) : o("WAWebDecodeJid").decodeJid(key.participant);
        }
        if (typeof i === "string" || i == null) {
            return null;
        }
        let u;
        if (s != null && typeof s !== "string") {
            u = new (r("WAWebMsgKey"))({
                id: r("nullthrows")(key.id),
                fromMe: a,
                remote: i,
                participant: s
            });
        } else {
            u = new (r("WAWebMsgKey"))({
                id: r("nullthrows")(key.id),
                fromMe: a,
                remote: i
            });
        }
        const c = u.participant || u.remote;
        const d = o("WAWebWidFactory").asUserWidOrThrow(a === true ? l : c);
        return {
            msgKey: u,
            sender: d
        };
    }
    function s(e) {
        if (e == null) {
            return null;
        }
        return Math.floor(o("WALongInt").numberOrThrowIfTooLarge(e) / 1000);
    }
    function u(e) {
        const t = o("WATimeUtils").unixTimeMs();
        if (e == null) {
            return t;
        }
        return Math.max(e + 1, t);
    }
    l.buildAddonMsgKey = e;
    l.getAddonServerTimestamp = s;
    l.getIncreasingLatestSenderTimestampMs = u;
}, 98);