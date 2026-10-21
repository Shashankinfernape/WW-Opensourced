__d("WAWebNewsletterMetadataModel", [
    "WAWebBaseModel",
    "WAWebCommonNewsletterEnums",
    "WAWebContactSearchGatingUtils",
    "WAWebExactSearchMatchResult",
    "WAWebFrontendNewsletterMetadataGetters",
    "WAWebFuzzyMatcher",
    "WAWebFuzzySearchMatchResult",
    "WAWebModelUtils",
    "WAWebNewsletterGeosuspendedCountryCollection",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterMessageDeliveryUpdateCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterPendingAdminsCollection",
    "WAWebNewsletterSubscribersCollection",
    "WAWebSearchMatchStrategies",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...a) {
            let t;
            t = e.call(this, ...a) || this;
            t.id = o("WAWebModelUtils").prop();
            t.creationTime = o("WAWebModelUtils").prop();
            t.name = o("WAWebModelUtils").prop();
            t.nameUpdateTime = o("WAWebModelUtils").prop();
            t.description = o("WAWebModelUtils").prop();
            t.descriptionUpdateTime = o("WAWebModelUtils").prop();
            t.handle = o("WAWebModelUtils").prop();
            t.inviteCode = o("WAWebModelUtils").prop();
            t.size = o("WAWebModelUtils").prop();
            t.verified = o("WAWebModelUtils").prop();
            t.membershipType = o("WAWebModelUtils").prop();
            t.privacy = o("WAWebModelUtils").prop();
            t.website = o("WAWebModelUtils").prop();
            t.messageDeliveryUpdates = o("WAWebModelUtils").collection(r("WAWebNewsletterMessageDeliveryUpdateCollection"));
            t.reactionCodesSetting = o("WAWebModelUtils").prop();
            t.wamoSubPlanId = o("WAWebModelUtils").prop();
            t.wamoSubStatus = o("WAWebModelUtils").prop();
            t.statusMetadata = o("WAWebModelUtils").prop();
            t.lastFilledStatusServerId = o("WAWebModelUtils").prop();
            t.pinnedMessages = o("WAWebModelUtils").prop(function() {
                return [];
            });
            t.suspended = o("WAWebModelUtils").prop(false);
            t.statusMute = o("WAWebModelUtils").prop(false);
            t.geosuspended = o("WAWebModelUtils").prop(false);
            t.hasProfilePictureDeletionAlerts = o("WAWebModelUtils").prop(false);
            t.geosuspendedCountries = o("WAWebModelUtils").collection(r("WAWebNewsletterGeosuspendedCountryCollection"));
            t.capabilities = o("WAWebModelUtils").prop(function() {
                return new Set;
            });
            t.adminInsights = o("WAWebModelUtils").session();
            t.adminProfile = o("WAWebModelUtils").prop();
            t.adminProfilesSettingEnabled = o("WAWebModelUtils").prop(false);
            t.adminCount = o("WAWebModelUtils").prop(1);
            t.pendingAdmins = o("WAWebModelUtils").collection(r("WAWebNewsletterPendingAdminsCollection"));
            t.subscribers = o("WAWebModelUtils").collection(r("WAWebNewsletterSubscribersCollection"));
            t.terminated = o("WAWebModelUtils").prop(false);
            t.followerActivityMuteExpiration = o("WAWebModelUtils").prop(0);
            t.similarNewsletters = o("WAWebModelUtils").session(function() {
                return [];
            });
            t.recentlyFollowedFrom = o("WAWebModelUtils").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            const t = this;
            e.prototype.initialize.call(this);
            const n = function() {
                t.updateAdminCount();
            };
            this.listenTo(this.subscribers, "change", n);
            this.listenTo(this.subscribers, "add", n);
            this.listenTo(this.subscribers, "reset", n);
            this.listenTo(this.subscribers, "set", n);
            this.listenTo(this.subscribers, "remove", n);
        };
        t_prototype.getCollection = function() {
            return r("WAWebNewsletterMetadataCollection");
        };
        t_prototype.resetRecentlyFollowedFrom = function() {
            this.recentlyFollowedFrom = null;
        };
        t_prototype.updateAdminCount = function() {
            const n = this.subscribers?.countWhere(function({ membership }) {
                return membership === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin || membership === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
            }) ?? 0;
            this.adminCount = this.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ? n + 1 : n;
        };
        t_prototype.setFollowerActivityMuteExpiration = function(t) {
            this.followerActivityMuteExpiration = t;
        };
        t_prototype.iAmGuest = function() {
            return this.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
        };
        t_prototype.iAmAdmin = function() {
            return this.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin;
        };
        t_prototype.iAmSubscriber = function() {
            return this.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
        };
        t_prototype.iAmOwner = function() {
            return o("WAWebNewsletterMembershipUtil").iAmOwner(this);
        };
        t_prototype.iAmAdminOrOwner = function() {
            return o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(this);
        };
        t_prototype.searchMatchExact = function(t) {
            const e = o("WAWebFrontendNewsletterMetadataGetters").getSearchName(this);
            const n = o("WAWebSearchMatchStrategies").substringMatch(e, t);
            if (n == null) {
                return null;
            }
            return {
                match: e,
                results: n.map((e)=>new (o("WAWebExactSearchMatchResult")).WAWebExactSearchMatchResult(e.startIndex, e.length))
            };
        };
        t_prototype.searchMatchFuzzy = function(t) {
            const e = t.split(/\s+/).filter(Boolean);
            if (e.length === 0) {
                return null;
            }
            const n = 1 - o("WAWebContactSearchGatingUtils").getFuzzySearchDistanceThreshold();
            const r = o("WAWebFrontendNewsletterMetadataGetters").getSearchName(this);
            const a = [];
            for (const i of e){
                const l = o("WAWebFuzzyMatcher").fuzzyMatch({
                    costTolerance: o("WAWebFuzzySearchMatchResult").MAX_ALLOWED_COST,
                    input: r,
                    query: i
                });
                if (!l.isMatch() || l.getSimilarityRating() < n) {
                    return null;
                }
                a.push(l);
            }
            return {
                match: r,
                results: a
            };
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebNewsletterMetadataGetters").clearNewsletterMetadataGetterCacheFor(this);
            o("WAWebFrontendNewsletterMetadataGetters").clearFrontendNewsletterMetadataGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletterMetadata";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterMetadata = s;
}, 98);