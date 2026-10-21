__d("WAWebLinkedAccountsGQL", [
    "FBLogger",
    "WAWebAdvertiseEntryPointQplHelpers",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebLinkedAccountsGQLQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 10000;
    function u(e) {
        if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
            const i = (e.source?.errors ?? [])[0]?.code;
            const l = e.source?.httpStatus;
            return `gql_${String(i ?? "none")}${l != null ? `_http_${String(l)}` : ""}`;
        }
        if (e instanceof Error) {
            return e.name;
        }
        return typeof e;
    }
    function c() {
        if (r("justknobx")._("6227")) {
            const e = o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplStartNetworkProbe();
            if (e != null) {
                const t = new AbortController;
                const n = self.setTimeout(function() {
                    return t.abort();
                }, s);
                d(t.signal).then((t)=>o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplRecordNetworkProbe(e, t)).finally(()=>self.clearTimeout(n));
            }
        }
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield self.fetch(o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint(), {
                    cache: "no-store",
                    credentials: "omit",
                    method: "HEAD",
                    mode: "no-cors",
                    signal: e
                });
                return "reachable";
            } catch (t) {
                if (e.aborted) {
                    return "timeout";
                }
                return "unreachable";
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e) {
                o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplAddPoint(o("WAWebAdvertiseEntryPointQplHelpers").AdvertiseEntryPointQplPoint.FETCH_TOKEN_START);
            }
            try {
                return yield o("WAWebFetchAdAccountToken").fetchToken();
            } catch (error) {
                o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplRecordFailureReason("fetch_token_threw");
                throw error;
            } finally{
                if (e) {
                    o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplAddPoint(o("WAWebAdvertiseEntryPointQplHelpers").AdvertiseEntryPointQplPoint.FETCH_TOKEN_END);
                }
            }
        });
        return _.apply(this, arguments);
    }
    const f = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplBeginAttempt();
            const a = yield p(t);
            if (a.type !== "success") {
                o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplRecordFailureReason(a.type);
                r("FBLogger")("wa_ctwa_web").warn(`Skipping linked accounts query: ad account token fetch failed with type ${a.type}`);
                return null;
            }
            const accessToken = a.type === "success" ? a.token : undefined;
            if (t) {
                o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplAddPoint(o("WAWebAdvertiseEntryPointQplHelpers").AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_START);
            }
            let l = false;
            const s = self.performance.now();
            return o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebLinkedAccountsGQLQuery.graphql"), {}, {
                accessToken,
                environmentType: "facebook"
            }).then((e)=>{
                let r;
                l = true;
                if (t) {
                    o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplAddPoint(o("WAWebAdvertiseEntryPointQplHelpers").AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_END);
                }
                const a = e?.xfb_wa_biz_linked_accounts?.linked_accounts;
                if (!a) {
                    o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplRecordFailureReason(e?.xfb_wa_biz_linked_accounts == null ? "linked_accounts_root_null" : "linked_accounts_missing");
                    return null;
                }
                const i = [];
                if ((r = a.fb_page) != null && r.ad_status) {
                    const c = {
                        type: "facebook",
                        id: a.fb_page?.id ?? "",
                        hasCreatedAd: a.fb_page.ad_status.has_created_ad === true,
                        hasActiveLinkedAd: a.fb_page.ad_status.has_active_ctwa_ad === true
                    };
                    i.push(c);
                }
                if (a.wa_ad_identity) {
                    const _ = {
                        type: "whatsapp",
                        id: a.wa_ad_identity.id ?? "",
                        hasCreatedAd: a.wa_ad_identity.ad_status?.has_created_ad === true,
                        hasActiveLinkedAd: a.wa_ad_identity.ad_status?.has_active_ctwa_ad === true
                    };
                    i.push(_);
                }
                return {
                    accounts: i
                };
            }).catch((e)=>{
                o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplRecordFailureReason("linked_accounts_query_threw", (l ? "response_handler_" : "") + u(e), {
                    elapsedMs: Math.round(self.performance.now() - s),
                    isOnline: self.navigator.onLine
                });
                if (!l && e instanceof TypeError) {
                    c();
                }
                if (t) {
                    o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplAddPoint(o("WAWebAdvertiseEntryPointQplHelpers").AdvertiseEntryPointQplPoint.LINKED_ACCOUNTS_QUERY_FAIL);
                }
                throw e;
            });
        });
        return function() {
            return t.apply(this, arguments);
        };
    })();
    l.queryLinkedAccountsGQL = f;
}, 98);