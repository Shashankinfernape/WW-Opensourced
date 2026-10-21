__d("WAWebContactModel", [
    "WALogger",
    "WAWebApiContact",
    "WAWebBaseModel",
    "WAWebBizBotProfileUtils",
    "WAWebBizBusinessChangeAction",
    "WAWebBizLabelUtils",
    "WAWebBotBaseGating",
    "WAWebBusinessProfileCollection",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactBlocklistUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactSearchMatcher",
    "WAWebContactShortName",
    "WAWebContactTextStatusExpiry",
    "WAWebFrontendContactGetters",
    "WAWebInitializeBotContact",
    "WAWebL10N",
    "WAWebOptOutListCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.name = o("WAWebBaseModel").prop();
            e.shortName = o("WAWebBaseModel").prop();
            e.pushname = o("WAWebBaseModel").prop();
            e.type = o("WAWebBaseModel").prop("in");
            e.isDeactivated = o("WAWebBaseModel").prop(false);
            e.verifiedName = o("WAWebBaseModel").prop();
            e.isBusiness = o("WAWebBaseModel").prop();
            e.isEnterprise = o("WAWebBaseModel").prop();
            e.isSmb = o("WAWebBaseModel").prop();
            e.verifiedLevel = o("WAWebBaseModel").prop();
            e.privacyMode = o("WAWebBaseModel").prop();
            e.statusMute = o("WAWebBaseModel").prop();
            e.parentStatusMute = o("WAWebBaseModel").prop();
            e.sectionHeader = o("WAWebBaseModel").prop();
            e.labels = o("WAWebBaseModel").prop();
            e.isContactSyncCompleted = o("WAWebBaseModel").prop();
            e.forcedBusinessUpdateFromServer = o("WAWebBaseModel").prop();
            e.disappearingModeDuration = o("WAWebBaseModel").prop();
            e.disappearingModeSettingTimestamp = o("WAWebBaseModel").prop();
            e.isEphemeralityDisabled = o("WAWebBaseModel").prop();
            e.textStatusString = o("WAWebBaseModel").prop();
            e.textStatusEmoji = o("WAWebBaseModel").prop();
            e.textStatusEphemeralDuration = o("WAWebBaseModel").prop();
            e.textStatusLastUpdateTime = o("WAWebBaseModel").prop(o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED);
            e.textStatusExpiryTs = o("WAWebBaseModel").prop();
            e.requestedPnTimestamp = o("WAWebBaseModel").prop();
            e.username = o("WAWebBaseModel").prop();
            e.usernameKey = o("WAWebBaseModel").prop();
            e.usernameCountryCode = o("WAWebBaseModel").prop();
            e.isUsernameContact = o("WAWebBaseModel").prop(false);
            e.externalUserState = o("WAWebBaseModel").prop();
            e.syncToAddressbook = o("WAWebBaseModel").prop(false);
            e.isContactBlocked = o("WAWebBaseModel").session(false);
            e.isContactOptedOut = o("WAWebBaseModel").session(false);
            e.isEverOptedOutOfMarketingMessages = o("WAWebBaseModel").session(false);
            e.isMarketingMessageThread = o("WAWebBaseModel").session(false);
            e.pendingAction = o("WAWebBaseModel").session();
            e.promises = o("WAWebBaseModel").session(function() {
                return {};
            });
            e.status = o("WAWebBaseModel").session();
            e.profilePicThumb = o("WAWebBaseModel").session();
            e.businessProfile = o("WAWebBaseModel").session();
            e.commonGroups = o("WAWebBaseModel").session();
            e.businessCatalog = o("WAWebBaseModel").session();
            e.locale = o("WAWebBaseModel").session();
            e.shareOwnPn = o("WAWebBaseModel").session();
            e.phoneNumber = o("WAWebBaseModel").session();
            e.displayNameLID = o("WAWebBaseModel").session();
            e.isHosted = o("WAWebBaseModel").session(false);
            e.isOrHasBeenHosted = o("WAWebBaseModel").session(false);
            e.isFavorite = o("WAWebBaseModel").session(false);
            e.meTextStatusExpiryTimer = o("WAWebBaseModel").session();
            e.maybeCommonGroupChatModel = o("WAWebBaseModel").session();
            e.canSendMsgWhileTimelocked = o("WAWebBaseModel").session(true);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const n = this;
            t.prototype.initialize.call(this);
            if (this.id) {
                if (this.id.device != null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[contact] ContactModel created with device wid: ",
                        ""
                    ])), this.id.toLogString()).sendLogs("contact-model-device-wid");
                }
                if (o("WAWebContactGetters").getIsMe(this)) {
                    this.addChild("status", o("WAWebTextStatusCollection").TextStatusCollection.gadd(this.id));
                }
                if (o("WAWebContactGetters").getIsMe(this) && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                    o("WAWebContactTextStatusExpiry").setupContactTextStatusExpiration(this);
                    this.listenTo(this, "change:textStatusExpiryTs", function() {
                        self.setTimeout(function() {
                            o("WAWebContactTextStatusExpiry").setupContactTextStatusExpiration(n);
                        });
                    });
                }
                if (o("WAWebContactGetters").getIsMe(this)) {
                    this.addChild("profilePicThumb", o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(this.id));
                }
                if (this.isBusiness || o("WAWebContactGetters").getIsMe(this) && o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                    this.addChild("businessProfile", o("WAWebBusinessProfileCollection").BusinessProfileCollection.gadd(this.id));
                }
                this.listenTo(this, "change:isBusiness", this.$Contact$p_1);
                if (o("WAWebContactGetters").getIsMe(this)) {
                    this.listenTo(o("WAWebConnModel").Conn, "change:pushname", this.$Contact$p_2);
                }
                this.listenTo(r("WAWebL10N"), "locale_change", this.$Contact$p_3);
                if (this.id.isUser()) {
                    o("WAWebContactBlocklistUtils").updateContactBlocked(this);
                    this.updateContactOptedOutOfMarketingMessages();
                }
                this.listenTo(this, "change:name", this.$Contact$p_4);
                this.listenTo(this, "change:name", this.updateName);
                this.pendingAction = 0;
                o("WAWebBizLabelUtils").initializeLabels(this);
                const a = this.id;
                if (a.isLid()) {
                    const i = this.phoneNumber || o("WAWebApiContact").getPhoneNumber(a);
                    if (i != null) {
                        this.copyFieldsFromPnContact(i);
                    }
                } else {
                    if (this.id.isUser()) {
                        this.$Contact$p_5();
                        this.listenTo(this, "change:name", this.$Contact$p_5);
                        this.listenTo(this, "change:statusMute", this.$Contact$p_5);
                    }
                }
                if (this.id.isBot()) {
                    o("WAWebInitializeBotContact").initializeBotContact(this);
                }
            }
        };
        n_prototype.$Contact$p_1 = function() {
            o("WAWebBizBusinessChangeAction").handleBusinessChange(this);
        };
        n_prototype.$Contact$p_2 = function() {
            this.set({
                pushname: o("WAWebConnModel").Conn.pushname
            });
        };
        n_prototype.$Contact$p_3 = function() {
            this.locale = r("WAWebL10N").getLocale();
        };
        n_prototype.updateName = function() {
            if (!o("WAWebFrontendContactGetters").getIsMyContact(this) && o("WAWebBotBaseGating").isBizBot3pEnabled() && o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(this.businessProfile) && this.verifiedName != null) {
                this.set({
                    name: this.verifiedName
                });
            }
        };
        n_prototype.$Contact$p_4 = function() {
            if (o("WAWebContactGetters").getIsUser(this) && this.name && !this.shortName) {
                const e = o("WAWebContactShortName").getShortName(this.name);
                if (e != null) {
                    this.set("shortName", e);
                }
            }
        };
        n_prototype.$Contact$p_6 = function() {
            const e = o("WAWebWidFactory").asUserWidOrThrow(this.id);
            if (e.isLid()) {
                return this;
            }
            const t = o("WAWebApiContact").getCurrentLid(e);
            if (t != null) {
                return o("WAWebContactCollection").ContactCollection.get(t);
            }
            return null;
        };
        n_prototype.$Contact$p_5 = function() {
            const e = this.$Contact$p_6();
            if (e) {
                e.set({
                    name: this.name
                });
                e.set({
                    parentStatusMute: this.statusMute
                });
            }
        };
        n_prototype.isActive = function() {
            const e = this.id;
            if (e.isLid()) {
                return e.equals(o("WAWebApiContact").getLatestLid(e));
            }
            return true;
        };
        n_prototype.copyFieldsFromPnContact = function(phoneNumber) {
            const e = this.getCollection().get(phoneNumber);
            if (e?.name != null) {
                this.set({
                    name: e.name
                });
            }
            if (e?.statusMute != null) {
                this.set({
                    parentStatusMute: e.statusMute
                });
            }
            this.set({
                phoneNumber
            });
        };
        n_prototype.getStatus = function() {
            if (!r("WAWebWid").user(this.id)) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "contact:getStatus for non-user ",
                    ""
                ])), this.id.toString());
            }
            return this.status = o("WAWebTextStatusCollection").TextStatusCollection.gadd(this.id);
        };
        n_prototype.getProfilePicThumb = function() {
            return this.profilePicThumb = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(this.id);
        };
        n_prototype.addPendingAction = function(t) {
            const e = this;
            const n = function() {
                e.$Contact$p_7();
            };
            t.then(n, n);
            this.pendingAction++;
            return t;
        };
        n_prototype.$Contact$p_7 = function() {
            if (this.pendingAction > 0) {
                this.pendingAction--;
            } else {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "contact:onPendingActionUpdate pendingAction value is invalid"
                ])));
                this.pendingAction = 0;
            }
        };
        n_prototype.updateContactOptedOutOfMarketingMessages = function() {
            if (this.id.isUser()) {
                if (o("WAWebOptOutListCollection").OptOutListCollection.get(this.id)) {
                    this.isContactOptedOut = true;
                } else if (this.id.isLid() && this.phoneNumber != null) {
                    this.isContactOptedOut = o("WAWebOptOutListCollection").OptOutListCollection.get(this.phoneNumber) != null;
                } else {
                    const e = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(this.id));
                    const t = e != null && o("WAWebOptOutListCollection").OptOutListCollection.get(e) != null;
                    this.isContactOptedOut = t;
                }
                if (this.isContactOptedOut) {
                    this.isEverOptedOutOfMarketingMessages = true;
                }
            }
        };
        n_prototype.setIsMarketingMessageThread = function(t) {
            this.isMarketingMessageThread = t;
        };
        n_prototype.searchMatchPrefix = function(t, n, r) {
            return o("WAWebContactSearchMatcher").searchMatchPrefix(this, t, n, r);
        };
        n_prototype.searchMatchExact = function(t, n, r) {
            return o("WAWebContactSearchMatcher").searchMatchExact(this, t, n, r);
        };
        n_prototype.searchMatchFuzzy = function(t) {
            return o("WAWebContactSearchMatcher").searchMatchFuzzy(this, t);
        };
        n_prototype.set = function(n, r, a) {
            const e = t.prototype.set.call(this, n, r, a);
            if (typeof n !== "string" && r?.merge && e) {
                if (o("WAWebContactGetters").getIsPSA(e) || e.id.isBot()) {
                    return e;
                }
                if (!n.name && e.name) {
                    e.unset("name");
                    e.unset("shortName");
                }
                if (!n.verifiedName && e.verifiedName) {
                    e.unset("verifiedName");
                }
            }
            return e;
        };
        n_prototype.getCollection = function() {
            return o("WAWebContactCollection").ContactCollection;
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "contact";
    c.idClass = r("WAWebWid");
    const d = o("WAWebBaseModel").defineModel(c);
    l.default = d;
}, 98);