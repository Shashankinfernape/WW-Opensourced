__d("WAWebNotificationsCallNotification", [
    "fbt",
    "Promise",
    "WAWebABProps",
    "WAWebBaseNotification",
    "WAWebCallNotificationActions",
    "WAWebCallRingtone",
    "WAWebChatCollection",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationTone",
    "WAWebParticipantListUtils",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUA",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallEmoji",
    "WAWebVoipCallsTabOpenCallInfo",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWid",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "bx",
    "fbs"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = r("bx").getURL(r("bx")("9555"));
    const c = new Map;
    function d(e) {
        const t = e.wid.toString();
        const n = c.get(t);
        if (n != null && n !== e.msgId) {
            o("WAWebNotificationController").WANotificationController.closeOrCancelNotification(`call:${t}`);
            h(n);
        }
        c.set(t, e.msgId);
        g(e.msgId);
        return o("WAWebNotificationController").WANotificationController.triggerNotification(new _(e));
    }
    function m(e) {
        if (e) {
            o("WAWebNotificationController").WANotificationController.closeOrCancelNotification(`call:${e.toString()}`);
        }
        o("WAWebCallRingtone").stopCallRingtone();
    }
    function p(e, t) {
        if (e) {
            const n = e.toString();
            const r = c.get(n);
            if (t != null && r != null && t !== r) {
                return;
            }
            o("WAWebNotificationController").WANotificationController.closeOrCancelNotification(`call:${n}`);
            if (r != null) {
                h(r);
                c.delete(n);
            }
        }
        o("WAWebCallRingtone").stopCallRingtone();
    }
    var _ = ((e)=>{
        function t({ groupCallParticipants, groupJid, isGroup, isSilenced, isVideo, msgId, wid }) {
            let n;
            n = e.call(this) || this;
            n.closeBanner = function() {
                o("WAWebCallRingtone").stopCallRingtone();
                e.prototype.closeBanner.call(n);
            };
            n.wid = wid;
            n.msgId = msgId;
            n.isVideo = isVideo;
            n.isGroup = isGroup;
            n.isSilenced = isSilenced;
            n.groupJid = groupJid ?? null;
            n.groupCallParticipants = groupCallParticipants ?? null;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(t) {
            if (!this.wid || !this.msgId || this.isSilenced) {
                return r("WAWebNotificationMuteReason").GlobalMute;
            }
            const i = this.groupJid ?? o("WAWebChatCollection").ChatCollection.getLatestChatForWid(this.wid)?.id ?? this.wid;
            const l = o("WAWebMuteCollection").MuteCollection.get(i);
            if (l != null && o("WAWebMuteGetters").getIsCallMuted(l)) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            return null;
        };
        t_prototype.buildKey = function() {
            return `call:${this.wid.toString()}`;
        };
        t_prototype.matchesChat = function(t) {
            return r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(this.wid, t.id));
        };
        t_prototype.getChatKind = function() {
            if (this.isGroup) {
                return o("WAWebChatFlowTypes").ChatKindType.Group;
            }
            return o("WAWebChatFlowTypes").ChatKindType.Chat;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return R({
                    abortSignal: this.abortController.signal,
                    groupCallParticipants: this.groupCallParticipants,
                    groupJid: this.groupJid,
                    isGroup: this.isGroup,
                    wid: this.wid
                });
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const e = o("WAWebContactCollection").ContactCollection.get(this.wid);
            const t = e ? o("WAWebFrontendContactGetters").getFormattedName(e) : o("WAWebWidFormat").widToFormattedUser(this.wid);
            if (this.isGroup && o("WAWebVoipGatingUtils").isCallingEnabled()) {
                return this.$WACallNotification$p_1(t);
            }
            let n = r("fbs")._("Incoming call, check your phone to answer").toString();
            if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
                n = v(this.isVideo, false) + (this.isVideo ? r("fbs")._("Incoming video call").toString() : r("fbs")._("Incoming voice call").toString());
            }
            return babelHelpers.extends({
                wid: this.wid,
                msgId: this.msgId,
                tag: this.msgId,
                title: t,
                body: n,
                requireInteraction: o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled()
            }, this.$WACallNotification$p_2());
        };
        t_prototype.$WACallNotification$p_2 = function() {
            if (f()) {
                return {
                    showViaServiceWorker: true,
                    data: {
                        callId: this.msgId
                    },
                    actions: [
                        {
                            action: o("WAWebCallNotificationActions").ACCEPT_CALL_ACTION,
                            title: r("fbs")._("Accept").toString()
                        },
                        {
                            action: o("WAWebCallNotificationActions").DECLINE_CALL_ACTION,
                            title: r("fbs")._("Decline").toString()
                        }
                    ]
                };
            }
            return {};
        };
        t_prototype.$WACallNotification$p_1 = function(t) {
            const n = S(this.groupJid, this.groupCallParticipants).toString();
            const r = v(this.isVideo, false) + (this.isVideo ? s._("Incoming video call from {caller_name}", [
                s._param("caller_name", t)
            ]).toString() : s._("Incoming voice call from {caller_name}", [
                s._param("caller_name", t)
            ]).toString());
            return babelHelpers.extends({
                wid: this.groupJid ?? this.wid,
                msgId: this.msgId,
                tag: this.msgId,
                title: n,
                body: r,
                requireInteraction: o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled()
            }, this.$WACallNotification$p_2());
        };
        t_prototype.shouldShowBanner = function() {
            if (o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() || o("WAWebNotificationHelpers").appIsActive() && !o("WAWebVoipGatingUtils").isCallingEnabled() || !e.prototype.shouldShowBanner.call(this)) {
                return false;
            }
            return o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications() && o("WAWebVoipGatingUtils").isWebCallingUiEnabled();
        };
        t_prototype.shouldPlaySound = function() {
            if (e.prototype.shouldPlaySound.call(this)) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone() && o("WAWebVoipGatingUtils").isWebCallingUiEnabled();
            }
            return false;
        };
        t_prototype.playsSoundBeforeBanner = function() {
            return true;
        };
        t_prototype.playSound = function() {
            if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
                o("WAWebCallRingtone").playCallRingtone();
            } else {
                o("WAWebNotificationTone").playNotification();
            }
        };
        t_prototype.afterBannerShown = function(n) {
            const t = this;
            e.prototype.afterBannerShown.call(this, n);
            n.waitForClose().then(()=>{
                const e = c.get(t.wid.toString());
                if (e == null || e === t.msgId) {
                    o("WAWebCallRingtone").stopCallRingtone();
                }
            });
        };
        t_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: this.isVideo ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.INCOMING_VIDEO_CALL : o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.INCOMING_VOICE_CALL
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function f() {
        return o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled() && o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions(2) && navigator.serviceWorker?.controller != null;
    }
    function g(msgId) {
        const navigator_serviceWorker = navigator.serviceWorker;
        if (navigator_serviceWorker != null && navigator_serviceWorker.controller) {
            r("WAWebSWBus").request(navigator_serviceWorker.controller, r("WAWebSWBusActions").HANDLE_CALL_NOTIFICATION, {
                callId: msgId
            }).catch(r("WAWebNoop"));
        }
    }
    function h(e) {
        const navigator_serviceWorker = navigator.serviceWorker;
        if (navigator_serviceWorker != null && navigator_serviceWorker.controller) {
            r("WAWebSWBus").request(navigator_serviceWorker.controller, r("WAWebSWBusActions").CLEAR_CALL_NOTIFICATION, {
                callId: e
            }).catch(r("WAWebNoop"));
        }
    }
    const y = ((e)=>{
        function t({ groupCallParticipants, groupJid, isGroup, isVideo, msgId, wid }) {
            let n;
            n = e.call(this) || this;
            n.$WAMissedCallNotification$p_1 = function() {
                o("WAWebVoipCallsTabOpenCallInfo").openVoipCallsTabCallInfo(n.msgId);
            };
            n.wid = wid;
            n.msgId = msgId;
            n.isVideo = isVideo;
            n.isGroup = isGroup;
            n.groupJid = groupJid ?? null;
            n.groupCallParticipants = groupCallParticipants ?? null;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldMute = function(t) {
            if (!this.wid || !this.msgId) {
                return r("WAWebNotificationMuteReason").GlobalMute;
            }
            const i = this.groupJid ?? o("WAWebChatCollection").ChatCollection.getLatestChatForWid(this.wid)?.id ?? this.wid;
            const l = o("WAWebMuteCollection").MuteCollection.get(i);
            if (l != null && o("WAWebMuteGetters").getIsCallMuted(l)) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            return null;
        };
        t_prototype.buildKey = function() {
            return `missed_call:${this.wid.toString()}`;
        };
        t_prototype.matchesChat = function(t) {
            return r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(this.wid, t.id));
        };
        t_prototype.getChatKind = function() {
            if (this.isGroup) {
                return o("WAWebChatFlowTypes").ChatKindType.Group;
            }
            return o("WAWebChatFlowTypes").ChatKindType.Chat;
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return R({
                    abortSignal: this.abortController.signal,
                    groupCallParticipants: this.groupCallParticipants,
                    groupJid: this.groupJid,
                    isGroup: this.isGroup,
                    wid: this.wid
                });
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const e = o("WAWebContactCollection").ContactCollection.get(this.wid);
            const t = e ? o("WAWebFrontendContactGetters").getFormattedName(e) : o("WAWebWidFormat").widToFormattedUser(this.wid);
            if (this.isGroup) {
                const a = S(this.groupJid, this.groupCallParticipants).toString();
                const i = v(this.isVideo, true) + (this.isVideo ? s._("Missed video call from {caller_name}", [
                    s._param("caller_name", t)
                ]).toString() : s._("Missed voice call from {caller_name}", [
                    s._param("caller_name", t)
                ]).toString());
                return {
                    wid: this.groupJid ?? this.wid,
                    msgId: this.msgId,
                    tag: `missed_${this.msgId}`,
                    title: a,
                    body: i,
                    doNotOpenChat: true,
                    onClick: this.$WAMissedCallNotification$p_1
                };
            }
            const l = v(this.isVideo, true) + (this.isVideo ? r("fbs")._("Missed video call").toString() : r("fbs")._("Missed voice call").toString());
            return {
                wid: this.wid,
                msgId: this.msgId,
                tag: `missed_${this.msgId}`,
                title: t,
                body: l,
                doNotOpenChat: true,
                onClick: this.$WAMissedCallNotification$p_1
            };
        };
        t_prototype.shouldShowBanner = function() {
            if (e.prototype.shouldShowBanner.call(this)) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications();
            }
            return false;
        };
        t_prototype.shouldPlaySound = function() {
            if (e.prototype.shouldPlaySound.call(this)) {
                return o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications();
            }
            return false;
        };
        t_prototype.playSound = function() {
            o("WAWebNotificationTone").playNotification();
        };
        t_prototype.getNotificationDeliveryWamEventData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return {
                    uiNotificationType: this.isVideo ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.MISSED_VIDEO_CALL : o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM.MISSED_VOICE_CALL
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function C(e) {
        return o("WAWebNotificationController").WANotificationController.triggerNotification(new y(e));
    }
    function b() {
        if (o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled()) {
            o("WAWebNotificationIconUtils").preloadWhatsAppBadge();
        }
    }
    function v(isVideo, t) {
        if (!o("WAWebUA").UA.hasEmoji || !o("WAWebABProps").getABPropConfigValue("wa_web_calling_notification_icons_enabled")) {
            return "";
        }
        return `${o("WAWebVoipCallEmoji").getCallEmoji(isVideo, t)} `;
    }
    function S(groupJid, groupCallParticipants) {
        if (groupJid != null) {
            const n = r("WAWebGroupMetadataCollection").get(groupJid);
            if (n?.subject != null && n.subject !== "") {
                return n.subject;
            }
        }
        const a = groupCallParticipants?.filter(function(e) {
            return !o("WAWebUserPrefsMeUser").isMeAccount(e);
        });
        if (a != null && a.length > 0) {
            return o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(a, true);
        }
        return r("fbs")._("Group call");
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled()) {
                return E(e);
            }
            const t = Date.now() + o("WAWebNotificationIconUtils").NOTIFICATION_ICON_TIMEOUT_MS;
            const n = yield E(e);
            return o("WAWebNotificationIconUtils").addWhatsAppBadgeToIcon(n, t - Date.now());
        });
        return L.apply(this, arguments);
    }
    function E({ abortSignal, groupCallParticipants, groupJid, isGroup, wid }) {
        if (isGroup) {
            if (groupJid != null) {
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(groupJid, abortSignal, u);
            }
            const c = groupCallParticipants?.[0];
            if (c != null) {
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(c, abortSignal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
            }
            return (e || (e = n("Promise"))).resolve(u);
        }
        return o("WAWebNotificationIconUtils").getNotificationIconByWid(wid, abortSignal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
    }
    l.showCallNotification = d;
    l.silenceCallNotification = m;
    l.cancelCallNotification = p;
    l.showMissedCallNotification = C;
    l.preloadCallNotificationBadge = b;
}, 226);