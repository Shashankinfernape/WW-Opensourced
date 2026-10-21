__d("WAWebUnformatMsg", [
    "WAWebCodeFormatMutator",
    "WAWebCommonMsgUtils",
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebInlineCodeFormatMutator",
    "WAWebMiscGatingUtils",
    "WAWebMsgMentionMap",
    "WAWebPreviewFormatGating",
    "WAWebUnformatSerializer"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        if (!e) {
            e = o("WAWebFormatConfiguration").Unformat({
                mentions: {}
            });
        }
        return e;
    }
    function u(e, t, n) {
        const r = t ?? "";
        if (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type)) {
            const a = o("WAWebFormatConfiguration").RichResponse({
                links: [],
                parseHeadlessHeadings: true,
                parseHeadings: false
            });
            return c(r, a, n);
        }
        const mentions = o("WAWebMsgMentionMap").calculateMsgMentionMap(e);
        const l = o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e);
        if (!mentions && !l) {
            return c(r, s(), n);
        }
        if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
            const u = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
            if (u) {
                const d = o("WAWebFormatConfiguration").FormattedGroupNotification({
                    mentions,
                    groupMentions: l,
                    groupMetadata: u
                });
                return c(r, d, n);
            }
        }
        const m = o("WAWebFormatConfiguration").FormattedNotification({
            mentions,
            groupMentions: l
        });
        return c(r, m, n);
    }
    function c(e, t, spoilerReplacement) {
        if (spoilerReplacement == null) {
            return r("WAWebFormat")(e, t, r("WAWebUnformatSerializer"));
        }
        const a = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
        const i = o("WAWebFormatConfiguration").NotificationSpoilerMask({
            parseBlockCode: a,
            parseInlineCode: a
        });
        const l = [].concat(i, t.filter((e)=>!a || e.every(([t])=>t !== o("WAWebCodeFormatMutator").Code && t !== r("WAWebInlineCodeFormatMutator"))));
        return r("WAWebFormat")(e, l, r("WAWebUnformatSerializer"), {
            serializerOptions: {
                spoilerReplacement
            }
        });
    }
    l.default = u;
}, 98);