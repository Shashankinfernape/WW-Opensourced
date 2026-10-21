__d("WAWebMsgBridgeApi", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebAckMsgAction",
    "WAWebBizAgentAction",
    "WAWebChatLoadMessages",
    "WAWebEphemeralSyncResponse",
    "WAWebExternalBetaEvents",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyDisableCTACollection",
    "WAWebHandleDeferredMessages",
    "WAWebHistorySyncOnDemandAction",
    "WAWebKeepInChatMsgAction",
    "WAWebLinkDeviceAction",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebReactionsCollection",
    "WAWebUpdateEditedMessagesAction",
    "WAWebUpdateMessageUIAction",
    "WAWebUpdateMsgAcksAction",
    "WAWebUpdateMusicBlocklistAction",
    "WAWebUpdateReactionMessageUIAction",
    "WAWebUpdateReplyApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "msgKey"
    ];
    let u;
    const c = {
        processMultipleMessages: function({ chatId, chatMsgsCollection, meta, msgObjs, preserveOrder, processMessagesOrigin }) {
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(chatId, msgObjs, meta, processMessagesOrigin, chatMsgsCollection, preserveOrder);
        },
        addInitialBotTypingIndicatorToChat: function({ chatId, msgKey }) {
            return o("WAWebMsgCollection").MsgCollection.addInitialBotTypingIndicatorToChat(chatId, msgKey);
        },
        msgCollectionTrigger: function({ name }) {
            o("WAWebMsgCollection").MsgCollection.trigger(name);
        },
        processKeepInChatMessages: function({ allowNotification, keepInChatMessages }) {
            return o("WAWebKeepInChatMsgAction").processKeepInChatMessages(keepInChatMessages, allowNotification);
        },
        updateUnattributedMessages: function({ messageInfo, messages }) {
            return o("WAWebBizAgentAction").updateUnattributedMessages(messageInfo, messages);
        },
        processKeepInChatMessage: function({ allowNotification, keepInChatMessage }) {
            return o("WAWebKeepInChatMsgAction").processKeepInChatMessage(keepInChatMessage, {
                allowNotification
            });
        },
        updateEditedMessagesAction: function({ messageEdits }) {
            return o("WAWebUpdateEditedMessagesAction").updateEditedMessagesAction(messageEdits);
        },
        updateMessageUI: function({ chatId, isOffline, messageOverwriteOption, msg, preserveOrder }) {
            return o("WAWebUpdateMessageUIAction").updateUI({
                chatId,
                isOffline,
                messageOverwriteOption,
                msg,
                preserveOrder
            });
        },
        updateMsgModelAcks: function({ updates }) {
            updates.forEach((e)=>{
                const t = o("WAWebMsgCollection").MsgCollection.get(e.id);
                if (t != null) {
                    if (!(e.ack < t.ack && e.ack !== o("WAWebAck").ACK.FAILED)) {
                        t.ack = e.ack;
                    }
                }
            });
        },
        updateMsgExpiredTimestamps: function({ updates }) {
            updates.forEach((e)=>{
                const t = o("WAWebMsgCollection").MsgCollection.get(e.id);
                if (t != null) {
                    t.expiredTimestamp = e.expiredTimestamp;
                }
            });
        },
        updateReactionUI: function({ msg, reparsing }) {
            return o("WAWebUpdateReactionMessageUIAction").updateReactionUI(msg, reparsing);
        },
        updateReactionCollection: function({ allowNotifications, msgs, removeReactions }) {
            return o("WAWebUpdateReactionMessageUIAction").updateReactionCollection(msgs, removeReactions, {
                allowNotify: allowNotifications
            });
        },
        processOrphanReadReceipts: function({ msgIds }) {
            return o("WAWebAckMsgAction").processOrphanReadReceipts(msgIds);
        },
        updateMsgPeerAcks: function({ ack, msgKeys, t }) {
            return o("WAWebUpdateMsgAcksAction").updateMsgPeerAcks(msgKeys, ack, t);
        },
        updateMsgOtherAcks: function({ ack, msgKeys, t }) {
            return o("WAWebUpdateMsgAcksAction").updateMsgOtherAcks(msgKeys, ack, t);
        },
        handleDeferredMessages: function() {
            return r("WAWebHandleDeferredMessages")();
        },
        processEphemeralSyncResponse: function({ msg }) {
            return o("WAWebEphemeralSyncResponse").processEphemeralSyncResponse(msg);
        },
        refreshAltLinkingCode: function({ ref }) {
            return o("WAWebLinkDeviceAction").refreshAltLinkingCode(ref);
        },
        forceManualRefresh: function({ ref }) {
            return o("WAWebLinkDeviceAction").forceManualRefresh(ref);
        },
        errorAltLinking: function() {
            return o("WAWebLinkDeviceAction").errorAltLinking();
        },
        primaryHelloReceivedAltLinking: function() {
            return o("WAWebLinkDeviceAction").primaryHelloReceivedAltLinking();
        },
        changeOptInStatusForExternalWebBeta: function() {
            o("WAWebExternalBetaEvents").WAWebExternalBetaEvents.triggerBetaOptInStatusChanges();
        },
        successHistorySyncOd: function({ chatId }) {
            return o("WAWebHistorySyncOnDemandAction").successHistorySyncOd(chatId);
        },
        errorHistorySyncOd: function({ chatId }) {
            return o("WAWebHistorySyncOnDemandAction").errorHistorySyncOd(chatId);
        },
        hasMsgsInCollection: function({ msgKeys }) {
            return msgKeys.map((e)=>!!o("WAWebMsgCollection").MsgCollection.get(e));
        },
        deleteAssociatedBotCarouselMsgs: function({ msgKeys }) {
            msgKeys.forEach((e)=>{
                const t = o("WAWebMsgCollection").MsgCollection.get(e);
                if (t) {
                    t.delete();
                    o("WAWebMsgCollection").MsgCollection.remove(t);
                }
            });
        },
        removePlaceholder: function({ msg }) {
            return o("WAWebUpdateMessageUIAction").removePlaceholder(msg);
        },
        updateReplyCount: function({ replyCountMap }) {
            return o("WAWebUpdateReplyApi").updateReplyCount(replyCountMap);
        },
        updateMsgModelHostedBizEncStateMismatchFlagToTrue: function({ msgId }) {
            const n = o("WAWebMsgCollection").MsgCollection.get(msgId);
            if (n != null) {
                n.hostedBizEncStateMismatch = true;
            }
        },
        updateViewModeForMsgs: function({ msgIdsViewModeMap }) {
            msgIdsViewModeMap.forEach((viewMode, t)=>{
                const n = o("WAWebMsgCollection").MsgCollection.get(t);
                if (n != null) {
                    n.set({
                        viewMode
                    });
                }
            });
        },
        detachAssociatedMsgsForever: function({ msgIds }) {
            msgIds.forEach((e)=>{
                const t = o("WAWebMsgCollection").MsgCollection.get(e);
                if (t != null) {
                    t.detachAssociatedMsg();
                }
            });
        },
        addGalaxyDisableCTAMessageId: function({ messageId }) {
            o("WAWebGalaxyDisableCTACollection").GalaxyDisableCTACollection.addMessageId(messageId);
        },
        addGalaxyDisableCTAByAgmId: function({ agmId, chatId }) {
            o("WAWebGalaxyDisableCTACollection").GalaxyDisableCTACollection.addByAgmId(agmId, chatId);
        },
        hydrateReactionsForMessages: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ messageIds }) {
                yield (u || (u = n("Promise"))).all(messageIds.map((e)=>o("WAWebReactionsCollection").ReactionsCollection.find(e)));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateCrosspostingInfo: function({ crosspostingInfo, statusMessageId }) {
            const a = o("WAWebMsgCollection").MsgCollection.get(statusMessageId);
            if (a != null) {
                const i = new Map(a.crosspostingInfo ?? []);
                for (const [s, u] of crosspostingInfo){
                    i.set(s, u);
                }
                a.crosspostingInfo = i;
            }
        },
        updateMusicBlocklist: function({ countryBlocklist, msgKey }) {
            return o("WAWebUpdateMusicBlocklistAction").updateMusicBlocklist(countryBlocklist, msgKey);
        },
        updateMusicMsgConsumption: function({ updates }) {
            updates.forEach((e)=>{
                const e_msgKey = e.msgKey;
                const r = babelHelpers.objectWithoutPropertiesLoose(e, s);
                o("WAWebMsgCollection").MsgCollection.get(e_msgKey)?.set(r);
            });
        },
        deleteMessageFromCollectionForSync: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgKey }) {
                const r = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (r) {
                    const a = o("WAWebFrontendMsgGetters").getChat(r);
                    if (a.msgs.length === 1) {
                        yield o("WAWebChatLoadMessages").loadEarlierMsgs({
                            chat: a
                        });
                    }
                    r.delete();
                } else {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "delete_message_for_me_sync: ",
                        " storage+ collection-"
                    ])), msgKey);
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        removeScheduledMsgModelForReveal: function({ msgKey }) {
            const n = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (n != null) {
                n.delete();
            }
        },
        loadAssociationChildrenIntoCollection: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ childMsgKeys, parentMsgKey }) {
                yield o("WAWebMessageAssociationUIUtils").getAssociatedMessagesByMsgKeys(parentMsgKey, childMsgKeys);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateMsgRcat: function({ msgKey, rcat }) {
            const r = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (r != null) {
                r.rcat = rcat;
            }
        }
    };
    l.MsgBridgeApi = c;
}, 98);