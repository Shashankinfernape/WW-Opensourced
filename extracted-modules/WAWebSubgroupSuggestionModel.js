__d("WAWebSubgroupSuggestionModel", [
    "WAWebBaseModel",
    "WAWebCellRequestState",
    "WAWebContactCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.groupId = o("WAWebBaseModel").prop();
            t.parentGroupId = o("WAWebBaseModel").prop();
            t.subject = o("WAWebBaseModel").prop();
            t.desc = o("WAWebBaseModel").prop();
            t.owner = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.isExistingGroup = o("WAWebBaseModel").prop();
            t.participantCount = o("WAWebBaseModel").prop();
            t.hiddenSubgroup = o("WAWebBaseModel").prop();
            t.ownerContact = o("WAWebBaseModel").session();
            t.currentState = o("WAWebBaseModel").session();
            t.error = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.addChild("ownerContact", o("WAWebContactCollection").ContactCollection.gadd(this.owner));
            this.resetState();
        };
        t_prototype.resetState = function() {
            this.currentState = o("WAWebCellRequestState").State.Pending;
            this.error = undefined;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "subgroup_suggestion";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);