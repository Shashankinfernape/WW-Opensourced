__d("WAWebMusicMsgPlayerStore", [
    "fbt",
    "WAWebBoolFunc",
    "WAWebEventEmitter",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebMusicChatsConsumptionRefresherLoadable",
    "WAWebNetworkStatus",
    "WAWebPttAudioChannels",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = 300;
    const d = 6;
    const m = {
        msg: null,
        playId: 0,
        positionMs: 0,
        resumePositionMs: 0,
        status: "idle",
        volume: 1
    };
    const p = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.$MusicMsgPlayerStore$p_1 = m;
            t.$MusicMsgPlayerStore$p_2 = new Map;
            t.$MusicMsgPlayerStore$p_3 = null;
            t.$MusicMsgPlayerStore$p_4 = null;
            t.$MusicMsgPlayerStore$p_5 = new WeakSet;
            t.$MusicMsgPlayerStore$p_7 = function(e) {
                if (e === t.$MusicMsgPlayerStore$p_1.msg) {
                    t.$MusicMsgPlayerStore$p_2.delete(e);
                    t.stop();
                }
            };
            t.$MusicMsgPlayerStore$p_8 = function(e) {
                if (e === t.$MusicMsgPlayerStore$p_1.msg && e.type !== o("WAWebMsgType").MSG_TYPE.MUSIC) {
                    t.$MusicMsgPlayerStore$p_2.delete(e);
                    t.stop();
                }
            };
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getState = function() {
            return this.$MusicMsgPlayerStore$p_1;
        };
        t_prototype.play = function(t) {
            const e = this;
            const status = this.$MusicMsgPlayerStore$p_1.status;
            if (!(this.$MusicMsgPlayerStore$p_1.msg === t && (status === "loading" || status === "playing"))) {
                if (!r("WAWebNetworkStatus").online) {
                    f(s._("You're offline. Check your connection to play this song."));
                    return;
                }
                if (this.$MusicMsgPlayerStore$p_1.msg != null && this.$MusicMsgPlayerStore$p_1.msg !== t) {
                    this.stop();
                }
                this.$MusicMsgPlayerStore$p_6();
                this.$MusicMsgPlayerStore$p_3 = o("WAWebPttAudioChannels").MainAudioChannel.claim(this, function() {
                    return e.pause();
                });
                o("WAWebMsgCollection").MsgCollection.on("remove", this.$MusicMsgPlayerStore$p_7);
                t.on("change:type", this.$MusicMsgPlayerStore$p_8);
                const i = this.$MusicMsgPlayerStore$p_2.get(t) ?? 0;
                this.$MusicMsgPlayerStore$p_9({
                    msg: t,
                    playId: this.$MusicMsgPlayerStore$p_1.playId + 1,
                    positionMs: i,
                    resumePositionMs: i,
                    status: "loading",
                    volume: 1
                });
            }
        };
        t_prototype.onError = function(t) {
            const e = this;
            if (this.$MusicMsgPlayerStore$p_1.msg === t) {
                this.stop();
                if (this.$MusicMsgPlayerStore$p_5.has(t)) {
                    this.$MusicMsgPlayerStore$p_5.delete(t);
                    _();
                    return;
                }
                this.$MusicMsgPlayerStore$p_5.add(t);
                const n = function() {
                    if (e.$MusicMsgPlayerStore$p_1.msg == null) {
                        e.play(t);
                    } else {
                        e.$MusicMsgPlayerStore$p_5.delete(t);
                    }
                };
                t.once("change:musicData", n);
                o("WAWebMusicChatsConsumptionRefresherLoadable").refreshMusicChatsConsumptionLoadable([
                    t.id.toString()
                ], {
                    force: true
                }).catch(o("WAWebBoolFunc").returnFalse).then((r)=>{
                    if (!r) {
                        t.off("change:musicData", n);
                        e.$MusicMsgPlayerStore$p_5.delete(t);
                        _();
                    }
                });
            }
        };
        t_prototype.onPlaying = function(t) {
            if (this.$MusicMsgPlayerStore$p_1.msg === t && this.$MusicMsgPlayerStore$p_1.status === "loading") {
                this.$MusicMsgPlayerStore$p_5.delete(t);
                this.$MusicMsgPlayerStore$p_9({
                    status: "playing"
                });
            }
        };
        t_prototype.onProgress = function(t, n, r) {
            if (!(this.$MusicMsgPlayerStore$p_1.msg !== t || this.$MusicMsgPlayerStore$p_1.status !== "playing")) {
                if (r != null && n >= r) {
                    this.onEnded(t);
                    return;
                }
                const positionMs = Math.max(n, 0);
                this.$MusicMsgPlayerStore$p_2.set(t, positionMs);
                this.$MusicMsgPlayerStore$p_9({
                    positionMs
                });
            }
        };
        t_prototype.onEnded = function(t) {
            if (this.$MusicMsgPlayerStore$p_1.msg === t) {
                this.$MusicMsgPlayerStore$p_2.delete(t);
                this.stop();
            }
        };
        t_prototype.pause = function() {
            const e = this;
            const $MusicMsgPlayerStore$p_1 = this.$MusicMsgPlayerStore$p_1;
            const { msg, status } = $MusicMsgPlayerStore$p_1;
            if (!(msg == null || status !== "playing" && status !== "loading")) {
                this.$MusicMsgPlayerStore$p_10(function() {
                    e.$MusicMsgPlayerStore$p_11();
                    e.$MusicMsgPlayerStore$p_9({
                        status: "paused",
                        volume: 1
                    });
                });
            }
        };
        t_prototype.stop = function() {
            this.$MusicMsgPlayerStore$p_6();
            this.$MusicMsgPlayerStore$p_11();
            this.$MusicMsgPlayerStore$p_9(babelHelpers.extends({}, m, {
                playId: this.$MusicMsgPlayerStore$p_1.playId
            }));
        };
        t_prototype.$MusicMsgPlayerStore$p_10 = function(t) {
            const e = this;
            this.$MusicMsgPlayerStore$p_6();
            let n = 0;
            const r = function() {
                n++;
                if (n >= d) {
                    e.$MusicMsgPlayerStore$p_4 = null;
                    t();
                    return;
                }
                e.$MusicMsgPlayerStore$p_9({
                    volume: 1 - n / d
                });
                e.$MusicMsgPlayerStore$p_4 = self.setTimeout(r, c / d);
            };
            this.$MusicMsgPlayerStore$p_4 = self.setTimeout(r, c / d);
        };
        t_prototype.$MusicMsgPlayerStore$p_6 = function() {
            if (this.$MusicMsgPlayerStore$p_4 != null) {
                self.clearTimeout(this.$MusicMsgPlayerStore$p_4);
                this.$MusicMsgPlayerStore$p_4 = null;
            }
        };
        t_prototype.$MusicMsgPlayerStore$p_11 = function() {
            this.$MusicMsgPlayerStore$p_3?.();
            this.$MusicMsgPlayerStore$p_3 = null;
            o("WAWebMsgCollection").MsgCollection.off("remove", this.$MusicMsgPlayerStore$p_7);
            this.$MusicMsgPlayerStore$p_1.msg?.off("change:type", this.$MusicMsgPlayerStore$p_8);
        };
        t_prototype.$MusicMsgPlayerStore$p_9 = function(t) {
            this.$MusicMsgPlayerStore$p_1 = babelHelpers.extends({}, this.$MusicMsgPlayerStore$p_1, t);
            this.trigger("change");
        };
        return t;
    })(r("WAWebEventEmitter"));
    function _() {
        f(s._("Couldn't play this song. Try again later."));
    }
    function f(e) {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: e
        }));
    }
    const g = new p;
    l.MusicMsgPlayer = g;
}, 226);