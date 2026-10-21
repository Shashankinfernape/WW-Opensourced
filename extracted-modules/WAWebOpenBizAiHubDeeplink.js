__d("WAWebOpenBizAiHubDeeplink", [
    "WAWebBizAIDrawerLoadable.react",
    "WAWebBizAIDrawerStep",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebChatAssignmentGatingUtils",
    "WAWebDrawerManager",
    "WAWebWamEnumEntryPoint",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = new Map([
        [
            "/ai-replies",
            o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings
        ],
        [
            "/appointments",
            o("WAWebBizAIDrawerStep").BizAIStep.Appointments
        ],
        [
            "/business-info",
            o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo
        ],
        [
            "/chat-history",
            o("WAWebBizAIDrawerStep").BizAIStep.Knowledge
        ],
        [
            "/faq",
            o("WAWebBizAIDrawerStep").BizAIStep.Knowledge
        ],
        [
            "/instructions",
            o("WAWebBizAIDrawerStep").BizAIStep.Instructions
        ],
        [
            "/knowledge-center",
            o("WAWebBizAIDrawerStep").BizAIStep.Knowledge
        ],
        [
            "/lead-gen-collect-info",
            o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList
        ],
        [
            "/purchase-info",
            o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo
        ],
        [
            "/select-catalog",
            o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers
        ]
    ]);
    function c(e) {
        if (!e.startsWith(o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME)) {
            return null;
        }
        const t = e.slice(o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME.length);
        const n = t.indexOf("?");
        if (n === -1) {
            return t;
        }
        return t.slice(0, n);
    }
    function d(e) {
        const t = c(e);
        if (t == null) {
            return false;
        }
        o("WAWebBizAILargeScreensLogEvents").logBizAiHubDeeplinkClick(e);
        const initialStep = u.get(t);
        if (initialStep == null || !o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled() || !o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
            return false;
        }
        const Component = o("WAWebBizAIDrawerLoadable.react").WAWebBizAIDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST} initialStep={initialStep} onBack={o("WAWebDrawerManager").closeDrawerRight}/>);
        return true;
    }
    l.openBizAiHubDeeplink = d;
}, 98);