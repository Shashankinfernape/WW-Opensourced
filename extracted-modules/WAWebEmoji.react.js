__d("WAWebEmoji.react", [
    "WALogger",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebClassnames",
    "WAWebEmoji",
    "WAWebEmojiAssetLoaderCompletionTracker",
    "WAWebImg.react",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "useWAWebFocusState"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useContext: p, useEffect: _ } = m;
    const f = {
        rawFallback: {
            alignItems: "x6s0dn4",
            display: "x3nfvp2",
            fontFamily: "x19la9d6",
            justifyContent: "xl56j7k",
            lineHeight: "xo5v014",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            verticalAlign: "x16dsc37",
            $$css: true
        },
        rawFallbackSmall: {
            fontSize: "x1c3i2sq",
            height: "x1qx5ct2",
            width: "xw4jnvo",
            $$css: true
        },
        rawFallbackLarge: {
            fontSize: "x1q74xe4",
            height: "x10w6t97",
            width: "x1td3qas",
            $$css: true
        }
    };
    function g(t) {
        const n = p(o("WAWebEmojiAssetLoaderCompletionTracker").InitialEmojisCompletionContext);
        const a = r("useWAWebFocusState")();
        const i = a[0];
        const l = a[1];
        _(function() {
            const r = o("WAWebEmoji").EmojiUtil.getGlyphId(t.emoji);
            if (r != null) {
                n.incrementLoadingEmojisCount();
                o("WAWebAssetLoaderSingleton").AssetLoader.loadEmoji(r, o("WAWebAssetLoader").LOAD_PRIORITY.LAZY_LOAD_EMOJI).catch((n)=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebEmoji] load failed glyph=",
                        " emoji=",
                        " err=",
                        ""
                    ])), r, t.emoji, String(n));
                }).finally(()=>{
                    n.decrementLoadingEmojisCount();
                });
            }
        }, [
            n,
            t.emoji
        ]);
        const { DEPRECATED_className: c, element: m, emoji: g, onLoad: h, selectable: y, selected: C, size: b, src: v, tabIndex: S, xstyle: R } = t;
        const L = o("WAWebEmoji").EmojiUtil.getGlyphId(g);
        if (L == null) {
            const k = Array.from(g).map((e)=>e.codePointAt(0)?.toString(16)).join(" ");
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebEmoji] no glyph, render raw char. codePoints=",
                ""
            ])), k);
            return <span aria-label={g} className={`${c ?? ""} ${(u || (u = r("stylex")))(f.rawFallback, b === "large" ? f.rawFallbackLarge : f.rawFallbackSmall, R)}`} data-ellipsifiable={t.ellipsifiable === true ? "true" : void 0} data-testid={t.testid ?? g}>{g}</span>;
        }
        let I;
        let T;
        if (v == null || v === "") {
            I = o("WAWebEmoji").EmojiUtil.getStyle(L, b);
            T = o("WAWebEmoji").EmojiUtil.getCssClasses(L, b);
        }
        const D = o("WAWebClassnames").classnamesConvertMeToStylexPlease(c, T);
        const x = [
            R,
            C === true || l === true ? o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent : void 0
        ];
        if (m === "span") {
            return <span role="button" ref={i} id={t["data-emoji-index"]?.toString()} data-testid={t.testid ?? g} data-ellipsifiable={t.ellipsifiable === true ? "true" : void 0} data-emoji={g} className={`${D} ${(u || (u = r("stylex")))(x)}`} aria-label={g} style={I} onLoad={h} tabIndex={S} data-unicode={t["data-unicode"]} data-variant={t["data-variant"]} data-emoji-index={t["data-emoji-index"]}/>;
        }
        const Component = r("WAWebImg.react");
        return <Component ref={i} alt={g} className={`${D} ${(u || (u = r("stylex")))(x)}`} draggable={false} ellipsifiable={t.ellipsifiable} onLoad={h} plainText={g} selectable={y} style={I} src={v} onClick={t.onClick} testid={t.testid}/>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    l.default = g;
}, 98);