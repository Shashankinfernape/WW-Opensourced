__d("WAWebWrapperMessageActionButtonsRow", [
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        buttonWrapper: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1im30kd",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1djpfga",
            transition: "xcxita6",
            $$css: true
        },
        container: {
            marginTop: "xken49m",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x135b78x",
            paddingInlineEnd: "x11lfxj5",
            paddingLeft: null,
            paddingRight: null,
            position: "x10l6tqk",
            top: "xwa60dl",
            width: "xfvs6mw",
            $$css: true
        },
        transparentContainer: {
            pointerEvents: "x47corl",
            $$css: true
        },
        interactiveButton: {
            pointerEvents: "x67bb7w",
            $$css: true
        },
        positionLeft: {
            insetInlineStart: "xho9bl7",
            left: null,
            right: null,
            $$css: true
        },
        positionRight: {
            insetInlineEnd: "xej21xi",
            left: null,
            right: null,
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(16);
        const { isMsgGallery, isOutgoingMsg, messageActionButtons, positionLeft, positionRight, transparentGaps } = e;
        const m = transparentGaps === undefined ? false : transparentGaps;
        let p;
        if (t[0] !== isMsgGallery || t[1] !== isOutgoingMsg || t[2] !== messageActionButtons || t[3] !== m) {
            let _;
            if (t[5] !== isMsgGallery || t[6] !== m) {
                _ = function(t, o) {
                    if (t && !isMsgGallery) {
                        const Component = r("WAWebFlexItem.react");
                        return <Component key={o} xstyle={[
                            u.buttonWrapper,
                            m && u.interactiveButton
                        ]}>{t}</Component>;
                    }
                    return t;
                };
                t[5] = isMsgGallery;
                t[6] = m;
                t[7] = _;
            } else {
                _ = t[7];
            }
            p = messageActionButtons.map(_);
            if (isOutgoingMsg) {
                p.reverse();
            }
            t[0] = isMsgGallery;
            t[1] = isOutgoingMsg;
            t[2] = messageActionButtons;
            t[3] = m;
            t[4] = p;
        } else {
            p = t[4];
        }
        let justify = "end";
        if (!isMsgGallery && !isOutgoingMsg) {
            justify = "start";
        }
        const g = positionLeft && u.positionLeft;
        const h = positionRight && u.positionRight;
        const y = m && u.transparentContainer;
        let C;
        if (t[8] !== g || t[9] !== h || t[10] !== y) {
            C = [
                u.container,
                g,
                h,
                y
            ];
            t[8] = g;
            t[9] = h;
            t[10] = y;
            t[11] = C;
        } else {
            C = t[11];
        }
        let b;
        if (t[12] !== justify || t[13] !== C || t[14] !== p) {
            const Component = o("WAWebFlex.react").FlexRow;
            b = <Component justify={justify} align="center" xstyle={C}>{p}</Component>;
            t[12] = justify;
            t[13] = C;
            t[14] = p;
            t[15] = b;
        } else {
            b = t[15];
        }
        return b;
    }
    l.default = c;
}, 98);