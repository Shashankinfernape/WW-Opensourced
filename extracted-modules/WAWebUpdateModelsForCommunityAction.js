__d("WAWebUpdateModelsForCommunityAction", [
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebContactCollection",
    "WAWebGroupMetadataCollection",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        r("WAWebGroupMetadataCollection").remove(e);
        o("WAWebChatCollection").ChatCollection.remove(e);
        o("WAWebContactCollection").ContactCollection.remove(e);
    }
    function s({ author, parentGroupId, subgroups, timestamp }) {
        const l = o("WAWebUpdateDbForCommunityAction").partitionSubgroups(subgroups, function(e) {
            return !o("WAWebUpdateSubgroupsCommunityAction").determineUnjoined(e);
        });
        const { joinedSubgroups, unjoinedSubgroups } = l;
        o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroupsInCollection(unjoinedSubgroups, parentGroupId);
        o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroupsInCollection(joinedSubgroups, parentGroupId);
        const c = r("WAWebGroupMetadataCollection").assertGet(parentGroupId);
        c.set({
            lastActivityTimestamp: o("WATimeUtils").unixTime()
        });
        if (!o("WAWebUserPrefsMeUser").isMeAccount(author)) {
            const d = subgroups.map((e)=>new (o("WAWebCommunityActivityModel")).CommunityActivity({
                    id: r("WAWebPonyfillsCryptoRandomUUID")(),
                    timestamp: timestamp ?? o("WATimeUtils").unixTime(),
                    communityId: parentGroupId,
                    type: o("WAWebCommunityActivityModel").ActivityTypeType.SUB_GROUP_LINK,
                    subgroupName: e.subject,
                    subgroupId: e.id
                }));
            r("WAWebCommunityActivityCollection").addDeduppedSubgroupLink(d);
        }
    }
    function u(e, t) {
        const n = o("WAWebUpdateDbForCommunityAction").partitionSubgroups(t, function(e) {
            return !o("WAWebUpdateSubgroupsCommunityAction").determineUnjoined(e);
        });
        const { joinedSubgroups, unjoinedSubgroups } = n;
        o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroupsInCollection(unjoinedSubgroups, e, false);
        o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroupsInCollection(joinedSubgroups, e, false);
        const l = t.map((e)=>e.id.toString());
        r("WAWebCommunityActivityCollection").remove(l);
    }
    function c(e) {
        const t = r("WAWebGroupMetadataCollection").assertGet(e);
        if (t.isParentGroup === true) {
            t.set({
                suspended: true,
                terminated: true
            });
            const n = o("WAWebChatCommunityUtils").getCagIdFromCommunity(e);
            n.forEach((e)=>{
                const t = r("WAWebGroupMetadataCollection").get(e);
                if (t != null && t.participants.iAmMember()) {
                    if (t != null) {
                        t.set({
                            terminated: true,
                            suspended: true
                        });
                    }
                }
            });
            const a = o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(t.joinedSubgroups.filter((e)=>!n.includes(e)), true).concat(o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(t.unjoinedSubgroups, false));
            u(e, a);
        }
    }
    function d(t) {
        const n = r("WAWebGroupMetadataCollection").get(t);
        if (!(n == null || n.isParentGroup !== true)) {
            const a = o("WAWebChatCommunityUtils").getCagIdFromCommunity(t);
            a.forEach((e)=>{
                const t = r("WAWebGroupMetadataCollection").get(e);
                if (t != null && t.participants.iAmMember()) {
                    if (t != null) {
                        t.set({
                            terminated: true,
                            parentGroup: undefined
                        });
                    }
                }
            });
            const i = o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(n.joinedSubgroups.filter((e)=>!a.includes(e)), true).concat(o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(n.unjoinedSubgroups, false));
            u(t, i);
            e(t);
        }
    }
    function m(t) {
        if (t) {
            const n = r("WAWebGroupMetadataCollection").get(t);
            if (n) {
                u(t, o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(n.unjoinedSubgroups, false));
                e(t);
            }
        }
    }
    function p(e, suspended) {
        const n = r("WAWebGroupMetadataCollection").assertGet(e);
        if (!(n.defaultSubgroup !== true || n.parentGroup == null)) {
            const o = r("WAWebGroupMetadataCollection").get(n.parentGroup);
            o?.set(babelHelpers.extends({
                suspended
            }, suspended ? {
                suspendAppealApprovedSeen: false
            } : null));
        }
    }
    l.updateModelsForSubgroupLink = s;
    l.updateModelsForSubgroupUnlink = u;
    l.updateModelsForIntegrityDeactivateCommunity = c;
    l.updateModelsForDeactivateCommunity = d;
    l.updateModelsForExitedCommunity = m;
    l.maybeUpdateModelsForCommunitySuspendedStatus = p;
}, 98);