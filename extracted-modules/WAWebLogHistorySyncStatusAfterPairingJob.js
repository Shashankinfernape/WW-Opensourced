__d("WAWebLogHistorySyncStatusAfterPairingJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsHistorySync",
    "WAWebWamEnumActiveTimeAfterPairing",
    "asyncToGeneratorRuntime",
    "requireDeferred"
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
    const g = r("requireDeferred")("WAWebCommitHistorySyncStatusData").__setRef("WAWebLogHistorySyncStatusAfterPairingJob");
    function h(t, r) {
        const a = (o("WATimeUtils").unixTime() - t) / 60;
        if (a < 5) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] skip status log: too soon after pairing"
            ])));
            return (f || (f = n("Promise"))).resolve();
        }
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("logHistorySyncStatusAfterPairing", function(e) {
            return y(e.timeAfterPairingMins, e.loggingCount);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW
        }).waitUntilCompleted({
            timeAfterPairingMins: a,
            loggingCount: r
        });
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t >= 5) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] skip status log: logged 5+ times"
                ])));
                return;
            }
            if (e >= 60) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] log status for 60 minutes after pairing"
                ])));
                yield b(o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING.MINS_60);
                o("WAWebUserPrefsHistorySync").setHistorySyncStatusAfterPairingLoggingCount(5);
                return;
            }
            if (t < 4 && e >= 40) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] log status for 40 minutes after pairing"
                ])));
                yield b(o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING.MINS_40);
                o("WAWebUserPrefsHistorySync").setHistorySyncStatusAfterPairingLoggingCount(4);
                return;
            }
            if (t < 3 && e >= 20) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] log status for 20 minutes after pairing"
                ])));
                yield b(o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING.MINS_20);
                o("WAWebUserPrefsHistorySync").setHistorySyncStatusAfterPairingLoggingCount(3);
                return;
            }
            if (t < 2 && e >= 10) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] log status for 10 minutes after pairing"
                ])));
                yield b(o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING.MINS_10);
                o("WAWebUserPrefsHistorySync").setHistorySyncStatusAfterPairingLoggingCount(2);
                return;
            }
            if (t < 1 && e >= 5) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] log status for 5 minutes after pairing"
                ])));
                yield b(o("WAWebWamEnumActiveTimeAfterPairing").ACTIVE_TIME_AFTER_PAIRING.MINS_5);
                o("WAWebUserPrefsHistorySync").setHistorySyncStatusAfterPairingLoggingCount(1);
                return;
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] do not log status as no requirment meets"
            ])));
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield g.load();
            const n = t.commitHistorySyncStatusData;
            return n(e);
        });
        return v.apply(this, arguments);
    }
    l.logHistorySyncStatusAfterPairingJob = h;
    l.logHistorySyncStatusAfterPairing = y;
    l.commitHistorySyncStatusData = b;
}, 98);