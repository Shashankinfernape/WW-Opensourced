__d("WAWebBizBroadcastProSubtitleLoadable", [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAudienceStatusProvider.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebChatSubtitleText.react",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext, useContext } = u;
    const MContext = createContext(0);
    const p = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebBizBroadcastProSubtitle.react").__setRef("WAWebBizBroadcastProSubtitleLoadable").load();
    }), "BizBroadcastProSubtitle");
    const _ = r("react-loadable")({
        delay: 0,
        loader: p,
        loading: function() {
            return <G1Component/>;
        }
    });
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(8);
        const { audienceId, fallbackRecipientCount } = e;
        const i = fallbackRecipientCount === undefined ? 0 : fallbackRecipientCount;
        let l;
        if (t[0] !== i) {
            l = <_ fallbackRecipientCount={i}/>;
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        let u;
        if (t[2] !== i || t[3] !== l) {
            u = <MContext.Provider value={i}>{l}</MContext.Provider>;
            t[2] = i;
            t[3] = l;
            t[4] = u;
        } else {
            u = t[4];
        }
        let c;
        if (t[5] !== audienceId || t[6] !== u) {
            const Component = r("WAWebBizBroadcastProAudienceStatusProvider.react");
            c = <Component audienceId={audienceId}>{u}</Component>;
            t[5] = audienceId;
            t[6] = u;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function G1Component() {
        const e = o("react-compiler-runtime").c(2);
        const t = useContext(MContext);
        let n;
        if (e[0] !== t) {
            n = t > 0 ? s.jsx(r("WAWebChatSubtitleText.react"), {
                location: "title",
                text: o("WAWebBizBroadcastsCreationStrings").getAudienceRecipientCountLabel(t)
            }) : <></>;
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.WAWebBizBroadcastProSubtitleLoadable = FComponent;
}, 98);