__d("WAWebLinkedAccountsJob", [
    "WAPromiseRetryLoop",
    "WASmaxBizLinkingGetLinkedAccountsRPC",
    "WAWebLinkedAccountsGQL",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = 3;
    const first = 250;
    const u = 1000;
    const c = (a)=>{
        let t = e;
        const i = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (r("gkx")("20595")) {
                    try {
                        const n = yield o("WAWebLinkedAccountsGQL").queryLinkedAccountsGQL();
                        e(n);
                    } catch (e) {}
                } else {
                    const i = yield o("WASmaxBizLinkingGetLinkedAccountsRPC").sendGetLinkedAccountsRPC({}, a ? {
                        signal: a
                    } : undefined);
                    const l = [];
                    e: {
                        if (i.name === "GetLinkedAccountsResponseForbidden") {
                            e(null);
                            return;
                        }
                        if (i.name === "GetLinkedAccountsResponseError") {
                            break e;
                        }
                        if (i.name === "GetLinkedAccountsResponseSuccess") {
                            if (i.value.linkedAccountsFbPage) {
                                l.push({
                                    type: "facebook",
                                    id: i.value.linkedAccountsFbPage?.id,
                                    hasActiveLinkedAd: i.value.linkedAccountsFbPage?.adStatusHasActiveCtwaAd === "true",
                                    hasCreatedAd: i.value.linkedAccountsFbPage?.adStatusHasCreatedAd === "true"
                                });
                            }
                            if (i.value.linkedAccountsWhatsappAdIdentity) {
                                l.push({
                                    type: "whatsapp",
                                    id: i.value.linkedAccountsWhatsappAdIdentity?.id,
                                    hasActiveLinkedAd: i.value.linkedAccountsWhatsappAdIdentity?.adStatusHasActiveCtwaAd === "true",
                                    hasCreatedAd: i.value.linkedAccountsWhatsappAdIdentity?.adStatusHasCreatedAd === "true"
                                });
                            }
                            e({
                                accounts: l
                            });
                            return;
                        }
                        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i.name}`);
                    }
                }
                if (--t === 0) {
                    e(null);
                }
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const l = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "queryLinkedAccounts",
            timer: {
                algo: {
                    type: "exponential",
                    first
                },
                max: u
            },
            code: i
        });
        l.start();
        return l.promise();
    };
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield c(e);
            if (!t) {
                return null;
            }
            if (t.accounts.length === 0) {
                return "not-linked";
            }
            const n = t.accounts.find((e)=>e.type === "whatsapp");
            const r = t.accounts.find((e)=>e.type === "facebook");
            if (n) {
                return {
                    id: n.id,
                    hasCreatedAd: n.hasCreatedAd,
                    hasFacebookPage: r != null,
                    type: n.type
                };
            }
            if (r) {
                return {
                    id: r.id,
                    hasCreatedAd: r.hasCreatedAd,
                    hasFacebookPage: true,
                    type: r.type
                };
            }
            return "not-linked";
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = yield c();
            if (!n) {
                return {
                    fbPageId: null,
                    waPageId: null,
                    fbPageHasCreatedAd: false,
                    waAdsIdentityPageHasCreatedAd: false
                };
            }
            const r = n.accounts.find((e)=>e.type === "whatsapp");
            const o = n.accounts.find((e)=>e.type === "facebook");
            return {
                fbPageId: o?.id,
                waPageId: r?.id,
                fbPageHasCreatedAd: o?.hasCreatedAd ?? false,
                waAdsIdentityPageHasCreatedAd: r?.hasCreatedAd ?? false
            };
        });
        return _.apply(this, arguments);
    }
    l.queryActiveLinkedAccountInfo = d;
    l.queryLinkedPagesInfo = p;
}, 98);