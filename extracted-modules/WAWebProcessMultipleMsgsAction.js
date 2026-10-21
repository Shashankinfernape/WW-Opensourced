__d("WAWebProcessMultipleMsgsAction", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddAndReorderMsgsActionsUtils",
    "WAWebBizBotProfileUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebChatCollection",
    "WAWebChatGetExistingBridge",
    "WAWebChatModel",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGetMsgUpdatesActionsUtils",
    "WAWebGhostEphemeralChatSkip",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaGatingUtils",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaTypes",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessageRenderQpl",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebRecentStickerCollection",
    "WAWebRecentStickerCollectionMd",
    "WAWebStatusCollection",
    "WAWebStickerModel",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebThreadModelResolver",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:11804",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, chatMsgsCollection, meta, msgObjs, processMessageOrigin }) {
            let a;
            const g = yield r("WAWebGetMsgUpdatesActionsUtils")({
                chatId,
                chatMsgsCollection,
                meta,
                msgObjs
            });
            const { filteredRecs, reorderRecs, updates } = g;
            const S = yield (_ || (_ = n("Promise"))).all(updates);
            const R = S.filter((e)=>e?.associationType != null);
            o("WAWebMessageAssociationUIUtils").makeParentMessagesVisibleInChat(R);
            if (filteredRecs.length === 0 && reorderRecs.length === 0) {
                if (chatId && meta.pendingMsgsDone === true) {
                    const E = o("WAWebChatCollection").ChatCollection.get(chatId) ?? r("WAWebNewsletterCollection").get(chatId);
                    if (E) {
                        E.pendingMsgs = false;
                    }
                }
                return r("compactMap")(msgObjs, function(e) {
                    return o("WAWebMsgCollection").MsgCollection.get(e.id);
                });
            }
            if (!chatId) {
                return C(filteredRecs).then(()=>msgObjs.reduce((acc, msgObj)=>{
                        const n = o("WAWebMsgCollection").MsgCollection.get(msgObj.id);
                        if (n != null && o("WAWebFrontendMsgGetters").getChat(n) != null) {
                            acc.push(n);
                        }
                        return acc;
                    }, []));
            }
            o("WAWebMessageRenderQpl").startMessageRenderFlows(chatId, msgObjs, filteredRecs);
            const k = self.performance.now();
            let I;
            const T = msgObjs[0];
            if (o("WAWebMsgGetters").getIsStatus(T)) {
                let x = o("WAWebMsgGetters").getSender(T) ?? T.from;
                if (r("WAWebWid").isStatus(chatId)) {
                    x = T.id.fromMe ? o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebUserPrefsMeUser").getMeUserOrThrow()) : T.author;
                }
                if (x == null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "statusId null chat=",
                        " sender=",
                        " from=",
                        " fromMe=",
                        " author=",
                        ""
                    ])), chatId.toLogString(), o("WAWebMsgGetters").getSender(T)?.toLogString(), T.from?.toLogString(), T.id.fromMe, T.author?.toLogString());
                }
                I = o("WAWebStatusCollection").StatusCollection.find(x);
            } else {
                if (yield h(chatId, msgObjs)) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "_processMultipleMessages: skipping ghost chat creation for ephemeral_setting-only message ",
                        ""
                    ])), chatId.toLogString());
                    return r("compactMap")(msgObjs, function(e) {
                        return o("WAWebMsgCollection").MsgCollection.get(e.id);
                    });
                }
                I = yield o("WAWebFindChatAction").findExistingChat(chatId, processMessageOrigin);
            }
            const M = yield I;
            const w = self.performance.now();
            const newMsgs = yield C(filteredRecs);
            const F = self.performance.now();
            const insertAfter = meta.add === "after" || meta.add === "last";
            const B = !meta.isHistory;
            let W;
            let firstUnreadKey;
            let resetMostRecentMsgs = false;
            const V = M.id.isBot();
            const H = o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(M.contact.businessProfile);
            if ((V || H) && meta.isHistory === false) {
                const G = M.msgs.last();
                if (G?.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
                    if (G != null) {
                        G.delete({
                            skipUpdatingSortTime: true
                        });
                    }
                }
            }
            newMsgs.forEach((e)=>{
                if (e.subtype === "biz_bot_1p_disclosure") {
                    M.set({
                        bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P
                    });
                } else if (e.subtype === "biz_bot_3p_disclosure") {
                    M.set({
                        bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P
                    });
                }
            });
            if (meta.add === "unread") {
                W = chatMsgsCollection;
                M.msgChunks.push(W);
                firstUnreadKey = meta.firstUnreadKey;
            } else if (meta.add === "last" && meta.resume === true) {
                W = chatMsgsCollection;
                resetMostRecentMsgs = true;
            } else {
                W = typeof chatMsgsCollection === "function" ? chatMsgsCollection() : chatMsgsCollection;
            }
            const z = typeof W === "function" ? W() : W;
            let threadOrChat = M;
            if (z?.threadId != null && M instanceof o("WAWebChatModel").Chat) {
                threadOrChat = o("WAWebThreadModelResolver").resolveThreadOrChat(M, z.threadId);
            }
            r("WAWebAddAndReorderMsgsActionsUtils")({
                anchorMsgKey: meta.anchorMsgKey,
                chatMsgsCollection: z ?? M.msgs,
                firstUnreadKey,
                insertAfter,
                msgHistory: msgObjs,
                newMsgs,
                reorderMsgs: reorderRecs,
                resetMostRecentMsgs,
                threadOrChat
            });
            o("WAWebMessageRenderQpl").markMessageRenderAddedToChat(newMsgs.map((e)=>e.id));
            if (F - k >= 500) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[processMM]: ",
                    " msgs findChat=",
                    "ms msgPrepWork=",
                    "ms"
                ])), msgObjs.length, Math.round(w - k), Math.round(F - w));
            }
            if (M instanceof o("WAWebChatModel").Chat && (z == null || z.threadId == null)) {
                o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(M, newMsgs);
            }
            if (meta.pendingMsgsDone === true) {
                M.pendingMsgs = false;
            }
            if (B && r("WAWebWid").isBroadcast(chatId) && !r("WAWebWid").isStatus(chatId)) {
                newMsgs.forEach((e)=>{
                    if (e && e.recvFresh && !o("WAWebMsgGetters").getIsNotification(e)) {
                        o("WAWebMsgModelUtils").broadcastFanout(e);
                    }
                });
            }
            if (!((a = meta.isHistory) != null && a)) {
                const K = r("compactMap")(newMsgs, function(e) {
                    const a = o("WAWebMsgGetters").getIsSentByMe(e) && e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
                    if (a && e.isAvatar !== true) {
                        const { mediaData, mediaObject } = e;
                        const s = e.id.toString();
                        const u = mediaObject?.entries.entries[0];
                        return {
                            sticker: new (o("WAWebStickerModel")).StickerModel({
                                id: mediaData.filehash,
                                directPath: mediaData.directPath,
                                filehash: mediaData.filehash,
                                encFilehash: u?.getEncfilehash() ?? mediaData.encFilehash,
                                mediaKey: u?.getMediaKey() ?? mediaData.mediaKey,
                                mediaKeyTimestamp: mediaData.mediaKeyTimestamp ?? o("WATimeUtils").unixTime(),
                                width: mediaData.fullWidth,
                                height: mediaData.fullHeight,
                                size: mediaData.size,
                                mimetype: mediaData.mimetype,
                                isAvatar: e.isAvatar,
                                type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                                index: 0,
                                stickerAudio: e.stickerAudio
                            }),
                            timestamp: e.stickerSentTs ?? 0,
                            msgId: s
                        };
                    }
                });
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processed ",
                    " recent sticker messages"
                ])), K.length);
                K.forEach((e)=>o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.addNewSticker(e.sticker, e.msgId, e.timestamp));
            }
            let Q = 0;
            const X = r("compactMap")(newMsgs, function(e) {
                const t = e.isNewMsg && o("WAWebMsgGetters").getIsSentByMe(e) && e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
                const e_mediaData = e.mediaData;
                if (t) {
                    const mediaKey = e.mediaKey;
                    if (mediaKey == null) {
                        Q++;
                        return;
                    }
                    return {
                        id: e_mediaData.filehash,
                        directPath: e_mediaData.directPath,
                        filehash: e_mediaData.filehash,
                        encFilehash: e_mediaData.encFilehash,
                        mediaKey,
                        mediaKeyTimestamp: e_mediaData.mediaKeyTimestamp ?? o("WATimeUtils").unixTime(),
                        width: e_mediaData.fullWidth,
                        height: e_mediaData.fullHeight,
                        size: e_mediaData.size,
                        mimetype: e_mediaData.mimetype,
                        type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                        index: 0
                    };
                }
            });
            if (Q > 0) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker] Unexpected null media key"
                ]))).sendLogs("sticker-unexpected-null-media-key");
            }
            o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(X);
            const Y = newMsgs.filter((e)=>!o("WAWebMsgGetters").getIsStatus(e));
            r("compactMap")(Y, function(e) {
                return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(e);
            }).forEach((e)=>{
                o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA);
            });
            if (!o("WAWebUserPrefsGeneral").getAutoDownloadPhotos()) {
                const J = newMsgs.filter((e)=>!o("WAWebMsgGetters").getIsSentByMe(e) && !o("WAWebMsgGetters").getIsStatus(e) && !o("WAWebMsgGetters").getIsNewsletterMsg(e));
                r("compactMap")(J, function(e) {
                    return o("WAWebFrontendMsgGetters").getAsImage(e);
                }).forEach((e)=>{
                    let n;
                    if (!(e.mediaObject?.contentInfo.fullPreviewData != null || !((n = e.scanLengths) != null && n.length) || !e.scansSidecar || !e.encFilehash || !e.mediaKey)) {
                        const r = o("WAWebMediaGatingUtils").getHQImageThumbnailInChatScans();
                        if (r > 0) {
                            o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.PJPEG_THUMBNAIL);
                        }
                    }
                });
            }
            r("compactMap")(newMsgs, function(e) {
                return o("WAWebFrontendMsgGetters").getAsDoc(e);
            }).forEach((e)=>{
                o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL);
            });
            window.setTimeout(function() {
                if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled()) {
                    const e = r("compactMap")(newMsgs, function(e) {
                        return o("WAWebFrontendMsgGetters").getAsDoc(e);
                    });
                    const t = e.some((e)=>o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e.mimetype));
                    if (t) {
                        if (n("cr:11804") != null) {
                            n("cr:11804").maybePreloadWebTPIframeForPDFs(undefined, {
                                source: "appStart",
                                force: true
                            });
                        }
                    }
                }
            }, 0);
            r("compactMap")(newMsgs, function(e) {
                return o("WAWebFrontendMsgGetters").getAsUrl(e);
            }).forEach((e)=>{
                if (!o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(e.t)) {
                    o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL, null);
                }
            });
            if (o("WAWebABProps").getABPropConfigValue("download_status_thumb_mms_enabled")) {
                const Z = o("WAWebUserPrefsGeneral").getLastStatusUsage();
                const ee = 1000 * 60 * 60 * 24;
                if (Z == null || Date.now() - Z < 14 * ee) {
                    const te = newMsgs.filter((e)=>o("WAWebMsgGetters").getIsStatus(e));
                    r("compactMap")(te, function(e) {
                        return o("WAWebFrontendMsgGetters").getAsImage(e) || o("WAWebFrontendMsgGetters").getAsVideo(e);
                    }).forEach((e)=>{
                        o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(e, o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL);
                    });
                }
            }
            return r("compactMap")(msgObjs, function(e) {
                return o("WAWebMsgCollection").MsgCollection.get(e.id);
            });
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!e.isUser() || t.length === 0 || !t.every((e)=>o("WAWebGhostEphemeralChatSkip").isSkippableIncomingEphemeralSettingMsg(e))) {
                return false;
            }
            const n = yield o("WAWebChatGetExistingBridge").getExisting(e);
            return n == null;
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebMsgCollection").MsgCollection.add(e, {
                merge: true
            });
            let a = 0;
            const i = t.reduce((acc, item)=>{
                if (item == null) {
                    a++;
                }
                if (item != null && item.subtype !== "is_hosted_group") {
                    acc.push(item);
                }
                return acc;
            }, []);
            if (a > 0) {
                const l = e.filter((e, n)=>t[n] == null).slice(0, 3).map((e)=>e.id);
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Get ",
                    " empty messages with ids => ",
                    ""
                ])), a, l).sendLogs("msgPrepWork-empty-message");
            }
            let s = null;
            let u = null;
            yield (_ || (_ = n("Promise"))).all(i.map((e)=>e.waitForPrep().catch((t)=>{
                    s = t;
                    u = e;
                })));
            if (s != null && u != null) {
                const c = r("getErrorSafe")(s);
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[msgPrepWork] id=",
                    " type=",
                    " subtype=",
                    " hasMedia=",
                    ""
                ])), u.id.toString(), u.type, u.subtype, u.mediaData != null).catching(c).sendLogs("bad-msg-prep");
            }
            return i;
        });
        return b.apply(this, arguments);
    }
    l._processMultipleMessages = f;
}, 98);