__d("useHeroFailTrigger", [
    "ErrorNormalizeUtils",
    "extractOpesMidsFromError",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useContext } = u;
    const m = 1000;
    function p(e) {
        const t = e ?? "";
        if (t.length > m) {
            return `${t.slice(0, m)}...`;
        }
        return t;
    }
    function useComponent() {
        const t = useContext(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext);
        const n = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        return useCallback(function({ description, error, interactionIDOfFailedTrace = null }) {
            let _ = error?.message;
            if (error?.messageFormat != null) {
                let y = 0;
                _ = error.messageFormat.replace(/%s/g, (e)=>{
                    if (error.messageParams != null) {
                        return error.messageParams[y++];
                    }
                    return "unknown";
                });
            }
            const C = _ == null && description == null ? "unknown" : [
                p(description),
                p(_)
            ].filter(Boolean).join(", ");
            const b = interactionIDOfFailedTrace ?? t.current?.interactionUUID;
            if (b != null) {
                const v = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(b);
                if (v?.annotations.int?.isError !== 1) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(b, "isError", 1);
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(b, "errorComponent", C);
                    const S = r("extractOpesMidsFromError")(error);
                    if (S.length > 0) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationStringArray(b, "opes_mids", S);
                    }
                    if (error?.fbtrace_id != null) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(b, "error_www_request_id", error.fbtrace_id);
                    }
                    const R = error?.errorCode ?? error?.code;
                    if (R != null) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(b, "error_code", R);
                    }
                    const L = error?.name;
                    if (L != null) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(b, "error_name", L);
                    }
                    let E = h(error) || g(error);
                    if (!E && typeof error?.is_js_error === "boolean") {
                        E = error?.is_js_error;
                    }
                    if (E && (o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBoolean(b, "is_js_error", E), error != null && error?.js_normalized_error == null)) {
                        const k = r("ErrorNormalizeUtils").normalizeError(error);
                        error.js_normalized_error = k;
                    }
                    if (error?.js_normalized_error != null) {
                        const I = error.js_normalized_error;
                        f(b, I);
                    }
                    const pageletStack = n.pageletStack;
                    if (v) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(b, `Error: ${C}`, "HeroTracing", v.start, (e || (e = r("performanceNow")))(), {
                            pagelet: pageletStack[pageletStack.length - 1],
                            pageletStack,
                            spanType: "Error"
                        });
                    }
                }
            }
        }, [
            n,
            t
        ]);
    }
    function f(e, t) {
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "js_error_message_format", t.messageFormat);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationStringArray(e, "js_error_message_params", t.messageParams);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "js_error_type", t.type);
        if (t.loggingSource != null) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "js_error_logging_source", t.loggingSource);
        }
        if (t.project != null) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "js_error_project", t.project);
        }
    }
    function g(error) {
        const r = error?.name;
        if (r === "Invariant Violation") {
            return true;
        }
        const o = error?.message ?? error?.description;
        return (o?.includes("Minified React error") || o?.includes("Minified invariant")) ?? false;
    }
    function h(error) {
        try {
            const t = [
                EvalError,
                RangeError,
                ReferenceError,
                SyntaxError,
                TypeError,
                URIError
            ];
            return t.some((t)=>error instanceof t);
        } catch (e) {
            return false;
        }
    }
    l.default = useComponent;
}, 98);