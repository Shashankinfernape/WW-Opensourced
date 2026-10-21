__d("WAWebEmojiSkinTonePicker.react", [
    "WAWebConnModel",
    "WAWebDropdownItem.react",
    "WAWebEmoji",
    "WAWebEmojiGridPicker.react",
    "WAWebEmojiPanelUtil",
    "WAWebEmojiRowPicker.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebMiscGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebMultiSkinTonePicker.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(26);
        const { action, base, preVariant, unicode } = e;
        let u;
        if (t[0] !== base) {
            u = o("WAWebEmoji").isBaseMultiSkinToneEmoji(base);
            t[0] = base;
            t[1] = u;
        } else {
            u = t[1];
        }
        const m = u;
        const p = o("WAWebEmoji").HANDSHAKE === base;
        let _;
        if (t[2] !== p) {
            _ = o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() && !(o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.IPHONE && p);
            t[2] = p;
            t[3] = _;
        } else {
            _ = t[3];
        }
        const f = _;
        let g;
        let h;
        if (t[4] !== action || t[5] !== base || t[6] !== m || t[7] !== unicode) {
            const y = m ? o("WAWebEmoji").getPermutations(o("WAWebEmojiPanelUtil").SKIN_TONE_VARIATIONS.slice(1), 2) : o("WAWebEmojiPanelUtil").SKIN_TONE_VARIATIONS.map(d);
            let C;
            if (t[10] !== base) {
                C = function(t, n) {
                    const e = o("WAWebEmoji").EmojiUtil.getSkinToneVariant(base, n);
                    if (e != null) {
                        t.push(e);
                    }
                    return t;
                };
                t[10] = base;
                t[11] = C;
            } else {
                C = t[11];
            }
            h = y.reduce(C, []);
            let b;
            if (t[12] !== action || t[13] !== m || t[14] !== unicode) {
                b = function(t, r) {
                    const Component = o("WAWebDropdownItem.react").DropdownItem;
                    return <Component key={t + r} type={m ? "emoji-grid" : "emoji"} testid="mi-emoji-variant" action={function(r) {
                        return action(r, unicode, t);
                    }}>{s.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: t,
                        formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                        tabIndex: "-1"
                    })}</Component>;
                };
                t[12] = action;
                t[13] = m;
                t[14] = unicode;
                t[15] = b;
            } else {
                b = t[15];
            }
            g = h.filter(c).map(b);
            t[4] = action;
            t[5] = base;
            t[6] = m;
            t[7] = unicode;
            t[8] = g;
            t[9] = h;
        } else {
            g = t[8];
            h = t[9];
        }
        const v = g;
        if (m) {
            let S;
            if (t[16] !== action || t[17] !== base || t[18] !== v || t[19] !== preVariant || t[20] !== unicode || t[21] !== f || t[22] !== h) {
                const Component = r("WAWebMultiSkinTonePicker.react");
                const Component_1 = r("WAWebEmojiGridPicker.react");
                S = f ? <Component base={base} action={action} unicode={unicode} preVariant={preVariant}>{h}</Component> : <Component_1 base={base} action={action} unicode={unicode}>{v}</Component_1>;
                t[16] = action;
                t[17] = base;
                t[18] = v;
                t[19] = preVariant;
                t[20] = unicode;
                t[21] = f;
                t[22] = h;
                t[23] = S;
            } else {
                S = t[23];
            }
            return S;
        }
        let R;
        if (t[24] !== v) {
            const Component = r("WAWebEmojiRowPicker.react");
            R = <Component>{v}</Component>;
            t[24] = v;
            t[25] = R;
        } else {
            R = t[25];
        }
        return R;
    }
    function c(e) {
        return o("WAWebEmoji").EmojiUtil.isEmoji(e);
    }
    function d(e) {
        return [
            e
        ];
    }
    l.default = UComponent;
}, 98);