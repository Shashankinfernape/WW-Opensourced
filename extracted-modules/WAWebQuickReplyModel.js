__d("WAWebQuickReplyModel", [
    "WAWebBaseModel",
    "WAWebBizQuickReplyBridge",
    "WAWebFrontendQuickReplyGetters",
    "WAWebPixQuickReplyFeature",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyGetters"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.shortcut = o("WAWebBaseModel").prop();
            t.message = o("WAWebBaseModel").prop();
            t.count = o("WAWebBaseModel").prop();
            t.keywords = o("WAWebBaseModel").prop();
            t.pendingCount = o("WAWebBaseModel").session(0);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.useOnce = function() {
            if (this.isSmartDefault()) {
                this.count += 1;
                o("WAWebBizQuickReplyBridge").updateQuickReply(this);
            } else {
                this.pendingCount += 1;
            }
        };
        t_prototype.isSmartDefault = function() {
            switch(o("WAWebQuickReplyGetters").getType(this)){
                case o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT:
                case o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT:
                case o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT:
                case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
                    return true;
                default:
                    return false;
            }
        };
        t_prototype.hideForChat = function(t) {
            switch(o("WAWebQuickReplyGetters").getType(this)){
                case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
                    return !o("WAWebPixQuickReplyFeature").shouldShowPixQuickReplyForChat(t);
                default:
                    return false;
            }
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebQuickReplyGetters").clearQuickReplyGetterCacheFor(this);
            o("WAWebFrontendQuickReplyGetters").clearFrontendQuickReplyGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "quickReply";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);