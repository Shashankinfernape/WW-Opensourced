__d("BasePortal.react", [
    "BaseDittoThemeContext",
    "BasePortalTargetContext",
    "BaseThemeDisplayModeContext",
    "BaseThemeProvider.react",
    "CometThemeInfraBaseThemeContext.react",
    "DSPDisplayModeContext",
    "ExecutionEnvironment",
    "ReactDOM",
    "react",
    "react-compiler-runtime",
    "stylex",
    "suspendOrThrowIfUsedInSSR",
    "useCometThemeInfraFallbackThemes",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children",
        "hidden",
        "target",
        "xstyle"
    ];
    let s;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useContext, useLayoutEffect, useRef } = p;
    function h(t) {
        const a = o("react-compiler-runtime").c(20);
        let i;
        let l;
        let c;
        let d;
        let p;
        if (a[0] !== t) {
            i = t.children;
            l = t.hidden;
            c = t.target;
            p = t.xstyle;
            d = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = c;
            a[4] = d;
            a[5] = p;
        } else {
            i = a[1];
            l = a[2];
            c = a[3];
            d = a[4];
            p = a[5];
        }
        const hidden = l === undefined ? false : l;
        const C = useContext(r("BasePortalTargetContext"));
        const b = useContext(r("BaseDittoThemeContext"));
        const v = c || C;
        const S = r("useStable")(y);
        const RRef = useRef(null);
        let L;
        let E;
        if (a[6] !== S) {
            L = function() {
                const RRef_current = RRef.current;
                if (RRef_current != null && S != null && S.parentNode !== RRef_current) {
                    RRef_current.appendChild(S);
                }
            };
            E = [
                S
            ];
            a[6] = S;
            a[7] = L;
            a[8] = E;
        } else {
            L = a[7];
            E = a[8];
        }
        useLayoutEffect(L, E);
        (s || (s = r("suspendOrThrowIfUsedInSSR")))("BasePortal: Portals are not currently supported by the server renderer.");
        const k = useContext(r("CometThemeInfraBaseThemeContext.react"));
        const I = useContext(r("DSPDisplayModeContext"));
        const T = useContext(r("BaseThemeDisplayModeContext"));
        const D = I ?? T ?? "auto";
        const x = k[D];
        const $ = r("useCometThemeInfraFallbackThemes")();
        const P = $[I ?? "auto"];
        let N;
        if (a[9] !== P || a[10] !== x || a[11] !== i || a[12] !== T || a[13] !== b || a[14] !== hidden || a[15] !== S || a[16] !== v || a[17] !== d || a[18] !== p) {
            const Component = r("BaseThemeProvider.react");
            N = v != null ? o("ReactDOM").createPortal(<Component displayMode={T ?? undefined}>{function(t, style) {
                const Component = r("BasePortalTargetContext").Provider;
                return <div {...babelHelpers.extends({
                    className: (u || (u = r("stylex")))(t, b.classNames, x, x == null && P, p) || undefined,
                    hidden
                }, d, {
                    ref: RRef,
                    style,
                    children: <Component value={S}>{i}</Component>
                })}/>;
            }}</Component>, v) : null;
            a[9] = P;
            a[10] = x;
            a[11] = i;
            a[12] = T;
            a[13] = b;
            a[14] = hidden;
            a[15] = S;
            a[16] = v;
            a[17] = d;
            a[18] = p;
            a[19] = N;
        } else {
            N = a[19];
        }
        return N;
    }
    function y() {
        if ((c || (c = r("ExecutionEnvironment"))).canUseDOM) {
            return document.createElement("div");
        }
        return null;
    }
    l.default = h;
}, 98);