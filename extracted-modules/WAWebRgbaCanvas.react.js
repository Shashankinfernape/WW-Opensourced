__d("WAWebRgbaCanvas.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(14);
        const { height, rgbaBuffer, width } = e;
        const iRef = useRef(null);
        const lRef = useRef(null);
        let u;
        let m;
        if (t[0] !== rgbaBuffer) {
            u = function() {
                const iRef_current = iRef.current;
                const lRef_current = lRef.current;
                if (iRef_current && lRef_current && rgbaBuffer) {
                    lRef_current.data.set(new Uint8Array(rgbaBuffer));
                    iRef_current.putImageData(lRef_current, 0, 0);
                }
            };
            m = [
                rgbaBuffer
            ];
            t[0] = rgbaBuffer;
            t[1] = u;
            t[2] = m;
        } else {
            u = t[1];
            m = t[2];
        }
        useEffect(u, m);
        let p;
        if (t[3] !== height || t[4] !== width) {
            p = function(t) {
                if (t) {
                    iRef.current = t.getContext("2d");
                    lRef.current = iRef.current?.createImageData(width, height);
                } else {
                    iRef.current = null;
                    lRef.current = null;
                }
            };
            t[3] = height;
            t[4] = width;
            t[5] = p;
        } else {
            p = t[5];
        }
        const _ = p;
        let f;
        if (t[6] !== _ || t[7] !== e.className || t[8] !== e.height || t[9] !== e.onClick || t[10] !== e.onMouseEnter || t[11] !== e.onMouseLeave || t[12] !== e.width) {
            f = <canvas role="button" className={e.className} width={e.width} height={e.height} onClick={e.onClick} onMouseEnter={e.onMouseEnter} onMouseLeave={e.onMouseLeave} ref={_}/>;
            t[6] = _;
            t[7] = e.className;
            t[8] = e.height;
            t[9] = e.onClick;
            t[10] = e.onMouseEnter;
            t[11] = e.onMouseLeave;
            t[12] = e.width;
            t[13] = f;
        } else {
            f = t[13];
        }
        return f;
    }
    l.default = m;
}, 98);