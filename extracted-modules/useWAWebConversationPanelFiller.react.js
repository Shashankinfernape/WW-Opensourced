__d("useWAWebConversationPanelFiller.react", [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAPromiseRaceAbort",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebVelocityAnimate",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef } = c;
    function p({ canCompose, getScrollBottom, onComposeHeightChange, selectable, setScrollBottom }) {
        const pRef = useRef(null);
        const _RefRef = useRef(0);
        const fRef = useRef(null);
        const gRef = useRef();
        const hRef = useRef(false);
        useEffect(function() {
            if (!canCompose) {
                _RefRef.current = 0;
            }
        }, [
            canCompose
        ]);
        const y = (t)=>Math.max(0, _RefRef.current);
        const C = ()=>{
            const e = y();
            if (pRef.current) {
                pRef.current.style.height = `${e}px`;
            }
        };
        const handleComposeHeightChange = function({ input, overlay = 0 }, s) {
            const fRef_current = fRef.current;
            const y = getScrollBottom();
            if (!(!fRef_current || y == null)) {
                if (input !== undefined) {
                    onComposeHeightChange(input);
                    return;
                }
                if (s) {
                    _RefRef.current = overlay;
                    C();
                    setScrollBottom(y);
                    return;
                }
                _RefRef.current += overlay;
                if (overlay < 0) {
                    C();
                    setScrollBottom(y);
                }
                if (gRef.current) {
                    hRef.current = true;
                    gRef.current?.controller.abort();
                }
                const v = new AbortController;
                const S = v.signal;
                const R = (gRef.current?.promise || (e || (e = n("Promise"))).resolve()).then(()=>r("WAWebVelocityAnimate")(fRef_current, {
                        translateY: overlay > 0 ? [
                            -overlay,
                            0
                        ] : [
                            0,
                            overlay
                        ]
                    }, {
                        duration: 300,
                        easing: [
                            0.1,
                            0.82,
                            0.25,
                            1
                        ]
                    }));
                const L = r("WAPromiseRaceAbort")(R, S).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").Unmount, r("WAWebNoop"))).then(()=>{
                    if (S.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    if (overlay > 0) {
                        C();
                    }
                    fRef_current.style.transform = "";
                    if (overlay > 0) {
                        setScrollBottom(y);
                    }
                }).catch(o("WAAbortError").catchAbort(function() {
                    r("WAWebVelocityAnimate")(fRef_current, "finish", true);
                })).then(()=>{
                    if (hRef.current) {
                        hRef.current = false;
                    } else {
                        gRef.current = undefined;
                    }
                });
                gRef.current = {
                    promise: L,
                    controller: v
                };
            }
        };
        let filler;
        if (selectable) {
            filler = <div ref={pRef} className="x1c4vz4f x2lah0s xdl72j9 x14yy4lh"/>;
        } else if (canCompose) {
            filler = <div ref={pRef} style={{
                height: `${y()}px`
            }} className="x1c4vz4f x2lah0s xdl72j9 x14yy4lh"/>;
        }
        return {
            msgPanelRef: fRef,
            filler,
            handleComposeHeightChange
        };
    }
    l.default = p;
}, 98);