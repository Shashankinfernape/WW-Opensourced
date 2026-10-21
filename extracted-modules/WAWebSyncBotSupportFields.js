__d("WAWebSyncBotSupportFields", [
    "WALogger",
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileFetchPause",
    "WAWebBotStaticProfiles",
    "WAWebBotTos",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchWassBotProfileGQL",
    "WAWebPersistBotProfiles",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = true, a = null) {
            if (o("WAWebBotStaticProfiles").isStaticProfile(t)) {
                return false;
            }
            const i = yield o("WAWebFetchWassBotProfileGQL").fetchWassBotProfileGQL(t.user, a);
            let l = true;
            e: {
                const c = i;
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.type === "error" || (typeof c === "object" && c !== null || typeof c === "function") && c.type === "graphql-error") {
                    l = false;
                    if (i.type === "graphql-error" && o("WAWebBotProfileFetchPause").isPausingBotProfileErrorCode(i.error.source?.errors)) {
                        yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                            fetchPauseUntilMs: o("WAWebBotProfileFetchPause").getBotProfileFetchPauseUntilMs(o("WATimeUtils").unixTimeMs())
                        });
                    }
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncBotSupportFields] WASS fetch failed (",
                        ")"
                    ])), i.type).sendLogs("sbp-sync-fetch-failed");
                    break e;
                }
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.type === "exists" && "value" in c) {
                    const m = c.value;
                    yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                        creatorLid: m.creatorLid,
                        fetchPauseUntilMs: null,
                        hcaEntrypointId: m.hcaEntrypointId,
                        groupTosRequirements: m.groupTosRequirements,
                        name: m.name,
                        product: m.product,
                        isDeprecated: m.isDeprecated,
                        isDeleted: false,
                        lastFetchedTimeMs: o("WATimeUtils").unixTimeMs()
                    });
                    try {
                        if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() && o("WAWebBotProduct").usesMuseGroupTosNotice(m.product)) {
                            yield o("WAWebBotTos").refreshMuseGroupTosNotices();
                        } else {
                            yield o("WAWebBotTos").refreshBotTosRequirements(m.groupTosRequirements);
                        }
                    } catch (error) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncBotSupportFields] ToS state refresh failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("sbp-sync-tos-refresh-failed");
                    }
                    const p = o("WAWebPersistBotProfiles").setBotProfilePicUrls(t, m.profilePicThumbUrl, m.profilePicFullUrl);
                    if (p != null) {
                        o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(p).catch((e)=>{
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncBotSupportFields] failed to persist bot profile pic"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("sbp-sync-persist-pic-error");
                        });
                    }
                    break e;
                }
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.type === "deleted") {
                    const _ = o("WATimeUtils").unixTimeMs();
                    const f = {
                        fetchPauseUntilMs: o("WAWebBotProfileFetchPause").getBotProfileFetchPauseUntilMs(_)
                    };
                    if (yield o("WAWebPersistBotProfiles").hasStoredBotProfile(t)) {
                        const g = babelHelpers.extends({}, f, {
                            groupTosRequirements: null,
                            lastFetchedTimeMs: _
                        });
                        yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, n ? babelHelpers.extends({}, g, {
                            isDeleted: true
                        }) : g);
                    } else {
                        yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, f);
                    }
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c}`);
            }
            return l;
        });
        return d.apply(this, arguments);
    }
    l.syncBotSupportFields = c;
}, 98);