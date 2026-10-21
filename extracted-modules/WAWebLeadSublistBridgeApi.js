__d("WAWebLeadSublistBridgeApi", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebLeadSublistChangeNotifier",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = {
        syncLeadSublist: function() {
            o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged();
        },
        removeLeadSublistFromCollection: function() {
            o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged();
        },
        leadRemovedFromChat: function({ chatJid }) {
            return r("JSResourceForInteraction")("WAWebSyncLeadStageToProfile").__setRef("WAWebLeadSublistBridgeApi").load().then(({ clearLeadStageOnProfile, getLeadProfileChatJidForChatJid })=>{
                const o = getLeadProfileChatJidForChatJid(chatJid);
                if (o != null) {
                    clearLeadStageOnProfile(o);
                }
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] lead removal: loading the stage writer failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("lead-removed-clear-stage-load-failed");
            });
        },
        serverLeadStageApplied: function({ profileChatJid }) {
            o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged();
            o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(o("WAWebWidToJid").widToChatJid(o("WAWebWidFactory").createWid(profileChatJid)));
        },
        startServerLeadStageRepull: function() {
            return r("JSResourceForInteraction")("WAWebServerLeadStageRepull").__setRef("WAWebLeadSublistBridgeApi").load().then(({ startServerLeadStageRepull })=>startServerLeadStageRepull()).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] loading the lead stage re-pull failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("lead-stage-repull-load-failed");
            });
        },
        repullServerLeadStages: function() {
            return r("JSResourceForInteraction")("WAWebServerLeadStageRepull").__setRef("WAWebLeadSublistBridgeApi").load().then(({ repullServerLeadStages })=>repullServerLeadStages()).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] loading the lead stage bulk re-pull failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("lead-stage-bulk-repull-load-failed");
            });
        }
    };
    l.LeadSublistBridgeApi = c;
}, 98);