__d("WAWebOpenHatchSpace", [
    "fbt",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchSpaceViewerDrawerLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function CComponent(e, t = o("WAWebDrawerManager").closeDrawerRight) {
        if (e.kind === "url") {
            o("WAWebExternalLink.react").openExternalLink(e.url, {
                noApiCmdHandling: true
            });
        } else if (e.kind === "host" && o("WAWebHatchFrontendGating").isHatchSpaceEnabled()) {
            const Component = o("WAWebHatchSpaceViewerDrawerLoadable").WAWebHatchSpaceViewerDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component onBack={t} onClose={o("WAWebDrawerManager").closeDrawerRight} slug={e.slug} title={e.title}/>);
        } else if (e.kind !== "none") {
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Can't open this yet")
            }));
        }
    }
    l.openHatchSpace = CComponent;
}, 226);