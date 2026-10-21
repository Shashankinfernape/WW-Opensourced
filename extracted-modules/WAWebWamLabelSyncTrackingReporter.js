__d("WAWebWamLabelSyncTrackingReporter", [
    "WALogger",
    "WAWebMdLabelSyncTrackingWamEvent",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumLabelSyncDeviceRoleType",
    "WAWebWamEnumLabelSyncDirectionType",
    "WAWebWamEnumLabelSyncResultType",
    "WAWebWamEnumLabelSyncTypeEnum",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "whatsapp_label_sync_tracking_v1";
    const u = 1000;
    let c = null;
    let d = null;
    const m = new Map;
    let p = [];
    function _() {
        if (c == null) {
            const e = new TextEncoder;
            c = crypto.subtle.importKey("raw", e.encode(s), {
                name: "HMAC",
                hash: "SHA-256"
            }, false, [
                "sign"
            ]);
        }
        return c;
    }
    function f() {
        return o("WAWebMobilePlatforms").isSMB();
    }
    function g() {
        if (d != null) {
            return d;
        }
        try {
            d = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
            return d;
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to read hosted account preference for label sync tracking"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("label-sync-tracking-capi-hosted-read-error");
            d = false;
            return false;
        }
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield _();
            const n = new TextEncoder;
            const r = yield crypto.subtle.sign("HMAC", t, n.encode(e));
            return Array.from(new Uint8Array(r)).map((e)=>e.toString(16).padStart(2, "0")).join("");
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, ...args) {
            if (!f()) {
                return "logging_disabled";
            }
            try {
                for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++){
                    n[r - 1] = arguments[r];
                }
                const o = n.map((e)=>`,"${e}"`).join("");
                const a = `["${e}"${o}]`;
                return yield h(a);
            } catch (e) {
                return "hash_generation_failed";
            }
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return C("label_jid", e, t);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return C("label_edit", e);
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        if (f()) {
            k(e, t.chatJid);
            const r = m.get(e) ?? [];
            r.push(t);
            m.set(e, r);
            p.push({
                association: t,
                labelId: e
            });
            if (p.length > u) {
                const o = p.shift();
                if (o != null) {
                    const a = m.get(o.labelId);
                    if (a != null) {
                        const i = a.indexOf(o.association);
                        if (i !== -1) {
                            a.splice(i, 1);
                        }
                        if (a.length === 0) {
                            m.delete(o.labelId);
                        }
                    }
                }
            }
        }
    }
    function k(e, t) {
        const n = m.get(e);
        if (n != null) {
            const r = n.filter((e)=>e.chatJid !== t);
            if (r.length !== n.length) {
                if (r.length === 0) {
                    m.delete(e);
                } else {
                    m.set(e, r);
                }
                p = p.filter((n)=>n.labelId !== e || n.association.chatJid !== t);
            }
        }
    }
    function I(e) {
        const t = m.get(e);
        if (t == null) {
            return [];
        }
        m.delete(e);
        p = p.filter((t)=>t.labelId !== e);
        return t;
    }
    function T() {
        m.clear();
        p = [];
        d = null;
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return C("label_reorder", e);
        });
        return x.apply(this, arguments);
    }
    function $(labelSyncHash, labelSyncType, labelSyncDirection, labelSyncResult, labelSyncIsLabeled, labelSyncTimestamp, l, s) {
        if (f()) {
            const u = {
                labelSyncHash,
                labelSyncType,
                labelSyncDirection,
                labelSyncResult,
                labelSyncIsLabeled,
                labelSyncTimestamp,
                labelSyncDeviceRole: o("WAWebWamEnumLabelSyncDeviceRoleType").LABEL_SYNC_DEVICE_ROLE_TYPE.COMPANION,
                labelSyncIsCapiHosted: g()
            };
            if (l != null) {
                u.labelSyncHasPending = l;
            }
            if (s != null) {
                u.labelSyncPredefinedId = s;
            }
            const c = new (o("WAWebMdLabelSyncTrackingWamEvent")).MdLabelSyncTrackingWamEvent(u);
            c.commit();
        }
    }
    l.MAX_DEFERRED_ASSOCIATION_COUNT = u;
    l.generateLabelJidHash = v;
    l.generateLabelEditHash = R;
    l.recordDeferredLabelAssociation = E;
    l.removeDeferredLabelAssociation = k;
    l.takeDeferredLabelAssociations = I;
    l.resetLabelSyncTrackingState = T;
    l.generateLabelReorderHash = D;
    l.logLabelSyncEvent = $;
    l.LABEL_SYNC_TYPE_ENUM = o("WAWebWamEnumLabelSyncTypeEnum").LABEL_SYNC_TYPE_ENUM;
    l.LABEL_SYNC_DIRECTION_TYPE = o("WAWebWamEnumLabelSyncDirectionType").LABEL_SYNC_DIRECTION_TYPE;
    l.LABEL_SYNC_RESULT_TYPE = o("WAWebWamEnumLabelSyncResultType").LABEL_SYNC_RESULT_TYPE;
}, 98);