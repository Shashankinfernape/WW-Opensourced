__d("WAWebGetThreadType", [
    "WAWebChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebWamEnumThreadType"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e.isStatus()) {
            return o("WAWebWamEnumThreadType").THREAD_TYPE.STATUS;
        }
        if (e.isBroadcast()) {
            return o("WAWebWamEnumThreadType").THREAD_TYPE.BROADCAST;
        }
        if (e.isNewsletter()) {
            return o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL;
        }
        if (t == null) {
            if (e.isGroup()) {
                return o("WAWebWamEnumThreadType").THREAD_TYPE.GROUP;
            }
            return o("WAWebWamEnumThreadType").THREAD_TYPE.INDIVIDUAL;
        }
        if (t === o("WAWebGroupType").GroupType.COMMUNITY) {
            return o("WAWebWamEnumThreadType").THREAD_TYPE.PARENT_GROUP;
        }
        if (t === o("WAWebGroupType").GroupType.DEFAULT) {
            return o("WAWebWamEnumThreadType").THREAD_TYPE.GROUP;
        }
        if (t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || t === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) {
            return o("WAWebWamEnumThreadType").THREAD_TYPE.SUB_GROUP;
        }
        if (t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            return o("WAWebWamEnumThreadType").THREAD_TYPE.DEFAULT_SUB_GROUP;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })();
    }
    function s(t) {
        const n = t?.groupMetadata;
        return e(o("WAWebChatGetters").getId(t), n != null ? o("WAWebGroupMetadataGetters").getGroupType(n) : null);
    }
    l.getThreadTypeFromWid = e;
    l.getThreadType = s;
}, 98);