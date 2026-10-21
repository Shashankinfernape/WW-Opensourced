__d("WAWebMsgKeyNewId", [
    "WABinary",
    "WAHex",
    "WARandomHex",
    "WATimeUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WATimeUtils").unixTime();
        const t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString();
        const n = o("WAHex").parseHex(o("WARandomHex").randomHex(16));
        const r = new (o("WABinary")).Binary;
        r.writeInt64(e);
        r.writeString(t);
        r.writeBuffer(n);
        return r.readByteArrayView();
    }
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = new Uint8Array((yield self.crypto.subtle.digest("SHA-256", e())), 0, 9);
            return `3EB0${o("WAHex").toHex(t)}`;
        });
        return u.apply(this, arguments);
    }
    l.genMsgKeyUint = e;
    l.getMsgKeyNewSHA256Id = s;
}, 98);