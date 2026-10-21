__d("WAWebChatlistTertiaryPillsLogEvents", [
    "$InternalEnum",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        AI_RESPONDING: "ai_responding",
        AI_HANDOFF: "ai_handoff",
        LABELS_ONLY: "labels_only"
    });
    const s = n("$InternalEnum")({
        EMPTY_AFTER_RESERVATION: "empty_after_reservation"
    });
    const u = new Set;
    const c = new Set;
    function d({ chatId, chipKind, overflowCount, pillCount }) {
        const i = `${chatId}|${chipKind}`;
        if (!u.has(i)) {
            u.add(i);
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
                featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
                stickyEntryPoint: false,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
                userActionTarget: chipKind,
                extraAttributes: {
                    pill_count: pillCount,
                    overflow_count: overflowCount
                }
            });
        }
    }
    function m(e, userActionTarget) {
        const n = `${e}|${userActionTarget}`;
        if (!c.has(n)) {
            c.add(n);
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
                featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
                stickyEntryPoint: false,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
                userActionTarget
            });
        }
    }
    function p() {
        u.clear();
        c.clear();
    }
    l.TertiaryPillsChipKind = e;
    l.TertiaryPillsMismatchReason = s;
    l.logTertiaryPillsRowImpression = d;
    l.logTertiaryPillsRowMismatch = m;
    l.resetTertiaryPillsDedupForTests = p;
}, 98);