__d("WAWebMsgUtilsBridge", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebBackendApi",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingUtils",
    "WAWebDBMsgUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebEphemeralityResolver",
    "WAWebForwardSendWamEvent",
    "WAWebLidAwareContactsDB",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWamGroupMetadataMetricUtils",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let a = !!t.caption;
            if (t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
                a = t.isCaptionByUser;
            }
            const i = {
                messageType: o("WAWebWamMsgUtils").getWamMessageType(t),
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
                mediaCaptionPresent: a,
                fastForwardEnabled: true,
                messageIsFanout: true,
                isFrequentlyForwarded: !!o("WAWebMsgGetters").getIsFrequentlyForwarded(t),
                isForwardedForward: o("WAWebMsgGetters").getNumTimesForwarded(t) > 1
            };
            if (t.ephemeralDuration != null) {
                i.ephemeralityDuration = t.ephemeralDuration;
            }
            const l = o("WAWebMsgGetters").getWamDisappearingModeTrigger(t);
            if (l != null) {
                i.ephemeralityTriggerAction = l;
            }
            const u = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(t);
            if (u != null) {
                i.ephemeralityInitiator = u;
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "createMessageForwardMetric"
            ])));
            if (!o("WAWebMsgGetters").getIsGroupMsg(t)) {
                const c = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                const d = yield (s || (s = n("Promise"))).all([
                    c != null ? r("WAWebLidAwareContactsDB").get(c.toJid()) : null,
                    r("WAWebLidAwareContactsDB").get(t.to.toJid())
                ]);
                const m = d[0];
                const p = d[1];
                const _ = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(m);
                if (_ != null) {
                    i.senderDefaultDisappearingDuration = _;
                }
                const f = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(p);
                if (f != null) {
                    i.receiverDefaultDisappearingDuration = f;
                }
            }
            const g = o("WAWebMsgGetters").getWamDisappearingModeInitiator(t);
            if (g != null) {
                i.disappearingChatInitiator = g;
            }
            const h = yield o("WAWebWamGroupMetadataMetricUtils").getGroupTypeFromChatWid(t.to);
            if (h != null) {
                i.typeOfGroup = h;
            }
            return new (o("WAWebForwardSendWamEvent")).ForwardSendWamEvent(i);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.quotedMsg?.type !== o("WAWebMsgType").MSG_TYPE.PRODUCT || !o("WAWebMsgGetters").getIsSentByMe(e)) {
                return false;
            }
            return o("WAWebBackendApi").frontendSendAndReceive("isMessageSentToBusiness", {
                msgKey: e.id
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive(e)) {
                const n = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
                if (n !== "missing-stanza-id") {
                    const r = yield o("WAWebDBMsgUtils").getMsgByMsgKey(n);
                    if (r != null && o("WAWebMsgGetters").getIsGroupStatus(r)) {
                        const a = o("WAWebMsgGetters").getIsSentByMe(r);
                        const i = o("WAWebMsgGetters").getIsReply(e);
                        return o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                            {
                                activityType: "groupStatusMsgSend",
                                chatId: e.id.remote,
                                ts: o("WATimeUtils").unixTime(),
                                isGroupStatusReplyOwnToOwn: i && a,
                                isGroupStatusReplyOwnToOthers: i && !a
                            }
                        ]);
                    }
                }
                o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                    {
                        activityType: "msgSend",
                        chatId: e.id.remote,
                        ts: o("WATimeUtils").unixTime(),
                        isViewOnce: !!e.isViewOnce,
                        isReaction: o("WAWebMsgGetters").getIsReaction(e),
                        isForwarded: o("WAWebMsgGetters").getIsForwarded(e),
                        isCommerceMessage: o("WAWebChatThreadLoggingUtils").isCommerceMessage(e),
                        isPdpInquiry: yield d(e),
                        isReply: o("WAWebMsgGetters").getIsReply(e),
                        isEdit: o("WAWebMsgGetters").getIsEditProtocolMsg(e),
                        isBot: o("WAWebMsgGetters").getIsBotQuery(e),
                        isEventCreation: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
                        isEventResponse: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
                        isAfterRead: o("WAWebAfterReadUtils").isAfterReadEnabled() ? (e.afterReadDuration ?? 0) > 0 : undefined
                    }
                ]);
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        e.markMessageSendT();
        e.commit();
    }
    l.createMessageForwardMetric = u;
    l.logMessageSendForChatThreadLogging = p;
    l.logMessageMetric = f;
}, 98);