__d("WAWebMessageCommunityLinkGroupTitle.react", [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, clickable, templateParams }) {
        const a = author ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable,
            jid: author
        }) : null;
        const i = o("WAWebFormatParticipantNames").getFormattedCommunityNameWithAlternative({
            jid: templateParams[0],
            asString: !clickable,
            alternativeStringName: templateParams[1]
        });
        const l = !i;
        const u = o("WAWebUserPrefsMeUser").isMeAccount(author);
        if (l) {
            if (u) {
                return s._("You added this group to a community");
            }
            if (a != null) {
                return s._("{author} added this group to a community", [
                    s._param("author", a)
                ]);
            }
            return s._("This group was added to a community");
        }
        if (u) {
            return s._("You added this group to the community: {community}", [
                s._param("community", i)
            ]);
        }
        if (a != null) {
            return s._("{author} added this group to the community: {community}", [
                s._param("author", a),
                s._param("community", i)
            ]);
        }
        return s._("This group was added to the community: {community}", [
            s._param("community", i)
        ]);
    }
    l.communityLinkGroupTitle = e;
}, 226);