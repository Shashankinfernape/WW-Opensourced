__d("WAWebOutContactPillItem.react", [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebDefaultUserIcon.react",
    "WAWebEmojiText.react",
    "WAWebOutContactGetters",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebOutContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        outContactDeleteButton: {
            flex: "x1okw0bk",
            color: "xhslqc4",
            paddingTop: "x4p5aij",
            paddingInlineEnd: "x1ccui7m",
            paddingBottom: "x1j85h84",
            paddingInlineStart: "x18pi947",
            marginTop: "x1gslohp",
            marginBottom: "x12nagc",
            marginInlineStart: "xwklpps",
            marginInlineEnd: "x2fvf9",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(21);
        const { onDelete, outContact } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebOutContactGetters").getName
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebOutContactValues").useWAWebOutContactValues(outContact.id, i);
        const d = l[0];
        let m;
        if (t[1] !== outContact.id) {
            m = outContact.id.toString();
            t[1] = outContact.id;
            t[2] = m;
        } else {
            m = t[2];
        }
        let p;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = <div className="x78zum5 x6s0dn4 xl56j7k">{u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
                height: 26,
                width: 26
            })}</div>;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] !== d) {
            const Component = r("WDSText.react");
            _ = <Component type="Body2Emphasized" colorName="contentDefault" testid="out-contact-pill-nowrap-name">{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: d,
                ellipsify: true,
                displayBlock: true
            })}</Component>;
            t[4] = d;
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Remove");
            t[6] = f;
        } else {
            f = t[6];
        }
        let g;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                c.outContactDeleteButton
            ];
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== onDelete || t[9] !== outContact) {
            h = function(t) {
                t.stopPropagation();
                onDelete(outContact);
            };
            t[8] = onDelete;
            t[9] = outContact;
            t[10] = h;
        } else {
            h = t[10];
        }
        let y;
        if (t[11] !== d) {
            y = s._("Remove {contact-name} from add list", [
                s._param("contact-name", d)
            ]);
            t[11] = d;
            t[12] = y;
        } else {
            y = t[12];
        }
        let C;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            C = u.jsx(r("WDSIconIcClose.react"), {
                "aria-hidden": true
            });
            t[13] = C;
        } else {
            C = t[13];
        }
        let b;
        if (t[14] !== h || t[15] !== y) {
            const Component = r("WAWebUnstyledButton.react");
            const Component_1 = r("WDSTooltip.react");
            b = <Component_1 label={f}><Component key="chat-controls" dataTab={2} xstyle={g} role="button" onClick={h} aria-label={y} customDataAttr="selectedContact">{C}</Component></Component_1>;
            t[14] = h;
            t[15] = y;
            t[16] = b;
        } else {
            b = t[16];
        }
        let v;
        if (t[17] !== b || t[18] !== m || t[19] !== _) {
            v = u.jsx(r("WAWebChatCell.react"), {
                theme: "list-names",
                contextEnabled: o("WAWebBoolFunc").returnFalse,
                image: p,
                primary: _,
                detail: b,
                idle: true
            }, m);
            t[17] = b;
            t[18] = m;
            t[19] = _;
            t[20] = v;
        } else {
            v = t[20];
        }
        return v;
    }
    l.default = d;
}, 226);