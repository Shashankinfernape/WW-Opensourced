__d("WAWebNuxOrderExpansion.react", [
    "fbt",
    "WAWebBizOrderExpansionModal.react",
    "WAWebCoolOffNuxBanner.react",
    "WAWebNux",
    "WAWebNuxCoolOff",
    "WAWebOrderGatingUtils",
    "WAWebOrdersExpansionUtils",
    "WDSIconIcReceipt.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        COOL_OFF_START_STORAGE_KEY: o("WAWebNux").CoolOffPeriodKeys.ORDER_EXPANSION,
        MAX_CLICKS: 1,
        MAX_DISMISSES: 1
    };
    function d() {
        return o("WAWebOrdersExpansionUtils").isOrderExpansionBannerEnabled() && o("WAWebNuxCoolOff").shouldShowNUX(o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.ORDER_EXPANSION, c);
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_onInteract = e.onInteract;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = new (o("WAWebNuxCoolOff")).CoolOffNux(o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.ORDER_EXPANSION, c);
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] !== e_onInteract) {
            l = function() {
                e_onInteract?.();
                o("WAWebBizOrderExpansionModal.react").openOrderExpansionModal(function() {
                    return i.dismiss();
                });
            };
            t[1] = e_onInteract;
            t[2] = l;
        } else {
            l = t[2];
        }
        const d = l;
        let m;
        let p;
        let _;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Build trust and track sales");
            p = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._("Use orders to confirm purchases and manage charges.") : s._("Use orders to create customer receipts and manage sales.");
            _ = s._("See details");
            t[3] = m;
            t[4] = p;
            t[5] = _;
        } else {
            m = t[3];
            p = t[4];
            _ = t[5];
        }
        let f;
        if (t[6] !== d || t[7] !== e_onInteract) {
            const Component = r("WAWebCoolOffNuxBanner.react");
            f = <Component icon={r("WDSIconIcReceipt.react")} title={m} subtitle={p} actionText={_} onDismiss={e_onInteract} onClick={d} nuxManager={i} theme="orderExpansion"/>;
            t[6] = d;
            t[7] = e_onInteract;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    l.shouldShowOrderExpansionBanner = d;
    l.OrderExpansionBanner = m;
}, 226);