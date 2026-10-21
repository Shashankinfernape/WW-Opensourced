__d("WAWebGroupJoinModalUtilsGetGroupInviteActionText", [
    "fbt",
    "WAWebBackendErrors",
    "WAWebFbtCommon",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l, s) {
    function e({ adminRequestRequired = false, error, groupType, inGroup, isHiddenSubgroup = false, isSentByMe = false, membershipApprovalMode = false, requestSent = false }) {
        if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
            if (error.status === 426) {
                return s._("Update");
            }
            if (error.status === 406) {
                return r("WAWebFbtCommon")("OK");
            }
        }
        if (isSentByMe) {
            return s._("Revoke invite");
        }
        if (inGroup) {
            if (groupType === o("WAWebGroupType").GroupType.COMMUNITY) {
                return s._("View community");
            }
            return s._("View group");
        }
        if (groupType === o("WAWebGroupType").GroupType.COMMUNITY) {
            return s._("Join community");
        }
        if (isHiddenSubgroup) {
            return s._("Message group owner");
        }
        if (membershipApprovalMode || groupType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && adminRequestRequired) {
            if (requestSent) {
                return s._("Cancel request");
            }
            return s._("Request to join");
        }
        return s._("Join group");
    }
    l.getGroupInviteActionText = e;
}, 226);