__d("WAWebVoipMicrophoneTrackObserver", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 2000;
    class l {
        constructor(t){
            var n = this;
            this.$2 = null;
            this.$5 = false;
            this.$7 = false;
            this.$8 = false;
            this.$12 = function() {
                if (!n.$5 && !n.$8 && n.$1.state === "closed") {
                    n.$13("audio-context-closed");
                }
            };
            this.$9 = function() {
                if (!n.$5 && !n.$8) {
                    n.$13("track-ended");
                }
            };
            this.$10 = function() {
                if (!(n.$5 || n.$8 || n.$2 != null)) {
                    n.$2 = window.setTimeout(function() {
                        n.$2 = null;
                        if (!(n.$5 || n.$8 || !n.$16())) {
                            n.$7 = true;
                            n.$4("track-muted");
                        }
                    }, e);
                }
            };
            this.$11 = function() {
                n.$14();
                if (!n.$5 && n.$7) {
                    n.$7 = false;
                    n.$3();
                }
            };
            this.$1 = t.audioContext;
            this.$3 = t.onRecovered;
            this.$4 = t.onUnavailable;
            this.$6 = t.audioTrack;
        }
        start() {
            let e;
            let t;
            let n;
            if (!this.$5) {
                if ((e = this.$6) != null) {
                    e.addEventListener("ended", this.$9);
                }
                if ((t = this.$6) != null) {
                    t.addEventListener("mute", this.$10);
                }
                if ((n = this.$6) != null) {
                    n.addEventListener("unmute", this.$11);
                }
                this.$1.addEventListener("statechange", this.$12);
                if (this.$1.state === "closed") {
                    this.$13("audio-context-closed");
                } else if (this.$6?.readyState === "ended") {
                    this.$13("track-ended");
                } else if (this.$6?.muted === true) {
                    this.$10();
                }
            }
        }
        stop() {
            if (!this.$5) {
                this.$5 = true;
                this.$14();
                this.$1.removeEventListener("statechange", this.$12);
                this.$15("ended", this.$9);
                this.$15("mute", this.$10);
                this.$15("unmute", this.$11);
            }
        }
        $15(t, n) {
            try {
                this.$6?.removeEventListener(t, n);
            } catch (e) {}
        }
        $14() {
            if (this.$2 != null) {
                window.clearTimeout(this.$2);
                this.$2 = null;
            }
        }
        $13(t) {
            this.$14();
            this.$7 = false;
            this.$8 = true;
            this.$4(t);
        }
        $16() {
            try {
                return this.$6?.muted === true && this.$6.readyState === "live";
            } catch (e) {
                return false;
            }
        }
    }
    i.WAWebVoipMicrophoneTrackObserver = l;
}, 66);