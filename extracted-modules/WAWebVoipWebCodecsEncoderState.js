__d("WAWebVoipWebCodecsEncoderState", [
    "WALogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    let u;
    const codec = "avc1.42001f";
    const d = [
        {
            code: 31,
            maxFs: 3600,
            maxMbps: 108000
        },
        {
            code: 32,
            maxFs: 5120,
            maxMbps: 216000
        },
        {
            code: 40,
            maxFs: 8192,
            maxMbps: 245760
        },
        {
            code: 42,
            maxFs: 8704,
            maxMbps: 522240
        },
        {
            code: 50,
            maxFs: 22080,
            maxMbps: 589824
        },
        {
            code: 51,
            maxFs: 36864,
            maxMbps: 983040
        },
        {
            code: 52,
            maxFs: 36864,
            maxMbps: 2073600
        }
    ];
    function m(e, t) {
        return Math.ceil(e / 16) * Math.ceil(t / 16);
    }
    function p(code) {
        return `avc1.4200${code.toString(16).padStart(2, "0")}`;
    }
    function _(e, t, n) {
        const r = m(e, t);
        const o = r * Math.max(n, 1);
        for (const a of d){
            if (r <= a.maxFs && o <= a.maxMbps) {
                return p(a.code);
            }
        }
        return p(d[d.length - 1].code);
    }
    const f = new Map;
    let g = false;
    const h = new Set;
    function y(e) {
        const e_streamId = e.streamId;
        f.set(e_streamId, e);
        for (const n of h){
            try {
                n(e);
            } catch (e) {}
        }
    }
    function C() {
        return new Map(f);
    }
    function b() {
        return g;
    }
    function v(e) {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [webcodec-encode] setEnabled: ",
            ""
        ])), e);
        g = e;
    }
    function S(e) {
        h.add(e);
        return function() {
            h.delete(e);
        };
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (typeof window.VideoEncoder !== "function") {
                return false;
            }
            try {
                const e = yield window.VideoEncoder.isConfigSupported({
                    codec,
                    width: 320,
                    height: 240,
                    hardwareAcceleration: "prefer-hardware",
                    latencyMode: "realtime",
                    bitrateMode: "variable",
                    avc: {
                        format: "annexb"
                    }
                });
                const t = e.supported;
                return typeof t === "boolean" && t;
            } catch (error) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [webcodec-encode] isConfigSupported check failed: ",
                    ""
                ])), error);
                return false;
            }
        });
        return L.apply(this, arguments);
    }
    function E() {
        f.clear();
        h.clear();
    }
    l.WEBCODECS_H264_CODEC = codec;
    l.getH264CodecString = _;
    l.updateWebCodecsEncodeParams = y;
    l.getAllWebCodecsEncodeParams = C;
    l.isWebCodecsEncoderEnabled = b;
    l.setWebCodecsEncoderEnabled = v;
    l.subscribeToEncodeParamsChanges = S;
    l.checkEncoderSupport = R;
    l.resetWebCodecsEncoderState = E;
}, 98);