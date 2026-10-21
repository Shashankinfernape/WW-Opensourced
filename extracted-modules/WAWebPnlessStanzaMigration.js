__d("WAWebPnlessStanzaMigration", [
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t, n) {
        if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || !t.isRegularUserPn()) {
            return false;
        }
        if (t.getDeviceId() !== 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pnless-stanza] shouldConvertToLid: device wid ",
                " rcpt=",
                ""
            ])), t.toLogString(), n ?? "n/a").sendLogs("pnless-device-wid");
            return false;
        }
        return true;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebWidFactory").asUserWidOrThrow(e);
            const n = yield o("WAWebApiChatCommon").getChatRecord(t);
            const r = n?.accountLid;
            if (r == null) {
                return null;
            }
            return o("WAWebWidFactory").createUserLidOrThrow(r);
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!c(e, t)) {
                return e;
            }
            const n = yield d(e);
            return n ?? (o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[pnless-stanza] getStanzaToFromChatId: no lid ",
                " receiptType=",
                ""
            ])), e.toLogString(), t).sendLogs("pnless-no-lid"), e);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.data.to;
            if (c(t)) {
                const n = yield d(t);
                if (n == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[pnless-stanza] maybeReplaceWidWithAccountLid: no lid ",
                        ""
                    ])), t.toLogString()).tags("pnless-stanzas").sendLogs("pnless-no-lid-in-send");
                    return;
                }
                if (e.type === "message") {
                    e.data.to = n;
                } else if (e.type === "addon") {
                    e.data = babelHelpers.extends({}, e.data, {
                        to: n
                    });
                }
            }
        });
        return g.apply(this, arguments);
    }
    l.getStanzaToFromChatId = p;
    l.maybeReplaceWidWithAccountLid = f;
}, 98);