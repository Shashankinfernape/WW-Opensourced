__d("WAWebNotificationsChatAssignmentNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConnModel",
    "WAWebFrontendChatGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t({ assignmentTimestamps, chats }) {
            let a;
            a = e.call(this) || this;
            a.$WAWebNotificationsChatAssignmentNotification$p_1 = function() {};
            a.chats = chats.map((e)=>o("WAWebChatCollection").ChatCollection.get(e)).filter((e)=>e != null);
            a.primaryChat = r("nullthrows")(a.chats[0]);
            a.assignmentTimestamps = assignmentTimestamps;
            a.businessName = o("WAWebConnModel").Conn.pushname ?? s._("Admin").toString();
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldPlaySound = function() {
            if (e.prototype.shouldPlaySound.call(this)) {
                return o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.primaryChat);
            }
            return false;
        };
        t_prototype.shouldShowBanner = function() {
            if (e.prototype.shouldShowBanner.call(this)) {
                return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(this.primaryChat);
            }
            return false;
        };
        t_prototype.shouldMute = function(t) {
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)) {
                return r("WAWebNotificationMuteReason").AppState;
            }
            if (this.chats.every((e)=>e && o("WAWebMuteGetters").getIsMuted(e.mute))) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            if (this.chats.every((e)=>e?.archive)) {
                return r("WAWebNotificationMuteReason").ArchivedChat;
            }
            if (o("WAWebNotificationHelpers").isOfflineResumeInProgress()) {
                return r("WAWebNotificationMuteReason").OfflineResumeInProgress;
            }
            return null;
        };
        t_prototype.buildKey = function() {
            return `chat_assignment:${this.chats.map((e)=>{
                if (e == null) {
                    return undefined;
                }
                return e.id.toString();
            }).join("-")}${this.assignmentTimestamps}`;
        };
        t_prototype.matchesChat = function(t) {
            if (this.chats.length > 1) {
                return false;
            }
            return this.primaryChat.equals(t);
        };
        t_prototype.getChatKind = function() {
            return o("WAWebFrontendChatGetters").getKind(this.primaryChat);
        };
        t_prototype.performLogging = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getNotificationIconByWid(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), this.abortController.signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getBannerOptions = function() {
            const body = o("WAWebGetNotificationStrings").getNotificationBody(babelHelpers.extends({}, u(this.primaryChat, this.businessName, this.chats.length)));
            return {
                wid: this.primaryChat.id,
                title: this.businessName,
                body,
                onClick: this.$WAWebNotificationsChatAssignmentNotification$p_1
            };
        };
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function u(primaryChat, businessName, n) {
        let r;
        if (n === 1) {
            if (o("WAWebChatGetters").getIsGroup(primaryChat)) {
                r = s._("{businessName} assigned you to chat with the group {chatName}", [
                    s._param("businessName", businessName),
                    s._param("chatName", primaryChat.formattedTitle)
                ]);
            } else {
                r = s._("{businessName} assigned you a chat with {chatName}", [
                    s._param("businessName", businessName),
                    s._param("chatName", primaryChat.formattedTitle)
                ]);
            }
        } else {
            r = s._("{businessNme} assigned you {numberOfChats}", [
                s._param("businessNme", businessName),
                s._param("numberOfChats", n)
            ]);
        }
        return {
            body: r.toString()
        };
    }
    l.WAWebNotificationsChatAssignmentNotification = e;
}, 226);