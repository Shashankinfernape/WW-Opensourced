__d("WAWebLottieWrapper.react", [
    "WAWebFlex.react",
    "WAWebLottieAnimationLoadable",
    "WAWebStickerLikeMsgPlaceholder.react",
    "WAWebUseForcePlaySync",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebIntersection",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef, useState } = c;
    const _ = 3;
    function FComponent(t) {
        const aRef = useRef(null);
        const i = t.maxLoopCount ?? _;
        const lRef = useRef(i);
        const sRef = useRef(false);
        const c = t.forcePlay === true;
        const f = o("WAWebUseForcePlaySync").useForcePlaySync(c, aRef, sRef);
        const g = r("useWAWebIntersection")({
            root: null,
            rootMargin: "190px",
            threshold: 0
        });
        const h = g[0];
        const isIntersecting = g[1].isIntersecting;
        const C = r("useWAWebIntersection")({
            root: null,
            rootMargin: "190px",
            threshold: 0.99
        });
        const b = C[0];
        const isIntersecting_1 = C[1].isIntersecting;
        const S = r("useMergeRefs")(h, b);
        const R = useState(isIntersecting);
        const L = R[0];
        const E = R[1];
        if (isIntersecting && !L) {
            E(true);
        }
        const k = ()=>lRef.current = i;
        const I = ()=>{
            aRef.current?.stop();
            aRef.current?.setLoop(false);
            sRef.current = false;
        };
        const T = function() {
            let e;
            if (!f.current) {
                if ((e = aRef.current) != null) {
                    e.removeOnLoopCompleteHandler();
                }
                I();
            }
        };
        const D = function() {
            let e;
            if (!(f.current || (e = aRef.current) == null)) {
                e.addOnLoopCompleteHandler(T);
            }
        };
        const x = function() {
            if (!f.current) {
                const e = lRef.current - 1;
                if (e !== 0) {
                    lRef.current = e;
                    return;
                }
                T();
                k();
            }
        };
        const $ = function(t) {
            aRef.current?.removeOnLoopCompleteHandler();
            if (t.withLoopCount) {
                aRef.current?.stop();
                k();
                aRef.current?.addOnLoopCompleteHandler(x);
            }
            sRef.current = true;
            aRef.current?.setLoop(true);
            aRef.current?.play();
        };
        const P = ()=>{
            let e;
            let t;
            if (!f.current) {
                if ((e = aRef.current) != null) {
                    e.removeOnLoopCompleteHandler();
                }
                if ((t = aRef.current) != null) {
                    t.addOnLoopCompleteHandler(T);
                }
                k();
            }
        };
        const N = ()=>{
            aRef.current?.removeOnLoopCompleteHandler();
            I();
            k();
        };
        const M = function() {
            const e = document.visibilityState === "visible";
            if (isIntersecting_1 && e) {
                $({
                    withLoopCount: !f.current
                });
            } else if (sRef.current && !f.current) {
                N();
            }
        };
        o("useWAWebListener").useListener(document, "visibilitychange", M);
        useEffect(function() {
            if (isIntersecting_1) {
                $({
                    withLoopCount: !f.current
                });
            } else if (sRef.current) {
                P();
            }
        }, [
            isIntersecting_1
        ]);
        const wRef = useRef(c);
        useEffect(function() {
            const wRef_current = wRef.current;
            wRef.current = c;
            if (wRef_current && !c && isIntersecting_1) {
                $({
                    withLoopCount: true
                });
            }
        }, [
            c
        ]);
        const Component = r("WAWebStickerLikeMsgPlaceholder.react");
        const Component_1 = r("WAWebStickerLikeMsgPlaceholder.react");
        const Component_2 = o("WAWebLottieAnimationLoadable").LottieAnimation;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        return <div className="x78zum5 xl56j7k x5yr21d" onMouseEnter={$} onMouseLeave={D} ref={S}><Component_3 justify="center" align="center" xstyle={t.lottieWrapperXStyle} testid="lottie-animated-emoji-container">{L && <Component_2 autoplay={isIntersecting_1} loop={t.maxLoopCount === 1 ? false : i} ref={aRef} xstyle={t.lottieSVGContainerXStyle} wrapperXstyle={t.lottieSVGContainerWrapperXStyle} path={t.path} data={t.data} fallback=<Component className={(e || (e = r("stylex")))(t.placeholderContainerXStyle)}/> placeholder=<Component_1 className={(e || (e = r("stylex")))(t.placeholderContainerXStyle)}/>/>}</Component_3></div>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.default = FComponent;
}, 98);