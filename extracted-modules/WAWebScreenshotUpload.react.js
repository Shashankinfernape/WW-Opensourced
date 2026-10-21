__d("WAWebScreenshotUpload.react", [
    "fbt",
    "WAWebBugnubScreenshotUploadLoadable.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { customCloseMediaModal, customOpenMediaModal, customOpenSupportModal, mediaState, onChangeState, onUploadStateChange } = e;
        let m;
        if (t[0] !== onChangeState || t[1] !== onUploadStateChange) {
            m = function(t) {
                onChangeState(t);
                onUploadStateChange?.(t.state === "uploading");
            };
            t[0] = onChangeState;
            t[1] = onUploadStateChange;
            t[2] = m;
        } else {
            m = t[2];
        }
        const onChangeState_1 = m;
        let _;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexItem;
            _ = <Component_1 marginTop={20}><Component type="Body2" colorName="contentDefault">{s._("Screenshots or recordings (optional)")}</Component></Component_1>;
            t[3] = _;
        } else {
            _ = t[3];
        }
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            f = <Component type="Body3" colorName="contentDeemphasized">{s._("Choose up to 3 files")}</Component>;
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] !== customCloseMediaModal || t[6] !== customOpenMediaModal || t[7] !== customOpenSupportModal || t[8] !== onChangeState_1 || t[9] !== mediaState) {
            const Component = o("WAWebBugnubScreenshotUploadLoadable.react").WAWebBugnubScreenshotUploadLoadable;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexItem;
            g = <Component_2>{_}{f}<Component_1 justify="all" marginTop={8}><Component mediaState={mediaState} onChangeState={onChangeState_1} customOpenSupportModal={customOpenSupportModal} customOpenMediaModal={customOpenMediaModal} customCloseMediaModal={customCloseMediaModal}/></Component_1></Component_2>;
            t[5] = customCloseMediaModal;
            t[6] = customOpenMediaModal;
            t[7] = customOpenSupportModal;
            t[8] = onChangeState_1;
            t[9] = mediaState;
            t[10] = g;
        } else {
            g = t[10];
        }
        return g;
    }
    l.WAWebScreenshotUpload = c;
}, 226);