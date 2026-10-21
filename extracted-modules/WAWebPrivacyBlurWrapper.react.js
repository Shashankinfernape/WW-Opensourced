__d("WAWebPrivacyBlurWrapper.react", [
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeGating",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext, useContext, useEffect } = u;
    const PContext = createContext(false);
    const _ = "blur(0px)";
    const f = "filter 200ms ease-in-out";
    function g(e) {
        const t = o("react-compiler-runtime").c(6);
        const { category, children, containerRef, eventContainerRef, forceReveal } = e;
        if (!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
            return children;
        }
        let u;
        if (t[0] !== category || t[1] !== children || t[2] !== containerRef || t[3] !== eventContainerRef || t[4] !== forceReveal) {
            u = <H8Component containerRef={containerRef} eventContainerRef={eventContainerRef} forceReveal={forceReveal} category={category}>{children}</H8Component>;
            t[0] = category;
            t[1] = children;
            t[2] = containerRef;
            t[3] = eventContainerRef;
            t[4] = forceReveal;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    function H8Component(e) {
        const t = o("react-compiler-runtime").c(12);
        const { category, children, containerRef, eventContainerRef, forceReveal } = e;
        const u = o("WAWebPrivacyModeContext").usePrivacyMode();
        const { getBlurForCategory, isPrivacyModeEnabled } = u;
        const h = useContext(PContext);
        const y = isPrivacyModeEnabled && !h;
        const C = category ?? o("WAWebPrivacyModeBlurConfig").BlurCategory.General;
        let b;
        if (t[0] !== getBlurForCategory || t[1] !== C) {
            b = getBlurForCategory(C);
            t[0] = getBlurForCategory;
            t[1] = C;
            t[2] = b;
        } else {
            b = t[2];
        }
        const S = `blur(${b}px)`;
        let R;
        let L;
        if (t[3] !== S || t[4] !== containerRef || t[5] !== eventContainerRef || t[6] !== forceReveal || t[7] !== y) {
            R = function() {
                const containerRef_current = containerRef.current;
                if (!(!containerRef_current || !y)) {
                    containerRef_current.style.transition = f;
                    containerRef_current.style.filter = forceReveal === true ? _ : S;
                    containerRef_current.style.userSelect = forceReveal === true ? "" : "none";
                    const n = function() {
                        containerRef_current.style.filter = _;
                        containerRef_current.style.userSelect = "";
                    };
                    const r = function() {
                        if (forceReveal !== true) {
                            containerRef_current.style.filter = S;
                            containerRef_current.style.userSelect = "none";
                        }
                    };
                    const o = eventContainerRef?.current ?? containerRef_current;
                    o.addEventListener("mouseenter", n);
                    o.addEventListener("mouseleave", r);
                    o.addEventListener("focusin", n);
                    o.addEventListener("focusout", r);
                    return function() {
                        containerRef_current.style.transition = "";
                        containerRef_current.style.filter = "";
                        containerRef_current.style.userSelect = "";
                        o.removeEventListener("mouseenter", n);
                        o.removeEventListener("mouseleave", r);
                        o.removeEventListener("focusin", n);
                        o.removeEventListener("focusout", r);
                    };
                }
            };
            L = [
                containerRef,
                eventContainerRef,
                y,
                forceReveal,
                S
            ];
            t[3] = S;
            t[4] = containerRef;
            t[5] = eventContainerRef;
            t[6] = forceReveal;
            t[7] = y;
            t[8] = R;
            t[9] = L;
        } else {
            R = t[8];
            L = t[9];
        }
        useEffect(R, L);
        if (!y) {
            return children;
        }
        let E;
        if (t[10] !== children) {
            E = <PContext.Provider value>{children}</PContext.Provider>;
            t[10] = children;
            t[11] = E;
        } else {
            E = t[11];
        }
        return E;
    }
    l.default = g;
}, 98);