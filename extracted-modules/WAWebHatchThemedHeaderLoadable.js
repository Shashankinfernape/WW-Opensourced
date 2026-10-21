__d("WAWebHatchThemedHeaderLoadable", [
    "JSResourceForInteraction",
    "WAWebHatchFrontendGating",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 164;
    const c = 130;
    const d = 16;
    const m = 12;
    const p = {
        blockSize: {
            height: "xa0zjtf",
            $$css: true
        }
    };
    function _(e) {
        if (o("WAWebHatchFrontendGating").isHatchThemeEnabled(e)) {
            return u;
        }
        return 0;
    }
    function f(e) {
        const t = e ? d : 0;
        return c + t + m;
    }
    const g = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebHatchThemedHeader.react").__setRef("WAWebHatchThemedHeaderLoadable").load();
    }, "WAWebHatchThemedHeaderLoadable");
    const h = r("WAWebLoadable")({
        loader: g,
        loading: function(t) {
            if (t.error != null) {
                throw t.error;
            }
            return <></>;
        },
        renderLoadingImmediately: true
    });
    l.hatchThemedHeaderSize = p;
    l.getHatchThemedHeaderInset = _;
    l.getHatchThemedStickyDateTop = f;
    l.WAWebHatchThemedHeaderLoadable = h;
}, 98);