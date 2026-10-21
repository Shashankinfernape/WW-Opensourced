__d("RSTMetadataMainThread", [
    "CurrentCanonicalRoute",
    "CurrentUser",
    "Env",
    "MemoryUtils",
    "RSTAdsManagerUtilsMainThread",
    "RSTConfig",
    "RSTExternalLoggingDataStoreMainThread",
    "RSTInteractionDataMainThread",
    "RSTRecoverableUnresponsivenessTrackingMainThread",
    "RSTUtils",
    "SiteData",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        const e = Date.now();
        const t = babelHelpers.extends({}, o("RSTAdsManagerUtilsMainThread").getAdsAnnotations());
        m(t);
        const n = Date.now();
        t.rstAnnotationsCollectedInMs = `${n - e}`;
        return t;
    }
    function c() {
        const e = babelHelpers.extends({}, o("RSTAdsManagerUtilsMainThread").getAdsAnnotations());
        if (r("RSTConfig").shouldCollectAdditionalMetadata()) {
            y(e);
        }
        return e;
    }
    function d() {
        if (r("RSTConfig").shouldCollectAdditionalMetadata()) {
            return o("RSTExternalLoggingDataStoreMainThread").loggingDataStore.getAllSpanData();
        }
        return {};
    }
    function m(e) {
        if (r("RSTConfig").shouldCollectAdditionalMetadata()) {
            g(e);
            C(e);
            b(e);
            y(e);
            p(e);
            h(e);
        }
    }
    function p(e) {
        const t = o("RSTAdsManagerUtilsMainThread").getAdEntityIds();
        e.selectedAdIds = t.adIds.join(",");
        e.selectedAdSetIds = t.adsetIds.join(",");
        e.selectedCampaignIds = t.campaignIds.join(",");
    }
    function _() {
        try {
            const t = o("RSTInteractionDataMainThread").getLastInteractionDataSinceLastMessageToWorker()?.componentStack;
            return t ?? [];
        } catch (e) {
            return [];
        }
    }
    function f() {
        try {
            const t = o("RSTInteractionDataMainThread").getLastInteractionDataSinceLastMessageToWorker()?.componentContext;
            return t ?? [];
        } catch (e) {
            return [];
        }
    }
    function g(e) {
        if (r("RSTConfig").SHOULD_COLLECT_RST_ANNOTATIONS_INTERACTION_DATA) {
            const t = o("RSTInteractionDataMainThread").getInteractionDataSinceLastMessageToWorker().map((e)=>e.componentName).filter((e)=>e != null).join(",");
            if (t !== "") {
                e.interactedComponentsSinceLastResponsiveState = t;
            }
            const n = f();
            if (n.length > 0) {
                e.interactedComponentContextSinceLastResponsiveState = n.join(" < ");
            }
            const a = o("RSTInteractionDataMainThread").getInteractionHistory().map((e)=>e.componentName).filter((e)=>e != null).join(",");
            if (a !== "") {
                e.interactedComponentHistory = a;
            }
            const i = o("RSTInteractionDataMainThread").getInteractionHistory().map((e)=>o("RSTUtils").getInteractionDetail(e)).filter((e)=>e != null).join(",");
            if (i !== "") {
                e.interactionDetailHistory = i;
            }
        }
    }
    function h(e) {
        e.crashDataOncall = r("RSTConfig").PROJECT_ONCALL;
        e.crashLogger = r("RSTConfig").PROJECT_NAME;
    }
    function y(e) {
        if (r("RSTConfig").SHOULD_COLLECT_RST_ANNOTATIONS_LOG_FOR_CRASH) {
            const t = o("RSTExternalLoggingDataStoreMainThread").loggingDataStore.getAll();
            const n = (a)=>{
                if (!r("RSTConfig").BLOCKED_ANNOTATION_KEYS.some((e)=>e.test(a))) {
                    e[o("RSTUtils").getExternalAnnotationKey(a)] = t[a];
                }
            };
            for (const a of Object.keys(t)){
                n(a);
            }
        }
    }
    function C(e) {
        const t = o("MemoryUtils").getCurrentMemory({
            runGC: false
        });
        const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = t;
        if (jsHeapSizeLimit != null) {
            e.js_heap_size_limit = jsHeapSizeLimit.toString();
        }
        if (usedJSHeapSize != null) {
            e.used_js_heap_size = usedJSHeapSize.toString();
        }
        if (totalJSHeapSize != null) {
            e.total_js_heap_size = totalJSHeapSize.toString();
        }
    }
    function b(e) {
        const t = o("RSTRecoverableUnresponsivenessTrackingMainThread").getStats();
        if (t != null) {
            for (const n of Object.keys(t)){
                const r = t[n];
                if (r != null) {
                    const a = n.toLowerCase();
                    for (const i of Object.keys(r)){
                        const l = r[i];
                        if (l != null) {
                            e[`${a}-${i}`] = l.toString();
                        }
                    }
                }
            }
        }
    }
    function v() {
        const document_URL = document.URL;
        const brsid = (e || (e = r("Env"))).brsid;
        try {
            return {
                url: document_URL,
                brsid,
                i1: r("CurrentUser").getID() ?? "0",
                i2: o("RSTAdsManagerUtilsMainThread").getAdAccountID() ?? "0",
                i3: o("RSTAdsManagerUtilsMainThread").getBusinessID() ?? "0",
                cpp: r("SiteData").push_phase ?? "unknown",
                cr: `${r("SiteData").client_revision}`,
                rcs: _(),
                st: Math.floor(Date.now() - (s || (s = r("performance"))).now()),
                annotations: u(),
                spans: d(),
                ccrt: o("CurrentCanonicalRoute").getForGlobalLoggingOnly()
            };
        } catch (e) {
            return {
                url: document_URL,
                brsid,
                i1: "0",
                i2: "0",
                i3: "0"
            };
        }
    }
    function S() {
        const document_URL = document.URL;
        const brsid = (e || (e = r("Env"))).brsid;
        try {
            return {
                url: document_URL,
                brsid,
                i1: r("CurrentUser").getID() ?? "0",
                i2: o("RSTAdsManagerUtilsMainThread").getAdAccountID() ?? "0",
                i3: o("RSTAdsManagerUtilsMainThread").getBusinessID() ?? "0",
                externalAnnotations: c(),
                spans: d(),
                isLightweight: true
            };
        } catch (e) {
            return {
                url: document_URL,
                brsid,
                i1: "0",
                i2: "0",
                i3: "0"
            };
        }
    }
    l.getMainThreadMetadata = v;
    l.getMainThreadMetadataWithExternalAnnotationsOnly = S;
}, 98);