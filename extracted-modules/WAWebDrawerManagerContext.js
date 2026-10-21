__d("WAWebDrawerManagerContext", [
    "WALogger",
    "WAWebDrawerManagerGlobalContext",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebDrawerManagerEvents"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { createContext, useCallback, useContext, useEffect } = c;
    const FContext = createContext(null);
    function G1Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, onDrawerStateChange } = e;
        const a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("left", onDrawerStateChange);
        let i;
        let l;
        if (t[0] !== a) {
            i = function() {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("left", a);
                return h;
            };
            l = [
                a
            ];
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        useEffect(i, l);
        let s;
        if (t[3] !== children || t[4] !== a) {
            s = <FContext.Provider value={a}>{children}</FContext.Provider>;
            t[3] = children;
            t[4] = a;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    function h() {
        o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("left", null);
    }
    const YContext = createContext(null);
    function C(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, onDrawerStateChange } = e;
        const a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("right", onDrawerStateChange);
        let i;
        let l;
        if (t[0] !== a) {
            i = function() {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("right", a);
                return b;
            };
            l = [
                a
            ];
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        useEffect(i, l);
        let s;
        if (t[3] !== children || t[4] !== a) {
            s = <YContext.Provider value={a}>{children}</YContext.Provider>;
            t[3] = children;
            t[4] = a;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    function b() {
        o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("right", null);
    }
    const VContext = createContext(null);
    function SComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, onDrawerStateChange } = e;
        const a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("mid", onDrawerStateChange);
        let i;
        let l;
        if (t[0] !== a) {
            i = function() {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("mid", a);
                return R;
            };
            l = [
                a
            ];
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        useEffect(i, l);
        let s;
        if (t[3] !== children || t[4] !== a) {
            s = <VContext.Provider value={a}>{children}</VContext.Provider>;
            t[3] = children;
            t[4] = a;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    function R() {
        o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("mid", null);
    }
    const LContext = createContext(null);
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, onDrawerStateChange } = e;
        const a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("fullscreen", onDrawerStateChange);
        let i;
        let l;
        if (t[0] !== a) {
            i = function() {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("fullscreen", a);
                return k;
            };
            l = [
                a
            ];
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        useEffect(i, l);
        let s;
        if (t[3] !== children || t[4] !== a) {
            s = <LContext.Provider value={a}>{children}</LContext.Provider>;
            t[3] = children;
            t[4] = a;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    function k() {
        o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("fullscreen", null);
    }
    function IComponent(e) {
        const t = o("react-compiler-runtime").c(20);
        const { children, onDrawerStateChange } = e;
        let a;
        if (t[0] !== onDrawerStateChange) {
            a = function(t) {
                onDrawerStateChange?.("left", t);
            };
            t[0] = onDrawerStateChange;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== onDrawerStateChange) {
            l = function(t) {
                onDrawerStateChange?.("right", t);
            };
            t[2] = onDrawerStateChange;
            t[3] = l;
        } else {
            l = t[3];
        }
        const s = l;
        let c;
        if (t[4] !== onDrawerStateChange) {
            c = function(t) {
                onDrawerStateChange?.("mid", t);
            };
            t[4] = onDrawerStateChange;
            t[5] = c;
        } else {
            c = t[5];
        }
        const d = c;
        let m;
        if (t[6] !== onDrawerStateChange) {
            m = function(t) {
                onDrawerStateChange?.("fullscreen", t);
            };
            t[6] = onDrawerStateChange;
            t[7] = m;
        } else {
            m = t[7];
        }
        const p = m;
        let _;
        if (t[8] !== children || t[9] !== p) {
            _ = <EComponent onDrawerStateChange={p}>{children}</EComponent>;
            t[8] = children;
            t[9] = p;
            t[10] = _;
        } else {
            _ = t[10];
        }
        let f;
        if (t[11] !== d || t[12] !== _) {
            f = <SComponent onDrawerStateChange={d}>{_}</SComponent>;
            t[11] = d;
            t[12] = _;
            t[13] = f;
        } else {
            f = t[13];
        }
        let h;
        if (t[14] !== s || t[15] !== f) {
            h = <C onDrawerStateChange={s}>{f}</C>;
            t[14] = s;
            t[15] = f;
            t[16] = h;
        } else {
            h = t[16];
        }
        let y;
        if (t[17] !== i || t[18] !== h) {
            y = <G1Component onDrawerStateChange={i}>{h}</G1Component>;
            t[17] = i;
            t[18] = h;
            t[19] = y;
        } else {
            y = t[19];
        }
        return y;
    }
    function TComponent(e) {
        const t = o("react-compiler-runtime").c(12);
        const e_children = e.children;
        const r = o("WAWebDrawerManagerGlobalContext").useGlobalDrawerManagers();
        const { fullscreen, left, mid, right } = r;
        let c;
        if (t[0] !== e_children || t[1] !== fullscreen) {
            c = <LContext.Provider value={fullscreen}>{e_children}</LContext.Provider>;
            t[0] = e_children;
            t[1] = fullscreen;
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== mid || t[4] !== c) {
            d = <VContext.Provider value={mid}>{c}</VContext.Provider>;
            t[3] = mid;
            t[4] = c;
            t[5] = d;
        } else {
            d = t[5];
        }
        let m;
        if (t[6] !== right || t[7] !== d) {
            m = <YContext.Provider value={right}>{d}</YContext.Provider>;
            t[6] = right;
            t[7] = d;
            t[8] = m;
        } else {
            m = t[8];
        }
        let p;
        if (t[9] !== left || t[10] !== m) {
            p = <FContext.Provider value={left}>{m}</FContext.Provider>;
            t[9] = left;
            t[10] = m;
            t[11] = p;
        } else {
            p = t[11];
        }
        return p;
    }
    function useD() {
        return useContext(VContext);
    }
    function useX(t) {
        const n = t === "left" ? FContext : t === "right" ? YContext : t === "mid" ? VContext : t === "fullscreen" ? LContext : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })();
        const a = useContext(n);
        if (a == null) {
            const i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(t);
            if (i != null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[useDrawerManagerContext] ",
                    " ctx unavailable, using global"
                ])), t);
                return i;
            }
            throw r("err")(`useDrawerManagerContext: ${t} drawer manager context is not available. Make sure the component is wrapped with the appropriate DrawerManagerContextProvider.`);
        }
        return a;
    }
    l.LeftDrawerManagerContextProvider = G1Component;
    l.DrawerManagerContextProvider = IComponent;
    l.DrawerManagerGlobalBridgeProvider = TComponent;
    l.useMiddleDrawerManagerContext = useD;
    l.useDrawerManagerContext = useX;
}, 98);