__d("WAWebHistorySyncProgressModel", [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseModel",
    "WAWebHistorySyncProgressGetters",
    "WAWebModelUtils",
    "WAWebUserPrefsHistorySync"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1200;
    const u = 30;
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebModelUtils").prop("HISTORY_SYNC_PROGRESS");
            e.incomplete = o("WAWebModelUtils").prop(false);
            e.realProgress = o("WAWebModelUtils").prop(null);
            e.fakeProgress = o("WAWebModelUtils").prop(0);
            e.remainingPausedSeconds = o("WAWebModelUtils").prop(o("WAWebUserPrefsHistorySync").getHistorySyncRemainingPausedSeconds());
            e._fakePausedCompletionTimeout = o("WAWebModelUtils").prop();
            e._progressIncrementTimeout = o("WAWebModelUtils").prop();
            e._lastUpdateSeconds = o("WAWebModelUtils").prop(o("WATimeUtils").unixTime());
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.init = function() {
            if (this.remainingPausedSeconds != null && this.remainingPausedSeconds > 0) {
                this.pausedExpiryCheckpoint(0);
            }
        };
        n_prototype.setPaused = function(t) {
            const e = this;
            if (t) {
                if (o("WAWebHistorySyncProgressGetters").getPaused(this)) {
                    return;
                }
                o("WAWebUserPrefsHistorySync").setHistorySyncRemainingPausedSeconds(s);
                this.remainingPausedSeconds = s;
                self.setTimeout(function() {
                    return e.pausedExpiryCheckpoint(u);
                }, u * 1000);
                return;
            }
            o("WAWebUserPrefsHistorySync").setHistorySyncRemainingPausedSeconds(null);
            this.remainingPausedSeconds = null;
        };
        n_prototype.pausedExpiryCheckpoint = function(n) {
            const t = this;
            if (this._fakePausedCompletionTimeout != null) {
                self.clearTimeout(this._fakePausedCompletionTimeout);
            }
            const remainingPausedSeconds = this.remainingPausedSeconds;
            if (remainingPausedSeconds != null) {
                const a = remainingPausedSeconds - n;
                o("WAWebUserPrefsHistorySync").setHistorySyncRemainingPausedSeconds(a);
                this.remainingPausedSeconds = a;
                if (a <= 0) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] pausedExpiryCheckpoint: ",
                        "s paused, removing UI"
                    ])), s);
                    return;
                }
                self.setTimeout(function() {
                    return t.pausedExpiryCheckpoint(u);
                }, u * 1000);
            }
        };
        n_prototype.setProgress = function(t) {
            const n = this.realProgress ?? 0;
            this.realProgress = t;
            if (!(t <= n)) {
                this.fakeProgress = 0;
                if (this._progressIncrementTimeout != null) {
                    self.clearTimeout(this._progressIncrementTimeout);
                }
                const r = o("WATimeUtils").unixTime();
                if (t < 100) {
                    const a = r - this._lastUpdateSeconds;
                    const i = t - n;
                    const l = a / i;
                    this._incrementFakeProgressByOne(Math.max(l, 1), Math.min(i, 100 - t));
                }
                this._lastUpdateSeconds = r;
            }
        };
        n_prototype.setIncomplete = function(t) {
            this.incomplete = t;
        };
        n_prototype._incrementFakeProgressByOne = function(t, n) {
            const e = this;
            if (this._progressIncrementTimeout != null) {
                self.clearTimeout(this._progressIncrementTimeout);
            }
            if (!(!o("WAWebHistorySyncProgressGetters").getInProgress(this) || this.fakeProgress + 1 >= n)) {
                this._progressIncrementTimeout = self.setTimeout(function() {
                    e.fakeProgress += 1;
                    e._incrementFakeProgressByOne(t, n);
                }, t * 1000);
            }
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "historySyncProgress";
    let d = null;
    function m() {
        if (d == null) {
            const e = new (o("WAWebBaseModel").defineModel(c));
            e.init();
            d = e;
        }
        return d;
    }
    l.HistorySyncProgressModel = c;
    l.getHistorySyncProgressModel = m;
}, 98);