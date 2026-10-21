__d("WAWebHistorySyncProgress", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 3;
    const m = [
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.RECEIVED,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.NOTIFICATION_STORED,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING
    ];
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = (yield o("WAWebUserPrefsHistorySync").getRecentSyncSingleChunkStatus())?.[1];
            if (r == null || m.includes(r)) {
                return null;
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] computeProgress: first chunk downloaded"
            ])));
            const a = Math.floor(1 / t / d * 100);
            return Math.min(100, a);
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e = yield o("WAWebUserPrefsHistorySync").getChunkCountForEndOfRecentHistorySync();
            if (!(e === 0 && (e = yield o("WAWebUserPrefsHistorySync").getEstimatedChunkCountForEndOfRecentHistorySync(), e === 0))) {
                const t = yield o("WAWebUserPrefsHistorySync").getLastHistorySyncedChunk();
                if (t != null) {
                    const n = t.split("_").map((e)=>parseInt(e, 10));
                    const r = n[0];
                    const a = n[1];
                    if (r === o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT) {
                        const i = Math.floor(a / e * 100);
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] computeProgress: last chunk done"
                        ])));
                        return Math.min(100, i);
                    }
                }
                return p(e);
            }
        });
        return g.apply(this, arguments);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield (c || (c = n("Promise"))).all([
                    f(),
                    o("WAWebUserPrefsHistorySync").getHistorySyncStatus()
                ]);
                const t = e[0];
                const r = e[1];
                const a = r?.recentCompleted !== true;
                o("WAWebBackendApi").frontendFireAndForget("setHistorySyncProgress", {
                    incomplete: a
                });
                if (t != null) {
                    o("WAWebBackendApi").frontendFireAndForget("setHistorySyncProgress", {
                        progress: t
                    });
                }
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "updateProgressModel: error computing progress"
                ])));
            }
        });
        return y.apply(this, arguments);
    }
    const C = 120;
    let b = null;
    function v() {
        if (b != null) {
            self.clearTimeout(b);
        }
    }
    function S() {
        v();
        b = self.setTimeout(function() {
            E(true);
        }, C * 1000);
    }
    let R = 0;
    function L(e) {
        R = e ? 0 : R + 1;
        if (R === 0) {
            S();
        }
        E(R >= 3);
    }
    function E(e) {
        o("WAWebBackendApi").frontendFireAndForget("setHistorySyncPaused", {
            paused: e
        });
    }
    function k() {
        o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().onCriticalSyncDone(function() {
            S();
        });
        o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().onRecentChatHistorySynced(function() {
            v();
            E(false);
            o("WAWebBackendApi").frontendFireAndForget("setHistorySyncProgress", {
                progress: 100,
                incomplete: false
            });
        });
    }
    l.updateHistorySyncProgressModel = h;
    l.handleChunkProgress = L;
    l.initHistorySyncProgressListeners = k;
}, 98);