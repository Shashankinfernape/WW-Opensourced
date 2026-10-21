__d("WAWebGroupParticipantModel", [
    "WAWebBaseModel",
    "WAWebContactCollection",
    "WAWebGroupParticipantGetters",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.isAdmin = o("WAWebBaseModel").prop();
            t.isSuperAdmin = o("WAWebBaseModel").prop();
            t.joinTime = o("WAWebBaseModel").prop();
            t.groupHistorySentState = o("WAWebBaseModel").prop();
            t.leaveTs = o("WAWebBaseModel").prop();
            t.leaveReason = o("WAWebBaseModel").prop();
            t.contact = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.addChild("contact", o("WAWebContactCollection").ContactCollection.gadd(this.id));
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebGroupParticipantGetters").clearGroupParticipantGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "participant";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);