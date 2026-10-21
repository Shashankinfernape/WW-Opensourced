__d("WAWebMoveResizeResizers.react", [
    "WAWebL10N",
    "WAWebMoveResizeComponentUtils",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = "-6px";
    const d = "12px";
    const m = {
        resizer: {
            position: "x10l6tqk",
            zIndex: "x1bkdxzg",
            $$css: true
        },
        topResizer: {
            top: "xtu2xtp",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            width: "xh8yej3",
            height: "x1kpxq89",
            cursor: "x1e5i8e3",
            $$css: true
        },
        bottomResizer: {
            bottom: "xsugpx9",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            width: "xh8yej3",
            height: "x1kpxq89",
            cursor: "x1e5i8e3",
            $$css: true
        },
        leftResizer: {
            top: "x13vifvy",
            insetInlineStart: "x1w1ezjj",
            left: null,
            right: null,
            width: "xsmyaan",
            height: "x5yr21d",
            cursor: "x7eptgl",
            $$css: true
        },
        rightResizer: {
            top: "x13vifvy",
            insetInlineEnd: "x1euzuty",
            left: null,
            right: null,
            width: "xsmyaan",
            height: "x5yr21d",
            cursor: "x7eptgl",
            $$css: true
        },
        topRightResizer: {
            top: "xtu2xtp",
            insetInlineEnd: "x1euzuty",
            left: null,
            right: null,
            width: "xsmyaan",
            height: "x1kpxq89",
            cursor: "x1yl03ai",
            $$css: true
        },
        topLeftResizer: {
            top: "xtu2xtp",
            insetInlineStart: "x1w1ezjj",
            left: null,
            right: null,
            width: "xsmyaan",
            height: "x1kpxq89",
            cursor: "x16djdpl",
            $$css: true
        },
        bottomRightResizer: {
            insetInlineEnd: "x1euzuty",
            left: null,
            right: null,
            bottom: "xsugpx9",
            width: "xsmyaan",
            height: "x1kpxq89",
            cursor: "x16djdpl",
            $$css: true
        },
        bottomLeftResizer: {
            bottom: "xsugpx9",
            insetInlineStart: "x1w1ezjj",
            left: null,
            right: null,
            width: "xsmyaan",
            height: "x1kpxq89",
            cursor: "x1yl03ai",
            $$css: true
        },
        defaultCursor: {
            cursor: "xt0e3qv",
            $$css: true
        }
    };
    function p(e) {
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT) {
            return m.leftResizer;
        }
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM) {
            return m.bottomResizer;
        }
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT) {
            return m.rightResizer;
        }
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP) {
            return m.topResizer;
        }
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT) {
            return m.topLeftResizer;
        }
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT) {
            return m.topRightResizer;
        }
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT) {
            return m.bottomLeftResizer;
        }
        if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT) {
            return m.bottomRightResizer;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function _(e) {
        if (r("WAWebL10N").isRTL()) {
            if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT) {
                return o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT;
            }
            if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT) {
                return o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT;
            }
            if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT) {
                return o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT;
            }
            if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT) {
                return o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT;
            }
            if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT) {
                return o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT;
            }
            if (e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT) {
                return o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT;
            }
            return e;
        }
        return e;
    }
    function f(t) {
        const n = o("react-compiler-runtime").c(9);
        const { currentAction, directions, getResizeCallback } = t;
        let s;
        if (n[0] !== directions) {
            s = directions === undefined ? Array.from(o("WAWebMoveResizeComponentUtils").ResizeDirections.members()) : directions;
            n[0] = directions;
            n[1] = s;
        } else {
            s = n[1];
        }
        const c = s;
        let d;
        if (n[2] !== currentAction || n[3] !== c || n[4] !== getResizeCallback) {
            let f;
            if (n[6] !== currentAction || n[7] !== getResizeCallback) {
                f = function(n) {
                    const t = getResizeCallback(_(n));
                    return <div key={n} {...babelHelpers.extends({
                        "data-testid": `move_resize_component_resizer_${n}`
                    }, (e || (e = r("stylex"))).props([
                        p(n),
                        m.resizer,
                        currentAction === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE && m.defaultCursor
                    ]), {
                        onMouseDown: t
                    })}/>;
                };
                n[6] = currentAction;
                n[7] = getResizeCallback;
                n[8] = f;
            } else {
                f = n[8];
            }
            d = c.map(f);
            n[2] = currentAction;
            n[3] = c;
            n[4] = getResizeCallback;
            n[5] = d;
        } else {
            d = n[5];
        }
        return d;
    }
    l.default = f;
}, 98);