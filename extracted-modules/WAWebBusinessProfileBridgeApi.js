__d("WAWebBusinessProfileBridgeApi", [
    "Promise",
    "WALogger",
    "WAWebBizCoexGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogCollection",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebDBUpdateChatTable",
    "WAWebJidToWid",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = {
        refreshCatalogProducts: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ productIds }) {
                const r = o("WAWebCatalogCollection").CatalogCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow().toString());
                if (r) {
                    const a = productIds.map((e)=>r.refreshProduct(e));
                    yield (u || (u = n("Promise"))).all(a);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateCatalogCollectionReviewStatuses: function({ notification }) {
            const n = o("WAWebCatalogCollection").CatalogCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow().toString());
            if (n != null && n.collections) {
                for(let r = 0; r < notification.collectionIds.length; r++){
                    const a = n.collections.get(notification.collectionIds[r]);
                    if (a) {
                        a.set(notification.reviewStatuses[r]);
                    }
                }
            }
        },
        updateBusinessProfile: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ wid }) {
                const r = o("WAWebJidToWid").userJidToUserWid(wid);
                const a = o("WAWebBusinessProfileCollection").BusinessProfileCollection.getValid(r);
                const i = a?.profileOptions?.commerceExperience;
                const l = !!a;
                const s = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(r);
                const u = Array.isArray(s) ? s : [
                    s
                ];
                for (const c of u){
                    if (l) {
                        const p = c?.profileOptions?.commerceExperience;
                        if (p !== i) {
                            const _ = o("WAWebCatalogCollection").CatalogCollection.get(r);
                            if (_) {
                                o("WAWebCatalogCollection").CatalogCollection.remove(_.id);
                            }
                        }
                    }
                    if (!l) {
                        c.stale = true;
                    }
                    d(r, c);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        restoreVerifiedBusinessContacts: function({ entries }) {
            for (const n of entries){
                const { contactData, wid } = n;
                const i = o("WAWebJidToWid").userJidToUserWid(wid);
                const l = o("WAWebChatCollection").ChatCollection.get(i);
                if (l) {
                    l.contact.set(contactData);
                } else {
                    const s = o("WAWebContactCollection").ContactCollection.get(i);
                    if (s) {
                        s.set(contactData);
                    }
                }
            }
        },
        restoreBusinessProfiles: function({ profiles }) {
            for (const n of profiles){
                o("WAWebBusinessProfileCollection").BusinessProfileCollection.gadd(babelHelpers.extends({}, n, {
                    dataSource: "db"
                }));
            }
        }
    };
    function d(t, n) {
        if (!(o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() || !o("WAWebBizCoexGatingUtils").agentOffboardingEnabled())) {
            const a = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t);
            if (a != null) {
                const parentCompanyName = n?.parentCompanyName;
                const obaPhoneNumber = n?.obaPhoneNumber;
                if (n?.isAuthorizedAgent === true && parentCompanyName != null && obaPhoneNumber != null) {
                    a.set({
                        parentCompanyName,
                        obaPhoneNumber
                    });
                    o("WAWebDBUpdateChatTable").updateChatTable(a.id, {
                        parentCompanyName,
                        obaPhoneNumber
                    }).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to save authorized agent metadata to chat table"
                        ]))).catching(r("getErrorSafe")(t)).sendLogs("save-auth-agent-chat-table-fail");
                    });
                } else if (n?.isAuthorizedAgent === false) {
                    a.set({
                        parentCompanyName: null,
                        obaPhoneNumber: null
                    });
                    o("WAWebDBUpdateChatTable").updateChatTable(a.id, {
                        parentCompanyName: null,
                        obaPhoneNumber: null
                    }).catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to clear authorized agent metadata from chat table"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("clear-auth-agent-chat-table-fail");
                    });
                }
            }
        }
    }
    l.BusinessProfileBridgeApi = c;
}, 98);