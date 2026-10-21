__d("useFeedPressEventHandler", [
    "ExecutionEnvironment",
    "FBLogger",
    "cr:11054",
    "cr:2866",
    "emptyFunction",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useStoryClickEventLogger",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let u;
    let c;
    const useCallback = (c || (c = o("react"))).useCallback;
    function m() {
        return r("emptyFunction");
    }
    const p = n("cr:11054") ?? m;
    function _() {
        return f;
    }
    function f(e, t) {}
    const g = n("cr:2866") ?? _;
    function h(e, t) {
        const n = o("react-compiler-runtime").c(6);
        const a = r("useStoryClickEventLogger")();
        const i = p();
        const l = g();
        let s;
        if (n[0] !== t || n[1] !== a || n[2] !== e || n[3] !== l || n[4] !== i) {
            s = function(o) {
                try {
                    i(o);
                } catch (error) {
                    const s = r("getErrorSafe")(error);
                    r("FBLogger")("voyage").catching(s).mustfix("Voyage press logger threw");
                }
                if (e) {
                    e(o);
                }
                const { buttons, clientX, clientY, timeStamp, type } = o;
                if (type === "click" || type === "press" || type === "contextmenu" || type === "pressstart" && buttons === 4) {
                    const _ = type === "contextmenu" ? 2 : buttons === 4 ? 1 : 0;
                    const f = r("uuidv4")();
                    a(timeStamp, _, t, f, clientX, clientY);
                    l();
                }
            };
            n[0] = t;
            n[1] = a;
            n[2] = e;
            n[3] = l;
            n[4] = i;
            n[5] = s;
        } else {
            s = n[5];
        }
        return s;
    }
    function y(e, t) {
        return r("emptyFunction");
    }
    const C = (u || (u = r("ExecutionEnvironment"))).canUseDOM ? h : y;
    l.default = C;
}, 98);