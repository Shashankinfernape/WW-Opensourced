__d("WAWebScheduledMsgRevealNotificationHandler", [
    "WABase64",
    "WABase64UrlSafe",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachScheduledAssociationChildren",
    "WAWebExtractAssociationFieldsFromScheduledMsg",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMediaFieldsFromScheduledMsg",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebExtractPairedMediaTypeFromScheduledMsg",
    "WAWebExtractQuoteFieldsFromScheduledMsg",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandleSingleMsg",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOrphanRevealKeyStore",
    "WAWebScheduledMsgRevealChatUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    let T;
    let D;
    let x;
    let $;
    let P;
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebScheduledMessagesGatingUtils").isScheduledMessagesReceiverEnabled()) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] skipped: receiver gating disabled"
                ])));
                return;
            }
            const t_xwa2_notify_scheduled_message_reveal = t.xwa2_notify_scheduled_message_reveal;
            if (t_xwa2_notify_scheduled_message_reveal == null) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing reveal data"
                ]))).sendLogs("mex-scheduled-msg-reveal-missing-data");
                return;
            }
            const { chat_jid, rk, rkid, st: mexScheduledTimestampS } = t_xwa2_notify_scheduled_message_reveal;
            if (rkid == null || rk == null) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing rkid or rk"
                ]))).sendLogs("mex-scheduled-msg-reveal-missing-fields");
                return;
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] received rkid"
            ])));
            const p = B(e);
            if (p == null) {
                yield w({
                    mexScheduledTimestampS,
                    notificationChatJid: chat_jid,
                    rk,
                    rkid
                });
                return;
            }
            const _ = !!e.offline && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
            yield o("WAWebMessageQueue").onMessageQueue({
                chatWid: p,
                isOffline: _,
                msgCategory: null,
                action: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        yield w({
                            mexScheduledTimestampS,
                            notificationChatJid: chat_jid,
                            rk,
                            rkid
                        });
                        return null;
                    });
                    function t() {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "scheduled_msg_reveal"));
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ mexScheduledTimestampS, notificationChatJid, rk, rkid }) {
            try {
                const l = U(rk);
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] looking up record by revealKeyId"
                ])));
                const record = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByRevealKeyId(rkid);
                if (record != null && !F(notificationChatJid, record.chatId)) {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] reveal issued for another chat, ignoring"
                    ]))).sendLogs("mex-scheduled-msg-reveal-chat-mismatch");
                    return;
                }
                if (record != null) {
                    yield W({
                        mexScheduledTimestampS,
                        record,
                        revealKey: l
                    });
                } else {
                    yield re(rkid, l);
                }
            } catch (error) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] handler failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-reveal-handler-failed");
            }
        });
        return A.apply(this, arguments);
    }
    function F(notificationChatJid, chatId) {
        const n = O(chatId);
        if (n == null) {
            return true;
        }
        const r = O(notificationChatJid);
        if (r == null) {
            return false;
        }
        if (!n.isUser() || !r.isUser()) {
            return r.equals(n);
        }
        const a = o("WAWebLidMigrationUtils").toUserLid(n);
        return a != null && a.equals(o("WAWebLidMigrationUtils").toUserLid(r));
    }
    function O(e) {
        if (e == null || e === "") {
            return null;
        }
        try {
            return o("WAWebWidFactory").createWid(e);
        } catch (e) {
            return null;
        }
    }
    function B(t) {
        try {
            return o("WAWebWidFactory").createWid(t.from.toString());
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] could not resolve chat wid from notification"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-reveal-resolve-chat-failed");
            return null;
        }
    }
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ mexScheduledTimestampS, record, revealKey }) {
            if (record.senderJid == null) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] sender-originated record, skipping (Post handler owns cleanup), msgId=",
                    ""
                ])), record.msgId);
                return;
            }
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] found matching record status=",
                ""
            ])), record.status);
            yield Y(record, revealKey, mexScheduledTimestampS);
        });
        return q.apply(this, arguments);
    }
    function U(e) {
        return new Uint8Array(o("WABase64").decodeB64(o("WABase64UrlSafe").urlSafeBase64ToStandard(e)));
    }
    function V(e, scheduledTimestampS) {
        if (e != null && e > 0) {
            return o("WATimeUtils").castToUnixTime(e);
        }
        if (scheduledTimestampS > 0) {
            return scheduledTimestampS;
        }
        return o("WATimeUtils").unixTime();
    }
    function H(senderJid) {
        if (senderJid == null) {
            return false;
        }
        try {
            return o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(senderJid));
        } catch (e) {
            return false;
        }
    }
    function G(e) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ encIv, encPayload, msgId, revealKey }) {
            const i = yield o("WAWebScheduledMsgDecryptInnerProto").decryptAndDecodeRevealPayloadWithBytes(encPayload, encIv, revealKey);
            if (i == null) {
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                return null;
            }
            return {
                innerProto: i.proto,
                protoBytes: i.protoBytes
            };
        });
        return z.apply(this, arguments);
    }
    function j(e) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, encIv, encPayload, msgId }) {
            if (chatId == null || chatId === "") {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing chatId in record"
                ]))).sendLogs("mex-scheduled-msg-reveal-missing-chat-id");
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                return null;
            }
            if (encPayload == null || encIv == null) {
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing encPayload or encIv"
                ]))).sendLogs("mex-scheduled-msg-reveal-missing-enc-data");
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                return null;
            }
            return {
                chatId,
                encPayload,
                encIv
            };
        });
        return K.apply(this, arguments);
    }
    function Q(e, t, n) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
                    chatId: e,
                    newMsg: t,
                    handleSingleMsgOrigin: "scheduledMsgReveal"
                });
            } catch (error) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] message insert failed; keeping reveal-key for retry"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-reveal-insert-failed");
                return;
            }
            yield o("WAWebAttachScheduledAssociationChildren").attachScheduledAssociationChildren(t.id, t.parentMsgKey);
            try {
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(n);
            } catch (error) {
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] reveal-key delete failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-reveal-delete-failed");
            }
        });
        return X.apply(this, arguments);
    }
    function Y(e, t, n) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const { msgId, scheduledTimestampS, senderJid } = e;
            const u = V(n, scheduledTimestampS);
            if (e.status === "REVEALED") {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] record already revealed, deleting stale key"
                ])));
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                return;
            }
            if (H(senderJid)) {
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list"
                ])));
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                return;
            }
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] decrypting payload"
            ])));
            const c = yield j(e);
            if (c != null) {
                const d = yield G({
                    encIv: c.encIv,
                    encPayload: c.encPayload,
                    msgId,
                    revealKey: t
                });
                if (d != null) {
                    const { innerProto, protoBytes } = d;
                    const _ = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(innerProto) ?? "";
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] decrypt ok, creating msg in chat"
                    ])));
                    let f;
                    try {
                        f = o("WAWebWidFactory").createWid(c.chatId);
                    } catch (error) {
                        o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg][mex][reveal] invalid chatId for reveal record, deleting"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-reveal-invalid-chat-id");
                        yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                        return;
                    }
                    try {
                        f = yield o("WAWebScheduledMsgRevealChatUtils").resolveScheduledRevealChat(f);
                    } catch (error) {
                        o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg][mex][reveal] ensure chat failed; keeping reveal-key for retry"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-reveal-ensure-chat-failed");
                        return;
                    }
                    let g;
                    if (f.isGroup()) {
                        if (senderJid == null) {
                            o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                "[scheduled_msg][mex][reveal] missing senderJid for group reveal record, deleting"
                            ]))).sendLogs("mex-scheduled-msg-reveal-missing-sender-jid");
                            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                            return;
                        }
                        let h;
                        try {
                            h = o("WAWebWidFactory").asUserWidOrThrow(o("WAWebWidFactory").createWid(senderJid));
                        } catch (error) {
                            o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                                "[scheduled_msg][mex][reveal] invalid senderJid for group reveal record, deleting"
                            ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-reveal-invalid-sender-jid");
                            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                            return;
                        }
                        g = {
                            type: "group",
                            chatWid: f,
                            senderWid: h,
                            msgId,
                            text: _,
                            scheduledTimestampS: u,
                            innerProto
                        };
                    } else {
                        g = {
                            type: "individual",
                            chatWid: f,
                            msgId,
                            text: _,
                            scheduledTimestampS: u,
                            innerProto
                        };
                    }
                    const y = babelHelpers.extends({}, ne(g), {
                        messageSecret: Z(innerProto, e.outerMessageSecret)
                    });
                    const C = yield o("WAWebLimitSharingAcp2HideReceivedMsgs").hideMsgsReceivedInAcp2RestrictedChat({
                        messageType: f.isGroup() ? o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP : o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT,
                        msgs: [
                            y
                        ],
                        proto: innerProto
                    });
                    if (C.length === 0) {
                        o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg][mex][reveal] hidden in ACP2-restricted chat, deleting key"
                        ])));
                        yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                        return;
                    }
                    yield Q(f, y, msgId);
                    yield ee(y, e, protoBytes);
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] completed reveal for msg"
                    ])));
                }
            }
        });
        return J.apply(this, arguments);
    }
    function Z(innerProto, outerMessageSecret) {
        const r = innerProto.messageContextInfo?.messageSecret;
        if (r != null) {
            return new Uint8Array(r);
        }
        return outerMessageSecret ?? undefined;
    }
    function ee(e, t, n) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, plainProtobufBytes) {
            const t_reportingTag = t.reportingTag;
            if (t_reportingTag != null) {
                const s = babelHelpers.extends({}, e, {
                    plainProtobufBytes,
                    reportingTokenInfo: {
                        reportingTag: t_reportingTag,
                        reportingToken: t.reportingToken ?? undefined,
                        version: t.reportingTokenVersion ?? undefined,
                        stanzaTs: t.reportingStanzaTs ?? undefined
                    }
                });
                yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                    forceDualEncryptedValidation: true,
                    renderableMsgs: [
                        s
                    ]
                });
            }
        });
        return te.apply(this, arguments);
    }
    function ne(e) {
        const { chatWid, innerProto, msgId, scheduledTimestampS, text } = e;
        const u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        const c = e.type === "group" ? e.senderWid : null;
        const d = msgId.includes("_") ? r("WAWebMsgKey").fromString(msgId).id : msgId;
        const m = new (r("WAWebMsgKey"))({
            fromMe: false,
            remote: chatWid,
            id: d,
            participant: c ?? undefined
        });
        const p = o("WAWebExtractEphemeralFieldsFromScheduledMsg").extractEphemeralFieldsFromScheduledMsg(innerProto, chatWid);
        const _ = o("WAWebExtractMentionFieldsFromScheduledMsg").extractMentionFieldsFromScheduledMsg(innerProto);
        const f = o("WAWebExtractQuoteFieldsFromScheduledMsg").extractQuoteFieldsFromScheduledMsg(innerProto, m);
        const g = o("WAWebExtractPairedMediaTypeFromScheduledMsg").extractPairedMediaTypeFromScheduledMsg(innerProto);
        const h = o("WAWebExtractAssociationFieldsFromScheduledMsg").extractAssociationFieldsFromScheduledMsg(innerProto, {
            id: m,
            from: chatWid,
            to: u,
            author: c ?? undefined,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
        });
        const y = babelHelpers.extends({
            id: m,
            from: chatWid,
            to: u,
            author: c ?? undefined,
            viewMode: h?.viewMode ?? o("WAWebViewMode.flow").ViewModeType.VISIBLE
        }, p, _, f, g, {
            t: scheduledTimestampS,
            scheduledTimestampS,
            ack: o("WAWebAck").ACK.SENT,
            isNewMsg: true,
            recvFresh: true,
            invis: false
        });
        const C = o("WAWebExtractMediaFieldsFromScheduledMsg").extractMediaFieldsFromScheduledMsg(innerProto);
        if (C != null) {
            if (h != null) {
                if (C.kind === o("WAWebMsgType").MsgKind.Image) {
                    return babelHelpers.extends({}, y, C, h, {
                        kind: o("WAWebMsgType").MsgKind.AssociatedImage
                    });
                }
                return babelHelpers.extends({}, y, C, h, {
                    kind: o("WAWebMsgType").MsgKind.AssociatedVideo
                });
            }
            return babelHelpers.extends({}, y, C);
        }
        if (h != null) {
            return babelHelpers.extends({}, y, h, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.AssociatedUnknown
            });
        }
        const b = o("WAWebExtractLinkPreviewFieldsFromScheduledMsg").extractLinkPreviewFieldsFromScheduledMsg(innerProto);
        return babelHelpers.extends({}, y, {
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
            body: text
        }, b);
    }
    function re(e, t) {
        return oe.apply(this, arguments);
    }
    function oe() {
        oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(revealKeyId, t) {
            o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] no msg for rkid, storing orphan"
            ])));
            yield o("WAWebScheduledMsgOrphanRevealKeyStore").storeOrphanRevealKey({
                revealKeyId,
                revealKey: t,
                createdAt: o("WATimeUtils").unixTime()
            });
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] orphan key stored"
            ])));
        });
        return oe.apply(this, arguments);
    }
    l.mexHandleScheduledMsgReveal = N;
}, 98);