__d("WAWebNewsletterSendMsgAction", [
    "Promise",
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebFrontendMsgGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMexCreateNewsletterAdminInviteJob",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelFromData",
    "WAWebMsgRcatUtils",
    "WAWebMsgType",
    "WAWebMsgUtilsBridge",
    "WAWebNewsletterCollection",
    "WAWebNewsletterErrors",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterSendMsgActionUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows"
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
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = o("WAWebStateUtils").unproxy(e);
            if (!o("WAWebChatGetters").getIsNewsletter(a)) {
                throw new (o("WAWebNewsletterErrors")).UnexpectedNonNewsletterChatError;
            }
            const i = yield o("WAWebSendTextMsgChatAction").createTextMsgData(a, t, n);
            if (i == null) {
                throw r("err")("Failed to generate MsgData");
            }
            o("WAWebNewsletterSendMsgActionUtils").validateMsgDataForMsgSend(i, a);
            const l = new (o("WAWebMsgModel")).Msg(i);
            const s = o("WAWebRichTextFormatMessageSendLogger").maybeCreateRichTextFormatMessageSendCommit(l, a.id);
            const u = n.linkPreview ? "media" : "text";
            return N({
                chat: a,
                commitRichTextFormatMessageSend: s,
                msg: l,
                type: u
            });
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e);
        if (o("WAWebFrontendMsgGetters").getAsMms(e)) {
            return (h || (h = n("Promise"))).resolve();
        }
        return N({
            chat: t,
            msg: e,
            type: "text"
        });
    }
    function v(e, t, uploadMediaMsg) {
        if (!o("WAWebChatGetters").getIsNewsletter(e)) {
            return (h || (h = n("Promise"))).reject(new (o("WAWebNewsletterErrors")).UnexpectedNonNewsletterChatError);
        }
        const a = t instanceof o("WAWebMsgModel").Msg ? t : new (o("WAWebMsgModel")).Msg(t);
        a.local = true;
        const i = t instanceof o("WAWebMsgModel").Msg ? null : o("WAWebRichTextFormatMessageSendLogger").maybeCreateRichTextFormatMessageSendCommit(a, e.id);
        return N({
            chat: e,
            commitRichTextFormatMessageSend: i,
            msg: a,
            type: "media",
            uploadMediaMsg
        });
    }
    function S(msg) {
        msg.wamMessageSendReporter = new (o("WAWebMessageSendReporter")).MessageSendReporter(msg, {
            frontendDeps: o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS
        });
        msg.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
            chatWid: msg.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(msg),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(msg)
        });
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                yield o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(o("WAWebMsgDataFromModel").msgDataFromMsgModel(e), o("WAWebMsgDataFromModel").msgDataFromMsgModel(t));
                const n = o("WAWebMsgGetters").getIsMedia(e);
                const r = o("WAWebMsgGetters").getLinkPreview(e);
                const a = o("WAWebMsgRcatUtils").getContentIdString(e, true);
                const contentId = a != null && o("WAWebNewsletterGatingUtils").isRCATFieldGenerationEnabled() ? a : null;
                const l = yield o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob({
                    type: "edit",
                    editType: n || r ? "media" : "text",
                    msg: e,
                    newsletterJid: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e.id.remote.toJid()),
                    contentId
                });
                t.updateAck(o("WAAckLevel").ACK.SENT);
                return {
                    t: l.ack.t,
                    messageSendResult: l.success === true ? o("WAWebSendMsgResultAction").SendMsgResult.OK : o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
                };
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Failed to edit message"
                ]))).tags("newsletter").sendLogs("newsletter-edit-fail");
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, msgData }) {
            const r = new (o("WAWebMsgModel")).Msg(msgData);
            const a = o("WAWebRichTextFormatMessageSendLogger").maybeCreateRichTextFormatMessageSendCommit(r, chat.id);
            const i = yield N({
                chat,
                commitRichTextFormatMessageSend: a,
                msg: r,
                type: "pollCreation"
            });
            return [
                r,
                i
            ];
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, msg }) {
            return N({
                chat,
                msg,
                type: "text"
            });
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, msgData }) {
            if (!o("WAWebNewsletterGatingUtils").isNewsletterPollForwardingEnabled()) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Poll forwarding is not enabled"
                ]))).tags("newsletter").sendLogs("poll-forwarding-not-enabled");
                throw r("err")("Poll forwarding is not enabled");
            }
            const a = new (o("WAWebMsgModel")).Msg(msgData);
            const i = yield N({
                chat,
                msg: a,
                type: "pollResultSnapshot"
            });
            return [
                a,
                i
            ];
        });
        return x.apply(this, arguments);
    }
    function $(e, t) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebFrontendMsgGetters").getIsMms(t)) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Forwarding MMS messages is not supported"
                ])));
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            }
            const n = yield o("WAWebNewsletterSendMsgActionUtils").prepMsgDataForForward(t);
            return N({
                chat: e,
                msg: o("WAWebMsgModelFromData").msgModelFromMsgData(n),
                type: t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT && r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")() ? "pollResultSnapshot" : "text"
            });
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, commitRichTextFormatMessageSend, type, uploadMediaMsg, msg }) {
            if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminProfilesSenderEnabled(chat.newsletterMetadata)) {
                msg.newsletterAdminProfile = chat.newsletterMetadata?.adminProfile ?? {
                    id: null,
                    name: chat.name,
                    pictureDirectPath: o("WAWebProfilePicThumbGetters").getMaybeImgFull(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(chat.id)) ?? null,
                    pictureId: null
                };
            }
            S(msg);
            msg.wamMessageSendPerfReporter?.startRenderedStage();
            yield chat.addQueue.enqueue((h || (h = n("Promise"))).resolve(msg)).then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords([
                        o("WAWebMsgDataFromModel").msgDataFromMsgModel(msg)
                    ]);
                    chat.msgs.add(e);
                    chat.t = msg.t;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            msg.wamMessageSendPerfReporter?.postRenderedStage();
            try {
                try {
                    if (uploadMediaMsg != null) {
                        msg = yield uploadMediaMsg(msg);
                    }
                } catch (e) {
                    throw new (o("WAWebNewsletterErrors")).NewsletterMediaUploadError;
                }
                msg.wamMessageSendPerfReporter?.startReadyToSendStage();
                const R = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(chat.id.toJid());
                const L = o("WAWebMsgRcatUtils").getContentIdString(msg, true);
                const E = type === "media" ? {
                    msg,
                    type,
                    newsletterJid: R,
                    mediaHandle: msg.mediaHandle,
                    contentId: L != null && o("WAWebNewsletterGatingUtils").isRCATFieldGenerationEnabled() ? o("WAWebMsgRcatUtils").getContentIdString(msg, true) : null
                } : {
                    msg,
                    type,
                    newsletterJid: R
                };
                msg.wamMessageSendPerfReporter?.postReadyToSendStage();
                msg.wamMessageSendPerfReporter?.startWrittenWireStage();
                const k = yield chat.sendQueue.enqueue(o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(E));
                msg.wamMessageSendPerfReporter?.postWrittenWireStage();
                switch(k.success){
                    case true:
                        {
                            o("WAWebCoreActionsODS").logChannelMsgSend();
                            const T = k.serverId;
                            if (T == null) {
                                throw new (o("WAWebNewsletterErrors")).MissingNewsletterServerIdError;
                            }
                            msg.serverId = k.serverId;
                            msg.t = k.ack.t;
                            msg.updateAck(o("WAAckLevel").ACK.SENT, true);
                            w(msg);
                            try {
                                msg.wamMessageSendPerfReporter?.startSavedStage();
                                yield o("WAWebNewsletterUpdateMsgsRecordsJob").updateNewsletterMsgRecord(msg);
                                msg.wamMessageSendPerfReporter?.postSavedStage();
                            } catch (e) {
                                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[newsletter] Failed to persist sent message on db"
                                ]))).tags("newsletter").sendLogs("newsletter-send-message-db-fail");
                            }
                            msg.wamMessageSendReporter?.postSuccess();
                            commitRichTextFormatMessageSend?.();
                            return {
                                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
                                msg
                            };
                        }
                    case false:
                        {
                            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[newsletter] Failed to send message, ",
                                " from server"
                            ])), k.ack.error).tags("newsletter").sendLogs("newsletter-send-message-fail-server");
                            msg.updateAck(o("WAAckLevel").ACK.FAILED, true);
                            msg.wamMessageSendReporter?.postFailure({
                                result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                                isTerminal: false
                            });
                            return {
                                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
                            };
                        }
                }
            } catch (error) {
                if (error instanceof o("WAWebNewsletterErrors").MissingNewsletterServerIdError) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter] Empty serverId returned from server"
                    ]))).tags("newsletter").sendLogs("newsletter-empty-server-id");
                } else {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter] Failed to send message"
                    ]))).tags("newsletter");
                }
                msg.updateAck(o("WAAckLevel").ACK.FAILED, true);
                msg.wamMessageSendReporter?.postFailure({
                    result: error instanceof o("WAWebNewsletterErrors").NewsletterMediaUploadError ? o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD : o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                    isTerminal: false
                });
                if (error instanceof o("WAWebNewsletterErrors").NewsletterMediaUploadError) {
                    return {
                        messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD
                    };
                }
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            } finally{
                msg.wamMessageSendReporter = null;
                msg.wamMessageSendPerfReporter = null;
            }
        });
        return M.apply(this, arguments);
    }
    function w(msg) {
        if (o("WAWebABProps").getABPropConfigValue("thread_interactions_channel_own_posts_sent_web_enabled") === true) {
            const n = function(n) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter:ctl] channel post send logging failed"
                ]))).catching(r("getErrorSafe")(n)).sendLogs("newsletter-ctl-own-post-send-fail");
            };
            try {
                o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(o("WAWebMsgDataFromModel").msgDataFromMsgModel(msg)).catch(n);
            } catch (error) {
                n(error);
            }
        }
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { base64Thumb, invitee, inviteMessage, newsletterWid }) {
            try {
                const s = o("WAWebStateUtils").unproxy(e);
                const u = yield o("WAWebMexCreateNewsletterAdminInviteJob").createNewsletterAdminInvite(o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(newsletterWid.toJid()), invitee);
                const c = u.inviteExpiration;
                const d = r("nullthrows")(r("WAWebNewsletterCollection").get(newsletterWid));
                const m = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                const p = babelHelpers.extends({
                    ack: o("WAAckLevel").ACK.CLOCK,
                    from: m,
                    id: new (r("WAWebMsgKey"))({
                        from: m,
                        to: s.id,
                        id: yield r("WAWebMsgKey").newId(),
                        participant: undefined,
                        selfDir: "out"
                    }),
                    local: true,
                    t: o("WATimeUtils").unixTime(),
                    to: s.id,
                    type: "newsletter_admin_invite",
                    kind: "newsletterAdminInvite",
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    isNewMsg: true,
                    newsletterAdminInviteInfo: {
                        newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(newsletterWid),
                        newsletterName: d?.name,
                        inviteExpiration: r("nullthrows")(c),
                        inviteMessage,
                        pictureThumbnail: base64Thumb
                    }
                }, o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(s));
                return o("WAWebSendMsgChatAction").addAndSendMsgToChat(s, p)[1];
            } catch (error) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterAdminInviteMessage] Failed to send message ",
                    ""
                ])), error).tags("newsletter").sendLogs("newsletter-failed-to-send-admin-invite");
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            }
        });
        return F.apply(this, arguments);
    }
    function O(e, t) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { base64Thumb, inviteMessage, newsletterWid }) {
            try {
                const l = o("WAWebStateUtils").unproxy(e);
                const s = r("nullthrows")(r("WAWebNewsletterCollection").get(newsletterWid));
                const u = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                const c = babelHelpers.extends({
                    ack: o("WAAckLevel").ACK.CLOCK,
                    from: u,
                    id: new (r("WAWebMsgKey"))({
                        from: u,
                        to: l.id,
                        id: yield r("WAWebMsgKey").newId(),
                        participant: undefined,
                        selfDir: "out"
                    }),
                    local: true,
                    t: o("WATimeUtils").unixTime(),
                    to: l.id,
                    type: "newsletter_follower_invite",
                    kind: "newsletterFollowerInvite",
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    broadcast: true,
                    isNewMsg: true,
                    newsletterFollowerInviteInfo: {
                        newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(newsletterWid),
                        newsletterName: s?.name,
                        inviteMessage,
                        pictureThumbnail: base64Thumb
                    }
                }, o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(l));
                return o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, c)[1];
            } catch (error) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterFollowerInviteMessage] send failed ",
                    ""
                ])), error).tags("newsletter").sendLogs("newsletter-failed-to-send-follower-invite");
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            }
        });
        return B.apply(this, arguments);
    }
    l.sendNewsletterTextMsg = y;
    l.resendNewsletterMsg = b;
    l.sendNewsletterMediaMsg = v;
    l.sendNewsletterEditMsg = R;
    l.sendNewsletterPollCreationMsg = E;
    l.sendNewsletterAlbumMsg = I;
    l.sendNewsletterPollResultSnapshotMsg = D;
    l.forwardNewsletterMessage = $;
    l.sendNewsletterAdminInviteMessage = A;
    l.sendNewsletterFollowerInviteMessage = O;
}, 98);