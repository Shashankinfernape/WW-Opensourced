__d("useWAWebUnknownContact", [
    "WALogger",
    "WAPhoneFindCC",
    "WAWebContactlessChatUtils",
    "WAWebHttpErrors",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNetworkStatus",
    "WAWebPhoneNumberSearch",
    "WAWebTrunkPrefixUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebAsync",
    "useWAWebDebouncedUsernameLookup",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const { useCallback, useRef, useState } = c;
    function _({ alwaysRequireUsernameAtPrefix, onLoading, phoneOrUsername, requestOrigin, searchPhoneNumber, searchUsername }) {
        const g = o("WAWebPhoneNumberSearch").stripInvisibleChars(phoneOrUsername).trim();
        const hRef = useRef(o("WAWebContactlessChatUtils").queryExistsAndGetChatCached());
        const y = useState();
        const C = y[0];
        const b = y[1];
        const v = useState(false);
        const S = v[0];
        const R = v[1];
        const L = useState(false);
        const E = L[0];
        const setLoading = L[1];
        const I = useState(null);
        const T = I[0];
        const D = I[1];
        const x = (t)=>{
            R(t);
            onLoading?.(t);
        };
        const setUnknownContactInfo = r("useWAWebStableCallback")(function(e) {
            if (e != null && e.searchQuery === g && (C == null || C.searchQuery !== e.searchQuery || C.wid == null && e.wid != null)) {
                b(e);
                return;
            }
        });
        const P = useCallback(function(e) {
            return f(g, e, searchPhoneNumber);
        }, [
            g,
            searchPhoneNumber
        ]);
        const onRetry = r("useWAWebStableCallback")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                D(null);
                if (P(g)) {
                    let t;
                    const a = (g[0] === "+" ? "+" : "") + o("WAPhoneFindCC").extractDigits(g);
                    const i = !!((t = hRef.current) != null && t.isCached(a));
                    if (!i && (x(true), !r("WAWebNetworkStatus").online)) {
                        throw new (o("WAWebHttpErrors")).HttpNetworkError;
                    }
                    const l = yield hRef.current?.getOrRun(a);
                    if (l == null) {
                        return;
                    }
                    const { chat, wid } = l;
                    if (chat != null && o("WAWebUserPrefsMeUser").isMeAccount(chat.id) || wid != null && o("WAWebUserPrefsMeUser").isMeAccount(wid)) {
                        return;
                    }
                    setUnknownContactInfo(babelHelpers.extends({}, l, {
                        searchQuery: g
                    }));
                }
            } catch (error) {
                D(error instanceof Error ? error : r("getErrorSafe")(error));
                if (error instanceof o("WAWebHttpErrors").HttpNetworkError) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        " Unable to connect to the internet: ",
                        ""
                    ])), error);
                } else {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Phone number existence check failed with exceptions: ",
                        ""
                    ])), error).sendLogs("phoneNumberExistence-unknownContactSearch");
                }
            } finally{
                x(false);
            }
        }));
        r("useWAWebAsync")(onRetry, [
            g
        ]);
        o("useWAWebDebouncedUsernameLookup").useDebouncedUsernameLookup({
            text: g,
            setUnknownContactInfo,
            setLoading,
            searchUsername,
            alwaysRequireUsernameAtPrefix,
            requestOrigin
        });
        return {
            unknownContactInfo: C?.searchQuery === g ? C : null,
            loading: S || E,
            error: T,
            onRetry
        };
    }
    function f(e, t, searchPhoneNumber) {
        if (!o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(e)) {
            return false;
        }
        const r = o("WAPhoneFindCC").extractDigits(t);
        const a = o("WAPhoneFindCC").findCC(r);
        const i = r.substring(a.length);
        let l = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(Number(a), i);
        const s = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (s != null && !l && t.trim()[0] !== "+") {
            const u = o("WAPhoneFindCC").findCC(s.user);
            const c = o("WAWebTrunkPrefixUtils").trimTrunkPrefix(u, r);
            l = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(Number(u), c);
        }
        if (s != null) {
            const d = s.user;
            const m = o("WAPhoneFindCC").extractDigits(d);
            if (r === m) {
                return false;
            }
        }
        return !!e && l && searchPhoneNumber;
    }
    l.default = _;
}, 98);