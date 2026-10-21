__d("WAWebPttAudioManager", [
    "WAWebPttAudioProxy"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            var t = this;
            this.$1 = new Map;
            this.$2 = new Map;
            this.$3 = new Map;
            this.$4 = new Map;
            this.__TEST_ONLY__ = {
                getActiveAudio: function(n) {
                    return t.$2.get(n);
                },
                getAllAudios: function() {
                    return [].concat(Array.from(t.$2.values()), Array.from(t.$3.values()));
                }
            };
            this.$5 = e?.minPoolSize ?? 1;
        }
        addAudioListener(t, n, listener) {
            this.$2.get(t)?.addEventListener(n, listener);
            this.$3.get(t)?.addEventListener(n, listener);
            let a = this.$1.get(t);
            if (a == null) {
                a = new Set;
                this.$1.set(t, a);
            }
            a.add({
                type: n,
                listener
            });
        }
        removeAudioListener(t, n, r) {
            this.$2.get(t)?.removeEventListener(n, r);
            this.$3.get(t)?.removeEventListener(n, r);
            const a = this.$1.get(t);
            if (a != null) {
                for (const i of a){
                    if (i.type === n && i.listener === r) {
                        a.delete(i);
                        break;
                    }
                }
                if (a.size === 0) {
                    this.$1.delete(t);
                }
            }
        }
        createAudioProxy() {
            return new (o("WAWebPttAudioProxy")).AudioProxy(this);
        }
        $6(t) {
            const e = this;
            const r = this.$2.get(t);
            if (r != null) {
                self.clearTimeout(this.$4.get(r));
                this.$4.delete(r);
                return r;
            }
            const o = this.$3.get(t);
            if (o != null) {
                this.$3.delete(t);
                this.$2.set(t, o);
                return o;
            }
            const a = this.$2.size + this.$3.size;
            if (a >= this.$5) {
                const i = ()=>{
                    const o = s[0];
                    const a = s[1];
                    e.$3.delete(o);
                    e.$2.set(t, a);
                    e.$1.get(o)?.forEach(function({ listener, type }) {
                        a.removeEventListener(type, listener);
                    });
                    e.$1.get(t)?.forEach(function({ listener, type }) {
                        a.addEventListener(type, listener);
                    });
                    return {
                        v: a
                    };
                };
                let l;
                for (var s of this.$3){
                    l = i();
                    if (l) {
                        return l.v;
                    }
                }
            }
            const u = new Audio;
            this.$2.set(t, u);
            this.$1.get(t)?.forEach(function({ listener, type }) {
                u.addEventListener(type, listener);
            });
            const c = function() {
                for (const [n, r] of e.$2){
                    if (r === u) {
                        e.$2.delete(n);
                        e.$3.set(n, u);
                        break;
                    }
                }
            };
            u.addEventListener("pause", function() {
                e.$4.set(u, self.setTimeout(c, 1000));
            });
            return u;
        }
        play(t, n) {
            const e = this.$6(t);
            e.src = t.src;
            e.currentTime = n.currentTime;
            e.playbackRate = n.playbackRate;
            e.defaultPlaybackRate = n.defaultPlaybackRate;
            return e.play();
        }
        pause(t) {
            this.$2.get(t)?.pause();
        }
        load(t) {
            const e = this.$6(t);
            e.src = t.src;
            e?.load();
        }
        setDefaultPlaybackRate(t, n) {
            const e = this.$2.get(t);
            if (e != null) {
                e.defaultPlaybackRate = n;
            }
        }
        setPlaybackRate(t, n) {
            const e = this.$2.get(t);
            if (e != null) {
                e.playbackRate = n;
            }
        }
        getCurrentTime(t) {
            return this.$2.get(t)?.currentTime ?? null;
        }
        setCurrentTime(t, n) {
            const e = this.$2.get(t);
            if (e == null) {
                this.$1.get(t)?.forEach(function({ listener, type }) {
                    if (type === "timeupdate") {
                        listener();
                    }
                });
                return;
            }
            e.currentTime = n;
        }
        getDuration(t) {
            return this.$2.get(t)?.duration ?? null;
        }
        getPaused(t) {
            return this.$2.get(t)?.paused ?? true;
        }
    }
    const s = new e;
    l.AudioManagerImpl = e;
    l.AudioManager = s;
}, 98);