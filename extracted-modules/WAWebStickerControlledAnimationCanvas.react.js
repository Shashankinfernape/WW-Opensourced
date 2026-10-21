__d("WAWebStickerControlledAnimationCanvas.react", [
    "WAAbortError",
    "WAWebAnimateStickerOnCanvas",
    "WAWebRgbaCanvas.react",
    "getErrorSafe",
    "react",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef, useState } = u;
    function PComponent(e) {
        const { animationFrames, maxLoops, startAnimation } = e;
        const signal = r("useWAWebUnmountSignal")();
        const lRef = useRef(false);
        const uRef = useRef(0);
        const pRef = useRef(false);
        const f = useState(function() {
            if (startAnimation) {
                return null;
            }
            return _(animationFrames);
        });
        const rgbaBuffer = f[0];
        const h = f[1];
        const y = ()=>{
            if (!lRef.current) {
                lRef.current = true;
                r("WAWebAnimateStickerOnCanvas")({
                    animationFrames,
                    signal,
                    onFrameChange: function(t) {
                        return h(t);
                    },
                    shouldStop: function() {
                        if (uRef.current >= maxLoops) {
                            return true;
                        }
                        if (!pRef.current) {
                            uRef.current++;
                        }
                        return false;
                    }
                }).catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    if (t.name !== o("WAAbortError").ABORT_ERROR) {
                        throw e;
                    }
                }).finally(()=>{
                    lRef.current = false;
                });
            }
        };
        useEffect(function() {
            if (startAnimation) {
                y();
            }
        }, []);
        const onMouseEnter = function() {
            if (maxLoops !== Infinity) {
                pRef.current = true;
                uRef.current = 1;
                y();
            }
        };
        const b = function() {
            pRef.current = false;
        };
        if (rgbaBuffer) {
            const Component = r("WAWebRgbaCanvas.react");
            return <Component rgbaBuffer={rgbaBuffer} className={e.className} width={e.width} height={e.height} onClick={e.onClick} onMouseEnter={onMouseEnter} onMouseLeave={b}/>;
        }
        return null;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    function _(animationFrames) {
        if (animationFrames.length === 0) {
            return null;
        }
        return animationFrames[0].rgbaBuffer;
    }
    l.default = PComponent;
}, 98);