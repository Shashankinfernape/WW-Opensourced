__d("WAWebMessageCommunitySubgroupWelcomeTitle.react", [
    "fbt",
    "WAWebFormatParticipantNames"
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
        if (l) {
            if (a != null) {
                return s._("{user_name} added you to a group in a community", [
                    s._param("user_name", a)
                ]);
            }
            return s._("You joined a group via invite in a community");
        }
        if (a != null) {
            return s._("{user_name} added you to a group in the community: {community}", [
                s._param("user_name", a),
                s._param("community", i)
            ]);
        }
        return s._("You joined a group via invite in the community: {community}", [
            s._param("community", i)
        ]);
    }
    l.communitySubgroupWelcomeTitle = e;
}, 226);