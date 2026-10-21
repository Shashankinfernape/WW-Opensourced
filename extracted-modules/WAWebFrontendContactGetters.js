__d("WAWebFrontendContactGetters", [
    "fbt",
    "WAWebAlphaRegex",
    "WAWebBusinessProfileTypes",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactComparator",
    "WAWebContactExternalUserState",
    "WAWebContactGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebL10NAccentFold",
    "WAWebL10NRemoveAccents",
    "WAWebLidMigrationUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWid",
    "WAWebWidFormat",
    "cr:17143",
    "fbs",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l, s) {
    const u = n("cr:17143") ?? {};
    const c = u.ContactCollection;
    const d = o("WAWebGetters").createGetterFactories({
        root: o("WAWebContactGetters").getContactUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendContactsCache
    });
    const { computed: m, field: p } = d;
    const _ = p("phoneNumber");
    const f = p("displayNameLID");
    const g = p("externalUserState");
    const h = m(function([t]) {
        return o("WAWebContactExternalUserState").isGuestUser(t);
    }, [
        g
    ]);
    const y = p("locale");
    const C = p("pendingAction");
    const b = p("isContactBlocked");
    const v = p("shareOwnPn");
    const S = p("businessProfile");
    const R = p("commonGroups");
    const L = p("businessCatalog");
    const E = p("textStatusString");
    const k = p("textStatusEmoji");
    const I = p("textStatusEphemeralDuration");
    const T = p("textStatusLastUpdateTime");
    const D = p("textStatusExpiryTs");
    const x = p("usernameKey");
    const $ = p("username");
    function P() {
        const e = c?.getMeContact();
        if (e != null) {
            return o("WAWebUsernameTypes").serializeMaybeUsername($(e));
        }
        return null;
    }
    const N = p("isUsernameContact");
    const M = p("isEphemeralityDisabled");
    const w = m(function([t]) {
        if (o("WAWebUsernameTypes").isPresentUsername(t)) {
            return {
                displayName: o("WAWebUsernameTypes").displayUsername(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME
            };
        }
        return null;
    }, [
        $
    ]);
    const A = m(function([t]) {
        if (t != null) {
            return t.displayName;
        }
        return null;
    }, [
        w
    ]);
    const F = m(function([t, n, a, i]) {
        if (a === o("WAWebContactExternalUserState").ExternalUserState.GuestUser && !r("isStringNullOrEmpty")(i)) {
            return {
                displayName: i,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME
            };
        }
        if (n != null && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            return {
                displayName: n,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME
            };
        }
        if (t != null) {
            return {
                displayName: t,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER
            };
        }
        return {
            displayName: o("WAWebWidFormat").getUnknownUserOrNumber(),
            type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER
        };
    }, [
        f,
        A,
        g,
        o("WAWebContactGetters").getPushname
    ]);
    const O = m(function([t, n]) {
        if (t != null) {
            return {
                displayName: o("WAWebWidFormat").widToFormattedUser(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
            };
        }
        return n;
    }, [
        _,
        F
    ]);
    const B = m(function([t]) {
        return t.displayName;
    }, [
        O
    ]);
    const W = m(function([t, n]) {
        if (t != null && t !== "") {
            return {
                displayName: t,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
            };
        }
        return n;
    }, [
        o("WAWebContactGetters").getName,
        O
    ]);
    const q = m(function([t]) {
        return t.displayName;
    }, [
        W
    ]);
    const U = m(function([t, n]) {
        if (t.isLid()) {
            return n;
        }
        return {
            displayName: o("WAWebWidFormat").widToFormattedUser(t),
            type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
        };
    }, [
        o("WAWebContactGetters").getId,
        O
    ]);
    const V = m(function([t, n]) {
        if (n != null && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            return n;
        }
        return t;
    }, [
        U,
        w
    ]);
    const H = m(function([t]) {
        return t.displayName;
    }, [
        F
    ]);
    const G = m(function([t]) {
        return t.displayName;
    }, [
        V
    ]);
    function z(e) {
        if (e) {
            return r("fbs")._("WhatsApp Business").toString();
        }
        return r("fbs")._("WhatsApp").toString();
    }
    const j = m(function([t, n]) {
        if (!t.isRegularUser()) {
            return false;
        }
        if (t.isLid()) {
            return n;
        }
        const r = o("WAWebLidMigrationUtils").toUserLid(t);
        const a = r != null ? c?.get(r) : null;
        return a != null && a.isUsernameContact;
    }, [
        o("WAWebContactGetters").getId,
        N
    ]);
    const K = m(function([t, n, r]) {
        return !!(t && (n != null && n.length || r));
    }, [
        o("WAWebContactGetters").getIsUser,
        o("WAWebContactGetters").getName,
        j
    ]);
    const Q = m(function([t]) {
        return t?.isAuthorizedAgent === true;
    }, [
        S
    ]);
    const X = m(function([t, n, r]) {
        return !r && t && n !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
    }, [
        o("WAWebContactGetters").getIsBusiness,
        o("WAWebContactGetters").getVerifiedLevel,
        K
    ]);
    const Y = m(function([t, n, r, a, i, l]) {
        if (r) {
            if (l && i === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW && a !== "") {
                return a;
            }
            return null;
        }
        return t || n;
    }, [
        o("WAWebContactGetters").getName,
        o("WAWebContactGetters").getNotifyName,
        X,
        o("WAWebContactGetters").getVerifiedName,
        o("WAWebContactGetters").getVerifiedLevel,
        Q
    ]);
    const J = m(function([t, n, a, i]) {
        if (a && !r("isStringNullOrEmpty")(o("WAWebConnModel").Conn.pushname)) {
            return {
                displayName: o("WAWebConnModel").Conn.pushname,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME
            };
        }
        if (r("WAWebWid").isPSA(t)) {
            return {
                displayName: z(o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)),
                type: null
            };
        }
        if (n != null && n !== "") {
            return {
                displayName: n,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
            };
        }
        return i;
    }, [
        o("WAWebContactGetters").getId,
        Y,
        o("WAWebContactGetters").getIsMe,
        V
    ]);
    const Z = m(function([t]) {
        return t.displayName;
    }, [
        J
    ]);
    const ee = m(function([t]) {
        return t.type;
    }, [
        J
    ]);
    const te = m(function([t, n, a, i, l]) {
        if (r("WAWebWid").isPSA(a)) {
            return {
                displayName: o("WAWebL10NAccentFold").accentFold(z(o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn))),
                type: null
            };
        }
        if (r("WAWebWid").isSupportAccount(a)) {
            return {
                displayName: o("WAWebL10NAccentFold").accentFold("WhatsApp Support"),
                type: null
            };
        }
        if (i) {
            const u = s._("{nameOrPhoneNumber} (You)", [
                s._param("nameOrPhoneNumber", t ?? n)
            ]);
            return {
                displayName: o("WAWebL10NAccentFold").accentFold(u.toString()),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
            };
        }
        if (t != null) {
            return {
                displayName: o("WAWebL10NAccentFold").accentFold(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
            };
        }
        return null;
    }, [
        o("WAWebContactGetters").getName,
        G,
        o("WAWebContactGetters").getId,
        o("WAWebContactGetters").getIsMe,
        y
    ]);
    const ne = m(function([t]) {
        if (t != null) {
            return t.displayName;
        }
        return null;
    }, [
        te
    ]);
    const re = m(function([t, n, a, i, l, s, u, c]) {
        if (n) {
            if (u) {
                return {
                    displayName: r("fbs")._("You").toString(),
                    type: null
                };
            }
            if (r("WAWebWid").isPSA(n)) {
                return {
                    displayName: z(o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)),
                    type: null
                };
            }
            if (r("WAWebWid").isSupportAccount(n)) {
                return {
                    displayName: "WhatsApp Support",
                    type: null
                };
            }
            if (t) {
                return {
                    displayName: t,
                    type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
                };
            }
            if (a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && i) {
                return {
                    displayName: i,
                    type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME
                };
            }
            if (s) {
                return l;
            }
            return {
                displayName: "",
                type: null
            };
        }
        return {
            displayName: "",
            type: null
        };
    }, [
        o("WAWebContactGetters").getName,
        o("WAWebContactGetters").getId,
        o("WAWebContactGetters").getVerifiedLevel,
        o("WAWebContactGetters").getVerifiedName,
        V,
        o("WAWebContactGetters").getIsUser,
        o("WAWebContactGetters").getIsMe,
        y
    ]);
    const oe = m(function([t]) {
        return t.displayName;
    }, [
        re
    ]);
    const ae = m(function([t, n, o, a, i]) {
        if (!o) {
            return {
                displayName: "",
                type: null
            };
        }
        if (a) {
            return {
                displayName: r("fbs")._("You").toString(),
                type: null
            };
        }
        if (t != null) {
            return {
                displayName: t,
                type: null
            };
        }
        const l = n.displayName;
        return {
            displayName: l && l.replace(/\s/g, " "),
            type: n.type
        };
    }, [
        o("WAWebContactGetters").getShortName,
        re,
        o("WAWebContactGetters").getId,
        o("WAWebContactGetters").getIsMe,
        y
    ]);
    const ie = m(function([t]) {
        return t.displayName;
    }, [
        ae
    ]);
    const le = m(function([t, n, o, a, i]) {
        if (!o) {
            return {
                displayName: "",
                type: null
            };
        }
        if (a) {
            return {
                displayName: r("fbs")._("You").toString(),
                type: null
            };
        }
        if (t != null && t !== "") {
            return {
                displayName: t,
                type: null
            };
        }
        const { displayName: l, type: s } = n;
        return {
            displayName: l,
            type: s
        };
    }, [
        o("WAWebContactGetters").getShortName,
        re,
        o("WAWebContactGetters").getId,
        o("WAWebContactGetters").getIsMe,
        y
    ]);
    const se = m(function([t]) {
        return t.displayName;
    }, [
        le
    ]);
    const ue = m(function([t, n, a, i, l, s]) {
        if (n) {
            if (r("WAWebWid").isPSA(n)) {
                return {
                    displayName: z(o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)),
                    type: null
                };
            }
            if (r("WAWebWid").isSupportAccount(n)) {
                return {
                    displayName: "WhatsApp Support",
                    type: null
                };
            }
            if (t) {
                return {
                    displayName: t,
                    type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
                };
            }
            if (a >= o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW && i) {
                return {
                    displayName: i,
                    type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME
                };
            }
            return l;
        }
        return {
            displayName: "",
            type: null
        };
    }, [
        o("WAWebContactGetters").getName,
        o("WAWebContactGetters").getId,
        o("WAWebContactGetters").getVerifiedLevel,
        o("WAWebContactGetters").getVerifiedName,
        V,
        y
    ]);
    const ce = m(function([t]) {
        return t.displayName;
    }, [
        ue
    ]);
    const de = m(function([t, n]) {
        if (t) {
            return {
                displayName: t,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
            };
        }
        if (n) {
            return {
                displayName: n,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME
            };
        }
        return null;
    }, [
        o("WAWebContactGetters").getName,
        o("WAWebContactGetters").getPushname
    ]);
    const me = m(function([t, n, r, o, a]) {
        return t && !!r && o && n !== r && !a.isBot();
    }, [
        o("WAWebContactGetters").getIsBusiness,
        o("WAWebContactGetters").getName,
        o("WAWebContactGetters").getVerifiedName,
        K,
        o("WAWebContactGetters").getId
    ]);
    const pe = /^[^0-9]+$/;
    const _e = m(function([t, n]) {
        const r = t === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW;
        if (t !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && !r) {
            return null;
        }
        if (n) {
            return o("WAWebL10NAccentFold").accentFold(n);
        }
        return null;
    }, [
        o("WAWebContactGetters").getVerifiedLevel,
        o("WAWebContactGetters").getVerifiedName
    ]);
    const fe = m(function([t, n, a, i]) {
        function l(e) {
            const t = e.toLowerCase();
            const n = r("WAWebAlphaRegex").exec(t);
            if (n && n.index === 0 || n && pe.test(t.slice(n.index))) {
                const a = n[0];
                const i = o("WAWebL10NRemoveAccents").removeAccents(a);
                if (o("WAWebContactComparator").getCollator().compare(i, a)) {
                    return a;
                }
                return i;
            }
            return "#";
        }
        if (t) {
            return l(t);
        }
        if ((a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH || a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW) && n) {
            return l(n);
        }
        if (i != null && i !== "") {
            return "~";
        }
        return "#";
    }, [
        o("WAWebContactGetters").getName,
        o("WAWebContactGetters").getVerifiedName,
        o("WAWebContactGetters").getVerifiedLevel,
        o("WAWebContactGetters").getNotifyName
    ]);
    l.getPhoneNumber = _;
    l.getIsGuest = h;
    l.getPendingAction = C;
    l.getIsContactBlocked = b;
    l.getShareOwnPn = v;
    l.getBusinessProfile = S;
    l.getCommonGroups = R;
    l.getBusinessCatalog = L;
    l.getTextStatusString = E;
    l.getTextStatusEmoji = k;
    l.getTextStatusEphemeralDuration = I;
    l.getTextStatusLastUpdateTime = T;
    l.getTextStatusExpiryTs = D;
    l.getUsernameKey = x;
    l.getUsername = $;
    l.getMyUsername = P;
    l.getIsEphemeralityDisabled = M;
    l.getFormattedUsernameAndType = w;
    l.getFormattedUsername = A;
    l.getDisplayNameForLidAndType = F;
    l.getPnForLid = B;
    l.getUserDisplayNameForLid = q;
    l.getFormattedPhoneAndType = U;
    l.getFormattedUsernameOrPhoneAndType = V;
    l.getMaskedPhoneLid = H;
    l.getFormattedUsernameOrPhone = G;
    l.getIsUsernameContact = j;
    l.getIsMyContact = K;
    l.getIsNonVerified = X;
    l.getDisplayNameAndType = J;
    l.getDisplayName = Z;
    l.getDisplayNameType = ee;
    l.getSearchName = ne;
    l.getFormattedNameAndType = re;
    l.getFormattedName = oe;
    l.getFormattedShortNameWithNonBreakingSpaces = ie;
    l.getFormattedShortNameAndType = le;
    l.getFormattedShortName = se;
    l.getFormattedUserAndType = ue;
    l.getFormattedUser = ce;
    l.getFormattedSavedNameOrPushnameWithType = de;
    l.getShowBiz3pBotVerifiedNameAsSecondary = me;
    l.getSearchVerifiedName = _e;
    l.getHeader = fe;
}, 226);