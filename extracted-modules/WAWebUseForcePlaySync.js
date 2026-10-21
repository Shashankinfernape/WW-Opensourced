__d("WAWebUseForcePlaySync", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function useD(e, t, n) {
        const rRef = useRef(e);
        const oRef = useRef(null);
        useEffect(function() {
            const rRef_current = rRef.current;
            rRef.current = e;
            const t_current = t.current;
            if (!(t_current == null || !n.current)) {
                if (e) {
                    const l = oRef.current;
                    if (l != null) {
                        t_current.removeOnLoopCompleteHandler(l);
                        oRef.current = null;
                    }
                    t_current.setLoop(true);
                    t_current.play();
                    return;
                }
                if (rRef_current) {
                    const s = function() {
                        const t_current = t.current;
                        t_current?.removeOnLoopCompleteHandler(s);
                        oRef.current = null;
                        t_current?.stop();
                        t_current?.setLoop(false);
                        n.current = false;
                    };
                    oRef.current = s;
                    t_current.addOnLoopCompleteHandler(s);
                    return function() {
                        t_current.removeOnLoopCompleteHandler(s);
                        if (oRef.current === s) {
                            oRef.current = null;
                        }
                    };
                }
            }
        }, [
            e
        ]);
        return rRef;
    }
    l.useForcePlaySync = useD;
}, 98);