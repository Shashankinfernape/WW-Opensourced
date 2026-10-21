__d("WAWebHandleMediaRetryNotification", [
    "WABase64",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebCryptoMediaRetry",
    "WAWebProtobufsMmsRetry.pb",
    "WAWebRequestMediaReuploadManager",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = new (r("WADeprecatedWapParser"))("mediaRetryNotification", function(e) {
        e.assertTag("notification");
        const t = e.maybeChild("error");
        const n = e.attrWapJid("from");
        let r;
        if (e.hasAttr("participant")) {
            r = e.attrWapJid("participant");
        }
        if (t) {
            return {
                from: n,
                participant: r,
                msgId: e.attrString("id"),
                ciphertext: null,
                iv: null,
                errorCode: o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.cast(t.attrInt("code"))
            };
        }
        const a = e.child("encrypt");
        return {
            from: n,
            participant: r,
            msgId: e.attrString("id"),
            ciphertext: a.child("enc_p").contentBytes(),
            iv: a.child("enc_iv").contentBytes(o("WAWebCryptoMediaRetry").ENC_IV_SIZE),
            errorCode: null
        };
    });
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = p.parse(t);
            if (n.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: parsing error: ",
                    ""
                ])), n.error.toString());
                throw n.error;
            }
            const n_success = n.success;
            const { errorCode, from, msgId, participant } = n_success;
            if (from == null || !o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createDeviceWidOrThrow(from.toString()))) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: not self-primary: ",
                    ""
                ])), from);
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: received from not self-primary"
                ]))).sendLogs("media-retry-notification-not-from-self-primary");
            }
            const g = o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(msgId),
                class: "notification",
                type: "mediaretry",
                to: from ?? o("WAWebCommsWapMd").USER_JID(o("WAWebUserPrefsMeUser").getMeUserOrThrow()),
                participant: participant || o("WAWap").DROP_ATTR
            });
            if (errorCode != null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: ",
                    ": received error code: ",
                    ""
                ])), msgId, errorCode);
                o("WAWebRequestMediaReuploadManager").RequestMediaReuploadManager.resolveMediaReupload({
                    msgId,
                    result: errorCode
                });
                return g;
            }
            const n_success_1 = n.success;
            const { ciphertext, iv } = n_success_1;
            const b = o("WAWebRequestMediaReuploadManager").RequestMediaReuploadManager.getMediaKey(msgId);
            if (b == null || b === "") {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: ",
                    ": mediaKey is not found"
                ])), msgId);
                return g;
            }
            const v = yield o("WAWebCryptoMediaRetry").decryptMediaRetryNotification({
                ciphertext: r("nullthrows")(ciphertext),
                cryptoKey: o("WABase64").decodeB64(b),
                iv: r("nullthrows")(iv),
                stanzaId: msgId
            });
            const { directPath, result, stanzaId } = v;
            if (stanzaId !== msgId) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: ",
                    ": id mismatch"
                ])), msgId);
                throw r("err")("handleMediaRetryNotification: msg id does not match");
            }
            o("WAWebRequestMediaReuploadManager").RequestMediaReuploadManager.resolveMediaReupload({
                msgId,
                result,
                directPath
            });
            return g;
        });
        return f.apply(this, arguments);
    }
    l.default = _;
}, 98);