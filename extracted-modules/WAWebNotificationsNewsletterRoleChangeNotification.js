__d("WAWebNotificationsNewsletterRoleChangeNotification", [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebParticipantListUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.mode = t.mode;
            n.admin = t.admin;
            n.user = t.user;
            n.chat = t.chat;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.shouldPlaySound = function() {
            if (e.prototype.shouldPlaySound.call(this)) {
                return o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat);
            }
            return false;
        };
        t_prototype.shouldShowBanner = function() {
            if (e.prototype.shouldShowBanner.call(this)) {
                return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(this.chat);
            }
            return false;
        };
        t_prototype.buildKey = function() {
            return `newsladmin:${this.chat.id.toString()}:${this.mode}:${this.user.toString()}`;
        };
        t_prototype.getBannerOptions = function() {
            const e = this.getNotificationUser();
            const t = o("WAWebUserPrefsMeUser").isMeAccount(this.user);
            return {
                wid: this.chat.id,
                title: this.chat.name,
                body: u[this.mode](e, t).toString()
            };
        };
        t_prototype.getNotificationUser = function() {
            const e = this.mode === "ownership" ? this.admin : this.user;
            if (e == null) {
                return null;
            }
            const t = o("WAWebContactCollection").ContactCollection.get(e);
            if (t != null) {
                return o("WAWebParticipantListUtils").getFirstNameForContact(t);
            }
            return o("WAWebWidFormat").widToFormattedUser(this.user);
        };
        t_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(this.chat, this.abortController.signal);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.matchesChat = function(t) {
            return this.chat.equals(t);
        };
        t_prototype.getChatKind = function() {
            return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
        };
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    var u = {
        promote: function(t, n) {
            if (n) {
                return s._("You are now an admin.");
            }
            return s._("{who} is now an admin.", [
                s._param("who", t)
            ]);
        },
        demote: function(t, n) {
            if (n) {
                return s._("You are no longer an admin.");
            }
            return s._("{who} is no longer an admin.", [
                s._param("who", t)
            ]);
        },
        ownership: function(t) {
            if (t == null) {
                return s._("You are now the channel owner.");
            }
            return s._("{who} made you the channel owner.", [
                s._param("who", t)
            ]);
        }
    };
    l.WANewsletterRoleChangeNotification = e;
}, 226);