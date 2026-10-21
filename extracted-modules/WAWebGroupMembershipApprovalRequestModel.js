__d("WAWebGroupMembershipApprovalRequestModel", [
    "WAWebBaseModel",
    "WAWebContactCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.addedBy = o("WAWebBaseModel").prop();
            t.requestMethod = o("WAWebBaseModel").prop();
            t.parentGroupId = o("WAWebBaseModel").prop();
            t.contact = o("WAWebBaseModel").session();
            t.addedByContact = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.addChild("contact", o("WAWebContactCollection").ContactCollection.gadd(this.id));
            this.addChild("addedByContact", o("WAWebContactCollection").ContactCollection.gadd(this.addedBy));
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "membership_approval_request";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);