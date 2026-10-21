__d("WAWebRichResponseCopyText", [
    "WAWebCompactMapString",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return !!(e.richResponse != null && e.richResponse.parseState !== o("WAWebRichResponse.flow").RichResponseParseState.Unparsed || o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e));
    }
    function s(e) {
        return e.table.map((e)=>`| ${e.items.join(" | ")} |`).join("\n");
    }
    function u(e) {
        const t = r("WAWebCompactMapString")(e.fragments, function(e) {
            if (e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Text) {
                return e.text;
            }
            if (e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Table) {
                return s(e);
            }
            return null;
        });
        if (t.length === 0) {
            return null;
        }
        return t.join("\n");
    }
    l.canCopyRichResponseMessage = e;
    l.getRichResponseCopyText = u;
}, 98);