__d("WAWebLoadingMediaViewer.react", [
    "WAWebFbtCommon",
    "WAWebLazyLoadLoading.react",
    "WAWebMediaPanelHeader.styles",
    "WAWebMediaViewerModalStyle",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WDSIconIcClose.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        overlay: {
            boxSizing: "x9f619",
            height: "x5yr21d",
            left: "xu96u03",
            position: "xixxii4",
            top: "x13vifvy",
            width: "xh8yej3",
            $$css: true
        }
    };
    function d({ error }) {
        const icon = u.jsx(r("WDSIconIcClose.react"), {
            testid: "x-viewer",
            height: 24,
            width: 24
        });
        const i = function() {
            return o("WAWebModalManager").ModalManager.closeMedia();
        };
        const Component = o("WAWebMenuBar.react").MenuBarItem;
        const Component_1 = o("WAWebMenuBar.react").MenuBar;
        return <div><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.overlay, r("WAWebMediaViewerModalStyle").mediaViewer), {
            "data-animate-media-viewer": true,
            children: [
                <div {...babelHelpers.extends({}, e.props(r("WAWebMediaPanelHeader.styles").mediaPanelHeader), {
                    children: [
                        <div {...babelHelpers.extends({}, e.props(r("WAWebMediaPanelHeader.styles").info))}/>,
                        <div {...babelHelpers.extends({}, e.props(r("WAWebMediaPanelHeader.styles").mediaPanelTools), {
                            children: <Component_1 key="media-panel-header" theme="strong"><Component testid="btn-close" icon={icon} title={r("WAWebFbtCommon")("Close")} onClick={i}/></Component_1>
                        })}/>
                    ]
                })}/>,
                <div {...babelHelpers.extends({}, e.props(r("WAWebMediaViewerModalStyle").mediaContent), {
                    dir: "ltr",
                    onClick: i,
                    children: <div {...babelHelpers.extends({}, e.props(r("WAWebMediaViewerModalStyle").media), {
                        children: u.jsx(r("WAWebLazyLoadLoading.react"), {
                            error
                        })
                    })}/>
                })}/>
            ]
        })}/></div>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);