__d("WAWebCommentFrontendUtils", [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const e_body = e.body;
        if (e_body == null) {
            return e.links;
        }
        const r = o("WAWebMsgLinks").getLinksFromMsgImpl({
            content: e_body,
            sender: e.author,
            cachedValue: e.links,
            currentIndex: e.linksIndexParsed,
            endIndex: t
        });
        const a = r[0];
        const i = r[1];
        e.linksIndexParsed = i;
        e.links = a;
        return a;
    }
    function s(e, t) {
        const e_body = e.body;
        if (e_body == null) {
            return e.phoneNumbers;
        }
        const r = o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsgImpl({
            content: e_body,
            cachedValue: e.phoneNumbers,
            currentIndex: e.phoneNumbersIndexParsed,
            endIndex: t
        });
        const a = r[0];
        const i = r[1];
        e.phoneNumbersIndexParsed = i;
        e.phoneNumbers = a;
        return a;
    }
    function u(e) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(e.author)) {
            return true;
        }
        const t = o("WAWebContactCollection").ContactCollection.get(e.author);
        if (t != null && o("WAWebFrontendContactGetters").getIsMyContact(t)) {
            return true;
        }
        const n = o("WAWebChatCollection").ChatCollection.get(e.parentMsgKey.remote);
        if (n != null) {
            return n.isTrusted() && n.notSpam;
        }
        return false;
    }
    function c(e) {
        return e.length > 1 && o("WAWebFrontendMsgGetters").getAsAlbumAsset(e[0]) != null;
    }
    l.getLinksFromComment = e;
    l.getPhoneNumbersFromComment = s;
    l.isTrustedComment = u;
    l.isAlbumMessageContainer = c;
}, 98);