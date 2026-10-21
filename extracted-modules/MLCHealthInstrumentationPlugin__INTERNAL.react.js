__d("MLCHealthInstrumentationPlugin__INTERNAL.react", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "MLCInstrumentationCommands",
    "MlcHealthBizappEventFalcoEvent",
    "MlcHealthFacebookAndWorkplaceEventFalcoEvent",
    "MlcHealthFacebookEventFalcoEvent",
    "MlcHealthInstagramEventFalcoEvent",
    "MlcHealthInternalToolsEventFalcoEvent",
    "MlcHealthMessagingLightswitchEventFalcoEvent",
    "MlcHealthWorkplaceEventFalcoEvent",
    "react",
    "vulture"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useLayoutEffect = (e || (e = o("react"))).useLayoutEffect;
    const u = new Set;
    function c(policyProduct) {
        switch(policyProduct){
            case "facebook":
                return r("MlcHealthFacebookEventFalcoEvent");
            case "workplace":
                return r("MlcHealthWorkplaceEventFalcoEvent");
            case "facebook_and_workplace":
                return r("MlcHealthFacebookAndWorkplaceEventFalcoEvent");
            case "internal_tools":
                return r("MlcHealthInternalToolsEventFalcoEvent");
            case "messaging_lightswitch":
                return r("MlcHealthMessagingLightswitchEventFalcoEvent");
            case "bizapp":
                return r("MlcHealthBizappEventFalcoEvent");
            case "instagram":
                return r("MlcHealthInstagramEventFalcoEvent");
            default:
                return null;
        }
    }
    function d(policyProduct, surface, event) {
        c(policyProduct)?.log(function() {
            return {
                event,
                surface
            };
        });
    }
    function m({ policyProduct, surface }) {
        const a = o("LexicalComposerContext").useLexicalComposerContext();
        const i = a[0];
        useLayoutEffect(function() {
            let e = function() {};
            if (!u.has(surface)) {
                e = i.registerUpdateListener(function({ dirtyLeaves, tags }) {
                    r("vulture")("FG30ZHVALPa2svYkX3uX3CGRvK4=");
                    if (u.has(surface)) {
                        e();
                        return;
                    }
                    if (!(dirtyLeaves.size === 0 || tags.has("history-merge") || !i.isEditable())) {
                        u.add(surface);
                        d(policyProduct, surface, "daily_interaction_with_surface");
                        e();
                    }
                });
            }
            return o("LexicalUtils").mergeRegister(e, i.registerCommand(o("MLCInstrumentationCommands").COMMIT_COMMAND, function(e) {
                if (e === "create") {
                    d(policyProduct, surface, "commit_create");
                } else {
                    d(policyProduct, surface, "commit_edit");
                }
                return false;
            }, o("Lexical").COMMAND_PRIORITY_CRITICAL));
        }, [
            i,
            policyProduct,
            surface
        ]);
        return null;
    }
    l.default = m;
}, 98);