__d("CometErrorBoundary.react", [
    "ErrorBoundary.react",
    "fb-error",
    "react",
    "useCometErrorHandler",
    "useHeroErrorMetadata"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    const s = [
        "augmentError",
        "onError",
        "shouldSkipFailingToHeroTracing",
        "type"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useCallback = u.useCallback;
    function m(t) {
        "use no forget";
        const t_ref = t.ref;
        const o = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const a = r("useHeroErrorMetadata")();
        const { augmentError, onError, shouldSkipFailingToHeroTracing, type } = o;
        const p = babelHelpers.objectWithoutPropertiesLoose(o, s);
        const onError_1 = r("useCometErrorHandler")(onError, shouldSkipFailingToHeroTracing);
        const augmentError_1 = u_useCallback(function(e) {
            augmentError?.(e);
            a(e);
            if (type != null) {
                e.type = type;
                const n = e.metadata ?? new (r("fb-error")).ErrorMetadata;
                e.metadata = n;
                n.addEntry("COMET_INFRA", "EXPLICITLY_MARKED_ERROR_BOUNDARY", "true");
            }
        }, [
            augmentError,
            a,
            type
        ]);
        return c.jsx(r("ErrorBoundary.react"), babelHelpers.extends({}, p, {
            augmentError: augmentError_1,
            fallback: o.fallback,
            onError: onError_1
        }));
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);