__d("WAWebProductCatalogSelectableProductItem.react", [
    "WAWebCheckboxSelectableWrapper.react",
    "WAWebMediaDataGetters",
    "WAWebMediaTypes",
    "WAWebNoop",
    "WAWebProductCatalogListItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const U1 = d;
    function c(e) {
        const n = o("react-compiler-runtime").c(3);
        const r = e.product.getPreviewImage()?.mediaData;
        if (!r) {
            return null;
        }
        let a;
        if (n[0] !== r || n[1] !== e) {
            a = <U1 {...babelHelpers.extends({
                mediaData: r
            }, e)}/>;
            n[0] = r;
            n[1] = e;
            n[2] = a;
        } else {
            a = n[2];
        }
        return a;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(14);
        const { active, onClick, product, selections } = e;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebMediaDataGetters").getMediaStage
            ];
            t[0] = u;
        } else {
            u = t[0];
        }
        const c = o("useWAWebMediaDataValues").useMediaDataValues(e.mediaData, u);
        const d = c[0];
        const m = d !== o("WAWebMediaTypes").MediaDataStage.RESOLVED;
        const p = m ? r("WAWebNoop") : onClick;
        let _;
        if (t[1] !== product.id) {
            _ = product.id.toString();
            t[1] = product.id;
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] !== active || t[4] !== m || t[5] !== p || t[6] !== product) {
            const Component = r("WAWebProductCatalogListItem.react");
            f = <Component product={product} onClick={p} active={active} checkbox disableOutOfStockAppearance isMuted={m}/>;
            t[3] = active;
            t[4] = m;
            t[5] = p;
            t[6] = product;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== m || t[9] !== product || t[10] !== selections || t[11] !== _ || t[12] !== f) {
            const Component = r("WAWebCheckboxSelectableWrapper.react");
            g = <Component key={_} model={product} selections={selections} disabled={m}>{f}</Component>;
            t[8] = m;
            t[9] = product;
            t[10] = selections;
            t[11] = _;
            t[12] = f;
            t[13] = g;
        } else {
            g = t[13];
        }
        return g;
    }
    l.default = c;
}, 98);