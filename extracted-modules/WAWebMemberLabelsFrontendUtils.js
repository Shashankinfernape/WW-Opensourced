__d("WAWebMemberLabelsFrontendUtils", [
    "WAJids",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelCollection",
    "WAWebMemberLabelHooks",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (t == null || e == null || !o("WAWebChatGetters").getIsGroup(e) || !t.isUser()) {
            return null;
        }
        const n = o("WAWebLidMigrationUtils").toUserLid(t);
        if (n == null) {
            return null;
        }
        const r = o("WAWebWidToJid").widToGroupJid(e.id);
        const a = o("WAJids").userIdFromJid(o("WAWebWidToJid").widToUserJid(n));
        const i = o("WAJids").toLidUserJid(a);
        return o("WAWebMemberLabelHooks").createMemberLabelKey(r, i);
    }
    function s(t) {
        let n;
        let r;
        if (t.from === "message") {
            n = t.chat;
            r = t.sender;
        } else if (t.from === "chat_and_member") {
            n = t.chat;
            r = t.member;
        } else {
            return null;
        }
        return e(n, r);
    }
    function u(e) {
        return e != null && o("WAWebChatGetters").getIsGroup(e) && e.isTrusted();
    }
    function c(e, t) {
        return e && u(t);
    }
    function d(e) {
        const t = r("WAWebMemberLabelCollection").get(e);
        if (t == null) {
            return false;
        }
        return t.label.trim() !== "";
    }
    function m(e) {
        const t = s(e);
        if (t == null) {
            return false;
        }
        return d(t);
    }
    function p(e) {
        if (e == null) {
            return false;
        }
        const t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        return m({
            from: "chat_and_member",
            chat: e,
            member: t
        });
    }
    function _(t) {
        if (t) {
            const n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const r = e(t, n);
            if (r) {
                return f(r);
            }
        }
    }
    function f(e) {
        const t = r("WAWebMemberLabelCollection").get(e);
        if (t) {
            return t.label;
        }
    }
    function g(e, t) {
        return o("WAWebContactGetters").getIsMe(e) && m({
            from: "chat_and_member",
            chat: t,
            member: e.id
        });
    }
    function h(e, t) {
        if (e == null || t == null || !o("WAWebChatGetters").getIsGroup(e)) {
            return false;
        }
        const n = m({
            from: "chat_and_member",
            chat: e,
            member: t
        });
        return !n && o("WAWebUserPrefsMeUser").isMeAccount(t);
    }
    l.memberLabelKeyFrom = s;
    l.shouldShowMemberLabelForChat = u;
    l.shouldShowMemberLabelForMsg = c;
    l.memberLabelExists = m;
    l.myMemberLabelExistsForChat = p;
    l.getMyMemberLabelStringForChat = _;
    l.canEditMemberLabel = g;
    l.shouldShowAddMemberTagCTA = h;
}, 98);