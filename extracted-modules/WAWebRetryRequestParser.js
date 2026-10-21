__d("WAWebRetryRequestParser", [
    "WADeprecatedWapParser",
    "WASignalPQTypes",
    "WAWebJidToWid"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("retryRequestParser", function(e) {
        e.assertTag("receipt");
        const n = e.attrString("type");
        if (n !== "retry" && n !== "enc_rekey_retry") {
            throw e.createParseError(`to have type "retry" or "enc_rekey_retry", got "${n}"`);
        }
        const r = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from"));
        const a = e.hasAttr("participant") ? o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("participant")) : null;
        let isLid = false;
        if (a?.isBot() && e.hasAttr("is_lid")) {
            isLid = e.attrString("is_lid") === "true";
        }
        const recipient = e.hasAttr("recipient") ? o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("recipient")) : null;
        const s = e.child("retry");
        const u = e.maybeChild("keys");
        let keyBundle = null;
        if (u != null) {
            const p = u.child("skey");
            const _ = u.maybeChild("pqkey") ?? u.maybeChild("pq");
            let kyberKey;
            if (_ != null) {
                try {
                    kyberKey = {
                        id: _.child("id").contentUint(3),
                        publicKey: _.child("value").contentBytes(o("WASignalPQTypes").KYBER_PUBLIC_KEY_BYTES),
                        signature: _.child("signature").contentBytes(64)
                    };
                } catch (e) {
                    kyberKey = undefined;
                }
            }
            const g = {
                identity: u.child("identity").contentBytes(32),
                deviceIdentity: u.maybeChild("device-identity")?.contentBytes(),
                skey: {
                    id: p.child("id").contentUint(3),
                    pubkey: p.child("value").contentBytes(32),
                    signature: p.child("signature").contentBytes(64)
                },
                kyberKey
            };
            if (r.isFbidBot() || r.isGroup() && a != null && a.isFbidBot()) {
                let h = null;
                const y = u.maybeChild("key");
                if (y != null) {
                    h = {
                        id: y.child("id").contentUint(3),
                        pubkey: y.child("value").contentBytes(32)
                    };
                }
                keyBundle = babelHelpers.extends({
                    type: "bot_retry"
                }, g, {
                    key: h
                });
            } else {
                const C = u.child("key");
                keyBundle = babelHelpers.extends({
                    type: "regular_retry"
                }, g, {
                    key: {
                        id: C.child("id").contentUint(3),
                        pubkey: C.child("value").contentBytes(32)
                    }
                });
            }
        }
        return {
            stanzaId: e.attrString("id"),
            originalMsgId: s.attrString("id"),
            ts: e.attrTime("t"),
            retryCount: s.maybeAttrInt("count") ?? 0,
            regId: e.child("registration").contentUint(4),
            offline: e.hasAttr("offline"),
            from: r,
            participant: a,
            isLid,
            recipient,
            keyBundle,
            type: n
        };
    });
    l.default = e;
}, 98);