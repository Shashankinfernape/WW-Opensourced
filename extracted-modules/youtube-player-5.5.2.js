__d("youtube-player-5.5.2", [
    "sister-3.0.2",
    "load-script-1.0.0",
    "debug-0.0.0"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("sister-3.0.2");
    const l = n("load-script-1.0.0");
    const s = n("debug-0.0.0");
    const u = {};
    const c = {
        exports: u
    };
    function d() {
        Object.defineProperty(u, "__esModule", {
            value: true
        });
        const e = l();
        const t = n(e);
        function n(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        u.default = function(e) {
            const n = new Promise((resolve)=>{
                if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
                    resolve(window.YT);
                    return;
                } else {
                    const r = window.location.protocol === "http:" ? "http:" : "https:";
                    t.default(`${r}//www.youtube.com/iframe_api`, function(t) {
                        if (t) {
                            e.trigger("error", t);
                        }
                    });
                }
                const window_onYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = function() {
                    if (window_onYouTubeIframeAPIReady) {
                        window_onYouTubeIframeAPIReady();
                    }
                    resolve(window.YT);
                };
            });
            return n;
        };
        c.exports = u.default;
    }
    let m = false;
    function p() {
        if (!m) {
            m = true;
            d();
        }
        return c.exports;
    }
    const _ = {};
    const f = {
        exports: _
    };
    function g() {
        Object.defineProperty(_, "__esModule", {
            value: true
        });
        _.default = [
            "cueVideoById",
            "loadVideoById",
            "cueVideoByUrl",
            "loadVideoByUrl",
            "playVideo",
            "pauseVideo",
            "stopVideo",
            "getVideoLoadedFraction",
            "cuePlaylist",
            "loadPlaylist",
            "nextVideo",
            "previousVideo",
            "playVideoAt",
            "setShuffle",
            "setLoop",
            "getPlaylist",
            "getPlaylistIndex",
            "setOption",
            "mute",
            "unMute",
            "isMuted",
            "setVolume",
            "getVolume",
            "seekTo",
            "getPlayerState",
            "getPlaybackRate",
            "setPlaybackRate",
            "getAvailablePlaybackRates",
            "getPlaybackQuality",
            "setPlaybackQuality",
            "getAvailableQualityLevels",
            "getCurrentTime",
            "getDuration",
            "removeEventListener",
            "getVideoUrl",
            "getVideoEmbedCode",
            "getOptions",
            "getOption",
            "addEventListener",
            "destroy",
            "setSize",
            "getIframe"
        ];
        f.exports = _.default;
    }
    let h = false;
    function y() {
        if (!h) {
            h = true;
            g();
        }
        return f.exports;
    }
    const C = {};
    const b = {
        exports: C
    };
    function v() {
        Object.defineProperty(C, "__esModule", {
            value: true
        });
        C.default = [
            "ready",
            "stateChange",
            "playbackQualityChange",
            "playbackRateChange",
            "error",
            "apiChange",
            "volumeChange"
        ];
        b.exports = C.default;
    }
    let S = false;
    function R() {
        if (!S) {
            S = true;
            v();
        }
        return b.exports;
    }
    const L = {};
    const E = {
        exports: L
    };
    function k() {
        Object.defineProperty(L, "__esModule", {
            value: true
        });
        L.default = {
            BUFFERING: 3,
            ENDED: 0,
            PAUSED: 2,
            PLAYING: 1,
            UNSTARTED: -1,
            VIDEO_CUED: 5
        };
        E.exports = L.default;
    }
    let I = false;
    function T() {
        if (!I) {
            I = true;
            k();
        }
        return E.exports;
    }
    const D = {};
    const x = {
        exports: D
    };
    function $() {
        Object.defineProperty(D, "__esModule", {
            value: true
        });
        const e = T();
        const t = n(e);
        function n(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        D.default = {
            pauseVideo: {
                acceptableStates: [
                    t.default.ENDED,
                    t.default.PAUSED
                ],
                stateChangeRequired: false
            },
            playVideo: {
                acceptableStates: [
                    t.default.ENDED,
                    t.default.PLAYING
                ],
                stateChangeRequired: false
            },
            seekTo: {
                acceptableStates: [
                    t.default.ENDED,
                    t.default.PLAYING,
                    t.default.PAUSED
                ],
                stateChangeRequired: true,
                timeout: 3000
            }
        };
        x.exports = D.default;
    }
    let P = false;
    function N() {
        if (!P) {
            P = true;
            $();
        }
        return x.exports;
    }
    const M = {};
    const w = {
        exports: M
    };
    function A() {
        Object.defineProperty(M, "__esModule", {
            value: true
        });
        const e = s();
        const t = u(e);
        const n = y();
        const r = u(n);
        const o = R();
        const a = u(o);
        const i = N();
        const l = u(i);
        function u(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        const c = t.default("youtube-player");
        const d = {};
        d.proxyEvents = function(e) {
            const t = {};
            const n = (r)=>{
                const n = `on${r.slice(0, 1).toUpperCase()}${r.slice(1)}`;
                t[n] = function(t) {
                    c('event "%s"', n, t);
                    e.trigger(r, t);
                };
            };
            for (const u of a.default){
                n(u);
            }
            return t;
        };
        d.promisifyPlayer = function(e, t = false) {
            const n = {};
            const o = (o)=>{
                if (t && l.default[o]) {
                    n[o] = function(...n_1) {
                        return e.then((e)=>{
                            const t = l.default[o];
                            const r = e.getPlayerState();
                            const a = e[o](...n_1);
                            if (t.stateChangeRequired || Array.isArray(t.acceptableStates) && t.acceptableStates.indexOf(r) === -1) {
                                return new Promise((resolve)=>{
                                    const r = function r() {
                                        const o = e.getPlayerState();
                                        let a;
                                        if (typeof t.timeout === "number") {
                                            a = setTimeout(()=>{
                                                e.removeEventListener("onStateChange", r);
                                                resolve();
                                            }, t.timeout);
                                        }
                                        if (Array.isArray(t.acceptableStates) && t.acceptableStates.indexOf(o) !== -1) {
                                            e.removeEventListener("onStateChange", r);
                                            clearTimeout(a);
                                            resolve();
                                        }
                                    };
                                    e.addEventListener("onStateChange", r);
                                }).then(()=>a);
                            }
                            return a;
                        });
                    };
                } else {
                    n[o] = function(...n) {
                        return e.then((e)=>e[o](...n));
                    };
                }
            };
            for (const d of r.default){
                o(d);
            }
            return n;
        };
        M.default = d;
        w.exports = M.default;
    }
    let F = false;
    function O() {
        if (!F) {
            F = true;
            A();
        }
        return w.exports;
    }
    const B = {};
    const W = {
        exports: B
    };
    function q() {
        Object.defineProperty(B, "__esModule", {
            value: true
        });
        const t = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (e)=>typeof e : (e)=>{
            if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                return "symbol";
            }
            return typeof e;
        };
        const n = e();
        const r = s(n);
        const o = p();
        const a = s(o);
        const i = O();
        const l = s(i);
        function s(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        let u;
        B.default = function(e, n = {}, o = false) {
            const i = r.default();
            if (!u) {
                u = a.default(i);
            }
            if (n.events) {
                throw new Error("Event handlers cannot be overwritten.");
            }
            if (typeof e === "string" && !document.getElementById(e)) {
                throw new Error(`Element "${e}" does not exist.`);
            }
            n.events = l.default.proxyEvents(i);
            const s = new Promise((resolve)=>{
                if ((typeof e === "undefined" ? "undefined" : t(e)) === "object" && e.playVideo instanceof Function) {
                    const o = e;
                    resolve(o);
                } else {
                    u.then((t)=>{
                        const o = new t.Player(e, n);
                        i.on("ready", function() {
                            resolve(o);
                        });
                        return null;
                    });
                }
            });
            const c = l.default.promisifyPlayer(s, o);
            c.on = i.on;
            c.off = i.off;
            return c;
        };
        W.exports = B.default;
    }
    let U = false;
    function V() {
        if (!U) {
            U = true;
            q();
        }
        return W.exports;
    }
    function H(e) {
        switch(e){
            case undefined:
                return V();
        }
    }
    a.exports = H;
}, null);