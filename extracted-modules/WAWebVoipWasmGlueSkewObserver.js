__d("WAWebVoipWasmGlueSkewObserver", [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebVoipQplHelpers",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d = false;
    let m = false;
    let p = false;
    let _ = false;
    let skewedWorkers = 0;
    let pinnedImportStarted = 0;
    let pinnedImportLoaded = 0;
    let pinnedImportFailed = 0;
    let pinnedImportLoadedMaxMs = 0;
    function b(e) {
        try {
            S(e);
        } catch (error) {
            v(error);
        }
    }
    function v(error) {
        if (!_) {
            _ = true;
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: worker glue skew report failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-worker-glue-skew-report-failed");
        }
    }
    function S(e) {
        if (!d) {
            d = true;
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueSkewDetected();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: worker glue build skew observed source=",
                " expected=",
                " actual=",
                ""
            ])), e.source, e.expectedBuildSha, String(e.actualBuildSha));
        }
        e: {
            const t = E(e.pinnedImport);
            if (t === "none") {
                skewedWorkers++;
                break e;
            }
            if (t === "started") {
                skewedWorkers++;
                pinnedImportStarted++;
                break e;
            }
            if (t === "loaded") {
                R(e);
                break e;
            }
            if (t === "failed") {
                L(e);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        }
        o("WAWebVoipQplHelpers").voipInitQplAnnotateWorkerGlueSkew({
            pinnedImportFailed,
            pinnedImportLoaded,
            pinnedImportLoadedMaxMs,
            pinnedImportStarted,
            skewedWorkers
        });
    }
    function R(e) {
        const t = k(e.pinnedImportMs);
        pinnedImportLoaded++;
        pinnedImportLoadedMaxMs = Math.max(pinnedImportLoadedMaxMs, t);
        if (!m) {
            m = true;
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueSkewPinnedImportLoaded();
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: worker glue pinned import loaded attempts=",
                " ms=",
                ""
            ])), k(e.pinnedImportAttempts), t);
        }
    }
    function L(e) {
        pinnedImportFailed++;
        if (!p) {
            p = true;
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueSkewPinnedImportFailed();
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: worker glue pinned import failed stage=",
                " attempts=",
                " ms=",
                ""
            ])), String(e.pinnedImportFailedStage), k(e.pinnedImportAttempts), k(e.pinnedImportMs));
        }
    }
    function E(pinnedImport) {
        switch(pinnedImport){
            case "started":
                return "started";
            case "loaded":
                return "loaded";
            case "failed":
                return "failed";
            default:
                return "none";
        }
    }
    function k(e) {
        if (typeof e === "number" && Number.isFinite(e) && e > 0) {
            return Math.round(e);
        }
        return 0;
    }
    function I() {
        d = false;
        m = false;
        p = false;
        _ = false;
        skewedWorkers = 0;
        pinnedImportStarted = 0;
        pinnedImportLoaded = 0;
        pinnedImportFailed = 0;
        pinnedImportLoadedMaxMs = 0;
    }
    l.recordWasmGlueBuildSkewObserved = b;
    l.resetWasmGlueBuildSkewObserverForTests = I;
}, 98);