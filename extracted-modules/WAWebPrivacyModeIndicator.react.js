__d("WAWebPrivacyModeIndicator.react", [
    "fbt",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeToast",
    "WDSIconIcHidden.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(1);
        if (!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
            return null;
        }
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <D5Component/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function D5Component() {
        const e = o("react-compiler-runtime").c(5);
        const t = o("WAWebPrivacyModeContext").usePrivacyMode();
        const { isPrivacyModeEnabled, setPrivacyModeEnabled } = t;
        if (!isPrivacyModeEnabled) {
            return null;
        }
        let i;
        if (e[0] !== setPrivacyModeEnabled) {
            i = function() {
                setPrivacyModeEnabled(false);
                o("WAWebPrivacyModeToast").showPrivacyModeToast(false, function() {
                    setPrivacyModeEnabled(true);
                });
            };
            e[0] = setPrivacyModeEnabled;
            e[1] = i;
        } else {
            i = e[1];
        }
        const l = i;
        let c;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Privacy screen is on. Click to turn off.");
            e[2] = c;
        } else {
            c = e[2];
        }
        let d;
        if (e[3] !== l) {
            const Component = r("WDSMenuBarItem.react");
            d = <Component testid="privacy-mode-indicator" icon={r("WDSIconIcHidden.react")} title={c} isActive={false} onClick={l} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            e[3] = l;
            e[4] = d;
        } else {
            d = e[4];
        }
        return d;
    }
    l.default = c;
}, 226);