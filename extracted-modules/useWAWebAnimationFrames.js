__d("useWAWebAnimationFrames", [
    "WAStartAnimationLoop",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e, t) {
        const { active = false, delay = 0, targetWindow } = t ?? {};
        const dRef = useRef(e);
        dRef.current = e;
        const mRef = useRef();
        useEffect(function() {
            const e = function(t) {
                return dRef.current(t);
            };
            const t = function() {
                return mRef.current?.();
            };
            t();
            if (active) {
                mRef.current = o("WAStartAnimationLoop").startAnimationLoop(e, {
                    delay,
                    targetWindow
                });
            }
            return t;
        }, [
            active,
            delay,
            targetWindow
        ]);
    }
    l.default = d;
}, 98);