__d("useWAWebChatPreferenceValues", [
    "WAWebChatPreferenceCollection",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("useWAWebCollectionValues").useCollectionValues(r("WAWebChatPreferenceCollection"), e, t);
    }
    function s(e, t) {
        return o("useWAWebCollectionValues").useOptionalCollectionValues(r("WAWebChatPreferenceCollection"), e, t);
    }
    l.useChatPreferenceValues = e;
    l.useOptionalChatPreferenceValues = s;
}, 98);