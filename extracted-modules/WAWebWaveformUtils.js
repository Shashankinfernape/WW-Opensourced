__d("WAWebWaveformUtils", [
    "WAPttComposerScaleWaveform",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 64;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebNewsletterGatingUtils").isAudioFileWaveformSenderEnabled()) {
                return null;
            }
            const n = yield t.arrayBuffer();
            const r = new AudioContext({
                sampleRate: 8000
            });
            try {
                const a = yield r.decodeAudioData(n);
                const i = c(a, e);
                return new Uint8Array(i);
            } finally{
                r.close();
            }
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        const n = e.getChannelData(0);
        return m(d(n, t));
    }
    function d(e, t) {
        return r("WAPttComposerScaleWaveform")(Array.from(e, Math.abs), t);
    }
    function m(e) {
        const t = Math.max(...e) ** -1;
        const n = e.map((e)=>e * t);
        return n.map((e)=>e * 100);
    }
    l.computeWaveform = s;
}, 98);