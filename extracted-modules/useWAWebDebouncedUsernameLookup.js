__d("useWAWebDebouncedUsernameLookup", [
    "WALogger",
    "WAWebABProps",
    "WAWebContactlessChatUtils",
    "WAWebQueryExistsJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebUsernameValidationUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const useRef = (u || (u = o("react"))).useRef;
    function d(text, t) {
        const n = text.startsWith("@");
        if (t && !n) {
            return null;
        }
        let username = n ? text.slice(1) : text;
        let usernameKey = null;
        if (n) {
            const i = username.split(":");
            const l = i[0];
            const s = i[1];
            username = l;
            if (s != null) {
                if (o("WAWebUsernameTypes").isUsernameKey(s)) {
                    usernameKey = o("WAWebUsernameTypes").asUsernameKey(s);
                } else {
                    usernameKey = "invalid";
                }
            }
        }
        if (o("WAWebUsernameValidationUtils").validateUsernameLocally(username).isValid) {
            return {
                username,
                usernameKey
            };
        }
        return null;
    }
    function m({ alwaysRequireUsernameAtPrefix, requestOrigin, searchUsername, setLoading, setUnknownContactInfo, text }) {
        const _RefRef = useRef(null);
        r("useWAWebDebouncedCallback")(function() {
            if (!(!searchUsername || !o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled()) && _RefRef.current !== text) {
                _RefRef.current = text;
                const t = alwaysRequireUsernameAtPrefix ?? o("WAWebUsernameGatingUtils").usernameSearchRequiresAtSign();
                const r = d(text, t);
                if (r == null) {
                    setUnknownContactInfo(null);
                    return;
                }
                const { username, usernameKey } = r;
                if (username == null) {
                    setUnknownContactInfo(null);
                    return;
                }
                if (usernameKey === "invalid") {
                    const g = true;
                    setUnknownContactInfo({
                        username,
                        searchQuery: text,
                        isUsernameSearch: g
                    });
                    setLoading(false);
                    return;
                }
                setLoading(true);
                o("WAWebQueryExistsJob").queryUsernameExists(username, usernameKey, requestOrigin).then((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        if (_RefRef.current === text) {
                            const i = t?.isUsernameSearch;
                            if (t?.keyRequired === true) {
                                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "useDebouncedUsernameLookup: username query returned keyRequired"
                                ])));
                                setUnknownContactInfo({
                                    username: t.username ?? username,
                                    searchQuery: text,
                                    isUsernameSearch: i
                                });
                                return;
                            }
                            if (t?.wid == null) {
                                setUnknownContactInfo(null);
                                return;
                            }
                            const s = yield o("WAWebContactlessChatUtils").getChatByWid(t.wid, !!t.biz);
                            setUnknownContactInfo({
                                wid: t.wid,
                                chat: s,
                                username: t.username ?? username,
                                isBusiness: t.biz,
                                verifiedLevel: t.bizInfo?.verifiedName.level,
                                verifiedName: t.bizInfo?.verifiedName.name,
                                searchQuery: text,
                                isUsernameSearch: i
                            });
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "useDebouncedUsernameLookup: queryUsernameExists failed with error:",
                        ""
                    ])), e);
                    setUnknownContactInfo(null);
                }).finally(()=>{
                    setLoading(false);
                });
            }
        }, o("WAWebABProps").getABPropConfigValue("username_check_debounce_in_ms"), {
            leading: true
        })();
    }
    l.useDebouncedUsernameLookup = m;
}, 98);