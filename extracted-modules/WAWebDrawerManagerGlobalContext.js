__d("WAWebDrawerManagerGlobalContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).useSyncExternalStore;
    let u = null;
    let c = null;
    let d = null;
    let m = null;
    let p = {
        left: null,
        right: null,
        mid: null,
        fullscreen: null
    };
    const _ = new Set;
    function f(e) {
        _.add(e);
        return function() {
            _.delete(e);
        };
    }
    function g() {
        return p;
    }
    function h() {
        if (!(u === p.left && c === p.right && d === p.mid && m === p.fullscreen)) {
            p = {
                left: u,
                right: c,
                mid: d,
                fullscreen: m
            };
            for (const e of _){
                e();
            }
        }
    }
    function y(e) {
        switch(e){
            case "left":
                return u;
            case "right":
                return c;
            case "mid":
                return d;
            case "fullscreen":
                return m;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function C() {
        return s(f, g);
    }
    function b(e, t) {
        e: {
            if (e === "left") {
                u = t;
                break e;
            }
            if (e === "right") {
                c = t;
                break e;
            }
            if (e === "mid") {
                d = t;
                break e;
            }
            if (e === "fullscreen") {
                m = t;
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
        h();
    }
    l.getGlobalDrawerManager = y;
    l.useGlobalDrawerManagers = C;
    l.setGlobalDrawerManager = b;
}, 98);