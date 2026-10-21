__d("WAWebFilePicker.react", [
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef } = c;
    function p(t) {
        const n = o("react-compiler-runtime").c(12);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        const i = r;
        const { mimes, multiple, onChange } = i;
        const p = multiple === undefined ? true : multiple;
        const _RefRef = useRef(null);
        let f;
        if (n[3] !== onChange) {
            f = function(t) {
                onChange(t);
            };
            n[3] = onChange;
            n[4] = f;
        } else {
            f = n[4];
        }
        const g = f;
        let h;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = function() {
                if (_RefRef.current) {
                    _RefRef.current.value = "";
                    _RefRef.current.click();
                }
            };
            n[5] = h;
        } else {
            h = n[5];
        }
        const open = h;
        let C;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = function() {
                return {
                    open
                };
            };
            n[6] = C;
        } else {
            C = n[6];
        }
        useImperativeHandle(a, C);
        let b;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                display: "none"
            };
            n[7] = b;
        } else {
            b = n[7];
        }
        let v;
        if (n[8] !== g || n[9] !== mimes || n[10] !== p) {
            v = <input accept={mimes} ref={_RefRef} type="file" multiple={p} style={b} onClick={o("WAWebStopEvent").stopPropagation} onChange={g}/>;
            n[8] = g;
            n[9] = mimes;
            n[10] = p;
            n[11] = v;
        } else {
            v = n[11];
        }
        return v;
    }
    l.default = p;
}, 98);