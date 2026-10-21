__d("WAWebMediaWorkerProxy", [
    "WAWebABProps",
    "asyncToGeneratorRuntime",
    "cr:36997"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return n("cr:36997").calculateFilehashInWorker(e);
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            return n("cr:36997").hmacSha256InWorker(e, t, r);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return n("cr:36997").transcodeToMp4InWorker(e);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return n("cr:36997").mp4RepairMuxInWorker(e);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return n("cr:36997").kaleidoscopeClassifyInWorker(babelHelpers.extends({}, e, {
                strictJpegScanValidationEnabled: o("WAWebABProps").getABPropConfigValue("ks_jpeg_scan_strict_validation_enabled"),
                strictOggOpusValidationEnabled: o("WAWebABProps").getABPropConfigValue("ks_ogg_opus_strict_validation_enabled"),
                strictMp4ValidationEnabled: o("WAWebABProps").getABPropConfigValue("ks_mp4_strict_validation_enabled")
            }));
        });
        return g.apply(this, arguments);
    }
    function h(provenance) {
        if (provenance == null) {
            return null;
        }
        const t = {};
        if (provenance.iptc != null) {
            t.iptc = provenance.iptc;
        }
        if (provenance.c2pa != null) {
            t.c2pa = provenance.c2pa;
        }
        if (t.iptc == null && t.c2pa == null) {
            return null;
        }
        return t;
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield n("cr:36997").detectAiProvenanceInWorker(e);
            const { engineErrorCode, provenance, transferredBuffer } = t;
            return {
                transferredBuffer,
                provenance: h(provenance),
                engineErrorCode
            };
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        n("cr:36997").prewarmMediaWasmWorker(e);
    }
    l.calculateFilehashInWorker = e;
    l.hmacSha256InWorker = u;
    l.transcodeToMp4InWorker = d;
    l.mp4RepairMuxInWorker = p;
    l.kaleidoscopeClassifyInWorker = f;
    l.detectAiProvenanceInWorker = y;
    l.prewarmMediaWasmWorker = b;
}, 98);