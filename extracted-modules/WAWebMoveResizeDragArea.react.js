__d("WAWebMoveResizeDragArea.react", [
    "WAWebMoveResizeComponentUtils",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        defaultCursor: {
            cursor: "xt0e3qv",
            $$css: true
        },
        grabCursor: {
            cursor: "x1jm3nie",
            $$css: true
        },
        grabbingCursor: {
            cursor: "xi9pz9s",
            $$css: true
        },
        moveable: {
            width: "xh8yej3",
            height: "x5yr21d",
            cursor: "xv5twrn",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(9);
        const { children, currentAction, disabled, dragCursor, onMouseDown, onMouseUp, xstyle } = t;
        if (disabled === true) {
            return children;
        }
        let _;
        if (n[0] !== currentAction || n[1] !== dragCursor || n[2] !== xstyle) {
            _ = (e || (e = r("stylex"))).props([
                c.moveable,
                currentAction === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE ? c.defaultCursor : currentAction === o("WAWebMoveResizeComponentUtils").UserActions.MOVE ? dragCursor === "grab" ? c.grabbingCursor : null : currentAction === o("WAWebMoveResizeComponentUtils").UserActions.IDLE ? dragCursor === "grab" ? c.grabCursor : null : (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${currentAction}`);
                })(),
                xstyle
            ]);
            n[0] = currentAction;
            n[1] = dragCursor;
            n[2] = xstyle;
            n[3] = _;
        } else {
            _ = n[3];
        }
        let f;
        if (n[4] !== children || n[5] !== onMouseDown || n[6] !== onMouseUp || n[7] !== _) {
            f = <div {...babelHelpers.extends({}, _, {
                onMouseDown,
                onMouseUp,
                children
            })}/>;
            n[4] = children;
            n[5] = onMouseDown;
            n[6] = onMouseUp;
            n[7] = _;
            n[8] = f;
        } else {
            f = n[8];
        }
        return f;
    }
    l.default = d;
}, 98);