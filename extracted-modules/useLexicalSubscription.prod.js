__d("useLexicalSubscription.prod", [
    "Lexical",
    "LexicalComposerContext",
    "react"
], function $module_useLexicalSubscription_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_closure_react;
    const t = _require_closure_react || (_require_closure_react = require("react"));
    const r = require("Lexical").CAN_USE_DOM ? t.useLayoutEffect : t.useEffect;
    exports.useLexicalSubscription = function(u) {
        const _e$useLexicalComposer = require("LexicalComposerContext").useLexicalComposerContext();
        const i = _e$useLexicalComposer[0];
        const s = t.useMemo(function() {
            return u(i);
        }, [
            i,
            u
        ]);
        const [c, setC] = t.useState(function() {
            return s.initialValueFn();
        });
        const oRef = t.useRef(c);
        r(function() {
            const { initialValueFn, subscribe } = s;
            const r = initialValueFn();
            if (oRef.current !== r) {
                oRef.current = r;
                setC(r);
            }
            return subscribe(function(e) {
                oRef.current = e;
                setC(e);
            });
        }, [
            s,
            u
        ]);
        return c;
    };
}, null);