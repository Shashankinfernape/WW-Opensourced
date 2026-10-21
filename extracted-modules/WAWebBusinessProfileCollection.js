__d("WAWebBusinessProfileCollection", [
    "Promise",
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessProfileModel",
    "WAWebBusinessProfileUtils",
    "WAWebContactCollection",
    "WAWebHandleBizBotAutomatedTypeAction",
    "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
    "WAWebLidMigrationUtils",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "catalog_exists";
    const d = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.findImpl = function(t) {
            return this.$BusinessProfileCollectionImpl$p_1(t, {
                queryCatalog: true
            });
        };
        a_prototype._update = function(t, n) {
            return this.$BusinessProfileCollectionImpl$p_1(t, {
                queryCatalog: false,
                getMerchantCompliance: n?.getMerchantCompliance
            });
        };
        a_prototype.$BusinessProfileCollectionImpl$p_1 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { getMerchantCompliance, queryCatalog }) {
                const l = this.gadd(t);
                if (!l.id.isUserNotPSA() || l.id.isFbidBot()) {
                    return (u || (u = n("Promise"))).resolve({
                        id: t
                    });
                }
                const c = o("WAWebBizBusinessProfileAction").queryBusinessProfile([
                    {
                        wid: l.id,
                        tag: l.tag
                    }
                ], getMerchantCompliance);
                const d = yield c;
                if (!Array.isArray(d)) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Received invalid business profile response"
                    ])));
                    return null;
                }
                if (d.length === 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[BusinessProfile] #findAndParse: not found ",
                        ""
                    ])), String(t));
                    return {
                        id: t
                    };
                }
                const m = d[0];
                const { tag, wid } = m;
                const f = {
                    id: wid,
                    tag,
                    dataSource: "server"
                };
                const m_profile = m.profile;
                if (m_profile) {
                    const h = o("WAWebContactCollection").ContactCollection.get(t);
                    if (h && !h.isContactSyncCompleted) {
                        h.set("isBusiness", true);
                        h.set("forcedBusinessUpdateFromServer", true);
                    }
                    const y = o("WAWebBusinessProfileUtils").parseBusinessProfile({
                        id: m.wid,
                        profile: m_profile,
                        queryCatalog
                    });
                    const C = l.dataSource === "placeholder" ? null : l.automatedType;
                    const b = y.automatedType;
                    yield o("WAWebHandleBizBotAutomatedTypeAction").handleBizBotAutomatedTypeTransition(l.id, C, b);
                    const v = l.dataSource === "placeholder" ? null : l.welcomeMsgProtocolMode;
                    const S = y.welcomeMsgProtocolMode;
                    yield o("WAWebHandleBizBotWelcomeMsgProtocolModeAction").handleBizBotWelcomeMsgProtocolModeTransition(l.id, v, S);
                    yield o("WAWebApiBusinessProfile").createOrMergeBusinessProfileRecordLidAware({
                        id: f.id,
                        automatedType: y.automatedType,
                        welcomeMsgProtocolMode: y.welcomeMsgProtocolMode,
                        prompts: y.prompts,
                        commands: y.commands,
                        commandsDescription: y.commandsDescription
                    });
                    return babelHelpers.extends({}, y, f);
                }
                return f;
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.fetchBizProfile = function(t) {
            const e = this.get(t);
            if (e) {
                e.markStale();
            }
            return this.find(t);
        };
        a_prototype.getValid = function(t) {
            const e = this.get(t);
            if (e != null && e.isValid()) {
                return e;
            }
        };
        a_prototype.getMeBusinessProfile = function() {
            let e;
            for (const t of [
                o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                o("WAWebUserPrefsMeUser").getMaybeMePnUser()
            ]){
                if (t != null) {
                    const n = this.get(t);
                    if (n != null) {
                        if (n.dataSource !== "placeholder") {
                            return n;
                        }
                        e = n;
                    }
                }
            }
            return e;
        };
        a_prototype.markProfileAsStale = function(t) {
            this.get(t)?.markStale();
        };
        a_prototype.hasBusinessProfileInCache = function(t) {
            return !!this.get(t);
        };
        a_prototype.convertBusinessProfileIdForLidMigration = function(t) {
            const e = t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t.toString());
            if (e.isLid()) {
                const n = o("WAWebLidMigrationUtils").toPn(e);
                if (n != null) {
                    return n;
                }
            }
            return e;
        };
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    d.model = o("WAWebBusinessProfileModel").BusinessProfile;
    const m = new d;
    l.CATALOG_EXISTS = c;
    l.BusinessProfileCollection = m;
}, 98);