__d("WAWebUserPrefsMultiDevice", [
    "Promise",
    "WAWebBizCoexGatingUtils",
    "WAWebEventEmitter",
    "WAWebMobilePlatforms",
    "WAWebPermanentStorage",
    "WAWebUserPrefsCacheStorage",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            const t = [
                (e = o("WAWebUserPrefsKeys")).MD_KEYS.NOISE_INFO,
                e.MD_KEYS.ME_INFO,
                e.MD_KEYS.DEVICE_ID,
                e.MD_KEYS.INITIAL_HISTORY_SYNCED,
                e.MD_KEYS.WEB_ENC_SALT
            ];
            t.push(e.KEYS.LAST_WID_MD);
            t.map((e)=>{
                r("WAWebUserPrefsStore").set(e, void 0);
            });
            yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.clearCacheStorage();
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO, e);
            yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.setItemToCacheStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO, e);
        });
        return d.apply(this, arguments);
    }
    function m() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO);
    }
    function p() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MMS4_CONN);
    }
    function _(e) {
        return r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MMS4_CONN, e);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV, e);
            yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.setItemToCacheStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV, e);
        });
        return g.apply(this, arguments);
    }
    function h() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ROUTING_INFO, e);
        });
        return C.apply(this, arguments);
    }
    function b() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ROUTING_INFO);
        return e;
    }
    function v(e, t) {
        return r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE, {
            ts: e,
            appVersion: t
        });
    }
    function S() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE);
        if (!(e?.ts == null || e?.appVersion == null)) {
            return {
                timestamp: parseInt(e.ts, 10),
                appVersion: e.appVersion
            };
        }
    }
    function R() {
        return r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE, void 0);
    }
    function L() {
        return !!(m() && o("WAWebUserPrefsMeUser").getMaybeMeDevicePn());
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e != null) {
                r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT, e);
                yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.setItemToCacheStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT, e);
            } else {
                r("WAWebUserPrefsLocalStorage").removeItemFromLocalStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT);
                yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.removeItemFromCacheStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT);
            }
            return r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.WEB_ENC_SALT, e, {
                shouldWriteToIdb: false
            });
        });
        return k.apply(this, arguments);
    }
    function I() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT);
    }
    const T = new (r("WAWebEventEmitter"));
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ADV_SECRET_KEY);
            } else {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ADV_SECRET_KEY, e);
            }
        });
        return x.apply(this, arguments);
    }
    function $() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ADV_SECRET_KEY);
        return e;
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BLOCKLIST_HASH);
            } else {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BLOCKLIST_HASH, e);
            }
        });
        return N.apply(this, arguments);
    }
    function M() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BLOCKLIST_HASH);
        return e;
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPTOUTLIST_HASH, e);
        });
        return A.apply(this, arguments);
    }
    function F() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPTOUTLIST_HASH);
        if (typeof e === "string") {
            return e;
        }
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.PAIRING_TIMESTAMP, e);
        });
        return B.apply(this, arguments);
    }
    function W() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.PAIRING_TIMESTAMP);
        if (e == null) {
            return null;
        }
        return parseInt(e, 10);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS, e);
        });
        return U.apply(this, arguments);
    }
    function V() {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS);
            return e;
        });
        return H.apply(this, arguments);
    }
    function G() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS);
        return e === true;
    }
    function z() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING);
        return e === true;
    }
    function j(e) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING, e);
        });
        return K.apply(this, arguments);
    }
    function Q() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING);
        return e === true;
    }
    function X(e) {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING, e);
        });
        return Y.apply(this, arguments);
    }
    function J(e) {
        return Z.apply(this, arguments);
    }
    function Z() {
        Z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET, e);
        });
        return Z.apply(this, arguments);
    }
    function ee() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET);
        return e;
    }
    function te(e) {
        return ne.apply(this, arguments);
    }
    function ne() {
        ne = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET, e);
        });
        return ne.apply(this, arguments);
    }
    function re() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET);
        return (e || (e = n("Promise"))).resolve(t);
    }
    function oe(e) {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS, e);
        });
        return ae.apply(this, arguments);
    }
    function ie() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS);
        return e;
    }
    function le(e) {
        return r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.CACHED_PROFILE_PIC_EURL, e);
    }
    function se() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").MD_KEYS.CACHED_PROFILE_PIC_EURL, {
            storage: r("WAWebPermanentStorage")
        });
    }
    function ue() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").MD_KEYS.COMMUNITY_TAB_LAST_SEEN_TIMESTAMP) ?? 0;
    }
    function ce(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.COMMUNITY_TAB_LAST_SEEN_TIMESTAMP, e);
    }
    function de() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_WAS_BOOTSTRAPPED, true);
    }
    function me() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_WAS_BOOTSTRAPPED);
        if (typeof e === "boolean") {
            return e;
        }
        return false;
    }
    function pe() {
        return _e.apply(this, arguments);
    }
    function _e() {
        _e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebBizCoexGatingUtils").smbHostedPrimaryPairingAllowed() && o("WAWebMobilePlatforms").isSMB()) {
                r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT, true);
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT, true);
            }
        });
        return _e.apply(this, arguments);
    }
    function fe() {
        return ge.apply(this, arguments);
    }
    function ge() {
        ge = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebMobilePlatforms").isSMB()) {
                const e = yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT);
                if (e === true) {
                    return true;
                }
            }
            return false;
        });
        return ge.apply(this, arguments);
    }
    function he() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT);
            if (e === true) {
                return true;
            }
        }
        return false;
    }
    function ye() {
        return Ce.apply(this, arguments);
    }
    function Ce() {
        Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HAVE_PROCESSED_COEX_ADV) !== true) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HAVE_PROCESSED_COEX_ADV, true);
            }
        });
        return Ce.apply(this, arguments);
    }
    function be() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HAVE_PROCESSED_COEX_ADV) === true;
    }
    l.clearRegistrationInfo = s;
    l.setNoiseInfo = c;
    l.getNoiseInfo = m;
    l.getMms4Conn = p;
    l.setMms4Conn = _;
    l.setNoiseInfoIv = f;
    l.getNoiseInfoIv = h;
    l.setRoutingInfo = y;
    l.getRoutingInfo = b;
    l.setServerClientExpirationOverride = v;
    l.getServerClientExpirationOverride = S;
    l.clearServerClientExpirationOverride = R;
    l.isRegistered = L;
    l.setWebEncSalt = E;
    l.getWebEncSalt = I;
    l.advSecretEventEmitter = T;
    l.setADVSecretKey = D;
    l.getADVSecretKey = $;
    l.setBlocklistHash = P;
    l.getBlocklistHash = M;
    l.setOptOutlistHash = w;
    l.getOptOutListHash = F;
    l.setPairingTimestamp = O;
    l.getPairingTimestamp = W;
    l.setRecentMailboxAgeDays = q;
    l.getRecentMailboxAgeDays = V;
    l.getShouldCheckContactSyncStatus = G;
    l.getUnarchiveChatsSetting = z;
    l.setUnarchiveChatsSetting = j;
    l.getArchiveV2EnabledSetting = Q;
    l.setArchiveV2EnabledSetting = X;
    l.setChatThreadLoggingOffset = J;
    l.getChatThreadLoggingOffset = ee;
    l.setChatThreadLoggingSecretB64 = te;
    l.getChatThreadLoggingSecretB64 = re;
    l.setChatThreadLoggingLastUploadedStartTs = oe;
    l.getChatThreadLoggingLastUploadedStartTs = ie;
    l.setCachedProfilePicEURL = le;
    l.getCachedProfilePicEURL = se;
    l.getCommunityTabLastSeenTimestamp = ue;
    l.setCommunityTabLastSeenTimestamp = ce;
    l.setNewsletterWasBootstrapped = de;
    l.getNewsletterWasBootstrapped = me;
    l.setIsHostedMeAccount = pe;
    l.getIsHostedMeAccount = fe;
    l.getIsHostedMeAccountFromLocalStorage = he;
    l.setHaveProcessedCoexAdv = ye;
    l.getHaveProcessedCoexAdv = be;
}, 98);