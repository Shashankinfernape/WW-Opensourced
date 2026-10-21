__d("WAWebWrapperReactionsQuickActionButton.react", [
    "fbt",
    "WAWebRound.react",
    "WDSIconIcMood.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        svgColorRefreshed: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { ref, msg, onToggleReactionTray, showButton } = e;
        let d;
        if (t[0] !== msg || t[1] !== onToggleReactionTray || t[2] !== showButton) {
            const Component = o("WAWebRound.react").Round;
            d = showButton ? <Component testid="reaction-entry-point" label={s._("React")} title={null} theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshed} onClick={function() {
                return onToggleReactionTray(msg);
            }}>{u.jsx(r("WDSIconIcMood.react"), {
                xstyle: c.svgColorRefreshed,
                height: 20
            })}</Component> : null;
            t[0] = msg;
            t[1] = onToggleReactionTray;
            t[2] = showButton;
            t[3] = d;
        } else {
            d = t[3];
        }
        const m = d;
        let p;
        if (t[4] !== m || t[5] !== ref) {
            p = <div ref={ref}>{m}</div>;
            t[4] = m;
            t[5] = ref;
            t[6] = p;
        } else {
            p = t[6];
        }
        return p;
    }
    l.default = d;
}, 226);