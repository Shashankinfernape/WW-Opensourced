__d("WAWebConditionalRevealPreProcessor", [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleSingleMsg",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgOrphanRevealKeyStore",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    const T = {
        decryptedProto: null,
        decryptedProtoBytes: null,
        isRevealPending: false,
        revealKeyId: null,
        viewMode: null
    };
    const D = new Set([
        o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text,
        o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media
    ]);
    function x(e) {
        if (e != null && !D.has(e)) {
            throw new (o("WAWebHandleMsgError")).MessageProtobufMismatchError(o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode.INVALID_SCHEDULED_MESSAGE_STANZA);
        }
    }
    function $({ bareMsgId: t, chatId: n, senderJid: r }) {
        const a = o("WAWebWidFactory").createWid(n);
        if (r != null) {
            return o("WAWebScheduledMsgOutgoingMsgKey").buildScheduledMsgIncomingMsgKey(t, a, r).toString();
        }
        return o("WAWebScheduledMsgOutgoingMsgKey").buildScheduledMsgOutgoingMsgKey(t, a, o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()).toString();
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, encIv: n, encPayload: a, msgId: i, revealKeyId: l, stanzaScheduledMsgMeta: s }) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] inline reveal key present in stanza meta, persisting encrypted payload"
            ])));
            const u = $({
                bareMsgId: i,
                chatId: t,
                senderJid: null
            });
            try {
                const _ = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
                    msgId: u,
                    chatId: t,
                    revealKeyId: l,
                    revealKey: s.revealKey,
                    scheduledTimestampS: o("WATimeUtils").castToUnixTime(s.scheduledTimestampS),
                    encPayload: new Uint8Array(a),
                    encIv: new Uint8Array(n)
                });
                if (_) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] stored phone-scheduled message in scheduled list"
                    ])));
                    yield M(t);
                } else {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] phone-scheduled message dropped: per-chat limit reached"
                    ])));
                }
            } catch (e) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to store phone-scheduled message in list"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-store-fail");
                return null;
            }
            return {
                decryptedProto: null,
                decryptedProtoBytes: null,
                isRevealPending: true,
                revealKeyId: l,
                viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
            };
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebWidFactory").createWid(e);
                const n = o("WAWebContactSystemMsg").genNotificationMsg(t, {
                    type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
                    kind: o("WAWebMsgType").MsgKind.Notification,
                    subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
                });
                yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
                    chatId: t,
                    newMsg: n,
                    handleSingleMsgOrigin: "scheduledMsgInline"
                });
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] inserted ScheduledMessageCreated system bubble"
                ])));
            } catch (e) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to insert ScheduledMessageCreated system bubble"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-sysbubble-fail");
            }
        });
        return w.apply(this, arguments);
    }
    function A(e, t, n) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let a = null;
            try {
                a = yield o("WAWebScheduledMsgOrphanRevealKeyStore").getOrphanRevealKeyByRevealKeyId(n);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] orphan key lookup completed"
                ])));
            } catch (e) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to query orphan keys (DB may not be ready), will still store reveal-pending record"
                ]))).catching(r("getErrorSafe")(e));
                return null;
            }
            if (a == null) {
                return null;
            }
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Found orphan RevealKey, decrypting immediately"
            ])));
            try {
                const i = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(e, t, a.revealKey);
                const l = new Uint8Array(i);
                const s = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, l);
                yield o("WAWebScheduledMsgOrphanRevealKeyStore").deleteOrphanRevealKey(a.revealKeyId);
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] orphan key decryption succeeded"
                ])));
                return {
                    proto: s,
                    protoBytes: l
                };
            } catch (e) {
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to decrypt with orphan RevealKey, will store as reveal-pending"
                ]))).catching(r("getErrorSafe")(e));
                return null;
            }
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, encIv: n, encPayload: a, msgId: i, outerMessageSecret: l, reportingTokenInfo: s, revealKeyId: u, senderJid: c, stanzaScheduledMsgMeta: d }) {
            const m = $({
                bareMsgId: i,
                chatId: t,
                senderJid: c
            });
            try {
                yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                    msgId: m,
                    chatId: t,
                    revealKeyId: u,
                    revealKey: new Uint8Array(0),
                    encPayload: new Uint8Array(a),
                    encIv: new Uint8Array(n),
                    scheduledTimestampS: d != null ? o("WATimeUtils").castToUnixTime(d.scheduledTimestampS) : o("WATimeUtils").castToUnixTime(0),
                    status: "PENDING",
                    createdAt: o("WATimeUtils").unixTime(),
                    senderJid: c ?? null,
                    reportingTag: s?.reportingTag,
                    reportingToken: s?.reportingToken,
                    reportingTokenVersion: s?.version,
                    reportingStanzaId: s?.reportingTag != null ? i : null,
                    reportingStanzaTs: s?.stanzaTs != null ? o("WATimeUtils").castToUnixTime(s.stanzaTs) : null,
                    outerMessageSecret: l != null ? new Uint8Array(l) : null
                });
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] stored reveal-pending record"
                ])));
                return true;
            } catch (e) {
                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to store reveal key (DB may not be ready)"
                ]))).catching(r("getErrorSafe")(e));
                return false;
            }
        });
        return B.apply(this, arguments);
    }
    function W(e, t, n, r, o, a, i) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i, l) {
            if (!V()) {
                return T;
            }
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] preProcess: receiver gating enabled, validating conditionalRevealMessage"
            ])));
            const s = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(e);
            if (s == null) {
                return T;
            }
            const { encIv: u, encPayload: c, revealKeyId: d } = s;
            o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] ConditionalRevealMessage detected"
            ])));
            const m = a != null && a.revealKeyId === d ? a : null;
            if (m != null) {
                const p = yield P({
                    stanzaScheduledMsgMeta: m,
                    encIv: u,
                    encPayload: c,
                    revealKeyId: d,
                    msgId: t,
                    chatId: n
                });
                if (p != null) {
                    return p;
                }
            }
            const _ = yield A(c, u, d);
            if (_ != null) {
                return {
                    decryptedProto: U(_.proto, l),
                    decryptedProtoBytes: _.protoBytes,
                    isRevealPending: false,
                    revealKeyId: d,
                    viewMode: null
                };
            }
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] storing as reveal-pending"
            ])));
            const f = yield O({
                chatId: n,
                encIv: u,
                encPayload: c,
                msgId: t,
                outerMessageSecret: l,
                reportingTokenInfo: i,
                revealKeyId: d,
                senderJid: r,
                stanzaScheduledMsgMeta: m
            });
            if (f) {
                return {
                    decryptedProto: null,
                    decryptedProtoBytes: null,
                    isRevealPending: true,
                    revealKeyId: d,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
                };
            }
            return T;
        });
        return q.apply(this, arguments);
    }
    function U(e, t) {
        if (t == null || e.messageContextInfo?.messageSecret != null) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            messageContextInfo: babelHelpers.extends({
                threadId: []
            }, e.messageContextInfo, {
                messageSecret: t
            })
        });
    }
    function V() {
        try {
            if (o("WAWebScheduledMessagesGatingUtils").isScheduledMessagesReceiverEnabled()) {
                return true;
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] preProcess skipped: receiver gating disabled"
            ])));
            return false;
        } catch (e) {
            if (e instanceof Error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] preProcess: gating check threw"
                ]))).catching(e);
            }
            return false;
        }
    }
    function H(e) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ conditionalRevealMessage: t, msgId: n, outerMessageContextInfo: a, rawChatJid: i, reportingTokenInfo: l, senderJid: s, stanzaScheduledMsgMeta: u }) {
            try {
                const c = z(i);
                if (c != null) {
                    const d = yield W(t, n, c, s, u, l, a?.messageSecret);
                    const m = d.isRevealPending === true;
                    return {
                        proto: d.decryptedProto,
                        protoBytes: d.decryptedProtoBytes,
                        isRevealPending: m,
                        scheduledMsgViewMode: m ? d.viewMode : null
                    };
                }
                o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] ConditionalReveal pre-processing skipped: invalid chat JID"
                ])));
            } catch (e) {
                o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] ConditionalReveal pre-processing failed, continuing with original proto"
                ]))).catching(r("getErrorSafe")(e));
            }
            return {
                proto: null,
                protoBytes: null,
                isRevealPending: false,
                scheduledMsgViewMode: null
            };
        });
        return G.apply(this, arguments);
    }
    function z(e) {
        const t = o("WAJids").validateChatJid(e);
        if (t != null) {
            return t;
        }
        try {
            return o("WAWebWidToJid").widToChatJid(o("WAWebWidFactory").createWid(e));
        } catch (e) {
            return null;
        }
    }
    function j(e, t) {
        if (t == null) {
            return e;
        }
        const n = e.map((e)=>babelHelpers.extends({}, e, {
                viewMode: t
            }));
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] applied viewMode=",
            " to ",
            " msgs"
        ])), t, String(n.length));
        return n;
    }
    l.assertScheduledMsgStanzaType = x;
    l.preProcessConditionalRevealMessage = W;
    l.maybePreProcessConditionalRevealForReceive = H;
    l.applyScheduledMsgViewMode = j;
}, 98);