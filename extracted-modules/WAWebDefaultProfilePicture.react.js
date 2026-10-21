__d("WAWebDefaultProfilePicture.react", [
    "WAWebShapeIcon.react",
    "WDSIconIcGroup.react",
    "WDSIconIcGroupAddFilled.react",
    "WDSIconIcPersonAddFilled.react",
    "WDSIconIcPersonFilled.react",
    "WDSIconWdsIcBroadcastMessageFill.react",
    "WDSIconWdsIcCommunitiesFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        defaultBackgroundStyle: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        defaultForegroundStyle: {
            color: "xhslqc4",
            $$css: true
        },
        oneOneIconStyles: {
            width: "xg0jo4d",
            height: "xuv0xuj",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(14);
        const { backgroundStyles, directional, foregroundStyles, shape, size, type } = e;
        const shape_1 = shape === undefined ? "circle" : shape;
        let p = r("WDSIconIcGroup.react");
        let _;
        let f;
        e: switch(type){
            case "1-1":
                {
                    p = r("WDSIconIcPersonFilled.react");
                    let g;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        g = {
                            align: "end"
                        };
                        t[0] = g;
                    } else {
                        g = t[0];
                    }
                    _ = g;
                    f = u.oneOneIconStyles;
                    break e;
                }
            case "group":
                {
                    p = r("WDSIconIcGroupAddFilled.react");
                    break e;
                }
            case "community":
                {
                    p = r("WDSIconWdsIcCommunitiesFilled.react");
                    break e;
                }
            case "contact":
                {
                    p = r("WDSIconIcPersonAddFilled.react");
                    break e;
                }
            case "business-broadcast":
                p = r("WDSIconWdsIcBroadcastMessageFill.react");
        }
        let h;
        if (t[1] !== backgroundStyles) {
            h = [
                u.defaultBackgroundStyle,
                backgroundStyles
            ];
            t[1] = backgroundStyles;
            t[2] = h;
        } else {
            h = t[2];
        }
        let iconStyles;
        if (t[3] !== f || t[4] !== foregroundStyles) {
            iconStyles = [
                u.defaultForegroundStyle,
                foregroundStyles,
                f
            ];
            t[3] = f;
            t[4] = foregroundStyles;
            t[5] = iconStyles;
        } else {
            iconStyles = t[5];
        }
        let C;
        if (t[6] !== p || t[7] !== directional || t[8] !== _ || t[9] !== shape_1 || t[10] !== size || t[11] !== h || t[12] !== iconStyles) {
            C = s.jsx(o("WAWebShapeIcon.react").ShapeIcon, babelHelpers.extends({
                theme: o("WAWebShapeIcon.react").ShapeIconTheme.Muted,
                backgroundStyles: h,
                size,
                shape: shape_1
            }, _, {
                Icon: p,
                iconStyles,
                directional
            }));
            t[6] = p;
            t[7] = directional;
            t[8] = _;
            t[9] = shape_1;
            t[10] = size;
            t[11] = h;
            t[12] = iconStyles;
            t[13] = C;
        } else {
            C = t[13];
        }
        return C;
    }
    l.default = c;
}, 98);