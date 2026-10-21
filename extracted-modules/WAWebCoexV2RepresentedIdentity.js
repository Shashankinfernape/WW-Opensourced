__d("WAWebCoexV2RepresentedIdentity", [
    "WAWebCoexV2GatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e({ author: t, metaFrom: n, peerRecipientLid: r, peerRecipientPn: a, peerRecipientUsername: i, senderPn: l, senderUsername: c, targetChatJid: d }) {
        const p = s(t, n, d);
        if (p == null) {
            return null;
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(p.metaFrom)) {
            return u(p.targetUser, r, a, i);
        }
        return m(p.metaFrom, p.targetUser, l, c);
    }
    function s(e, t, n) {
        if (t == null || n == null || !t.isLid() || !n.isRegularUser() || !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e, t) || o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            return null;
        }
        return {
            metaFrom: o("WAWebWidFactory").asUserLidOrThrow(t),
            targetUser: o("WAWebWidFactory").asUserWidOrThrow(n)
        };
    }
    function u(e, t, n, r) {
        const a = p(n, r);
        if (a == null) {
            return null;
        }
        if (e.isLid()) {
            return c(o("WAWebWidFactory").asUserLidOrThrow(e), t, a);
        }
        return d(e, t, a);
    }
    function c(e, t, n) {
        if (t != null && !e.equals(t)) {
            return null;
        }
        return babelHelpers.extends({}, n, {
            identitySource: "peer-recipient",
            representedLid: e,
            representedUser: e
        });
    }
    function d(e, t, n) {
        if (n.phoneNumber != null && !e.equals(n.phoneNumber) || t != null && o("WAWebUserPrefsMeUser").isMeAccount(t)) {
            return null;
        }
        return babelHelpers.extends({}, n, {
            identitySource: "peer-recipient",
            phoneNumber: _(e),
            representedLid: t,
            representedUser: t ?? e
        });
    }
    function m(e, t, n, r) {
        if (!t.equals(e) || n != null && r != null && r !== "") {
            return null;
        }
        const o = p(n, r);
        if (o == null) {
            return null;
        }
        return babelHelpers.extends({}, o, {
            identitySource: "sender",
            representedLid: e,
            representedUser: e
        });
    }
    function p(e, t) {
        const n = t === "" ? null : t;
        if (e == null) {
            return {
                phoneNumber: null,
                username: n
            };
        }
        const r = _(e);
        if (r == null || o("WAWebUserPrefsMeUser").isMeAccount(r)) {
            return null;
        }
        return {
            phoneNumber: r,
            username: n
        };
    }
    function _(e) {
        if (e.isRegularUserPn() && !e.isHostedLid()) {
            return o("WAWebWidFactory").asUserWidOrThrow(e);
        }
        return null;
    }
    l.getCoexV2RepresentedIdentity = e;
}, 98);