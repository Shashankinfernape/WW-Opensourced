__d("BaseAspectRatioContainer.react", [
    "FBLogger",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(12);
        const { aspectRatio, children, contentStyle, testid, xstyle } = e;
        if (aspectRatio <= 0) {
            throw r("FBLogger")("comet_ui").mustfixThrow("Aspect ratio must be a non-zero, positive number: %s", aspectRatio);
        }
        let c;
        if (t[0] !== aspectRatio) {
            c = d.dynamicTop(aspectRatio);
            t[0] = aspectRatio;
            t[1] = c;
        } else {
            c = t[1];
        }
        let m;
        if (t[2] !== c || t[3] !== xstyle) {
            m = [
                d.container,
                xstyle,
                c
            ];
            t[2] = c;
            t[3] = xstyle;
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] !== children || t[6] !== contentStyle) {
            const Component = o("react-strict-dom").html.div;
            p = children != null && <Component style={[
                d.content,
                contentStyle
            ]}>{children}</Component>;
            t[5] = children;
            t[6] = contentStyle;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== m || t[9] !== p || t[10] !== testid) {
            const Component = o("react-strict-dom").html.div;
            _ = <Component data-testid={undefined} style={m}>{p}</Component>;
            t[8] = m;
            t[9] = p;
            t[10] = testid;
            t[11] = _;
        } else {
            _ = t[11];
        }
        return _;
    }
    const c = {
        paddingTop: "x1jm3axb",
        $$css: true
    };
    var d = {
        container: {
            height: "xqtp20y",
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        },
        content: {
            alignItems: "x1qjc9v5",
            borderBottomStyle: "x1q0q8m5",
            borderBottomWidth: "x1qhh985",
            borderInlineEndStyle: "x18b5jzi",
            borderInlineEndWidth: "x10w94by",
            borderInlineStartStyle: "x1t7ytsu",
            borderInlineStartWidth: "x14e42zd",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x972fbf",
            bottom: "x1ey2m1c",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            insetInlineEnd: "xtijo5x",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            justifyContent: "x1qughib",
            marginBottom: "xat24cr",
            marginInlineEnd: "x14z9mp",
            marginInlineStart: "x1lziwak",
            marginTop: "xdj266r",
            minHeight: "x2lwn1j",
            minWidth: "xeuugli",
            paddingBottom: "x18d9i69",
            paddingInlineEnd: "xyri2b",
            paddingInlineStart: "x1c1uobl",
            paddingTop: "xexx8yu",
            position: "x10l6tqk",
            top: "x13vifvy",
            zIndex: "x1ja2u2z",
            $$css: true
        },
        dynamicTop: function(t) {
            return [
                c,
                {
                    "--x-paddingTop": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${100 / t}%`)
                }
            ];
        }
    };
    l.default = UComponent;
}, 98);