__d("WAWebGetOrQueryUsyncInfoContactAction", [
    "Promise",
    "WALogger",
    "WAPromiseCache",
    "WAWebBackendErrors",
    "WAWebBizUpdateVerifiedInfoAction",
    "WAWebBizVerifiedLevelToString",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebDBCreateLidPnMappings",
    "WAWebQueryExistsJob",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUsync",
    "WAWebUsyncUser",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ forceUsync, requestOrigin, wid }) {
            const l = o("WAWebContactCollection").ContactCollection.get(wid);
            if (forceUsync !== true && l != null && (l.name != null || o("WAWebChatCollection").ChatCollection.get(wid) != null)) {
                const d = wid.isRegularUserPn() ? false : undefined;
                return {
                    wid,
                    biz: l.isBusiness,
                    bizInfo: l.isBusiness ? {
                        verifiedName: {
                            level: r("WAWebBizVerifiedLevelToString")(l.verifiedLevel),
                            serial: null,
                            name: l.verifiedName,
                            isApi: !!l.isEnterprise,
                            isSmb: !!l.isSmb,
                            privacyMode: l.privacyMode
                        }
                    } : null,
                    disappearingMode: {
                        duration: l.disappearingModeDuration ?? 0,
                        settingTimestamp: l.disappearingModeSettingTimestamp ?? 0
                    },
                    isUsernameSearch: d
                };
            }
            const m = yield o("WAWebQueryExistsJob").queryWidExists(wid, requestOrigin);
            if (m) {
                const { biz, bizInfo, disappearingMode } = m;
                if (biz && bizInfo != null) {
                    yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(wid, bizInfo.verifiedName);
                }
                if (disappearingMode && l != null) {
                    yield o("WAWebUpdateDisappearingModeForContact").updateDisappearingModeForContact({
                        contactId: wid,
                        newDuration: disappearingMode.duration,
                        newSettingTimestamp: disappearingMode.settingTimestamp,
                        newEphemeralityDisabled: disappearingMode.isEphemeralityDisabled === true
                    });
                }
                return m;
            }
            return (u || (u = n("Promise"))).reject(r("err")("Invalid number"));
        });
        return d.apply(this, arguments);
    }
    function m() {
        const e = new (r("WAPromiseCache"))(o("WAWebQueryExistsJob").queryPhoneExists, {
            maxCached: 100,
            maxAge: 360000,
            shouldCache: function(t) {
                return !!t;
            }
        });
        return e;
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] querying for biz info"
            ])));
            const n = new (o("WAWebUsyncUser")).USyncUser;
            const r = new (o("WAWebUsync")).USyncQuery;
            if (t.isLid()) {
                n.withId(t);
            } else {
                n.withPhone(t.toString());
            }
            r.withUser(n);
            r.withBusinessProtocol();
            const a = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.BUSINESS_CONTACT_CHAT,
                requestedCount: 1,
                protocols: r.protocols
            });
            const i = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(a, function() {
                return r.execute();
            }, o("WAWebContactSyncErrorCodes").QUERY_BUSINESS);
            const all = i.error.all;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] biz info response"
            ])));
            if (all) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(a, all.errorCode, i, o("WAWebContactSyncErrorCodes").QUERY_BUSINESS);
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(all.errorCode, all.errorText);
            }
            const i_list = i.list;
            if (i_list.length !== 1) {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i);
                return null;
            }
            const c = i_list[0];
            const { business, id } = c;
            if (business != null) {
                yield o("WAWebBizUpdateVerifiedInfoAction").updateVerifiedInfo(t, business.verifiedName);
                if (id?.isLid() && business.pn != null) {
                    yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                        mappings: [
                            {
                                pn: business.pn,
                                lid: id
                            }
                        ],
                        flushImmediately: true,
                        learningSource: "usync"
                    });
                }
            }
            const p = t.isRegularUserPn() ? false : undefined;
            const _ = {
                wid: id,
                biz: business != null,
                bizInfo: business,
                isUsernameSearch: p
            };
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i, o("WAWebContactSyncLogger").createUpdateCounterWith({
                businessChange: business != null ? 1 : 0
            }));
            return _;
        });
        return _.apply(this, arguments);
    }
    l.getOrQueryUsyncInfo = c;
    l.usyncContactCached = m;
    l.queryUsyncBusiness = p;
}, 98);