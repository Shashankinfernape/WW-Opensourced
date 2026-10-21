__d("WAWebPttMessagePlaybackRateButton", [
    "fbt",
    "WAWebPttPrefs",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        wrapper: {
            position: "x10l6tqk",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            height: "x5yr21d",
            userSelect: "x87ps6o",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(18);
        const { onClick, playbackRate, playbackRateButtonIsVisible } = e;
        const l = r("useWAWebIsKeyboardUser")();
        const l_isKeyboardUser = l.isKeyboardUser;
        let d;
        if (t[0] !== onClick) {
            d = function() {
                o("WAWebPttPrefs").PttPrefs.delayClearPlaybackRateControl();
                onClick();
            };
            t[0] = onClick;
            t[1] = d;
        } else {
            d = t[1];
        }
        const _ = d;
        let f = -1;
        if (playbackRateButtonIsVisible) {
            f = 0;
        }
        const g = !playbackRateButtonIsVisible;
        let h;
        if (t[2] !== playbackRate) {
            h = p(playbackRate);
            t[2] = playbackRate;
            t[3] = h;
        } else {
            h = t[3];
        }
        const y = l_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus;
        let C;
        if (t[4] !== y) {
            C = [
                c.wrapper,
                y
            ];
            t[4] = y;
            t[5] = C;
        } else {
            C = t[5];
        }
        const b = f;
        let v;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "x9f619 x900493 x1nn3v0j x1gabggj x1120s5i xaso8d8 x1nxh6w3 xk50ysn x17t9dm2 x2b8uid xcpsgoo x1142k65 x9okykr x3hdh8v xr0m5pc x1muecih"
            };
            t[6] = v;
        } else {
            v = t[6];
        }
        let S;
        if (t[7] !== playbackRate) {
            S = m(playbackRate);
            t[7] = playbackRate;
            t[8] = S;
        } else {
            S = t[8];
        }
        let R;
        if (t[9] !== S) {
            R = <div {...babelHelpers.extends({}, v, {
                children: S
            })}/>;
            t[9] = S;
            t[10] = R;
        } else {
            R = t[10];
        }
        let L;
        if (t[11] !== _ || t[12] !== g || t[13] !== h || t[14] !== C || t[15] !== R || t[16] !== f) {
            const Component = r("WAWebUnstyledButton.react");
            L = <Component aria-hidden={g} aria-label={h} xstyle={C} tabIndex={b} onClick={_}>{R}</Component>;
            t[11] = _;
            t[12] = g;
            t[13] = h;
            t[14] = C;
            t[15] = R;
            t[16] = f;
            t[17] = L;
        } else {
            L = t[17];
        }
        return L;
    }
    function m(playbackRate) {
        switch(playbackRate){
            case 1:
                return s._("1×");
            case 1.5:
                return s._("1.5×");
            case 2:
                return s._("2×");
        }
    }
    function p(playbackRate) {
        switch(playbackRate){
            case 1:
                return s._("Change playback speed, currently 1×");
            case 1.5:
                return s._("Change playback speed, currently 1.5×");
            case 2:
                return s._("Change playback speed, currently 2×");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${playbackRate}`);
                })();
        }
    }
    l.default = d;
}, 226);