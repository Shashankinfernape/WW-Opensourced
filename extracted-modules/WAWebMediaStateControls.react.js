__d("WAWebMediaStateControls.react", [
    "WAWebClickable.react",
    "WAWebL10nFilesize",
    "WAWebMediaStateControlSharedStyles",
    "WAWebSpinner.react",
    "WDSIconIcClose.react",
    "WDSIconIcGif.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSIconIcUpload.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef } = c;
    const p = 38;
    const _ = {
        icon: {
            display: "x1rg5ohu",
            height: "x10wjd1d",
            position: "x1n2onr6",
            width: "x1pju0fl",
            $$css: true
        },
        play: {
            marginInlineStart: "xwklpps",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(10);
        const { cancelable, ref } = t;
        const l = !!cancelable;
        const sRef = useRef();
        let c;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = function() {
                return {
                    getElement: function() {
                        return sRef.current;
                    }
                };
            };
            n[0] = c;
        } else {
            c = n[0];
        }
        useImperativeHandle(ref, c);
        let p;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls);
            n[1] = p;
        } else {
            p = n[1];
        }
        let f;
        if (n[2] !== l) {
            f = (e || (e = r("stylex"))).props(_.icon, l && r("WAWebMediaStateControlSharedStyles").cursorPointer);
            n[2] = l;
            n[3] = f;
        } else {
            f = n[3];
        }
        let g;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = <div className="x1o0tod x10l6tqk x13vifvy">{u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 3,
                color: "white"
            })}</div>;
            n[4] = g;
        } else {
            g = n[4];
        }
        let h;
        if (n[5] !== l) {
            h = l ? <div className="x6s0dn4 x1jeu2jp x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x12k1wp2 x1k847yn x1j67448 xzkvk7n x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14obwa1 x78zum5 xn3w4p2 xccywas xl56j7k x7phf20 x7r5mf7 x10l6tqk x1pdr0v7 x187nhsf xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg x180ha0m x147fd2z xlogyij xq2yz4j xn4w8fp x17issv1 xxslzl9 xwjlxly x10tli2e xf8oath xdz3mh0 x1hmns74 x1r60q8r x1y59no3">{u.jsx(r("WDSIconIcClose.react"), {
                testid: "media-cancel"
            })}</div> : null;
            n[5] = l;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== f || n[8] !== h) {
            y = <div {...babelHelpers.extends({
                ref: sRef
            }, p, {
                "data-testid": "media-state-pending",
                children: <div {...babelHelpers.extends({}, f, {
                    children: [
                        g,
                        h
                    ]
                })}/>
            })}/>;
            n[7] = f;
            n[8] = h;
            n[9] = y;
        } else {
            y = n[9];
        }
        return y;
    }
    function g(t) {
        const n = o("react-compiler-runtime").c(10);
        const { filesize, ref } = t;
        const l = filesize === undefined ? 0 : filesize;
        const sRef = useRef();
        let c;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = function() {
                return {
                    getElement: function() {
                        return sRef.current;
                    }
                };
            };
            n[0] = c;
        } else {
            c = n[0];
        }
        useImperativeHandle(ref, c);
        if (l > 0) {
            let p;
            if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
                p = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls);
                n[1] = p;
            } else {
                p = n[1];
            }
            let _;
            let f;
            if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
                _ = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").btnMeta, r("WAWebMediaStateControlSharedStyles").cursorPointer);
                f = u.jsx(r("WDSIconIcUpload.react"), {
                    testid: "media-upload",
                    xstyle: r("WAWebMediaStateControlSharedStyles").iconMeta
                });
                n[2] = _;
                n[3] = f;
            } else {
                _ = n[2];
                f = n[3];
            }
            let g;
            if (n[4] !== l) {
                g = o("WAWebL10nFilesize").getL10nFilesize(l);
                n[4] = l;
                n[5] = g;
            } else {
                g = n[5];
            }
            let h;
            if (n[6] !== g) {
                h = <div {...babelHelpers.extends({
                    ref: sRef
                }, p, {
                    "data-testid": "media-state-upload",
                    children: <button {...babelHelpers.extends({}, _, {
                        children: [
                            f,
                            <span>{g}</span>
                        ]
                    })}/>
                })}/>;
                n[6] = g;
                n[7] = h;
            } else {
                h = n[7];
            }
            return h;
        }
        let y;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            y = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls);
            n[8] = y;
        } else {
            y = n[8];
        }
        let C;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            C = <div {...babelHelpers.extends({
                ref: sRef
            }, y, {
                "data-testid": "media-state-upload",
                children: <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").button), {
                    children: u.jsx(r("WDSIconIcUpload.react"), {
                        testid: "media-upload"
                    })
                })}/>
            })}/>;
            n[9] = C;
        } else {
            C = n[9];
        }
        return C;
    }
    function h(t) {
        const n = o("react-compiler-runtime").c(2);
        const t_ref = t.ref;
        const iRef = useRef();
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                return {
                    getElement: function() {
                        return iRef.current;
                    }
                };
            };
            n[0] = l;
        } else {
            l = n[0];
        }
        useImperativeHandle(t_ref, l);
        let s;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            s = <div {...babelHelpers.extends({
                ref: iRef
            }, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), {
                children: <div {...babelHelpers.extends({}, e.props(r("WAWebMediaStateControlSharedStyles").button), {
                    children: u.jsx(r("WDSIconIcPlayArrowFilled.react"), {
                        height: p,
                        width: p,
                        testid: "media-play",
                        xstyle: _.play
                    })
                })}/>
            })}/>;
            n[1] = s;
        } else {
            s = n[1];
        }
        return s;
    }
    function y(t) {
        const n = o("react-compiler-runtime").c(4);
        const t_onClick = t.onClick;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = (e || (e = r("stylex")))(r("WAWebMediaStateControlSharedStyles").controls);
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").button), {
                children: u.jsx(r("WDSIconIcGif.react"), {
                    testid: "media-gif"
                })
            })}/>;
            n[1] = l;
        } else {
            l = n[1];
        }
        let s;
        if (n[2] !== t_onClick) {
            const Component = o("WAWebClickable.react").Clickable;
            s = <Component className={i} onClick={t_onClick} dataTestId="media-state-gif-icon">{l}</Component>;
            n[2] = t_onClick;
            n[3] = s;
        } else {
            s = n[3];
        }
        return s;
    }
    l.Pending = f;
    l.Upload = g;
    l.Play = h;
    l.GifIcon = y;
}, 98);