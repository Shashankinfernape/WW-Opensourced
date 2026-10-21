__d("WAWebQuotedMsgModelUtils", [
    "WALogger",
    "WAWebBatchedStatusIdUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const t = c(e);
        if (t) {
            return o("WAWebMsgGetters").getIsSentByMe(t.unsafe());
        }
        return false;
    }
    function c(t) {
        const n = o("WAWebStateUtils").unproxy(t);
        if (n.quotedMsgKey == null) {
            try {
                const r = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(n);
                if (r !== "missing-stanza-id") {
                    n.quotedMsgKey = r;
                }
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to create quoted msg key"
                ]))).sendLogs("qmk-fail");
            }
            if (n.quotedMsgKey == null) {
                return null;
            }
        }
        if (!n.quotedMsg && !n.paymentRequestMessageKey) {
            return null;
        }
        const a = n.getCollection();
        const n_quotedMsgKey = n.quotedMsgKey;
        if (n_quotedMsgKey) {
            const l = a.get(n_quotedMsgKey);
            if (l) {
                return l.safe();
            }
            const s = o("WAWebLidMigrationUtils").getAlternateMsgKey(n_quotedMsgKey);
            if (s) {
                const u = a.get(s);
                if (u) {
                    return u.safe();
                }
            }
        }
        let c;
        if (n.quotedMsg) {
            c = d(n);
        } else if (n.paymentRequestMessageKey) {
            c = m(n);
        }
        if (c == null) {
            return null;
        }
        n.quotedMsgKey = c.id;
        c.ephemeralDuration = null;
        a.add(c.unsafe());
        return c;
    }
    function d(e) {
        const n = g(e);
        const e_quotedStanzaID = e.quotedStanzaID;
        const i = e.quotedRemoteJid ? e.quotedRemoteJid : e.id.remote;
        const l = o("WAWebUserPrefsMeUser").getMeUserMatchingAddressingModeOrThrow(i);
        if (!n || r("isStringNullOrEmpty")(e_quotedStanzaID)) {
            return null;
        }
        const s = o("WAWebUserPrefsMeUser").isMeAccount(n);
        const u = s ? "out" : "in";
        const c = {
            id: e_quotedStanzaID != null && r("WAWebWid").isStatus(i) ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(e_quotedStanzaID) : e_quotedStanzaID,
            from: s ? l : i,
            to: s ? i : l,
            self: u,
            author: n,
            remote: i
        };
        const d = r("WAWebWid").isGroup(c.from) || r("WAWebWid").isGroup(c.to);
        if (d || r("WAWebWid").isStatus(i)) {
            c.participant = n;
        }
        Object.assign(c, e.quotedMsg);
        const m = o("WAWebMsgModelUtils").createQuotedMsg(c) ?? undefined;
        if (m == null) {
            return null;
        }
        if (e.selectedCarouselCardIndex != null) {
            m.interactiveHeader = undefined;
            m.isCarouselCard = false;
        }
        return m.safe();
    }
    function m(e) {
        let t;
        const r = g(e);
        const a = (t = e.paymentRequestMessageKey) != null && t.remote ? e.paymentRequestMessageKey.remote : e.id.remote;
        const i = o("WAWebUserPrefsMeUser").getMeUserMatchingAddressingModeOrThrow(a);
        if (!e.paymentRequestMessageKey || !r) {
            return null;
        }
        const fromMe = e.paymentRequestMessageKey.fromMe;
        const s = fromMe ? "out" : "in";
        const u = e.paymentRequestMessageKey.self ?? s;
        const c = e.paymentRequestMessageKey.participant || e.paymentMessageReceiverJid;
        const d = e.paymentRequestMessageKey.id;
        const m = {
            id: d,
            from: fromMe ? i : a,
            to: fromMe ? a : i,
            self: u,
            participant: c,
            author: c,
            remote: a,
            amount1000: e.paymentAmount1000,
            currency: e.paymentCurrency,
            receiverJid: o("WAWebMsgGetters").getSender(e),
            type: e.type,
            subtype: "request"
        };
        return o("WAWebMsgModelUtils").createQuotedMsg(m)?.safe();
    }
    function p(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (t.quotedMsg == null) {
            return t.quotedRemoteJid;
        }
        return null;
    }
    function _(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (t.quotedMsg == null) {
            return t.quotedGroupSubject;
        }
        return null;
    }
    function f(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (t.quotedMsg == null) {
            return t.quotedParentGroupJid;
        }
        return null;
    }
    var g = (t)=>{
        if (t.quotedParticipant == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "null quotedParticipant in quotedMsg"
            ]))).sendLogs("null-quoted-participant");
        }
        return t.quotedParticipant;
    };
    l.isMyQuotedMsg = u;
    l.getQuotedMsgObj = c;
    l.createQuotedMsgObj = d;
    l.getQuotedMsgAdminGroupJid = p;
    l.getQuotedMsgAdminGroupSubject = _;
    l.getQuotedMsgAdminParentGroupJid = f;
}, 98);