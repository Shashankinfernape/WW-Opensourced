__d("WAWebProfileImage.react", [
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebReleaseToEventLoop",
    "WDSIconIcPersonFilled.react",
    "react",
    "stylex",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useState } = c;
    const p = {
        containerSize: function(t) {
            return [
                {
                    width: t != null ? "x5lhr3w" : t,
                    height: t != null ? "x16ye13r" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        default: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        icon: {
            flex: "x3psx0u",
            $$css: true
        },
        iconColor: {
            color: "xhslqc4",
            $$css: true
        },
        circleIconRefreshed: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        iconOutlineRefreshed: {
            outline: "x4u6w88",
            outlineOffset: "x1g40iwv",
            $$css: true
        },
        image: {
            objectFit: "xl1xv1r",
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        },
        container: {
            position: "x1n2onr6",
            zIndex: "x11uqc5h",
            display: "x1rg5ohu",
            flex: "x1okw0bk",
            width: "xh8yej3",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        hasBorder: {
            borderTopWidth: "xamhcws",
            borderInlineEndWidth: "x1alpsbp",
            borderBottomWidth: "xlxy82",
            borderInlineStartWidth: "xyumdvf",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x16jw5py",
            borderInlineEndColor: "x13dr7gu",
            borderBottomColor: "xd9srri",
            borderInlineStartColor: "x1ia0k5z",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        hasInnerBorder: {
            "::before_position": "x1hmns74",
            "::before_top": "x1y3wzot",
            "::before_insetInlineEnd": "xtyp5od",
            "::before_bottom": "xhq5o37",
            "::before_insetInlineStart": "x1682cnc",
            "::before_left": null,
            "::before_right": null,
            "::before_content": "x1cpjm7i",
            "::before_borderStartStartRadius": "xn4w8fp",
            "::before_borderStartEndRadius": "x17issv1",
            "::before_borderEndEndRadius": "xxslzl9",
            "::before_borderEndStartRadius": "xwjlxly",
            "::before_transition": "xm9zcnd",
            "::before_borderTopWidth": "xw0xpw4",
            "::before_borderInlineEndWidth": "xq6t1ow",
            "::before_borderBottomWidth": "x1ea1ikp",
            "::before_borderInlineStartWidth": "x1lcsdb1",
            "::before_borderTopStyle": "xnvurfn",
            "::before_borderInlineEndStyle": "x1v3rft4",
            "::before_borderBottomStyle": "x1opv7go",
            "::before_borderInlineStartStyle": "x1rovbrg",
            "::before_borderTopColor": "x8hm4yl",
            "::before_borderInlineEndColor": "x1aaveat",
            "::before_borderBottomColor": "xrphwa6",
            "::before_borderInlineStartColor": "x1wildu8",
            $$css: true
        },
        hasLargeInnerBorder: {
            "::before_position": "x1hmns74",
            "::before_top": "x1y3wzot",
            "::before_insetInlineEnd": "xtyp5od",
            "::before_bottom": "xhq5o37",
            "::before_insetInlineStart": "x1682cnc",
            "::before_left": null,
            "::before_right": null,
            "::before_content": "x1cpjm7i",
            "::before_borderStartStartRadius": "xn4w8fp",
            "::before_borderStartEndRadius": "x17issv1",
            "::before_borderEndEndRadius": "xxslzl9",
            "::before_borderEndStartRadius": "xwjlxly",
            "::before_transition": "xm9zcnd",
            "::before_borderTopWidth": "xm4vf9w",
            "::before_borderInlineEndWidth": "x1ggjbpq",
            "::before_borderBottomWidth": "xu20p9z",
            "::before_borderInlineStartWidth": "x1t6kmxa",
            "::before_borderTopStyle": "xnvurfn",
            "::before_borderInlineEndStyle": "x1v3rft4",
            "::before_borderBottomStyle": "x1opv7go",
            "::before_borderInlineStartStyle": "x1rovbrg",
            "::before_borderTopColor": "x8hm4yl",
            "::before_borderInlineEndColor": "x1aaveat",
            "::before_borderBottomColor": "xrphwa6",
            "::before_borderInlineStartColor": "x1wildu8",
            $$css: true
        },
        dimmed: {
            "::before_position": "x1hmns74",
            "::before_top": "x1y3wzot",
            "::before_insetInlineEnd": "xtyp5od",
            "::before_bottom": "xhq5o37",
            "::before_insetInlineStart": "x1682cnc",
            "::before_left": null,
            "::before_right": null,
            "::before_content": "x1cpjm7i",
            "::before_borderStartStartRadius": "xn4w8fp",
            "::before_borderStartEndRadius": "x17issv1",
            "::before_borderEndEndRadius": "xxslzl9",
            "::before_borderEndStartRadius": "xwjlxly",
            "::before_transition": "xm9zcnd",
            "::before_backgroundColor": "x1x8b9cq",
            $$css: true
        },
        square: {
            borderStartStartRadius: "x15mokao",
            borderStartEndRadius: "x1ga7v0g",
            borderEndEndRadius: "x16uus16",
            borderEndStartRadius: "xbiv7yw",
            "::before_borderStartStartRadius": "xnh6gb5",
            "::before_borderStartEndRadius": "xi0d610",
            "::before_borderEndEndRadius": "xjd5t2z",
            "::before_borderEndStartRadius": "x1xd7p0v",
            $$css: true
        },
        rowOrCol: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        },
        rowColChildBase: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1t1x2f9",
            width: "xh8yej3",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        rowChild: {
            marginTop: "xdj266r",
            marginInlineEnd: "xnnr8r",
            marginBottom: "xat24cr",
            marginInlineStart: "xwklpps",
            $$css: true
        },
        rowChildFirst: {
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        rowChildLast: {
            marginInlineEnd: "x14z9mp",
            $$css: true
        },
        colChild: {
            marginTop: "xr9ek0c",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xjpr12u",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        colChildFirst: {
            marginTop: "xdj266r",
            $$css: true
        },
        colChildLast: {
            marginBottom: "xat24cr",
            $$css: true
        }
    };
    function _(t) {
        const { theme, wid } = t;
        const i = useState(null);
        const l = i[0];
        const s = i[1];
        const c = useState(null);
        const _ = c[0];
        const f = c[1];
        const g = function(t) {
            s(o("WAWebProfilePicThumbGetters").getMaybeImg(t));
        };
        useEffect(function() {
            if (wid) {
                let e = false;
                o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(wid).then((e)=>o("WAWebReleaseToEventLoop").releaseToEventLoop().then(()=>e)).then((t)=>{
                    if (!e) {
                        f(t);
                        g(t);
                    }
                }).catch(r("WAWebNoop"));
                return function() {
                    e = true;
                };
            }
        }, []);
        o("useWAWebListener").useListener(_, o("WAWebProfilePicThumbGetters").IMG_ROOT_CHANGE_EVENTS, g);
        if (wid != null && (l != null || wid != null && wid.isNewsletter())) {
            return u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: wid,
                quoted: t.quoted,
                size: t.size,
                shape: t.shape,
                border: t.border,
                quality: t.quality
            });
        }
        let h;
        if (typeof t.size === "number" && t.size !== 0 || typeof t.size !== "number" && t.size != null) {
            h = t.size;
        } else {
            h = o("WAWebDetailImage.react").DetailImageSize.Small;
        }
        const y = theme === "voip" || theme === "voip-dimmed";
        const C = theme === "voip-large" || theme === "voip-large-dimmed";
        const b = theme === "voip-dimmed" || theme === "voip-large-dimmed";
        const v = o("WAWebDetailImage.react").getSize(h) || undefined;
        const S = t.thumbs ? t.thumbs : [
            t.thumb
        ];
        const S_length = S.length;
        const L = S.map((n, a)=>{
            const i = S_length === 2 || S_length >= 3 && a === 0;
            const l = S_length >= 3 && a >= 1;
            const s = a === 0 || S_length >= 3 && a === 1;
            const c = S_length === 2 && a === 1 || S_length >= 3 && a === 2;
            const d = [
                (i || l) && p.rowColChildBase,
                i && p.rowChild,
                l && p.colChild,
                i && s && p.rowChildFirst,
                i && c && p.rowChildLast,
                l && s && p.colChildFirst,
                l && c && p.colChildLast
            ];
            if (n != null && n !== "") {
                return <img {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, [
                    p.image,
                    ...d
                ]), {
                    src: n,
                    key: a,
                    alt: ""
                })}/>;
            }
            const m = v && v / (S.length > 2 && a > 0 ? 2 : 1);
            const _ = {
                width: m,
                height: m,
                xstyle: p.icon
            };
            const f = u.jsx(r("WDSIconIcPersonFilled.react"), babelHelpers.extends({}, _, {
                iconXstyle: [
                    p.iconColor,
                    t.quoted !== true && p.circleIconRefreshed,
                    t.quoted !== true && p.iconOutlineRefreshed
                ],
                testid: "default-contact-refreshed",
                viewBox: {
                    height: 40,
                    width: 40,
                    x: -8,
                    y: -8
                }
            }));
            const Component = o("WAWebFlex.react").FlexRow;
            return <Component key={a} xstyle={[
                p.default,
                ...d
            ]} justify="center" align="center">{f}</Component>;
        });
        let E;
        if (L.length === 1) {
            E = L[0];
        } else if (L.length === 2) {
            const Component = o("WAWebFlex.react").FlexRow;
            E = <Component xstyle={p.rowOrCol} justify="stretch" align="stretch">{L[0]}{L[1]}</Component>;
        } else {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            E = <Component_1 xstyle={p.rowOrCol} justify="stretch" align="stretch">{L[0]}<Component xstyle={[
                p.rowOrCol,
                p.rowColChildBase,
                p.rowChild,
                p.rowChildLast
            ]} justify="stretch" align="stretch">{L[1]}{L[2]}</Component></Component_1>;
        }
        const Component = o("WAWebFlex.react").FlexRow;
        return <Component xstyle={[
            p.container,
            t.border === true && p.hasBorder,
            y && p.hasInnerBorder,
            C && p.hasLargeInnerBorder,
            b && p.dimmed,
            t.shape === o("WAWebDetailImage.react").DetailImageShape.Square && p.square,
            v != null && p.containerSize(v)
        ]} isFlexContainer={false}>{E}</Component>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 98);