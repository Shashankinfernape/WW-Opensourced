__d("WAWebCommunityActivityModel", [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebBaseModel",
    "WAWebModelUtils"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "SUB_GROUP_LINK",
        "NEW_COMMUNITY"
    ]);
    const s = 5 * o("WATimeUtils").DAY_SECONDS;
    const u = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebModelUtils").prop();
            t.communityId = o("WAWebModelUtils").prop();
            t.type = o("WAWebModelUtils").prop();
            t.timestamp = o("WAWebModelUtils").prop();
            t.subgroupName = o("WAWebModelUtils").prop();
            t.subgroupId = o("WAWebModelUtils").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    u.Proxy = "communityActivity";
    const c = o("WAWebBaseModel").defineModel(u);
    l.ActivityTypeType = e;
    l.EXPIRATION_TIME_FOR_SUB_GROUP_LINK = s;
    l.CommunityActivity = c;
}, 98);