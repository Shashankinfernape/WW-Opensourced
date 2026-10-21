__d("WAWebChatMsgsCollectionComparator", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (e.serverId == null || t.serverId == null) {
            return 0;
        }
        return e.serverId - t.serverId;
    }
    i.msgComparator = e;
}, 66);