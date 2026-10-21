__d("WAWebContactlessChatUtils", [
    "fbt",
    "WAPromiseCache",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebContactSyncLogger",
    "WAWebFindChatAction",
    "WAWebHttpErrors",
    "WAWebMsgGetters",
    "WAWebQueryExistsJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    const e = /^\+*[\d ()-]+$/;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
            const n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e);
            if (t) {
                return n || (yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "newChatFlow")).chat;
            }
            const r = !!(n != null && n.msgs.some((e)=>o("WAWebMsgGetters").isRealMessage(e) && !o("WAWebUserPrefsMeUser").isMeAccount(e.senderObj.id)));
            if (r) {
                return n;
            }
            return null;
        });
        return c.apply(this, arguments);
    }
    function d() {
        return new (r("WAPromiseCache"))(p, {
            maxCached: 100,
            maxAge: Infinity,
            shouldCache: function(t) {
                return !!t;
            }
        });
    }
    function m(e) {
        const retryStr = s._("Retry");
        let n = s._("Something went wrong. Please try again.");
        if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.status === 429) {
            return {
                text: s._("Something went wrong. Try again later."),
                retryStr: null
            };
        }
        if (e instanceof o("WAWebHttpErrors").HttpNetworkError) {
            n = s._("Couldn't connect to the internet.");
        }
        return {
            text: n,
            retryStr
        };
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(searchQuery) {
            const r = yield o("WAWebQueryExistsJob").queryPhoneExists(searchQuery, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH);
            const a = r?.wid;
            if (!a) {
                return null;
            }
            const isBusiness = !!(r != null && r.biz);
            const l = {
                wid: a,
                isBusiness,
                verifiedName: r?.bizInfo?.verifiedName?.name,
                verifiedLevel: r?.bizInfo?.verifiedName?.level,
                username: r?.username,
                searchQuery
            };
            const s = yield u(a, isBusiness);
            const c = babelHelpers.extends({
                chat: s
            }, l, {
                isUsernameSearch: false
            });
            return c;
        });
        return _.apply(this, arguments);
    }
    l.PHONE_NUMBER_VALIDATION_REGEX = e;
    l.getChatByWid = u;
    l.queryExistsAndGetChatCached = d;
    l.getErrorStr = m;
    l.queryExistsAndGetChat = p;
}, 226);