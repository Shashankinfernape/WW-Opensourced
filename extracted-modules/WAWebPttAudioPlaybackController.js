__d("WAWebPttAudioPlaybackController", [
    "WAPromiseDelays",
    "WAWebFrontendMsgGetters",
    "WAWebMarkPlayedMsgAction",
    "WAWebPttAudioChannels",
    "WAWebPttCalculateAudioProgress",
    "WAWebPttFindSequentialMsg",
    "WAWebPttMsgAudioStore",
    "WAWebPttPlaybackLogger",
    "WAWebPttPlaybackTone",
    "WAWebPttPrefs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "playing";
    const s = "timeupdate";
    const u = "ended";
    const c = 400;
    class d {
        constructor(t){
            var r = this;
            this.$3 = false;
            this.$7 = function() {
                if (o("WAWebMarkPlayedMsgAction").canMarkPlayed(r.$1.unsafe())) {
                    o("WAWebMarkPlayedMsgAction").markPlayed(r.$1.unsafe());
                }
            };
            this.$8 = function() {
                r.$1.updateLastPlaybackProgress(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(r.audio, r.$1.mediaData));
            };
            this.$5 = function() {
                r.$2 = o("WAWebPttPrefs").PttPrefs.setPlayingMessage(r.$1);
            };
            this.$6 = function() {
                r.$2?.();
                r.$2 = null;
                r.audio.currentTime = 0;
                r.$1.updateLastPlaybackProgress(0);
                r.$9();
                if (r.$3) {
                    if (r.$4 != null) {
                        r.$4();
                    }
                    r.$4 = null;
                }
            };
            this.$9 = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebPttFindSequentialMsg").findSequentialMsg(r.$1);
                let t = false;
                const n = o("WAWebPttAudioChannels").MainAudioChannel.claim(r, function() {
                    t = true;
                });
                yield o("WAPromiseDelays").delayMs(c);
                n();
                if (!t) {
                    if (e) {
                        o("WAWebPttPlaybackTone").playMidPttTone();
                        const a = o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(e);
                        a.controller.playAsSequential();
                        a.dispose();
                    } else {
                        if (r.$3) {
                            o("WAWebPttPlaybackTone").playEndPttTone();
                            r.$3 = false;
                            r.pttPlaybackLogger.isSequentialPlayback = false;
                        }
                    }
                }
            });
            this.audio = t.audio;
            this.pttPlaybackLogger = new (o("WAWebPttPlaybackLogger")).PttPlaybackLogger(t.msg, t.audio);
            this.$1 = t.msg;
            this.audio.addEventListener(e, this.$5);
            this.audio.addEventListener(u, this.$6);
            if (o("WAWebMarkPlayedMsgAction").canMarkPlayed(this.$1.unsafe())) {
                this.audio.addEventListener(e, this.$7);
            }
            this.audio.addEventListener(s, this.$8);
        }
        playAsSequential() {
            o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage = this.$1;
            this.$4 = o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(this.$1).dispose;
            this.$3 = true;
            this.pttPlaybackLogger.isSequentialPlayback = true;
            const e = o("WAWebFrontendMsgGetters").getAsPttLike(this.$1.unsafe()) == null ? 1 : o("WAWebPttPrefs").PttPrefs.playbackRate;
            this.audio.playbackRate = e;
            this.audio.defaultPlaybackRate = e;
            this.audio.currentTime = 0;
            this.audio.play();
        }
        dispose() {
            if (o("WAWebMarkPlayedMsgAction").canMarkPlayed(this.$1.unsafe())) {
                this.audio.removeEventListener(e, this.$7);
            }
            this.audio.removeEventListener(s, this.$8);
            this.audio.removeEventListener(e, this.$5);
            this.audio.removeEventListener(u, this.$6);
            this.pttPlaybackLogger.dispose();
            this.$2?.();
        }
    }
    l.AudioPlaybackController = d;
}, 98);