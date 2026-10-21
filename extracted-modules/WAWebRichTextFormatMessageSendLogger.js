__d("WAWebRichTextFormatMessageSendLogger", [
    "WALogger",
    "WAWebABProps",
    "WAWebAdjustDelimitedRange",
    "WAWebBoldFormatRegex",
    "WAWebCodeBlockFormatRegex",
    "WAWebExtractRangesUsingRegex",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebInlineCodeFormatRegex",
    "WAWebItalicFormatRegex",
    "WAWebLinkify",
    "WAWebMsgType",
    "WAWebRichTextFormatMessageSendWamEvent",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
    "WAWebStrikethroughFormatRegex",
    "WAWebViewMode.flow",
    "WAWebWid",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new Set([
        o("WAWebViewMode.flow").ViewModeType.POLL_MEDIA
    ]);
    const c = "`";
    const d = "*";
    const m = "_";
    const p = "~";
    function _(t, n) {
        if (t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL || n.isStatus() || t.viewMode != null && u.has(t.viewMode) || t.forwardedFromWeb === true) {
            return null;
        }
        try {
            return f(t, n);
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[rich_text_format] Failed to classify outgoing message formatting"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("rich-text-format-classification-failed");
            return null;
        }
    }
    function f(e, t) {
        if (!o("WAWebABProps").getABPropConfigValue("rich_format_logging_enabled")) {
            return null;
        }
        const n = h(e).filter(g);
        if (n.length === 0) {
            return null;
        }
        const a = v(n);
        const { hasCodeBlock, hasMonospace, segmentsWithExclusions } = a;
        const c = {
            hasBold: R(r("WAWebBoldFormatRegex"), segmentsWithExclusions, d),
            hasCodeBlock,
            hasItalic: R(r("WAWebItalicFormatRegex"), segmentsWithExclusions, m),
            hasMonospace,
            hasSpoiler: R(o("WAWebSpoilerFormatRegex").SPOILER_REGEX, segmentsWithExclusions),
            hasStrikethrough: R(r("WAWebStrikethroughFormatRegex"), segmentsWithExclusions, p)
        };
        const _ = c.hasSpoiler && !o("WAWebSpoilerGating").isSpoilerSenderEnabled() ? babelHelpers.extends({}, c, {
            hasSpoiler: false
        }) : c;
        if (!Object.values(_).some(Boolean)) {
            return null;
        }
        const chatType = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(t);
        return function() {
            try {
                new (o("WAWebRichTextFormatMessageSendWamEvent")).RichTextFormatMessageSendWamEvent(babelHelpers.extends({
                    chatType
                }, _)).commit();
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[rich_text_format] Failed to commit outgoing message formatting"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("rich-text-format-commit-failed");
            }
        };
    }
    function g(e) {
        return e.parsesBlockCode && S(r("WAWebCodeBlockFormatRegex"), e.text).length > 0 || e.parsesInlineCode && S(r("WAWebInlineCodeFormatRegex"), e.text, c).length > 0 || S(r("WAWebBoldFormatRegex"), e.text, d).length > 0 || S(r("WAWebItalicFormatRegex"), e.text, m).length > 0 || S(r("WAWebStrikethroughFormatRegex"), e.text, p).length > 0 || S(o("WAWebSpoilerFormatRegex").SPOILER_REGEX, e.text).length > 0;
    }
    function h(e) {
        const n = (e.mentionedJidList ?? []).map((e)=>`@${r("WAWebWid").user(e) ?? ""}`).filter((e)=>e !== "@");
        return [].concat(y(e, n), C(e, n), b(e));
    }
    function y(e, t) {
        if ((e.type === o("WAWebMsgType").MSG_TYPE.CHAT || e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) && e.body != null) {
            return [
                {
                    mentionTokens: t,
                    parsesBlockCode: true,
                    parsesInlineCode: true,
                    text: e.body
                }
            ];
        }
        return [];
    }
    function C(e, t) {
        const n = e.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT || e.isCaptionByUser === true;
        if (e.caption != null && n) {
            return [
                {
                    mentionTokens: t,
                    parsesBlockCode: true,
                    parsesInlineCode: true,
                    text: e.caption
                }
            ];
        }
        return [];
    }
    function b(e) {
        const t = [];
        if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
            if (e.pollName != null) {
                t.push({
                    mentionTokens: [],
                    parsesBlockCode: true,
                    parsesInlineCode: false,
                    text: e.pollName
                });
            }
            e.pollOptions?.forEach(function(e) {
                if (e.name != null) {
                    t.push({
                        mentionTokens: [],
                        parsesBlockCode: true,
                        parsesInlineCode: false,
                        text: e.name
                    });
                }
            });
        }
        return t;
    }
    function v(e) {
        const segmentsWithExclusions = e.map((e)=>{
            const t = o("WAWebLinkify").findLinks(e.text, false).map((e)=>({
                    end: e.index + e.url.length,
                    start: e.index
                }));
            const n = E(e.text, e.mentionTokens);
            const a = [].concat(t, n);
            const i = e.parsesBlockCode ? S(r("WAWebCodeBlockFormatRegex"), e.text).filter((e)=>!k(e, a)) : [];
            const l = e.parsesInlineCode ? S(r("WAWebInlineCodeFormatRegex"), e.text, c) : [];
            const s = l.filter((e)=>!L(e, i) && !k(e, a));
            return {
                excludedRanges: [].concat(i, s, a),
                hasBlock: i.length > 0,
                hasInline: s.length > 0,
                text: e.text
            };
        });
        return {
            hasCodeBlock: segmentsWithExclusions.some((e)=>e.hasBlock),
            hasMonospace: segmentsWithExclusions.some((e)=>e.hasInline),
            segmentsWithExclusions
        };
    }
    function S(e, text, n) {
        return r("WAWebExtractRangesUsingRegex")(text, e, 1, n == null ? undefined : r("WAWebAdjustDelimitedRange")(n)).map(([start, , , n])=>({
                start,
                end: n + 1
            }));
    }
    function R(e, segmentsWithExclusions, n) {
        return segmentsWithExclusions.some((t)=>S(e, t.text, n).some((e)=>!L(e, t.excludedRanges)));
    }
    function L(e, t) {
        return t.some((t)=>e.start < t.end && t.start < e.end && !(e.start <= t.start && t.end <= e.end));
    }
    function E(text, mentionTokens) {
        const n = [];
        for (const r of mentionTokens){
            for(let o = text.indexOf(r); o >= 0;){
                n.push({
                    start: o,
                    end: o + r.length
                });
                o = text.indexOf(r, o + r.length);
            }
        }
        return n;
    }
    function k(e, t) {
        return t.some((t)=>t.start <= e.start && e.end <= t.end);
    }
    l.maybeCreateRichTextFormatMessageSendCommit = _;
}, 98);