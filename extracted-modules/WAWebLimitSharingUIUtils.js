__d("WAWebLimitSharingUIUtils", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAcp2SystemText",
    "WAWebActionToast.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactSystemMsg",
    "WAWebDBProcessMessage",
    "WAWebFaqUrl",
    "WAWebFormatCTAText",
    "WAWebFormatNotificationTemplateText",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendContactGetters",
    "WAWebGroupConstants",
    "WAWebLimitSharingAIGroupBlock",
    "WAWebLimitSharingBlockedDueToAIAgent.react",
    "WAWebLimitSharingBlockedDueToAIGroup.react",
    "WAWebLimitSharingDisableConfirmationPopup.react",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingInvokeBlockedPopup.react",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingSettingUpdateWamEvent",
    "WAWebModalManager",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebOpusUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebSendMsgChatAction",
    "WAWebSetPropertyGroupAction",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumToggleUpdateAction",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "err",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        OFFLINE: "offline",
        TOGGLE_1_ON_1: "toggle1on1"
    };
    function m() {
        return o("WAWebFaqUrl").getFullUrl(715385484388016);
    }
    function p(e) {
        const t = o("WAWebLimitSharingAIGroupBlock").getLimitSharingAIGroupBlock(e);
        if (t === o("WAWebLimitSharingAIGroupBlock").LimitSharingAIGroupBlock.GROUP_AGENT) {
            o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebLimitSharingBlockedDueToAIAgent.react"), {}));
            return;
        }
        if (t === o("WAWebLimitSharingAIGroupBlock").LimitSharingAIGroupBlock.META_AI) {
            o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebLimitSharingBlockedDueToAIGroup.react"), {}));
            return;
        }
        o("WAWebCmd").Cmd.limitSharingDrawer(e);
    }
    function _(e) {
        return o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e) || f(e?.limitSharing);
    }
    function f(e) {
        if (o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            return false;
        }
        return o("WAWebLimitSharingGatingUtils").isLimitSharingReceiverGatingEnabledForChat() && e?.sharingLimited === true;
    }
    function g(e, t) {
        const r = t?.some(function(e) {
            return e.isBot();
        }) ?? false;
        return r && _(e);
    }
    function h(e) {
        if (!o("WAWebLimitSharingGatingUtils").isLimitSharingReceiverGatingEnabledForChat()) {
            return o("WAWebFormatUnknownMsg").defaultFutureproofMsgText(e);
        }
        const n = E();
        if (e.limitSharing != null) {
            const a = e.limitSharing?.initiatedBy;
            if (a) {
                const l = o("WAWebWidFactory").createUserWidOrThrow(a.user, a.server);
                const s = o("WAWebContactCollection").ContactCollection.get(l);
                const u = s ? o("WAWebFrontendContactGetters").getFormattedName(s) : o("WAWebWidFormat").widToFormattedUser(l);
                const c = o("WAWebUserPrefsMeUser").isMeAccount(l);
                if (e.limitSharing?.sharingLimited === true) {
                    if (c) {
                        return n.byMeOn();
                    }
                    return n.byOtherUserOn(u);
                }
                if (c) {
                    return n.byMeOff();
                }
                return n.byOtherUserOff(u);
            }
        }
        if (e.limitSharing?.sharingLimited === true) {
            return n.byNoUserOn();
        }
        return n.byNoUserOff();
    }
    function y(e, t, n) {
        if (e.hasCapi === true || e.id.isBot() || r("WAWebWid").isPSA(e.contact.id) || e.contact.isEnterprise) {
            return null;
        }
        if (o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(e) && !C(t, n)) {
            return "acp2";
        }
        if (o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            return null;
        }
        return "limitSharing";
    }
    function C(e, t) {
        return t?.enabled !== true && f(e);
    }
    function b(e) {
        o("WAWebCmd").Cmd.acp2Drawer(e);
    }
    function v(e) {
        o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebLimitSharingInvokeBlockedPopup.react"), {
            chat: e
        }));
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
                const t = f(e?.limitSharing);
                const a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                const unixTimeSeconds = o("WATimeUtils").unixTime();
                const l = {
                    sharingLimited: !t,
                    trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.CHAT_SETTING,
                    initiatedBy: a,
                    limitSharingSettingTimestamp: unixTimeSeconds * 1000
                };
                if (!r("WAWebNetworkStatus").online) {
                    k();
                    return;
                }
                if (l.sharingLimited !== true && !D(e)) {
                    const Component = r("WAWebLimitSharingDisableConfirmationPopup.react");
                    o("WAWebModalManager").ModalManager.open(<Component onOK={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        yield x({
                            chat: e,
                            limitSharing: l,
                            meUser: a,
                            unixTimeSeconds
                        });
                    })}/>);
                } else {
                    yield x({
                        chat: e,
                        limitSharing: l,
                        meUser: a,
                        unixTimeSeconds
                    });
                }
            }
        });
        return R.apply(this, arguments);
    }
    function L(t) {
        if (t.limitSharing?.sharingLimited === true && o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            const beforeTimestamp = o("WAWebABProps").getABPropConfigValue("opus_t");
            o("WAWebOpusUtils").opusProcessChat(t.id.toString(), {
                beforeTimestamp
            }).catch((n)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[opus] guardrail failed for chat ",
                    ""
                ])), t.id.toString()).catching(n instanceof Error ? n : r("err")(String(n))).sendLogs("opus-guardrail-fail");
            });
        }
    }
    function E() {
        return {
            byMeOn: function() {
                return s._("You turned on advanced chat privacy");
            },
            byMeOff: function() {
                return s._("You turned off advanced chat privacy");
            },
            byOtherUserOn: function(t) {
                return s._("{limit_sharing_author} turned on advanced chat privacy", [
                    s._param("limit_sharing_author", t)
                ]);
            },
            byOtherUserOff: function(t) {
                return s._("{limit_sharing_author} turned off advanced chat privacy", [
                    s._param("limit_sharing_author", t)
                ]);
            },
            byNoUserOn: function() {
                return s._("Advanced chat privacy was turned on");
            },
            byNoUserOff: function() {
                return s._("Advanced chat privacy was turned off");
            },
            byMeChatProgressOn: function() {
                return s._("Turning on advanced chat privacy in this chat");
            },
            byMeChatProgressOff: function() {
                return s._("Turning off advanced chat privacy in this chat");
            },
            byMeChatCompletedOn: function() {
                return s._("You turned on advanced chat privacy in this chat");
            },
            byMeChatCompletedOff: function() {
                return s._("You turned off advanced chat privacy in this chat");
            }
        };
    }
    function k() {
        T(d.OFFLINE, s._("You can't change this setting because you're not connected to the internet. Check your internet connection and try again."));
    }
    function I(TOGGLE_1_ON, t, pendingAction) {
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
            id: TOGGLE_1_ON,
            initialAction: t,
            pendingAction
        }));
    }
    function T(OFFLINE, msg) {
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg,
            id: OFFLINE
        }));
    }
    function D(e) {
        let t;
        if ((t = e.limitSharing) != null && t.initiatedBy) {
            return o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWidFromWidLike(e.limitSharing.initiatedBy));
        }
        return false;
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, limitSharing, meUser, unixTimeSeconds }) {
            if (r("WAWebWid").isGroup(chat.id)) {
                yield P(chat, limitSharing);
            } else {
                yield M(chat, limitSharing, meUser, unixTimeSeconds);
            }
            j(limitSharing);
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield o("WAWebSetPropertyGroupAction").setGroupProperty(e, o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING, t.sharingLimited === true ? 1 : 0);
        });
        return N.apply(this, arguments);
    }
    function M(e, t, n, r) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, meUser, unixTimeSeconds) {
            const a = E();
            const i = new (o("WAWebActionToast.react")).ActionType(t.sharingLimited === true ? a.byMeChatProgressOn() : a.byMeChatProgressOff());
            const l = A({
                chat: e,
                limitSharing: t,
                meUser,
                unixTimeSeconds
            }).then(()=>new (o("WAWebActionToast.react")).ActionType(t.sharingLimited === true ? a.byMeChatCompletedOn() : a.byMeChatCompletedOff()));
            I(d.TOGGLE_1_ON_1, i, l);
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, limitSharing, meUser, unixTimeSeconds }) {
            const i = yield O({
                chat,
                limitSharing,
                meUser,
                unixTimeSeconds
            });
            yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, i);
            const l = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(chat.id, limitSharing);
            yield o("WAWebDBProcessMessage").storeMessages([
                l
            ], chat.id);
            yield o("WAWebLimitSharingModelUtils").updateChat(chat.id, limitSharing);
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, limitSharing, meUser, unixTimeSeconds }) {
            const l = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: chat.id,
                fromMe: true
            });
            return {
                id: l,
                from: meUser,
                to: chat.id,
                t: unixTimeSeconds,
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "limit_sharing_system_message",
                kind: "protocol",
                isNewMsg: true,
                viewMode: "VISIBLE",
                limitSharing
            };
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        const n = o("WAWebStateUtils").unproxy(t);
        const text = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(t.unsafe())).text;
        let i;
        let l;
        if (o("WAWebLimitSharingGatingUtils").isLimitSharingReceiverGatingEnabledForChat()) {
            i = r("WAWebFormatCTAText")({
                type: t.type,
                subtype: t.subtype,
                id: n.id
            });
            l = function() {
                return p(e);
            };
        }
        return {
            text,
            ctaText: i,
            handleClick: l
        };
    }
    function q() {
        const e = E();
        return {
            on: [
                e.byMeChatProgressOn(),
                e.byMeChatCompletedOn()
            ],
            off: [
                e.byMeChatProgressOff(),
                e.byMeChatCompletedOff()
            ]
        };
    }
    function U(e, t) {
        return o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(e) && t?.enabled === true;
    }
    function V(e) {
        return U(e, e?.acp2Setting);
    }
    function H() {
        return {
            byMeOn: function() {
                return o("WAWebAcp2SystemText").getAcp2ByMeOnText();
            },
            byMeOff: function() {
                return o("WAWebAcp2SystemText").getAcp2ByMeOffText();
            },
            byOtherUserOn: function(t) {
                return o("WAWebAcp2SystemText").getAcp2ByOtherUserOnText(t);
            },
            byOtherUserOff: function(t) {
                return o("WAWebAcp2SystemText").getAcp2ByOtherUserOffText(t);
            },
            byNoUserOn: function() {
                return o("WAWebAcp2SystemText").getAcp2ByNoUserOnText();
            },
            byNoUserOff: function() {
                return o("WAWebAcp2SystemText").getAcp2ByNoUserOffText();
            }
        };
    }
    function G(e) {
        if (!o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e.id.remote)) {
            return o("WAWebFormatUnknownMsg").defaultFutureproofMsgText(e);
        }
        const n = H();
        if (e.acp2Setting != null) {
            if (e.acp2Setting?.initiatedBy == null) {
                if (e.acp2Setting?.initiatedByMe === true) {
                    if (e.acp2Setting?.enabled === true) {
                        return n.byMeOn();
                    }
                    return n.byMeOff();
                }
            }
            const s = e.acp2Setting?.initiatedBy;
            if (s) {
                const c = o("WAWebWidFactory").createUserWidOrThrow(s.user, s.server);
                const d = o("WAWebContactCollection").ContactCollection.get(c);
                const m = d ? o("WAWebFrontendContactGetters").getFormattedName(d) : o("WAWebWidFormat").widToFormattedUser(c);
                const p = o("WAWebUserPrefsMeUser").isMeAccount(c);
                if (e.acp2Setting?.enabled === true) {
                    if (p) {
                        return n.byMeOn();
                    }
                    return n.byOtherUserOn(m);
                }
                if (p) {
                    return n.byMeOff();
                }
                return n.byOtherUserOff(m);
            }
        }
        if (e.acp2Setting?.enabled === true) {
            return n.byNoUserOn();
        }
        return n.byNoUserOff();
    }
    function z(e, t) {
        const n = o("WAWebStateUtils").unproxy(t);
        const text = r("WAWebFormatNotificationTemplateText")(o("WAWebStateUtils").unproxy(t.unsafe())).text;
        let i;
        let l;
        if (o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(e)) {
            i = r("WAWebFormatCTAText")({
                type: t.type,
                subtype: t.subtype,
                id: n.id
            });
            l = function() {
                return b(e);
            };
        }
        return {
            text,
            ctaText: i,
            handleClick: l
        };
    }
    function j(limitSharing) {
        new (o("WAWebLimitSharingSettingUpdateWamEvent")).LimitSharingSettingUpdateWamEvent({
            toggleUpdateAction: limitSharing.sharingLimited === true ? o("WAWebWamEnumToggleUpdateAction").TOGGLE_UPDATE_ACTION.TURN_ON : o("WAWebWamEnumToggleUpdateAction").TOGGLE_UPDATE_ACTION.TURN_OFF
        }).commit();
    }
    l.getSystemMessageLearnMoreURL = m;
    l.showLimitSharingDrawer = p;
    l.isLimitSharingReceiverEnabled = _;
    l.isLimitSharingReceiverEnabledForValue = f;
    l.isLimitSharingReceiverEnabledForUsers = g;
    l.getLimitSharingMessageSystemNotificationText = h;
    l.getAcpSettingRow = y;
    l.showAcp2Drawer = b;
    l.showLimitSharingInvokeBlockedPopup = v;
    l.toggleLimitSharing = S;
    l.maybeOpusProcessChatOnOpen = L;
    l.getLimitSharingMessageNotification = W;
    l.getLimitSharingGroupUpdateActionStrings = q;
    l.isAcp2ReceiverEnabledForValue = U;
    l.isAcp2ReceiverEnabled = V;
    l.getAcp2MessageSystemNotificationText = G;
    l.getAcp2MessageNotification = z;
}, 226);