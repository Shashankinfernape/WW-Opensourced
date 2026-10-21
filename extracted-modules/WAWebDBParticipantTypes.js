__d("WAWebDBParticipantTypes", [], function(t, n, r, o, a, i, l) {
    const e = Object.freeze({
        ADD: "add",
        REMOVE: "remove",
        DEMOTE: "demote",
        PROMOTE: "promote",
        LINKED_GROUP_PROMOTE: "linked_group_promote",
        LINKED_GROUP_DEMOTE: "linked_group_demote"
    });
    const s = Object.freeze({
        DEVICE: "device",
        PARTICIPANT: "participant"
    });
    const u = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "GroupUnSyncedError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    l.PARTICIPANT_OPERATION = e;
    l.STALE_TYPES = s;
    l.GroupUnSyncedError = u;
}, 98);