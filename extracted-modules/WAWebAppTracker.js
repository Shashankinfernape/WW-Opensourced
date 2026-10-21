__d("WAWebAppTracker", [
    "$InternalEnum",
    "WALogger",
    "WAWebLogForCrash",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = n("$InternalEnum").Mirrored([
        "ADVProcessing",
        "BlockingOR",
        "BulkCreateOrMerge",
        "Camera",
        "ContactSync",
        "CriticalSync",
        "Disconnected",
        "FullSync",
        "GroupSync",
        "HistorySync",
        "HSProtobufParsing",
        "LayoutZoom",
        "Logout",
        "MediaDL",
        "MediaOpen",
        "MediaOpenImage",
        "MediaOpenVideo",
        "MediaProcessing",
        "MediaUL",
        "OfflineResume",
        "OnDemandSync",
        "PlayPTT",
        "PreKeyProcessing",
        "PurgeEphemeral",
        "PurgeStatuses",
        "PurgeViewOnce",
        "RecentSync",
        "RecordPTT",
        "Registration",
        "SelectChat",
        "SendMessage",
        "SyncD",
        "VoipAudio",
        "VoipVideo",
        "VoipWasmLoad",
        "FTSIndex",
        "PdfViewer",
        "StatusTab",
        "ChannelsTab",
        "CommunitiesTab",
        "UpdatesTab",
        "MediaMgr",
        "InitialChatLoad",
        "LoadMainScreen",
        "ClosingBrowserTab",
        "BrowserTabHidden",
        "VoipPreCall",
        "VoipPostCall",
        "VoipCameraPrewarm",
        "VoipOfferDecrypt",
        "VoipUiWindowCreate",
        "VoipSctpPrewarm",
        "VoipThreadPoolSetup",
        "VoipCallsTab",
        "CpuPressureCritical",
        "MemPressureHigh"
    ]);
    function u(e, t, n) {
        if (!Object.hasOwn(e, "appContext")) {
            e.appContext = t != null ? m.getAppContextWithLookback(t, n) : m.getAppContext();
        }
    }
    function c(e, t, n) {
        const r = t ? ` ${String(t)}:` : "";
        const o = n != null ? ` (${n.toLocaleString()}ms)` : "";
    }
    const d = (()=>{
        function t() {
            this.$1 = new Map;
            this.$2 = null;
            this.$3 = new Set;
        }
        const n = t.prototype;
        n.$4 = function() {
            this.$2 = null;
        };
        n.subscribe = function(t) {
            const e = this;
            this.$3.add(t);
            return function() {
                e.$3.delete(t);
            };
        };
        n.$5 = function() {
            const t = this.getAppContext();
            o("WAWebLogForCrash").logForCrash("wa:appContext", t || "none");
            for (const n of this.$3){
                try {
                    n(t);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[metric-attribution] app context listener failed"
                    ]))).catching(r("getErrorSafe")(t));
                }
            }
        };
        n.start = function(t) {
            let e;
            if (!((e = this.$1.get(t)) != null && e.isRunning)) {
                c("Start Tracker", t);
                this.$1.set(t, {
                    startTime: self.performance.now(),
                    endTime: void 0,
                    isRunning: true
                });
                this.$4();
                this.$5();
            }
        };
        n.mark = function(t) {
            c("Mark Tracker", t);
            const e = self.performance.now();
            this.$1.set(t, {
                startTime: e,
                endTime: e,
                isRunning: false
            });
            this.$4();
            this.$5();
        };
        n.stop = function(t) {
            const e = this.$1.get(t);
            if (e != null && e.isRunning) {
                e.endTime = self.performance.now();
                e.isRunning = false;
                const n = Math.round(e.endTime - e.startTime);
                c("Stop Tracker", t, n);
                this.$4();
                this.$5();
            }
        };
        n.isRunning = function(t) {
            const e = this.$1.get(t);
            return e != null && e.isRunning;
        };
        n.getAppContext = function() {
            if (this.$2 != null) {
                return this.$2;
            }
            const e = [];
            for (const [n, r] of this.$1){
                if (r.isRunning) {
                    e.push(n);
                }
            }
            if (e.length === 0) {
                return "";
            }
            e.sort();
            this.$2 = e.join("+");
            return this.$2;
        };
        n.getAppContextWithLookback = function(t, n = self.performance.now()) {
            const e = n - t;
            const r = [];
            for (const [a, i] of this.$1){
                if (!(i.startTime > n)) {
                    if (i.isRunning || i.endTime != null && i.endTime >= e) {
                        r.push(a);
                    }
                }
            }
            if (r.length === 0) {
                return "";
            }
            r.sort();
            return r.join("+");
        };
        n.clear = function() {
            this.$1.clear();
            this.$4();
            this.$5();
        };
        n.getRunningTrackers = function() {
            const e = [];
            for (const [n, r] of this.$1){
                if (r.isRunning) {
                    e.push(n);
                }
            }
            return e;
        };
        return t;
    })();
    var m = new d;
    l.AppTrackerType = s;
    l.attachWAMAppContext = u;
    l.AppTracker = m;
}, 98);