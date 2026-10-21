__d("WAWebReportSpamJob", [
    "Promise",
    "WAJids",
    "WALogger",
    "WASmaxSpamGroupReportRPC",
    "WASmaxSpamIndividualReportRPC",
    "WASmaxSpamStatusReportRPC",
    "WAWebChatGetters",
    "WAWebDualUploadsAssociationTypes",
    "WAWebGroupHistoryUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterReportUtils",
    "WAWebParseReportResponse",
    "WAWebPollCreationUtils",
    "WAWebReportUtils",
    "WAWebSpamUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 5;
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            for(var r = [], a = e.msgs.toArray().reverse(), i = t, l = 0; l < a.length && !(r.length >= t); l++){
                const s = a[l];
                if (!(!o("WAWebSpamUtils").isSpamSupportedForMessageType(s.type) && s.type !== o("WAWebMsgType").MSG_TYPE.ALBUM || o("WAWebMsgGetters").getIsBotResponse(s) || o("WAWebUserPrefsMeUser").isMeAccount(s.from) && !o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(s) || !o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT_SPAM_REPORT, s.viewMode)) && !(n && (o("WAWebChatGetters").getIsGroup(e) && !n.equals(s.author) || o("WAWebChatGetters").getIsUser(e) && !n.equals(s.from)))) {
                    if (s.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
                        r.push(...o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(s.id).slice(0, 4));
                    } else if (s.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                        r.push(s);
                        const u = s.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE ? o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(s.id) : [];
                        r.push(...u);
                        i += u.length;
                    } else {
                        r.push(s);
                    }
                }
            }
            return $(r.slice(0, i));
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        if (e.buttonsMessage?.buttons != null) {
            e.buttonsMessage = babelHelpers.extends({}, e.buttonsMessage, {
                buttons: e.buttonsMessage.buttons.map((e)=>{
                    if (e.nativeFlowInfo) {
                        const n = JSON.parse(e.nativeFlowInfo.paramsJson ?? "{}");
                        delete n.reference_id;
                        delete n.total_amount;
                        return babelHelpers.extends({}, e, {
                            nativeFlowInfo: babelHelpers.extends({}, e.nativeFlowInfo, {
                                paramsJson: JSON.stringify(n)
                            })
                        });
                    }
                    return e;
                })
            });
        }
        if (e.messageContextInfo?.messageSecret != null) {
            e.messageContextInfo = babelHelpers.extends({}, e.messageContextInfo, {
                messageSecret: null
            });
        }
        return e;
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            const i = yield o("WAWebReportUtils").getMessageMixinArgs(n);
            if (i == null) {
                throw r("err")("report status failed due to unsupported msg type");
            }
            const sender = o("WAWebMsgGetters").getSender(n);
            if (sender == null) {
                throw r("err")("report status failed due to missing sender");
            }
            const s = [
                h({
                    msg: n,
                    msgMixin: i,
                    sender
                })
            ];
            const u = yield y(n, sender);
            if (u != null) {
                s.push(u);
            }
            const c = {
                spamListSpamFlow: t,
                spamListWiTraceId: a,
                spamListJid: o("WAJids").STATUS_JID,
                messageArgs: s
            };
            const d = yield o("WASmaxSpamStatusReportRPC").sendStatusReportRPC(c);
            e: {
                const m = d;
                if ((typeof m === "object" && m !== null || typeof m === "function") && m.name === "StatusReportResponseError" && "value" in m) {
                    const p = m.value;
                    const _ = parseInt(p.errorSpamIqErrors.value.code, 10);
                    const f = p.errorSpamIqErrors.value.text;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "reportStatus: server response with ",
                        ", ",
                        ""
                    ])), _, f);
                    return {
                        errorCode: _,
                        errorText: f
                    };
                    break e;
                }
                if ((typeof m === "object" && m !== null || typeof m === "function") && m.name === "StatusReportResponseSuccess" && "value" in m) {
                    const g = m.value;
                    return g;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${m}`);
            }
        });
        return g.apply(this, arguments);
    }
    function h({ msg, msgMixin, sender }) {
        return babelHelpers.extends({
            messageFrom: o("WAJids").STATUS_JID
        }, msgMixin, {
            messageParticipantMixinArgs: {
                messageParticipant: o("WAWebWidToJid").widToUserJid(sender)
            },
            messageRecipientMixinArgs: {
                messageTo: o("WAWebWidToJid").widToUserJid(msg.to)
            }
        });
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = T(e);
            const a = r[0];
            if (a == null) {
                return null;
            }
            const i = yield b(a);
            if (i != null) {
                return h({
                    msg: a,
                    msgMixin: i,
                    sender: o("WAWebMsgGetters").getSender(a) ?? t
                });
            }
            return null;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield o("WAWebReportUtils").getMessageMixinArgs(e, {
                    allowAssociatedMessage: true
                });
            } catch (t) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "reportSpam: skipping associated child type=",
                    " association=",
                    ""
                ])), e.type, String(e.associationType)).sendLogs("reporting-associated-child-skipped");
                return null;
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return e.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION || o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(e.associationType);
    }
    function R(e) {
        if (S(e)) {
            return b(e);
        }
        return o("WAWebReportUtils").getMessageMixinArgs(e, {
            allowAssociatedMessage: o("WAWebSpamUtils").isSpamSupportedForAssociatedMessageType(e.type)
        });
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            const i = yield o("WAWebReportUtils").getMessageMixinArgs(e);
            const l = i != null ? yield D(e) : [];
            const s = yield (c || (c = n("Promise"))).all(l.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield b(e);
                    if (t != null) {
                        return babelHelpers.extends({
                            messageSenderOrRecipientMixinGroupArgs: {
                                messageSender: {
                                    messageFrom: o("WAWebWidToJid").widToUserJid(e.from)
                                }
                            }
                        }, t);
                    }
                    return null;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const u = [];
            if (i != null) {
                u.push(babelHelpers.extends({
                    messageSenderOrRecipientMixinGroupArgs: {
                        messageSender: {
                            messageFrom: o("WAWebWidToJid").widToUserJid(e.from)
                        }
                    }
                }, i));
            }
            s.forEach((e)=>{
                if (e != null) {
                    u.push(e);
                }
            });
            const d = o("WAWebMsgGetters").getSender(e);
            if (d == null) {
                throw r("err")("report status failed due to missing sender");
            }
            const m = {
                spamListSpamFlow: t,
                spamListWiTraceId: a,
                spamListJid: o("WAWebWidToJid").widToUserJid(d),
                messageArgs: u
            };
            const p = yield o("WASmaxSpamIndividualReportRPC").sendIndividualReportRPC(m);
            return o("WAWebParseReportResponse").parseIndividualReportResponse(p);
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                return [];
            }
            if (!o("WAWebSpamUtils").isSpamSupportedForMessageType(e.type)) {
                return [];
            }
            const n = (e.pollOptions ?? []).flatMap((e)=>{
                if (e.addOptionMsgKey != null) {
                    return [
                        e.addOptionMsgKey
                    ];
                }
                return [];
            });
            const r = yield o("WAWebMessageAssociationUIUtils").getAssociatedMessagesByMsgKeys(e.id, n);
            return r.filter((e)=>o("WAWebSpamUtils").isSpamSupportedForAssociatedMessageType(e.type) && e.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION && !o("WAWebMsgGetters").getIsSentByMe(e) && !e.pendingDeleteForMe);
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id).filter((e)=>o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(e.associationType));
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield k(e);
            return [].concat(t, T(e));
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (c || (c = n("Promise"))).all(e.map(D));
            return [].concat(e, t.flat());
        });
        return P.apply(this, arguments);
    }
    function N(e, t, n) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = {
                spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
                spamListSpamFlow: t,
                spamListWiTraceId: n,
                spamListSubject: e.formattedTitle
            };
            const a = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(r);
            return o("WAWebParseReportResponse").parseGroupReportResponse(a);
        });
        return M.apply(this, arguments);
    }
    function w(e, t, n, r) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
            let i = [];
            if (t != null) {
                i = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type) ? yield $([
                    t
                ]) : [];
            } else {
                i = yield m(e, d, null);
            }
            const l = yield (c || (c = n("Promise"))).all(i.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const n = yield R(t);
                    if (n == null) {
                        return null;
                    }
                    const r = o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(t);
                    const messageParticipant = yield q(t, r);
                    return babelHelpers.extends({
                        messageFrom: o("WAWebWidToJid").widToGroupJid(e.id)
                    }, n, messageParticipant != null && {
                        messageParticipantMixinArgs: {
                            messageParticipant,
                            messageParticipantType: r ? "group_history_sender" : "original_sender"
                        }
                    });
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            const s = {
                spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
                spamListSpamFlow: r,
                spamListWiTraceId: a,
                spamListSubject: e.formattedTitle,
                messageArgs: l.filter(Boolean)
            };
            const u = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(s);
            return o("WAWebParseReportResponse").parseGroupReportResponse(u);
        });
        return A.apply(this, arguments);
    }
    function F(e, t, n, r) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
            let i = [];
            if (t != null) {
                i = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type) ? yield $([
                    t
                ]) : [];
            } else {
                i = yield m(e, d, e.id);
            }
            const l = yield (c || (c = n("Promise"))).all(i.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield R(e);
                    if (t != null) {
                        return babelHelpers.extends({
                            messageSenderOrRecipientMixinGroupArgs: {
                                messageSender: {
                                    messageFrom: o("WAWebWidToJid").widToUserJid(e.from)
                                }
                            }
                        }, t);
                    }
                    return null;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const s = {
                spamListSpamFlow: r,
                spamListWiTraceId: a,
                messageArgs: l.filter(Boolean)
            };
            const u = yield o("WASmaxSpamIndividualReportRPC").sendIndividualReportRPC(s);
            return o("WAWebParseReportResponse").parseIndividualReportResponse(u);
        });
        return O.apply(this, arguments);
    }
    function B(e, t, n, r) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            let a;
            if (o("WAWebChatGetters").getIsNewsletter(e)) {
                if (n != null && o("WAWebMsgGetters").getIsNewsletterStatus(n)) {
                    a = yield o("WAWebNewsletterReportUtils").sendNewsletterStatusReport(e, n, t, r);
                } else {
                    a = yield o("WAWebNewsletterReportUtils").sendNewsletterReport == null ? undefined : o("WAWebNewsletterReportUtils").sendNewsletterReport(e, n, t, r);
                }
            } else if (n != null && !o("WAWebChatGetters").getIsGroup(e)) {
                a = yield L(n, t, r);
            } else if (e.isParentGroup === true) {
                a = yield N(e, t, r);
            } else if (o("WAWebChatGetters").getIsGroup(e)) {
                a = yield w(e, n, t, r);
            } else {
                a = yield F(e, n, t, r);
            }
            return a;
        });
        return W.apply(this, arguments);
    }
    function q(e, t) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t) {
                const n = o("WAWebMsgGetters").getGroupHistoryBundleSender(e);
                if (n != null) {
                    return o("WAWebWidToJid").widToUserJid(n);
                }
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getReportedAuthorJid: group history bundle sender is null"
                ])));
                return null;
            }
            if (e.author) {
                return o("WAWebWidToJid").widToUserJid(e.author);
            }
            if (e.from.isUser()) {
                return o("WAWebWidToJid").widToUserJid(e.from);
            }
            return null;
        });
        return U.apply(this, arguments);
    }
    l.SPAM_REPORT_MESSAGE_COUNT = d;
    l.loadMsgsForSpamReport = m;
    l.getSpamMessageProtobuf = _;
    l.reportStatus = f;
    l.reportSpam = B;
}, 98);