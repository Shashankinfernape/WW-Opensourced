__d("WAWebVoipWebWasmVariantLoader", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebCoreActionsODS",
    "WAWebVoipGatingUtils",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipWasmGlueSkewObserver",
    "WAWebVoipWebWasmMemory",
    "asyncToGeneratorRuntime",
    "cr:12201"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = "prod-nonlab";
    const y = new Set([
        "prod-nonlab",
        "prod-lab",
        "prod-labvideo"
    ]);
    const C = 20;
    const b = 0;
    function v(t) {
        if (t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ThreadPoolManager: Using legacy pthread pool size ",
                " (WebKit browser)"
            ])), C);
            return C;
        }
        try {
            const n = o("WAWebABProps").getABPropConfigValue("web_voip_dynamic_thread_preallocate_count");
            if (typeof n === "number" && n > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ThreadPoolManager: Using on-demand worker startup with target pool size ",
                    ""
                ])), n);
                return b;
            }
        } catch (e) {}
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: ThreadPoolManager: Using legacy pthread pool size ",
            ""
        ])), C);
        return C;
    }
    function S() {
        const e = o("WAWebVoipGatingUtils").isWebKitBrowser();
        const pthreadPoolSizeOverride = v(e);
        const wasmMemory = o("WAWebVoipWebWasmMemory").createVoipWasmMemoryOverride(e);
        const recordPthreadGlueFailure = o("WAWebVoipPthreadGlueFailureTracker").recordPthreadGlueFailure;
        const recordWasmGlueBuildSkewObserved = o("WAWebVoipWasmGlueSkewObserver").recordWasmGlueBuildSkewObserved;
        if (wasmMemory == null) {
            return {
                onPthreadGlueFailure: recordPthreadGlueFailure,
                onWasmGlueBuildSkewObserved: recordWasmGlueBuildSkewObserved,
                pthreadPoolSizeOverride
            };
        }
        return {
            onPthreadGlueFailure: recordPthreadGlueFailure,
            onWasmGlueBuildSkewObserved: recordWasmGlueBuildSkewObserved,
            pthreadPoolSizeOverride,
            wasmMemory
        };
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactUnversionedLoadAttempt();
            const t = yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader").__setRef("WAWebVoipWebWasmVariantLoader").load();
            const n = yield t(e ?? S());
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactUnversionedLoadSuccess();
            return n;
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactContentAddressedLoadAttempt();
            const n = yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader_ContentAddressed_internal").__setRef("WAWebVoipWebWasmVariantLoader").load();
            const a = Reflect.get(n, "PINNED_WORKER_GLUE_BX_ERROR");
            const pinWorkerGlue = e && a == null;
            if (e && !pinWorkerGlue) {
                o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueBxLookupFailure();
                o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueUnpinnedFallback();
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: pinned worker glue bx lookup failed; loading unpinned: ",
                    ""
                ])), String(a));
            } else if (pinWorkerGlue) {
                o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePinnedLoadAttempt();
                T(Reflect.get(n, "PINNED_WORKER_GLUE_URL"));
            }
            const l = yield n(babelHelpers.extends({}, t ?? S(), {
                pinWorkerGlue
            }));
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactContentAddressedLoadSuccess();
            return l;
        });
        return k.apply(this, arguments);
    }
    const I = new Set;
    function T(e) {
        if (typeof e !== "string") {
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePrefetchSkipped();
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: pinned worker glue prefetch skipped; URL export is ",
                ""
            ])), typeof e);
            return;
        }
        if (!I.has(e)) {
            I.add(e);
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePrefetchAttempt();
            fetch(e, {
                credentials: "same-origin",
                mode: "no-cors"
            }).then((e)=>e.arrayBuffer()).catch((e)=>{
                o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePrefetchFailed();
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: pinned worker glue prefetch failed: ",
                    ""
                ])), String(e));
            });
        }
    }
    function D(e) {
        if (typeof e === "string") {
            for (const t of y){
                if (e === t) {
                    return t;
                }
            }
        }
        if (e !== h) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Invalid WASM variant '",
                "', falling back to '",
                "'"
            ])), String(e), h);
        }
        return h;
    }
    function x(e) {
        switch(e){
            case "prod-nonlab":
                return null;
            case "prod-lab":
                return "prod-lab";
            case "prod-labvideo":
                return "prod-labvideo";
            default:
                return null;
        }
    }
    function $(e, t, n, r) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            if (t) {
                return E(n, r);
            }
            return R(r);
        });
        return P.apply(this, arguments);
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = false, t = false) {
            const web_voip_load_wasm_variant = o("WAWebABPropsConfigs").ABPropConfigs.web_voip_load_wasm_variant;
            if (web_voip_load_wasm_variant == null) {
                return $(h, e, t);
            }
            let a = null;
            try {
                a = o("WAWebABProps").getABPropConfigValue("web_voip_load_wasm_variant");
            } catch (n) {
                return $(h, e, t);
            }
            if (a == null) {
                return $(h, e, t);
            }
            const i = D(a);
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: AB prop set to '",
                "', validated variant: '",
                "'"
            ])), String(a), i);
            if (!y.has(i)) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Variant '",
                    "' not available, using default loader"
                ])), i);
                return $(h, e, t);
            }
            const l = S();
            const s = x(i);
            if (s != null && n("cr:12201") != null) {
                try {
                    return yield n("cr:12201").tryLoadLabVariant(s, l);
                } catch (error) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Failed to load variant '",
                        "': ",
                        ", falling back to default"
                    ])), i, String(error));
                    return $(h, e, t);
                }
            }
            return $(i, e, t, l);
        });
        return M.apply(this, arguments);
    }
    l.loadVoipWasmVariant = N;
}, 98);