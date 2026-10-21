__d("useWAWebChatOpenMetrics", [
    "WAWebFMXTrustSignals",
    "WAWebFindCommonGroupsContactAction",
    "WAWebNoop",
    "WAWebPsFmxActionWamEvent",
    "WAWebSetChatOpenedAction",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        useEffect(function() {
            if (e.hasOpened !== true) {
                o("WAWebSetChatOpenedAction").setChatHasOpened(e).catch(r("WAWebNoop"));
                self.setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = e.msgs.some((e)=>e.subtype === "contact_info_card");
                    if (t) {
                        const i = yield o("WAWebFMXTrustSignals").getCountryCodeTrustSignal(e.contact);
                        new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
                            fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
                            fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_VIEWED,
                            countryShown: i.shown,
                            isDifferentCountry: i.isDifferentCountry ?? undefined,
                            notAContactShown: yield o("WAWebFMXTrustSignals").shouldShowContactTrustSignal(e.contact),
                            commonGroupNum: (yield o("WAWebFindCommonGroupsContactAction").findCommonGroups(e.contact))?.length ?? 0
                        }).commit();
                    }
                }), 1000);
            }
        }, []);
    }
    l.useChatOpenMetrics = u;
}, 98);