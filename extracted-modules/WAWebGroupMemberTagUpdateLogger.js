__d("WAWebGroupMemberTagUpdateLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupMemberTagUpdateWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupMemberTagEntryPointType",
    "WAWebWamEnumGroupMemberTagUpdateActionType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(){
            this.ENTRY_POINT = o("WAWebWamEnumGroupMemberTagEntryPointType").GROUP_MEMBER_TAG_ENTRY_POINT_TYPE;
        }
        $1(n, groupMemberTagUpdateAction) {
            const t = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
            if (t == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-member-tag] Unified session ID is null"
                ])));
                return;
            }
            new (o("WAWebGroupMemberTagUpdateWamEvent")).GroupMemberTagUpdateWamEvent({
                groupId: n.groupId,
                groupMemberTagUpdateAction,
                hasMemberTagAtStart: n.hasMemberTagAtStart,
                memberTagEntryPoint: n.memberTagEntryPoint,
                uiSurface: n.uiSurface,
                userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
                unifiedSessionId: t
            }).commit();
        }
        logUpdateClick(t) {
            this.$1(t, o("WAWebWamEnumGroupMemberTagUpdateActionType").GROUP_MEMBER_TAG_UPDATE_ACTION_TYPE.UPDATE);
        }
        logDeleteConfirm(t) {
            this.$1(t, o("WAWebWamEnumGroupMemberTagUpdateActionType").GROUP_MEMBER_TAG_UPDATE_ACTION_TYPE.DELETE_CONFIRM);
        }
        logError(t) {
            this.$1(t, o("WAWebWamEnumGroupMemberTagUpdateActionType").GROUP_MEMBER_TAG_UPDATE_ACTION_TYPE.ERROR);
        }
    }
    const u = new s;
    l.GroupMemberTagUpdateLogger = u;
}, 98);