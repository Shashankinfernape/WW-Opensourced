__d("WAWebVoipCallAudioUnlock", [
    "Promise",
    "WALogger",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const sampleRate = 16000;
    const h = 60000;
    let y = null;
    let C = null;
    function b() {
        y = o("WAWebUA").UA.isWebkit ? new Audio : null;
    }
    function v() {
        const t = y ?? new Audio;
        S();
        const n = x(t);
        if (n != null) {
            C = n;
            w(n).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] starting call audio at the click failed"
                ]))).catching(r("getErrorSafe")(t));
            });
        }
    }
    function S() {
        y = null;
        M();
    }
    function R(e, t) {
        const n = C;
        const r = n?.[e];
        if (n == null || r == null) {
            return null;
        }
        if (r.sampleRate !== t) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] not using the ",
                " audio started at the click, it runs at ",
                "Hz and the call at ",
                "Hz"
            ])), e, r.sampleRate, t);
            return null;
        }
        n[e] = null;
        F(n);
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV] using the ",
            " audio started at the click"
        ])), e);
        return r;
    }
    function L() {
        const e = C;
        const t = e?.playbackElement;
        if (e == null || t == null) {
            return null;
        }
        e.playbackElement = null;
        F(e);
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV] playing through the audio element created at the click"
        ])));
        return t;
    }
    function E() {
        return L() ?? new Audio;
    }
    function k() {
        if (C?.isStarted === true) {
            return true;
        }
        const r = navigator.userActivation?.isActive === true;
        const a = navigator.userActivation?.hasBeenActive === true;
        if (o("WAWebUA").UA.isBlink ? a : r) {
            return true;
        }
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV] the page can't start call audio without a microphone, recent click=",
            ", clicked since load=",
            ""
        ])), String(r), String(a));
        return false;
    }
    function I() {
        if (o("WAWebUA").UA.isWebkit) {
            b();
            v();
        }
    }
    function T() {
        const e = C;
        if (e != null) {
            self.clearTimeout(e.releaseTimeoutId);
            e.releaseTimeoutId = N();
        }
    }
    function D() {
        S();
    }
    function x(playbackElement) {
        let capture = null;
        try {
            capture = $();
            return {
                capture,
                isStarted: false,
                playback: $(),
                playbackElement,
                releaseTimeoutId: N()
            };
        } catch (error) {
            P(capture);
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] creating call audio at the click failed"
            ]))).catching(r("getErrorSafe")(error));
            return null;
        }
    }
    function $() {
        return new AudioContext({
            sampleRate,
            latencyHint: "interactive"
        });
    }
    function P(e) {
        if (e != null) {
            e.close().catch((e)=>{
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] closing call audio started at the click failed"
                ]))).catching(r("getErrorSafe")(e));
            });
        }
    }
    function N() {
        return self.setTimeout(M, h);
    }
    function M() {
        const e = C;
        if (e != null) {
            C = null;
            self.clearTimeout(e.releaseTimeoutId);
            P(e.capture);
            P(e.playback);
        }
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { capture, playback } = e;
            yield (f || (f = n("Promise"))).all([
                capture?.resume(),
                playback?.resume()
            ]);
            e.isStarted = true;
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] started call audio at the click"
            ])));
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        if (e.capture == null && e.playback == null && e.playbackElement == null) {
            self.clearTimeout(e.releaseTimeoutId);
            C = null;
        }
    }
    l.prepareCallAudioElement = b;
    l.unlockCallAudio = v;
    l.releaseCallAudioUnlock = S;
    l.takeUnlockedAudioContext = R;
    l.takeUnlockedPlaybackElement = L;
    l.createCallPlaybackElement = E;
    l.canStartCallAudio = k;
    l.startCallAudioInClick = I;
    l.holdUnlockedCallAudio = T;
    l.resetUnlockedCallAudioForTesting = D;
}, 98);