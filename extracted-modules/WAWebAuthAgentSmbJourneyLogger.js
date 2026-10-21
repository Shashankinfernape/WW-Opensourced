__d("WAWebAuthAgentSmbJourneyLogger", [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(offboarding_type, is_authorized_agent) {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.AUTHORIZED_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BLOCKED_COMPOSER,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            userActionTarget: "blocked_composer",
            extraAttributes: {
                offboarding_type,
                is_authorized_agent
            }
        });
    }
    function c(e, t) {
        const n = o("react-compiler-runtime").c(4);
        let r;
        let a;
        if (n[0] !== t || n[1] !== e) {
            r = function() {
                u(e, t);
            };
            a = [
                e,
                t
            ];
            n[0] = t;
            n[1] = e;
            n[2] = r;
            n[3] = a;
        } else {
            r = n[2];
            a = n[3];
        }
        useEffect(r, a);
    }
    l.logAgentBlockedComposerView = u;
    l.useLogAgentBlockedComposerViewOnMount = c;
}, 98);