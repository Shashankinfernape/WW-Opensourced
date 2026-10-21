__d("WAWebProfilePicThumbModel", [
    "WAWebBaseModel",
    "WAWebChatCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebProfilePicThumbHostUtils",
    "WAWebThemeSession",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.tag = o("WAWebBaseModel").prop();
            t.raw = o("WAWebBaseModel").prop();
            t.eurl = o("WAWebBaseModel").prop();
            t.previewEurl = o("WAWebBaseModel").prop();
            t.fullDirectPath = o("WAWebBaseModel").prop();
            t.previewDirectPath = o("WAWebBaseModel").prop();
            t.filehash = o("WAWebBaseModel").prop();
            t.stale = o("WAWebBaseModel").session(true);
            t.eurlStale = o("WAWebBaseModel").session(false);
            t.pendingPic = o("WAWebBaseModel").session();
            t.timestamp = o("WAWebBaseModel").session();
            t.hostRetryCount = o("WAWebBaseModel").session(0);
            t.lastHostUsed = o("WAWebBaseModel").session();
            t.isDarkTheme = o("WAWebBaseModel").session(o("WAWebThemeSession").getIsDarkTheme);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.markStale = function(t) {
            this.stale = true;
            if (t?.eurl === true) {
                this.eurlStale = true;
            }
        };
        t_prototype.markMms4HostSuccess = function() {
            this.hostRetryCount = 0;
        };
        t_prototype.markMms4HostFailure = function() {
            this.hostRetryCount++;
            this.lastHostUsed = o("WAWebProfilePicThumbHostUtils").selectMms4Host(this.filehash, this.hostRetryCount, this.lastHostUsed) ?? this.lastHostUsed;
        };
        t_prototype.validate = function() {
            if (!(!this.stale && !this.eurlStale)) {
                return this.getCollection().update(this.id);
            }
        };
        t_prototype.canSet = function() {
            if (r("WAWebWid").isGroup(this.id)) {
                const t = o("WAWebChatCollection").ChatCollection.get(this.id);
                const n = t?.groupMetadata?.participants.iAmRestrictedMember();
                return !n;
            }
            return !!o("WAWebUserPrefsMeUser").isMeAccount(this.id);
        };
        t_prototype.canDelete = function() {
            const e = !r("isStringNullOrEmpty")(this.tag);
            if (r("WAWebWid").isGroup(this.id) && e) {
                const n = o("WAWebChatCollection").ChatCollection.get(this.id);
                const a = n?.groupMetadata?.participants.iAmRestrictedMember();
                return !a;
            }
            return !!(o("WAWebUserPrefsMeUser").isMeAccount(this.id) && e);
        };
        t_prototype.getCollection = function() {
            return o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection;
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebProfilePicThumbGetters").clearProfilePicThumbGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "profilePicThumb";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.ProfilePicThumbImpl = e;
    l.ProfilePicThumb = s;
}, 98);