__d("WAWebNotificationsNewsletterMetadataUpdateNotification", [
    "fbt",
    "WATimeUtils",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebFbtIntlList",
    "WAWebInfoFlowStep",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebParticipantListUtils",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.updates = t.updates;
            n.user = t.user;
            n.chat = t.chat;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.buildKey = function() {
            return `newslowner:${this.chat.id.toString()}:${this.user.toString()}:${o("WATimeUtils").unixTime().toString()}`;
        };
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
        t_prototype.getBannerOptions = function() {
            const e = this;
            const t = this.updates.some(({ item })=>item === "reaction_setting") ? o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings : o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo;
            return {
                wid: this.chat.id,
                title: this.chat.name,
                body: this.getNotificationBody(),
                onClick: function() {
                    o("WAWebCmd").Cmd.openNewsletterProfile(e.chat, t);
                }
            };
        };
        t_prototype.getNotificationBody = function() {
            const e = this.getActor();
            return c(e, this.updates).toString();
        };
        t_prototype.getActor = function() {
            const e = o("WAWebContactCollection").ContactCollection.get(this.user);
            if (e != null) {
                return o("WAWebParticipantListUtils").getFirstNameForContact(e);
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
            return t.equals(this.chat);
        };
        t_prototype.getChatKind = function() {
            return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
        };
        return t;
    })(o("WAWebBaseNotification").WABaseNotification);
    function u(item) {
        switch(item){
            case "name":
                return s._("name");
            case "description":
                return s._("description");
            case "profile_picture":
                return s._("profile picture");
            case "reaction_setting":
                return s._("reaction settings");
        }
    }
    function c(e, updates) {
        if (updates.length === 1 && updates[0].item === "name") {
            const n = updates[0].value;
            return s._("{actor} changed the channel name to \"{updateValue}\".", [
                s._param("actor", e),
                s._param("updateValue", n)
            ]);
        }
        const o = updates.map(({ item })=>u(item));
        const a = r("WAWebFbtIntlList")(o, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
        return s._("{actor} changed the channel {update}.", [
            s._param("actor", e),
            s._param("update", a.toString())
        ]);
    }
    l.WANewsletterMetadataUpdateNotification = e;
}, 226);