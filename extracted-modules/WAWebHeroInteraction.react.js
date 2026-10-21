__d("WAWebHeroInteraction.react", [
    "CometHeroHoldTrigger.react",
    "WAWebErrorBoundaryInstrumented.react",
    "hero-tracing",
    "react",
    "react-compiler-runtime",
    "useWAWebCometInteractionTracing"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(10);
        const { children, description, enableHoldTrigger, pageletName, policy } = e;
        const c = enableHoldTrigger === undefined ? true : enableHoldTrigger;
        const d = r("useWAWebCometInteractionTracing")(policy);
        const pageletName_1 = pageletName ?? description;
        let renderTrackedDOMElement;
        if (t[0] !== children || t[1] !== description || t[2] !== c || t[3] !== d) {
            renderTrackedDOMElement = function(t) {
                const Component = r("WAWebErrorBoundaryInstrumented.react");
                return <Component name="hero-interaction">{c && s.jsx(r("CometHeroHoldTrigger.react"), {
                    description,
                    hold: d.interactionIsInFlight
                })}{children(t, d)}</Component>;
            };
            t[0] = children;
            t[1] = description;
            t[2] = c;
            t[3] = d;
            t[4] = renderTrackedDOMElement;
        } else {
            renderTrackedDOMElement = t[4];
        }
        let _;
        if (t[5] !== description || t[6] !== d.traceIdState || t[7] !== pageletName_1 || t[8] !== renderTrackedDOMElement) {
            _ = s.jsx(o("hero-tracing").HeroInteraction, {
                interactionDesc: description,
                interactionUUID: d.traceIdState,
                pageletName: pageletName_1,
                renderTrackedDOMElement
            });
            t[5] = description;
            t[6] = d.traceIdState;
            t[7] = pageletName_1;
            t[8] = renderTrackedDOMElement;
            t[9] = _;
        } else {
            _ = t[9];
        }
        return _;
    }
    l.default = u;
}, 98);