__d("WAWebTextFormatParser", [
    "$InternalEnum",
    "WAWebBlockQuoteFormatMutator",
    "WAWebBoldFormatMutator",
    "WAWebBotCommandFormatMutator",
    "WAWebBulletedListItemFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebFormat",
    "WAWebFormatSerializer",
    "WAWebHelpersFindPhoneNumbers",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkFormatMutator",
    "WAWebLinkify",
    "WAWebNumberedListItemFormatMutator",
    "WAWebPhoneNumberFormatMutator",
    "WAWebSpoilerFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "cr:9051",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = "*";
    const s = "_";
    const u = "~";
    const c = "||";
    const d = "```";
    const m = "`";
    const p = ">";
    const _ = "*";
    const f = "-";
    const g = n("$InternalEnum").Mirrored([
        "Bold",
        "Italic",
        "Strikethrough",
        "Spoiler",
        "Code",
        "InlineCode",
        "BlockQuote",
        "BotCommand",
        "BulletedListItem",
        "HyphenListItem",
        "NumberedListItem",
        "Link"
    ]);
    const h = new Set([
        g.BulletedListItem,
        g.HyphenListItem
    ]);
    const y = new Set([
        g.Bold,
        g.Italic,
        g.Strikethrough,
        g.Spoiler,
        g.Code,
        g.InlineCode
    ]);
    function C(t, a) {
        switch(t){
            case r("WAWebBoldFormatMutator"):
                return {
                    format: g.Bold,
                    symbol: e
                };
            case r("WAWebItalicFormatMutator"):
                return {
                    format: g.Italic,
                    symbol: s
                };
            case r("WAWebStrikethroughFormatMutator"):
                return {
                    format: g.Strikethrough,
                    symbol: u
                };
            case r("WAWebSpoilerFormatMutator"):
                return {
                    format: g.Spoiler,
                    symbol: c
                };
            case o("WAWebBulletedListItemFormatMutator").BulletedListItemWithEmpty:
                return {
                    format: g.BulletedListItem,
                    symbol: _
                };
            case o("WAWebBulletedListItemFormatMutator").HyphenListItemWithEmpty:
                return {
                    format: g.HyphenListItem,
                    symbol: f
                };
            case o("WAWebNumberedListItemFormatMutator").NumberedListItemWithEmpty:
                return {
                    format: g.NumberedListItem,
                    symbol: a[1]
                };
            case r("WAWebInlineCodeFormatMutator"):
                return {
                    format: g.InlineCode,
                    symbol: m
                };
            case o("WAWebBlockQuoteFormatMutator").BlockQuoteWithEmpty:
                return {
                    format: g.BlockQuote,
                    symbol: p
                };
            case o("WAWebCodeFormatMutator").Code:
                return {
                    format: g.Code,
                    symbol: d
                };
            case o("WAWebBotCommandFormatMutator").BotCommand:
                return {
                    format: g.BotCommand,
                    symbol: ""
                };
            case n("cr:9051"):
            case r("WAWebPhoneNumberFormatMutator"):
            case r("WAWebLinkFormatMutator"):
                return {
                    format: g.Link,
                    symbol: ""
                };
            default:
                throw r("err")("Unknown format mutator");
        }
    }
    const b = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.onDelimiter = function() {
            return null;
        };
        t.onMutator = function(t, n, r) {
            const e = C(t, r);
            const { format, symbol } = e;
            return {
                format,
                symbol,
                children: n.filter(Boolean)
            };
        };
        t.onRoot = function(t) {
            return {
                children: t.filter(Boolean)
            };
        };
        t.onText = function(t) {
            return {
                text: t
            };
        };
        return t;
    })(r("WAWebFormatSerializer"));
    const v = (t, { blockQuoteEnabled = false, bulletPointsEnabled = false, highlightedBotCommands, inlineCodeEnabled = false, internLinksEnabled = false, linksEnabled = false, numberedListEnabled = false, phoneNumbersEnabled = false, spoilerEnabled = false })=>[
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {}
                ]
            ],
            bulletPointsEnabled ? [
                [
                    o("WAWebBulletedListItemFormatMutator").BulletedListItemWithEmpty,
                    {}
                ]
            ] : null,
            bulletPointsEnabled ? [
                [
                    o("WAWebBulletedListItemFormatMutator").HyphenListItemWithEmpty,
                    {}
                ]
            ] : null,
            numberedListEnabled ? [
                [
                    o("WAWebNumberedListItemFormatMutator").NumberedListItemWithEmpty,
                    {}
                ]
            ] : null,
            blockQuoteEnabled ? [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuoteWithEmpty,
                    {}
                ]
            ] : null,
            inlineCodeEnabled ? [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {}
                ]
            ] : null,
            spoilerEnabled ? [
                [
                    r("WAWebSpoilerFormatMutator"),
                    {}
                ]
            ] : null,
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {}
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {}
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {}
                ]
            ],
            linksEnabled ? [
                [
                    r("WAWebLinkFormatMutator"),
                    {
                        links: o("WAWebLinkify").findLinks(t)
                    }
                ]
            ] : null,
            phoneNumbersEnabled ? [
                [
                    r("WAWebPhoneNumberFormatMutator"),
                    {
                        phoneNumbers: o("WAWebHelpersFindPhoneNumbers").findPhoneNumbers(t)
                    }
                ]
            ] : null,
            internLinksEnabled && n("cr:9051") ? [
                [
                    n("cr:9051"),
                    {}
                ]
            ] : null,
            highlightedBotCommands ? [
                [
                    o("WAWebBotCommandFormatMutator").BotCommand,
                    {
                        commands: highlightedBotCommands
                    }
                ]
            ] : null
        ].filter(Boolean);
    function S(e, t) {
        const n = r("WAWebFormat")(e, v(e, t ?? {}), b);
        const o = R(n);
        if (o !== e) {
            return null;
        }
        return n;
    }
    function R(e) {
        let t = "";
        for (const n of e.children){
            t += L(n);
        }
        return t;
    }
    function L(e) {
        if (e.text != null) {
            return e.text;
        }
        if (e.children) {
            let t = e.symbol;
            for (const n of e.children){
                t += L(n);
            }
            if (y.has(e.format)) {
                t += e.symbol;
            }
            return t;
        }
        throw r("err")("should never reach here");
    }
    l.FormatType = g;
    l.BulletedListItemFormats = h;
    l.parseText = S;
}, 98);