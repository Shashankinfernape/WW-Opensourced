__d("WAWebMsgOpaqueData", [
    "WAWebDBMsgOpaqueDataKeys",
    "WAWebMsgKey",
    "WAWebPollsDbUtils",
    "WAWebProtobufsMdStorageMsgRowOpaqueData.pb",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const cachedPasscodeDerivedKey = o("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey;
            if (cachedPasscodeDerivedKey == null) {
                location.reload();
                return;
            }
            const n = m(e);
            const r = new Uint8Array(16);
            self.crypto.getRandomValues(r);
            const a = yield self.crypto.subtle.encrypt({
                iv: r,
                name: "AES-GCM"
            }, cachedPasscodeDerivedKey, n);
            e.encryptedData = {
                iv: r,
                data: a
            };
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const e_encryptedData = e.encryptedData;
            if (e_encryptedData != null) {
                const r = yield self.crypto.subtle.decrypt({
                    iv: e_encryptedData.iv,
                    name: "AES-GCM"
                }, t, e_encryptedData.data);
                d(e, r);
                e.encryptedData = null;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        const n = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec, t);
        const { currentMsg, quotedMsg } = n;
        if (currentMsg) {
            _(e, currentMsg);
        }
        if (e.quotedMsg && quotedMsg) {
            _(e.quotedMsg, quotedMsg);
        }
        e.encryptedData = null;
    }
    function m(e) {
        const t = {
            currentMsg: {},
            quotedMsg: {}
        };
        t.currentMsg = p(e);
        if (e.quotedMsg) {
            t.quotedMsg = p(e.quotedMsg);
        }
        const n = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec, t);
        return n.readBuffer();
    }
    var p = (t)=>{
        let e;
        const n = {};
        if ((e = t.paymentNoteMsg) != null && e.body) {
            n.paymentNoteMsgBody = t.paymentNoteMsg.body;
            t.paymentNoteMsg.body = undefined;
        }
        o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach((e)=>{
            if (t[e] && o("WAWebDBMsgOpaqueDataKeys").MsgKeyFieldsInOpaqueData.includes(e)) {
                n[e] = t[e].toString();
            } else {
                n[e] = t[e];
            }
            t[e] = undefined;
        });
        n.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(t.pollOptions);
        t.pollOptions = undefined;
        n.pollVotesSnapshot = o("WAWebPollsDbUtils").compressPollVotesSnapshot(t.pollVotesSnapshot);
        t.pollVotesSnapshot = undefined;
        return n;
    };
    var _ = (t, n)=>{
        if (n.paymentNoteMsgBody != null && t.paymentNoteMsg) {
            t.paymentNoteMsg.body = n?.paymentNoteMsgBody;
        }
        o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach((e)=>{
            const a = n[o("WAWebDBMsgOpaqueDataKeys").getKey(t.type, e)];
            if (a && o("WAWebDBMsgOpaqueDataKeys").MsgKeyFieldsInOpaqueData.includes(e)) {
                t[e] = r("WAWebMsgKey").fromString(a);
            } else {
                t[e] = a;
            }
        });
        t.pollOptions = o("WAWebPollsDbUtils").expandPollOptions(n?.pollOptions);
        t.pollVotesSnapshot = o("WAWebPollsDbUtils").expandPollVotesSnapshot(n?.pollVotesSnapshot);
    };
    l.encryptDataInMsgModel = e;
    l.decryptDataInMsgModel = u;
}, 98);