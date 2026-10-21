__d("useWAWebTextFieldEmojiPicker", [
    "Lexical",
    "WAWebDropdown.react",
    "WAWebEmojiNode",
    "WAWebEmojiPanel.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useMemo, useRef, useState } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(18);
        const e_emojiPickerAriaLabel = e.emojiPickerAriaLabel;
        const a = r("useWAWebIsKeyboardUser")();
        const a_isKeyboardUser = a.isKeyboardUser;
        const lRef = useRef(null);
        const u = useState(null);
        const c = u[0];
        const p = u[1];
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebEmojiNode").EmojiNode
            ];
            t[0] = _;
        } else {
            _ = t[0];
        }
        const nodes = _;
        let g;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            g = function() {
                lRef.current?.focus();
            };
            t[1] = g;
        } else {
            g = t[1];
        }
        const h = g;
        let y;
        if (t[2] !== a_isKeyboardUser) {
            y = function() {
                p(null);
                if (a_isKeyboardUser) {
                    h();
                }
            };
            t[2] = a_isKeyboardUser;
            t[3] = y;
        } else {
            y = t[3];
        }
        const C = y;
        let b;
        if (t[4] !== C || t[5] !== a_isKeyboardUser) {
            const onEmoji = function(t) {
                const n = lRef.current?.editor;
                if (n != null) {
                    n.focus();
                    n.update(function() {
                        const e = o("Lexical").$getSelection();
                        if (o("Lexical").$isRangeSelection(e)) {
                            e.insertText(t);
                        }
                    });
                }
                if (a_isKeyboardUser) {
                    C();
                }
            };
            b = function(t) {
                const Component = r("WAWebEmojiPanel.react");
                const e = <Component onEmoji={onEmoji} onFocusNext={h} onFocusPrev={h}/>;
                p({
                    menu: e,
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                    type: o("WAWebDropdown.react").MenuType.EmojiPicker,
                    anchor: document.activeElement
                });
                h();
            };
            t[4] = C;
            t[5] = a_isKeyboardUser;
            t[6] = b;
        } else {
            b = t[6];
        }
        const S = b;
        let R;
        if (t[7] !== c || t[8] !== C) {
            const Component = o("WAWebUimUie.react").UIE;
            R = c != null ? <Component dismissOnWindowResize displayName="EmojiPicker" escapable popable requestDismiss={C}>{s.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: c
            })}</Component> : null;
            t[7] = c;
            t[8] = C;
            t[9] = R;
        } else {
            R = t[9];
        }
        const emojiPicker = R;
        const isEmojiPickerOpen = c != null;
        let k;
        if (t[10] !== e_emojiPickerAriaLabel || t[11] !== S || t[12] !== isEmojiPickerOpen) {
            k = {
                emojiPickerAriaLabel: e_emojiPickerAriaLabel,
                isEmojiPickerOpen,
                onEmojiPress: S
            };
            t[10] = e_emojiPickerAriaLabel;
            t[11] = S;
            t[12] = isEmojiPickerOpen;
            t[13] = k;
        } else {
            k = t[13];
        }
        let I;
        if (t[14] !== emojiPicker || t[15] !== S || t[16] !== k) {
            I = {
                emojiPicker,
                enableEmojiPicker: k,
                nodes,
                openEmojiPicker: S,
                richTextFieldRef: lRef
            };
            t[14] = emojiPicker;
            t[15] = S;
            t[16] = k;
            t[17] = I;
        } else {
            I = t[17];
        }
        return I;
    }
    l.default = p;
}, 98);