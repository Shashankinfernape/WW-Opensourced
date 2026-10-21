__d("WAWebBizCatalogPreviewContainer.react", [
    "WAWebExternalLink.react",
    "WAWebMediaLinkPreview.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let i;
            a = [
                (i = o("WAWebMsgGetters")).getThumbnail,
                i.getTitle,
                i.getDescription,
                i.getMatchedText,
                i.getIsSentByMe,
                i.getStar,
                i.getIsKept
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e_msg.id, a);
        const thumbnailJpeg = l[0];
        const c = l[1];
        const d = l[2];
        const m = l[3];
        const p = l[4];
        const star = l[5];
        const kept = l[6];
        let g;
        if (t[1] !== m) {
            g = function() {
                const e = m;
                o("WAWebExternalLink.react").openExternalLink(e);
            };
            t[1] = m;
            t[2] = g;
        } else {
            g = t[2];
        }
        const h = g;
        let y;
        if (t[3] !== d || t[4] !== h || t[5] !== kept || t[6] !== p || t[7] !== star || t[8] !== thumbnailJpeg || t[9] !== c) {
            const Component = r("WAWebMediaLinkPreview.react");
            y = <Component title={c} description={d} thumbnailJpeg={thumbnailJpeg} onClick={h} isSentByMe={p} star={star} kept={kept} isLoading={false}/>;
            t[3] = d;
            t[4] = h;
            t[5] = kept;
            t[6] = p;
            t[7] = star;
            t[8] = thumbnailJpeg;
            t[9] = c;
            t[10] = y;
        } else {
            y = t[10];
        }
        return y;
    }
    l.default = u;
}, 98);