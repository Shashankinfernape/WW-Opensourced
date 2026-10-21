__d("WAWebUpdateBlocklistDbJob", [
    "WALogger",
    "WAWebQueryBlockListJob",
    "WAWebSchemaBlocklist",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebQueryBlockListJob").getBlockingStatusForPSAUser();
            try {
                if (n) {
                    yield d(t, true);
                    return true;
                }
                yield d(t, false);
                return false;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to update blocking status of psa user"
                ]))).verbose().sendLogs("Failed to update blocking status of psa user");
                throw r("err")("failed to update blocking status of psa user");
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.toString();
            try {
                if (t) {
                    yield o("WAWebSchemaBlocklist").getBlocklistTable().createOrReplace({
                        id: n
                    });
                } else {
                    yield o("WAWebSchemaBlocklist").getBlocklistTable().remove(n);
                }
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateBlocklistDbJob failed"
                ]))).verbose().sendLogs("Failed to update blocklist db");
                throw r("err")("updateBlocklistDbJob failed");
            }
        });
        return m.apply(this, arguments);
    }
    l.updateBlockingStatusForPSAUser = u;
    l.updateBlocklistDbJob = d;
}, 98);