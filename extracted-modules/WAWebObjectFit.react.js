__d("WAWebObjectFit.react", [
    "WALogger",
    "WAWebObjectFit.stylex",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebThrottledCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useImperativeHandle, useLayoutEffect, useRef, useState } = m;
    const transition = "transform 300ms cubic-bezier(.1,.82,.25,1)";
    function C(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, s);
        const iRef = useRef();
        const lRef = useRef();
        useImperativeHandle(t_ref, function() {
            return {
                getInsideContainer: function() {
                    return lRef.current;
                },
                getOutsideContainer: function() {
                    return iRef.current;
                },
                getElement: function() {
                    return iRef.current;
                }
            };
        });
        const { objectPosition, onObjectLoad, position, size, type, zoomIn } = a;
        const contentWidth = size?.width;
        const contentHeight = size?.height;
        const factor = zoomIn?.factor;
        const translateX = zoomIn?.translateX;
        const translateY = zoomIn?.translateY;
        const $ = useCallback(function() {
            if (onObjectLoad != null && lRef.current != null) {
                onObjectLoad(lRef.current.firstChild);
            }
        }, [
            onObjectLoad
        ]);
        const P = useState(null);
        const N = P[0];
        const M = P[1];
        const w = useCallback(function() {
            if (!(contentWidth == null || contentHeight == null)) {
                const container = iRef.current;
                if (container) {
                    let n;
                    switch(type){
                        case "contain":
                            n = v({
                                container,
                                contentHeight,
                                contentWidth
                            });
                            break;
                        case "cover":
                            n = b({
                                container,
                                contentHeight,
                                contentWidth
                            });
                            break;
                        case "scaleDown":
                            n = S(container, contentWidth, contentHeight);
                            break;
                        case "zoomIn":
                            n = R(container, contentWidth, contentHeight, factor != null && translateX != null && translateY != null ? {
                                factor,
                                translateX,
                                translateY
                            } : null);
                            break;
                        default:
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "unrecognized type ",
                                ""
                            ])), type).sendLogs("object-fit");
                            return;
                    }
                    const innerStyle = {};
                    const a = objectPosition ?? n.style.position;
                    if (a != null) {
                        innerStyle.position = a;
                    }
                    for (const l of Object.keys(n.style)){
                        const s = n.style[l];
                        if (!(s == null || Number.isNaN(s))) {
                            innerStyle[l] = typeof s === "number" ? `${s}px` : s;
                        }
                    }
                    M({
                        containerStyles: n.stylexStyles,
                        innerStyle
                    });
                    $();
                }
            }
        }, [
            $,
            objectPosition,
            contentHeight,
            contentWidth,
            type,
            factor,
            translateX,
            translateY
        ]);
        const A = r("useWAWebThrottledCallback")(w);
        o("useWAWebListener").useListener(window, "resize", A);
        useLayoutEffect(function() {
            w();
        }, [
            w
        ]);
        return <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props.apply(u, (N != null ? N.containerStyles : [
            o("WAWebObjectFit.stylex").styles.fit
        ]).concat([
            position === "relative" && o("WAWebObjectFit.stylex").styles.fitRelative,
            a.allowShrink === true && o("WAWebObjectFit.stylex").styles.fitShrinkable
        ])), {
            ref: iRef,
            children: <div style={N != null ? N.innerStyle : {
                visibility: "hidden"
            }} ref={lRef}>{a.children}</div>
        })}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b({ container, contentHeight, contentWidth }) {
        const { clientWidth, clientHeight } = container;
        let l = contentWidth;
        let s = contentHeight;
        let u = 0;
        let c = 0;
        if (l !== clientWidth) {
            s *= clientWidth / l;
            l = clientWidth;
            if (s > clientHeight) {
                u = clientHeight / 2 - s / 2;
            }
        }
        if (s < clientHeight) {
            l *= clientHeight / s;
            s = clientHeight;
            if (l > clientWidth) {
                c = clientWidth / 2 - l / 2;
            }
        }
        return {
            style: {
                width: l,
                height: s,
                top: u,
                left: c,
                position: "absolute"
            },
            stylexStyles: [
                o("WAWebObjectFit.stylex").styles.fit
            ]
        };
    }
    function v({ container, contentHeight, contentWidth }) {
        const { clientWidth, clientHeight } = container;
        let l = contentWidth;
        let s = contentHeight;
        let u = 0;
        let c = 0;
        const d = l / clientWidth;
        const m = s / clientHeight;
        if (d > m) {
            s *= clientWidth / l;
            l = clientWidth;
            if (s < clientHeight) {
                u = clientHeight / 2 - s / 2;
            }
        } else {
            l *= clientHeight / s;
            s = clientHeight;
            if (l < clientWidth) {
                c = clientWidth / 2 - l / 2;
            }
        }
        return {
            style: {
                width: l,
                height: s,
                top: u,
                left: c,
                position: "absolute"
            },
            stylexStyles: [
                o("WAWebObjectFit.stylex").styles.fit
            ]
        };
    }
    function S({ clientWidth, clientHeight }, contentWidth, contentHeight) {
        let i = contentHeight;
        let l = contentWidth;
        if (i > clientHeight) {
            i = clientHeight;
            l = contentWidth * (clientHeight / contentHeight);
        }
        if (l > clientWidth) {
            l = clientWidth;
            i = contentHeight * (clientWidth / contentWidth);
        }
        return {
            style: {
                width: l,
                height: i
            },
            stylexStyles: [
                o("WAWebObjectFit.stylex").styles.fit,
                o("WAWebObjectFit.stylex").styles.fitScaledown
            ]
        };
    }
    function R(container, contentWidth, contentHeight, r) {
        const style = S(container, contentWidth, contentHeight).style;
        let i;
        if (r) {
            i = {
                width: style.width,
                height: style.height,
                transition,
                transform: `translateX(${r.translateX}px) translateY(${r.translateY}px) scale(${r.factor})`
            };
        } else {
            i = {
                width: style.width,
                height: style.height,
                transition
            };
        }
        return {
            style: i,
            stylexStyles: [
                o("WAWebObjectFit.stylex").styles.fit,
                o("WAWebObjectFit.stylex").styles.fitScaledown,
                o("WAWebObjectFit.stylex").styles.fitZoomin
            ]
        };
    }
    l.default = C;
}, 98);