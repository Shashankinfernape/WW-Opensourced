__d("WAWebEphemeralSyncResponse", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackoff",
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebCommonMsgUtils",
    "WAWebContactCollection",
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBEphemeralMessage",
    "WAWebDBUpdateChatTable",
    "WAWebDBUpdateMessageTable",
    "WAWebEphemeralGenerateSystemMessage",
    "WAWebEphemeralIsDurationAllowed",
    "WAWebEphemeralOutOfSyncInfoWamEvent",
    "WAWebEphemeralSyncResponseWAM",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebMsgCollection",
    "WAWebMsgEphemerality",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebUpdateEphemeralSettingChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumEsrFailureReasonType",
    "asyncToGeneratorRuntime",
    "err",
    "gkx"
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
    function T() {
        return o("WAWebABProps").getABPropConfigValue("ephemeral_sync_response");
    }
    function D() {
        o("WAWebABProps").getABPropConfigValue("ephemeral_sync_response");
        o("WAWebABProps").getABPropConfigValue("dm_reliability_logging");
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] setting ephemeralOutOfSync on msg"
            ])));
            const n = {
                ephemeralOutOfSync: true
            };
            if (T()) {
                yield o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, n);
            }
            t.ephemeralOutOfSync = true;
            const r = o("WAWebMsgCollection").MsgCollection.get(t.id);
            if (r) {
                r.set(n);
            }
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebChatCollection").ChatCollection.get(e.id.remote);
            if (!t) {
                throw r("err")("[DMResolve] chat model not found for ESR message");
            }
            if (o("WAWebChatGetters").getIsGroup(t)) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] ESR not supported for groups ",
                    ""
                ])), t.id.toLogString()).sendLogs("handle-ephemeral-sync-response");
                return;
            }
            D();
            if (!T()) {
                o("WAWebEphemeralSyncResponseWAM").sendEphemeralSyncResponseReceiveWamEvent({
                    chat: t,
                    failureReason: o("WAWebWamEnumEsrFailureReasonType").ESR_FAILURE_REASON_TYPE.ESR_ABPROP_OFF
                });
                return;
            }
            if (t.contact.isEnterprise) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] ESR skip: enterprise contact ",
                    ""
                ])), t.id.toLogString());
                return;
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] processing EPHEMERAL_SYNC_RESPONSE"
            ])));
            const n = {
                id: e.id,
                type: e.type,
                kind: e.kind,
                ephemeralDuration: e.ephemeralDuration,
                ephemeralSettingTimestamp: e.ephemeralSettingTimestamp,
                disappearingModeInitiator: e.disappearingModeInitiator,
                disappearingModeTrigger: e.disappearingModeTrigger,
                disappearingModeInitiatedByMe: e.disappearingModeInitiatedByMe
            };
            const incomingESRSettings = o("WAWebMsgEphemerality").getMsgEphemeralitySettings(n);
            if (incomingESRSettings != null) {
                if (!o("WAWebEphemeralIsDurationAllowed").isEphemeralDurationAllowed(incomingESRSettings.duration)) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[DMResolve] ESR invalid duration ",
                        "s for ",
                        ""
                    ])), incomingESRSettings.duration, t.id.toLogString());
                    o("WAWebEphemeralSyncResponseWAM").sendEphemeralSyncResponseReceiveWamEvent({
                        chat: t,
                        failureReason: o("WAWebWamEnumEsrFailureReasonType").ESR_FAILURE_REASON_TYPE.INVALID_EPHEMERAL_DURATION
                    });
                    return;
                }
                const i = o("WAWebChatEphemerality").getChatEphemeralityFields(t);
                if (o("WAWebEphemeralityResolver").compareEphemeralityFields(i, incomingESRSettings)) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[DMResolve] ESR received, settings already in sync"
                    ])));
                    return;
                }
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] Updating chat due to EPHEMERAL_SYNC_RESPONSE"
                ])));
                t.ephemeralDuration = incomingESRSettings.duration;
                t.ephemeralSettingTimestamp = o("WAWebEphemeralityResolver").resolveSettingTimestamp(incomingESRSettings.settingTimestamp);
                const l = o("WAWebEphemeralityResolver").resolveDisappearingModeTrigger(incomingESRSettings.disappearingModeTrigger);
                const _ = o("WAWebEphemeralityResolver").resolveDisappearingModeInitiator(incomingESRSettings.initiator);
                t.disappearingModeInitiator = _;
                t.disappearingModeTrigger = l;
                t.disappearingModeInitiatedByMe = o("WAWebEphemeralityResolver").resolveDisappearingModeInitiatedByMe(incomingESRSettings.initiatedByMe, incomingESRSettings.initiator);
                yield o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
                    ephemeralDuration: t.ephemeralDuration,
                    ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
                    disappearingModeInitiator: _,
                    disappearingModeTrigger: l,
                    disappearingModeInitiatedByMe: t.disappearingModeInitiatedByMe
                });
                o("WAWebDBChatEphemeralExemptionData").updateEphemeralDurationCache(t.id, t.ephemeralDuration);
                const f = o("WAWebEphemeralityResolver").resolveEphermalityDuration(i?.duration) !== o("WAWebEphemeralityResolver").resolveEphermalityDuration(incomingESRSettings?.duration);
                if (f) {
                    yield o("WAWebEphemeralGenerateSystemMessage").generateEphemeralNotificationTemplateSystemMessage(t, incomingESRSettings.duration, null);
                }
                o("WAWebEphemeralSyncResponseWAM").sendEphemeralSyncResponseReceiveWamEvent({
                    chat: t,
                    incomingESRSettings,
                    localChatSettings: i
                });
            }
        });
        return N.apply(this, arguments);
    }
    const M = new (o("WAWebBackoff")).BackoffCache([
        1000 * 60 * 3,
        1000 * 60 * 15,
        Infinity
    ], {
        resetInterval: o("WATimeUtils").DAY_SECONDS
    });
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ changes, incomingMsgSettings, localChatSettings, to }) {
            D();
            if (!T() || !to.isUser() || to.isPSA() || to.isBot()) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] skip sending ESR: disabled or unsupported chat"
                ])));
                return;
            }
            if (r("gkx")("26256")) {
                window.esrCount = (window.esrCount ?? 0) + 1;
            }
            const u = to.toString();
            if (M.test(u)) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] Not sending ESR to ",
                    " due to back off limit"
                ])), to);
                const attempts = M.get(u)?.attempts;
                if (attempts != null) {
                    o("WAWebEphemeralSyncResponseWAM").sendEphemeralSyncResponseSendErrorWamEvent({
                        to,
                        error: o("WAWebWamEnumEsrFailureReasonType").ESR_FAILURE_REASON_TYPE.ATTEMPTS_EXHAUSTED,
                        attempts
                    });
                }
                return;
            }
            const { duration, initiator, settingTimestamp } = changes;
            const y = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const C = new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: to,
                id: yield r("WAWebMsgKey").newId(),
                participant: undefined
            });
            const b = {
                id: C,
                from: y,
                to,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "ephemeral_sync_response",
                ephemeralDuration: duration,
                ephemeralSettingTimestamp: settingTimestamp,
                disappearingModeInitiator: initiator
            };
            const v = new (o("WAWebMsgModel")).Msg(b);
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] Sending out EPHEMERAL_SYNC_RESPONSE"
            ])));
            o("WAWebEphemeralSyncResponseWAM").sendEphemeralSyncResponseSendWamEvent({
                to,
                changes,
                incomingMsgSettings,
                localChatSettings,
                attempts: M.get(u)?.attempts
            });
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", function() {
                return o("WAWebSendMsgRecordAction").sendMsgRecord(v);
            }, {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
            }).waitUntilCompleted();
        });
        return A.apply(this, arguments);
    }
    function F(e, t) {
        return !!(o("WAWebChatGetters").getIsUser(t) && !t.contact.isEnterprise && !e.id.fromMe && o("WAWebMsgEphemerality").messageSupportsEphemerality(e.type));
    }
    function O(e, t) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "logEphemeralOutOfSync"
            ])));
            const threadEphemeralityDuration = o("WAWebChatEphemerality").getEphemeralSetting(t) ?? 0;
            const a = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(o("WAWebContactCollection").ContactCollection.getMeContact());
            const i = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(t.contact);
            new (o("WAWebEphemeralOutOfSyncInfoWamEvent")).EphemeralOutOfSyncInfoWamEvent({
                incomingMessageEphemeralityDuration: e ?? 0,
                isAGroup: o("WAWebChatGetters").getIsGroup(t),
                threadEphemeralityDuration,
                otherDefaultModeDuration: i ?? 0,
                userDefaultModeDuration: a ?? 0,
                threadId: yield o("WAWebChatThreadLogging").getChatThreadID(t.id.toJid()),
                isNewThreadForUser: t.msgs.length === 0
            }).commit();
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype === "ephemeral_setting";
            if (!F(e, t) && !n) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] dropping msg from ephemeral sync"
                ])));
                return;
            }
            const incomingMsgSettings = o("WAWebMsgEphemerality").getMsgEphemeralitySettings(e);
            const a = o("WAWebChatEphemerality").getChatEphemeralityFields(t);
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] resolving ephemerality with chat DM settings"
            ])));
            const i = o("WAWebEphemeralityResolver").resolveExistingChatDMSettings(incomingMsgSettings, a);
            if (o("WAWebEphemeralityUtils").isEphemeralityDisabledForMessagingWithContact(t.contact)) {
                return U({
                    chat: t,
                    localChatSettings: a,
                    incomingMsgSettings,
                    msg: e
                });
            }
            const l = o("WAWebEphemeralityResolver").compareEphemeralityFields(a, i);
            const s = o("WAWebEphemeralityResolver").compareEphemeralityFields(incomingMsgSettings, i);
            if (i == null || l && s) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] neither party is out-of-sync"
                ])));
                M.remove(t.id.toString());
            } else {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] ESR resolution details: ",
                    ""
                ])), JSON.stringify({
                    msgId: e.id.toString(),
                    resolution: i,
                    incomingMsgSettings,
                    localChatSettings: a
                }));
                if (!l) {
                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[DMResolve] local out-of-sync, updating chat DM settings"
                    ])));
                    yield o("WAWebUpdateEphemeralSettingChatAction").updateChatEphemeralSettings(t, {
                        ephemeralSettingTimestamp: i.settingTimestamp,
                        ephemeralDuration: i.duration,
                        disappearingModeInitiator: i.initiator,
                        disappearingModeTrigger: i.disappearingModeTrigger,
                        disappearingModeInitiatedByMe: i.initiatedByMe,
                        afterReadDuration: i.afterReadDuration
                    });
                    if (!n && i.duration !== (a?.duration ?? 0)) {
                        o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[DMResolve] rendering DM sysmsg: duration changed"
                        ])));
                        yield o("WAWebEphemeralGenerateSystemMessage").generateEphemeralNotificationTemplateSystemMessage(t, i.duration, null);
                    }
                }
                if (!s && (o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] other party out-of-sync, sending ESR"
                ]))), !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype))) {
                    const d = incomingMsgSettings?.duration ?? 0;
                    if (i.duration !== d) {
                        yield x(e);
                        O(incomingMsgSettings?.duration, t);
                    }
                    w({
                        changes: i,
                        incomingMsgSettings,
                        localChatSettings: a,
                        to: e.from
                    });
                }
            }
        });
        return q.apply(this, arguments);
    }
    function U(e) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, incomingMsgSettings, localChatSettings, msg }) {
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] Ephemerality disabled and not synced"
            ])));
            if (incomingMsgSettings != null && incomingMsgSettings.duration > 0) {
                yield o("WAWebDBEphemeralMessage").convertMessageNotEphemeralForContactWithEphmeralityDisabled({
                    messageId: msg.id.toString(),
                    contactId: chat.contact.id.toString()
                });
                msg.ephemeralDuration = 0;
                msg.ephemeralStartTimestamp = undefined;
                msg.ephemeralSettingTimestamp = undefined;
                msg.ephemeralOutOfSync = undefined;
                msg.ephemeralSettingUser = undefined;
            }
            if (localChatSettings == null || localChatSettings.duration === 0) {
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] disabled ephemerality: local chat not eph"
                ])));
                return;
            }
            if (incomingMsgSettings == null || incomingMsgSettings.duration === 0) {
                o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] disabled ephemerality: incoming msg not eph"
                ])));
                return;
            }
            yield o("WAWebUpdateEphemeralSettingChatAction").updateChatEphemeralSettings(chat, {
                ephemeralSettingTimestamp: o("WAWebEphemeralityResolver").resolveSettingTimestamp(incomingMsgSettings.settingTimestamp),
                ephemeralDuration: 0,
                disappearingModeInitiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByOther,
                disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown,
                disappearingModeInitiatedByMe: false
            });
            yield o("WAWebEphemeralGenerateSystemMessage").generateEphemeralNotificationTemplateSystemMessage(chat, 0, chat.contact.id);
        });
        return V.apply(this, arguments);
    }
    const H = w;
    l.processEphemeralSyncResponse = P;
    l.syncEphemeralSetting = W;
    l._sendEphemeralSyncResponse = H;
}, 98);