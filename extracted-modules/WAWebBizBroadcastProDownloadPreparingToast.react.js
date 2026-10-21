__d("WAWebBizBroadcastProDownloadPreparingToast.react", [
    "WAWebBizBroadcastProDownloadPreparingFileLabel",
    "WAWebFlex.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const size = 20;
    const c = {
        spinner: {
            color: "xowaa7l",
            $$css: true
        }
    };
    function DComponent({ completionPercentage }) {
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = r("WDSText.react");
        const Component_2 = o("WAWebFlex.react").FlexRow;
        return <div aria-busy data-testid="bb_pro_download_progress_card" className="xpip370 x1g83kfv x3qq2k7 x2x8art x1qor8vf xvktan5 x9f619 x193iq5w x16ec9ob x1xrf6ya xscbp6u xdx6fka xyo0t3i xeq5yr9"><Component_2 align="center" gap={8}><Component shrink={0}>{s.jsx(r("WDSSpinner.react"), {
            size,
            xstyle: c.spinner
        })}</Component><Component_1 colorName="contentInverse" testid="bb_pro_download_progress_title" type="Body2Emphasized">{r("WAWebBizBroadcastProDownloadPreparingFileLabel")(completionPercentage)}</Component_1></Component_2></div>;
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    l.default = DComponent;
}, 98);