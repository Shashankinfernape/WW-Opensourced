__d("WAWebHandleMsgReceiptParser", [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgTypes.flow",
    "WAWebJidToWid"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        delivery: (s = o("WAWebAck")).ACK.RECEIVED,
        read: s.ACK.READ,
        played: s.ACK.PLAYED,
        inactive: s.ACK.INACTIVE,
        "server-error": s.ACK.CONTENT_GONE,
        sender: s.ACK.RECEIVED,
        "read-self": s.ACK.READ,
        "played-self": s.ACK.PLAYED,
        peer_msg: s.ACK.PEER
    };
    const c = new (r("WADeprecatedWapParser"))("incomingMsgReceiptParser", function(e) {
        e.assertTag("receipt");
        const t = e.hasAttr("type") ? e.attrEnumOrNullIfUnknown("type", u) : o("WAWebAck").ACK.RECEIVED;
        const n = {
            stanzaId: e.attrString("id"),
            from: o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
            offline: e.maybeAttrString("offline")
        };
        const r = babelHelpers.extends({}, n, {
            ack: t ?? o("WAWebAck").ACK.RECEIVED,
            ackString: e.maybeAttrString("type")
        });
        const a = e.maybeChild("error");
        if (a?.hasAttr("reason") && a.attrString("reason") === "lid" && a.attrString("type") === "feature-incapable") {
            r.ack = o("WAWebAck").ACK.SENT;
        }
        const i = e.maybeChild("participants");
        if (i == null) {
            return p(r, e);
        }
        const l = i.hasAttr("message_id");
        if (l) {
            return m(n, i);
        }
        return d(r, i);
    });
    function d(e, t) {
        const n = t.mapChildrenWithTag("user", function(e) {
            try {
                const t = o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("jid"));
                const n = e.attrTime("t");
                return {
                    participant: t,
                    ts: n,
                    participantPn: e.hasAttr("participant_pn") ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("participant_pn")) : null,
                    participantUsername: e.maybeAttrString("participant_username")
                };
            } catch (e) {
                return null;
            }
        });
        const r = n.filter(Boolean);
        return babelHelpers.extends({}, e, {
            type: "aggregated_by_type",
            externalId: t.attrString("key"),
            receipts: r
        });
    }
    function m(t, n) {
        const r = [];
        n.forEachChildWithTag("user", function(t) {
            try {
                const a = o("WAWebJidToWid").deviceJidToDeviceWid(t.attrDeviceJid("jid"));
                const i = t.attrTime("t");
                const l = t.maybeAttrString("type");
                const s = t.maybeAttrEnum("type", u) ?? o("WAWebAck").ACK.RECEIVED;
                const c = t.hasAttr("participant_pn") ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("participant_pn")) : null;
                const d = t.maybeAttrString("participant_username");
                r.push({
                    participant: a,
                    participantPn: c,
                    participantUsername: d,
                    ack: s,
                    ackString: l,
                    ts: i
                });
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseAggregateByMessageReceipt: failed: ",
                    ""
                ])), t).sendLogs("failed-to-parse-aggregeated-by-message-receipt", {
                    sampling: 0.001
                });
            }
        });
        return babelHelpers.extends({}, t, {
            type: "aggregated_by_message",
            externalId: n.attrString("message_id"),
            receipts: r
        });
    }
    function p(e, t) {
        const n = t.hasAttr("participant") ? o("WAWebJidToWid").deviceJidToDeviceWid(t.attrDeviceJid("participant")) : null;
        const r = t.hasAttr("recipient") ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("recipient")) : null;
        const a = t.maybeAttrString("type") === "view";
        let i;
        if (t.hasChild("list")) {
            i = t.child("list").mapChildrenWithTag("item", function(e) {
                if (a) {
                    return e.attrString("server_id");
                }
                return e.attrString("id");
            });
        } else {
            i = [];
        }
        let l;
        if (t.hasChild("biz")) {
            const s = t.child("biz");
            const u = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(s.maybeAttrInt("actual_actors"));
            const c = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(s.maybeAttrInt("host_storage"));
            const d = s.maybeAttrInt("privacy_mode_ts");
            if (u != null && c != null && d != null) {
                l = {
                    actualActors: u,
                    hostStorage: c,
                    privacyModeTs: d
                };
            }
        }
        if (!a) {
            i.push(e.stanzaId);
        }
        let m = false;
        if (n?.isBot() && t.hasAttr("is_lid")) {
            m = t.attrString("is_lid") === "true";
        }
        return babelHelpers.extends({}, e, {
            type: "simple",
            externalIds: i,
            participant: n,
            participantPn: t.hasAttr("participant_pn") ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("participant_pn")) : null,
            participantUsername: t.maybeAttrString("participant_username"),
            recipient: r,
            ts: t.attrTime("t"),
            biz: l,
            isLidBot: m
        });
    }
    l.RECEIPT_TYPES_TO_ACK = u;
    l.msgReceiptParser = c;
}, 98);