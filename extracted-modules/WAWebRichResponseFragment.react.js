__d("WAWebRichResponseFragment.react", [
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebRichResponseContentItemsCarouselFragment.react",
    "WAWebRichResponseTableFragment.react",
    "WAWebRichResponseTextFragment.react",
    "WAWebRichResponseUnknownFragment.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(13);
        const { fragment, msgKey, parseState } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getType
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const c = u[0];
        switch(fragment.type){
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Text:
                {
                    let d;
                    if (t[1] !== fragment || t[2] !== msgKey) {
                        d = s.jsx(r("WAWebRichResponseTextFragment.react"), {
                            fragment,
                            msgKey
                        });
                        t[1] = fragment;
                        t[2] = msgKey;
                        t[3] = d;
                    } else {
                        d = t[3];
                    }
                    return d;
                }
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown:
                {
                    let m;
                    if (t[4] !== fragment || t[5] !== parseState) {
                        m = s.jsx(r("WAWebRichResponseUnknownFragment.react"), {
                            fragment,
                            parseState
                        });
                        t[4] = fragment;
                        t[5] = parseState;
                        t[6] = m;
                    } else {
                        m = t[6];
                    }
                    return m;
                }
            case o("WAWebRichResponse.flow").RichResponseFragmentType.Table:
                {
                    let p;
                    if (t[7] !== fragment) {
                        p = s.jsx(r("WAWebRichResponseTableFragment.react"), {
                            fragment
                        });
                        t[7] = fragment;
                        t[8] = p;
                    } else {
                        p = t[8];
                    }
                    return p;
                }
            case o("WAWebRichResponse.flow").RichResponseFragmentType.ContentItems:
                {
                    let _;
                    if (t[9] !== fragment || t[10] !== msgKey || t[11] !== c) {
                        _ = c === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE ? s.jsx(r("WAWebRichResponseContentItemsCarouselFragment.react"), {
                            fragment,
                            msgKey
                        }) : null;
                        t[9] = fragment;
                        t[10] = msgKey;
                        t[11] = c;
                        t[12] = _;
                    } else {
                        _ = t[12];
                    }
                    return _;
                }
        }
        return null;
    }
    l.default = u;
}, 98);