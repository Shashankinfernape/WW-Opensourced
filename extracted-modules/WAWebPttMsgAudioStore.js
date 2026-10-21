__d("WAWebPttMsgAudioStore", [
    "invariant",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPttAudioChannels",
    "WAWebPttAudioManager",
    "WAWebPttAudioPlaybackController",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    class e {
        constructor(){
            this.$1 = new Map;
        }
        $2(t, n) {
            const e = this;
            const audio = o("WAWebPttAudioManager").AudioManager.createAudioProxy();
            const i = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(audio);
            let l = m(t.mediaData);
            let s = null;
            if (l) {
                p(audio, t, l);
            } else {
                s = d(t, (e)=>{
                    l = e;
                    p(audio, t, e);
                    s = null;
                });
            }
            const u = new (o("WAWebPttAudioPlaybackController")).AudioPlaybackController({
                msg: t,
                audio
            });
            return {
                playbackController: u,
                refCount: 1,
                dispose: function() {
                    const t = r("nullthrows")(e.$1.get(n));
                    t.refCount--;
                    if (t.refCount === 0) {
                        i();
                        e.$1.delete(n);
                        s?.();
                        l?.dispose();
                        u.dispose();
                    }
                }
            };
        }
        acquireAudioForKey(t) {
            const n = o("WAWebMsgCollection").MsgCollection.get(t)?.safe();
            if (!(n != null && (n.type === o("WAWebMsgType").MSG_TYPE.PTT || n.type === o("WAWebMsgType").MSG_TYPE.AUDIO))) {
                s(0, 185653);
            }
            return this.acquireAudio(n);
        }
        acquireAudio(t) {
            const e = c(t);
            let n = this.$1.get(e);
            if (n) {
                n.refCount++;
            } else {
                n = this.$2(t, e);
                this.$1.set(e, n);
            }
            const r = n;
            const { dispose, playbackController } = r;
            return {
                audio: playbackController.audio,
                pttPlaybackLogger: playbackController.pttPlaybackLogger,
                controller: playbackController,
                dispose: u(dispose)
            };
        }
    }
    function u(dispose) {
        let t = false;
        return function() {
            if (t) {
                s(0, 56332);
            }
            t = true;
            dispose();
        };
    }
    function c(e) {
        return e.id.toString();
    }
    function d(e, t) {
        const filehash = e.mediaData.filehash;
        var r = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.subscribe(function() {
            if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(filehash)) {
                r?.();
                r = null;
                const a = m(e.mediaData);
                if (a) {
                    t(a);
                }
            }
        });
        e.forceDownloadMediaEvenIfExpensive();
        return function() {
            r?.();
            r = null;
        };
    }
    function m({ filehash }) {
        if (!o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(filehash)) {
            return null;
        }
        const n = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(filehash);
        o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.increaseUsageCount(filehash);
        const dispose = function() {
            return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.decreaseUsageCount(filehash);
        };
        return {
            url: n,
            dispose
        };
    }
    function p(audio, t, n) {
        audio.src = n.url;
        const r = o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromMediaOrProtobuf(audio, t.mediaData);
        if (t.lastPlaybackProgress != null && r != null) {
            audio.currentTime = r * t.lastPlaybackProgress;
        }
    }
    const _ = new e;
    l.MsgAudioStore = _;
}, 98);