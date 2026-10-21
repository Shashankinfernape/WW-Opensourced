__d("WAWebGroupDescriptionBanner.react", [
    "fbt",
    "WAWebCmd",
    "WAWebConversationBanner.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupDescriptionBanner.stylex",
    "WAWebLinkify",
    "WAWebNonEmptyString",
    "WAWebResizeObserver.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "react",
    "stylex",
    "useWAWebGroupMetadataValues"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useRef, useState } = m;
    function g(e, t) {
        const n = e?.split("\n");
        if (n == null) {
            return undefined;
        }
        return n.slice(0, t).join("\n");
    }
    function h(e) {
        const n = e?.split("\n") ?? [];
        return n.length;
    }
    function YComponent(t) {
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { chat, onClose } = l;
        const y = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(l.groupMetadata?.id, [
            o("WAWebFrontendGroupMetadataGetters").getDisplayedDesc
        ]) ?? [];
        const C = y[0];
        const bRef = useRef(null);
        const vRef = useRef(null);
        const S = useState(function() {
            return o("WAWebNonEmptyString").asMaybeNonEmptyString(C);
        });
        const R = S[0];
        const L = S[1];
        const E = g(R, 1);
        const k = useState(false);
        const I = k[0];
        const T = k[1];
        const D = useState(true);
        const x = D[0];
        const $ = D[1];
        const P = function() {
            o("WAWebCmd").Cmd.chatInfoDrawer(chat, {
                showFullGroupDescription: true
            });
        };
        const N = function({ height }) {
            const o = vRef.current?.getElement()?.offsetHeight ?? 0;
            T(h(R) > 1 || height < o);
        };
        useEffect(function() {
            if (!(!bRef.current || !vRef.current)) {
                const o = bRef.current?.clientHeight ?? 0;
                const a = vRef.current?.getElement()?.offsetHeight ?? 0;
                T(h(R) > 1 || o < a);
                $(false);
            }
        }, [
            R
        ]);
        if (R !== C) {
            L(o("WAWebNonEmptyString").asMaybeNonEmptyString(C));
            T(false);
            $(true);
        }
        if (R == null) {
            return null;
        }
        const formatters = l.chat.isTrusted() ? o("WAWebFormatConfiguration").TrustedGroupDesc({
            links: o("WAWebLinkify").findLinks(R),
            bulletPointsEnabled: true,
            expandedFormattingEnabled: false
        }) : o("WAWebFormatConfiguration").UntrustedGroupDesc({
            bulletPointsEnabled: true,
            expandedFormattingEnabled: false
        });
        const w = <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WAWebGroupDescriptionBanner.stylex").styles.more), {
            role: "button",
            onClick: P,
            children: s._("Read more")
        })}/>;
        const Component = o("WAWebText.react").WAWebTextTitle;
        const Component_1 = o("WAWebEmojiText.react").EmojiText;
        const Component_2 = o("WAWebText.react").WAWebTextSmall;
        const Component_3 = r("WAWebResizeObserver.react");
        const Component_4 = r("WAWebConversationBanner.react");
        const Component_5 = o("WAWebUimUie.react").UIE;
        return <Component_5 displayName="GroupDesc" escapable requestDismiss={onClose}><Component_4 ref={t_ref} onClose={onClose}><Component>{s._("Group description")}</Component><div {...babelHelpers.extends({
            ref: bRef
        }, u.props(o("WAWebGroupDescriptionBanner.stylex").styles.body), {
            children: <Component_3 onResize={N}><Component_2 as="span"><span {...babelHelpers.extends({}, u.props(o("WAWebGroupDescriptionBanner.stylex").styles.text, x && o("WAWebGroupDescriptionBanner.stylex").styles.hidden), {
                children: [
                    <span {...babelHelpers.extends({}, u.props(o("WAWebGroupDescriptionBanner.stylex").styles.desc), {
                        children: <Component_1 ref={vRef} text={E} selectable formatters={formatters} multiline/>
                    })}/>,
                    I && <><span className="xvijh9v">...</span>{w}</>
                ]
            })}/></Component_2></Component_3>
        })}/></Component_4></Component_5>;
    }
    YComponent.displayName = `${YComponent.name} [from ${i.id}]`;
    l.default = YComponent;
}, 226);