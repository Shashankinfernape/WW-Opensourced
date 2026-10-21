__d("WAWebMessageCommunityWelcomeAdminTitle.react", [
    "fbt",
    "WAWebFormatLinkNotification",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, chat, templateParams }) {
        const l = o("WAWebUserPrefsMeUser").isMeAccount(chat.groupMetadata?.owner);
        if (l) {
            return s._("Welcome to your community!");
        }
        return r("nullthrows")(o("WAWebFormatLinkNotification").formatLinkNotifAsFbt({
            author,
            subject: null,
            subtype: "community_create",
            templateParams
        }));
    }
    l.communityWelcomeAdminTitle = e;
}, 226);