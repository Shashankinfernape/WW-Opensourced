__d("WAWebSettingsBridgeApi", [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebMuteCollection",
    "WAWebNormalizeThemeId",
    "WAWebProtobufSyncAction.pb",
    "WAWebSettingsBridgeThemeDebouncer",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebSettingsSyncEventEmitter",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:12510",
    "cr:12511",
    "cr:12512",
    "cr:12513",
    "cr:17219",
    "cr:7293",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    const b = n("cr:12510") ?? {};
    const b_NotificationToneOption = b.NotificationToneOption;
    const S = n("cr:12511") ?? {};
    const S_ShowNotificationBannerOption = S.ShowNotificationBannerOption;
    const L = n("cr:12512") ?? {};
    const L_TaskbarNotificationOption = L.TaskbarNotificationOption;
    const k = n("cr:7293") ?? {};
    const { setNotificationBannerSetting, setNotificationToneGroupSetting, setNotificationToneSetting, setStatusReactionsSetting, setTaskbarNotificationSetting } = k;
    const P = n("cr:12513") ?? {};
    const P_setIsSystemTrayEnabled = P.setIsSystemTrayEnabled;
    const M = n("cr:17219") ?? {};
    const M_getWindowsBridge = M.getWindowsBridge;
    const A = n("cr:7293") ?? {};
    const A_setNotificationToneStatusSetting = A.setNotificationToneStatusSetting;
    const O = {
        updateAccountLinkingStatus: function({ isFBLinked, isIGLinked, linkState }) {
            r("WAWebSettingsModel").isFBLinked = isFBLinked;
            r("WAWebSettingsModel").isIGLinked = isIGLinked;
            r("WAWebSettingsModel").linkState = linkState;
        },
        updateCrosspostAutoShareSettings: function({ shareToFB, shareToIG }) {
            if (shareToFB != null) {
                r("WAWebSettingsModel").shareToFB = shareToFB;
            }
            if (shareToIG != null) {
                r("WAWebSettingsModel").shareToIG = shareToIG;
            }
        },
        applyAppSetting: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ field, value }) {
                switch(field){
                    case "startAtLogin":
                        {
                            if (M_getWindowsBridge != null) {
                                M_getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebSettingsBridgeApi)?.systemIntegrationsBridge?.updateStartupTask(!!value);
                            }
                            return;
                        }
                    case "minimizeToTray":
                        if (P_setIsSystemTrayEnabled != null) {
                            if (P_setIsSystemTrayEnabled != null) {
                                P_setIsSystemTrayEnabled(!!value);
                            }
                        }
                        return;
                    case "language":
                        if (typeof value === "string" && value.length > 0) {
                            r("WAWebSettingsSyncEventEmitter").trigger("applyLanguage", value);
                        }
                        return;
                    case "replaceTextWithEmoji":
                        {
                            const i = r("WAWebChatPreferenceCollection").getDefault();
                            i.set("transformTextEmoji", !!value);
                            return;
                        }
                    case "isSpellCheckEnabled":
                        {
                            const l = r("WAWebChatPreferenceCollection").getDefault();
                            l.set("spellcheck", !!value);
                            return;
                        }
                    case "isEnterToSendEnabled":
                        {
                            const s = r("WAWebChatPreferenceCollection").getDefault();
                            s.set("enterIsSend", !!value);
                            return;
                        }
                    case "bannerNotificationDisplayMode":
                        {
                            const u = o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.cast(Number(value));
                            if (u == null || S_ShowNotificationBannerOption == null) {
                                return;
                            }
                            switch(u){
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                                    setNotificationBannerSetting?.(S_ShowNotificationBannerOption?.Never);
                                    break;
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.ONLY_WHEN_APP_IS_OPEN:
                                    setNotificationBannerSetting?.(S_ShowNotificationBannerOption?.OnlyWhenAppIsOpen);
                                    break;
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                                    setNotificationBannerSetting?.(S_ShowNotificationBannerOption?.Always);
                                    break;
                                default:
                                    return;
                            }
                            return;
                        }
                    case "unreadCounterBadgeDisplayMode":
                        {
                            const c = o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.cast(Number(value));
                            if (c == null || L_TaskbarNotificationOption == null) {
                                return;
                            }
                            switch(c){
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                                    setTaskbarNotificationSetting?.(L_TaskbarNotificationOption?.Never);
                                    break;
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.ONLY_WHEN_APP_IS_OPEN:
                                    setTaskbarNotificationSetting?.(L_TaskbarNotificationOption?.OnlyWhenAppIsOpen);
                                    break;
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                                    setTaskbarNotificationSetting?.(L_TaskbarNotificationOption?.Always);
                                    break;
                                default:
                                    return;
                            }
                            return;
                        }
                    case "isMessagesNotificationEnabled":
                        o("WAWebMuteCollection").MuteCollection.setGlobalNotifications(!!value);
                        return;
                    case "isCallsNotificationEnabled":
                        o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(!!value);
                        return;
                    case "isReactionsNotificationEnabled":
                        {
                            const d = !!value;
                            o("WAWebMuteCollection").MuteCollection.setGlobalNotificationReactionsEnabled(d);
                            return;
                        }
                    case "isStatusReactionsNotificationEnabled":
                        {
                            const m = !!value;
                            setStatusReactionsSetting?.(m);
                            o("WAWebMuteCollection").MuteCollection.setGlobalStatusNotificationReactionsEnabled(m);
                            return;
                        }
                    case "isTextPreviewForNotificationEnabled":
                        o("WAWebMuteCollection").MuteCollection.setGlobalPreviews(!!value);
                        return;
                    case "isGroupMessageNotificationEnabled":
                        o("WAWebMuteCollection").MuteCollection.setGlobalGroupNotificationsEnabled(!!value);
                        return;
                    case "isGroupReactionsNotificationEnabled":
                        o("WAWebMuteCollection").MuteCollection.setGlobalGroupNotificationReactionsEnabled(!!value);
                        return;
                    case "isStatusNotificationEnabled":
                        o("WAWebMuteCollection").MuteCollection.setGlobalStatusNotificationsEnabled(!!value);
                        return;
                    case "statusNotificationToneId":
                        {
                            if (b_NotificationToneOption == null) {
                                return;
                            }
                            const h = b_NotificationToneOption?.cast(Number(value)) ?? b_NotificationToneOption?.Default;
                            A_setNotificationToneStatusSetting?.(h);
                            o("WAWebMuteCollection").MuteCollection.setGlobalStatusSoundsEnabled(h !== b_NotificationToneOption.None);
                            return;
                        }
                    case "shouldPlaySoundForCallNotification":
                        o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(!!value);
                        return;
                    case "defaultNotificationToneId":
                        {
                            if (b_NotificationToneOption == null) {
                                return;
                            }
                            const C = b_NotificationToneOption?.cast(Number(value)) ?? b_NotificationToneOption?.Default;
                            setNotificationToneSetting?.(C);
                            return;
                        }
                    case "groupDefaultNotificationToneId":
                        {
                            if (b_NotificationToneOption == null) {
                                return;
                            }
                            const S = b_NotificationToneOption?.cast(Number(value)) ?? b_NotificationToneOption?.Default;
                            setNotificationToneGroupSetting?.(S);
                            return;
                        }
                    case "appTheme":
                        if (typeof value === "number") {
                            r("WAWebSettingsSyncEventEmitter").trigger("applyTheme", value);
                        }
                        return;
                    case "wallpaperId":
                        if (typeof value === "number") {
                            o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync({
                                kind: "default"
                            }, {
                                field: "wallpaperSolid",
                                wallpaperId: value
                            });
                        }
                        return;
                    case "isDoodleWallpaperEnabled":
                        o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync({
                            kind: "default"
                        }, {
                            field: "doodle",
                            value: !!value
                        });
                        return;
                    case "chatThemeId":
                        o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync({
                            kind: "default"
                        }, {
                            field: "chatThemeId",
                            normalizedId: typeof value === "string" ? r("WAWebNormalizeThemeId")(value) : null
                        });
                        return;
                    case "colorSchemeId":
                        o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync({
                            kind: "default"
                        }, {
                            field: "colorSchemeId",
                            normalizedId: typeof value === "string" ? r("WAWebNormalizeThemeId")(value) : null
                        });
                        return;
                    case "stockWallpaperImageId":
                        o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync({
                            kind: "default"
                        }, {
                            field: "wallpaperStock",
                            rawValue: value
                        });
                        return;
                    case "fontSize":
                        {
                            if (typeof value === "number") {
                                r("WAWebSettingsSyncEventEmitter").trigger("applyZoom", value);
                            }
                            return;
                        }
                    case "mediaUploadQuality":
                        {
                            const L = o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.cast(Number(value));
                            if (L == null) {
                                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "[settings-sync] Invalid media upload quality setting: ",
                                    ""
                                ])), value);
                                return;
                            }
                            const k = r("WAWebChatPreferenceCollection").getDefault();
                            switch(L){
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD:
                                    k.set("hdMediaEnabled", 1);
                                    break;
                                case o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.STANDARD:
                                    k.set("hdMediaEnabled", 0);
                                    break;
                                default:
                                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                        "[settings-sync] Invalid media upload quality setting: ",
                                        ""
                                    ])), value);
                                    return;
                            }
                            return;
                        }
                    case "isPhotosAutodownloadEnabled":
                        o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(!!value);
                        return;
                    case "isAudiosAutodownloadEnabled":
                        o("WAWebUserPrefsGeneral").setAutoDownloadAudio(!!value);
                        return;
                    case "isVideosAutodownloadEnabled":
                        o("WAWebUserPrefsGeneral").setAutoDownloadVideos(!!value);
                        return;
                    case "isDocumentsAutodownloadEnabled":
                        o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(!!value);
                        return;
                    case "disableLinkPreviews":
                        return;
                    case "archive":
                        {
                            r("WAWebSettingsModel").archive = babelHelpers.extends({}, o("WAWebSettingsGetters").getArchive(r("WAWebSettingsModel")), value);
                            return;
                        }
                    default:
                        o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Unknown app-level setting field: ",
                            ""
                        ])), field);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        applyPerChatSetting: function({ chatJid, field, value }) {
            switch(field){
                case "notificationToneId":
                    {
                        try {
                            const l = o("WAWebWidFactory").createWid(chatJid);
                            let s = null;
                            if (l.isLid()) {
                                s = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(l);
                            } else {
                                s = o("WAWebChatCollection").ChatCollection.get(l);
                            }
                            s?.set("toneId", value);
                        } catch (error) {
                            o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "[settings-sync] Failed to set notification tone for ",
                                ": ",
                                ""
                            ])), chatJid, String(error)).tags("settings-sync");
                            throw error;
                        }
                        return;
                    }
                case "chatThemeId":
                case "colorSchemeId":
                    {
                        const normalizedId = typeof value === "string" ? r("WAWebNormalizeThemeId")(value) : null;
                        B({
                            chatJid,
                            field,
                            mutation: field === "chatThemeId" ? {
                                field: "chatThemeId",
                                normalizedId
                            } : {
                                field: "colorSchemeId",
                                normalizedId
                            }
                        });
                        return;
                    }
                case "isDoodleWallpaperEnabled":
                    if (typeof value !== "boolean") {
                        return;
                    }
                    B({
                        chatJid,
                        field,
                        mutation: {
                            field: "doodle",
                            value
                        }
                    });
                    return;
                case "wallpaperId":
                    if (typeof value === "number") {
                        B({
                            chatJid,
                            field,
                            mutation: {
                                field: "wallpaperSolid",
                                wallpaperId: value
                            }
                        });
                    }
                    return;
                case "stockWallpaperImageId":
                    B({
                        chatJid,
                        field,
                        mutation: {
                            field: "wallpaperStock",
                            rawValue: value
                        }
                    });
                    return;
                default:
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Unknown per-chat setting field: ",
                        ""
                    ])), field);
            }
        },
        restoreArchiveV2Settings: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebUserPrefsMultiDevice").getArchiveV2EnabledSetting();
                const classic = yield o("WAWebUserPrefsMultiDevice").getUnarchiveChatsSetting();
                if (e != null) {
                    r("WAWebSettingsModel").archive = babelHelpers.extends({}, o("WAWebSettingsGetters").getArchive(r("WAWebSettingsModel")), {
                        enabled: e
                    });
                }
                if (classic != null) {
                    r("WAWebSettingsModel").archive = babelHelpers.extends({}, o("WAWebSettingsGetters").getArchive(r("WAWebSettingsModel")), {
                        classic
                    });
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    function B({ chatJid, field, mutation }) {
        try {
            o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync({
                kind: "chat",
                chatJid
            }, mutation);
        } catch (error) {
            o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] Failed to enqueue per-chat ",
                " for ",
                ""
            ])), field, chatJid).catching(r("getErrorSafe")(error)).sendLogs("chat-theme-sync-enqueue-failed");
            throw error;
        }
    }
    l.SettingsBridgeApi = O;
}, 98);