__d("WAWebPttPrefs", [
    "WAShiftTimer",
    "WAWebBaseModel",
    "WAWebServerPropConstants",
    "WAWebUserPrefsGeneral",
    "clamp"
], function(t, n, r, o, a, i, l) {
    const e = [
        1,
        1.5,
        2
    ];
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.playbackRate = o("WAWebBaseModel").prop(1);
            e.outOfChatPlayerMessage = o("WAWebBaseModel").prop(null);
            e.playbackControlMessageId = o("WAWebBaseModel").prop(null);
            e.isOocPlayerClosedByUser = o("WAWebBaseModel").prop(false);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.closeOocPlayer = function() {
            this.isOocPlayerClosedByUser = true;
        };
        n_prototype.initialize = function() {
            t.prototype.initialize.call(this);
            this._restorePlaybackRate();
            this.on("change:playbackRate", function(e, t) {
                o("WAWebUserPrefsGeneral").setPttPlaybackRate(t);
            });
        };
        n_prototype.setPlayingMessage = function(t) {
            const e = this;
            this._setPlayingMessage(t);
            let n = function() {
                if (e._playingMessage === t) {
                    e._setPlayingMessage(null);
                }
            };
            return function() {
                n?.();
                n = null;
            };
        };
        n_prototype._setPlayingMessage = function(t) {
            this._playingMessage = t ?? null;
            if (t) {
                this.outOfChatPlayerMessage = t;
                this.isOocPlayerClosedByUser = false;
            }
            if (this._playingMessage == null) {
                this._scheduleClearPlaybackRateControl();
                return;
            }
            u.cancel();
            this.playbackControlMessageId = this._playingMessage?.id.toString();
        };
        n_prototype._restorePlaybackRate = function() {
            this.playbackRate = o("WAWebUserPrefsGeneral").getPttPlaybackRate();
        };
        n_prototype.advancePlaybackRateFor = function(t) {
            this._changePlaybackRateFor(t, 1, true);
        };
        n_prototype.increasePlaybackRateFor = function(t) {
            this._changePlaybackRateFor(t, 1, false);
        };
        n_prototype.decreasePlaybackRateFor = function(t) {
            this._changePlaybackRateFor(t, -1, false);
        };
        n_prototype._changePlaybackRateFor = function(n, o, a) {
            const t = e.indexOf(this.playbackRate);
            const i = a ? (t + o + e.length) % e.length : r("clamp")(t + o, 0, e.length - 1);
            this.playbackRate = e[i];
            if (this._playingMessage == null) {
                this.playbackControlMessageId = n.toString();
                this._scheduleClearPlaybackRateControl();
            }
        };
        n_prototype._scheduleClearPlaybackRateControl = function() {
            const playbackControlMessageId = this.playbackControlMessageId;
            if (playbackControlMessageId != null) {
                u.onOrAfter(o("WAWebServerPropConstants").PTT_PLAYBACK_SPEED_HIDE_DELAY, playbackControlMessageId);
            }
        };
        n_prototype.delayClearPlaybackRateControl = function() {
            if (u.isScheduled()) {
                const e = this.playbackControlMessageId;
                if (e != null) {
                    u.onOrAfter(o("WAWebServerPropConstants").PTT_PLAYBACK_SPEED_HIDE_DELAY, e);
                }
            }
        };
        n_prototype.clearOutOfChatMessage = function(t) {
            if (t == null || this.outOfChatPlayerMessage === t) {
                this.outOfChatPlayerMessage = null;
            }
        };
        n_prototype.clearOutOfChatMessageForKey = function(t) {
            if (this.outOfChatPlayerMessage?.id.equals(t) === true) {
                this.outOfChatPlayerMessage = null;
            }
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "pttPrefs";
    var u = new (o("WAShiftTimer")).ShiftTimer(function(e) {
        if (e === d.playbackControlMessageId) {
            d.playbackControlMessageId = null;
        }
    });
    const c = o("WAWebBaseModel").defineModel(s);
    var d = new c({
        id: "1"
    });
    l.PttPrefs = d;
}, 98);