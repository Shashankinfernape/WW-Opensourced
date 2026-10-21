__d("WAWebRenderDocumentPreviewIcon.react", [
    "WAWebFrontendMsgGetters",
    "WDSIconIcDescription.react",
    "WDSIconIcPerson.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msg.id, a);
        const l = i[0];
        const u = l?.parsedVcards;
        if (u) {
            let c;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                c = s.jsx(r("WDSIconIcPerson.react"), {
                    height: 20,
                    width: 20,
                    testid: "person-refreshed-outline-thin"
                });
                t[1] = c;
            } else {
                c = t[1];
            }
            return c;
        }
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s.jsx(r("WDSIconIcDescription.react"), {
                height: 20,
                width: 20,
                testid: "ic-description"
            });
            t[2] = d;
        } else {
            d = t[2];
        }
        return d;
    }
    l.default = u;
}, 98);