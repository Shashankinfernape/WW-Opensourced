__d("WAWebVideoLinkPreviewContainer.react", [
    "WAWebFrontendMsgGetters",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaVideoLinkPreview.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { memo, useEffect } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(12);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getT,
                o("WAWebMsgGetters").getThumbnailHQ,
                o("WAWebFrontendMsgGetters").getAsUrl
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e.msg.id, a);
        const l = i[0];
        const u = i[1];
        const c = i[2];
        let m;
        let p;
        if (t[1] !== c || t[2] !== e_msg || t[3] !== l || t[4] !== u) {
            m = function() {
                const e = c;
                if (e && !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(l) && !u) {
                    r("WAWebMediaDownloadMmsThumbnail")({
                        chat: o("WAWebFrontendMsgGetters").getChat(e_msg),
                        msg: e,
                        isPreload: false
                    });
                }
            };
            p = [
                c,
                l,
                u,
                e_msg
            ];
            t[1] = c;
            t[2] = e_msg;
            t[3] = l;
            t[4] = u;
            t[5] = m;
            t[6] = p;
        } else {
            m = t[5];
            p = t[6];
        }
        useEffect(m, p);
        let _;
        if (t[7] !== e_msg) {
            _ = e_msg.unsafe();
            t[7] = e_msg;
            t[8] = _;
        } else {
            _ = t[8];
        }
        let f;
        if (t[9] !== e.onExternalLinkOpen || t[10] !== _) {
            const Component = r("WAWebMediaVideoLinkPreview.react");
            f = <Component msg={_} onExternalLinkOpen={e.onExternalLinkOpen}/>;
            t[9] = e.onExternalLinkOpen;
            t[10] = _;
            t[11] = f;
        } else {
            f = t[11];
        }
        return f;
    }
    const p = memo(m);
    l.default = p;
}, 98);