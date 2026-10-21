__d("WAWebBroadcastMetadataModel", [
    "WAWebAudienceExpressionTypes",
    "WAWebBaseModel",
    "WAWebBroadcastMetadataCollection",
    "WAWebBroadcastMetadataGetters",
    "WAWebBroadcastRecipientCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...a) {
            let t;
            t = e.call(this, ...a) || this;
            t.id = o("WAWebBaseModel").prop();
            t.audienceExpression = o("WAWebBaseModel").prop(function() {
                return o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION;
            });
            t.customAudienceFbid = o("WAWebBaseModel").prop();
            t.recipients = o("WAWebBaseModel").collection(r("WAWebBroadcastRecipientCollection"));
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return r("WAWebBroadcastMetadataCollection");
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebBroadcastMetadataGetters").clearBroadcastMetadataGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "broadcast";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);