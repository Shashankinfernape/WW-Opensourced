__d("WAWebFormatRevokedMsg", [
    "fbt",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebWidFormat"
], function(t, n, r, o, a, i, l, s) {
    const e = (revokeSender)=>{
        const e = o("WAWebContactCollection").ContactCollection.get(revokeSender);
        if (e) {
            return e.shortName || e.name || o("WAWebFrontendContactGetters").getDisplayName(e);
        }
        return o("WAWebWidFormat").widToFormattedUser(revokeSender);
    };
    function u(e) {
        return c(o("WAWebMsgGetters").getIsRevokedByMe(e), e.revokeSender);
    }
    function c(t, revokeSender) {
        if (t) {
            return s._("You deleted this message as admin");
        }
        if (revokeSender == null) {
            return s._("This message was deleted by an admin");
        }
        return s._("This message was deleted by admin {admin}", [
            s._param("admin", e(revokeSender))
        ]);
    }
    function d(e) {
        return m(o("WAWebMsgGetters").getIsSentByMe(e));
    }
    function m(e) {
        if (e) {
            return s._("You deleted this message");
        }
        return s._("This message was deleted");
    }
    function p(e) {
        const n = e.subtype ?? "sender";
        switch(n){
            case "sender":
                return d(e);
            case "admin":
                return u(e);
        }
    }
    function _(e) {
        const t = e.unsafe();
        return f({
            isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(t),
            isRevokedByMe: o("WAWebMsgGetters").getIsRevokedByMe(t),
            isSentByMe: o("WAWebMsgGetters").getIsSentByMe(t),
            revokeSender: e.revokeSender,
            subtype: e.subtype
        });
    }
    function f({ isNewsletterMsg, isRevokedByMe, isSentByMe, revokeSender, subtype }) {
        if (subtype !== "admin") {
            return m(isSentByMe);
        }
        if (isNewsletterMsg) {
            return g(isRevokedByMe);
        }
        return c(isRevokedByMe, revokeSender);
    }
    function g(isRevokedByMe) {
        if (isRevokedByMe) {
            return s._("You deleted this update");
        }
        return s._("This update was deleted");
    }
    l.formatRevokedComment = p;
    l.formatRevokedMsg = _;
    l.formatRevokedMsgFor = f;
}, 226);