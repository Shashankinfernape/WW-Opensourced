__d("useCometPressableBehavior", [
    "BasePlaceholderContext",
    "CometDangerouslySuppressInteractiveElementsContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    function u() {
        const e = o("react-compiler-runtime").c(3);
        const isPlaceholder = useContext(r("BasePlaceholderContext"));
        const suppressInteractiveElements = useContext(r("CometDangerouslySuppressInteractiveElementsContext"));
        let a;
        if (e[0] !== isPlaceholder || e[1] !== suppressInteractiveElements) {
            a = {
                isPlaceholder,
                suppressInteractiveElements
            };
            e[0] = isPlaceholder;
            e[1] = suppressInteractiveElements;
            e[2] = a;
        } else {
            a = e[2];
        }
        return a;
    }
    l.default = u;
}, 98);