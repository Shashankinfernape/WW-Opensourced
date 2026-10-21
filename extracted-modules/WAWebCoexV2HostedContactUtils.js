__d("WAWebCoexV2HostedContactUtils", [
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBlocklistMigration",
    "WAWebSchemaBlocklist",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield o("WAWebApiContact").getContactRecord(t);
                return n?.isHosted === true;
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay: failed to read peer contact record"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-peer-hosted-read-failed");
                return false;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.isUser()) {
                return false;
            }
            try {
                if (o("WAWebBlocklistMigration").applyBlocklistV2Rules()) {
                    return yield p(e);
                }
                return yield f(e);
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay: failed to read peer blocklist; treating peer as blocked"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-peer-blocklist-read-failed");
                return true;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isRegularUserPn()) {
                const n = (yield o("WAWebApiChatCommon").getChatRecord(e))?.accountLid;
                if (n == null) {
                    return false;
                }
                return (yield o("WAWebSchemaBlocklist").getBlocklistTable().get(n)) != null;
            }
            return h(e);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (yield h(e)) {
                return true;
            }
            const t = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
            return t != null && (yield h(t));
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (yield o("WAWebSchemaBlocklist").getBlocklistTable().get(e.toString())) != null;
        });
        return y.apply(this, arguments);
    }
    l.isPeerCoexV2Hosted = u;
    l.isPeerCoexV2Blocked = d;
}, 98);