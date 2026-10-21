__d("WAWebGroupAbPropsSyncJob", [
    "WAGetGroupAbPropsProtocol",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABPropsLocalStorage",
    "WAWebApiGroupAbPropConfig",
    "WAWebGroupABPropsUpdateFromStorage",
    "WAWebGroupAbPropsParsingJob",
    "WAWebSchemaGroupMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 600;
    const d = 604800;
    const m = 86400;
    function p(e) {
        if (e == null) {
            return m;
        }
        if (e < c) {
            return c;
        }
        if (e > d) {
            return d;
        }
        return e;
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const r = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(e);
            return {
                hash: r?.groupAbPropsHash ?? null,
                refresh: p(r?.groupAbPropsRefreshSec),
                lastFetchTimestamp: r?.groupAbPropsLastFetchTimestampSec ?? null
            };
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupJid, hash, lastFetchTimestamp, refresh }) {
            yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().merge(groupJid, babelHelpers.extends({}, hash != null ? {
                groupAbPropsHash: hash
            } : undefined, {
                groupAbPropsLastFetchTimestampSec: o("WATimeUtils").castToUnixTime(lastFetchTimestamp),
                groupAbPropsRefreshSec: p(refresh)
            }));
        });
        return h.apply(this, arguments);
    }
    function y(lastFetchTimestamp, refresh) {
        if (lastFetchTimestamp == null) {
            return true;
        }
        const n = o("WATimeUtils").unixTime();
        return n - lastFetchTimestamp >= refresh;
    }
    function C(lastFetchTimestamp) {
        const t = o("WAWebABPropsLocalStorage").getGroupAbPropsEmergencyPushTimestamp();
        if (t == null) {
            return false;
        }
        if (lastFetchTimestamp == null) {
            return true;
        }
        return t > lastFetchTimestamp;
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = yield _(t);
            const r_hash = r.hash;
            const i = {
                propsGroup: t,
                propsHash: n ? r_hash : undefined
            };
            const l = yield o("WAGetGroupAbPropsProtocol").getGroupAbPropsProtocol(i);
            if (!l.success) {
                return {
                    success: false,
                    updated: false
                };
            }
            const l_value = l.value;
            const { hash, props, refresh, refreshId } = l_value;
            const p = o("WATimeUtils").unixTime();
            if (refreshId != null) {
                o("WAWebABPropsLocalStorage").setGroupAbPropsRefreshId(refreshId);
            }
            if (hash == null) {
                yield g({
                    groupJid: t,
                    hash: r_hash,
                    refresh,
                    lastFetchTimestamp: p
                });
                return {
                    success: true,
                    updated: false
                };
            }
            try {
                const f = o("WAWebGroupAbPropsParsingJob").parseGroupABProps(t, props);
                yield o("WAWebApiGroupAbPropConfig").updateGroupABPropConfigs(t, f);
                o("WAWebGroupABPropsUpdateFromStorage").updateSingleGroupABPropsCache(t, f);
                yield g({
                    groupJid: t,
                    hash,
                    refresh,
                    lastFetchTimestamp: p
                });
                return {
                    success: true,
                    updated: true
                };
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "update GroupABProps config table failed"
                ]))).verbose().sendLogs("update GroupABProps config table failed when syncing");
            }
            return {
                success: false,
                updated: false
            };
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(groupJid) {
            const t = yield _(groupJid);
            const { lastFetchTimestamp, refresh } = t;
            const a = C(lastFetchTimestamp);
            if (!(!a && !y(lastFetchTimestamp, refresh))) {
                const i = !a && lastFetchTimestamp != null;
                for(let l = 3; l-- > 0;){
                    try {
                        const c = yield b(groupJid, i);
                        if (c.success) {
                            return;
                        }
                    } catch (t) {
                        if (l === 0) {
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "failed to sync GroupABProps for group ",
                                ""
                            ])), groupJid).verbose().sendLogs("failed to sync GroupABProps");
                            const d = o("WATimeUtils").unixTime();
                            yield g({
                                groupJid,
                                lastFetchTimestamp: d
                            });
                        } else {
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "retrying sync GroupABProps for group ",
                                ""
                            ])), groupJid);
                        }
                        yield o("WAPromiseDelays").delayMs(10 * 1000 * Math.random());
                    }
                }
            }
        });
        return R.apply(this, arguments);
    }
    l.syncGroupABPropsTask = S;
}, 98);