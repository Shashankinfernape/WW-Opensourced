__d("WAWebLogReceivedMessages", [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAfterReadUtils",
    "WAWebApiBulkGetChats",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebBizAiPaymentRequestWamLogger",
    "WAWebBoolFunc",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingUtils",
    "WAWebCoexV2WamClassification",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMsgUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebEphemeralityResolver",
    "WAWebExperienceIdWamFields",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGatedMessageReceivedWamEvent",
    "WAWebInAppSignupInfoStore",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMessageReceiveWamEvent",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetailsReceivedWamLogger",
    "WAWebPaymentInfoReceivedWamLogger",
    "WAWebPaymentLinkWamLogger",
    "WAWebPaymentRequestWamLogger",
    "WAWebQbmIncomingMessageLogger",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSessionScopeWamUtils",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupQPLLogger",
    "WAWebStickerPremiumStatus",
    "WAWebUprReceivedWamLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumChatGatedReason",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumRevokeType",
    "WAWebWamGroupMetadataMetricUtils",
    "WAWebWamGroupMetricCache",
    "WAWebWamMessageUtils",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = "💚";
    const f = 100;
    const g = 1000;
    const h = 100;
    const y = [];
    const C = new (o("WAShiftTimer")).ShiftTimer(X);
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield (p || (p = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (o("WAWebPaymentLinkWamLogger").shouldLogReceiverEvent(e)) {
                        yield o("WAWebPaymentLinkWamLogger").genLogReceiveEvent({
                            interaction_component: null,
                            msg: e
                        }, e.matchedText).catch((e)=>{
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "error logging payment link message receive: ",
                                ""
                            ])), String(e));
                        });
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ clientReceivedTsMillis: i, isPq: l, localAddressingMode: s, msgProcessStartTsMillis: u, msgs: c, offline: d, oppositeHasUsername: m, serverAddressingMode: _, sessionScope: f, tsMillis: g }, t, r) {
            const { chatData: h, contactData: y, groupMetadataById: C, meHasUsername: b, meHasUsernamePin: v } = r;
            const S = y.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid())?.ephemeralDuration;
            yield (p || (p = n("Promise"))).all(c.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                    const r = e.from;
                    if (r != null) {
                        let a = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                        if (r.isLid()) {
                            a = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                        }
                        const c = h[n];
                        if (c != null && c.lidOriginType) {
                            a = c.lidOriginType === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA : c.lidOriginType === o("WAWebUsernameTypes").LidOriginType.GENERAL ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS : (()=>{
                                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c.lidOriginType}`);
                            })();
                        }
                        const p = yield o("WAWebChatThreadLoggingUtils").getOppositeVisibleIdentification(r);
                        const R = r.isGroup() ? e.from.isLid() : o("WAWebWamMsgUtils").msgIsLid(e, r);
                        const L = new (o("WAWebMessageReceiveWamEvent")).MessageReceiveWamEvent({
                            messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
                            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                            messageIsInternational: o("WAWebMsgGetters").getIsInternational(e),
                            messageIsOffline: d != null,
                            isPq: l,
                            isViewOnce: !!e.isViewOnce,
                            isForwardedForward: o("WAWebMsgGetters").getNumTimesForwarded(e) > 1,
                            isAReply: o("WAWebMsgGetters").getIsReply(e),
                            editType: o("WAWebMsgGetters").getWamEditType(e),
                            botType: o("WAWebWamMsgUtils").getWamBotType({
                                chatId: r,
                                bizBotType: e.bizBotType
                            }),
                            isAComment: o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.COMMENT,
                            hasUsername: b,
                            hasUsernamePin: v,
                            chatOrigins: a,
                            oppositeVisibleIdentification: p ?? void 0,
                            isLid: R,
                            messageReceiveT0: 0,
                            messageReceiveT1: 0,
                            messageReceiveT2: 0,
                            sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(f)
                        });
                        const E = o("WAWebWamMessageUtils").getVcardMsgWamData(e, "receive");
                        if (E) {
                            const { lidOnlyVcardCount: k, pnAndLidVcardCount: I, pnOnlyVcardCount: T } = E;
                            L.receivedPhoneNumberContactSize = T;
                            L.receivedUsernameContactSize = k;
                            L.receivedPhoneNumberWithUsernameContactSize = I;
                        }
                        if (d != null) {
                            L.offlineCount = d;
                        }
                        const D = o("WAWebExperienceIdWamFields").getExperienceIdsWamValue(o("WAWebExperienceIdWamFields").getExperienceIds(e));
                        if (D != null) {
                            L.experienceIds = D;
                        }
                        if (!r.isGroup() && !r.isStatus()) {
                            const $ = y.get(r.toJid())?.ephemeralDuration;
                            if ($ != null) {
                                L.senderDefaultDisappearingDuration = $;
                            }
                            if (S != null) {
                                L.receiverDefaultDisappearingDuration = S;
                            }
                            L.isLid = r.isLid();
                            if (m != null && o("WAWebUsernameGatingUtils").usernameAdoptionAndEngagementMonitoringEnabled()) {
                                L.oppositeHasUsername = m;
                            }
                        }
                        if (o("WAWebMsgGetters").getIsRevoke(e)) {
                            L.revokeType = e.subtype === "admin_revoke" || e.subtype === "admin" ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER;
                        }
                        if (i != null) {
                            L.messageReceiveT0 = i - g;
                            L.messageReceiveT1 = t - i;
                            if (u != null) {
                                L.messageQueueTime = u - i;
                            }
                        }
                        if (e.ephemeralDuration != null && e.ephemeralDuration > 0) {
                            L.ephemeralityDuration = e.ephemeralDuration;
                        }
                        const N = e.afterReadDuration;
                        if (N != null && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
                            L.isAfterRead = N > 0;
                            L.afterReadDuration = N;
                        }
                        const w = o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
                        if (w != null) {
                            L.disappearingChatInitiator = w;
                        }
                        const A = o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
                        if (A != null) {
                            L.ephemeralityTriggerAction = A;
                        }
                        const F = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(e);
                        if (F != null) {
                            L.ephemeralityInitiator = F;
                        }
                        const O = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
                        if (O != null) {
                            L.agentEngagementType = O;
                        }
                        const B = o("WAWebCoexV2WamClassification").getRecvWamE2eClassification(e.senderWithDevice, e.senderWithDevice, e.metaFrom);
                        const { e2eSenderType: W, encryptionType: q } = B;
                        if (W != null) {
                            L.e2eSenderType = W;
                        }
                        if (q != null) {
                            L.encryptionType = q;
                        }
                        const U = yield P(r, C);
                        if (U != null) {
                            L.typeOfGroup = U;
                        }
                        if (_ != null) {
                            L.serverAddressingMode = o("WAWebWamAddressingModeUtils").getWamAddressingModeFromString(_);
                        }
                        if (s != null) {
                            L.localAddressingMode = o("WAWebWamAddressingModeUtils").getWamAddressingModeFromString(s);
                        }
                        if (o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.STICKER) {
                            L.stickerIsPremium = e.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
                        }
                        if (r != null && r.isGroup()) {
                            const V = yield M(r, C);
                            const H = o("WAWebMsgGetters").getIsReaction(e);
                            if (V != null && H != null) {
                                L.isLid = V && H;
                            }
                            const G = yield o("WAWebWamGroupMetricCache").getGroupMetrics(r);
                            if (G?.participantCount != null) {
                                L.participantCount = G.participantCount;
                            }
                            if (G?.deviceCount != null) {
                                L.deviceCount = G.deviceCount;
                            }
                            if (G?.deviceSizeBucket != null) {
                                L.deviceSizeBucket = G.deviceSizeBucket;
                            }
                        }
                        L.commit();
                    }
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "getContactData: for ",
                " msgs"
            ])), e.length);
            const t = new Set(e.filter((e)=>e.id.remote.isUser()).map((e)=>e.id.remote.toJid()));
            t.add(o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid());
            const n = Array.from(t);
            let a;
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                a = yield r("WAWebLidAwareContactsDB").bulkGet(n);
                return new Map(a.map((e, t)=>[
                        n[t],
                        {
                            ephemeralDuration: o("WAWebEphemeralityResolver").getEphemeralDurationForUser(e),
                            shouldBlockByCountry: o("WAWebBoolFunc").returnFalse,
                            shouldBlockByTos: o("WAWebBoolFunc").returnFalse
                        }
                    ]));
            }
            return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("getContactData", {
                ids: n.map(o("WAWebWidFactory").createWid)
            });
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebApiBulkGetChats").bulkGetChats(e.map((e)=>e.from));
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            for (const a of e){
                if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(a)) {
                    const i = o("WAWebMsgGetters").getSender(a);
                    if (i != null) {
                        t.set(i.toJid(), i);
                    }
                }
            }
            const l = yield (p || (p = n("Promise"))).all(Array.from(t, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                    const a = yield o("WAWebApiVerifiedBusinessName").getVerifiedBusinessNameRecordLidAware(n).catch((e)=>{
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAM:PAYMENT_REQUEST] sender business lookup failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("payment-request-sender-business-lookup-failed");
                        return null;
                    });
                    if (a == null) {
                        return null;
                    }
                    const i = {
                        isApi: a.isApi,
                        isSmb: a.isSmb,
                        storedPrivacyMode: a.privacyMode != null ? o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(a.privacyMode) : null
                    };
                    return [
                        t,
                        i
                    ];
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const s = new Map(l.filter(Boolean));
            const u = [];
            const c = [];
            for (const d of e){
                if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(d)) {
                    const f = o("WAWebMsgGetters").getSender(d)?.toJid();
                    const g = f != null ? s.get(f) : null;
                    if (o("WAWebBizAiPaymentRequestWamLogger").isBizAiPixPaymentRequest(d, g)) {
                        u.push(d);
                    } else {
                        c.push(d);
                    }
                }
            }
            yield p.all([
                o("WAWebBizAiPaymentRequestWamLogger").logBizAiPaymentRequestReceivedWAMEvent(u),
                o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(c, s)
            ]);
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            e.forEach(({ from: n })=>{
                if (n != null && n.isGroup()) {
                    t.set(n.toString(), n);
                }
            });
            if (t.size === 0 || !r("gkx")("17426")) {
                return null;
            }
            const n = Array.from(t.values());
            const a = yield o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(n);
            return new Map(n.map((e, t)=>[
                    e.toString(),
                    a[t]
                ]));
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t == null) {
                return o("WAWebWamGroupMetadataMetricUtils").getGroupTypeFromChatWid(e);
            }
            const n = t.get(e.toString());
            if (n != null) {
                return o("WAWebWamGroupMetadataMetricUtils").getGroupTypeFromGroupMetadata(n);
            }
            return null;
        });
        return N.apply(this, arguments);
    }
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t == null) {
                return o("WAWebWamGroupMetadataMetricUtils").isCagFromChatWid(e);
            }
            const n = t.get(e.toString());
            if (n != null) {
                return o("WAWebWamGroupMetadataMetricUtils").isCagFromGroupMetadata(n);
            }
            return null;
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (p || (p = n("Promise"))).all([
                k(e),
                L(e),
                x(e),
                o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin()
            ]);
            const r = t[0];
            const a = t[1];
            const i = t[2];
            const l = t[3];
            const s = t[4];
            return {
                chatData: r,
                contactData: a,
                groupMetadataById: i,
                meHasUsername: l,
                meHasUsernamePin: s
            };
        });
        return F.apply(this, arguments);
    }
    function O(e, t) {
        for (const n of e){
            const r = t.get(n.id.remote.toJid());
            if (r && !o("WAWebMsgGetters").getIsSentByMe(n)) {
                if (r.shouldBlockByCountry()) {
                    new (o("WAWebGatedMessageReceivedWamEvent")).GatedMessageReceivedWamEvent({
                        chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.COUNTRY
                    }).commit();
                } else if (r.shouldBlockByTos()) {
                    new (o("WAWebGatedMessageReceivedWamEvent")).GatedMessageReceivedWamEvent({
                        chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.TOS3
                    }).commit();
                }
            }
        }
    }
    function B(e) {
        if (o("WAWebMsgGetters").getIsReaction(e)) {
            return o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
        }
        return o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)?.toString();
            if (n != null) {
                return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
            }
        });
        return q.apply(this, arguments);
    }
    function U(e) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.COMMENT) {
                return {
                    activityType: "commentsReceived",
                    ts: e.t ?? o("WATimeUtils").unixTimeMs(),
                    chatId: e.id.remote
                };
            }
            const r = B(e);
            if (r !== "missing-stanza-id") {
                let a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
                if (o("WAWebMsgGetters").getIsReply(e) && a == null) {
                    a = yield W(r);
                }
                if (a != null && o("WAWebMsgGetters").getIsGroupStatus(a)) {
                    const i = o("WAWebMsgGetters").getIsReply(e);
                    const l = o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === _;
                    if (i || l) {
                        const s = o("WAWebMsgGetters").getIsSentByMe(a);
                        return {
                            activityType: "groupStatusMsgReceive",
                            chatId: e.id.remote,
                            ts: e.t,
                            isGroupStatusReplyOthersToOwn: i && s,
                            isGroupStatusReplyOthersToOthers: i && !s,
                            isGroupStatusLikeOthersToOwn: l && s,
                            isGroupStatusLikeOthersToOthers: l && !s
                        };
                    }
                }
            }
            const u = H(e);
            return {
                activityType: e.id.fromMe ? "msgSend" : "msgReceive",
                ts: e.t,
                chatId: e.id.remote,
                isViewOnce: e.isViewOnce === true,
                isReaction: o("WAWebMsgGetters").getIsReaction(e),
                isForwarded: e.isForwarded === true,
                isCommerceMessage: o("WAWebChatThreadLoggingUtils").isCommerceMessage(e),
                isReply: o("WAWebMsgGetters").getIsReply(e),
                isEdit: o("WAWebMsgGetters").getIsEditProtocolMsg(e) || u && e.subtype === "message_edit",
                isExcludedModification: u,
                isBot: o("WAWebMsgGetters").getIsBotQuery(e) || o("WAWebMsgGetters").getIsMetaBotResponse(e),
                isEventCreation: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
                isEventResponse: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
                isAfterRead: o("WAWebAfterReadUtils").isAfterReadEnabled() ? (e.afterReadDuration ?? 0) > 0 : void 0
            };
        });
        return V.apply(this, arguments);
    }
    function H(e) {
        return !e.id.fromMe && (e.subtype === "message_edit" || o("WAWebMsgGetters").getIsRevoke(e) || o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) && o("WAWebABProps").getABPropConfigValue("thread_interactions_received_excludes_edits_web_enabled") === true;
    }
    function G(t) {
        const n = function() {
            if (i.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && i.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP && !i.id.fromMe) {
                const n = i.interactivePayload?.buttons?.[0]?.buttonParamsJson;
                if (n == null) {
                    o("WAWebSignupQPLLogger").confirmationMissingParams();
                    z(i);
                    return 0;
                }
                try {
                    const a = JSON.parse(n);
                    const l = a.signup_id;
                    if (l == null) {
                        o("WAWebSignupQPLLogger").confirmationParseFailure("missing field 'signup_id'");
                        z(i);
                        return 0;
                    }
                    o("WAWebSignupFlowLoggerLazy").logSignupOp({
                        operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_RECEIVED,
                        signupId: String(l),
                        businessWid: i.id.remote
                    });
                    o("WAWebSignupQPLLogger").confirmationSuccess(String(l));
                    o("WAWebInAppSignupInfoStore").stopPendingConfirmationTimer(String(l)).then((t)=>{
                        if (t === "write_failed") {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[signup:confirmation] timer stop failed signupId=",
                                ""
                            ])), String(l)).sendLogs("signup-stop-pending-confirmation-failed");
                        }
                    });
                } catch (e) {
                    o("WAWebSignupQPLLogger").confirmationParseFailure(e);
                    z(i);
                }
            }
        };
        let a;
        for (var i of t){
            a = n();
        }
    }
    function z(e) {
        o("WAWebSignupFlowLoggerLazy").logSignupOp({
            operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_PARSE_FAILURE,
            signupId: "",
            businessWid: e.id.remote
        });
    }
    function j(e) {
        (p || (p = n("Promise"))).all(e.filter(o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive).map(U)).then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function K(e) {
        e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach((e)=>{
            o("WAWebBackendApi").frontendFireAndForget("logOTPMessageReceivedActions", {
                msgData: e
            });
        });
    }
    function Q(e) {
        y.push({
            params: e,
            msgProcessEndTsMillis: o("WATimeUtils").unixTimeMs()
        });
        if (e.offline == null || !r("gkx")("21649") || y.length >= h) {
            C.forceRunNow();
        } else {
            C.debounceAndCap(f, g);
        }
    }
    function X() {
        const e = y.splice(0);
        const t = e.flatMap(({ params: t })=>t.msgs);
        A(t).then((r)=>(p || (p = n("Promise"))).all([].concat(Y(e, r), [
                O(t, r.contactData),
                j(t),
                K(t),
                b(t),
                o("WAWebGalaxyFlowWamLoggerUtils").logStructuredMessageReceivedWAMEvent(t),
                o("WAWebOrderDetailsReceivedWamLogger").logOrderDetailsReceivedWAMEvent(t),
                o("WAWebPaymentInfoReceivedWamLogger").logPaymentInfoReceivedWAMEvent(t),
                T(t),
                o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(t, r.chatData),
                G(t),
                o("WAWebUprReceivedWamLogger").logUprReceivedWAMEvent(t)
            ]))).catch((e)=>{
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "error logging received messages: ",
                ""
            ])), String(e));
        });
    }
    function Y(e, t) {
        let n = 0;
        return e.map(({ msgProcessEndTsMillis: r, params: o })=>{
            const a = t.chatData.slice(n, n + o.msgs.length);
            n += o.msgs.length;
            return S(o, r, babelHelpers.extends({}, t, {
                chatData: a
            }));
        });
    }
    function J({ chatWid: t, clientReceivedTsMillis: n, msgProcessStartTsMillis: r, offline: a, tsMillis: i }) {
        try {
            const l = new (o("WAWebMessageReceiveWamEvent")).MessageReceiveWamEvent({
                messageType: o("WAWebWamMsgUtils").getWamMessageTypeForScheduledMsg(t),
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.CONDITIONAL_REVEAL,
                messageIsOffline: a != null,
                messageReceiveT0: 0,
                messageReceiveT1: 0,
                messageReceiveT2: 0
            });
            if (a != null) {
                l.offlineCount = a;
            }
            if (n != null) {
                l.messageReceiveT0 = n - i;
                l.messageReceiveT1 = o("WATimeUtils").unixTimeMs() - n;
                if (r != null) {
                    l.messageQueueTime = r - n;
                }
            }
            l.commit();
        } catch (e) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "error logging conditional-reveal message receive: ",
                ""
            ])), String(e));
        }
    }
    l.logReceivedMessagesInWAM = Q;
    l.logConditionalRevealMessageReceive = J;
}, 98);