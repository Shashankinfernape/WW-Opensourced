__d("WAWebAddFavoriteButton.react", [
    "fbt",
    "WAWebAddToFavoritesModalLoadable",
    "WAWebCallUserJourneyCallsTabAction",
    "WAWebCallUserJourneyLogger",
    "WAWebCellV2.react",
    "WAWebModalManager",
    "WAWebPreCallUserJourneyLogger",
    "WAWebRoundShape.react",
    "WAWebText.react",
    "WDSIconIcPersonAddFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_ref = e.ref;
        const a = d;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebRoundShape.react");
            i = <Component theme="compact">{u.jsx(r("WDSIconIcPersonAddFilled.react"), {
                directional: true
            })}</Component>;
            t[0] = i;
        } else {
            i = t[0];
        }
        const detailLeft = i;
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Add favourite");
            t[1] = c;
        } else {
            c = t[1];
        }
        const m = c;
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Add favorite");
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitleRefreshed;
            f = <Component>{m}</Component>;
            t[3] = f;
        } else {
            f = t[3];
        }
        let g;
        if (t[4] !== e_ref) {
            const Component = r("WAWebCellV2.react");
            g = <div role="gridcell"><Component ref={e_ref} testid="add-favorite" detailLeft={detailLeft} primary={f} onClick={a} ariaLabel={_} size="medium" isRefresh/></div>;
            t[4] = e_ref;
            t[5] = g;
        } else {
            g = t[5];
        }
        return g;
    }
    function d() {
        new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger().tapFavoritesAdd();
        o("WAWebCallUserJourneyCallsTabAction").logCallsTabCallAction(o("WAWebCallUserJourneyLogger").OUT_OF_CALL_ACTION_TYPE.TAP_FAVORITES_ADD);
        const Component = o("WAWebAddToFavoritesModalLoadable").AddToFavoritesModalLoadable;
        o("WAWebModalManager").ModalManager.open(<Component isFromCallsTab onClose={o("WAWebModalManager").closeModalManager}/>);
    }
    l.default = c;
}, 226);