__d("WAWebMessageProcessUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebCurrentUser",
    "WAWebGetChatRecordByAccountLid",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ lid: t, lidOrigin: n }) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "selectChatForOneOnOneMessage input: ",
                ", ",
                ""
            ])), t.toLogString(), n);
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                const r = yield b(t);
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "selectChatForOneOnOneMessage migrated output: ",
                        ", ",
                        ""
                    ])), r.accountLid, r.chatId);
                }
                return r;
            }
            const a = C(t, n);
            if (o("WAWebCurrentUser").isEmployee()) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "selectChatForOneOnOneMessage pre-migrated output: ",
                    ", ",
                    ""
                ])), a.accountLid, a.chatId);
            }
            return a;
        });
        return y.apply(this, arguments);
    }
    function C(t, n) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "select chat (unmigrated): select for ",
            ""
        ])), t.toLogString());
        if (n == null) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "select chat (unmigrated): general Lid chat -> PN"
            ])));
            const a = r("nullthrows")(o("WAWebApiContact").getPhoneNumber(t), "cannot select chat for incoming general Lid chat: no PN for Lid");
            return {
                chatId: a
            };
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "select chat (unmigrated): non-general Lid chat -> Lid"
        ])));
        return {
            chatId: t
        };
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "select chat (migrated): select for lid ",
                ""
            ])), e.toLogString());
            const t = yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(e);
            if (t.length > 1) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "select chat (migrated): err: multiple chats for lid"
                ])));
                throw r("err")("selectChatForOneOnOneMessageAfterMigration: found multiple chats for unique index account_lid");
            }
            if (t.length === 1) {
                const n = r("nullthrows")(t[0].id, "chat id should never be null");
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "select chat (migrated): found by lid. id=",
                    " lid=",
                    ""
                ])), n.toString(), e.toLogString());
                return {
                    accountLid: e,
                    chatId: o("WAWebWidFactory").asUserWidOrThrow(o("WAWebWidFactory").createWid(n))
                };
            }
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "select chat (migrated): assigning lid for new chat"
            ])));
            return {
                accountLid: e,
                chatId: e
            };
        });
        return v.apply(this, arguments);
    }
    l.selectChatForOneOnOneMessage = h;
}, 98);