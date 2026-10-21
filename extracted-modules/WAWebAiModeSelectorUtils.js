__d("WAWebAiModeSelectorUtils", [
    "fbt",
    "WAWebBotModeSelectionTypes",
    "WAWebDynamicAIModesCache",
    "WAWebMetaAiRingAssetResolver",
    "WDSIconIcBolt.react",
    "WDSIconIcShoppingBag.react",
    "WDSIconWdsIcMetaAiReasoning.react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard) {
            return s._("Thinking");
        }
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default || e === null || e === undefined) {
            return s._("Fast");
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function u(e) {
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard) {
            return s._("Thinks longer for in-depth responses");
        }
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default || e === null || e === undefined) {
            return s._("Answers right away");
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function c(e) {
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard) {
            return r("WDSIconWdsIcMetaAiReasoning.react");
        }
        if (e === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default || e === null || e === undefined) {
            return r("WDSIconIcBolt.react");
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function d(e) {
        return ((e)=>{
            if (e === "THINKING") {
                return r("WDSIconWdsIcMetaAiReasoning.react");
            }
            if (e === "SHOPPING") {
                return r("WDSIconIcShoppingBag.react");
            }
            if (e === "FAST") {
                return r("WDSIconIcBolt.react");
            }
            {
                const t = e;
                return o("WAWebMetaAiRingAssetResolver").getMetaAiRingIcon();
            }
        })(e);
    }
    function m() {
        const t = o("WAWebDynamicAIModesCache").getDefaultDynamicAIMode();
        return {
            icon: d(t.type),
            title: String(e()),
            subtitle: String(u())
        };
    }
    l.getBotUserSelectModeTitle = e;
    l.getBotUserSelectModeSubtitle = u;
    l.getBotUserSelectModeIcon = c;
    l.getDynamicModeIcon = d;
    l.getDefaultDynamicResolvedBotMode = m;
}, 226);