__d("WAWebRichTextInputPlugins.react", [
    "WAWebEmojisPlugin.react",
    "WAWebFloatingToolbarPlugin.react",
    "WAWebMentionsPlugin.react",
    "WAWebTextFormatPreviewPlugin.react",
    "WAWebTextFormatShortcutsPlugin.react",
    "WAWebTextModifierPlugin",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(27);
        const { blockQuoteEnabled, bulletPointsEnabled, emojiSize, floatingToolbarEnabled, groupMetadata, highlightedBotCommands, inlineCodeEnabled, internLinksEnabled, linksEnabled, multilineQuotesEnabled, numberedListEnabled, phoneNumbersEnabled, spoilerEnabled, textFormatEnabled, textFormatShortcutsEnabled, transformTextEmoji } = e;
        const blockQuoteEnabled_1 = blockQuoteEnabled === undefined ? false : blockQuoteEnabled;
        const S = bulletPointsEnabled === undefined ? false : bulletPointsEnabled;
        const R = floatingToolbarEnabled === undefined ? false : floatingToolbarEnabled;
        const inlineCodeEnabled_1 = inlineCodeEnabled === undefined ? false : inlineCodeEnabled;
        const internLinksEnabled_1 = internLinksEnabled === undefined ? false : internLinksEnabled;
        const linksEnabled_1 = linksEnabled === undefined ? false : linksEnabled;
        const I = multilineQuotesEnabled === undefined ? false : multilineQuotesEnabled;
        const T = numberedListEnabled === undefined ? false : numberedListEnabled;
        const phoneNumbersEnabled_1 = phoneNumbersEnabled === undefined ? false : phoneNumbersEnabled;
        const spoilerEnabled_1 = spoilerEnabled === undefined ? false : spoilerEnabled;
        const $ = textFormatEnabled === undefined ? false : textFormatEnabled;
        const P = textFormatShortcutsEnabled === undefined ? false : textFormatShortcutsEnabled;
        const transformTextEmoji_1 = transformTextEmoji === undefined ? true : transformTextEmoji;
        let M;
        if (t[0] !== emojiSize || t[1] !== transformTextEmoji_1) {
            M = s.jsx(r("WAWebEmojisPlugin.react"), {
                emojiSize,
                transformTextEmoji: transformTextEmoji_1
            });
            t[0] = emojiSize;
            t[1] = transformTextEmoji_1;
            t[2] = M;
        } else {
            M = t[2];
        }
        let w;
        if (t[3] !== groupMetadata) {
            w = s.jsx(r("WAWebMentionsPlugin.react"), {
                groupMetadata
            });
            t[3] = groupMetadata;
            t[4] = w;
        } else {
            w = t[4];
        }
        const autoToggleQuoteLine = blockQuoteEnabled_1 && I;
        let F;
        if (t[5] !== S || t[6] !== T || t[7] !== autoToggleQuoteLine) {
            F = s.jsx(r("WAWebTextModifierPlugin"), {
                autoToggleListBulletSymbol: S,
                autoToggleListNumberSymbol: T,
                autoToggleQuoteLine
            });
            t[5] = S;
            t[6] = T;
            t[7] = autoToggleQuoteLine;
            t[8] = F;
        } else {
            F = t[8];
        }
        let O;
        if (t[9] !== blockQuoteEnabled_1 || t[10] !== S || t[11] !== R || t[12] !== highlightedBotCommands || t[13] !== inlineCodeEnabled_1 || t[14] !== internLinksEnabled_1 || t[15] !== linksEnabled_1 || t[16] !== T || t[17] !== phoneNumbersEnabled_1 || t[18] !== spoilerEnabled_1 || t[19] !== $ || t[20] !== P) {
            O = $ && <>{s.jsx(r("WAWebTextFormatPreviewPlugin.react"), {
                bulletPointsEnabled: S,
                numberedListEnabled: T,
                inlineCodeEnabled: inlineCodeEnabled_1,
                blockQuoteEnabled: blockQuoteEnabled_1,
                internLinksEnabled: internLinksEnabled_1,
                phoneNumbersEnabled: phoneNumbersEnabled_1,
                linksEnabled: linksEnabled_1,
                highlightedBotCommands,
                spoilerEnabled: spoilerEnabled_1
            })}{R && s.jsx(o("WAWebFloatingToolbarPlugin.react").FloatingToolbarPlugin, {
                bulletPointsEnabled: S,
                numberedListEnabled: T,
                inlineCodeEnabled: inlineCodeEnabled_1,
                blockQuoteEnabled: blockQuoteEnabled_1
            })}{P && s.jsx(r("WAWebTextFormatShortcutsPlugin.react"), {
                bulletPointsEnabled: S,
                numberedListEnabled: T,
                inlineCodeEnabled: inlineCodeEnabled_1,
                blockQuoteEnabled: blockQuoteEnabled_1
            })}</>;
            t[9] = blockQuoteEnabled_1;
            t[10] = S;
            t[11] = R;
            t[12] = highlightedBotCommands;
            t[13] = inlineCodeEnabled_1;
            t[14] = internLinksEnabled_1;
            t[15] = linksEnabled_1;
            t[16] = T;
            t[17] = phoneNumbersEnabled_1;
            t[18] = spoilerEnabled_1;
            t[19] = $;
            t[20] = P;
            t[21] = O;
        } else {
            O = t[21];
        }
        let B;
        if (t[22] !== M || t[23] !== w || t[24] !== F || t[25] !== O) {
            B = <>{M}{w}{F}{O}</>;
            t[22] = M;
            t[23] = w;
            t[24] = F;
            t[25] = O;
            t[26] = B;
        } else {
            B = t[26];
        }
        return B;
    }
    l.default = u;
}, 98);