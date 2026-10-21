__d("WAWebFormatConfiguration", [
    "WAWebBlockQuoteFormatMutator",
    "WAWebBoldFormatMutator",
    "WAWebBulletedListFormatMutator",
    "WAWebBulletedListItemFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebEmojiFormatMutator",
    "WAWebGroupMentionFormatMutator",
    "WAWebHeadingFormatMutator",
    "WAWebHighlightFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkFormatMutator",
    "WAWebNoop",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemFormatMutator",
    "WAWebPreviewFormatGating",
    "WAWebRawGroupMentionFormatMutator",
    "WAWebRawMentionMutator",
    "WAWebRawShortNameMentionFormatMutator",
    "WAWebSpoilerFormatMutator",
    "WAWebSpoilerGating",
    "WAWebStatusLinkFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "WAWebTextMentionFormatMutator",
    "cr:6000",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebHighlightFormatMutator"));
    e.compatibility = true;
    function s({ messageHasSpoiler, selectable, spoilerInteractive, spoilerRevealContext }) {
        if (messageHasSpoiler !== true || !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) {
            return null;
        }
        return [
            [
                r("WAWebSpoilerFormatMutator"),
                {
                    selectable,
                    spoilerInteractive,
                    spoilerRevealContext
                }
            ]
        ];
    }
    function u({ parseBlockCode = false, parseInlineCode = false } = {}) {
        return [].concat(parseBlockCode ? [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {}
                ]
            ]
        ] : [], parseInlineCode ? [
            [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {}
                ]
            ]
        ] : [], [
            [
                [
                    r("WAWebSpoilerFormatMutator"),
                    {}
                ]
            ]
        ]);
    }
    function c(e = {}) {
        const t = e;
        const { emojiXstyle, selectable } = t;
        return [
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable,
                        emojiXstyle
                    }
                ]
            ]
        ];
    }
    function d({ selectable: e_selectable } = {}) {
        return [
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable: e_selectable,
                        size: "large"
                    }
                ]
            ]
        ];
    }
    function m(e = {}) {
        const t = e;
        const { dataTab, emojiXstyle, links, linkXstyle, selectable } = t;
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebStatusLinkFormatMutator").StatusLink,
                    {
                        links,
                        selectable,
                        linkXstyle,
                        dataTab
                    }
                ]
            ],
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable,
                        size: "xlarge",
                        emojiXstyle
                    }
                ]
            ]
        ];
    }
    function p(e = {}) {
        const t = e;
        const { links, linkXstyle, selectable } = t;
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebStatusLinkFormatMutator").StatusLink,
                    {
                        links,
                        selectable,
                        linkXstyle
                    }
                ]
            ],
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]
        ];
    }
    function _(e = {}) {
        const t = e;
        const { emojiXstyle, selectable } = t;
        return [
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable,
                        emojiXstyle
                    }
                ]
            ]
        ];
    }
    function f({ boundary, groupMentions, groupMetadata, mentions, messageHasSpoiler, previewRichFormat, selectable, terms }) {
        const p = s({
            messageHasSpoiler,
            selectable
        });
        const _ = previewRichFormat === true && o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
        const f = _ ? e : r("WAWebHighlightFormatMutator");
        return [].concat(_ ? [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]
        ] : [], [
            [
                [
                    r("WAWebTextMentionFormatMutator"),
                    {
                        groupMetadata,
                        mentions,
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebGroupMentionFormatMutator").GroupMention,
                    {
                        groupMentions,
                        selectable,
                        clickable: false
                    }
                ]
            ]
        ], p != null ? [
            p
        ] : [], [
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    f,
                    {
                        terms,
                        boundary,
                        selectable,
                        ignoreDiacritics: true
                    }
                ]
            ]
        ]);
    }
    function g({ emojiXstyle, terms }) {
        return [
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        emojiXstyle,
                        selectable: false
                    }
                ]
            ],
            [
                [
                    r("WAWebHighlightFormatMutator"),
                    {
                        terms,
                        ignoreDiacritics: true
                    }
                ]
            ]
        ];
    }
    function h(e = {}) {
        const t = e;
        const { groupMentions, groupMetadata, isDraftMessage, mentions, messageHasSpoiler, selectable } = t;
        const d = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
        const m = [];
        if (d) {
            m.push([
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ]);
            m.push([
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]);
        }
        if (mentions) {
            m.push([
                [
                    r("WAWebTextMentionFormatMutator"),
                    {
                        mentions,
                        selectable,
                        lastMessage: true,
                        isDraftMessage,
                        groupMetadata
                    }
                ]
            ]);
        }
        if (groupMentions) {
            m.push([
                [
                    o("WAWebGroupMentionFormatMutator").GroupMention,
                    {
                        groupMentions,
                        selectable,
                        clickable: false,
                        lastMessage: true,
                        isDraftMessage
                    }
                ]
            ]);
        }
        const p = s({
            messageHasSpoiler,
            selectable
        });
        if (p != null) {
            m.push(p);
        }
        if (d) {
            m.push([
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]);
        }
        m.push([
            [
                r("WAWebEmojiFormatMutator"),
                {
                    selectable
                }
            ]
        ]);
        return m;
    }
    function y({ boundary, groupMentions, groupMetadata, mentions, messageHasSpoiler, selectable, terms }) {
        const m = s({
            messageHasSpoiler,
            selectable
        });
        const p = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
        const _ = p ? e : r("WAWebHighlightFormatMutator");
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ]
        ].concat(p ? [
            [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]
        ] : [], [
            [
                [
                    r("WAWebTextMentionFormatMutator"),
                    {
                        groupMetadata,
                        mentions,
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebGroupMentionFormatMutator").GroupMention,
                    {
                        groupMentions,
                        selectable,
                        clickable: false
                    }
                ]
            ]
        ], m != null ? [
            m
        ] : [], [
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    _,
                    {
                        terms,
                        boundary,
                        selectable
                    }
                ]
            ]
        ]);
    }
    function C({ selectable: e_selectable } = {}) {
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable: e_selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable: e_selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable: e_selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable: e_selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable: e_selectable
                    }
                ]
            ]
        ];
    }
    function b({ groupMentions, mentions, selectable }) {
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebTextMentionFormatMutator"),
                    {
                        mentions,
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebGroupMentionFormatMutator").GroupMention,
                    {
                        groupMentions,
                        selectable,
                        clickable: false
                    }
                ]
            ],
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuote,
                    {
                        selectable
                    }
                ]
            ]
        ].filter(Boolean);
    }
    function v({ groupMentions, mentions, messageHasSpoiler, selectable, spoilerRevealContext }) {
        const u = s({
            messageHasSpoiler,
            selectable,
            spoilerInteractive: true,
            spoilerRevealContext
        });
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable,
                        quoted: true
                    }
                ]
            ],
            [
                [
                    o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebBulletedListFormatMutator"),
                    {
                        selectable,
                        quoted: true
                    }
                ]
            ],
            [
                [
                    o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebNumberedListFormatMutator"),
                    {
                        selectable,
                        quoted: true
                    }
                ]
            ],
            [
                [
                    r("WAWebTextMentionFormatMutator"),
                    {
                        mentions,
                        selectable,
                        theme: {
                            quoted: true
                        }
                    }
                ]
            ],
            [
                [
                    o("WAWebGroupMentionFormatMutator").GroupMention,
                    {
                        groupMentions,
                        selectable,
                        theme: {
                            quoted: true
                        },
                        clickable: false
                    }
                ]
            ]
        ].concat(u != null ? [
            u
        ] : [], [
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuote,
                    {
                        selectable,
                        quoted: true
                    }
                ]
            ]
        ]).filter(Boolean);
    }
    function S({ groupMentions, mentions, selectable }) {
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebRawMentionMutator"),
                    {
                        mentions,
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebRawGroupMentionFormatMutator").RawGroupMention,
                    {
                        groupMentions
                    }
                ]
            ],
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]
        ].filter(Boolean);
    }
    function R({ groupMentions, groupMetadata, mentions, selectable }) {
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebRawShortNameMentionFormatMutator"),
                    {
                        mentions,
                        selectable,
                        groupMetadata
                    }
                ]
            ],
            [
                [
                    o("WAWebRawGroupMentionFormatMutator").RawGroupMention,
                    {
                        groupMentions
                    }
                ]
            ],
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuote,
                    {
                        selectable
                    }
                ]
            ]
        ].filter(Boolean);
    }
    function L(e) {
        const e_links = e.links;
        const i = !!e.expandedFormattingEnabled;
        const l = !!(e.bulletPointsEnabled ?? i);
        const s = true;
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable: s
                    }
                ]
            ],
            i ? [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable: s
                    }
                ]
            ] : null,
            l ? [
                [
                    o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                    {
                        selectable: s
                    }
                ]
            ] : null,
            l ? [
                [
                    o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                    {
                        selectable: s
                    }
                ]
            ] : null,
            l ? [
                [
                    r("WAWebBulletedListFormatMutator"),
                    {
                        selectable: s
                    }
                ]
            ] : null,
            i ? [
                [
                    o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                    {
                        selectable: s
                    }
                ]
            ] : null,
            i ? [
                [
                    r("WAWebNumberedListFormatMutator"),
                    {
                        selectable: s
                    }
                ]
            ] : null,
            [
                [
                    r("WAWebLinkFormatMutator"),
                    {
                        links: e_links,
                        selectable: s
                    }
                ]
            ],
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable: s
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable: s
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable: s
                    }
                ]
            ],
            !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(s) : null,
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable: s
                    }
                ]
            ],
            i ? [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuote,
                    {
                        selectable: s
                    }
                ]
            ] : null
        ].filter(Boolean);
    }
    function E(e) {
        const a = !!(e != null && e.expandedFormattingEnabled);
        const i = !!(e?.bulletPointsEnabled ?? a);
        const l = true;
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable: l
                    }
                ]
            ],
            a ? [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable: l
                    }
                ]
            ] : null,
            i ? [
                [
                    o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                    {
                        selectable: l
                    }
                ]
            ] : null,
            i ? [
                [
                    o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                    {
                        selectable: l
                    }
                ]
            ] : null,
            i ? [
                [
                    r("WAWebBulletedListFormatMutator"),
                    {
                        selectable: l
                    }
                ]
            ] : null,
            a ? [
                [
                    o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                    {
                        selectable: l
                    }
                ]
            ] : null,
            a ? [
                [
                    r("WAWebNumberedListFormatMutator"),
                    {
                        selectable: l
                    }
                ]
            ] : null,
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable: l
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable: l
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable: l
                    }
                ]
            ],
            !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(l) : null,
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable: l
                    }
                ]
            ],
            a ? [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuote,
                    {
                        selectable: l
                    }
                ]
            ] : null
        ].filter(Boolean);
    }
    function k(e = {}) {
        const t = e;
        const { links, selectable, trusted } = t;
        return [
            trusted === true ? [
                [
                    r("WAWebLinkFormatMutator"),
                    {
                        links,
                        selectable
                    }
                ]
            ] : null,
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ]
        ].filter(Boolean);
    }
    function I(e = {}) {
        const t = e;
        const { groupMentions, isDraftMessage, mentions, messageHasSpoiler, selectable, spoilerRevealContext } = t;
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                    {
                        selectable,
                        inline: true
                    }
                ]
            ],
            [
                [
                    o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                    {
                        selectable,
                        inline: true
                    }
                ]
            ],
            [
                [
                    r("WAWebBulletedListFormatMutator"),
                    {
                        selectable,
                        inline: true
                    }
                ]
            ],
            [
                [
                    o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                    {
                        selectable,
                        inline: true
                    }
                ]
            ],
            [
                [
                    r("WAWebNumberedListFormatMutator"),
                    {
                        selectable,
                        inline: true
                    }
                ]
            ],
            mentions ? [
                [
                    r("WAWebTextMentionFormatMutator"),
                    {
                        mentions,
                        selectable,
                        lastMessage: true,
                        isDraftMessage
                    }
                ]
            ] : null,
            groupMentions ? [
                [
                    o("WAWebGroupMentionFormatMutator").GroupMention,
                    {
                        groupMentions,
                        selectable,
                        clickable: false,
                        lastMessage: true,
                        isDraftMessage
                    }
                ]
            ] : null,
            s({
                messageHasSpoiler,
                selectable,
                spoilerInteractive: true,
                spoilerRevealContext
            }),
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuote,
                    {
                        selectable,
                        inline: true
                    }
                ]
            ]
        ].filter(Boolean);
    }
    function T({ selectable, parseHeadings = true, parseHeadlessHeadings = false, parseLists = true, parseQuotes = true, parseInlineCode = true, showLinks = true, links, onLinkClick = r("WAWebNoop") }) {
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable
                    }
                ]
            ],
            parseInlineCode ? [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable
                    }
                ]
            ] : null,
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebItalicFormatMutator"),
                    {
                        selectable
                    }
                ],
                [
                    r("WAWebStrikethroughFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            [
                [
                    r("WAWebEmojiFormatMutator"),
                    {
                        selectable
                    }
                ]
            ],
            parseQuotes ? [
                [
                    o("WAWebBlockQuoteFormatMutator").BlockQuote,
                    {
                        selectable
                    }
                ]
            ] : null,
            parseLists ? [
                [
                    o("WAWebBulletedListItemFormatMutator").BulletedListItem,
                    {
                        selectable
                    }
                ]
            ] : null,
            parseLists ? [
                [
                    o("WAWebBulletedListItemFormatMutator").HyphenListItem,
                    {
                        selectable
                    }
                ]
            ] : null,
            parseLists ? [
                [
                    r("WAWebBulletedListFormatMutator"),
                    {
                        selectable
                    }
                ]
            ] : null,
            parseLists ? [
                [
                    o("WAWebNumberedListItemFormatMutator").NumberedListItem,
                    {
                        selectable
                    }
                ]
            ] : null,
            parseLists ? [
                [
                    r("WAWebNumberedListFormatMutator"),
                    {
                        selectable
                    }
                ]
            ] : null,
            showLinks ? [
                [
                    r("WAWebLinkFormatMutator"),
                    {
                        links,
                        selectable,
                        onLinkClick
                    }
                ]
            ] : null,
            parseHeadings ? [
                [
                    o("WAWebHeadingFormatMutator").AIRichResponseHeading,
                    {
                        selectable
                    }
                ]
            ] : null,
            parseHeadlessHeadings ? [
                [
                    o("WAWebHeadingFormatMutator").HeadlessHeading,
                    {
                        selectable
                    }
                ]
            ] : null
        ].filter(Boolean);
    }
    l.spoilerMutatorEntry = s;
    l.NotificationSpoilerMask = u;
    l.EmojiOnly = c;
    l.LargeEmojiOnly = d;
    l.StatusText = m;
    l.StatusCaption = p;
    l.Compatibility = _;
    l.Search = f;
    l.SearchName = g;
    l.LastMessage = h;
    l.FTSMessage = y;
    l.QuickReply = C;
    l.Unformat = b;
    l.QuotedMention = v;
    l.FormattedNotification = S;
    l.FormattedGroupNotification = R;
    l.TrustedGroupDesc = L;
    l.UntrustedGroupDesc = E;
    l.HeaderAndFooter = k;
    l.InlineMessage = I;
    l.RichResponse = T;
}, 98);