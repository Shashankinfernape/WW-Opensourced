__d("getReactComponentName", [
    "FBLogger",
    "getErrorSafe",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
    "reactComponentNameSemanticsCheck"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e == null) {
            return null;
        }
        for (const t of e){
            if (!o("reactComponentNameSemanticsCheck").isReactComponentNameMeaningless(t)) {
                return t;
            }
        }
        return null;
    }
    function s(t) {
        if (t == null) {
            return null;
        }
        try {
            const n = r("getReactComponentStackFromDOMElement_THIS_CAN_BREAK")(t);
            return e(n);
        } catch (error) {
            r("FBLogger")("react-component-name-resolver").catching(r("getErrorSafe")(error)).mustfix("Failed to get react component name");
        }
    }
    l.getAllowListedComponentName = e;
    l.getMeaningfulReactComponentName = s;
}, 98);