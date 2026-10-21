__d("useWAWebLexicalTypeAheadKeyboardNavigation", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function useD(e, t, n, r) {
        const a = o("react-compiler-runtime").c(9);
        const { onCancel, onSelect } = r;
        const s = o("LexicalComposerContext").useLexicalComposerContext();
        const d = s[0];
        const m = useState(t);
        const p = m[0];
        const setActiveIndex = m[1];
        const activeIndex = p >= 0 && p < e.length ? p : t;
        let g;
        if (a[0] !== activeIndex || a[1] !== n || a[2] !== d || a[3] !== e || a[4] !== onCancel || a[5] !== onSelect) {
            g = function() {
                let t;
                return o("LexicalUtils").mergeRegister(d.registerCommand((t = o("Lexical")).KEY_ENTER_COMMAND, function(t) {
                    if (e.length === 0) {
                        return false;
                    }
                    if (t != null) {
                        t.preventDefault();
                        t.stopImmediatePropagation();
                    }
                    onSelect(e[activeIndex]);
                    return true;
                }, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_TAB_COMMAND, function(t) {
                    if (e.length === 0) {
                        return false;
                    }
                    if (t != null) {
                        t.preventDefault();
                        t.stopImmediatePropagation();
                    }
                    onSelect(e[activeIndex]);
                    return true;
                }, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ESCAPE_COMMAND, function(t) {
                    if (e.length === 0) {
                        return false;
                    }
                    t.preventDefault();
                    t.stopImmediatePropagation();
                    onCancel();
                    return true;
                }, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_LEFT_COMMAND, function(t) {
                    if (n !== "row" || e.length === 0) {
                        return false;
                    }
                    t.preventDefault();
                    t.stopImmediatePropagation();
                    setActiveIndex(activeIndex === 0 ? e.length - 1 : activeIndex - 1);
                    return true;
                }, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_RIGHT_COMMAND, function(t) {
                    if (n !== "row" || e.length === 0) {
                        return false;
                    }
                    t.preventDefault();
                    t.stopImmediatePropagation();
                    setActiveIndex((activeIndex + 1) % e.length);
                    return true;
                }, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_UP_COMMAND, function(t) {
                    if (n !== "column" || e.length === 0) {
                        return false;
                    }
                    let r = activeIndex === 0 ? e.length - 1 : activeIndex - 1;
                    for(let o = e[r]; o?.skipKeyboardNav === true;){
                        r--;
                        if (r < 0) {
                            r = e.length - 1;
                        }
                        o = e[r];
                    }
                    t.preventDefault();
                    t.stopImmediatePropagation();
                    setActiveIndex(r);
                    return true;
                }, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_DOWN_COMMAND, function(t) {
                    if (n !== "column" || e.length === 0) {
                        return false;
                    }
                    t.preventDefault();
                    t.stopImmediatePropagation();
                    let r = (activeIndex + 1) % e.length;
                    for(let o = e[r]; o?.skipKeyboardNav === true;){
                        r++;
                        o = e[r];
                    }
                    setActiveIndex(r);
                    return true;
                }, t.COMMAND_PRIORITY_HIGH));
            };
            a[0] = activeIndex;
            a[1] = n;
            a[2] = d;
            a[3] = e;
            a[4] = onCancel;
            a[5] = onSelect;
            a[6] = g;
        } else {
            g = a[6];
        }
        useEffect(g, undefined);
        let h;
        if (a[7] !== activeIndex) {
            h = {
                activeIndex,
                setActiveIndex
            };
            a[7] = activeIndex;
            a[8] = h;
        } else {
            h = a[8];
        }
        return h;
    }
    l.useLexicalTypeAheadKeyboardNavigation = useD;
}, 98);