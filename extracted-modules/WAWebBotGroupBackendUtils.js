__d("WAWebBotGroupBackendUtils", [
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebContactSystemMsg",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "encryptnow";
    const s = 1;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() === true) {
                const t = o("WAWebContactSystemMsg").genEncryptNotificationMsgAfterBotRemoved(e);
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: e,
                    newMsg: t,
                    handleSingleMsgOrigin: "botGroup"
                });
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() === true) {
                const t = o("WAWebGroupSystemMsg").genGroupTransitionToBotGroupNotificationMsg(e);
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: e,
                    newMsg: t,
                    handleSingleMsgOrigin: "botGroup"
                });
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() === true) {
                const t = o("WAWebGroupSystemMsg").genGroupTransitionToTeeBotGroupNotificationMsg(e);
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: e,
                    newMsg: t,
                    handleSingleMsgOrigin: "botGroup"
                });
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ currentIsOpenBotGroupState: t, groupWid: n, prevIsOpenBotGroupState: r, skipSystemMsg: i = false }) {
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() !== true || t == null) {
                return false;
            }
            if (r === false && (t ?? false) === true) {
                if (!i) {
                    yield d(n);
                }
                return true;
            }
            return false;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ currentIsTeeBotGroupState: t, groupWid: n, prevIsTeeBotGroupState: r, skipSystemMsg: i = false }) {
            if (o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() !== true || t == null) {
                return false;
            }
            if (r === false && t === true) {
                if (!i) {
                    yield p(n);
                }
                return true;
            }
            return false;
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ currentIsOpenBotGroupState: t, currentIsTeeBotGroupState: n, groupWid: r, prevIsOpenBotGroupState: a, prevIsTeeBotGroupState: i }) {
            if (!o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && !o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() || t == null && n == null) {
                return false;
            }
            const l = !!a || !!i;
            const s = !(t != null && t) && !(n != null && n);
            if (l && s) {
                if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                    yield u(r);
                }
                return true;
            }
            return false;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ actions: n, meta: a }) {
            const i = n.flatMap((e)=>{
                if (e.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE) {
                    return e.participants.map(({ id: t })=>t);
                }
                return [];
            });
            if (!i.some(o("WAWebBotUtils").isWidGroupAgentFbidWid)) {
                return null;
            }
            const l = yield o("WAWebGroupsParticipantsApi").getParticipants(a.chatId);
            if (l == null) {
                return null;
            }
            const u = new Set(i.map((e)=>e.toString()));
            const c = l.participants.filter((e)=>!u.has(e));
            if (!k(l.participants) || k(c) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return null;
            }
            const d = o("WAWebContactSystemMsg").genEncryptNotificationMsgAfterBotRemoved(a.chatId);
            const { externalId: m, ts: p } = a;
            if (m == null) {
                return d;
            }
            return babelHelpers.extends({}, d, {
                id: new (r("WAWebMsgKey"))({
                    fromMe: d.id.fromMe,
                    remote: a.chatId,
                    id: `${m}${o("WAWebGroupAgentRemovalSystemMsgs").toSystemMsgIdPart(e)}${p ?? ""}`
                }),
                t: p == null ? d.t : o("WATimeUtils").castToUnixTime(p + s)
            });
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ currentParticipants: t, groupWid: n, prevParticipantIds: r, responseListsAgents: a }) {
            if (!a || r == null || !E(r, t) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return false;
            }
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: n,
                newMsg: o("WAWebContactSystemMsg").genEncryptNotificationMsgAfterBotRemoved(n),
                handleSingleMsgOrigin: "botGroup"
            });
            return true;
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        const n = e.map((e)=>o("WAWebWidFactory").createWid(e)).filter(o("WAWebBotUtils").isWidGroupAgentFbidWid);
        if (n.length === 0 || t.some(({ id: t })=>o("WAWebBotUtils").isWidGroupAgentFbidWid(t))) {
            return false;
        }
        return n.every(o("WAWebBotGroupGatingUtils").isAgentListedInGroupInfoResponse);
    }
    function k(e) {
        return e.some((e)=>o("WAWebBotUtils").isWidGroupAgentFbidWid(o("WAWebWidFactory").createWid(e)));
    }
    function I(e) {
        if (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && !o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
            return e;
        }
        const t = e.map((e)=>{
            let t = e;
            const n = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(e.participants);
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()) {
                t = babelHelpers.extends({}, t, {
                    isOpenBotGroup: n.includeOpenMetabot
                });
            }
            if (o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
                t = babelHelpers.extends({}, t, {
                    isTeeBotGroup: n.includeTeeMetabot
                });
            }
            return t;
        });
        return t;
    }
    l.addGroupChangedToOpenBotGroupSystemMsgIfRequired = f;
    l.addGroupChangedToTeeBotGroupSystemMsgIfRequired = h;
    l.addBotGroupChangedToE2EEFSystemMsgIfRequired = C;
    l.genE2EENoticeMsgAfterLastAgentRemoved = v;
    l.addE2EESystemMsgAfterLastAgentRemovedIfRequired = R;
    l.injectBotParticipantState = I;
}, 98);