__d("WAWebTasksDailyStatsTask", [
    "Promise",
    "WALogger",
    "WAStorageEstimator",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsGlobals",
    "WAWebAboutConsumptionDailyWamEvent",
    "WAWebAboutCreationDailyWamEvent",
    "WAWebAfterReadUtils",
    "WAWebApiContact",
    "WAWebApiPrivacyDisallowedList",
    "WAWebApiPrivacyEphemerality",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebCanonicalUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebCommunityHomeActionWamEvent",
    "WAWebCommunityTabActionWamEvent",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactManagementGating",
    "WAWebCurrentUser",
    "WAWebDBOutContactDatabaseApi",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebDailyWamEvent",
    "WAWebEphemeralityResolver",
    "WAWebEstimateFtsStorageApi",
    "WAWebGroupABPropsGlobals",
    "WAWebHistorySyncLidChatGating",
    "WAWebInactiveGroupLidMigration",
    "WAWebKeepInChatNotifWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationDailyWamEvent",
    "WAWebLidMigrationUtils",
    "WAWebMediaStore",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebNotificationEngagementWamEvent",
    "WAWebNotificationSettingWamEvent",
    "WAWebPnhDailyWamEvent",
    "WAWebPrivacyHighlightDailyWamEvent",
    "WAWebPttDailyWamEvent",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebScreenLockSettingsDataWamEvent",
    "WAWebSubmitChatLockDailyStats",
    "WAWebTasksExperienceIdDailyReport",
    "WAWebTextStatusGatingUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebUserPrefsContactManagement",
    "WAWebUserPrefsFavoritesLidMigration",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUserPrefsScreenLock",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
    "WAWebWaFsSingleEmojiMessageDailyWamEvent",
    "WAWebWamEnumLidMigrationSourceType",
    "WAWebWamEnumNotificationSettingType",
    "WAWebWamEnumNotificationSoundTone",
    "WAWebWamEnumPrivacyHighlightCategoryEnum",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "WAWebWamEnumPrivacySettingsContactsBuckets",
    "WAWebWamEnumPrivacySettingsValueType",
    "WAWebWamEnumTypeOfGroupEnum",
    "WAWebWamEnumUsernameState",
    "WAWebWamPrivateStatsUtils",
    "WAWebWebDynamicSamplingTestEventWithSamplingWamEvent",
    "WAWebWebDynamicSamplingTestEventWithoutSamplingWamEvent",
    "WAWebWebcFtsStorageWamEvent",
    "WAWebWebcStorageStatWamEvent",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere",
    "cr:7293",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
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
    const C = n("cr:7293") ?? {};
    const { getNotificationToneGroupSetting, getNotificationToneSetting, getNotificationToneStatusSetting } = C;
    function R(e) {
        if (e.goldenBoxContactNarrativeAppearCount > 0 || e.goldenBoxContactDialogAppearCount > 0 || e.goldenBoxContactDialogSelectCount > 0) {
            const t = new (o("WAWebPrivacyHighlightDailyWamEvent")).PrivacyHighlightDailyWamEvent({
                privacyHighlightCategory: o("WAWebWamEnumPrivacyHighlightCategoryEnum").PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
                privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT,
                narrativeAppearCount: e.goldenBoxContactNarrativeAppearCount,
                dialogAppearCount: e.goldenBoxContactDialogAppearCount,
                dialogSelectCount: e.goldenBoxContactDialogSelectCount
            });
            t.commit();
        }
        if (e.goldenBoxGroupNarrativeAppearCount > 0 || e.goldenBoxGroupDialogAppearCount > 0 || e.goldenBoxGroupDialogSelectCount > 0) {
            const n = new (o("WAWebPrivacyHighlightDailyWamEvent")).PrivacyHighlightDailyWamEvent({
                privacyHighlightCategory: o("WAWebWamEnumPrivacyHighlightCategoryEnum").PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
                privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_GROUP,
                narrativeAppearCount: e.goldenBoxGroupNarrativeAppearCount,
                dialogAppearCount: e.goldenBoxGroupDialogAppearCount,
                dialogSelectCount: e.goldenBoxGroupDialogSelectCount
            });
            n.commit();
        }
        if (e.infoScreenGroupNarrativeAppearCount > 0 || e.infoScreenGroupDialogAppearCount > 0 || e.infoScreenGroupDialogSelectCount > 0) {
            const r = new (o("WAWebPrivacyHighlightDailyWamEvent")).PrivacyHighlightDailyWamEvent({
                privacyHighlightCategory: o("WAWebWamEnumPrivacyHighlightCategoryEnum").PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
                privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                narrativeAppearCount: e.infoScreenGroupNarrativeAppearCount,
                dialogAppearCount: e.infoScreenGroupDialogAppearCount,
                dialogSelectCount: e.infoScreenGroupDialogSelectCount
            });
            r.commit();
        }
        if (e.chatsListNarrativeAppearCount > 0 || e.chatsListDialogAppearCount > 0 || e.chatsListDialogSelectCount > 0) {
            const a = new (o("WAWebPrivacyHighlightDailyWamEvent")).PrivacyHighlightDailyWamEvent({
                privacyHighlightCategory: o("WAWebWamEnumPrivacyHighlightCategoryEnum").PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
                privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
                narrativeAppearCount: e.chatsListNarrativeAppearCount,
                dialogAppearCount: e.chatsListDialogAppearCount,
                dialogSelectCount: e.chatsListDialogSelectCount
            });
            a.commit();
        }
        if (e.statusListNarrativeAppearCount > 0 || e.statusListDialogAppearCount > 0 || e.statusListDialogSelectCount > 0) {
            const i = new (o("WAWebPrivacyHighlightDailyWamEvent")).PrivacyHighlightDailyWamEvent({
                privacyHighlightCategory: o("WAWebWamEnumPrivacyHighlightCategoryEnum").PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
                privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
                narrativeAppearCount: e.statusListNarrativeAppearCount,
                dialogAppearCount: e.statusListDialogAppearCount,
                dialogSelectCount: e.statusListDialogSelectCount
            });
            i.commit();
        }
        if (e.callingScreenAudioNarrativeAppearCount > 0 || e.callingScreenAudioDialogAppearCount > 0 || e.callingScreenAudioDialogSelectCount > 0) {
            const l = new (o("WAWebPrivacyHighlightDailyWamEvent")).PrivacyHighlightDailyWamEvent({
                privacyHighlightCategory: o("WAWebWamEnumPrivacyHighlightCategoryEnum").PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
                privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLING_SCREEN_AUDIO,
                narrativeAppearCount: e.callingScreenAudioNarrativeAppearCount,
                dialogAppearCount: e.callingScreenAudioDialogAppearCount,
                dialogSelectCount: e.callingScreenAudioDialogSelectCount
            });
            l.commit();
        }
    }
    function L() {
        const messageReactionNotification = !o("WAWebMuteCollection").MuteCollection.globalReactionsMute();
        const groupShowNotification = !!o("WAWebUserPrefsNotifications").getIgnoreNondirectGroupMsg();
        const n = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
        const r = new (o("WAWebNotificationSettingWamEvent")).NotificationSettingWamEvent;
        if (n) {
            let messageSoundTone;
            let groupSoundTone;
            let statusSoundTone;
            if (getNotificationToneSetting && getNotificationToneGroupSetting && getNotificationToneStatusSetting) {
                messageSoundTone = getNotificationToneSetting();
                groupSoundTone = getNotificationToneGroupSetting();
                statusSoundTone = getNotificationToneStatusSetting();
            } else {
                if (o("WAWebMuteCollection").MuteCollection.getGlobalSoundsEnabled()) {
                    messageSoundTone = o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE.DEFAULT;
                }
                if (o("WAWebMuteCollection").MuteCollection.getGlobalGroupSoundsEnabled()) {
                    groupSoundTone = o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE.DEFAULT;
                }
                if (o("WAWebMuteCollection").MuteCollection.getGlobalStatusSoundsEnabled()) {
                    statusSoundTone = o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE.DEFAULT;
                }
            }
            r.set({
                groupReactionNotification: o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationReactionsEnabled(),
                groupShowNotification: o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationsEnabled(),
                groupSoundTone,
                messageReactionNotification: o("WAWebMuteCollection").MuteCollection.getGlobalNotificationReactionsEnabled(),
                messageShowNotification: o("WAWebMuteCollection").MuteCollection.getGlobalNotificationsEnabled(),
                messageSoundTone,
                statusReactionNotification: o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationReactionsEnabled(),
                statusShowNotification: o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationsEnabled(),
                statusSoundTone,
                showPreview: o("WAWebUserPrefsNotifications").getGlobalPreviews(),
                offlineNotification: o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications()
            });
        } else {
            r.set({
                groupReactionNotification: groupShowNotification && messageReactionNotification,
                groupShowNotification,
                groupSoundTone: o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE.DEFAULT,
                inAppNotificationSound: o("WAWebUserPrefsNotifications").getGlobalSounds(),
                messageReactionNotification,
                messageShowNotification: o("WAWebUserPrefsNotifications").getGlobalNotifications(),
                messageSoundTone: o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE.DEFAULT,
                showPreview: o("WAWebUserPrefsNotifications").getGlobalPreviews(),
                offlineNotification: o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications()
            });
        }
        r.commit();
    }
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebABPropsGlobals").logClientExposurePulseEventFromDailyStatsTask();
            o("WAWebGroupABPropsGlobals").logGroupExposurePulseEventFromDailyStatsTask();
            const e = yield (y || (y = n("Promise"))).all([
                I(),
                O(),
                V(),
                G(),
                j(),
                Z(),
                Y()
            ]);
            const t = e[0];
            const a = e[1];
            const i = e[2];
            const ftsTotalSize = e[3];
            const u = e[4];
            const c = e[5];
            const d = e[6];
            const m = z();
            const p = babelHelpers.extends({}, t, a, i, m, u, c, d, {
                isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent()
            });
            const _ = new (o("WAWebDailyWamEvent")).DailyWamEvent;
            _.set(p);
            _.commit();
            L();
            try {
                const f = yield D({
                    includeGroupComposition: true
                });
                new (o("WAWebLidMigrationDailyWamEvent")).LidMigrationDailyWamEvent(f).commit();
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: dropping daily event on scan failure"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("lid-migration-daily-dropped");
            }
            o("WAWebTasksExperienceIdDailyReport").reportExperienceIdDailyStats();
            const g = new (o("WAWebWebcFtsStorageWamEvent")).WebcFtsStorageWamEvent;
            g.set({
                ftsTotalSize
            });
            g.commit();
            const h = new (o("WAWebScreenLockSettingsDataWamEvent")).ScreenLockSettingsDataWamEvent;
            h.set(Q());
            h.commit();
            const C = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
            const b = new (o("WAWebWebcStorageStatWamEvent")).WebcStorageStatWamEvent;
            b.set({
                webcStorageQuota: i.storageTotalSize,
                webcStorageUsage: i.storageUsed,
                webcAgeOfStorage: C != null ? o("WATimeUtils").unixTimeWithoutClockSkewCorrection() - C : -1,
                webcPackingEnabled: false
            });
            b.commit();
            const v = yield o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
            if (v) {
                new (o("WAWebNotificationEngagementWamEvent")).NotificationEngagementWamEvent({
                    isWebBackgroundSyncNotif: true,
                    totalNotifShown: v.totalNotifShown ?? 0,
                    totalNotifTapToOpen: v.totalNotifTapToOpen ?? 0
                }).commit();
                o("WAWebUserPrefsGeneral").clearOfflineNotificationContentEngagement();
            }
            const k = yield o("WAWebUserPrefsGeneral").getNotificationEngagement();
            if (k) {
                new (o("WAWebNotificationEngagementWamEvent")).NotificationEngagementWamEvent({
                    totalNotifRtcVoipAccept: k.totalNotifRtcVoipAccept ?? 0,
                    totalNotifRtcVoipDecline: k.totalNotifRtcVoipDecline ?? 0,
                    totalNotifShown: k.totalNotifShown ?? 0,
                    totalNotifTapToOpen: k.totalNotifTapToOpen ?? 0
                }).commit();
                o("WAWebUserPrefsGeneral").clearNotificationContentEngagement();
            }
            o("WAWebWamPrivateStatsUtils").logDailyPrivateStatsTestEvents();
            const N = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.toArray().filter((e)=>e.shouldBeSubmitted());
            o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.remove(N);
            N.forEach((e)=>{
                const t = new (o("WAWebPttDailyWamEvent")).PttDailyWamEvent({
                    pttCancelBroadcast: e.pttCancelBroadcast,
                    pttCancelGroup: e.pttCancelGroup,
                    pttCancelIndividual: e.pttCancelIndividual,
                    pttCancelNewsletter: e.pttCancelNewsletter,
                    pttDraftReviewBroadcast: e.pttDraftReviewBroadcast,
                    pttDraftReviewGroup: e.pttDraftReviewGroup,
                    pttDraftReviewIndividual: e.pttDraftReviewIndividual,
                    pttDraftReviewNewsletter: e.pttDraftReviewNewsletter,
                    pttFastplaybackBroadcast: e.pttFastplaybackBroadcast,
                    pttFastplaybackGroup: e.pttFastplaybackGroup,
                    pttFastplaybackIndividual: e.pttFastplaybackIndividual,
                    pttFastplaybackNewsletter: e.pttFastplaybackNewsletter,
                    pttLockBroadcast: e.pttLockBroadcast,
                    pttLockGroup: e.pttLockGroup,
                    pttLockIndividual: e.pttLockIndividual,
                    pttLockNewsletter: e.pttLockNewsletter,
                    pttOutOfChatBroadcast: e.pttOutOfChatBroadcast,
                    pttOutOfChatGroup: e.pttOutOfChatGroup,
                    pttOutOfChatIndividual: e.pttOutOfChatIndividual,
                    pttOutOfChatNewsletter: e.pttOutOfChatNewsletter,
                    pttPlaybackBroadcast: e.pttPlaybackBroadcast,
                    pttPlaybackGroup: e.pttPlaybackGroup,
                    pttPlaybackIndividual: e.pttPlaybackIndividual,
                    pttPlaybackNewsletter: e.pttPlaybackNewsletter,
                    pttRecordBroadcast: e.pttRecordBroadcast,
                    pttRecordGroup: e.pttRecordGroup,
                    pttRecordIndividual: e.pttRecordIndividual,
                    pttRecordNewsletter: e.pttRecordNewsletter,
                    pttSendBroadcast: e.pttSendBroadcast,
                    pttSendGroup: e.pttSendGroup,
                    pttSendIndividual: e.pttSendIndividual,
                    pttSendNewsletter: e.pttSendNewsletter,
                    pttPausedRecordBroadcast: e.pttPausedRecordBroadcast,
                    pttPausedRecordGroup: e.pttPausedRecordGroup,
                    pttPausedRecordIndividual: e.pttPausedRecordIndividual,
                    pttPausedRecordNewsletter: e.pttPausedRecordNewsletter
                });
                t.commit();
                R(e);
                new (o("WAWebCommunityTabActionWamEvent")).CommunityTabActionWamEvent({
                    communityTabGroupNavigations: e.communityTabGroupNavigations,
                    communityTabToHomeViews: e.communityTabToHomeViews,
                    communityTabViews: e.communityTabViews,
                    communityTabViewsViaContextMenu: e.communityTabViewsViaContextMenu
                }).commit();
                if (e.communityHome != null) {
                    Object.entries(e.communityHome).forEach(([t, n])=>{
                        const communityHomeId = r("WAWebWid").user(t);
                        if (communityHomeId != null) {
                            const { communityHomeGroupDiscoveries, communityHomeGroupJoins, communityHomeGroupNavigations, communityHomeViews } = n;
                            new (o("WAWebCommunityHomeActionWamEvent")).CommunityHomeActionWamEvent({
                                communityHomeId,
                                communityHomeGroupDiscoveries,
                                communityHomeGroupJoins,
                                communityHomeGroupNavigations,
                                communityHomeViews
                            }).commit();
                        }
                    });
                }
                if (e.pnhCagActions != null) {
                    Object.entries(e.pnhCagActions).forEach(([communityId, n])=>{
                        const { pnhIndicatorClicksChat, pnhIndicatorClicksInfoScreen, reactionDeleteCount, reactionOpenTrayCount } = n;
                        new (o("WAWebPnhDailyWamEvent")).PnhDailyWamEvent({
                            communityId,
                            pnhIndicatorClicksChat,
                            pnhIndicatorClicksInfoScreen,
                            reactionDeleteCount,
                            reactionOpenTrayCount,
                            typeOfGroup: o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.DEFAULT_SUBGROUP
                        }).commit();
                    });
                }
                const n = new (o("WAWebKeepInChatNotifWamEvent")).KeepInChatNotifWamEvent({
                    kicGroupNotificationTaps: e.kicGroupNotificationTaps,
                    kicGroupNotifications: e.kicGroupNotifications,
                    kicNotificationTaps: e.kicNotificationTaps,
                    kicNotifications: e.kicNotifications
                });
                n.commit();
                new (o("WAWebWaFsSingleEmojiMessageDailyWamEvent")).WaFsSingleEmojiMessageDailyWamEvent({
                    animatedEmojiSendCnt: e.animatedEmojiSend,
                    emojiReplyCount: e.emojiReply,
                    singleEmojiSendCnt: e.singleEmojiSend
                }).commit();
                if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                    new (o("WAWebAboutCreationDailyWamEvent")).AboutCreationDailyWamEvent({
                        aboutCreationStarted: e.aboutCreationStartedCount,
                        aboutCreationVisit: e.aboutCreationVisitCount,
                        aboutFailureCount: e.aboutFailureCount,
                        aboutSuccessCount: e.aboutSuccessCount
                    }).commit();
                    new (o("WAWebAboutConsumptionDailyWamEvent")).AboutConsumptionDailyWamEvent({
                        aboutChatBubbleTapCount: e.aboutChatBubbleTapCount,
                        aboutChatConsumptionCount: e.aboutChatConsumptionCount,
                        aboutMessageSendCount: e.aboutMessageSendCount
                    }).commit();
                }
                o("WAWebSubmitChatLockDailyStats").submitChatLockDailyStats(e);
            });
            new (o("WAWebWebDynamicSamplingTestEventWithoutSamplingWamEvent")).WebDynamicSamplingTestEventWithoutSamplingWamEvent().commit();
            new (o("WAWebWebDynamicSamplingTestEventWithSamplingWamEvent")).WebDynamicSamplingTestEventWithSamplingWamEvent().commit();
        });
        return k.apply(this, arguments);
    }
    function I() {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebBackendApi").frontendSendAndReceive("getDeviceInfo", undefined);
            return {
                languageCode: e.lg,
                locationCode: e.lc,
                osBuildNumber: e.osBuild,
                simMcc: parseInt(e.mcc, 10),
                simMnc: parseInt(e.mnc, 10)
            };
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ includeGroupComposition = false } = {}) {
            const h = [];
            h.push("con");
            h.push("id");
            h.push("ss");
            h.push("sk");
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                h.push("ch_jid");
            }
            h.push("st_lid");
            if (o("WAWebUserPrefsFavoritesLidMigration").isFavoritesMigrationComplete()) {
                h.push("fav");
            }
            if (o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete()) {
                h.push("cart");
            }
            if (o("WAWebUserPrefsLabelAssociationsLidMigration").isLabelAssociationsMigrationComplete()) {
                h.push("lab");
            }
            const y = o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").isPhoneNumberHidingThreadPromotionMigrationComplete();
            if (y) {
                h.push("pnh_lid");
            }
            if (o("WAWebBlocklistMigration").isBlocklistMigrated()) {
                h.push("bl_lid");
            }
            if (o("WAWebInactiveGroupLidMigration").isInactiveGroupLidMigrationComplete()) {
                h.push("inactg");
            }
            if (o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
                h.push("web_lid");
            }
            const C = yield o("WAWebSchemaChat").getChatTable().all();
            const b = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all();
            let v;
            let S;
            let R;
            let numberOfRegularPnChats;
            try {
                v = C.filter((e)=>{
                    const t = o("WAWebWidFactory").createWid(e.id);
                    return t.isRegularUser() && o("WAWebLidMigrationUtils").toLid(t) == null;
                });
                S = C.filter((e)=>{
                    const t = o("WAWebWidFactory").createWid(e.id);
                    return t.isRegularUser() && e.accountLid == null;
                });
                numberOfRegularPnChats = C.filter((e)=>o("WAWebWidFactory").createWid(e.id).isRegularUserPn()).length;
                if (o("WAWebCurrentUser").isEmployee()) {
                    const E = function(t) {
                        const r = o("WAWebWidFactory").createWid(t.id);
                        return `chat id: ${r.toLogString()}, account lid: ${t.accountLid == null ? "null" : o("WAWebWidFactory").createWid(t.accountLid).toLogString()}, mapping: ${o("WAWebLidMigrationUtils").toLid(r)?.toLogString() ?? "null"}`;
                    };
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "getLidMigrationStatus: PN chat without mapping: ",
                        ""
                    ])), v.slice(0, 5).map(E).join(","));
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "getLidMigrationStatus: chats without account_lid: ",
                        ""
                    ])), S.slice(0, 5).map(E).join(","));
                }
                if (r("justknobx")._("5315")) {
                    let numberOfPnhCtwaThreadsKnownMapping = 0;
                    let numberOfPnhCtwaThreadsMissingMapping = 0;
                    C.forEach((e)=>{
                        const t = o("WAWebWidFactory").createWid(e.id);
                        if (t.isLid() && e.lidOriginType === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) {
                            if (o("WAWebLidMigrationUtils").toPn(t) == null) {
                                numberOfPnhCtwaThreadsMissingMapping++;
                            } else {
                                numberOfPnhCtwaThreadsKnownMapping++;
                            }
                        }
                    });
                    R = {
                        numberOfPnhCtwaThreadsKnownMapping,
                        numberOfPnhCtwaThreadsMissingMapping
                    };
                    if (y && (numberOfPnhCtwaThreadsMissingMapping > 0 || numberOfPnhCtwaThreadsKnownMapping > 0)) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[getLidMigrationStatus] PNH->unmigrated miss=",
                            " known=",
                            ""
                        ])), numberOfPnhCtwaThreadsMissingMapping, numberOfPnhCtwaThreadsKnownMapping);
                        o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").setPhoneNumberHidingThreadPromotionMigrationState("unmigrated");
                    }
                }
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: ",
                    ""
                ])), error);
            }
            const lidMigrationSource = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.lidMigrationSource() === o("WAWebUserPrefsTypes").LidMigrationSource.HISTORY ? o("WAWebWamEnumLidMigrationSourceType").LID_MIGRATION_SOURCE_TYPE.HISTORY : o("WAWebWamEnumLidMigrationSourceType").LID_MIGRATION_SOURCE_TYPE.PEER;
            let numberOfPnGroups = 0;
            let numberOfLidGroups = 0;
            try {
                for (const $ of b){
                    if ($.isLidAddressingMode === true) {
                        numberOfLidGroups++;
                    } else {
                        numberOfPnGroups++;
                    }
                }
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "getLidMigrationStatus: numberOfPnGroups: ",
                        ""
                    ])), numberOfPnGroups);
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "getLidMigrationStatus: numberOfLidGroups: ",
                        ""
                    ])), numberOfLidGroups);
                }
            } catch (error) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: error counting groups: ",
                    ""
                ])), error);
            }
            const P = includeGroupComposition && o("WAWebABProps").getABPropConfigValue("lid_migration_daily_group_composition_enabled") ? yield N(b) : null;
            const M = babelHelpers.extends({
                completedMigrations: h.join(","),
                numberOfPnChatsWithoutMapping: v?.length ?? -1,
                numberOfUserChatsWithoutAccountLid: o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ? S?.length ?? -1 : undefined,
                lidMigrationSource,
                numberOfPnGroups,
                numberOfLidGroups
            }, R, {
                numberOfRegularPnChats
            });
            if (P != null) {
                M.numberOfPnOnlyGroups = P.numberOfPnOnlyGroups;
                M.numberOfLidOnlyGroups = P.numberOfLidOnlyGroups;
                M.numberOfMixedPnLidGroups = P.numberOfMixedPnLidGroups;
                M.numberOfCagGroups = P.numberOfCagGroups;
                M.numberOfCagLidGroups = P.numberOfCagLidGroups;
                M.numberOfPnOnlyGroupsNotMember = P.numberOfPnOnlyGroupsNotMember;
                M.numberOfPnOnlyGroupsNotMemberAllMapped = P.numberOfPnOnlyGroupsNotMemberAllMapped;
                M.numberOfPnOnlyGroupsNotMemberUnmappedContacts = P.numberOfPnOnlyGroupsNotMemberUnmappedContacts;
                M.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts = P.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts;
            }
            return M;
        });
        return x.apply(this, arguments);
    }
    function $() {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = new Set;
            const t = yield o("WAWebDBOutContactDatabaseApi").getAllOutContacts();
            for (const n of t){
                try {
                    e.add(o("WAWebWidFactory").createWid(n.id));
                } catch (e) {}
            }
            return e;
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                numberOfPnOnlyGroups: 0,
                numberOfLidOnlyGroups: 0,
                numberOfMixedPnLidGroups: 0,
                numberOfCagGroups: 0,
                numberOfCagLidGroups: 0,
                numberOfPnOnlyGroupsNotMember: 0,
                numberOfPnOnlyGroupsNotMemberAllMapped: 0,
                numberOfPnOnlyGroupsNotMemberUnmappedContacts: 0,
                numberOfPnOnlyGroupsNotMemberUnmappedOutContacts: 0
            };
            const n = new Map;
            yield o("WAWebSchemaParticipant").getParticipantTable().forEach((e)=>{
                n.set(e.groupId, e.participants);
            });
            const r = yield $();
            let a = 0;
            for (const i of e){
                try {
                    const s = n.get(i.id) ?? [];
                    A(t, i.defaultSubgroup === true, w(s), r);
                } catch (e) {
                    a++;
                }
            }
            if (a > 0) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupParticipantComposition: skipped ",
                    " group(s)"
                ])), a).sendLogs("group-composition-group-skipped");
            }
            return t;
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        let hasPnParticipant = false;
        let hasLidParticipant = false;
        let isCurrentUserMember = false;
        const unmappedPnWids = [];
        for (const i of e){
            const l = o("WAWebWidFactory").createWid(i);
            if (o("WAWebUserPrefsMeUser").isMeAccount(l)) {
                isCurrentUserMember = true;
            }
            if (l.isRegularUser()) {
                if (l.isLid()) {
                    hasLidParticipant = true;
                } else {
                    hasPnParticipant = true;
                    if (o("WAWebLidMigrationUtils").toLid(l) == null) {
                        unmappedPnWids.push(l);
                    }
                }
            }
        }
        return {
            hasPnParticipant,
            hasLidParticipant,
            isCurrentUserMember,
            unmappedPnWids
        };
    }
    function A(e, t, n, r) {
        const { hasLidParticipant, hasPnParticipant, isCurrentUserMember } = n;
        if (t) {
            if (hasPnParticipant) {
                e.numberOfCagGroups++;
            } else if (hasLidParticipant) {
                e.numberOfCagLidGroups++;
            }
            return;
        }
        if (hasPnParticipant && hasLidParticipant) {
            e.numberOfMixedPnLidGroups++;
            return;
        }
        if (hasLidParticipant) {
            e.numberOfLidOnlyGroups++;
            return;
        }
        if (hasPnParticipant) {
            e.numberOfPnOnlyGroups++;
            if (!isCurrentUserMember) {
                F(e, n, r);
            }
        }
    }
    function F(e, t, n) {
        e.numberOfPnOnlyGroupsNotMember++;
        const t_unmappedPnWids = t.unmappedPnWids;
        if (t_unmappedPnWids.length === 0) {
            e.numberOfPnOnlyGroupsNotMemberAllMapped++;
        } else if (t_unmappedPnWids.some((e)=>n.has(e))) {
            e.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts++;
        } else {
            e.numberOfPnOnlyGroupsNotMemberUnmappedContacts++;
        }
    }
    function O() {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "getPrivacySettings"
            ])));
            const a = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
            const i = {
                receiptsEnabled: a.readReceipts !== "none"
            };
            const l = yield o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
            i.privacySettingsAbout = W(a.about);
            i.privacySettingsAboutExceptNum = a.about === "contact_blacklist" ? q(l.about?.disallowedList.length) : null;
            i.privacySettingsGroups = W(a.groupAdd);
            i.privacySettingsGroupsExceptNum = a.groupAdd === "contact_blacklist" ? q(l.groupadd?.disallowedList.length) : null;
            i.privacySettingsLastSeen = W(a.lastSeen);
            i.privacySettingsLastSeenExceptNum = a.lastSeen === "contact_blacklist" ? q(l.last?.disallowedList.length) : null;
            i.privacySettingsProfilePhoto = W(a.profilePicture);
            i.privacySettingsProfilePhotoExceptNum = a.profilePicture === "contact_blacklist" ? q(l.profile?.disallowedList.length) : null;
            const s = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(o("WAWebContactCollection").ContactCollection.getMeContact());
            i.defaultDisappearingDuration = s ?? 0;
            const u = s != null && o("WAWebAfterReadUtils").isAfterReadDuration(s) && o("WAWebAfterReadUtils").isAfterReadEnabled();
            i.defaultAfterReadEnabled = u;
            i.defaultAfterReadDuration = u ? s : undefined;
            if (u) {
                i.defaultDisappearingDuration = 0;
            }
            i.defenseMode = U(a.defenseMode);
            i.isDefaultDisappearingMessagingUser = i.defaultDisappearingDuration !== 0;
            const c = yield o("WAWebApiPrivacyEphemerality").queryEphemeralityDailyLogInfo();
            const { countEphemeralThreads, countEphemeralThreadsEnabledByMe, isEphemeralMessagingUser } = c;
            i.isEphemeralMessagingUser = isEphemeralMessagingUser;
            i.countEphemeralThreads = countEphemeralThreads;
            i.countEphemeralThreadsEnabledByMe = countEphemeralThreadsEnabledByMe;
            return i;
        });
        return B.apply(this, arguments);
    }
    function W(e) {
        if (e == null) {
            return null;
        }
        if (e === "all") {
            return o("WAWebWamEnumPrivacySettingsValueType").PRIVACY_SETTINGS_VALUE_TYPE.EVERYONE;
        }
        if (e === "contacts") {
            return o("WAWebWamEnumPrivacySettingsValueType").PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS;
        }
        if (e === "contact_blacklist") {
            return o("WAWebWamEnumPrivacySettingsValueType").PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS_EXCEPT;
        }
        if (e === "none") {
            return o("WAWebWamEnumPrivacySettingsValueType").PRIVACY_SETTINGS_VALUE_TYPE.NOBODY;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function q(e) {
        if (e == null) {
            return null;
        }
        if (e === 0) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B0;
        }
        if (e < 5) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B1;
        }
        if (e < 10) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B5;
        }
        if (e < 15) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B10;
        }
        if (e < 20) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B15;
        }
        if (e < 30) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B20;
        }
        if (e < 40) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B30;
        }
        if (e < 50) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B40;
        }
        if (e < 60) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B50;
        }
        if (e < 70) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B60;
        }
        if (e < 80) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B70;
        }
        if (e < 90) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B80;
        }
        if (e < 100) {
            return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B90;
        }
        return o("WAWebWamEnumPrivacySettingsContactsBuckets").PRIVACY_SETTINGS_CONTACTS_BUCKETS.B100;
    }
    function U(defenseMode) {
        if (defenseMode == null) {
            return -1;
        }
        switch(defenseMode){
            case "off":
                return 0;
            case "on_standard":
                return 1;
        }
    }
    function V() {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("WAWebLidAwareContactsDB").equals([
                "isAddressBookContact"
            ], 1).then((e)=>r("countWhere")(e, function(e) {
                    return !r("WAWebWid").isStringLid(e.id);
                }));
            const t = o("WAStorageEstimator").estimateStorage();
            const a = o("WAWebMediaStore").LruMediaStore.count();
            const i = r("WAWebLidAwareContactsDB").count();
            const length = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {}).length;
            const s = yield (y || (y = n("Promise"))).all([
                t,
                e,
                a,
                i
            ]);
            const u = s[0];
            const c = s[1];
            const mediaFolderFileCount = s[2];
            const m = s[3];
            let p = 0;
            let _ = 0;
            let f = 0;
            if (u.success) {
                const g = u.value;
                const { quota, usage } = g;
                p = quota - usage;
                _ = quota;
                f = usage;
            }
            return {
                addressbookWhatsappSize: X(c, 10),
                storageAvailSize: X(p, 100),
                storageTotalSize: X(_, 100),
                storageUsed: X(f, 100),
                mediaFolderFileCount,
                webcContactsTableSize: X(m, 10),
                webcFilteredContactsSize: length
            };
        });
        return H.apply(this, arguments);
    }
    function G() {
        return o("WAWebEstimateFtsStorageApi").getEstimatedFTSDbSize();
    }
    function z() {
        let UNKNOWN = o("WAWebWamEnumNotificationSettingType").NOTIFICATION_SETTING_TYPE.UNKNOWN;
        if (window.Notification != null) {
            switch(window.Notification.permission){
                case o("WAWebNotificationConstants").PERMISSION_ALLOWED:
                    UNKNOWN = o("WAWebWamEnumNotificationSettingType").NOTIFICATION_SETTING_TYPE.ALLOWED;
                    break;
                case o("WAWebNotificationConstants").PERMISSION_DENIED:
                    UNKNOWN = o("WAWebWamEnumNotificationSettingType").NOTIFICATION_SETTING_TYPE.BLOCKED;
                    break;
                default:
                    UNKNOWN = o("WAWebWamEnumNotificationSettingType").NOTIFICATION_SETTING_TYPE.UNKNOWN;
            }
        }
        let isContactSyncToOsDefaultOn;
        if (o("WAWebContactManagementGating").contactManagementEnabled()) {
            isContactSyncToOsDefaultOn = o("WAWebUserPrefsContactManagement").getSyncToAddressbookDefaultSetting();
        }
        return {
            osNotificationSetting: UNKNOWN,
            isContactSyncToOsDefaultOn
        };
    }
    function j() {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = [];
            const t = [];
            const mediaCapabilities = window.navigator.mediaCapabilities;
            if (mediaCapabilities != null) {
                const r = {
                    width: 800,
                    height: 600,
                    bitrate: 10000,
                    framerate: 30
                };
                const o = {
                    type: "record"
                };
                const a = {
                    type: "file"
                };
                const i = {
                    contentType: 'video/mp4; codecs="avc1.42000a"'
                };
                const l = {
                    contentType: 'video/mp4; codecs="hev1.1.6.L93.B0"'
                };
                const s = {
                    contentType: 'video/mp4; codecs="av01.0.00M.08"'
                };
                const u = {
                    contentType: 'video/mp4; codecs="vp09.00.51.08.01.01.01.01.00"'
                };
                const c = babelHelpers.extends({}, o, {
                    video: babelHelpers.extends({}, i, r)
                });
                const d = babelHelpers.extends({}, o, {
                    video: babelHelpers.extends({}, l, r)
                });
                const m = babelHelpers.extends({}, o, {
                    video: babelHelpers.extends({}, s, r)
                });
                const p = babelHelpers.extends({}, o, {
                    video: babelHelpers.extends({}, u, r)
                });
                const _ = babelHelpers.extends({}, a, {
                    video: babelHelpers.extends({}, i, r)
                });
                const f = babelHelpers.extends({}, a, {
                    video: babelHelpers.extends({}, l, r)
                });
                const g = babelHelpers.extends({}, a, {
                    video: babelHelpers.extends({}, s, r)
                });
                const h = babelHelpers.extends({}, a, {
                    video: babelHelpers.extends({}, u, r)
                });
                if (mediaCapabilities.encodingInfo != null) {
                    try {
                        if ((yield mediaCapabilities.encodingInfo(c)).supported) {
                            e.push("avc");
                        }
                    } catch (e) {}
                    try {
                        if ((yield mediaCapabilities.encodingInfo(d)).supported) {
                            e.push("hevc");
                        }
                    } catch (e) {}
                    try {
                        if ((yield mediaCapabilities.encodingInfo(m)).supported) {
                            e.push("av1");
                        }
                    } catch (e) {}
                    try {
                        if ((yield mediaCapabilities.encodingInfo(p)).supported) {
                            e.push("vp9");
                        }
                    } catch (e) {}
                }
                if (mediaCapabilities.decodingInfo != null) {
                    try {
                        if ((yield mediaCapabilities.decodingInfo(_)).supported) {
                            t.push("avc");
                        }
                    } catch (e) {}
                    try {
                        if ((yield mediaCapabilities.decodingInfo(f)).supported) {
                            t.push("hevc");
                        }
                    } catch (e) {}
                    try {
                        if ((yield mediaCapabilities.decodingInfo(g)).supported) {
                            t.push("av1");
                        }
                    } catch (e) {}
                    try {
                        if ((yield mediaCapabilities.decodingInfo(h)).supported) {
                            t.push("vp9");
                        }
                    } catch (e) {}
                }
            }
            return {
                supportedEncoders: e.join(","),
                supportedDecoders: t.join(",")
            };
        });
        return K.apply(this, arguments);
    }
    function Q() {
        return {
            screenAutoLockDuration: o("WAWebUserPrefsScreenLock").getScreenLockDurationForLogging()
        };
    }
    function X(e, t) {
        if (r("gkx")("26258")) {
            return Math.round(e / t) * t;
        }
        return e;
    }
    function Y() {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (y || (y = n("Promise"))).all([
                o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin()
            ]);
            const hasUsername = e[0];
            const hasUsernamePin = e[1];
            const a = o("WAWebUserPrefsUsername").getUsernameState();
            let usernameState;
            if (a === "ACTIVE") {
                usernameState = o("WAWebWamEnumUsernameState").USERNAME_STATE.ACTIVATED;
            } else if (a === "RESERVED") {
                usernameState = o("WAWebWamEnumUsernameState").USERNAME_STATE.RESERVED;
            }
            return {
                hasUsername,
                hasUsernamePin,
                usernameState
            };
        });
        return J.apply(this, arguments);
    }
    function Z() {
        return ee.apply(this, arguments);
    }
    function ee() {
        ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = new Set;
            let usernameOnlyContactsSize = 0;
            const n = new Set;
            let contactsRequiringSyncBeforeDisplaySize = 0;
            const i = yield r("WAWebLidAwareContactsDB").all();
            const l = i.filter((e)=>r("WAWebWid").isStringLid(e.id));
            for (const s of l){
                const u = o("WAWebWidFactory").createUserLidOrThrow(s.id);
                const c = o("WAWebApiContact").getLatestLid(u);
                if (c != null && !u.equals(c)) {
                    e.add(s.id);
                }
                if (s.isUsernameContact === true && !e.has(s.id)) {
                    usernameOnlyContactsSize++;
                }
                if (!r("isStringNullOrEmpty")(s.phoneNumber) && o("WAWebUsernameTypes").isPresentUsername(s.username)) {
                    n.add(r("nullthrows")(s.phoneNumber));
                }
                if (s.isContactSyncCompleted === 0) {
                    contactsRequiringSyncBeforeDisplaySize++;
                }
            }
            return {
                usernameOnlyContactsSize,
                deprecatedContactsSize: e.size,
                uniquePhoneNumberContactsSizeWithUsername: n.size,
                contactsRequiringSyncBeforeDisplaySize
            };
        });
        return ee.apply(this, arguments);
    }
    l.logDailyStats = E;
    l.getLidMigrationStatus = D;
    l.classifyGroupParticipants = w;
    l.tallyNonMemberPnOnlyGroup = F;
}, 98);