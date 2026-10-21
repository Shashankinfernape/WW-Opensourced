__d("WAWebGroupBridgeApi", [
    "WAWebChatCollection",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebContactCollection",
    "WAWebCreateOrUpdateGroupMetadataAction",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupMetadataCollection",
    "WAWebMsgCollection",
    "WAWebRestoreGroupParticipantsAction",
    "WAWebUpdateModelForGroupAction",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    const e = {
        updateModelForGroupAction: function({ groupAction, groupMeta }) {
            r("promiseDone")(o("WAWebUpdateModelForGroupAction").updateModelForGroupAction(groupMeta, groupAction));
        },
        restoreGroupParticipantsForChats: function({ chatIds }) {
            r("promiseDone")(o("WAWebRestoreGroupParticipantsAction").restoreGroupParticipantsForChats(chatIds));
        },
        resyncGroupParticipantsForChats: function({ chatIds }) {
            r("promiseDone")(o("WAWebRestoreGroupParticipantsAction").resyncGroupParticipantsForChats(chatIds));
        },
        expireGroupInviteV4: function({ inviteMsgId }) {
            o("WAWebMsgCollection").MsgCollection.get(inviteMsgId)?.set({
                inviteCodeExp: "0"
            });
        },
        updateGroupSubject: function({ id, subject }) {
            o("WAWebContactCollection").ContactCollection.add({
                id,
                name: subject
            }, {
                merge: true
            });
        },
        updateGroupAddressingMode: function({ groupInfoUpdate, id, isLidAddressingMode }) {
            r("WAWebGroupMetadataCollection").get(id)?.set(babelHelpers.extends({
                isLidAddressingMode
            }, groupInfoUpdate));
        },
        notAlreadyInGroup: function({ groupId, participants }) {
            const a = o("WAWebChatCollection").ChatCollection.get(groupId)?.groupMetadata;
            if (a) {
                return participants.filter(({ id })=>!a.participants.get(id));
            }
            return participants;
        },
        createOrUpdateGroupMetadataFromQuery: function({ groupInfo }) {
            o("WAWebCreateOrUpdateGroupMetadataAction").createOrUpdateGroupMetadataModelFromQuery(groupInfo);
        },
        createOrUpdateSubgroupSuggestions: function({ parentGroupId, subgroupSuggestions }) {
            const a = r("WAWebGroupMetadataCollection").gadd(parentGroupId);
            a.subgroupSuggestions.set(subgroupSuggestions.map((e)=>babelHelpers.extends({}, e, {
                    id: o("WAWebCommunitySubgroupSuggestionsUtils").getSubgroupSuggestionId(e.id, e.owner),
                    groupId: e.id
                })));
        },
        updateGroupMetadataModelForAiGroupState: function({ group, isOpenBotGroup }) {
            r("WAWebGroupMetadataCollection").get(group)?.set({
                isOpenBotGroup
            });
        },
        updateParticipantsGroupHistorySentState: function({ group, receiverIds, state }) {
            const i = r("WAWebGroupMetadataCollection").get(group)?.participants;
            if (i != null) {
                for (const l of receiverIds){
                    i.get(l)?.set({
                        groupHistorySentState: state
                    });
                }
            }
        },
        updateGroupMetadataModelForShareHistoryDefault: function({ group, shouldDefaultGroupHistoryShareOn }) {
            r("WAWebGroupMetadataCollection").get(group)?.set({
                shouldDefaultGroupHistoryShareOn
            });
        },
        logGroupHistoryToggleModeMdSyncReceived: function({ isToggleOn }) {
            o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.groupHistoryToggleModeMdSyncReceived({
                isToggleOn
            });
        }
    };
    l.GroupBridgeApi = e;
}, 98);