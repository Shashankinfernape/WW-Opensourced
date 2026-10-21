__d("WAWebCustomLabels3pdSignalUtils", [
    "WALogger",
    "WAWebABProps",
    "WAWebCTWAGatingUtils",
    "WAWebChatModel",
    "WAWebCommonCTWADataSharing",
    "WAWebCustomLabel3pdEventQuery",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebSessionStorage",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXLabelAction",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = "wa_custom_label_";
    function c(custom_label) {
        if (r("WAWebSessionStorage") == null) {
            return null;
        }
        try {
            const t = u + custom_label;
            const n = r("WAWebSessionStorage").getItem(t);
            if (n != null && n !== "") {
                return JSON.parse(n);
            }
        } catch (e) {}
        return null;
    }
    function d(custom_label, t) {
        if (r("WAWebSessionStorage")) {
            try {
                const n = u + custom_label;
                r("WAWebSessionStorage").setItem(n, JSON.stringify(t));
            } catch (e) {}
        }
    }
    function m(e) {
        switch(e){
            case "order_created":
            case "order_updated":
            case "lead_created":
                return e;
            default:
                return null;
        }
    }
    function p(e) {
        switch(e){
            case "processing":
            case "shipped":
            case "completed":
            case "canceled":
            case "new_order":
            case "order_complete":
            case "paid":
            case "pending_payment":
            case "paid_change":
            case "new_customer":
            case "follow_up":
            case "lead":
            case "important":
                return e;
            default:
                return null;
        }
    }
    function _(t, n, a) {
        if (!o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
            const i = n.filter((e)=>e instanceof o("WAWebChatModel").Chat && o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e) != null);
            if (i.length !== 0) {
                const l = [];
                t.forEach((e)=>{
                    const t = o("WAWebLabelCollection").LabelCollection.get(e);
                    if (t) {
                        const n = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t.name);
                        if (!n && t.predefinedId == null) {
                            l.push({
                                custom_label: t.name
                            });
                        }
                    }
                });
                if (l.length !== 0) {
                    const u = [];
                    const _ = [];
                    l.forEach((e)=>{
                        const t = c(e.custom_label);
                        if (t != null) {
                            u.push(t);
                        } else {
                            _.push(e);
                        }
                    });
                    const f = o("WAWebABProps").getABPropConfigValue("ctwa_custom_label_algorithm");
                    o("WAWebCustomLabel3pdEventQuery").getCustomLabel3pdEvent(_, f).then((t)=>{
                        if (t.type === "success") {
                            const n = t.events.map((e)=>{
                                const n = {
                                    custom_label: e.custom_label,
                                    ctwa_3pd_conversion_type: e.ctwa_3pd_conversion_type != null ? m(e.ctwa_3pd_conversion_type.toLowerCase()) : null,
                                    ctwa_3pd_conversion_subtype: e.ctwa_3pd_conversion_subtype != null ? p(e.ctwa_3pd_conversion_subtype.toLowerCase()) : null,
                                    ctwa_3pd_conversion_metadata: e.ctwa_3pd_conversion_metadata ?? "{}"
                                };
                                if (e.ctwa_3pd_conversion_type != null) {
                                    d(e.custom_label, n);
                                }
                                return n;
                            });
                            const customLabelsMappingEvents = [].concat(n, u);
                            if (customLabelsMappingEvents.length > 0) {
                                o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats({
                                    customLabelsMappingEvents,
                                    isDataSharingEnabled: a,
                                    labelIds: [],
                                    models: i
                                });
                                i.forEach((e)=>{
                                    if (e instanceof o("WAWebChatModel").Chat) {
                                        o("WAWebSmbMarkAsXLabelAction").logLabelAddedToChatAction(e, [], a, customLabelsMappingEvents);
                                    }
                                });
                            }
                        } else {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "getCustomLabel3pdEvent: unsuccessful response: ",
                                ""
                            ])), t.type);
                        }
                    }).catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "getCustomLabel3pdEvent: failed to call GraphQL endpoint"
                        ]))).catching(r("getErrorSafe")(e));
                    });
                }
            }
        }
    }
    l.processCustomLabels3pdSignals = _;
}, 98);