__d("WAWebHandleGroupNotificationV2", [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotGroupBackendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCommsWapMd",
    "WAWebGetMessageCache",
    "WAWebGroupAgentAddSystemMsgs",
    "WAWebGroupAgentDeletedChat",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupQueryJob",
    "WAWebGroupSystemMsg",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebMemberLabelGroupRemoveHandler",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebShouldTriggerQueryGroupInfo",
    "WAWebUpdateDbForGroupActionApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e, t) {
        return L(e, t) != null;
    }
    function _(e) {
        return o("WAWap").wap("ack", {
            to: o("WAWebCommsWapMd").GROUP_JID(e.chatId),
            id: o("WAWap").CUSTOM_STRING(e.externalId),
            class: "notification",
            type: "w:gp2",
            participant: e.author ? o("WAWebCommsWapMd").USER_JID(e.author) : o("WAWap").DROP_ATTR
        });
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield b(e, function() {
                return h(e, t);
            });
            const r = n.written;
            yield r;
            return _(e);
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield o("WAWebLidMappingUsernameLearnUtils").processParsedGroupNotificationForLidMappingAndUsernames({
                notification: e,
                flushImmediately: !t
            });
            yield (m || (m = n("Promise"))).all(e.actions.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (t.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE) {
                        yield o("WAWebMemberLabelGroupRemoveHandler").handleMemberLabelUpdatesOnGroupParticipantRemoval(e, t);
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            const r = L(e, t);
            if (r == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "no handler for group notification ",
                    ""
                ])), e.chatId.toLogString());
                return {
                    written: (m || (m = n("Promise"))).resolve()
                };
            }
            return S(e, r);
        });
        return y.apply(this, arguments);
    }
    const C = new Map;
    function b(e, t) {
        if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || !e.actions.some(v)) {
            return t();
        }
        const a = e.chatId.toString();
        const i = (C.get(a) ?? (m || (m = n("Promise"))).resolve()).then(t);
        const l = i.then(()=>{}, ()=>{});
        C.set(a, l);
        l.then(()=>{
            if (C.get(a) === l) {
                C.delete(a);
            }
        });
        return i;
    }
    function v(e) {
        return (e.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD || e.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE) && e.participants.some(({ id: t })=>o("WAWebBotUtils").isWidGroupAgentFbidWid(t));
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WAWebGroupAgentDeletedChat").isAgentChangeInDeletedGroupChatForActions(e.chatId, e.actions);
            let a = null;
            try {
                a = r ? null : yield o("WAWebBotGroupBackendUtils").genE2EENoticeMsgAfterLastAgentRemoved({
                    meta: e,
                    actions: e.actions
                });
            } catch (e) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[system msg][v2] end-to-end encryption notice generation failed with ",
                    ""
                ])), e).sendLogs("group-notification-v2-e2ee-notice-generation-error");
            }
            const i = yield (m || (m = n("Promise"))).all([
                t.writeSystemMessages(a, r),
                t.writeGroupInfoUpdates()
            ]);
            const l = i[0];
            return l;
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        const r = [];
        let a = false;
        for (const i of e.actions){
            const l = s(e, i);
            if (l == null) {
                return null;
            }
            r.push(l);
        }
        return {
            writeSystemMessages: (()=>{
                const o = n("asyncToGeneratorRuntime").asyncToGenerator(function*(o, i) {
                    const l = yield (m || (m = n("Promise"))).all(r.map((e)=>e.writeSystemMessages(i)));
                    const s = a && o != null ? yield E(e, t, o) : null;
                    return {
                        written: m.all([].concat(l.map(({ written: t })=>t), [
                            s?.written
                        ])).then(()=>{})
                    };
                });
                function i(e, t) {
                    return o.apply(this, arguments);
                }
                return i;
            })(),
            writeGroupInfoUpdates: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield (m || (m = n("Promise"))).all(r.map((e)=>e.writeGroupInfoUpdates()));
                });
                function t() {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        };
        function s(e, r) {
            if (r.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE) {
                return null;
            }
            return {
                writeGroupInfoUpdates: (()=>{
                    const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        if ((r.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD || r.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE) && (yield o("WAWebShouldTriggerQueryGroupInfo").shouldTriggerQueryGroupInfo({
                            groupWid: e.chatId,
                            action: r
                        }))) {
                            yield o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(e.chatId);
                            return;
                        }
                        yield o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(e, r, t);
                        const n = yield o("WAWebGroupHistoryParticipantJob").enrichGroupActionWithStoredHistoryState(e.chatId, r);
                        o("WAWebBackendApi").frontendFireAndForget("updateModelForGroupAction", {
                            groupMeta: e,
                            groupAction: n
                        });
                    });
                    function i() {
                        return a.apply(this, arguments);
                    }
                    return i;
                })(),
                writeSystemMessages: (()=>{
                    const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                        const i = yield T(e, r, n);
                        const l = yield M({
                            chatId: e.chatId,
                            shouldProcessOffline: t,
                            shouldSkip: function() {
                                return o("WAWebHandleGroupNotificationConst").shouldSkipGenMsg(e, r);
                            },
                            systemMessages: i
                        });
                        if (l.inserted && r.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE) {
                            a = true;
                        }
                        return l;
                    });
                    function l(e) {
                        return i.apply(this, arguments);
                    }
                    return l;
                })()
            };
        }
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            try {
                const o = yield M({
                    chatId: e.chatId,
                    shouldProcessOffline: t,
                    shouldSkip: function() {
                        return (m || (m = n("Promise"))).resolve(false);
                    },
                    systemMessages: [
                        r
                    ]
                });
                const a = o.written;
                return {
                    written: a.catch(I)
                };
            } catch (e) {
                I(e);
                return {
                    written: (m || (m = n("Promise"))).resolve()
                };
            }
        });
        return k.apply(this, arguments);
    }
    function I(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[system msg][v2] end-to-end encryption notice write failed with ",
            ""
        ])), t).sendLogs("group-notification-v2-e2ee-notice-write-error");
    }
    function T(e, t, n) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let r = [];
            if ((t.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD || t.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE) && (yield o("WAWebShouldTriggerQueryGroupInfo").shouldTriggerQueryGroupInfo({
                groupWid: e.chatId,
                action: t
            }))) {
                return [];
            }
            if (t.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD) {
                const a = yield o("WAWebHandleGroupNotificationConst").notAlreadyInGroup(e.chatId, t.participants);
                const i = a.filter(({ id: t, phoneNumber: n })=>!t.isLid() || n != null);
                if (i.length > 0 && (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[system message][v2] eligibleParticipants = ",
                    " - ADD"
                ])), i.length), r = yield x(e, t, n ? [] : i), o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled())) {
                    const l = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(i);
                    if (l.includeOpenMetabot || l.includeTeeMetabot) {
                        o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                            id: e.chatId,
                            actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD
                        });
                    }
                }
            } else if (t.actionType !== o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE && (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[system msg][v2] genSystemNotificationsImpl ",
                ""
            ])), t.actionType), n || (r = t.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE ? yield P(e, t) : [
                (yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: e,
                    action: t,
                    dbIsStale: true
                }))
            ]), (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) && t.actionType === o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE)) {
                const s = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(t.participants);
                if (s.includeOpenMetabot || s.includeTeeMetabot) {
                    o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: e.chatId,
                        actionType: o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE
                    });
                }
            }
            return r.filter(Boolean);
        });
        return D.apply(this, arguments);
    }
    function x(e, t, n) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (n.length === 0) {
                return [];
            }
            const r = yield o("WAWebGroupAgentPrivacyNotice").genGroupAgentPrivacyNoticeMsgsForAdd({
                chatId: e.chatId,
                addedParticipantIds: n.map(({ id: t })=>t),
                meta: e
            });
            const a = yield o("WAWebGroupAgentAddSystemMsgs").genGroupAddNotificationMsgs({
                meta: e,
                action: babelHelpers.extends({}, t, {
                    participants: n
                }),
                dbIsStale: true
            });
            return o("WAWebGroupAgentPrivacyNotice").orderGroupAgentNoticesAndRows([].concat(r, (yield o("WAWebGroupAgentPrivacyNotice").genMetaAiGroupNoticeMsgsForAdd({
                addedParticipants: n,
                meta: e
            }))), a);
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebGroupAgentRemovalSystemMsgs").genGroupAgentRemovalMsgs({
                meta: e,
                action: t,
                dbIsStale: true
            });
            return [].concat(n ?? [
                (yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: e,
                    action: t,
                    dbIsStale: true
                }))
            ]);
        });
        return N.apply(this, arguments);
    }
    function M({ chatId: t, shouldProcessOffline: r, shouldSkip: a, systemMessages: i }) {
        let l = function() {};
        let s = function() {};
        const u = new (m || (m = n("Promise")))(function(e, t) {
            l = e;
            s = t;
        });
        o("WAWebMessageQueue").onMessageQueue({
            chatWid: t,
            isOffline: r,
            msgCategory: null,
            action: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    let e;
                    try {
                        if (yield a()) {
                            l({
                                inserted: false,
                                written: (m || (m = n("Promise"))).resolve()
                            });
                            return;
                        }
                        e = c(i);
                    } catch (e) {
                        s(e);
                        return;
                    }
                    l({
                        inserted: i.length > 0,
                        written: e
                    });
                    if (r) {
                        return (m || (m = n("Promise"))).resolve();
                    }
                    return e;
                });
                function t() {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "group_notification_v2"));
        return u;
        function c(e) {
            if (e.length === 0) {
                return (m || (m = n("Promise"))).resolve();
            }
            if (r) {
                if (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd) {
                    e.forEach((e)=>{
                        o("WAWebBackendApi").frontendFireAndForget("updateMessageUI", {
                            chatId: e.id.remote,
                            msg: e
                        });
                    });
                }
                return o("WAWebGetMessageCache").getMessageCache().addMessages(e.map((e)=>({
                        msg: e
                    })), false);
            }
            return (m || (m = n("Promise"))).all(e.map((e)=>o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: e.from,
                    newMsg: e,
                    handleSingleMsgOrigin: "handleGroupNotificationV2"
                }))).then(()=>{});
        }
    }
    l.isGroupNotificationOptimizationEligible = p;
    l.handleGroupNotificationV2 = f;
}, 98);