__d("WAWebWorkerSafeBridgeApi", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATaskScheduler",
    "WAWebBackendApi",
    "WAWebCTWASuggestionInitFromStorage",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebEphemeralityResolver",
    "WAWebFetchBizAiLargeScreensGate",
    "WAWebFetchBizAiResponseSettingsV2Gate",
    "WAWebFetchBizAiWebSmartComposerAiListsGate",
    "WAWebFetchQuickPromotions",
    "WAWebFtsClient",
    "WAWebGetNewChatMessageCappingInfoJob",
    "WAWebGetOrQueryUsyncInfoContactAction",
    "WAWebHandleHistorySyncNotification",
    "WAWebJobLoadQuickPromotions",
    "WAWebKeyManagementHandleKeyRequestApi",
    "WAWebKeyManagementHandleKeyShareApi",
    "WAWebKeyManagementSendKeyShareApi",
    "WAWebMsgCollection",
    "WAWebNonMessageDataRequestHandler",
    "WAWebPaymentNotificationHandler",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebResendGroupMsgMainThreadOnly",
    "WAWebResendUserMsgMainThreadOnly",
    "WAWebRestoreChatsAndMessages",
    "WAWebRestoreGroupsAndContacts",
    "WAWebRestoreProfilePictures",
    "WAWebSyncContactJob",
    "WAWebSyncdOrphan",
    "WAWebTasksTaskType",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUpdateMsgBizPrivacyStatusAction",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = r("JSResourceForInteraction")("WAWebOptOutSyncJob").__setRef("WAWebWorkerSafeBridgeApi");
    const c = r("JSResourceForInteraction")("WAWebChannelsForwardCounter").__setRef("WAWebWorkerSafeBridgeApi");
    const d = {
        setProfilePicThumb: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ wid }) {
                return o("WAWebBackendApi").frontendSendAndReceive("setProfilePicThumb", {
                    wid
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getPrivacyMode: function({ id }) {
            return o("WAWebPrivacyMode_WORKER_INCOMPATIBLE").getPrivacyModeFromModel(id);
        },
        updateBizPrivacyStatus: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgIds, privacyMode }) {
                const i = r("compactMap")(msgIds, function(e) {
                    return o("WAWebMsgCollection").MsgCollection.get(e);
                });
                yield (s || (s = n("Promise"))).all(i.map((e)=>r("WAWebUpdateMsgBizPrivacyStatusAction")(e, privacyMode)));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getChatPrivacyInfoOnNewMsg: function({ chatId }) {
            const n = o("WAWebChatCollection").ChatCollection.get(chatId);
            return {
                verifiedLevel: n?.contact.verifiedLevel,
                privacyMode: o("WAWebPrivacyMode_WORKER_INCOMPATIBLE").getPrivacyModeFromModel(chatId)
            };
        },
        getContactData: function({ ids }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getContactData: for ",
                " ids"
            ])), ids.length);
            return new Map(ids.map((e)=>{
                const t = o("WAWebContactCollection").ContactCollection.get(e);
                const ephemeralDuration = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(t);
                return [
                    e.toJid(),
                    {
                        ephemeralDuration,
                        shouldBlockByCountry: function() {
                            if (t == null) {
                                return false;
                            }
                            return o("WAWebTosCountryGating").shouldBlockByCountry(t);
                        },
                        shouldBlockByTos: function() {
                            if (t == null) {
                                return false;
                            }
                            return o("WAWebTosGating").shouldBlockByTos(t);
                        }
                    }
                ];
            }));
        },
        getBizBotData: function({ chatIds }) {
            return new Map(chatIds.map((e)=>{
                const t = o("WAWebChatCollection").ChatCollection.get(e);
                return [
                    e.toJid(),
                    {
                        bizBotSystemMsgType: t?.bizBotSystemMsgType
                    }
                ];
            }));
        },
        handleHistorySyncNotification: function({ externalId, from, historySyncMetaData }) {
            return o("WAWebHandleHistorySyncNotification").handleHistorySyncNotification(historySyncMetaData, from, externalId);
        },
        handleAppStateSyncKeyShare: function({ from, keyShare }) {
            return o("WAWebKeyManagementHandleKeyShareApi").handleAppStateSyncKeyShare(keyShare, from);
        },
        sendAppStateSyncKeyShare: function({ keyShare }) {
            return o("WAWebKeyManagementSendKeyShareApi").sendAppStateSyncKeyShare(keyShare);
        },
        restoreChatsAndMessages: function() {
            return o("WAWebRestoreChatsAndMessages").restoreChatsAndMessages();
        },
        restoreGroupsAndContacts: function() {
            return o("WAWebRestoreGroupsAndContacts").restoreGroupsAndContacts();
        },
        restoreProfilePictures: function() {
            return o("WAWebRestoreProfilePictures").restoreProfilePictures();
        },
        processAllOrphanPaymentNotifications: function() {
            return o("WAWebPaymentNotificationHandler").processAllOrphanPaymentNotifications();
        },
        handleAppStateSyncKeyRequest: function({ from, keyRequest }) {
            return o("WAWebKeyManagementHandleKeyRequestApi").handleAppStateSyncKeyRequest(keyRequest, from);
        },
        handlePeerDataOperationRequestResponse: function({ response, stanzaId }) {
            return o("WAWebNonMessageDataRequestHandler").handlePeerDataOperationRequestResponse(stanzaId, response);
        },
        handlePeerDataOperationRequest: function({ request, stanzaId }) {
            return o("WAWebNonMessageDataRequestHandler").handlePeerDataOperationRequest(stanzaId, request);
        },
        getFtsClientInstance: function() {
            return o("WAWebFtsClient").ftsClient;
        },
        getOrQueryUsyncInfo: function(t) {
            return o("WAWebGetOrQueryUsyncInfoContactAction").getOrQueryUsyncInfo(t);
        },
        processOrphanPaymentNotifications: function({ msgs }) {
            return o("WAWebPaymentNotificationHandler").processOrphanPaymentNotifications(msgs);
        },
        processLastMsgs: function({ chatId, chatMsgsCollection, meta, msgObjs, preserveOrder, processMessagesOrigin }) {
            const c = o("WAWebChatCollection").ChatCollection.get(chatId);
            if (c && c.msgs.length === 0 && !c.pendingInitialLoading) {
                return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(chatId, msgObjs, meta, processMessagesOrigin, chatMsgsCollection, preserveOrder);
            }
            return (s || (s = n("Promise"))).resolve([]);
        },
        loadQuickPromotions: function({ trigger }) {
            return o("WAWebJobLoadQuickPromotions").loadQuickPromotions(trigger);
        },
        fetchQuickPromotionsNow: function() {
            o("WAWebFetchQuickPromotions").fetchQuickPromotions().then(()=>{
                o("WATaskScheduler").rescheduleNow(o("WAWebTasksTaskType").TaskType.FETCH_QUICK_PROMOTIONS);
            });
        },
        fetchBizAiLargeScreensGate: function({ trigger }) {
            return o("WAWebFetchBizAiLargeScreensGate").fetchBizAiLargeScreensGate(trigger);
        },
        fetchBizAiWebSmartComposerAiListsGate: function({ trigger }) {
            return o("WAWebFetchBizAiWebSmartComposerAiListsGate").fetchBizAiWebSmartComposerAiListsGate(trigger);
        },
        fetchBizAiResponseSettingsV2Gate: function({ trigger }) {
            return o("WAWebFetchBizAiResponseSettingsV2Gate").fetchBizAiResponseSettingsV2Gate(trigger);
        },
        restoreCTWASuggestions: function() {
            return o("WAWebCTWASuggestionInitFromStorage").restoreCTWASuggestions();
        },
        restoreNewMessageCappingData: function() {
            return o("WAWebGetNewChatMessageCappingInfoJob").fetchOrUpdateCapStatus();
        },
        resendUserMsg: function({ ackTime, excludeList, msgId, msgRecordType, msgType }) {
            return o("WAWebResendUserMsgMainThreadOnly").resendUserMsgMainThreadOnly({
                ackTime,
                excludeList,
                msgId,
                msgRecordType,
                msgType
            });
        },
        resendGroupMsg: function({ ackTime, groupId, isDirect, msgId, msgRecordType, msgType, oldList, phash, serverAddressingMode }) {
            return o("WAWebResendGroupMsgMainThreadOnly").resendGroupMsgMainThreadOnly({
                ackTime,
                groupId,
                isDirect,
                msgId,
                msgRecordType,
                msgType,
                oldList,
                phash,
                serverAddressingMode
            });
        },
        updateOptOutList: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield u.load();
                const e_updateOptOutList = e.updateOptOutList;
                return e_updateOptOutList();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateOptOutListCollection: function({ wids }) {
            o("WAWebBackendApi").frontendFireAndForget("updateOptOutListCollection", {
                wids
            });
        },
        updateOptOutListModelInCollection: function(t) {
            o("WAWebBackendApi").frontendFireAndForget("updateOptOutListModelInCollection", t);
        },
        syncContactListJob: function({ contactIds, mode, shouldSyncDevice }) {
            return o("WAWebSyncContactJob").syncContactListJob(contactIds, shouldSyncDevice, mode);
        },
        checkOrphanFavoriteStickers: function() {
            return o("WAWebSyncdOrphan").checkOrphanFavoriteStickers();
        },
        incrementForwardCounterAPI: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ newsletterId, retriesRemaining, serverId }) {
                const o = yield c.load();
                const o_incrementForwardCounter = o.incrementForwardCounter;
                return o_incrementForwardCounter(newsletterId, retriesRemaining, serverId);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.WorkerSafeBridgeApi = d;
}, 98);