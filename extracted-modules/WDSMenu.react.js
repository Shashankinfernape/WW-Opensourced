__d("WDSMenu.react", [
    "BaseMenu.react",
    "WDSMenuContext",
    "react",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    const c = "x1wwg65c-B";
    const d = "x1vm5b0x-B";
    const m = "x1xe9l1o-B";
    const p = "x1jn504y-B";
    const _ = 260;
    const f = {
        maxWidth: "xf68679",
        $$css: true
    };
    const g = {
        minWidth: "xkj4a21",
        $$css: true
    };
    const h = {
        minHeight: "x82snj4",
        $$css: true
    };
    const y = {
        maxHeight: "x1jols5v",
        $$css: true
    };
    const C = {
        transformOrigin: "xf6vlc6",
        $$css: true
    };
    const b = {
        container: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            rowGap: "x129bwdz",
            columnGap: "x1trrmfo",
            minWidth: "xt7fyls",
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            paddingLeft: null,
            paddingRight: null,
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            borderTopColor: "x1ekq09l",
            borderInlineEndColor: "xlmuga0",
            borderBottomColor: "x54tcbp",
            borderInlineStartColor: "xlzwp1d",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            boxShadow: "xvktan5",
            animationDuration: "x4afe7t",
            animationTimingFunction: "xuqacwm",
            animationFillMode: "x10e4vud",
            $$css: true
        },
        containerMaxWidth: function(t) {
            return [
                f,
                {
                    "--x-maxWidth": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        containerMinWidth: function(t) {
            return [
                g,
                {
                    "--x-minWidth": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        containerMinHeight: function(t) {
            return [
                h,
                {
                    "--x-minHeight": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        containerMaxHeight: function(t) {
            return [
                y,
                {
                    "--x-maxHeight": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        positionAbove: {
            animationName: "xet5ma0",
            $$css: true
        },
        positionBelow: {
            animationName: "x65gd29",
            $$css: true
        },
        transformOrigin: function(t, n) {
            return [
                C,
                {
                    "--x-transformOrigin": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t} ${n}`)
                }
            ];
        },
        containerExiting: {
            animationName: "xxp0q0x",
            animationDuration: "xtsvl71",
            animationFillMode: "x10e4vud",
            $$css: true
        },
        scrollableArea: {
            overflowX: "x6ikm8r",
            overflowY: "x1odjw0f",
            overscrollBehaviorY: "x1e4zzel",
            $$css: true
        },
        scrollableAreaWithMaxHeight: {
            overflowX: "x6ikm8r",
            overflowY: "x1odjw0f",
            overscrollBehaviorY: "x1e4zzel",
            $$css: true
        },
        containerHorizontal: {
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            minWidth: null,
            $$css: true
        },
        containerGap: function(t) {
            return [
                {
                    rowGap: t != null ? "x1r8uycs" : t,
                    columnGap: t != null ? "x1eywl5b" : t,
                    $$css: true
                },
                {
                    "--x-rowGap": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-columnGap": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        }
    };
    const onContextMenu = function(t) {
        t.preventDefault();
        t.stopPropagation();
    };
    function S({ children, gap, isContainer = false, isHorizontalMenu = false, maxHeight, maxWidth, minHeight, minWidth, testid, useMaxWidth = true }) {
        const C = e_useContext(o("WDSMenuContext").WDSMenuAnimationContext);
        const { align, isClosing, position } = C;
        let E = "center";
        if (align === "start") {
            E = "left";
        } else if (align === "end") {
            E = "right";
        }
        let k = "center";
        if (position === "above") {
            k = "bottom";
        } else if (position === "below") {
            k = "top";
        }
        if (isHorizontalMenu) {
            const Component = o("react-strict-dom").html.div;
            return <Component onContextMenu={onContextMenu} role="menu" style={[
                b.container,
                b.containerHorizontal,
                maxWidth != null && b.containerMaxWidth(maxWidth),
                gap != null && b.containerGap(gap),
                isClosing && b.containerExiting
            ]} data-testid={undefined}>{children}</Component>;
        }
        const Component = r("BaseMenu.react");
        const Component_1 = o("react-strict-dom").html.div;
        return <Component_1 onContextMenu={onContextMenu}><Component testid={undefined} minMaxHeight={360} useKeyCommands={false} variant={{
            xstyleConfig: {
                container: [
                    b.container,
                    useMaxWidth && maxWidth == null && b.containerMaxWidth(_),
                    maxWidth != null && b.containerMaxWidth(maxWidth),
                    minWidth != null && b.containerMinWidth(minWidth),
                    minHeight != null && b.containerMinHeight(minHeight),
                    maxHeight != null && b.containerMaxHeight(maxHeight),
                    maxHeight != null && b.scrollableAreaWithMaxHeight,
                    b.transformOrigin(E, k),
                    position === "above" && b.positionAbove,
                    position === "below" && b.positionBelow,
                    isClosing && b.containerExiting
                ],
                scrollableArea: b.scrollableArea
            }
        }}>{children}</Component></Component_1>;
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    l.default = S;
}, 98);