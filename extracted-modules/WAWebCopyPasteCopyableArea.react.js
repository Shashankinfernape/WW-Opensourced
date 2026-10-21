__d("WAWebCopyPasteCopyableArea.react", [
    "WAWebClassnames",
    "WAWebCopyPasteClipboard",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "canCut",
        "children",
        "ref",
        "testid",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = "copyable-area";
    const m = {
        noop: {
            visibility: "xnpuxes",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(18);
        let a;
        let i;
        let l;
        let u;
        let p;
        let _;
        if (n[0] !== t) {
            a = t.canCut;
            i = t.children;
            u = t.ref;
            p = t.testid;
            _ = t.xstyle;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = u;
            n[5] = p;
            n[6] = _;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            u = n[4];
            p = n[5];
            _ = n[6];
        }
        let h;
        if (n[7] !== _) {
            h = o("WAWebClassnames").classnamesConvertMeToStylexPlease((s || (s = r("stylex")))(m.noop, _), d);
            n[7] = _;
            n[8] = h;
        } else {
            h = n[8];
        }
        const y = a ? g : void 0;
        let C;
        if (n[9] !== l || n[10] !== h || n[11] !== y) {
            C = babelHelpers.extends({}, l, {
                className: h,
                onCopy: f,
                onCut: y
            });
            n[9] = l;
            n[10] = h;
            n[11] = y;
            n[12] = C;
        } else {
            C = n[12];
        }
        const b = C;
        let v;
        if (n[13] !== i || n[14] !== b || n[15] !== u || n[16] !== p) {
            v = <div {...babelHelpers.extends({}, b, {
                ref: u,
                "data-testid": p,
                children: i
            })}/>;
            n[13] = i;
            n[14] = b;
            n[15] = u;
            n[16] = p;
            n[17] = v;
        } else {
            v = n[17];
        }
        return v;
    }
    function _(e, t) {
        const n = e.currentTarget;
        if (!(n instanceof HTMLElement) || !r("justknobx")._("2416") && !o("WAWebCopyPasteClipboard").Clipboard.selectionRequiresCustomSerialization(t)) {
            return false;
        }
        const a = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(n, t);
        e.clipboardData.setData("text/plain", a.toPlainString());
        try {
            e.clipboardData.setData(o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE, a.toAppString());
        } catch (e) {}
        return true;
    }
    function f(e) {
        if (_(e, window.getSelection())) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    function g(e) {
        const t = window.getSelection();
        if (_(e, t)) {
            if (t != null) {
                t.deleteFromDocument();
            }
            e.stopPropagation();
            e.preventDefault();
            e.target.dispatchEvent(new Event("input", {
                bubbles: true,
                cancelable: true
            }));
        }
    }
    l.default = p;
}, 98);