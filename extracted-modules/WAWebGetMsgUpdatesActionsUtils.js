__d("WAWebGetMsgUpdatesActionsUtils", [
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWebAck",
    "WAWebButtonCollection",
    "WAWebButtonModel",
    "WAWebChatCollection",
    "WAWebCoexV2RevokeAuthorization",
    "WAWebDBGroupParticipant",
    "WAWebEphemeralSyncResponse",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInvalidateEventsAction",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebPaymentRequestMsgAction",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebRevokeMsgAction",
    "WAWebTemplateButtonCollection",
    "WAWebTemplateButtonModel",
    "WAWebViewMode.flow",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "gkx",
    "nullthrows",
    "omit"
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
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, chatMsgsCollection, meta, msgObjs }) {
            const filteredRecs = [];
            const reorderRecs = [];
            const $ = [];
            let P = 0;
            let N = 0;
            let M = 0;
            const w = [];
            let A = 0;
            let F = 0;
            const O = [];
            let B = 0;
            const W = [];
            let q = 0;
            const U = [];
            let V = 0;
            const H = [];
            let G = 0;
            const z = [];
            let j = 0;
            const K = [];
            let Q = 0;
            const X = [];
            let Y = 0;
            const J = self.performance.now();
            yield (E || (E = n("Promise"))).all(msgObjs.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (!(t.id instanceof r("WAWebMsgKey"))) {
                        t.self != null;
                        Y++;
                        t.id = new (r("WAWebMsgKey"))({
                            from: t.from,
                            to: t.to,
                            id: t.id,
                            participant: t.participant,
                            selfDir: t.self
                        });
                    }
                    if (t.groupHistoryIndividualMessageInfo?.bundleMessageKey != null && !(t.groupHistoryIndividualMessageInfo.bundleMessageKey instanceof r("WAWebMsgKey"))) {
                        t.groupHistoryIndividualMessageInfo.bundleMessageKey = r("WAWebMsgKey").from(t.groupHistoryIndividualMessageInfo.bundleMessageKey);
                    }
                    if (o("WATypeUtils").isString(chatId) && r("WAWebWid").isBroadcast(chatId)) {
                        delete t.broadcast;
                    }
                    if (t.type === "ptt" && !t.id.fromMe && t.ack < o("WAWebAck").ACK.CLOCK) {
                        t.ack = o("WAWebAck").ACK.CLOCK;
                    }
                    if (!r("WAWebWid").isNewsletter(t.id.remote)) {
                        if (t.hydratedButtons != null) {
                            T(t);
                        }
                        if (t.dynamicReplyButtons != null) {
                            D(t);
                        }
                    }
                    if (o("WAWebInvisiblePlaceholderViewModeProcessor").InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes?.includes(t.type) && o("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
                        parentMsg: t
                    })) {
                        t.viewMode = o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER;
                    }
                    let u = o("WAWebMsgCollection").MsgCollection.get(t.id);
                    if (t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && t.subtype !== "ephemeral_setting" && t.subtype !== "share_phone_number" && t.subtype !== "event_edit_decrypted" && t.subtype !== "status_mention_message" && t.subtype !== "status_group_mention_message") {
                        switch(t.subtype){
                            case "admin_revoke":
                                {
                                    const d = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.protocolMessageKey);
                                    u = o("WAWebMsgCollection").MsgCollection.get(t.protocolMessageKey) ?? (d != null ? o("WAWebMsgCollection").MsgCollection.get(d) : null);
                                    if (u) {
                                        const p = o("WAWebMsgGetters").getSender(t);
                                        const _ = o("WAWebCoexV2RevokeAuthorization").getCoexV2RevokeAuthorization(u.senderWithDevice, u.metaFrom, t.senderWithDevice ?? p, true);
                                        if (_ === false || !o("WAWebMsgGetters").getIsGroupMsg(u) && !o("WAWebMsgGetters").getIsNewsletterMsg(u)) {
                                            P++;
                                        } else if (!r("WAWebWid").equals(u.id.remote, t.id.remote)) {
                                            N++;
                                        } else {
                                            M++;
                                            if (w.length < 3) {
                                                w.push(u.id.toString());
                                            }
                                            const f = new (o("WAWebMsgModel")).Msg(t);
                                            const g = r("nullthrows")(p);
                                            if (o("WAWebMsgGetters").getIsGroupMsg(u)) {
                                                const h = r("nullthrows")(o("WAWebFrontendMsgGetters").getChat(u).groupMetadata);
                                                const y = h.isLidAddressingMode === true ? o("WAWebLidMigrationUtils").toLid(g) : o("WAWebLidMigrationUtils").toPn(g);
                                                const C = y != null ? h.participants.get(y) : null;
                                                if ((!C || !C.isAdmin) && y != null) {
                                                    h.participants.add({
                                                        id: y,
                                                        isAdmin: true
                                                    }, {
                                                        merge: true
                                                    });
                                                    if (!C) {
                                                        const b = {
                                                            actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                                                            participants: [
                                                                {
                                                                    id: y,
                                                                    isAdmin: true,
                                                                    isSuperAdmin: false
                                                                }
                                                            ],
                                                            reason: null
                                                        };
                                                        A++;
                                                        const v = yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                                                            meta: {
                                                                author: undefined,
                                                                chatId: o("WAWebFrontendMsgGetters").getChat(u).id,
                                                                ts: f.t
                                                            },
                                                            action: b,
                                                            dbIsStale: true
                                                        });
                                                        if (v) {
                                                            o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                                                chatId: v.from,
                                                                newMsg: v,
                                                                handleSingleMsgOrigin: "handleGroupAction"
                                                            });
                                                        }
                                                    }
                                                    o("WAWebDBGroupParticipant").markGroupParticipantStale({
                                                        group: o("WAWebFrontendMsgGetters").getChat(u).id
                                                    }).catch(()=>{
                                                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                                            "getMsgUpdates: failed to mark group participant as stale"
                                                        ]))).sendLogs("failed-to-mark-group-participant-as-stale");
                                                    });
                                                }
                                            }
                                            o("WAWebRevokeMsgAction").revoke(u, {
                                                msgKey: f.id,
                                                subtype: f.subtype,
                                                sender: g,
                                                revokeTimestamp: f.t,
                                                viewMode: f.viewMode
                                            });
                                        }
                                    }
                                    break;
                                }
                            case "sender_revoke":
                                {
                                    const R = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.protocolMessageKey);
                                    u = o("WAWebMsgCollection").MsgCollection.get(t.protocolMessageKey) ?? (R != null ? o("WAWebMsgCollection").MsgCollection.get(R) : null);
                                    if (u) {
                                        const Z = new (o("WAWebMsgModel")).Msg(t);
                                        const ee = u?.botTargetSenderJid;
                                        const te = o("WAWebMsgGetters").getSender(Z);
                                        const ne = o("WAWebCoexV2RevokeAuthorization").getCoexV2RevokeAuthorization(u.senderWithDevice, u.metaFrom, Z.senderWithDevice ?? te, false);
                                        if (ne == null && ee != null && u.id.participant?.isBot() && r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(ee, te)) && te != null) {
                                            F++;
                                            if (O.length < 3) {
                                                O.push(u.id.toString());
                                            }
                                            o("WAWebRevokeMsgAction").revoke(u, {
                                                msgKey: Z.id,
                                                subtype: Z.subtype,
                                                sender: te,
                                                revokeTimestamp: Z.t
                                            });
                                        } else if (te != null && (ne === true || ne == null && r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(o("WAWebMsgGetters").getIsGroupStatus(u) ? u.id.participant : o("WAWebMsgGetters").getSender(u), te)))) {
                                            B++;
                                            if (W.length < 3) {
                                                W.push(u.id.toString());
                                            }
                                            if (o("WAWebMsgGetters").getIsStatus(u)) {
                                                const re = u.getMsgChunk();
                                                if (re) {
                                                    re.remove(u);
                                                }
                                            }
                                            o("WAWebRevokeMsgAction").revoke(u, {
                                                msgKey: Z.id,
                                                subtype: Z.subtype,
                                                sender: te,
                                                revokeTimestamp: Z.t
                                            });
                                        } else {
                                            q++;
                                            if (U.length < 3) {
                                                U.push(`${Z.id.toString()} <> ${u.id.toString()}`);
                                            }
                                        }
                                    }
                                    break;
                                }
                            case "bot_request_welcome":
                            case "bot_memu_onboarding":
                            case "member_label":
                            case "ai_media_collection":
                            case "hatch_metadata_sync":
                            case "biz_ai_metadata_sync":
                                break;
                            default:
                                V++;
                                if (H.length < 3) {
                                    H.push(t.id.toString());
                                }
                                break;
                        }
                    } else if (u && !o("WAWebFrontendMsgGetters").getAsRevoked(u)) {
                        if (t.ack < u.ack) {
                            delete t.ack;
                        }
                        for(const oe in t){
                            if (Object.hasOwn(t, oe) && typeof t[oe] === "undefined") {
                                delete t[oe];
                            }
                        }
                        if (u.type !== t.type) {
                            t.subtype = t.subtype || undefined;
                        }
                        if (meta.isHistory === true) {
                            t.isNewMsg = false;
                        }
                        const ae = u.t ? r("omit")(t, [
                            "t",
                            "id",
                            "from",
                            "to"
                        ]) : t;
                        const ie = u.applyUpdate(ae).then(()=>u);
                        $.push(ie);
                        if (r("WAWebWid").isBroadcast(u.id.remote)) {
                            const le = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(u);
                            if (le) {
                                le.forEach((e)=>{
                                    const t = o("WAWebMsgCollection").MsgCollection.get(e);
                                    if (t) {
                                        $.push(t.applyUpdate(ae).then(()=>u));
                                    }
                                });
                            }
                        }
                        if (meta.isHistory === true && (u.recvFresh || chatMsgsCollection) && !u.search) {
                            G++;
                            if (z.length < 3) {
                                z.push((u.recvFresh ? "dup:" : "overlap:") + String(u.id));
                            }
                            reorderRecs.push(u);
                        } else if (meta.isHistory === true && u.search) {
                            u.search = false;
                            j++;
                            if (K.length < 3) {
                                K.push(String(u.id));
                            }
                            filteredRecs.push({
                                id: u.id
                            });
                        } else if (meta.add === "search") {
                            filteredRecs.push({
                                id: u.id
                            });
                        }
                    } else {
                        if (t.subtype === "payment_action_request_declined" || t.subtype === "payment_transaction_request_cancelled") {
                            $.push(o("WAWebPaymentRequestMsgAction").cancelOrDeclinePaymentRequest(t));
                        } else if (t.type === o("WAWebMsgType").MSG_TYPE.PAYMENT && t.subtype === "send") {
                            $.push(o("WAWebPaymentRequestMsgAction").fulfillPaymentRequest(t));
                        }
                        const ue = o("WAWebChatCollection").ChatCollection.get(t.id.remote) ?? r("WAWebNewsletterCollection").get(t.id.remote);
                        if (meta.add === "search") {
                            t.search = true;
                        }
                        if (o("WAWebMsgGetters").getIsUnreadType(t) && t.id.fromMe && t.ack === o("WAWebAck").ACK.CLOCK) {
                            t.isSendFailure = true;
                        }
                        if (t.errorCode === o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired) {
                            t.isSendFailure = true;
                        }
                        if (meta.update !== true) {
                            filteredRecs.push(t);
                        }
                        if (meta.isHistory !== true && meta.add !== "search" && ue) {
                            $.push(x(t, ue));
                        }
                        if (t.ephemeralOutOfSync && (Q++, X.length < 3)) {
                            X.push(`msgId=${t.id.toString()} chatId=${(ue == null ? undefined : ue.id.toString()) ?? "unknown"}`);
                        }
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            if (P > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: ",
                    " messages not revoked (non-group)"
                ])), P);
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: admin revoke was sent to ",
                    " non-group chats"
                ])), P);
            }
            if (N > 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: ",
                    " messages not revoked (remote mismatch)"
                ])), N);
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: admin revoke group mismatch cnt=",
                    ""
                ])), N);
            }
            if (M > 0) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: admin revoked ",
                    " messages => ",
                    ""
                ])), M, w);
            }
            if (A > 0) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[system message] msg updates - ADD - ADMIN: ",
                    " messages"
                ])), A);
            }
            if (F > 0) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: bot invoker revoked ",
                    " bot responses => ",
                    ""
                ])), F, O);
            }
            if (B > 0) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: sender revoked ",
                    " messages => ",
                    ""
                ])), B, W);
            }
            if (q > 0) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: sender revoke: ",
                    " sender mismatches => ",
                    ""
                ])), q, U);
            }
            if (V > 0) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "unknown protocolMessage: ",
                    " messages => ",
                    ""
                ])), V, H);
            }
            if (G > 0) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "model:Msg:handle:processMM: ",
                    " dup/overlap messages => ",
                    ""
                ])), G, z);
            }
            if (j > 0) {
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "processMM: search->history ",
                    " msgs => ",
                    ""
                ])), j, K);
            }
            if (Q > 0) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "ephemeralOutOfSync: ",
                    " messages => ",
                    ""
                ])), Q, X);
            }
            if (Y > 0) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: el.id is not a MsgKey: ",
                    " of ",
                    " messages"
                ])), Y, msgObjs.length);
                if (!r("gkx")("26258")) {
                    o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "getMsgUpdates: el.id is not a MsgKey"
                    ]))).sendLogs("forgot-to-create-msgkey");
                }
            }
            const Z = self.performance.now() - J;
            if (Z >= 500) {
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[getMsgUpdates] ",
                    " msgs ",
                    "ms filt=",
                    " reord=",
                    " upd=",
                    " oos=",
                    ""
                ])), msgObjs.length, Math.round(Z), filteredRecs.length, reorderRecs.length, $.length, Q);
            }
            return {
                filteredRecs,
                reorderRecs,
                updates: $
            };
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        const t = function(t, n) {
            const a = t.index ?? n;
            const i = `${a}`;
            if (t.quickReplyButton) {
                return new (r("WAWebTemplateButtonModel"))({
                    id: i,
                    displayText: t.quickReplyButton.displayText,
                    selectionId: t.quickReplyButton.id,
                    subtype: "quick_reply"
                });
            }
            if (t.callButton) {
                return new (r("WAWebTemplateButtonModel"))({
                    id: i,
                    displayText: t.callButton.displayText,
                    phoneNumber: t.callButton.phoneNumber,
                    subtype: "call"
                });
            }
            return new (r("WAWebTemplateButtonModel"))({
                id: i,
                displayText: t.urlButton?.displayText,
                url: t.urlButton?.url,
                subtype: "url"
            });
        };
        e.buttons = new (o("WAWebTemplateButtonCollection")).TemplateButtonCollection;
        e.buttons.add(e.hydratedButtons.map(t));
    }
    function D(e) {
        const t = function({ buttonId, buttonText }) {
            return new (r("WAWebButtonModel"))({
                id: buttonId,
                displayText: buttonText?.displayText
            });
        };
        e.replyButtons = new (r("WAWebButtonCollection"));
        e.replyButtons.add(e.dynamicReplyButtons.map(t));
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!e.isNewMsg || !e.recvFresh) {
                o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[processLiveMessage] bad history msg ",
                    " t=",
                    " st=",
                    " new=",
                    " fresh=",
                    ""
                ])), e.id.toString(), e.type, e.subtype, e.isNewMsg, e.recvFresh).sendLogs("bad-process-live-message-call", {
                    sampling: 0.001
                });
                return (E || (E = n("Promise"))).resolve();
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.GP2 && e.subtype === "delete") {
                t.isReadOnly = true;
                o("WAWebPollsInvalidateChatPollMsgsAction").invalidateChatPollMsgs(t);
                o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(t);
            }
            yield o("WAWebEphemeralSyncResponse").syncEphemeralSetting(e, t);
        });
        return $.apply(this, arguments);
    }
    l.default = k;
}, 98);