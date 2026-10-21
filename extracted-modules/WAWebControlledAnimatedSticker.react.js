__d("WAWebControlledAnimatedSticker.react", [
    "WAWebMediaAnimatedStickerUrlProvider",
    "nullthrows",
    "react",
    "useWAWebIntersection",
    "useWAWebListener",
    "useWAWebSetModelValue",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useImperativeHandle, useRef, useState } = u;
    function Component({ className, downloadMedia, imageRef, label, mediaData, onClick, onEnter, onFocus, placeholderRenderer, ref, startAnimation }) {
        const CRef = useRef();
        const bRef = useRef();
        const vRef = useRef();
        const S = r("useWAWebIntersection")({
            root: null,
            rootMargin: "25px",
            threshold: 0.99
        });
        const R = S[0];
        const isIntersecting = S[1].isIntersecting;
        const E = useState(startAnimation);
        const k = E[0];
        const I = E[1];
        const T = useState(false);
        const D = T[0];
        const x = T[1];
        const $ = o("useWAWebTimeout").useManualTimeout(function() {
            const bRef_current = bRef.current;
            bRef_current?.refreshBlob();
            I(false);
            vRef.current = null;
        });
        const P = $[0];
        const N = $[1];
        const M = ()=>{
            const e = r("nullthrows")(mediaData.singleLoopDuration);
            const t = (Date.now() - r("nullthrows")(vRef.current)) % e;
            const n = mediaData.animationDuration - t;
            P(n);
        };
        const w = function() {
            N();
            if (vRef.current == null) {
                vRef.current = Date.now();
            }
            I(true);
        };
        const A = function() {
            const e = document.visibilityState === "visible";
            if (isIntersecting && e) {
                w();
                M();
            } else {
                I(false);
            }
        };
        o("useWAWebListener").useListener(document, "visibilitychange", A);
        useEffect(function() {
            if (isIntersecting) {
                w();
                M();
            } else if (vRef.current != null) {
                M();
            }
        }, [
            isIntersecting
        ]);
        const F = o("useWAWebSetModelValue").useSetModelValue(mediaData, "animatedAsNewMsg");
        const onLoad = function() {
            if (!D) {
                const e = CRef.current;
                const t = imageRef.current;
                if (e && t) {
                    e.width = t.naturalWidth / 2;
                    e.height = t.naturalHeight / 2;
                    r("nullthrows")(e.getContext("2d")).drawImage(t, 0, 0, e.width, e.height);
                }
                if (startAnimation) {
                    vRef.current = Date.now();
                    M();
                    F(true);
                }
                x(true);
            }
        };
        const B = function() {
            if (vRef.current != null) {
                M();
            }
        };
        useImperativeHandle(ref, function() {
            return {
                playAnimationOnce: function() {
                    w();
                    M();
                },
                startAnimation: w
            };
        });
        const W = !D || k;
        const Component = r("WAWebMediaAnimatedStickerUrlProvider");
        return <div className={className} onMouseEnter={w} onKeyPress={onEnter} onFocus={onFocus} onMouseLeave={B} onClick={onClick} role="button" tabIndex={0} aria-label={label} ref={R}><Component ref={bRef} mediaData={mediaData} placeholderRenderer={placeholderRenderer} downloadMedia={downloadMedia}>{function(n) {
            return <img alt={label} className={className} style={{
                display: W ? "block" : "none"
            }} draggable="false" src={n} ref={imageRef} onLoad={onLoad}/>;
        }}</Component><canvas className={className} style={{
            display: W ? "none" : "block"
        }} draggable="false" ref={CRef}/></div>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    l.default = Component;
}, 98);