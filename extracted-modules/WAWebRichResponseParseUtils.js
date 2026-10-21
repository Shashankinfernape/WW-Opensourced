__d("WAWebRichResponseParseUtils", [
    "WALogger",
    "WAWebProtobufsAICommonDeprecated.pb",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "compactMap",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(fragment) {
        return {
            type: o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown,
            fragment
        };
    }
    function d(e, t) {
        return {
            parseState: o("WAWebRichResponse.flow").RichResponseParseState.Unparsed,
            type: e,
            fragments: t.map(c)
        };
    }
    function m(e) {
        try {
            const { fragments, type } = e;
            const r = p(type);
            const o = fragments.map(f);
            return E(r, o);
        } catch (t) {
            return e;
        }
    }
    function p(type) {
        if (typeof type === "string") {
            return type;
        }
        return _(type);
    }
    function _(type) {
        switch(type){
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseMessageType.AI_RICH_RESPONSE_TYPE_STANDARD:
                return o("WAWebRichResponse.flow").ParsedRichResponseType.Standard;
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseMessageType.AI_RICH_RESPONSE_TYPE_UNKNOWN:
                throw r("err")("parseRichResponseType: Unknown rich response type");
        }
    }
    function f(e) {
        if (e.type !== o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown) {
            return e;
        }
        try {
            return g(e.fragment);
        } catch (t) {
            return e;
        }
    }
    function g(fragment) {
        if (fragment.messageType == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Empty rich response submessage type"
            ]))).tags("wa-web-ai-logging").sendLogs("empty-rich-response-submessage-type", {
                sampling: 0.001
            });
            throw r("err")("getRichResponseFragmentFromSubmessage: Missing message type");
        }
        switch(fragment.messageType){
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT:
                return b(fragment);
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_CODE:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_DYNAMIC:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_GRID_IMAGE:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_INLINE_IMAGE:
                break;
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_TABLE:
                return v(fragment);
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_CONTENT_ITEMS:
                return R(fragment);
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_UNKNOWN:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_LATEX:
            case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseSubMessageType.AI_RICH_RESPONSE_MAP:
                break;
        }
        throw r("err")("Unsupported rich response fragment type");
    }
    function h(e) {
        return e.type !== o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown;
    }
    function y(e) {
        return e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown;
    }
    function C(e, t) {
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "Unknown rich response submessage was of type ",
            ""
        ])), t).tags("wa-web-ai-logging").sendLogs(`missing-rich-submessage-${t}-type-${t}`, {
            sampling: 0.001
        });
    }
    function b(fragment) {
        const e_messageText = fragment.messageText;
        if (e_messageText == null) {
            C(fragment, "text");
            throw r("err")("parseRichResponseTextSubmessage: Missing message text");
        }
        return {
            type: o("WAWebRichResponse.flow").RichResponseFragmentType.Text,
            text: e_messageText
        };
    }
    function v({ tableMetadata }) {
        if (tableMetadata == null) {
            throw r("err")("Missing table");
        }
        const table = tableMetadata.rows.map((e)=>({
                isHeading: e.isHeading ?? false,
                items: e.items
            }));
        return {
            type: o("WAWebRichResponse.flow").RichResponseFragmentType.Table,
            table
        };
    }
    function S(e, { profileIconUrl, thumbnailUrl, title, videoUrl }) {
        if (title == null || profileIconUrl == null || thumbnailUrl == null || videoUrl == null) {
            C(e, "Inline Reels - Missing fields");
            throw r("err")("Missing reel item fields");
        }
        return {
            title,
            profileIconUrl,
            thumbnailUrl,
            videoUrl
        };
    }
    function R(fragment) {
        const e_contentItemsMetadata = fragment.contentItemsMetadata;
        if (e_contentItemsMetadata == null) {
            throw r("err")("Missing content items");
        }
        const n = r("compactMap")(e_contentItemsMetadata.itemsMetadata, function({ reelItem }) {
            if (reelItem != null) {
                return S(fragment, reelItem);
            }
        });
        if (n == null || n.length === 0) {
            throw r("err")("Unsupported ContentItems Type");
        }
        return {
            type: o("WAWebRichResponse.flow").RichResponseFragmentType.ContentItems,
            contentItem: {
                type: o("WAWebRichResponse.flow").RichResponseContentItemsType.Carousel,
                items: n
            }
        };
    }
    function L(fragments) {
        return fragments.reduce((acc, fragment)=>{
            if (h(fragment)) {
                acc.push(fragment);
            }
            return acc;
        }, []);
    }
    function E(e, fragments) {
        if (fragments.every(y)) {
            throw r("err")("No fragments parsed");
        }
        if (fragments.every(h)) {
            return {
                parseState: o("WAWebRichResponse.flow").RichResponseParseState.Parsed,
                type: e,
                fragments: L(fragments)
            };
        }
        return {
            parseState: o("WAWebRichResponse.flow").RichResponseParseState.Partial,
            type: e,
            fragments
        };
    }
    function k(e) {
        if (e == null || e.data == null) {
            return null;
        }
        const byteLength = e.data.byteLength;
        const n = new (o("WAWebUnifiedResponseUtils")).UnifiedResponseQPLLogger;
        n.markerStart({
            int: {
                data_size_bytes: byteLength
            }
        });
        try {
            n.markerPoint("decode_start");
            const a = new TextDecoder("utf-8");
            const i = a.decode(e.data);
            n.markerPoint("decode_end");
            n.markerPoint("json_parse_start");
            const l = JSON.parse(i);
            n.markerPoint("json_parse_end");
            n.markerEnd(2);
            return l;
        } catch (error) {
            n.markerEnd(3);
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Error parsing unified response: ",
                ""
            ])), error).tags("wa-web-ai-logging").sendLogs("unified-response-parsing-error");
            throw r("err")(`parseUnifiedResponse: Error parsing unified response: ${String(error)}`);
        }
    }
    l.generateFutureproofRichResponse = d;
    l.parseRichResponse = m;
    l.parseUnifiedResponse = k;
}, 98);