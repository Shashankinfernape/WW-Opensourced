__d("WAWebBotModeSelectionProtoUtils", [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotUtils",
    "WAWebProtobufsAICommon.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        if (e === o("WAWebProtobufsAICommon.pb").BotModeSelectionMetadata$BotUserSelectionMode.DEFAULT_MODE) {
            return o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default;
        }
        if (e === o("WAWebProtobufsAICommon.pb").BotModeSelectionMetadata$BotUserSelectionMode.THINK_HARD_MODE) {
            return o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function p(e) {
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default) {
            return o("WAWebProtobufsAICommon.pb").BotModeSelectionMetadata$BotUserSelectionMode.DEFAULT_MODE;
        }
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard) {
            return o("WAWebProtobufsAICommon.pb").BotModeSelectionMetadata$BotUserSelectionMode.THINK_HARD_MODE;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function _(t, n) {
        const i = t.id?.remote;
        if (!(i == null || !o("WAWebBotUtils").isMetaAiBot(i))) {
            const l = n?.botMetadata?.botModeSelectionMetadata;
            if (l == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseBotModeSelectionMetadataProto] no metadata"
                ])));
                return;
            }
            if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
                const p = l.overrideMode;
                if (p != null && p.length > 0) {
                    t.botModeOverride = p;
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[parseBotModeSelectionMetadataProto] override=",
                        ""
                    ])), p.join(", "));
                } else {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[parseBotModeSelectionMetadataProto] no override mode"
                    ])));
                }
            }
            const _ = l.mode;
            if (_ == null || _.length === 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseBotModeSelectionMetadataProto] empty mode array"
                ])));
                return;
            }
            const f = _.map(m);
            t.botModeSelection = f;
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[parseBotModeSelectionMetadataProto] modes=",
                ""
            ])), f.join(", "));
        }
    }
    l.getBotSelectionModeFromProto = m;
    l.getProtoModeFromBotSelectionMode = p;
    l.parseBotModeSelectionMetadataProto = _;
}, 98);