__d("WAWebGroupAgentPrivacyNotice", [
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebGroupAgentPrivacyNoticeParams",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupSystemMsg",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaBotProfile",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "privacynotice";
    const d = "genericprivacynotice";
    const m = "thirdpartyprivacynotice";
    const p = "metaaiopennotice";
    const _ = "metaaiteenotice";
    const f = {
        hasAgentWithoutProfile: false,
        hasMuse: false,
        thirdPartyAgent: null
    };
    function g(e, t) {
        return B(o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.GroupTransitionToBotGroupSystemMsg,
            templateParams: [
                o("WAWebGroupAgentPrivacyNoticeParams").GROUP_AGENT_PRIVACY_NOTICE_PARAM
            ]
        }), t, c);
    }
    function h(e, t) {
        return B(o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.GroupTransitionToBotGroupSystemMsg,
            templateParams: [
                o("WAWebGroupAgentPrivacyNoticeParams").GENERIC_GROUP_AGENT_PRIVACY_NOTICE_PARAM
            ]
        }), t, d);
    }
    function y(e, t, n) {
        return B(o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.GroupTransitionToBotGroupSystemMsg,
            templateParams: [
                o("WAWebGroupAgentPrivacyNoticeParams").THIRD_PARTY_GROUP_AGENT_PRIVACY_NOTICE_PARAM,
                t
            ]
        }), n, m);
    }
    function C({ meta: t, participants: n }) {
        const r = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(n);
        const { includeOpenMetabot: a, includeTeeMetabot: i } = r;
        const l = [
            o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && a ? {
                msg: o("WAWebGroupSystemMsg").genGroupTransitionToBotGroupNotificationMsg(t.chatId),
                suffix: p
            } : null,
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && i ? {
                msg: o("WAWebGroupSystemMsg").genGroupTransitionToTeeBotGroupNotificationMsg(t.chatId),
                suffix: _
            } : null
        ].filter(Boolean);
        return l.map(({ msg: n, suffix: r })=>{
            if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return B(n, t, r);
            }
            return n;
        });
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addedParticipants: n, meta: r }) {
            if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || !n.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t))) {
                return C({
                    meta: r,
                    participants: n
                });
            }
            const a = yield o("WAWebGroupsParticipantsApi").getParticipants(r.chatId);
            const i = (a?.participants ?? []).map((e)=>({
                    id: o("WAWebWidFactory").createWid(e),
                    isAdmin: false,
                    isSuperAdmin: false
                }));
            return C({
                meta: r,
                participants: [].concat(n, i)
            });
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return [].concat(e, t);
        }
        return [].concat(t, e);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ meta: t, participants: n }) {
            if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return [];
            }
            const r = yield I({
                chatId: t.chatId,
                meta: t,
                participantIds: n.map(({ id: t })=>t)
            });
            return [].concat(r, C({
                meta: t,
                participants: n
            }));
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addedParticipantIds: n, chatId: r, meta: a }) {
            if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return [];
            }
            const i = yield o("WAWebGroupsParticipantsApi").getParticipants(r);
            const l = new Set(n.map((e)=>e.toString()));
            const s = (i?.participants ?? []).filter((e)=>!l.has(e)).map((e)=>o("WAWebWidFactory").createWid(e));
            return N({
                addedIds: n,
                chatId: r,
                meta: a,
                prevIds: s
            });
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: t, meta: n, participantIds: r }) {
            if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return [];
            }
            const a = yield F(r);
            return [
                A({
                    chatId: t,
                    meta: n,
                    types: a
                }),
                a.thirdPartyAgent != null ? y(t, a.thirdPartyAgent, n) : null
            ].filter(Boolean);
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!(!t.isGroup() || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())) {
                try {
                    const i = yield (u || (u = n("Promise"))).all([
                        o("WAWebGroupsParticipantsApi").getParticipants(t),
                        o("WAWebSchemaChat").getChatTable().get(t.toString())
                    ]);
                    const l = i[0];
                    const s = i[1];
                    if (!o("WAWebGroupsParticipantsApi").checkMyMembershipForParticipantRecord(l) || s?.isReadOnly === true) {
                        return;
                    }
                    const c = (l?.participants ?? []).map((e)=>o("WAWebWidFactory").createWid(e));
                    const d = c.map((e)=>({
                            id: e,
                            isAdmin: false,
                            isSuperAdmin: false
                        }));
                    const m = yield I({
                        chatId: t,
                        participantIds: c
                    });
                    const p = [].concat(m, C({
                        meta: {
                            author: null,
                            chatId: t
                        },
                        participants: d
                    }));
                    yield u.all(p.map((e)=>o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                            chatId: t,
                            newMsg: e,
                            handleSingleMsgOrigin: "botGroup"
                        })));
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[groupAgentPrivacyNotice] insert after clear chat failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("group-agent-privacy-notice-clear-chat-error");
                }
            }
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ currentParticipantIds: t, groupWid: r, prevParticipantIds: a }) {
            if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || a == null) {
                return false;
            }
            const i = new Set(a);
            const l = t.filter((e)=>!i.has(e.toString()));
            if (l.length === 0) {
                return false;
            }
            const s = yield N({
                addedIds: l,
                chatId: r,
                prevIds: a.map((e)=>o("WAWebWidFactory").createWid(e))
            });
            yield (u || (u = n("Promise"))).all(s.map((e)=>o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: r,
                    newMsg: e,
                    handleSingleMsgOrigin: "botGroup"
                })));
            return s.length > 0;
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addedIds: t, chatId: r, meta: a, prevIds: i }) {
            const l = yield (u || (u = n("Promise"))).all([
                F(t),
                F(i)
            ]);
            const s = l[0];
            const c = l[1];
            const d = t.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e)) && !i.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e));
            const m = w({
                addedTypes: s,
                addsMe: d,
                prevTypes: c
            });
            const p = s.thirdPartyAgent != null && c.thirdPartyAgent == null ? s.thirdPartyAgent : null;
            const _ = p ?? (d ? c.thirdPartyAgent : null);
            return [
                A({
                    chatId: r,
                    meta: a,
                    types: m
                }),
                _ != null ? y(r, _, a) : null
            ].filter(Boolean);
        });
        return M.apply(this, arguments);
    }
    function w({ addedTypes: t, addsMe: n, prevTypes: r }) {
        if (n) {
            return {
                hasAgentWithoutProfile: t.hasAgentWithoutProfile || r.hasAgentWithoutProfile,
                hasMuse: t.hasMuse || r.hasMuse,
                thirdPartyAgent: null
            };
        }
        if (r.hasMuse) {
            return f;
        }
        return t;
    }
    function A({ chatId: t, meta: n, types: r }) {
        if (r.hasMuse) {
            return g(t, n);
        }
        if (r.hasAgentWithoutProfile) {
            return h(t, n);
        }
        return null;
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.filter((e)=>o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e));
            if (t.length === 0) {
                return f;
            }
            try {
                const n = yield o("WAWebSchemaBotProfile").getBotProfileTable().bulkGet(t.map((e)=>e.toString()));
                let a = false;
                let i = false;
                let l = null;
                n.forEach((e, n)=>{
                    const r = o("WAWebBotProduct").botProductFromServerValue(e?.product);
                    if (e?.product == null || e.product === "") {
                        a = true;
                    } else if (o("WAWebBotProduct").isMuseAgentProduct(t[n], r)) {
                        i = true;
                    } else if (r === o("WAWebBotProduct").BotProduct.THIRD_PARTY && l == null) {
                        l = t[n];
                    }
                });
                return {
                    hasAgentWithoutProfile: a,
                    hasMuse: i,
                    thirdPartyAgent: l
                };
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupAgentPrivacyNotice] bot profile read failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("group-agent-privacy-notice-profile-read-failed");
                return babelHelpers.extends({}, f, {
                    hasAgentWithoutProfile: true
                });
            }
        });
        return O.apply(this, arguments);
    }
    function B(e, t, n) {
        const a = t?.externalId;
        if (t == null || a == null) {
            return e;
        }
        const { chatId: i, ts: l } = t;
        return babelHelpers.extends({}, e, {
            id: new (r("WAWebMsgKey"))({
                fromMe: e.id.fromMe,
                remote: i,
                id: `${a}${o("WAWebGroupAgentRemovalSystemMsgs").toSystemMsgIdPart(n)}${l ?? ""}`
            }),
            t: l ?? e.t
        });
    }
    l.genMetaAiGroupNoticeMsgs = C;
    l.genMetaAiGroupNoticeMsgsForAdd = b;
    l.orderGroupAgentNoticesAndRows = S;
    l.genGroupAgentNoticeMsgsForCreate = R;
    l.genGroupAgentPrivacyNoticeMsgsForAdd = E;
    l.genGroupAgentPrivacyNoticeMsgsForParticipants = I;
    l.insertGroupAgentPrivacyNoticeAfterClearIfRequired = D;
    l.insertGroupAgentPrivacyNoticeForMetadataIfRequired = $;
}, 98);