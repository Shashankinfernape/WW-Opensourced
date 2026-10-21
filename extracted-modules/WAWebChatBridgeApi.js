__d("WAWebChatBridgeApi", [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatGetExistingBridge",
    "WAWebCommentAction",
    "WAWebDBUpdateChatTable",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMsgKey",
    "WAWebMuteCollection",
    "WAWebRestoreChatsAndMessages",
    "WAWebThreadMetadataUtil",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUpdateOfflinePeerReceipts",
    "WAWebUpdateUnreadChatAction",
    "WAWebWamMemoryStat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        "id",
        "integritySignalsPromise"
    ];
    let d;
    const m = {
        getChat: function({ chatId }) {
            return o("WAWebChatCollection").ChatCollection.get(chatId);
        },
        hasChat: function({ chatId }) {
            return !!o("WAWebChatCollection").ChatCollection.get(chatId);
        },
        isMessageSentToBusiness: function({ msgKey }) {
            const n = o("WAWebChatCollection").ChatCollection.get(r("WAWebMsgKey").from(msgKey).remote);
            return n?.contact.isBusiness === true;
        },
        chatCollectionAdd: function({ options, things }) {
            o("WAWebChatCollection").ChatCollection.add(things, options);
        },
        chatCollectionGadd: function({ chat }) {
            return o("WAWebChatCollection").ChatCollection.gadd(chat);
        },
        chatCollectionTrigger: function({ args, name }) {
            o("WAWebChatCollection").ChatCollection.trigger(name, args);
        },
        muteCollectionAdd: function({ muteData }) {
            o("WAWebMuteCollection").MuteCollection.add({
                id: o("WAWebWidFactory").createWid(muteData.id),
                expiration: muteData.expiration,
                mentionAllMuteExpiration: muteData.mentionAllMuteExpiration
            }, {
                merge: true
            });
        },
        updateOfflinePeerReceipt: function({ ackUpdates, chatUpdates }) {
            o("WAWebUpdateOfflinePeerReceipts").updateOfflinePeerReceipt(chatUpdates, ackUpdates);
        },
        chatCollectionUpdate: function({ updates }) {
            updates.forEach((e)=>{
                const { id, integritySignalsPromise } = e;
                const r = babelHelpers.objectWithoutPropertiesLoose(e, c);
                const a = o("WAWebChatGetExistingBridge").getChatOrNewsletter(id);
                if (a) {
                    a.set(r);
                    if (integritySignalsPromise != null) {
                        a.promises.integritySignals = integritySignalsPromise;
                    }
                }
            });
        },
        updateChatReadStatus: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ id, read }) {
                const r = yield o("WAWebChatGetExistingBridge").getExisting(id);
                if (r) {
                    if (read) {
                        return o("WAWebUpdateUnreadChatAction").markSeen(r);
                    }
                    return o("WAWebUpdateUnreadChatAction").markUnseen(r);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateChatUnreadMsgCountAndClearMentions: function({ remote }) {
            const n = o("WAWebChatCollection").ChatCollection.get(remote);
            if (n) {
                o("WAWebUpdateUnreadChatAction").updateUnreadCountMD(n, 0, false);
                o("WAWebUpdateUnreadChatAction").clearUnreadMentions(n);
            }
        },
        updateChatLastAddOnPreview: function({ chatMap }) {
            o("WAWebUpdateLastAddOnPreviewChatAction").updateModelsForLastAddOnPreview(chatMap);
        },
        updateChatToLatest: function({ chatIdToLatestUpdates }) {
            o("WAWebCommentAction").updateChatToLatest(chatIdToLatestUpdates);
        },
        updateChatSortListener: function({ enable }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[chat][updateChatSortListener] ",
                " sort listener (",
                "): start"
            ])), enable ? "enable" : "disable", o("WAWebWamMemoryStat").roundIntForMetrics(o("WAWebChatCollection").ChatCollection.length));
            if (enable) {
                o("WAWebChatCollection").ChatCollection.enableSortListener(true);
            } else {
                o("WAWebChatCollection").ChatCollection.disableSortListener();
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[chat][updateChatSortListener] ",
                " sort listener (",
                "): done"
            ])), enable ? "enable" : "disable", o("WAWebWamMemoryStat").roundIntForMetrics(o("WAWebChatCollection").ChatCollection.length));
        },
        resetChatPreviewT: function({ chatIds }) {
            const n = chatIds.length > 0 && r("gkx")("23777");
            chatIds.forEach((e)=>{
                const t = o("WAWebWidFactory").createWid(e);
                let r = o("WAWebChatCollection").ChatCollection.get(t);
                if (r == null && n && t.isLid()) {
                    r = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(t);
                }
                if (r) {
                    r.previewT = undefined;
                }
            });
            if (n) {
                o("WAWebChatCollection").ChatCollection.sort();
            }
        },
        updateChatPreviewT: function({ threadMeta }) {
            o("WAWebChatCollection").ChatCollection.forEach((t)=>{
                const n = o("WAWebThreadMetadataUtil").getOfflineMetaPreviewForChat({
                    chatTimestamp: threadMeta,
                    chatId: t.id,
                    accountLid: t.accountLid
                });
                if (n != null) {
                    t.previewT = n;
                }
            });
            o("WAWebRestoreChatsAndMessages").restoreChatRowsForDisplay(threadMeta);
        },
        updateBotInvokeSystemMsgCreated: function({ chatId }) {
            const r = o("WAWebChatCollection").ChatCollection.get(chatId);
            if (r != null) {
                if (r.hasCreatedBotInvokeSystemMsg === true) {
                    return (d || (d = n("Promise"))).resolve();
                }
                return r.updateBotInvokeSystemMsgCreated();
            }
        },
        updateChatLimitSharing: function({ id, limitSharing }) {
            const r = o("WAWebChatCollection").ChatCollection.get(id);
            if (r) {
                r.limitSharing = limitSharing;
            }
        },
        updateChatAcp2Setting: function({ acp2Setting, id }) {
            const r = o("WAWebChatCollection").ChatCollection.get(id);
            if (r) {
                r.acp2Setting = acp2Setting;
            }
        },
        getChatModelsArray: function() {
            return (d || (d = n("Promise"))).resolve([].concat(o("WAWebChatCollection").ChatCollection.getModelsArray()));
        },
        updateMmSignalSharingExpirationWindow: function({ contextInfo, id, msg }) {
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
                const a = o("WAWebChatCollection").ChatCollection.get(id);
                if (a) {
                    const mmSignalSharingExpirationWindow = o("WAWebMmSignalSharingExpirationWindowUtils").getMmSignalSharingExpirationWindow({
                        contextInfo,
                        mmSignalSharingExpirationWindow: a.mmSignalSharingExpirationWindow,
                        msgKey: msg.id,
                        msgTimeClient: msg.clientReceivedTsMillis != null ? Math.round(msg.clientReceivedTsMillis / o("WAWebMmSignalSharingExpirationWindowUtils").MILLIS_PER_SECOND) : msg.t,
                        msgTimeServer: msg.t
                    });
                    a.mmSignalSharingExpirationWindow = mmSignalSharingExpirationWindow;
                    o("WAWebDBUpdateChatTable").updateChatTable(id, {
                        mmSignalSharingExpirationWindow
                    });
                }
            }
        },
        updateChatToneId: function({ id, toneId }) {
            const r = o("WAWebChatCollection").ChatCollection.get(id);
            if (r) {
                r.toneId = toneId;
            }
        },
        resetAiThreadUnreadCounts: function({ chatId, threadIds }) {
            const r = o("WAWebChatCollection").ChatCollection.get(chatId);
            if (!(r?.aiThreads == null || threadIds.length === 0)) {
                for (const a of threadIds){
                    const l = r.aiThreads?.get(a);
                    if (l != null) {
                        l.set({
                            unreadCount: 0
                        });
                    }
                }
            }
        },
        updateChatUnreadCount: function({ chatId, unreadCount }) {
            const r = o("WAWebChatCollection").ChatCollection.get(chatId);
            if (r != null) {
                r.set({
                    unreadCount
                });
            }
        },
        bulkUpdateChatCapiCallingPermissionType: function({ updates }) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[capi] bulkUpdateChatCapiCallingPermissionType ",
                " chats"
            ])), updates.length);
            for (const n of updates){
                const { capiCallingPermissionType, chatId } = n;
                const i = o("WAWebChatCollection").ChatCollection.get(chatId);
                if (i != null) {
                    i.capiCallingPermissionType = capiCallingPermissionType;
                }
            }
        },
        chatDeleteMessages: function({ chatId, messageIds }) {
            const r = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(chatId));
            if (r) {
                r.deleteMessages(messageIds);
            }
        },
        chatDelete: function({ chatId }) {
            const n = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(chatId));
            if (n) {
                n.delete();
            }
        },
        updateChatChangeNumberJids: function({ updates }) {
            updates.forEach((e)=>{
                const t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.id));
                if (t) {
                    t.changeNumberNewJid = e.changeNumberNewJid != null ? o("WAWebWidFactory").createWid(e.changeNumberNewJid) : undefined;
                    t.changeNumberOldJid = e.changeNumberOldJid != null ? o("WAWebWidFactory").createWid(e.changeNumberOldJid) : undefined;
                }
            });
        }
    };
    l.ChatBridgeApi = m;
}, 98);