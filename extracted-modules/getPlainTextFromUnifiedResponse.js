__d("getPlainTextFromUnifiedResponse", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e.code_blocks.map((e)=>e.content).join("");
    }
    function l(e) {
        return e.replace(/\{\{([^\s\}]+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, "$2");
    }
    function s(e) {
        return l(e.text);
    }
    function u(e) {
        return e.rows.map((e)=>e.cells.join(" | ")).join("\n");
    }
    function c(e) {
        if (e.item != null) {
            return e.item.latex_expression;
        }
        return e.latex_expression;
    }
    function d(t) {
        switch(t.__typename){
            case "GenAICodeUXPrimitive":
                return e(t);
            case "GenAIMarkdownTextUXPrimitive":
                return s(t);
            case "GenATableUXPrimitive":
                return u(t);
            case "GenAIBotProgressStatusPrimitive":
                return t.title;
            case "GenAILatexUXPrimitive":
                return c(t);
            case "FOATextPrimitive":
                return l(t.text);
            case "GenAIMetadataTextPrimitive":
                return t.text;
            case "GenAIBotThinkingStatusPrimitive":
                return t.title;
            case "GenAIProductItemCardPrimitive":
                return t.title;
            case "GenAIReelPrimitive":
            case "GenAIPostPrimitive":
            case "GenAIImaginePrimitive":
            case "GenAISearchResultPrimitive":
            case "FOABloksPrimitive":
            case "GenAIDividerPrimitive":
            case "GenAISpacerPrimitive":
                return "";
            default:
                return "";
        }
    }
    function m(e) {
        if (e.__typename === "GenAISingleLayoutViewModel") {
            return [
                e.primitive
            ];
        }
        if (e.__typename === "GenAIGridLayoutViewModel" || e.__typename === "GenAIHScrollLayoutViewModel") {
            return e.primitives;
        }
        return [];
    }
    function p(e) {
        return m(e.view_model).map((e)=>d(e)).filter((e)=>e !== "").join("\n");
    }
    function _(e) {
        if (e == null) {
            return "";
        }
        const t = e.sections;
        return t.map((e)=>p(e)).filter((e)=>e !== "").join("\n");
    }
    i.default = _;
}, 66);