__d("WAWebCreateOrUpdateGroupMetadataAction", [
    "WAWebGroupHistoryParticipantStateHydration",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        o("WAWebGroupQueryBridge").updateSubject(e.id, e.subject);
        r("WAWebGroupMetadataCollection").gadd(babelHelpers.extends({
            id: e.id,
            owner: e.owner,
            subject: e.subject,
            creation: e.creation,
            desc: e.desc,
            descId: e.descId,
            descOwner: e.descOwner,
            descTime: e.descTime,
            restrict: e.restrict || false,
            announce: e.announce || false,
            noFrequentlyForwarded: e.noFrequentlyForwarded || false,
            ephemeralDuration: e.ephemeralDuration || 0,
            afterReadDuration: e.afterReadDuration ?? null,
            growthLockExpiration: e.growthLockExpiration,
            growthLockType: e.growthLockType,
            membershipApprovalMode: e.membershipApprovalMode,
            memberAddMode: e.memberAddMode,
            memberLinkMode: e.memberLinkMode,
            memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
            participants: o("WAWebGroupHistoryParticipantStateHydration").guardGroupHistorySentStateDowngrade(e.id, e.participants),
            pastParticipants: e.pastParticipants,
            support: e.support ?? false,
            suspended: e.suspended ?? false,
            suspendAppealStatus: e.suspendAppealStatus ?? null,
            suspendAppealUpdateTime: e.suspendAppealUpdateTime ?? null,
            terminated: e.terminated ?? false,
            isParentGroup: e.isParentGroup ?? false,
            isParentGroupClosed: e.isParentGroupClosed ?? false,
            parentGroup: e.parentGroup,
            defaultSubgroup: e.defaultSubgroup ?? false,
            generalSubgroup: e.generalSubgroup ?? false,
            deviceStale: true,
            size: e.size,
            isLidAddressingMode: e.isLidAddressingMode,
            reportToAdminMode: e.reportToAdminMode
        }, e.reportToAdminMode === false && {
            lastReportToAdminTimestamp: null
        }, {
            allowNonAdminSubGroupCreation: e.allowNonAdminSubGroupCreation,
            generalChatAutoAddDisabled: e.generalChatAutoAddDisabled,
            hasCapi: e.hasCapi,
            hiddenSubgroup: e.hiddenSubgroup ?? false,
            groupSafetyCheck: e.groupSafetyCheck ?? false,
            isOpenBotGroup: e.isOpenBotGroup,
            isTeeBotGroup: e.isTeeBotGroup
        }));
        if (e.isInternal != null) {
            r("WAWebGroupMetadataCollection").get(e.id)?.set({
                isInternal: e.isInternal
            });
        }
    }
    l.createOrUpdateGroupMetadataModelFromQuery = e;
}, 98);