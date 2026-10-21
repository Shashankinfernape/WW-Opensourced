__d("WAWebMediaHubNavBarItem.react", [
    "fbt",
    "WAWebIconButton.react",
    "WAWebMediaHubLogger",
    "WAWebMediaHubModalLoadable",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumEntryPointType",
    "WDSIconIcFilter.react",
    "WDSMenuBarItem.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        paddingInlineEnd9: {
            paddingInlineEnd: "xrw5ot4",
            $$css: true
        }
    };
    const d = {
        icon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(8);
        const { shouldShowText, size } = e;
        const i = shouldShowText === undefined ? false : shouldShowText;
        const l = size === undefined ? 24 : size;
        const m = p;
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Media");
            t[0] = _;
        } else {
            _ = t[0];
        }
        if (!i) {
            let g;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = r("WDSMenuBarItem.react");
                g = <Component icon={r("WDSIconIcFilter.react")} title={_} testid="navbar-item-media-hub" isActive={false} onClick={m} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
                t[1] = g;
            } else {
                g = t[1];
            }
            return g;
        }
        let h;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                d.icon,
                o("WDSPaddings.stylex").wdsPaddings.paddingEnd8
            ];
            t[2] = h;
        } else {
            h = t[2];
        }
        let y;
        if (t[3] !== l) {
            y = u.jsx(r("WDSIconIcFilter.react"), {
                width: l,
                height: l,
                xstyle: h
            });
            t[3] = l;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMutedRefreshed;
            C = <Component xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingTop2,
                c.paddingInlineEnd9
            ]}>{s._("All chats")}</Component>;
            t[5] = C;
        } else {
            C = t[5];
        }
        let b;
        if (t[6] !== y) {
            const Component = r("WAWebIconButton.react");
            b = <Component onClick={m} icon={y}>{C}</Component>;
            t[6] = y;
            t[7] = b;
        } else {
            b = t[7];
        }
        return b;
    }
    function p() {
        o("WAWebMediaHubLogger").logMediaHubAction({
            action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB,
            entrypoint: o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE.MAIN_SCREEN
        });
        o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMediaHubModalLoadable").MediaHubModalLoadable, {}));
    }
    l.default = m;
}, 226);