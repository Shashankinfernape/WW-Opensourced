__d("WAWebScheduledChatPreview.react", [
    "fbt",
    "WABidi",
    "WAReplaceRepeatingWhitespace",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebL10N",
    "WAWebPreviewFormatGating",
    "WAWebWid",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        label: {
            flexShrink: "x2lah0s",
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function d({ body, groupMetadata, isImage, mentionedJidList }) {
        const l = body != null && body !== "";
        const mentions = {};
        if (mentionedJidList != null) {
            for (const m of mentionedJidList){
                mentions[`@${r("WAWebWid").user(m) ?? ""}`] = o("WAWebContactCollection").ContactCollection.gadd(m);
            }
        }
        let _;
        if (isImage) {
            _ = l ? `📷 ${r("WAReplaceRepeatingWhitespace")(body ?? "", true)}` : s._("📷 Photo");
        } else {
            _ = l ? r("WAReplaceRepeatingWhitespace")(body ?? "", true) : s._("You scheduled a message");
        }
        const f = l ? o("WABidi").bidiDir(body ?? "") : undefined;
        const dirMismatch = l && f === "rtl" !== r("WAWebL10N").isRTL();
        const h = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebFlex.react").FlexRow;
        return <Component_1 testid="chat_list_scheduled_message_preview"><Component type="Body2Emphasized" colorName="accent" xstyle={c.label}>{s._("Scheduled")}: </Component>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: _,
            direction: l ? f : "inherit",
            dirMismatch,
            formatters: o("WAWebFormatConfiguration").LastMessage({
                mentions,
                groupMentions: {},
                groupMetadata: h && groupMetadata != null ? groupMetadata : undefined
            }),
            ellipsify: true,
            inlineblock: true,
            previewMode: h
        }, "scheduled")}</Component_1>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);