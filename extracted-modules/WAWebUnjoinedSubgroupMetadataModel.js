__d("WAWebUnjoinedSubgroupMetadataModel", [
    "WAWebBaseModel",
    "WAWebGroupParticipantCollection",
    "WAWebUnjoinedSubgroupMetadataGetters",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...a) {
            let t;
            t = e.call(this, ...a) || this;
            t.id = o("WAWebBaseModel").prop();
            t.subject = o("WAWebBaseModel").prop();
            t.subjectTime = o("WAWebBaseModel").prop();
            t.parentGroupId = o("WAWebBaseModel").prop();
            t.defaultSubgroup = o("WAWebBaseModel").prop();
            t.generalSubgroup = o("WAWebBaseModel").prop();
            t.desc = o("WAWebBaseModel").prop();
            t.creation = o("WAWebBaseModel").prop();
            t.owner = o("WAWebBaseModel").prop();
            t.size = o("WAWebBaseModel").prop();
            t.adminRequestRequired = o("WAWebBaseModel").prop();
            t.membershipApprovalMode = o("WAWebBaseModel").prop();
            t.membershipApprovalRequest = o("WAWebBaseModel").prop();
            t.hiddenSubgroup = o("WAWebBaseModel").prop();
            t.suspended = o("WAWebBaseModel").prop();
            t.participants = o("WAWebBaseModel").collection(r("WAWebGroupParticipantCollection"));
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebUnjoinedSubgroupMetadataGetters").clearUnjoinedSubgroupMetadataGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "unjoinedSubgroupMetadata";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);