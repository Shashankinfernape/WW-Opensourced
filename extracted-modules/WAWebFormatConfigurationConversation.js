__d("WAWebFormatConfigurationConversation", [
    "WAWebBlockQuoteFormatMutator",
    "WAWebBoldFormatMutator",
    "WAWebBotBaseGating",
    "WAWebBotCommandFormatMutator",
    "WAWebBulletedListFormatMutator",
    "WAWebBulletedListItemFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebEmojiFormatMutator",
    "WAWebFormatConfiguration",
    "WAWebGroupMentionFormatMutator",
    "WAWebHeadingFormatMutator",
    "WAWebHighlightFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkFormatMutator",
    "WAWebMentionAllFormatMutator",
    "WAWebMentionFormatMutator",
    "WAWebNoop",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemFormatMutator",
    "WAWebPhoneNumberFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "cr:6000",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e({ mentions, groupMentions, hasMentionAll, links = [], messageHasSpoiler, phoneNumbers = [], selectable, spoilerInteractive, spoilerRevealContext, trusted = false, fromMe = false, fromChatWid, commands = [], parseInlineCode = false, parseLists = false, parseQuotes = false, parseHeadings = false, onLinkClick = r("WAWebNoop"), terms = null, boldXstyle, codeXstyle, linkXstyle } = {}) {
        const O = trusted && phoneNumbers != null && phoneNumbers.length > 0 ? [
            [
                r("WAWebPhoneNumberFormatMutator"),
                {
                    phoneNumbers,
                    selectable,
                    fromMe
                }
            ]
        ] : null;
        let B;
        if ((o("WAWebBotBaseGating").isBizBot3pEnabled() || o("WAWebBotBaseGating").isBotEnabled()) && commands && commands.length > 0) {
            B = [
                [
                    o("WAWebBotCommandFormatMutator").BotCommand,
                    {
                        commands,
                        selectable
                    }
                ]
            ];
        }
        return [
            [
                [
                    o("WAWebCodeFormatMutator").Code,
                    {
                        selectable,
                        codeXstyle
                    }
                ]
            ],
            parseInlineCode ? [
                [
                    r("WAWebInlineCodeFormatMutator"),
                    {
                        selectable,
                        codeXstyle
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
            o("WAWebFormatConfiguration").spoilerMutatorEntry({
                messageHasSpoiler,
                selectable,
                spoilerInteractive,
                spoilerRevealContext
            }),
            trusted ? [
                [
                    r("WAWebLinkFormatMutator"),
                    {
                        links,
                        selectable,
                        onLinkClick,
                        linkXstyle
                    }
                ]
            ] : null,
            mentions ? [
                [
                    r("WAWebMentionFormatMutator"),
                    {
                        mentions,
                        selectable,
                        fromChatWid
                    }
                ]
            ] : null,
            [
                [
                    r("WAWebMentionAllFormatMutator"),
                    {
                        hasMentionAll,
                        selectable
                    }
                ]
            ],
            parseHeadings ? [
                [
                    o("WAWebHeadingFormatMutator").Heading,
                    {
                        selectable
                    }
                ]
            ] : null,
            groupMentions ? [
                [
                    o("WAWebGroupMentionFormatMutator").GroupMention,
                    {
                        groupMentions,
                        selectable,
                        fromChatWid
                    }
                ]
            ] : null,
            !r("gkx")("26258") && n("cr:6000") ? n("cr:6000")(selectable) : null,
            O,
            [
                [
                    r("WAWebBoldFormatMutator"),
                    {
                        selectable,
                        boldXstyle
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
            B,
            terms != null ? [
                [
                    r("WAWebHighlightFormatMutator"),
                    {
                        terms,
                        ignoreDiacritics: true
                    }
                ]
            ] : null
        ].filter(Boolean);
    }
    l.Conversation = e;
}, 98);