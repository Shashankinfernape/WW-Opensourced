__d("WAWebMediaHubLogger", [
    "WAWebMediaHubSession",
    "WAWebMediaHubUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumActionCode"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ action, entrypoint, surface, customFields = {} }) {
        if (action === o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB) {
            r("WAWebMediaHubSession").newSessionId();
            r("WAWebMediaHubSession").setEntryPoint(entrypoint);
        }
        if (surface != null && surface !== r("WAWebMediaHubSession").getSurface()) {
            r("WAWebMediaHubSession").setSurface(surface);
        }
        const u = customFields?.fromSearchResult;
        if (u != null && u !== r("WAWebMediaHubSession").getFromSearchResults()) {
            r("WAWebMediaHubSession").setFromSearchResults(u);
        }
        if (action != null) {
            const c = {
                search_results: r("WAWebMediaHubSession").getFromSearchResults()
            };
            if (action === o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL) {
                c.search_results_returned = customFields?.searchResultsReturned === true ? 1 : 0;
            }
            new (o("WAWebMediaHubUserJourneyWamEvent")).MediaHubUserJourneyWamEvent({
                mediaHubEntryPoint: r("WAWebMediaHubSession").getEntryPoint(),
                mediaHubAction: action,
                unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined,
                mediaHubSurface: r("WAWebMediaHubSession").getSurface(),
                mediaHubSequenceNumber: r("WAWebMediaHubSession").getSequence(),
                mediaHubSessionId: r("WAWebMediaHubSession").getSessionId(),
                customFields: JSON.stringify(c)
            }).commit();
        }
    }
    l.logMediaHubAction = e;
}, 98);