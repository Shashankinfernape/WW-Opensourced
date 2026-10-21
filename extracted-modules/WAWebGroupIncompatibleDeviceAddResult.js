__d("WAWebGroupIncompatibleDeviceAddResult", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebWamEnumAddMembersEntrypointType"
], function(t, n, r, o, a, i, l) {
    const e = "431";
    function s(reportedResponse, t) {
        const n = reportedResponse.participants.some(({ code, userWid })=>c(code, userWid));
        if (!n || t === o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.ADD_CONTACT_TO_GROUPS_PICKER || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return {
                hasIncompatibleDeviceRejection: false,
                reportedResponse
            };
        }
        return {
            hasIncompatibleDeviceRejection: true,
            reportedResponse: babelHelpers.extends({}, reportedResponse, {
                participants: reportedResponse.participants.filter(({ code, userWid })=>!c(code, userWid))
            })
        };
    }
    function u(t) {
        return t.some(({ code, userWid })=>code === e && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(userWid)) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function c(code, userWid) {
        return code === e && (!userWid.isBot() || o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(userWid));
    }
    l.splitIncompatibleDeviceRejections = s;
    l.hasAgentIncompatibleDeviceRejection = u;
}, 98);