__d("WAWebCommunitySubgroupImage.react", [
    "WAWebDetailImage.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebActiveSelection"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            position: "x1n2onr6",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            $$css: true
        },
        subgroupImage: {
            position: "x10l6tqk",
            $$css: true
        },
        borderWhite: {
            borderTopWidth: "xmn4e3e",
            borderInlineEndWidth: "x1if355w",
            borderBottomWidth: "x2x41l1",
            borderInlineStartWidth: "xct1zlm",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1y9zq84",
            borderInlineEndColor: "xt9xd2u",
            borderBottomColor: "x3tsejo",
            borderInlineStartColor: "x1ahzpo1",
            $$css: true
        },
        borderWhiteActive: {
            borderTopWidth: "xmn4e3e",
            borderInlineEndWidth: "x1if355w",
            borderBottomWidth: "x2x41l1",
            borderInlineStartWidth: "xct1zlm",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xif0l9a",
            borderInlineEndColor: "x1gsefj9",
            borderBottomColor: "x6hs5rg",
            borderInlineStartColor: "x1gy22y6",
            $$css: true
        },
        borderWhiteHover: {
            borderTopWidth: "xmn4e3e",
            borderInlineEndWidth: "x1if355w",
            borderBottomWidth: "x2x41l1",
            borderInlineStartWidth: "xct1zlm",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1y55ic2",
            borderInlineEndColor: "x1urg34u",
            borderBottomColor: "xee4sfp",
            borderInlineStartColor: "x1xm068e",
            $$css: true
        }
    };
    const d = {
        container: {
            width: "x15jighw",
            height: "x112a4uq",
            $$css: true
        },
        subgroupImage: {
            insetInlineStart: "x9p6ekw",
            left: null,
            right: null,
            top: "xuivejd",
            $$css: true
        }
    };
    const m = {
        container: {
            width: "x1useyqa",
            height: "xsdox4t",
            $$css: true
        },
        subgroupImage: {
            insetInlineStart: "x9p6ekw",
            left: null,
            right: null,
            top: "xuivejd",
            $$css: true
        }
    };
    const p = {
        container: {
            width: "xvy4d1p",
            height: "xxk0z11",
            $$css: true
        },
        subgroupImage: {
            insetInlineStart: "xrotz4w",
            left: null,
            right: null,
            top: "xfr5jun",
            $$css: true
        }
    };
    const _ = {
        container: {
            width: "x187nhsf",
            height: "xn3w4p2",
            $$css: true
        },
        subgroupImage: {
            insetInlineStart: "x1r4y97",
            left: null,
            right: null,
            top: "x1tk7jg1",
            $$css: true
        }
    };
    const f = {
        container: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        subgroupImage: {
            insetInlineStart: "x1r4y97",
            left: null,
            right: null,
            top: "x1tk7jg1",
            $$css: true
        }
    };
    const g = {
        container: {
            width: "x1guw455",
            height: "x16wdlz0",
            $$css: true
        },
        subgroupImage: {
            insetInlineStart: "x1r4y97",
            left: null,
            right: null,
            top: "x1tk7jg1",
            $$css: true
        }
    };
    function HComponent(t) {
        const n = o("react-compiler-runtime").c(26);
        const { chatId, isHovered, loadPicture, parentGroupChatId, selection, size } = t;
        let b;
        if (n[0] !== chatId) {
            b = chatId.toString();
            n[0] = chatId;
            n[1] = b;
        } else {
            b = n[1];
        }
        const v = r("useWAWebActiveSelection")(selection, b);
        const S = v[1];
        let R;
        let L;
        e: switch(size){
            case 24:
                {
                    R = 16;
                    L = p;
                    break e;
                }
            case 38:
                {
                    R = 26;
                    L = g;
                    break e;
                }
            case 40:
                {
                    R = 26;
                    L = f;
                    break e;
                }
            case 44:
                {
                    R = 28;
                    L = _;
                    break e;
                }
            case 48:
                {
                    R = 30;
                    L = m;
                    break e;
                }
            case 49:
            default:
                R = 31;
                L = d;
        }
        let E;
        if (n[2] !== L.container) {
            E = (e || (e = r("stylex"))).props([
                c.container,
                L.container
            ]);
            n[2] = L.container;
            n[3] = E;
        } else {
            E = n[3];
        }
        let k;
        if (n[4] !== R || n[5] !== loadPicture || n[6] !== parentGroupChatId) {
            k = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
                id: parentGroupChatId,
                loadPicture,
                size: R
            });
            n[4] = R;
            n[5] = loadPicture;
            n[6] = parentGroupChatId;
            n[7] = k;
        } else {
            k = n[7];
        }
        let I;
        if (n[8] !== L.subgroupImage) {
            I = (e || (e = r("stylex"))).props(c.subgroupImage, L.subgroupImage);
            n[8] = L.subgroupImage;
            n[9] = I;
        } else {
            I = n[9];
        }
        const T = R;
        const isHoveredOrActive = S || isHovered === true;
        const x = isHovered === true;
        let $;
        if (n[10] !== S || n[11] !== x) {
            $ = y(S, x);
            n[10] = S;
            n[11] = x;
            n[12] = $;
        } else {
            $ = n[12];
        }
        let P;
        if (n[13] !== chatId || n[14] !== R || n[15] !== loadPicture || n[16] !== isHoveredOrActive || n[17] !== $) {
            P = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: chatId,
                loadPicture,
                size: T,
                ephemeralIcon: "chat-list",
                isHoveredOrActive,
                xstyle: $
            });
            n[13] = chatId;
            n[14] = R;
            n[15] = loadPicture;
            n[16] = isHoveredOrActive;
            n[17] = $;
            n[18] = P;
        } else {
            P = n[18];
        }
        let N;
        if (n[19] !== I || n[20] !== P) {
            N = <div {...babelHelpers.extends({}, I, {
                children: P
            })}/>;
            n[19] = I;
            n[20] = P;
            n[21] = N;
        } else {
            N = n[21];
        }
        let M;
        if (n[22] !== E || n[23] !== k || n[24] !== N) {
            M = <div {...babelHelpers.extends({
                "data-testid": "subgroup-identity"
            }, E, {
                children: [
                    k,
                    N
                ]
            })}/>;
            n[22] = E;
            n[23] = k;
            n[24] = N;
            n[25] = M;
        } else {
            M = n[25];
        }
        return M;
    }
    function y(e, t) {
        if (e) {
            return c.borderWhiteActive;
        }
        if (t) {
            return c.borderWhiteHover;
        }
        return c.borderWhite;
    }
    l.default = HComponent;
}, 98);