__d("WAWebWamFalcoBatchRouter", [
    "WALogger",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoBatchLoggerLoader",
    "WAWebWamFalcoMigrationBatches",
    "WAWebWamFalcoModes",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Set;
    function u(t) {
        try {
            if (o("WAWebWamFalcoABProps").getWamFalcoMode() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO) {
                return {
                    sink: "wam",
                    reason: "mode"
                };
            }
            if (t.wamChannel !== "regular") {
                return {
                    sink: "wam",
                    reason: "channel"
                };
            }
            const n = o("WAWebWamFalcoMigrationBatches").FALCO_MIGRATION_BATCHES[t.id];
            if (n == null) {
                return {
                    sink: "wam",
                    reason: "unbatched"
                };
            }
            const a = t.getEventNameForFalco();
            if (a == null) {
                return {
                    sink: "wam",
                    reason: "unnamed"
                };
            }
            const i = a.startsWith("wam_") ? a.slice(4) : a;
            const l = o("WAWebWamFalcoABProps").getWamFalcoBlocklistEventNames();
            if (l.has(i) || l.has(a)) {
                return {
                    sink: "wam",
                    reason: "blocklisted"
                };
            }
            if (!o("WAWebWamFalcoBatchLoggerLoader").hasWamFalcoBatchLogger(n)) {
                return {
                    sink: "wam",
                    reason: "logger_unavailable"
                };
            }
            const u = o("WAWebWamFalcoBatchLoggerLoader").getWamFalcoBatchLoggerIfLoaded(n);
            if (u == null) {
                if (!s.has(n)) {
                    s.add(n);
                    o("WAWebWamFalcoBatchLoggerLoader").loadWamFalcoBatchLogger(n);
                }
                return {
                    sink: "wam",
                    reason: "logger_loading"
                };
            }
            if (u.hasLogger(t.id)) {
                return {
                    sink: "falco",
                    batch: n,
                    logger: u
                };
            }
            return {
                sink: "wam",
                reason: "logger_missing"
            };
        } catch (n) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] failed to resolve WAM_OR_FALCO routing for event ",
                ""
            ])), t.id).catching(r("getErrorSafe")(n)).sendLogs("wam_falco_wam_or_falco_routing_error", {
                sampling: 0.1
            });
            return {
                sink: "wam",
                reason: "config_error"
            };
        }
    }
    l.resolveWamFalcoRoute = u;
}, 98);