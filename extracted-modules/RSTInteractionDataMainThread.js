__d("RSTInteractionDataMainThread", [
    "ALChannel",
    "AdsALReactUtils",
    "FBLogger",
    "RSTConfig",
    "RSTEvents",
    "RSTMetadataMainThread",
    "RSTUtilsMainThread",
    "ResponsiveTrackerMainThread",
    "getErrorSafe",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 5;
    const s = [];
    const u = 100;
    const c = 10;
    const d = [];
    function m(t) {
        s.push(t);
        if (s.length > e) {
            s.shift();
        }
        d.push(t);
        if (d.length > u) {
            d.shift();
        }
    }
    function p() {
        s.length = 0;
    }
    function _() {
        const e = s;
        return e[e.length - 1];
    }
    function f() {
        return [].concat(s);
    }
    function g(e = c) {
        return d.slice(-1 * e);
    }
    function h(e, componentText) {
        const n = e ?? {};
        const { context, name, stack } = n;
        if (name != null || stack != null) {
            m({
                componentName: name,
                componentStack: stack,
                componentContext: context,
                eventType: "click",
                eventTime: Date.now(),
                componentText
            });
        }
        try {
            const s = o("RSTMetadataMainThread").getMainThreadMetadata();
            r("ResponsiveTrackerMainThread").postEvent(o("RSTEvents").RSTEvent.INTERACTION_DATA, babelHelpers.extends({}, s));
        } catch (error) {
            r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to send interaction data to worker");
        }
    }
    y();
    function y() {
        if (r("RSTConfig").SHOULD_CAPTURE_INTERACTION_DATA) {
            if (o("RSTUtilsMainThread").isMonetizationApp) {
                b();
            } else {
                C();
            }
        }
    }
    function C() {
        window.addEventListener("click", function({ target }) {
            if (target instanceof Element) {
                try {
                    const n = r("getReactComponentStackFromDOMElement_THIS_CAN_BREAK")(target);
                    const a = {
                        name: o("RSTUtilsMainThread").getAllowListedComponentName(n),
                        stack: n ?? [],
                        context: o("RSTUtilsMainThread").getReactComponentContext(n, r("RSTConfig").isReactComponentNameBlocked)
                    };
                    const i = v(target, a);
                    h(a, i);
                } catch (error) {
                    r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to get react component stack from Shim");
                }
            }
        }, true);
    }
    function b() {
        r("ALChannel").addListener("al_ui_event_capture", function(e) {
            if (e.event === "click") {
                try {
                    const n = {
                        name: e.reactComponentName,
                        stack: e.reactComponentStack ?? [],
                        context: o("RSTUtilsMainThread").getReactComponentContext(e.reactComponentStack, o("AdsALReactUtils").isComponentNameBlocked)
                    };
                    const a = e.targetElement;
                    const i = v(a, n);
                    h(n, i);
                } catch (error) {
                    r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to get react component stack from AL");
                }
            }
        });
    }
    function v(e, t) {
        if (!r("RSTConfig").SHOULD_CAPTURE_INTERACTION_ELEMENT_TEXT || t?.stack == null) {
            return null;
        }
        for (const o of t.stack){
            if (r("RSTConfig").isReactComponentTextBlocked(o)) {
                return null;
            }
        }
        let a = e?.textContent ?? null;
        if (typeof a === "string") {
            a = a.trim();
            const i = r("RSTConfig").ELEMENT_TEXT_SIZE_LIMIT;
            if (a.length > i) {
                a = a.substr(0, i) + `... (${a.length - i} code units omitted)`;
            }
        }
        if (a === "") {
            return null;
        }
        return a;
    }
    l.clearInteractionData = p;
    l.getLastInteractionDataSinceLastMessageToWorker = _;
    l.getInteractionDataSinceLastMessageToWorker = f;
    l.getInteractionHistory = g;
}, 98);