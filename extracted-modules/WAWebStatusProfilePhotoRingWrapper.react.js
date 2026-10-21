__d("WAWebStatusProfilePhotoRingWrapper.react", [
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebContactGetters",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebFrontendContactGetters",
    "WAWebFrontendStatusGetters",
    "WAWebInitialsFromNameUtils",
    "WAWebLogStatusPogImpression",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebStatusCollection",
    "WAWebStatusEphemeralBadgeUtils",
    "WAWebStatusGetters",
    "WAWebStatusProfilePhotoRing.react",
    "WAWebWamEnumStatusRowSection",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "WDSProfilePhoto.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebDefaultProfileColors",
    "useWAWebIntersection",
    "useWAWebListener",
    "useWAWebProfilePicThumbValues",
    "useWAWebStatusValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef, useState } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(45);
        const { hideWhenNoUnreadStatuses, logPogImpression, profilePhotoSize, rowIndex, rowSection } = e;
        const p = logPogImpression === undefined ? false : logPogImpression;
        const g = profilePhotoSize === undefined ? "medium" : profilePhotoSize;
        const h = r("useWAWebIntersection")();
        const y = h[0];
        const C = h[1];
        const C_isIntersecting = C.isIntersecting;
        let v;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            v = [
                o("WAWebContactGetters").getId,
                o("WAWebContactGetters").getCalculatedStatusMute,
                o("WAWebContactGetters").getIsNewsletter
            ];
            t[0] = v;
        } else {
            v = t[0];
        }
        const S = o("useWAWebContactValues").useContactValues(e.contact.id, v);
        const R = S[0];
        const L = S[1];
        const E = S[2];
        let k;
        if (t[1] !== R) {
            k = function() {
                return f(R);
            };
            t[1] = R;
            t[2] = k;
        } else {
            k = t[2];
        }
        const I = useState(k);
        const contactStatus = I[0];
        const D = I[1];
        let x;
        if (t[3] !== R) {
            x = function() {
                const e = f(R);
                D(e);
            };
            t[3] = R;
            t[4] = x;
        } else {
            x = t[4];
        }
        const $ = x;
        let P;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            P = [
                "change:msgsChanged"
            ];
            t[5] = P;
        } else {
            P = t[5];
        }
        o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, P, $);
        let N;
        if (t[6] !== R || t[7] !== E) {
            let M;
            N = E === true && (r("WAWebNewsletterMetadataCollection") == null || (M = r("WAWebNewsletterMetadataCollection").get(R)) == null ? undefined : M.suspended) === true;
            t[6] = R;
            t[7] = E;
            t[8] = N;
        } else {
            N = t[8];
        }
        const w = N;
        o("useWAWebListener").useListener(E === true ? r("WAWebNewsletterMetadataCollection") : null, "change:suspended", $);
        let A = false;
        if (t[9] !== R) {
            const F = o("WAWebChatCollection").ChatCollection.get(R);
            if (F) {
                A = o("WAWebConversationDeprecatedLidChatUtils").getLidDeprecatedInfo(F).isLidDeprecated;
            }
            t[9] = R;
            t[10] = A;
        } else {
            A = t[10];
        }
        const O = L || A || w;
        let B;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            B = [
                o("WAWebStatusGetters").getUnreadCount,
                o("WAWebStatusGetters").getTotalCount
            ];
            t[11] = B;
        } else {
            B = t[11];
        }
        const W = o("useWAWebStatusValues").useOptionalStatusValues(contactStatus?.id, B);
        let q;
        if (t[12] !== W) {
            q = W ?? [
                0,
                0
            ];
            t[12] = W;
            t[13] = q;
        } else {
            q = t[13];
        }
        const U = q;
        const V = U[0];
        const H = U[1];
        let G;
        if (t[14] !== hideWhenNoUnreadStatuses || t[15] !== R) {
            G = hideWhenNoUnreadStatuses && !(R.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled());
            t[14] = hideWhenNoUnreadStatuses;
            t[15] = R;
            t[16] = G;
        } else {
            G = t[16];
        }
        const j = V === 0 && G || H === 0;
        const KRef = useRef(false);
        let Q;
        let X;
        if (t[17] !== contactStatus || t[18] !== C_isIntersecting || t[19] !== j || t[20] !== O || t[21] !== p || t[22] !== rowIndex || t[23] !== rowSection) {
            Q = function() {
                if (!(!p || O || j || !C_isIntersecting || KRef.current || contactStatus == null)) {
                    KRef.current = true;
                    o("WAWebLogStatusPogImpression").logStatusPogImpression({
                        pogOwnerId: contactStatus.id,
                        pogIndex: rowIndex,
                        msg: o("WAWebFrontendStatusGetters").getLastStatus(contactStatus),
                        statusViewEntrypoint: rowSection,
                        tsSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST
                    });
                }
            };
            X = [
                p,
                O,
                C_isIntersecting,
                contactStatus,
                rowIndex,
                rowSection,
                j
            ];
            t[17] = contactStatus;
            t[18] = C_isIntersecting;
            t[19] = j;
            t[20] = O;
            t[21] = p;
            t[22] = rowIndex;
            t[23] = rowSection;
            t[24] = Q;
            t[25] = X;
        } else {
            Q = t[24];
            X = t[25];
        }
        useEffect(Q, X);
        const Y = rowSection === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST || rowSection === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH;
        let J;
        if (t[26] !== R || t[27] !== g || t[28] !== e.contact || t[29] !== Y) {
            J = <_ id={R} contact={e.contact} profilePhotoSize={g} shouldShowEphemeralBadge={Y}/>;
            t[26] = R;
            t[27] = g;
            t[28] = e.contact;
            t[29] = Y;
            t[30] = J;
        } else {
            J = t[30];
        }
        const Z = J;
        let ee;
        if (t[31] === Symbol.for("react.memo_cache_sentinel")) {
            ee = {
                className: "x78zum5 x6s0dn4 xl56j7k x5yr21d"
            };
            t[31] = ee;
        } else {
            ee = t[31];
        }
        const te = ee;
        if (O || contactStatus == null || !C_isIntersecting) {
            let ne;
            if (t[32] !== y || t[33] !== Z) {
                ne = <div {...babelHelpers.extends({
                    ref: y
                }, te, {
                    children: Z
                })}/>;
                t[32] = y;
                t[33] = Z;
                t[34] = ne;
            } else {
                ne = t[34];
            }
            return ne;
        }
        let re;
        if (t[35] !== contactStatus || t[36] !== hideWhenNoUnreadStatuses || t[37] !== g || t[38] !== rowIndex || t[39] !== rowSection || t[40] !== Y) {
            re = s.jsx(r("WAWebStatusProfilePhotoRing.react"), {
                contactStatus,
                hideWhenNoUnreadStatuses,
                profilePhotoSize: g,
                rowSection,
                rowIndex,
                shouldShowEphemeralBadge: Y
            });
            t[35] = contactStatus;
            t[36] = hideWhenNoUnreadStatuses;
            t[37] = g;
            t[38] = rowIndex;
            t[39] = rowSection;
            t[40] = Y;
            t[41] = re;
        } else {
            re = t[41];
        }
        let oe;
        if (t[42] !== y || t[43] !== re) {
            oe = <div {...babelHelpers.extends({
                "data-testid": "chatlist-status-ring",
                ref: y
            }, te, {
                children: re
            })}/>;
            t[42] = y;
            t[43] = re;
            t[44] = oe;
        } else {
            oe = t[44];
        }
        return oe;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(30);
        const { contact, id, profilePhotoSize, shouldShowEphemeralBadge } = e;
        let u;
        if (t[0] !== id) {
            u = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(id);
            t[0] = id;
            t[1] = u;
        } else {
            u = t[1];
        }
        const c = u;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            t[2] = d;
        } else {
            d = t[2];
        }
        const m = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(c.id, d);
        const p = m[0];
        let _;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            let f;
            _ = [
                (f = o("WAWebContactGetters")).getName,
                f.getShortName,
                f.getPushname,
                f.getVerifiedName
            ];
            t[3] = _;
        } else {
            _ = t[3];
        }
        o("useWAWebContactValues").useContactValues(contact.id, _);
        const g = o("WAWebStatusEphemeralBadgeUtils").useStatusRingEphemeralBadge(id, shouldShowEphemeralBadge);
        let h;
        if (t[4] !== contact) {
            h = o("WAWebInitialsFromNameUtils").getInitialsFromContact(contact);
            t[4] = contact;
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        let C;
        if (t[6] !== y.firstInitial || t[7] !== y.secondInitial) {
            C = [
                y.firstInitial,
                y.secondInitial
            ].filter(Boolean);
            t[6] = y.firstInitial;
            t[7] = y.secondInitial;
            t[8] = C;
        } else {
            C = t[8];
        }
        const b = C.join("");
        let v;
        if (t[9] !== id) {
            v = o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(id);
            t[9] = id;
            t[10] = v;
        } else {
            v = t[10];
        }
        const S = v;
        const R = p != null && p !== "";
        let L;
        if (t[11] !== contact) {
            L = o("WAWebFrontendContactGetters").getFormattedName(contact);
            t[11] = contact;
            t[12] = L;
        } else {
            L = t[12];
        }
        let E;
        if (t[13] !== id) {
            E = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(id);
            t[13] = id;
            t[14] = E;
        } else {
            E = t[14];
        }
        let k;
        if (t[15] !== id) {
            k = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(id);
            t[15] = id;
            t[16] = k;
        } else {
            k = t[16];
        }
        let I;
        if (t[17] !== id) {
            I = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(id);
            t[17] = id;
            t[18] = I;
        } else {
            I = t[18];
        }
        const T = S === "group" && !R ? "default-group-refreshed" : undefined;
        let D;
        if (t[19] !== g || t[20] !== b || t[21] !== profilePhotoSize || t[22] !== p || t[23] !== I || t[24] !== T || t[25] !== L || t[26] !== E || t[27] !== k || t[28] !== S) {
            D = s.jsx(r("WDSProfilePhoto.react"), {
                type: S,
                name: L,
                src: p,
                size: profilePhotoSize,
                initials: b,
                color: E,
                customColor: k,
                badge: g,
                placeholderIcon: I,
                testid: T,
                isDecorative: true
            });
            t[19] = g;
            t[20] = b;
            t[21] = profilePhotoSize;
            t[22] = p;
            t[23] = I;
            t[24] = T;
            t[25] = L;
            t[26] = E;
            t[27] = k;
            t[28] = S;
            t[29] = D;
        } else {
            D = t[29];
        }
        return D;
    }
    function f(e) {
        const t = o("WAWebStatusCollection").StatusCollection.get(e);
        if (t != null) {
            return t;
        }
        if (e.isRegularUser()) {
            const n = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
            if (n != null) {
                return o("WAWebStatusCollection").StatusCollection.get(o("WAWebWidFactory").asUserWidOrThrow(n));
            }
        }
        return null;
    }
    l.default = p;
}, 98);