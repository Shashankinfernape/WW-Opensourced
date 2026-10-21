__d("WAWebTrustedContactsUtils", [
    "$InternalEnum",
    "WABase64",
    "WATimeUtils",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = 15552000;
    const s = n("$InternalEnum")({
        Sender: "sender",
        Receiver: "receiver"
    });
    function u(t) {
        const n = t === s.Receiver ? "tctoken_duration" : "tctoken_duration_sender";
        return Math.min(o("WAWebABProps").getABPropConfigValue(n), e);
    }
    function c(e, t) {
        return e < d(t);
    }
    function d(e) {
        const t = e === s.Receiver ? "tctoken_num_buckets" : "tctoken_num_buckets_sender";
        const n = o("WAWebABProps").getABPropConfigValue(t);
        const r = u(e);
        const a = Math.floor(o("WATimeUtils").unixTime() / r);
        const i = a - (n - 1);
        return o("WATimeUtils").castToUnixTime(i * r);
    }
    function m(e) {
        if (e == null) {
            return true;
        }
        const t = o("WAWebABProps").getABPropConfigValue("tctoken_duration_sender");
        const n = Math.floor(o("WATimeUtils").unixTime() / t);
        const r = Math.floor(e / t);
        return n > r;
    }
    function p(e) {
        return o("WABase64").encodeB64(e);
    }
    l.TcTokenMode = s;
    l.getTcTokenDuration = u;
    l.isTokenExpired = c;
    l.tokenExpirationCutoff = d;
    l.shouldSendNewToken = m;
    l.encodeTcTokenForMex = p;
}, 98);