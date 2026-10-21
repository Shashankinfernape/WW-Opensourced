__d("WAWebMessageEditLinkPreviewPanel.react", [
    "WAWebFlex.react",
    "WAWebMediaLinkPreview.react",
    "WAWebUimUie.react",
    "WDSIconIcClose.react",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebDebouncedCallback",
    "useWAWebLinkPreview",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useImperativeHandle, useRef, useState } = u;
    const _ = 83;
    const f = 16;
    const g = _ + f;
    const h = {
        container: {
            paddingTop: "xyamay9",
            paddingInlineEnd: "x64bnmy",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x13jy36j",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        linkPreview: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            $$css: true
        }
    };
    function Y8Component(e) {
        const t = o("react-compiler-runtime").c(15);
        const { linkPreview, onOmit, ref } = e;
        const lRef = useRef();
        const u = r("useWAWebStaticButtonA11y")(onOmit);
        const c = u[0];
        const p = u[1];
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function() {
                return {
                    getElement: function() {
                        return lRef.current;
                    }
                };
            };
            t[0] = _;
        } else {
            _ = t[0];
        }
        useImperativeHandle(ref, _);
        const { description, inviteGrpType, matchedText, thumbnail, title } = linkPreview;
        let v;
        if (t[1] !== description || t[2] !== inviteGrpType || t[3] !== matchedText || t[4] !== thumbnail || t[5] !== title) {
            v = s.jsx(r("WAWebMediaLinkPreview.react"), {
                title,
                matchedText,
                description,
                thumbnailJpeg: thumbnail,
                inviteGrpType,
                containerXstyle: h.linkPreview,
                compose: true,
                isLoading: false
            });
            t[1] = description;
            t[2] = inviteGrpType;
            t[3] = matchedText;
            t[4] = thumbnail;
            t[5] = title;
            t[6] = v;
        } else {
            v = t[6];
        }
        let S;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = "x78zum5 x6s0dn4 xl56j7k x1guw455 x16wdlz0 xefazk8 x2lah0s";
            t[7] = S;
        } else {
            S = t[7];
        }
        let R;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            R = s.jsx(r("WDSIconIcClose.react"), {});
            t[8] = R;
        } else {
            R = t[8];
        }
        let L;
        if (t[9] !== p || t[10] !== c) {
            L = <div {...babelHelpers.extends({
                ref: c,
                className: S
            }, p, {
                children: R
            })}/>;
            t[9] = p;
            t[10] = c;
            t[11] = L;
        } else {
            L = t[11];
        }
        let E;
        if (t[12] !== v || t[13] !== L) {
            const Component = o("WAWebFlex.react").FlexRow;
            E = <Component ref={lRef} xstyle={h.container} align="center">{v}{L}</Component>;
            t[12] = v;
            t[13] = L;
            t[14] = E;
        } else {
            E = t[14];
        }
        return E;
    }
    const C = "x1pf78ng-B";
    const b = "x15cgrjh-B";
    function v({ chat, initialLinkPreview, onChange, text }) {
        const m = r("useLazyRef")(function() {
            return o("useWAWebLinkPreview").findFirstWebLink(text);
        });
        const _ = r("useLazyRef")(function() {
            if (initialLinkPreview) {
                return null;
            }
            return m.current?.href;
        });
        const f = useState(m.current);
        const g = f[0];
        const h = f[1];
        const C = o("useWAWebLinkPreview").useLinkPreview(g, chat);
        const C_linkPreview = C.linkPreview;
        const v = m.current?.href !== g?.href;
        const S = useState();
        const linkPreview = S[0];
        const L = S[1];
        let E = m.current?.href === g?.href && initialLinkPreview ? initialLinkPreview : C_linkPreview;
        if (_.current === E?.matchedText) {
            E = null;
        }
        if (E && E !== linkPreview) {
            L(E);
        }
        const k = r("useWAWebDebouncedCallback")(function(e) {
            const t = o("useWAWebLinkPreview").findFirstWebLink(e);
            if (t?.href !== _.current) {
                _.current = null;
                h(t);
            }
        }, 200);
        useEffect(function() {
            k(text);
        }, [
            text,
            k
        ]);
        useEffect(function() {
            onChange(E);
        }, [
            v,
            E,
            onChange
        ]);
        const I = function() {
            _.current = g?.href;
            h(null);
        };
        const T = !!E;
        const D = !g || g.url !== linkPreview?.matchedText;
        const x = function() {
            L(null);
        };
        const Component = o("WAWebUimUie.react").UIE;
        return <div className="x10l6tqk x1o0tod xtijo5x x13vifvy"><div {...babelHelpers.extends({}, {
            0: {
                className: "xw8ag78 x10e4vud"
            },
            2: {
                className: "xw8ag78 x10e4vud x1rteybo"
            },
            1: {
                className: "xw8ag78 x10e4vud x1im1gyf"
            },
            3: {
                className: "xw8ag78 x10e4vud x1im1gyf"
            }
        }[!!T << 1 | !!D << 0], {
            onAnimationEnd: D ? x : null,
            children: linkPreview && <Component displayName="ComposeBoxLinkPreview" escapable requestDismiss={I}><Y8Component linkPreview={linkPreview} onOmit={I}/></Component>
        })}/></div>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    l.default = v;
}, 98);