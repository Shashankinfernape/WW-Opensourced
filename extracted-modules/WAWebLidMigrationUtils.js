__d("WAWebLidMigrationUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(t) {
        if (t.isLid()) {
            if (!t.isUser()) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid] toPn: not a user wid: ",
                    ""
                ])), t.toLogString()).sendLogs("toPn-not-user");
            }
            if (t.device != null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid] toPn: deviceWid: ",
                    ""
                ])), t.toLogString()).sendLogs("toPn-device-wid");
            }
            return o("WAWebApiContact").getPhoneNumber(t);
        }
        return t;
    }
    function m(e) {
        if (e.isLid()) {
            return e;
        }
        const t = o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(e));
        if (t == null) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-migration] toLid: no LID found for PN"
            ])));
        }
        return t;
    }
    function p(e) {
        return o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && e.isRegularUser();
    }
    function _(e) {
        const t = o("WAWebWidFactory").asUserWidOrThrow(e);
        if (t.isLid()) {
            return t;
        }
        return o("WAWebApiContact").getCurrentLid(t);
    }
    function f(e) {
        const t = _(e);
        if (t == null) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-migration] toUserLidOrThrow: no LID"
            ])));
            throw r("err")("No LID for user");
        }
        return t;
    }
    function g(e) {
        const t = d(e);
        if (t == null) {
            throw r("err")("No PN for user");
        }
        return t;
    }
    function h(e) {
        if (e) {
            return m;
        }
        return d;
    }
    function y(e, t) {
        if (e != null && t != null && e.isUser() && t.isUser() && e.isLid() !== t.isLid()) {
            const n = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
            if (n != null) {
                return [
                    n,
                    t
                ];
            }
            const r = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
            if (r != null) {
                return [
                    e,
                    r
                ];
            }
        }
        return [
            e,
            t
        ];
    }
    function C(e) {
        if (e.remote.isGroup() || e.remote.isStatus() || e.remote.isBroadcastList()) {
            return b(e);
        }
        if (e.remote.isUser()) {
            return v(e);
        }
    }
    function b(e) {
        const t = e.participant != null ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e.participant)) : null;
        if (t != null) {
            return new (r("WAWebMsgKey"))({
                fromMe: e.fromMe,
                remote: e.remote,
                id: e.id,
                participant: t
            });
        }
    }
    function v(e) {
        const t = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e.remote));
        if (t != null) {
            return new (r("WAWebMsgKey"))({
                fromMe: e.fromMe,
                remote: t,
                id: e.id,
                participant: e.participant
            });
        }
    }
    function S(e) {
        if (e.isLid()) {
            const n = d(e);
            if (n != null) {
                return [
                    e,
                    n
                ];
            }
        } else {
            const t = m(e);
            if (t != null) {
                return [
                    e,
                    t
                ];
            }
        }
        return [
            e
        ];
    }
    function R(e) {
        if (e == null) {
            return "none";
        }
        if (e) {
            return "lid";
        }
        return "pn";
    }
    function L(e) {
        let t;
        const n = e.id;
        return n.isLid() || n.isGroup() && !!((t = e.groupMetadata) != null && t.isLidAddressingMode);
    }
    l.toPn = d;
    l.toLid = m;
    l.shouldHaveAccountLid = p;
    l.toUserLid = _;
    l.toUserLidOrThrow = f;
    l.toPnOrThrow = g;
    l.toAddressingModeFactory = h;
    l.toCommonAddressingMode = y;
    l.getAlternateMsgKey = C;
    l.getPnAndLidToUpdate = S;
    l.getAddressingModeString = R;
    l.chatIsLid = L;
}, 98);