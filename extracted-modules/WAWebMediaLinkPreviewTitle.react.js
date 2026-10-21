__d("WAWebMediaLinkPreviewTitle.react", [
    "WAWebEmojiText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 40;
    function c(e) {
        const t = o("react-compiler-runtime").c(14);
        const { isBotPluginLink, isCallLink, isCompose, isStatus, title, titleDir, titleDirMismatch } = e;
        const m = isCallLink === undefined ? false : isCallLink;
        let p;
        if (t[0] !== isBotPluginLink || t[1] !== m || t[2] !== isCompose || t[3] !== isStatus) {
            p = ({
                0: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f"
                },
                8: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x1jchvi3"
                },
                4: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f x6prxxf x1ipzhd2 xjpr12u"
                },
                12: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x6prxxf x1ipzhd2 xjpr12u"
                },
                2: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f x19phtnz"
                },
                10: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x1jchvi3 x19phtnz"
                },
                6: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f x6prxxf x1ipzhd2 xjpr12u x19phtnz"
                },
                14: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x6prxxf x1ipzhd2 xjpr12u x19phtnz"
                },
                1: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1jchvi3 xo1l8bm xat24cr"
                },
                9: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h xj9wvw2 x1jchvi3 xo1l8bm xat24cr"
                },
                5: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1ipzhd2 x1jchvi3 xo1l8bm xat24cr"
                },
                13: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h xj9wvw2 x1ipzhd2 x1jchvi3 xo1l8bm xat24cr"
                },
                3: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x19phtnz x1jchvi3 xo1l8bm xat24cr"
                },
                11: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h xj9wvw2 x19phtnz x1jchvi3 xo1l8bm xat24cr"
                },
                7: {
                    className: "x1ua5tub x1h7i4cw x14ug900 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1ipzhd2 x19phtnz x1jchvi3 xo1l8bm xat24cr"
                },
                15: {
                    className: "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h xj9wvw2 x1ipzhd2 x19phtnz x1jchvi3 xo1l8bm xat24cr"
                }
            })[!!isStatus << 3 | !!isCompose << 2 | !!isBotPluginLink << 1 | !!m << 0];
            t[0] = isBotPluginLink;
            t[1] = m;
            t[2] = isCompose;
            t[3] = isStatus;
            t[4] = p;
        } else {
            p = t[4];
        }
        const _ = isBotPluginLink ? u : Infinity;
        let f;
        if (t[5] !== _ || t[6] !== title || t[7] !== titleDir || t[8] !== titleDirMismatch) {
            f = s.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: title,
                textLimit: _,
                ellipsify: true,
                breakWord: true,
                direction: titleDir,
                dirMismatch: titleDirMismatch,
                testid: "link-preview-title",
                multiline: true
            });
            t[5] = _;
            t[6] = title;
            t[7] = titleDir;
            t[8] = titleDirMismatch;
            t[9] = f;
        } else {
            f = t[9];
        }
        let g;
        if (t[10] !== p || t[11] !== f || t[12] !== title) {
            g = <div {...babelHelpers.extends({}, p, {
                title,
                children: f
            })}/>;
            t[10] = p;
            t[11] = f;
            t[12] = title;
            t[13] = g;
        } else {
            g = t[13];
        }
        return g;
    }
    l.default = c;
}, 98);