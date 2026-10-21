__d("WAWebHandlePrivacyModeChange", [
    "WALogger",
    "WAWebApiVerifiedBusinessName",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBusinessProfileTypes",
    "WAWebChatViewMode.flow",
    "WAWebCheckChatExistsOrCreate",
    "WAWebCoexV2RepresentedIdentityFromMessage",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebMessageDestinationChat",
    "WAWebPrivacyModeSystemMsg",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ bizInfo: r, chatWid: a, msgInfo: i, msgMeta: l, msgs: s }) {
            const u = s[0];
            const d = o("WAWebMessageDestinationChat").determineDestinationChatForIncomingMessage({
                chat: a,
                msg: u,
                msgInfo: i
            });
            const m = d.chatId;
            const p = o("WAWebCoexV2RepresentedIdentityFromMessage").maybeResolveCoexV2RepresentedIdentityFromMessage(i, l);
            const _ = p == null || p.representedIdentity?.identitySource === "sender";
            const f = yield c(m);
            const g = _ ? o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(r.privacyMode, f.privacyMode) : null;
            const h = o("WAWebBizBroadcastProHiddenChatClassifier").isBizBroadcastProMarketingOnlyBatch(s, m) && o("WAWebBizBroadcastProHiddenChatClassifier").isBizBroadcastProHiddenChatsEnabled();
            const y = yield o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
                destinationChat: d,
                msgMeta: l,
                options: {
                    firstIncomingMsg: u,
                    nextPrivacyMode: g
                },
                initialProps: h ? {
                    chatViewMode: o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF
                } : void 0,
                chatOriginType: "createChatOnNewMsg"
            });
            const C = _ && (y !== true || f.verifiedLevel !== o("WAWebBusinessProfileTypes").convertLevel(r.verifiedLevel));
            try {
                if (y && g != null) {
                    yield o("WAWebHandlePrivacyModeUpdateMsgAction").handlePrivacyModeTransition(m, g, {
                        shouldRunMATonWid: false
                    });
                }
                return {
                    shouldQueryContactInfo: C,
                    latestPrivacyMode: g
                };
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePrivacyModeChange for ",
                    ", failed with error: ",
                    ""
                ])), m.toLogString(), t).tags("messaging", "non-sad").sendLogs("handlePrivacyModeChange failed", {
                    sampling: 0.01
                });
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("getChatPrivacyInfoOnNewMsg", {
                    chatId: e
                });
            }
            const t = yield o("WAWebApiVerifiedBusinessName").getVerifiedBusinessNameRecordLidAware(e);
            return {
                privacyMode: t?.privacyMode != null ? o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(t.privacyMode) : null,
                verifiedLevel: o("WAWebBusinessProfileTypes").convertLevel(t?.level)
            };
        });
        return d.apply(this, arguments);
    }
    l.handlePrivacyModeChangeAndCreateChat = s;
}, 98);