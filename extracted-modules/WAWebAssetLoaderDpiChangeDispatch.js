__d("WAWebAssetLoaderDpiChangeDispatch", [], function(t, n, r, o, a, i) {
    const e = {
        LOW: "low",
        HIGH: "high"
    };
    const l = window.matchMedia("\n    only screen and (-webkit-min-device-pixel-ratio: 2),\n    only screen and (min-device-pixel-ratio: 2),\n    only screen and (min-resolution: 2dppx)\n");
    const s = {
        RES: e,
        currentRes: l.matches ? e.HIGH : e.LOW
    };
    const u = function(n) {
        const t = n.matches ? e.HIGH : e.LOW;
        if (t !== s.currentRes) {
            s.currentRes = t;
            const r = document.createEvent("Event");
            r.initEvent("dpichange", true, true);
            window.dispatchEvent(r);
        }
    };
    l.addListener(u);
    i.default = s;
}, 66);