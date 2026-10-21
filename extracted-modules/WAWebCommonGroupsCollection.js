__d("WAWebCommonGroupsCollection", [
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatModel",
    "WAWebGroupMetadataCollection",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n) {
            let a;
            a = e.call(this) || this;
            a.stale = false;
            a.updateCommonGroups = function({ collectionIsStale, gid }) {
                const i = r("WAWebGroupMetadataCollection").assertGet(gid);
                const i_participants = i.participants;
                const s = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                const u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                const c = i_participants.get(a.contact) != null;
                const d = s != null && i_participants.get(s) != null;
                const m = i_participants.get(u) != null;
                const p = c && (d || m);
                if (a.get(gid)) {
                    if (!p) {
                        a.remove(gid);
                    }
                } else if (p || collectionIsStale) {
                    a.add(o("WAWebChatCollection").ChatCollection.assertGet(gid));
                }
            };
            a.add(t, {
                silent: true
            });
            a.contact = n;
            const i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            const l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            if (i != null) {
                a.listenTo(r("WAWebGroupMetadataCollection"), `group_participant_change_${i.toString()}`, a.updateCommonGroups);
            }
            a.listenTo(r("WAWebGroupMetadataCollection"), `group_participant_change_${l.toString()}`, a.updateCommonGroups);
            a.listenTo(r("WAWebGroupMetadataCollection"), `group_participant_change_${a.contact.toString()}`, a.updateCommonGroups);
            a.listenTo(o("WAWebSocketModel").Socket, "change:stream", function() {
                if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED) {
                    a.stale = true;
                }
            });
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebChatModel").Chat;
    e.comparator = r("WAWebChatComparator");
    l.default = e;
}, 98);