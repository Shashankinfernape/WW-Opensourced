__d("useWAWebAreSmartComposerAiModesAvailable", [
    "WAWebBizAiSmartComposerGating",
    "WAWebBusinessProfileGetters",
    "WAWebChatCollection",
    "WAWebContactGetters",
    "useWAWebCollectionValues",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        "use no forget";
        const i = t ? o("WAWebChatCollection").ChatCollection.get(e) : null;
        const l = o("useWAWebContactValues").useOptionalContactValues(i?.contact.id, [
            o("WAWebContactGetters").getBusinessProfile,
            o("WAWebContactGetters").getIsEnterprise,
            o("WAWebContactGetters").getIsHosted
        ]) ?? [
            null,
            false,
            null
        ];
        const s = l[0];
        const recipientIsEnterprise = l[1];
        const recipientIsHosted = l[2];
        const recipientRunsAiAgent = o("useWAWebCollectionValues").useOptionalModelGetterValues(s, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p
        ])?.[0] ?? false;
        return t && i != null && o("WAWebBizAiSmartComposerGating").isSmartComposerEnabledForChat(i, {
            hasOnboardedAiAgent: true,
            recipientIsEnterprise,
            recipientIsHosted,
            recipientRunsAiAgent
        });
    }
    l.default = e;
}, 98);