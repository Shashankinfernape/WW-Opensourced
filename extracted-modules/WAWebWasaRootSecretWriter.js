__d("WAWebWasaRootSecretWriter", [
    "WALogger",
    "WALongInt",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebWasaRootSecretDb",
    "WAWebWasaUserPrefs",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(e, t, n);
            yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
            if (t != null) {
                yield o("WAWebWasaRootSecretDb").removeWasaRootSecretForId(e, t);
            }
            yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user);
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[wasa] root secret recovery: reading sync store for ",
                " target ",
                ""
            ])), t, n);
            try {
                const a = yield R(t, n);
                if (a == null) {
                    return false;
                }
                yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(t, a.stanzaId, a.secret);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[wasa] root secret recovery: rebuilt hidden row for ",
                    ""
                ])), n).sendLogs("wasa-root-secret-recovery-ok");
                return true;
            } catch (e) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[wasa] maybeRecoverWasaRootSecretFromStore failed: ",
                    ""
                ])), e).catching(r("getErrorSafe")(e)).sendLogs("wasa-root-secret-recovery-failed");
                return false;
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield v(e);
                const { secret: n, stanzaId: a } = t;
                if (a == null || n == null) {
                    yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user);
                    return t;
                }
                yield p(e, a, n);
                return {
                    reason: "recovered",
                    stanzaId: a
                };
            } catch (e) {
                return {
                    reason: `error: ${r("getErrorSafe")(e).message}`,
                    stanzaId: null
                };
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield E(e);
            if (t == null) {
                return {
                    reason: "no-stored-action",
                    stanzaId: null
                };
            }
            let n = null;
            let r = -1;
            for (const a of t){
                const { id: l, rootSecret: s } = a;
                if (!(a.status !== o("WAWebProtobufSyncAction.pb").SyncActionValue$WASARootSecretAction$RootSecretEntry$Status.ACTIVE || l == null || l === "" || s == null)) {
                    const u = o("WALongInt").maybeNumber(a.epoch) ?? 0;
                    if (n == null || u > r) {
                        n = {
                            stanzaId: l,
                            secret: new Uint8Array(s)
                        };
                        r = u;
                    }
                }
            }
            if (n == null) {
                return {
                    reason: `no-active-entry among ${t.length} stored`,
                    stanzaId: null
                };
            }
            return {
                reason: "recovered",
                secret: n.secret,
                stanzaId: n.stanzaId
            };
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield E(e);
            if (n == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[wasa] root secret recovery: no stored sync action for ",
                    ""
                ])), e).sendLogs("wasa-root-secret-recovery-no-action");
                return null;
            }
            const r = n.find((e)=>e.id === t);
            if (r == null) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[wasa] root secret recovery: ",
                    " stored entries, none match ",
                    ""
                ])), n.length, t).sendLogs("wasa-root-secret-recovery-no-match");
                return null;
            }
            const { id: a, rootSecret: i } = r;
            if (a == null || i == null) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[wasa] root secret recovery: stored entry for ",
                    " is malformed"
                ])), t).sendLogs("wasa-root-secret-recovery-malformed");
                return null;
            }
            return {
                stanzaId: a,
                secret: new Uint8Array(i)
            };
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const r = `["${o("WAWebSyncdConst").Actions.WasaRootSecret}","${e.toJid()}"]`;
            const a = yield o("WAWebSyncdDb").getSyncAction(r);
            if (a?.binarySyncData == null) {
                return null;
            }
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, a.binarySyncData).value?.wasaRootSecretAction?.secrets ?? [];
        });
        return k.apply(this, arguments);
    }
    l.applyWasaRootSecretForId = p;
    l.clearWasaRootSecret = f;
    l.maybeRecoverWasaRootSecretFromStore = h;
    l.maybeRecoverWasaActiveTargetFromStore = C;
}, 98);