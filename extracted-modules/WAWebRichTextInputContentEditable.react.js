__d("WAWebRichTextInputContentEditable.react", [
    "LexicalComposerContext",
    "LexicalContentEditable",
    "WAWebStylesEnv",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useLayoutEffect } = c;
    const _ = 15;
    const f = 1.47;
    const g = {
        contentEditable: {
            userSelect: "x1hx0egp",
            overflowX: "x6ikm8r",
            overflowY: "x1odjw0f",
            fontSize: "x6prxxf",
            lineHeight: "x1k6rcq7",
            $$css: true
        },
        nowrap: {
            whiteSpace: "x1whj5v",
            $$css: true
        }
    };
    function h({ ariaActiveDescendant, ariaLabel, focusOnMount, lineWrap = true, maxVisibleLines, minVisibleLines = 1, onClick, placeholder, placeholderTestId, placeholderXstyle, readOnly = false, ref, spellCheck, tabOrder, testid, title, xstyle }) {
        const $ = o("LexicalComposerContext").useLexicalComposerContext();
        const P = $[0];
        const N = useCallback(function(e) {
            if (e != null) {
                if (tabOrder != null) {
                    e.setAttribute("data-tab", String(tabOrder));
                }
                if (focusOnMount === true) {
                    self.setTimeout(function() {
                        return P.focus();
                    }, 0);
                }
            }
        }, []);
        useLayoutEffect(function() {
            const e = P.getRootElement();
            if (e !== null) {
                e.setAttribute("data-tab", String(tabOrder));
            }
        }, [
            P,
            tabOrder
        ]);
        const M = r("useMergeRefs")(ref, N);
        useEffect(function() {
            P.setEditable(!readOnly);
        }, [
            P,
            readOnly
        ]);
        let w;
        const A = ariaLabel ?? title;
        if (A != null && A !== "") {
            w = {
                ariaLabel: A.toString()
            };
        }
        const F = placeholder == null ? w : babelHelpers.extends({
            placeholder: <C text={placeholder} xstyle={placeholderXstyle} testid={placeholderTestId}/>,
            "aria-placeholder": placeholder.toString()
        }, w);
        return u.jsx(o("LexicalContentEditable").ContentEditable, babelHelpers.extends({
            ariaActiveDescendant,
            className: (e || (e = r("stylex")))(g.contentEditable, xstyle, !lineWrap && g.nowrap),
            style: {
                maxHeight: maxVisibleLines != null ? `${f * maxVisibleLines}em` : undefined,
                minHeight: `${f * minVisibleLines}em`
            }
        }, F, {
            role: "textbox",
            ref: M,
            spellCheck,
            title: title?.toString(),
            "data-testid": testid ?? "rich-text-input-body",
            tabIndex: tabOrder ?? undefined,
            onClick,
            ariaAutoComplete: "list",
            ariaOwns: "emoji-suggestion"
        }));
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    var y = {
        container: {
            position: "x10l6tqk",
            top: "x13vifvy",
            bottom: "x1ey2m1c",
            insetInlineStart: "x1u2k1fw",
            zIndex: "xhtitgo",
            color: "xhslqc4",
            pointerEvents: "x47corl",
            userSelect: "x87ps6o",
            transition: "xh9ts4v",
            fontSize: "x6prxxf",
            lineHeight: "x1k6rcq7",
            $$css: true
        },
        containerRefreshed: {
            insetInlineStart: "x1o0tod",
            $$css: true
        },
        fontSmoothing: {
            "-webkit-font-smoothing": "xvmahel",
            "-moz-osx-font-smoothing": "xlh3980",
            $$css: true
        }
    };
    function C(t) {
        const n = o("react-compiler-runtime").c(6);
        const { testid, text, xstyle } = t;
        let s;
        if (n[0] !== xstyle) {
            s = (e || (e = r("stylex"))).props(y.container, y.containerRefreshed, o("WAWebStylesEnv").isOSMac && y.fontSmoothing, xstyle);
            n[0] = xstyle;
            n[1] = s;
        } else {
            s = n[1];
        }
        let c;
        if (n[2] !== s || n[3] !== testid || n[4] !== text) {
            c = <div {...babelHelpers.extends({
                "data-testid": testid
            }, s, {
                children: text
            })}/>;
            n[2] = s;
            n[3] = testid;
            n[4] = text;
            n[5] = c;
        } else {
            c = n[5];
        }
        return c;
    }
    l.MIN_FONT_SIZE = _;
    l.InputContentEditable = h;
}, 98);