__d("WAWebVideoPlaybackSpeedButton.react", [
    "fbt",
    "WDSButton.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const { disabled, onClick, playbackRate } = e;
        const l = disabled === undefined ? false : disabled;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Playback speed");
            t[0] = c;
        } else {
            c = t[0];
        }
        let m;
        if (t[1] !== playbackRate) {
            m = s._("Playback speed: {speed}. Click to change speed.", [
                s._param("speed", `${playbackRate}x`)
            ]);
            t[1] = playbackRate;
            t[2] = m;
        } else {
            m = t[2];
        }
        let p;
        if (t[3] !== playbackRate) {
            p = d(playbackRate);
            t[3] = playbackRate;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] !== l || t[6] !== onClick || t[7] !== m || t[8] !== p) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WDSTooltip.react");
            _ = <Component_1 label={c}><Component aria-label={m} disabled={l} label={p} onPress={onClick} size="small" type="media" variant="borderless"/></Component_1>;
            t[5] = l;
            t[6] = onClick;
            t[7] = m;
            t[8] = p;
            t[9] = _;
        } else {
            _ = t[9];
        }
        return _;
    }
    function d(playbackRate) {
        switch(playbackRate){
            case 1:
                return s._("1.0×");
            case 1.5:
                return s._("1.5×");
            case 2:
                return s._("2.0×");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${playbackRate}`);
                })();
        }
    }
    l.default = c;
}, 226);