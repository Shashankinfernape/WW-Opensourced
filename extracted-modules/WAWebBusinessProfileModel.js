__d("WAWebBusinessProfileModel", [
    "WAWebBaseModel",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebBusinessProfileTypes",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebFrontendBusinessProfileGetters",
    "WAWebOrderRequestMsg.flow",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = 3;
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.dataSource = o("WAWebBaseModel").prop("placeholder");
            t.tag = o("WAWebBaseModel").prop();
            t.description = o("WAWebBaseModel").prop();
            t.categories = o("WAWebBaseModel").prop();
            t.profileOptions = o("WAWebBaseModel").prop();
            t.email = o("WAWebBaseModel").prop();
            t.website = o("WAWebBaseModel").prop();
            t.latitude = o("WAWebBaseModel").prop();
            t.longitude = o("WAWebBaseModel").prop();
            t.businessHours = o("WAWebBaseModel").prop();
            t.catalogStatus = o("WAWebBaseModel").prop();
            t.address = o("WAWebBaseModel").prop();
            t.priceTier = o("WAWebBaseModel").prop();
            t.structuredAddress = o("WAWebBaseModel").prop();
            t.serviceAreas = o("WAWebBaseModel").prop();
            t.offerings = o("WAWebBaseModel").prop();
            t.legalEntityDetails = o("WAWebBaseModel").prop();
            t.fbPage = o("WAWebBaseModel").prop();
            t.igProfessional = o("WAWebBaseModel").prop();
            t.isProfileLinked = o("WAWebBaseModel").prop();
            t.directConnection = o("WAWebBaseModel").prop();
            t.customUrlPath = o("WAWebBaseModel").prop();
            t.isProfileLocked = o("WAWebBaseModel").prop(true);
            t.memberSinceText = o("WAWebBaseModel").prop();
            t.isAuthorizedAgent = o("WAWebBaseModel").prop();
            t.parentCompanyName = o("WAWebBaseModel").prop();
            t.parentCompanyLogoUrl = o("WAWebBaseModel").prop();
            t.obaPhoneNumber = o("WAWebBaseModel").prop();
            t.googlePlaceId = o("WAWebBaseModel").prop();
            t.showGoogleReviews = o("WAWebBaseModel").prop();
            t.showGoogleInfo = o("WAWebBaseModel").prop();
            t.googlePlace = o("WAWebBaseModel").session();
            t.coverPhoto = o("WAWebBaseModel").prop();
            t.automatedType = o("WAWebBaseModel").prop(o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN);
            t.welcomeMsgProtocolMode = o("WAWebBaseModel").prop(o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE);
            t.prompts = o("WAWebBaseModel").prop();
            t.commandsDescription = o("WAWebBaseModel").prop();
            t.commands = o("WAWebBaseModel").prop();
            t.stale = o("WAWebBaseModel").session(true);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            const t = this;
            e.prototype.initialize.call(this);
            this.listenTo(this, "change:automatedType", function() {
                t.$BusinessProfileImpl$p_1();
                t.$BusinessProfileImpl$p_2();
            });
            this.$BusinessProfileImpl$p_1();
            this.$BusinessProfileImpl$p_2();
        };
        t_prototype.markStale = function() {
            this.stale = true;
            if (this.hasObservers()) {
                this.getCollection().find(this.id);
            }
        };
        t_prototype.getCollection = function() {
            return o("WAWebBusinessProfileCollection").BusinessProfileCollection;
        };
        t_prototype.isValid = function() {
            return Array.isArray(this.categories);
        };
        t_prototype.isBusinessDirectConnection = function() {
            return this.directConnection?.enabled ?? this.profileOptions?.directConnection ?? false;
        };
        t_prototype.getCatalogType = function() {
            if (this.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG) {
                return o("WAWebOrderRequestMsg.flow").CatalogType.SMB_META_CATALOG;
            }
            if (this.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG) {
                return o("WAWebOrderRequestMsg.flow").CatalogType.NATIVE;
            }
            return o("WAWebOrderRequestMsg.flow").CatalogType.UNKNOWN;
        };
        t_prototype.$BusinessProfileImpl$p_2 = function() {
            if (!(!o("WAWebBotBaseGating").isBizBot3pEnabled() || !o("WAWebBusinessProfileGetters").getIsBizBot3p(this))) {
                const e = o("WAWebContactCollection").ContactCollection.get(this.id);
                e?.updateName();
            }
        };
        t_prototype.$BusinessProfileImpl$p_1 = function() {
            const e = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(this.id);
            if (e) {
                o("WAWebChatGroupUtils").updateCanSend(e, this);
            }
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebBusinessProfileGetters").clearBusinessProfileGetterCacheFor(this);
            o("WAWebFrontendBusinessProfileGetters").clearFrontendBusinessProfileGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "businessProfile";
    s.idClass = r("WAWebWid");
    const u = o("WAWebBaseModel").defineModel(s);
    const c = {
        description: null,
        email: null,
        website: null,
        latitude: null,
        longitude: null
    };
    l.MAX_BUSINESS_CATEGORIES = e;
    l.BusinessProfile = u;
    l.DEFAULTS = c;
}, 98);