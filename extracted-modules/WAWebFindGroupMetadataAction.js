__d("WAWebFindGroupMetadataAction", [
    "Promise",
    "WALogger",
    "WAWebDBParticipantTypes",
    "WAWebGroupDatabaseJob",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebWamNumberToSizeBucket",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "hasIncompleteParticipantInformation"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let a = null;
            let i = null;
            let l = function() {};
            const _ = r("WAWebGroupMetadataCollection").get(t);
            if (_) {
                if (_.participantQueryPromise) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "findGroupMetadata: ",
                        " - pending participant query"
                    ])), t);
                    return _.participantQueryPromise.then(()=>({
                            id: t
                        }));
                }
                _.participantQueryPromise = new (p || (p = n("Promise")))(function(e) {
                    l = e;
                });
            } else {
                a = yield o("WAWebGroupDatabaseJob").getGroupMetadataJob(t);
                if (!a) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "findGroupMetadata: ",
                        " - query missing group participant"
                    ])), t);
                    return o("WAWebGroupQueryBridge").sendQueryGroup(t);
                }
                if (a.subject != null) {
                    o("WAWebGroupQueryBridge").updateSubject(t, a.subject);
                }
            }
            try {
                let y;
                if ((!_ || _.stale) && (i = yield o("WAWebGroupDatabaseJob").getGroupParticipantJob(t), !i)) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "findGroupMetadata: ",
                        " - query missing group participant"
                    ])), t);
                    return o("WAWebGroupQueryBridge").sendQueryGroup(t);
                }
                let b;
                if (a) {
                    const v = a;
                    const S = v.hasIncompleteParticipantInformation;
                    const R = babelHelpers.objectWithoutPropertiesLoose(v, e);
                    b = R;
                }
                const L = babelHelpers.extends({
                    id: t
                }, b, {
                    participants: i?.participants,
                    pastParticipants: i?.pastParticipants,
                    deviceStale: i ? i.staleType === o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE : undefined,
                    cachedDeviceCount: i?.deviceCount,
                    cachedDeviceSizeBucket: (y = i) != null && y.deviceCount ? r("WAWebWamNumberToSizeBucket")(i.deviceCount) : null
                });
                if (i?.staleType === o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "findGroupMetadata: ",
                        " - query stale group participant"
                    ])), t);
                    const E = yield o("WAWebGroupQueryBridge").sendQueryGroup(t);
                    if (E?.participants != null) {
                        L.participants = E.participants;
                    }
                }
                return L;
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "findGroupMetadata: ",
                    " - query group participant error: ",
                    ""
                ])), t, error);
                throw error;
            } finally{
                l();
                if (_) {
                    _.participantQueryPromise = null;
                }
            }
        });
        return f.apply(this, arguments);
    }
    l.findGroupMetadata = _;
}, 98);