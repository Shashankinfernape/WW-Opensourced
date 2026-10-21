__d("WAWebMaybePostMdGroupSyncMetrics", [
    "WALogger",
    "WAWebMdGroupParticipantMissAckWamEvent",
    "WAWebSendMsgCommonApi",
    "WAWebWamEnumTypeOfGroupEnum",
    "WAWebWamNumberToClientGroupSizeBucket",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c({ currentParticipantList, groupData, msgProtobuf, oldParticipantList }) {
        const c = d(oldParticipantList, currentParticipantList);
        const { added, removed } = c;
        if (added !== 0 || removed !== 0) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "postGroupParticipantSyncMetric: added: ",
                ", removed: ",
                ""
            ])), added, removed);
            const _ = new (o("WAWebMdGroupParticipantMissAckWamEvent")).MdGroupParticipantMissAckWamEvent;
            _.messageIsRevoke = o("WAWebSendMsgCommonApi").isRevokeMsg(msgProtobuf);
            _.groupSizeBucket = r("WAWebWamNumberToClientGroupSizeBucket")(groupData?.participantCount || 0);
            _.typeOfGroup = groupData?.wamTypeOfGroup || o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.GROUP;
            _.isLid = _.isLid = oldParticipantList.some((e)=>e.isLid());
            _.participantAddCount = added;
            _.participantRemoveCount = removed;
            _.commitAndWaitForFlush().catch((e)=>{
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "maybePostGroupSyncMetrics: event commit failed with ",
                    ""
                ])), String(e));
            });
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "postGroupParticipantSyncMetric: skip, no change"
        ])));
    }
    function d(e, t) {
        const n = new Set(e.map(String));
        const o = new Set(t.map(String));
        return {
            added: r("countWhere")(t, function(e) {
                return !n.has(String(e));
            }),
            removed: r("countWhere")(e, function(e) {
                return !o.has(String(e));
            })
        };
    }
    l.maybePostGroupSyncMetrics = c;
    l.computeParticipantChange = d;
}, 98);