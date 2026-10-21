__d("WAWebBroadcastName.react", [
    "WAArrayMoveToFirst",
    "WAWebChatGetters",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebLabels.react",
    "react",
    "useWAWebChatValues",
    "useWAWebForceUpdate",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        labelIconPadding: {
            paddingInlineStart: "x181vq82",
            $$css: true
        }
    };
    function CComponent(e) {
        "use no forget";
        const { breakWord, chat, className, element, ellipsify, firstLabel, highlightText, labels, onClick, selectable, showLabelIcon } = e;
        const y = showLabelIcon === undefined ? false : showLabelIcon;
        const { testid, titlify, xstyle } = e;
        const S = o("useWAWebChatValues").useOptionalChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getFormattedTitle,
            o("WAWebFrontendChatGetters").getBroadcastMetadata
        ]) ?? [
            chat.formattedTitle,
            chat.broadcastMetadata
        ];
        const R = S[0];
        const L = S[1];
        const E = L?.recipients;
        const k = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(E, [
            "add",
            "remove",
            "reset"
        ], k);
        const I = o("useWAWebChatValues").useOptionalChatValues(chat.id, [
            o("WAWebChatGetters").getLabels
        ]) ?? [];
        const T = I[0];
        const D = highlightText != null && highlightText !== "" ? o("WAWebFormatConfiguration").SearchName({
            terms: highlightText.split(/\s+/).filter(Boolean)
        }) : undefined;
        const x = labels || T;
        if (x?.length && firstLabel != null) {
            r("WAArrayMoveToFirst")(x, firstLabel);
        }
        const $ = y === true && x != null && x.length ? s.jsx(o("WAWebLabels.react").Labels, {
            labels: x,
            showName: false,
            iconXstyle: u.labelIconPadding
        }) : null;
        const Component = o("WAWebEmojiText.react").EmojiText;
        const P = <Component text={R} element={element} className={className} xstyle={xstyle} formatters={D} titlify={titlify} ellipsify={ellipsify} breakWord={breakWord} direction="auto" inlineblock onClick={onClick} testid={testid} selectable={selectable}/>;
        return <span className="x6s0dn4 x3nfvp2 x1c4vz4f xuce83p x1bft6iq x1i7k8ik xq9mrsl">{P}{$}</span>;
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    l.BroadcastName = CComponent;
}, 98);