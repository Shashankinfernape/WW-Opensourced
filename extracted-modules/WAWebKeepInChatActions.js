__d("WAWebKeepInChatActions", [
    "$InternalEnum",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatMsgAction",
    "WAWebKeepInChatMsgUtils",
    "WAWebKeepInChatWarningCannotKeepSenderSuperpower",
    "WAWebKeepInChatWarningKeepExpiredModal",
    "WAWebKeepInChatWarningKeepOfflineModal",
    "WAWebKeepInChatWarningKicExitedModal",
    "WAWebKeepInChatWarningUnkeepExpiredModal",
    "WAWebKeepInChatWarningUnkeepLimitExpiredModal",
    "WAWebKeepInChatWarningUnkeepOwnMsgModal",
    "WAWebKicNux.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebNetworkStatus",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "WAWebWamEnumTriggerType",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = n("$InternalEnum")({
        EXPIRED: "msg_is_expired",
        CANCELLED: "user_cancelled_operation",
        EMPTY: "no_applicable_messages",
        EXITED_SENDER: "exited_sender",
        EXITED_ME_USER: "exited_me_user",
        SENDER_SUPERPOWER: "sender_superpower"
    });
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.name = "KeepProcessError";
            n.reason = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    function g(e, t, n) {
        return b([
            e
        ], t, n);
    }
    function h(e, t, n) {
        return L([
            e
        ], t, n);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            const l = i === true ? (e)=>o("WAWebModalManager").ModalManager.openSupportModal(e) : (e)=>o("WAWebModalManager").ModalManager.open(e);
            const s = t.find((e)=>o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e));
            if (s != null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[KIC] User exited group before keeping message"
                ]))).sendLogs("user-exited-keep");
                return (d || (d = n("Promise"))).reject(new f(_.EXITED_ME_USER));
            }
            const u = yield k(t);
            if (u != null) {
                l(p.jsx(o("WAWebKeepInChatWarningKicExitedModal").WarningKICSenderExitedModal, {
                    action: "keep",
                    message: u
                }));
                return (d || (d = n("Promise"))).reject(new f(_.EXITED_SENDER));
            }
            const c = t.find((e)=>o("WAWebKeepInChatMsgUtils").isExpired(e));
            if (c) {
                l(p.jsx(r("WAWebKeepInChatWarningKeepExpiredModal"), {
                    expiredMessage: c
                }));
                return (d || (d = n("Promise"))).reject(new f(_.EXPIRED));
            }
            const m = t.map((e)=>o("WAWebKeepInChatMsgUtils").keepIsLockedForMeSenderSuperpower(e));
            const g = m.some((e)=>e);
            if (g) {
                const h = m.findIndex((e)=>e);
                l(p.jsx(r("WAWebKeepInChatWarningCannotKeepSenderSuperpower"), {
                    message: t[h]
                }));
                return (d || (d = n("Promise"))).reject(new f(_.SENDER_SUPERPOWER));
            }
            yield (d || (d = n("Promise"))).all(t.map((e)=>o("WAWebKeepInChatMsgAction").keepMessage(e, a)));
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = o("WAWebFrontendMsgGetters").getChat(e[0]);
            const i = n === true ? (e)=>o("WAWebModalManager").ModalManager.openSupportModal(e) : (e)=>o("WAWebModalManager").ModalManager.open(e);
            if (o("WAWebKicNux.react").shouldShowKicNux(a)) {
                yield o("WAWebKicNux.react").openKicNuxAndWaitForClose(a, o("WAWebWamEnumTriggerType").TRIGGER_TYPE.KEEP_MESSAGE_FIRST_TIME);
            }
            if (!r("WAWebNetworkStatus").online) {
                T(e[0], o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL);
                return i(p.jsx(o("WAWebKeepInChatWarningKeepOfflineModal").WarningKeepOfflineModal, {}));
            }
            const l = e.filter((e)=>!o("WAWebMsgGetters").getIsKept(e) && o("WAWebKeepInChatMsgUtils").canShowKeepOption(e));
            if (!l.length) {
                throw new f(_.EMPTY);
            }
            yield y(l, t, n);
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            yield (d || (d = n("Promise"))).all(e.map((e)=>o("WAWebKeepInChatMsgAction").undoKeepMessage(e, t, r)));
        });
        return R.apply(this, arguments);
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            const i = o("WAWebFrontendMsgGetters").getChat(e[0]);
            const l = a === true ? (e)=>o("WAWebModalManager").ModalManager.openSupportModal(e) : (e)=>o("WAWebModalManager").ModalManager.open(e);
            if (o("WAWebKicNux.react").shouldShowKicNux(i)) {
                yield o("WAWebKicNux.react").openKicNuxAndWaitForClose(i, o("WAWebWamEnumTriggerType").TRIGGER_TYPE.KEEP_MESSAGE_FIRST_TIME);
            }
            if (!r("WAWebNetworkStatus").online) {
                T(e[0], o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL);
                return l(p.jsx(o("WAWebKeepInChatWarningKeepOfflineModal").WarningKeepOfflineModal, {}));
            }
            const m = e.find((e)=>o("WAWebKeepInChatMsgUtils").isExpired(e));
            const g = e.some((e)=>o("WAWebMsgGetters").getIsSentByMe(e));
            const h = e.some((e)=>o("WAWebKeepInChatMsgUtils").isPastUnkeepExpirationLimit(e));
            const y = e.find((e)=>o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e));
            const C = yield k(e);
            return new (d || (d = n("Promise")))(function(n, a) {
                const i = function() {
                    n(S(e, {
                        deleteExpired: true
                    }, t));
                };
                const onDeleteForMe = function() {
                    const t = e[0];
                    if (!t) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Attempting to DFM an empty array of messages"
                        ]))).sendLogs("unkeep-DFM-empty-array");
                        return;
                    }
                    const n = e.every((e)=>o("WAWebFrontendMsgGetters").getChat(e) === o("WAWebFrontendMsgGetters").getChat(t));
                    if (!n) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Attempting to DFM an array of messages with mismatched chats"
                        ]))).sendLogs("unkeep-DFM-chat-mismatch");
                        return;
                    }
                    o("WAWebCmd").Cmd.sendDeleteMsgs(o("WAWebFrontendMsgGetters").getChat(t), {
                        type: "message",
                        list: e
                    }, false, null, null);
                };
                if (y != null) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[KIC] User exited group before unkeeping message"
                    ]))).sendLogs("user-exited-unkeep");
                    a(new f(_.EXITED_ME_USER));
                    return;
                } else if (C != null) {
                    const Component = o("WAWebKeepInChatWarningKicExitedModal").WarningKICSenderExitedModal;
                    l(<Component action="unkeep" onClose={function() {
                        return a(new f(_.EXITED_SENDER));
                    }} message={C}/>);
                } else if (m) {
                    const Component = r("WAWebKeepInChatWarningUnkeepLimitExpiredModal");
                    const Component_1 = r("WAWebKeepInChatWarningUnkeepExpiredModal");
                    l(h ? <Component onDeleteForMe={onDeleteForMe} expiredMessage={m}/> : <Component_1 onConfirm={i} onCancel={function() {
                        return a(new f(_.CANCELLED));
                    }} expiredMessage={m}/>);
                } else if (g) {
                    const Component = r("WAWebKeepInChatWarningUnkeepOwnMsgModal");
                    l(<Component onConfirm={i} onCancel={function() {
                        return a(new f(_.CANCELLED));
                    }}/>);
                } else {
                    return i();
                }
            });
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (d || (d = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (!o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e))) {
                        return null;
                    }
                    const t = yield o("WAWebKeepInChatMsgUtils").senderIsGroupParticipant(e);
                    if (t) {
                        return null;
                    }
                    return e;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return t.find((e)=>e != null);
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        const n = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(e, t);
        n.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.OFFLINE
        });
        n.commit();
    }
    l.KeepProcessErrorReason = _;
    l.runKeepInChatUX = g;
    l.runUndoKeepInChatUX = h;
    l.runBulkKeepInChatUX = b;
    l.runBulkUndoKeepInChatUX = L;
}, 98);