__d("createKeyCommandWidget", [
    "FBLogger",
    "createKeyCommandWrapper",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useEffect } = u;
    function m(e = true) {
        const TContext = s.createContext();
        const Wrapper = r("createKeyCommandWrapper")(e, TContext);
        function useKeyCommands(e, n, a) {
            const i = o("react-compiler-runtime").c(6);
            const l = n === undefined ? false : n;
            const s = useContext(TContext);
            let u;
            let m;
            if (i[0] !== e || i[1] !== a || i[2] !== l || i[3] !== s) {
                u = function() {
                    if (!s) {
                        if (!l) {
                            r("FBLogger")("comet_ax").mustfix("Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.");
                        }
                        return;
                    }
                    if (e) {
                        return s.addCommands(e, a);
                    }
                };
                m = [
                    s,
                    e,
                    l,
                    a
                ];
                i[0] = e;
                i[1] = a;
                i[2] = l;
                i[3] = s;
                i[4] = u;
                i[5] = m;
            } else {
                u = i[4];
                m = i[5];
            }
            useEffect(u, m);
        }
        return {
            Context: TContext,
            Wrapper,
            useKeyCommands
        };
    }
    l.default = m;
}, 98);