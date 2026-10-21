__d("WAWebStatusProfilePhotoRing.react", [
    "fbt",
    "WAJids",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendStatusGetters",
    "WAWebInitialsFromNameUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenStatusQuotedFlow",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebStatusEphemeralBadgeUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusGetters",
    "WAWebStatusLoadingRingOverlay.react",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebWamEnumStatusRowSection",
    "WDSProfilePhoto.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebDefaultProfileColors",
    "useWAWebProfilePicThumbValues",
    "useWAWebStatusValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const d = {
        extraSmall: {
            size: 36,
            stroke: 1.5
        },
        small: {
            size: 40,
            stroke: 2
        },
        medium: {
            size: 48,
            stroke: 2
        }
    };
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(29);
        const { contactStatus, hideWhenNoUnreadStatuses, profilePhotoSize, rowIndex, rowSection, shouldShowEphemeralBadge } = e;
        const f = profilePhotoSize === undefined ? "medium" : profilePhotoSize;
        const g = shouldShowEphemeralBadge === undefined ? false : shouldShowEphemeralBadge;
        const h = d[f];
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                o("WAWebStatusGetters").getId,
                o("WAWebFrontendStatusGetters").getContact,
                o("WAWebStatusGetters").getTotalCount,
                o("WAWebStatusGetters").getUnreadCount,
                o("WAWebFrontendStatusGetters").getLastStatus
            ];
            t[0] = y;
        } else {
            y = t[0];
        }
        const C = o("useWAWebStatusValues").useStatusValues(contactStatus.id, y);
        const b = C[0];
        const v = C[1];
        const S = C[2];
        const R = C[3];
        const L = C[4];
        let E;
        if (t[1] !== hideWhenNoUnreadStatuses || t[2] !== b) {
            E = hideWhenNoUnreadStatuses && !(b.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled());
            t[1] = hideWhenNoUnreadStatuses;
            t[2] = b;
            t[3] = E;
        } else {
            E = t[3];
        }
        const noStatusInteraction = R === 0 && E || S === 0;
        let T;
        e: {
            if (!o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() || L == null) {
                T = null;
                break e;
            }
            if (L.statusAudienceMetadata != null) {
                T = o("WDSVars.stylex").WDSBaseColor.plum400;
                break e;
            }
            T = null;
        }
        const D = T;
        let x;
        if (t[4] !== contactStatus || t[5] !== b || t[6] !== noStatusInteraction || t[7] !== rowIndex || t[8] !== rowSection) {
            x = function(t) {
                if (!noStatusInteraction) {
                    t.stopPropagation();
                    t.preventDefault();
                    if (b.isNewsletter()) {
                        o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
                            newsletterJid: o("WAJids").toNewsletterJid(b.toString()),
                            statusModelId: b,
                            rowSection,
                            rowIndex
                        });
                        return;
                    }
                    const e = rowSection === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST || rowSection === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH;
                    const r = e && o("WAWebStatusGatingUtils").isChainFromChatListEnabled();
                    const Component = o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable;
                    o("WAWebModalManager").ModalManager.openMedia(<Component status={contactStatus} onClose={p} continuousPlay={r} prioritizeInitialStatus={r} rowSection={rowSection} rowIndex={rowIndex}/>, {
                        transition: "status-modal"
                    });
                }
            };
            t[4] = contactStatus;
            t[5] = b;
            t[6] = noStatusInteraction;
            t[7] = rowIndex;
            t[8] = rowSection;
            t[9] = x;
        } else {
            x = t[9];
        }
        const $ = x;
        let P;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            P = s._("View status");
            t[10] = P;
        } else {
            P = t[10];
        }
        const N = P;
        let M;
        if (t[11] !== D || t[12] !== v || t[13] !== b || t[14] !== noStatusInteraction || t[15] !== f || t[16] !== g || t[17] !== S || t[18] !== R) {
            M = <_ id={b} contact={v} noStatusInteraction={noStatusInteraction} profilePhotoSize={f} shouldShowEphemeralBadge={g} totalCount={S} unreadCount={R} closeFriendsRingColor={D}/>;
            t[11] = D;
            t[12] = v;
            t[13] = b;
            t[14] = noStatusInteraction;
            t[15] = f;
            t[16] = g;
            t[17] = S;
            t[18] = R;
            t[19] = M;
        } else {
            M = t[19];
        }
        let w;
        if (t[20] !== D || t[21] !== b || t[22] !== h.size || t[23] !== h.stroke || t[24] !== M) {
            const Component = r("WAWebStatusLoadingRingOverlay.react");
            w = <Component customUnreadRingColor={D} id={b} size={h.size} stroke={h.stroke}>{M}</Component>;
            t[20] = D;
            t[21] = b;
            t[22] = h.size;
            t[23] = h.stroke;
            t[24] = M;
            t[25] = w;
        } else {
            w = t[25];
        }
        let A;
        if (t[26] !== $ || t[27] !== w) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            A = <Component onClick={$} tabIndex={0} role="button" aria-label={N}>{w}</Component>;
            t[26] = $;
            t[27] = w;
            t[28] = A;
        } else {
            A = t[28];
        }
        return A;
    }
    function p() {
        return o("WAWebModalManager").ModalManager.closeMedia();
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(35);
        const { closeFriendsRingColor, contact, id, noStatusInteraction, profilePhotoSize, shouldShowEphemeralBadge, totalCount, unreadCount } = e;
        let p;
        if (t[0] !== id) {
            p = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(id);
            t[0] = id;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        let f;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            t[2] = f;
        } else {
            f = t[2];
        }
        const g = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(_.id, f);
        const h = g[0];
        let y;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            let C;
            y = [
                (C = o("WAWebContactGetters")).getName,
                C.getShortName,
                C.getPushname,
                C.getVerifiedName
            ];
            t[3] = y;
        } else {
            y = t[3];
        }
        o("useWAWebContactValues").useContactValues(contact.id, y);
        const b = o("WAWebStatusEphemeralBadgeUtils").useStatusRingEphemeralBadge(id, shouldShowEphemeralBadge);
        let v;
        if (t[4] !== contact) {
            v = o("WAWebInitialsFromNameUtils").getInitialsFromContact(contact);
            t[4] = contact;
            t[5] = v;
        } else {
            v = t[5];
        }
        const S = v;
        let R;
        if (t[6] !== S.firstInitial || t[7] !== S.secondInitial) {
            R = [
                S.firstInitial,
                S.secondInitial
            ].filter(Boolean);
            t[6] = S.firstInitial;
            t[7] = S.secondInitial;
            t[8] = R;
        } else {
            R = t[8];
        }
        const L = R.join("");
        let E;
        if (t[9] !== id) {
            E = o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(id);
            t[9] = id;
            t[10] = E;
        } else {
            E = t[10];
        }
        let k;
        if (t[11] !== contact) {
            k = o("WAWebFrontendContactGetters").getFormattedName(contact);
            t[11] = contact;
            t[12] = k;
        } else {
            k = t[12];
        }
        let I;
        if (t[13] !== id) {
            I = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(id);
            t[13] = id;
            t[14] = I;
        } else {
            I = t[14];
        }
        let T;
        if (t[15] !== id) {
            T = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(id);
            t[15] = id;
            t[16] = T;
        } else {
            T = t[16];
        }
        let D;
        if (t[17] !== id) {
            D = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(id);
            t[17] = id;
            t[18] = D;
        } else {
            D = t[18];
        }
        let statusRing;
        if (t[19] !== closeFriendsRingColor || t[20] !== noStatusInteraction || t[21] !== totalCount || t[22] !== unreadCount) {
            statusRing = noStatusInteraction ? undefined : {
                totalCount,
                viewedCount: totalCount - unreadCount,
                variant: closeFriendsRingColor != null ? "closeFriends" : "default"
            };
            t[19] = closeFriendsRingColor;
            t[20] = noStatusInteraction;
            t[21] = totalCount;
            t[22] = unreadCount;
            t[23] = statusRing;
        } else {
            statusRing = t[23];
        }
        let $;
        if (t[24] !== b || t[25] !== L || t[26] !== profilePhotoSize || t[27] !== h || t[28] !== D || t[29] !== statusRing || t[30] !== E || t[31] !== k || t[32] !== I || t[33] !== T) {
            $ = u.jsx(r("WDSProfilePhoto.react"), {
                type: E,
                name: k,
                src: h,
                size: profilePhotoSize,
                initials: L,
                color: I,
                customColor: T,
                badge: b,
                placeholderIcon: D,
                statusRing,
                isDecorative: true
            });
            t[24] = b;
            t[25] = L;
            t[26] = profilePhotoSize;
            t[27] = h;
            t[28] = D;
            t[29] = statusRing;
            t[30] = E;
            t[31] = k;
            t[32] = I;
            t[33] = T;
            t[34] = $;
        } else {
            $ = t[34];
        }
        return $;
    }
    l.default = MComponent;
}, 226);