__d("WAWebUpdater", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAlarm",
    "WAWebCallCollection",
    "WAWebMiscBrowserUtils",
    "WAWebStreamModel",
    "WAWebSwUpdater",
    "WAWebUpdaterBaseUpdater",
    "WAWebUpdaterDownloadStateType",
    "WAWebUpdaterVersion",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "cr:12474",
    "cr:6022"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = 60000;
    const g = 1000;
    const h = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.clearHardExpiration = function() {
            t.prototype.clearHardExpiration.call(this);
            this.stopListening(r("WAWebCallCollection"), "change:activeCall");
        };
        a_prototype.showSoftUpdateBanner = function() {
            o("WAWebStreamModel").Stream.needsUpdate = true;
            o("WAWebStreamModel").Stream.isHardRefresh = false;
        };
        a_prototype.update = function(a) {
            const t = this;
            const i = a === undefined ? {} : a;
            const { belowHard, belowSoft, beta, serverVersion } = i;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "AppUpdate:update current: ",
                " latest: ",
                ""
            ])), String(this.activeVersion), String(serverVersion));
            const m = ++this.latestUpdateIteration;
            const p = serverVersion == null ? undefined : new (o("WAWebUpdaterVersion")).Version(serverVersion);
            const g = belowSoft === true;
            const h = typeof belowHard === "number";
            this.clearHardExpiration();
            if (typeof belowHard === "number") {
                this.hardExpirationTimer = r("WAWebAlarm").setLocalTimeout(function() {
                    if (r("WAWebCallCollection").activeCall != null) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[reload] Updater: hard exp deferred (active call)"
                        ])));
                        const e = function() {
                            t.stopListening(r("WAWebCallCollection"), "change:activeCall");
                            t.restart();
                        };
                        t.listenTo(r("WAWebCallCollection"), "change:activeCall", function() {
                            if (r("WAWebCallCollection").activeCall == null) {
                                e();
                            }
                        });
                        window.setTimeout(e, f);
                    } else {
                        t.restart();
                    }
                }, Date.now() + belowHard);
            }
            this.updateInProgress = (_ || (_ = n("Promise"))).resolve(this.updateInProgress).then(()=>t._update(p)).then((e)=>{
                t.updateInProgress = undefined;
                const n = m !== t.latestUpdateIteration;
                const r = e === o("WAWebUpdaterDownloadStateType").DownloadState.ERROR;
                const a = e === o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_NOT_AVAILABLE;
                if (!(n || r || a)) {
                    if (g || h) {
                        o("WAWebStreamModel").Stream.needsUpdate = true;
                        o("WAWebStreamModel").Stream.isHardRefresh = h;
                    }
                    if (h) {
                        t.listenToAndRun(o("WAWebStreamModel").Stream, "change:couldForce", function() {
                            if (o("WAWebStreamModel").Stream.couldForce) {
                                t.restart();
                            }
                        });
                    }
                }
                return e;
            });
            return this.updateInProgress;
        };
        a_prototype._update = function(t) {
            if (!this.activeVersion.equals(t) && n("cr:6022") != null && n("cr:6022").alive) {
                if (r("WAWebCallCollection").activeCall != null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "AppUpdate: deferring SW update during active call"
                    ])));
                    return (_ || (_ = n("Promise"))).resolve(o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_NOT_AVAILABLE);
                }
                return o("WAWebSwUpdater").updateSw();
            }
            const e = this.activeVersion.equals(t) ? o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_NOT_AVAILABLE : o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_DOWNLOADED;
            return (_ || (_ = n("Promise"))).resolve(e);
        };
        a_prototype.killServiceWorker = function() {
            if (!(n("cr:6022") != null && n("cr:6022").alive)) {
                return (_ || (_ = n("Promise"))).resolve();
            }
            const navigator_serviceWorker = navigator.serviceWorker;
            if (navigator_serviceWorker) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Killing service worker"
                ])));
                return navigator_serviceWorker.ready.then((e)=>e.unregister()).then((e)=>{
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Service worker unregistration status: ",
                        ""
                    ])), String(e));
                });
            }
            return (_ || (_ = n("Promise"))).resolve();
        };
        a_prototype._doRestart = function() {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] Updater.restart"
            ])));
            if (n("cr:12474") != null) {
                n("cr:12474").saveRefreshState();
            }
            r("WAWebMiscBrowserUtils").hardRefresh();
            return o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_DOWNLOADED;
        };
        a_prototype.restart = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e === true) {
                    return this.update({
                        belowHard: 0,
                        belowSoft: true
                    });
                }
                if (r("WAWebCallCollection").activeCall != null) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[reload] Updater.restart: ending active call before refresh"
                    ])));
                    yield (_ || (_ = n("Promise"))).race([
                        n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            try {
                                const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                if (e != null && e.type === "web") {
                                    yield e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, true);
                                }
                            } catch (e) {}
                        })(),
                        o("WAPromiseDelays").delayMs(g)
                    ]);
                }
                return this._doRestart();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebUpdaterBaseUpdater").UpdaterBase);
    const y = new h;
    l.UpdaterImpl = h;
    l.Updater = y;
}, 98);