__d("WAWebWebTPSharedSessionUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaWebTPSharedSession",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(sessionId, fileName, fileBuffer) {
            try {
                if (fileBuffer != null) {
                    yield S();
                    const a = yield g();
                    yield y(a);
                }
                const i = o("WATimeUtils").unixTime();
                const l = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                yield l.createOrReplace({
                    sessionId,
                    fileName,
                    expiresAt: o("WATimeUtils").castToUnixTime(i + o("WATimeUtils").DAY_SECONDS),
                    fileBuffer
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to store shared session: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                const n = yield t.get(e);
                if (!n) {
                    return null;
                }
                const r = o("WATimeUtils").unixTime();
                if (n.expiresAt <= r) {
                    yield t.remove(e);
                    return null;
                }
                return n;
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to get shared session: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
            const t = o("WATimeUtils").unixTime();
            const n = yield e.betweenCount([
                "expiresAt"
            ], t, Infinity);
            return n;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = r("justknobx")._("2196");
                const limit = e - t + 1;
                if (limit <= 0) {
                    return;
                }
                const a = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                const i = o("WATimeUtils").unixTime();
                const l = yield a.bulkDeleteRange([
                    "expiresAt"
                ], i, Infinity, {
                    limit
                });
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to evict sessions: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                yield t.merge(e, {
                    fileBuffer: undefined
                });
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to clear file buffer: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return v.apply(this, arguments);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                const t = o("WATimeUtils").unixTime();
                const n = yield e.bulkDeleteRange([
                    "expiresAt"
                ], 0, t);
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to remove expired sessions: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return R.apply(this, arguments);
    }
    l.storeWebTPSharedSession = m;
    l.getWebTPSharedSession = _;
    l.clearWebTPSharedSessionFileBuffer = b;
    l.removeExpiredWebTPSharedSessions = S;
}, 98);