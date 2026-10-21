__d("WAWebPipCloseButton.react", [
    "WAWebFbtCommon",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        closeBtn: {
            position: "x10l6tqk",
            top: "xfr5jun",
            insetInlineEnd: "x9q68il",
            left: null,
            right: null,
            zIndex: "x11uqc5h",
            cursor: "x1ypdohk",
            $$css: true
        },
        closeBtnNew: {
            top: "x1atx4j1",
            insetInlineEnd: "x1f889gz",
            left: null,
            right: null,
            $$css: true
        },
        static: {
            position: "x1uhb9sk",
            $$css: true
        },
        fullscreen: {
            top: "xuivejd",
            insetInlineEnd: "x2ss2xj",
            left: null,
            right: null,
            $$css: true
        }
    };
    function c({ isFullscreenMode, isStatic, onClick, ref }) {
        const Component = r("WDSButton.react");
        return <Component ref={ref} variant="borderless" type="media" size="medium" xstyle={[
            u.closeBtn,
            isFullscreenMode && u.fullscreen,
            u.closeBtnNew,
            isStatic && u.static
        ]} onPress={onClick} aria-label={r("WAWebFbtCommon")("Close")} Icon={r("WDSIconIcClose.react")} testid="video-x"/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);