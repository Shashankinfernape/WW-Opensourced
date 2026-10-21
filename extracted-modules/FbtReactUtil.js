__d("FbtReactUtil", [], function(t, n, r, o, a, i) {
    const e = typeof Symbol === "function" && Symbol.for && Symbol.for("react.transitional.element") || 60103;
    const l = false;
    function s(e) {
        const t = {
            validated: true
        };
        if (l) {
            Object.defineProperty(e, "_store", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: t
            });
        } else {
            e._store = t;
        }
    }
    i.REACT_ELEMENT_TYPE = e;
    i.injectReactShim = s;
}, 66);