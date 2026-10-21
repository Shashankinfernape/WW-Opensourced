__d("WAWebDetailImage.react", [
    "fbt",
    "$InternalEnum",
    "WAShiftTimer",
    "WAWebAvatarSpinner.react",
    "WAWebBotGroupGatingUtils",
    "WAWebBusinessProfileGetters",
    "WAWebCTWAGatingUtils",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatProfilePictureGatingUtils",
    "WAWebClassnames",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebContactCollection",
    "WAWebDefaultNewsletterIcon.react",
    "WAWebDefaultUserColorIcon.react",
    "WAWebDefaultUserSquareIcon.react",
    "WAWebEnvironment",
    "WAWebEphemeralityFrontendUtils",
    "WAWebFMXGatingUtils",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebHasAcceptedBizBotTos",
    "WAWebIdleComponent.react",
    "WAWebImg.react",
    "WAWebInitialsFromNameUtils",
    "WAWebInitialsProfilePicture.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebLidMigrationUtils",
    "WAWebMetaAIIcon.react",
    "WAWebMetaAiRingAssetResolver",
    "WAWebMetaAiThreadChat",
    "WAWebMiscGatingUtils",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebServerErrors",
    "WAWebSquircleStroke.react",
    "WAWebStateUtils",
    "WAWebThemeContext",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUnjoinedSubgroupMetadataGetters",
    "WAWebUserPrefsMeUser",
    "WAWebVerifiedBlueStyles.stylex",
    "WAWebVideoAvatarContent.react",
    "WAWebWaChatPsaIcon.react",
    "WAWebWid",
    "WDSFocusStateStyles",
    "WDSIconIcCampaignMegaphoneFilled.react",
    "WDSIconIcGroupFilled.react",
    "WDSIconIcPersonFilled.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIconWdsIc3PAiBotFilled.react",
    "WDSIconWdsIcBroadcastMessageFill.react",
    "WDSIconWdsIcCommunitiesFilled.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIconWdsIcLogoHatchFilled.react",
    "WDSIconWdsIcMetaDataChevron.react",
    "WDSIconWdsIcMetaDataDoubleChevron.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "cr:5981",
    "gkx",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useWAWebDefaultProfileColors",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebGroupColors",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useMemo, useRef, useState, useTransition } = d;
    const h = {
        padding1: {
            paddingTop: "x4p5aij",
            paddingInlineEnd: "x1ccui7m",
            paddingBottom: "x1j85h84",
            paddingInlineStart: "x18pi947",
            $$css: true
        }
    };
    const y = new Set;
    const C = n("cr:5981") == null ? undefined : n("cr:5981").InternalStatusWarningImageOverlay;
    const b = n("$InternalEnum").Mirrored([
        "ExtraSmall",
        "Small",
        "Medium",
        "Large",
        "Refresh",
        "None"
    ]);
    const v = n("$InternalEnum").Mirrored([
        "Low",
        "High"
    ]);
    const S = n("$InternalEnum").Mirrored([
        "Circle",
        "Square",
        "Squircle"
    ]);
    const R = n("$InternalEnum").Mirrored([
        "GroupChatProfilePicture",
        "Status",
        "MediaHub",
        "GroupStatus"
    ]);
    const L = {
        announcementSpeaker: {
            color: "x1pse0pq",
            $$css: true
        },
        newsletter: {
            color: "x17k9de1",
            $$css: true
        },
        avatarDefaultPSA: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        dimmed: {
            opacity: "x1xccycs",
            $$css: true
        },
        avatar: {
            position: "x1n2onr6",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        status: {
            backgroundColor: "x1gle93d",
            $$css: true
        },
        avatarSquare: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            $$css: true
        },
        avatarImage: {
            position: "x1n2onr6",
            display: "x1lliihq",
            width: "xh8yej3",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            objectFit: "xl1xv1r",
            objectPosition: "x115dhu7",
            opacity: "xg01cxk",
            transition: "x17vty23",
            $$css: true
        },
        isLoaded: {
            opacity: "x1hc1fzr",
            $$css: true
        },
        avatarImageNoTransition: {
            transition: "xq2gx43",
            $$css: true
        },
        aiHubProfileContainer: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        aiHubProfileImageDark: {
            filter: "x1dftt0s",
            $$css: true
        },
        avatarSquircle: {
            clipPath: "x1f2iure",
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            $$css: true
        },
        groupProfilePicture: {
            position: "x10l6tqk",
            insetInlineStart: "x1nobqc8",
            left: null,
            right: null,
            width: "xgd8bvy",
            height: "x1fgtraw",
            $$css: true
        },
        groupProfilePictureInBubble: {
            width: "x14qfxbe",
            height: "xc9qbxq",
            $$css: true
        },
        svgSize: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        },
        profilePictureOutlineRefreshed: {
            outline: "x4u6w88",
            outlineOffset: "x1g40iwv",
            $$css: true
        },
        circleIconRefreshed: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        squircleIconBackground: {
            width: "xh8yej3",
            height: "x5yr21d",
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        avatarBorder: {
            borderTopWidth: "x1ktv7sr",
            borderInlineEndWidth: "x142x0oa",
            borderBottomWidth: "xv7zg05",
            borderInlineStartWidth: "x12dgle5",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x16jw5py",
            borderInlineEndColor: "x13dr7gu",
            borderBottomColor: "xd9srri",
            borderInlineStartColor: "x1ia0k5z",
            $$css: true
        },
        avatarProfileRingBorder: {
            borderTopWidth: "x1ktv7sr",
            borderInlineEndWidth: "x142x0oa",
            borderBottomWidth: "xv7zg05",
            borderInlineStartWidth: "x12dgle5",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1y9zq84",
            borderInlineEndColor: "xt9xd2u",
            borderBottomColor: "x3tsejo",
            borderInlineStartColor: "x1ahzpo1",
            boxSizing: "x9f619",
            $$css: true
        },
        avatarDefaultAnnouncementGroup: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        inviteModal: {
            borderTopWidth: "x1ktv7sr",
            borderInlineEndWidth: "x142x0oa",
            borderBottomWidth: "xv7zg05",
            borderInlineStartWidth: "x12dgle5",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x19bsprb",
            borderInlineEndColor: "x2cy9dh",
            borderBottomColor: "x1eeqclz",
            borderInlineStartColor: "x1mx0rqa",
            backgroundColor: "x16w0wmm",
            $$css: true
        },
        wrapper: {
            position: "x1n2onr6",
            $$css: true
        },
        outline: {
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            $$css: true
        },
        badge: {
            position: "x10l6tqk",
            insetInlineEnd: "xhu3bip",
            bottom: "x48lskh",
            zIndex: "x16uhe5s",
            boxSizing: "x9f619",
            width: "xw4jnvo",
            height: "x1qx5ct2",
            pointerEvents: "x47corl",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        chatList: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        chatListHoveredOrActive: {
            background: "x8b8lpe",
            $$css: true
        },
        conversationHeader: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        subgroupJoinModal: {
            backgroundColor: "x1280gxy",
            width: "x1849jeq",
            height: "x1gnnpzl",
            insetInlineEnd: "xtijo5x",
            bottom: "x1ey2m1c",
            $$css: true
        },
        adsDataSharingIconBackground: {
            backgroundColor: "x1c7u0tx",
            $$css: true
        },
        badgeIconSVG: {
            width: "x1xp8n7a",
            height: "xmix8c7",
            $$css: true
        },
        polls: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            $$css: true
        },
        pollsSender: {
            borderTopColor: "x3ewwah",
            borderInlineEndColor: "xzt7qbt",
            borderBottomColor: "x1xnb2cf",
            borderInlineStartColor: "xphqdy3",
            $$css: true
        },
        pollsReceiver: {
            borderTopColor: "xm7onvi",
            borderInlineEndColor: "xxy6lca",
            borderBottomColor: "x4728lr",
            borderInlineStartColor: "x4bbfdb",
            $$css: true
        },
        backgroundFill: {
            fill: "x1flh12g",
            $$css: true
        },
        primaryFill: {
            fill: "xvt3oi1",
            $$css: true
        },
        primaryColor: {
            color: "xhslqc4",
            $$css: true
        },
        broadcastIconContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        broadcastIconOuter: {
            width: "xycev2y",
            height: "x39lw6i",
            color: "xhslqc4",
            $$css: true
        },
        badgeIconPathSVG: {
            color: "xhslqc4",
            $$css: true
        },
        dataSharingUpdatedStyleIcon: {
            color: "xrl28ub",
            $$css: true
        },
        dataSharingNewStyleIcon: {
            backgroundColor: "x1c7u0tx",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            color: "xhslqc4",
            $$css: true
        },
        subgroupJoinModalSvgStyle: {
            width: "xgd8bvy",
            height: "x1fgtraw",
            $$css: true
        },
        groupProfilePictureSticky: {
            position: "x7wzq59",
            top: "x1eu8d0j",
            $$css: true
        },
        groupProfilePictureNonSticky: {
            position: "x1n2onr6",
            insetInlineStart: "xhi6v0a",
            left: null,
            right: null,
            $$css: true
        },
        fullSize: {
            height: "x5yr21d",
            width: "xh8yej3",
            $$css: true
        },
        clickable: {
            cursor: "x1ypdohk",
            $$css: true
        },
        dimensions: function(t, n) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    width: n != null ? "x5lhr3w" : n,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(n)
                }
            ];
        }
    };
    const E = 100;
    const k = {
        height: 40,
        width: 40,
        x: -8,
        y: -8
    };
    function I(t) {
        const { alt, id, imgClassName, imgXstyle, loader } = t;
        const d = loader === undefined ? false : loader;
        const t_loadingAnimation = t.loadingAnimation;
        const h = t_loadingAnimation === undefined ? true : t_loadingAnimation;
        const { onLoad, profilePicThumb, profilePicThumbImg, spinnerClassName, spinnerSize, spinnerXstyle, theme } = t;
        const D = o("WAWebThemeContext").useIsDarkTheme();
        const x = useState(false);
        const $ = x[0];
        const P = x[1];
        const N = useState(profilePicThumbImg);
        const M = N[0];
        const w = N[1];
        const A = id instanceof r("WAWebWid") && r("WAWebWid").isAiHub(id);
        const F = M != null ? y.has(M) : false;
        const O = useState(F ? false : (id instanceof r("WAWebWid") && id?.isBot()) !== true);
        const B = O[0];
        const W = O[1];
        const q = useState(F);
        const U = q[0];
        const V = q[1];
        const HRef = useRef(!!profilePicThumbImg);
        const GRef = useRef(false);
        const z = theme !== "business";
        const j = r("useLazyRef")(function() {
            if (d && z) {
                return new (o("WAShiftTimer")).ShiftTimer(function() {
                    P(true);
                });
            }
            return null;
        });
        const K = useTransition();
        const Q = K[0];
        const X = K[1];
        if (profilePicThumbImg !== M) {
            w(profilePicThumbImg);
            W(true);
            V(false);
        }
        const Y = function(t) {
            X(function() {
                j.current?.cancel();
                profilePicThumb.markMms4HostSuccess();
                W(false);
                V(true);
                onLoad?.();
                const t_target = t.target;
                if (M != null && t_target instanceof HTMLImageElement && t_target.complete) {
                    y.add(M);
                }
            });
        };
        const J = function(t) {
            j.current?.cancel();
            if (t instanceof o("WAWebServerErrors").ServerStatusError) {
                switch(t.status){
                    case 403:
                    case 404:
                        profilePicThumb.markStale({
                            eurl: true
                        });
                        if (!GRef.current) {
                            GRef.current = true;
                            profilePicThumb.validate();
                        }
                        break;
                    case 410:
                        profilePicThumb.markStale();
                        break;
                    default:
                        if (o("WAWebMmsClientIsErrorRetryable").isRetriableStatusCode(t.status)) {
                            profilePicThumb.markMms4HostFailure();
                        }
                        break;
                }
            }
            W(false);
            V(false);
        };
        useEffect(function() {
            const t = j;
            t.current?.onOrAfter(E);
            return function() {
                t.current?.cancel();
            };
        }, [
            profilePicThumb,
            j
        ]);
        const Z = ()=>{
            if (z) {
                return !!d && $ && B && !(!o("WAWebStateUtils").unproxy(profilePicThumb).stale && !M);
            }
            return false;
        };
        const ee = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
            [imgClassName]: typeof imgClassName === "string"
        }, (e || (e = r("stylex")))(h === false && HRef.current && L.avatarImageNoTransition, L.avatarImage, t.shape === S.Square && L.avatarSquare, t.shape === S.Squircle && L.avatarSquircle, !B && L.isLoaded, t.shape !== S.Squircle && L.profilePictureOutlineRefreshed, A && D && L.aiHubProfileImageDark, imgXstyle));
        let te;
        let ne;
        if (Z()) {
            const Component = r("WAWebAvatarSpinner.react");
            te = <Component className={spinnerClassName} xstyle={spinnerXstyle} size={spinnerSize}/>;
        }
        if (!r("isStringNullOrEmpty")(M)) {
            const Component = r("WAWebImg.react");
            const re = <Component src={M} hasPrivacyChecks crossOrigin={false} className={ee} draggable={false} onLoad={Y} onError={J} alt={alt}/>;
            if (t.shape === S.Squircle) {
                ne = <div className="x1n2onr6 xh8yej3 x5yr21d x1f2iure">{re}{c.jsx(r("WAWebSquircleStroke.react"), {})}</div>;
            } else {
                ne = re;
            }
        }
        let oe = U ? null : t.defaultIcon;
        if (h === false) {
            oe = ne != null ? null : t.defaultIcon;
        }
        return <>{te}{oe}{ne}</>;
    }
    I.displayName = `${I.name} [from ${i.id}]`;
    function T(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebProfilePicThumbGetters").getImgFull
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(e.profilePicThumb.id, n);
        const a = r[0];
        let i;
        if (t[1] !== a || t[2] !== e) {
            i = <I {...babelHelpers.extends({}, e, {
                profilePicThumbImg: a
            })}/>;
            t[1] = a;
            t[2] = e;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function D(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(e.profilePicThumb.id, n);
        const a = r[0];
        let i;
        if (t[1] !== a || t[2] !== e) {
            i = <I {...babelHelpers.extends({}, e, {
                profilePicThumbImg: a
            })}/>;
            t[1] = a;
            t[2] = e;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function x(theme) {
        if (theme === "group_profile_picture" || theme === "group_profile_picture_in_bubble") {
            return R.GroupChatProfilePicture;
        }
        if (theme === "status") {
            return R.Status;
        }
        if (theme === "media_hub") {
            return R.MediaHub;
        }
        if (theme === "group_status") {
            return R.GroupStatus;
        }
        return null;
    }
    const $ = 28;
    function P(e) {
        if (typeof e === "string") {
            switch(e){
                case b.ExtraSmall:
                    return 40;
                case b.Small:
                    return 49;
                case b.Medium:
                    return 100;
                case b.Large:
                    return 200;
                case b.Refresh:
                    return 128;
                case b.None:
                    return;
            }
        } else {
            return e;
        }
    }
    function NComponent(t) {
        "use no forget";
        const { id, size, quality } = t;
        const d = quality === undefined ? v.Low : quality;
        const { loader, onClick, onLoad, quoted, shape, border, waitIdle, ephemeralIcon, isHoveredOrActive } = t;
        const B = isHoveredOrActive === undefined ? false : isHoveredOrActive;
        const { checkmarkIcon, hiddenSubgroupIcon, groupAgentIndicator, aiGroupIcon, theme, alt, xstyle, authorColor, loadPicture } = t;
        const Q = loadPicture === undefined ? true : loadPicture;
        const t_loadAnimation = t.loadAnimation;
        const loadingAnimation = t_loadAnimation === undefined ? true : t_loadAnimation;
        const { tabIndex, ariaLabel, testId, tabOrder, showOutline } = t;
        const re = showOutline === undefined ? false : showOutline;
        const { enableAdsDataSharingIcon, enableBizAiDataSharingIcon } = t;
        const ie = enableBizAiDataSharingIcon === undefined ? false : enableBizAiDataSharingIcon;
        const t_groupProfilePictureSticky = t.groupProfilePictureSticky;
        const se = t_groupProfilePictureSticky === undefined ? false : t_groupProfilePictureSticky;
        const { videoUrl, customDimensionsStyle } = t;
        const de = customDimensionsStyle === undefined ? false : customDimensionsStyle;
        const t_secondaryAvatar = t.secondaryAvatar;
        const pe = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const _eRef = useRef(null);
        const fe = r("useWAWebIsKeyboardUser")();
        const fe_isKeyboardUser = fe.isKeyboardUser;
        const he = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos();
        const ye = useMemo(function() {
            let e = id;
            let t = o("WAWebChatCollection").ChatCollection.get(e);
            if (!t && e.isRegularUser()) {
                try {
                    const n = e.isLid() ? o("WAWebLidMigrationUtils").toPn(e) : o("WAWebLidMigrationUtils").toLid(e);
                    if (n) {
                        t = o("WAWebChatCollection").ChatCollection.get(n);
                        if (t) {
                            e = n;
                        } else {
                            const r = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(n);
                            const a = o("WAWebProfilePicThumbGetters").getMaybeImg(r);
                            if (a != null && a !== "") {
                                e = n;
                            }
                        }
                    }
                } catch (e) {}
            }
            return {
                id: e,
                chat: t
            };
        }, [
            id
        ]);
        const { chat, id: id_1 } = ye;
        let ve;
        if (typeof size === "number") {
            ve = size > 0 ? size : b.Small;
        } else {
            ve = size ?? b.Small;
        }
        const Se = t_secondaryAvatar != null;
        const Re = de ? null : P(ve);
        const Le = Re == null ? null : L.dimensions(Re, Re);
        let groupType;
        let ke;
        if (chat?.groupMetadata?.participants?.iAmMember()) {
            if (o("WAWebChatGetters").getIsGroup(chat)) {
                groupType = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata);
                ke = chat.groupMetadata;
            }
        } else {
            const Ie = r("WAWebUnjoinedSubgroupMetadataCollection").get(id_1.toString());
            groupType = Ie != null ? o("WAWebUnjoinedSubgroupMetadataGetters").getGroupType(Ie) : undefined;
            ke = Ie;
        }
        o("useWAWebListener").useListener(chat != null && o("WAWebChatGetters").getIsGroup(chat) ? ke : chat, "change:ephemeralDuration", pe);
        o("useWAWebListener").useListener(chat, "change:isSenderSuspicious", pe);
        const Te = r("useWAWebEventTargetValue")(ke, "change:hiddenSubgroup", function() {
            return ke?.hiddenSubgroup === true;
        });
        const De = (e || (e = r("stylex"))).props(L.avatar, r("WAWebWid").isAiHub(id_1) && L.aiHubProfileContainer, theme === "status" && L.status, shape === S.Square && L.avatarSquare, shape === S.Squircle && L.avatarSquircle, theme === "group_profile_picture" && L.groupProfilePicture, theme === "group_profile_picture_in_bubble" && L.groupProfilePictureInBubble, theme === "status_profile_photo_ring" && L.avatarProfileRingBorder, theme === "invite_modal" && L.inviteModal, (theme === "polls_sender" || theme === "polls_receiver") && L.polls, theme === "polls_sender" && L.pollsSender, theme === "polls_receiver" && L.pollsReceiver, o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(chat) && L.dimmed, border === true && L.avatarBorder, groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && L.avatarDefaultAnnouncementGroup, onClick != null && fe_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, re && L.outline, theme === "group_profile_picture" && se && (r("gkx")("9189") ? L.groupProfilePictureNonSticky : L.groupProfilePictureSticky), xstyle, Se ? L.fullSize : Le, onClick != null && L.clickable);
        const xe = function(t) {
            if (r("WAWebKeyboardIsKeyActivation")(t)) {
                _eRef.current?.click();
            }
        };
        const $e = onClick != null ? {
            tabIndex,
            role: "button",
            "aria-label": ariaLabel,
            onKeyDown: xe
        } : {};
        const Pe = x(theme);
        let Ne = <W5Component id={id_1} quoted={quoted} groupType={groupType} theme={Pe} authorColor={authorColor} shape={t.shape}/>;
        if ((theme === "group_profile_picture" || theme === "typing_indicator" || theme === "reaction_details") && o("WAWebChatProfilePictureGatingUtils").shouldDisplayInitialsInProfilePicture(id_1)) {
            const Me = o("WAWebContactCollection").ContactCollection.get(id_1);
            if (Me) {
                const we = o("WAWebInitialsFromNameUtils").getInitialsFromContact(Me);
                if (we.firstInitial != null || we.secondInitial != null) {
                    Ne = c.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
                        initialsData: we,
                        theme: o("WAWebInitialsProfilePicture.react").ThemeType.GroupChatProfilePicture,
                        backgroundColorId: authorColor ?? 1,
                        wid: id_1
                    });
                }
            }
        }
        const AeComponent = function() {
            let e = null;
            let t;
            if (Q) {
                t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(id_1);
            } else {
                t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(id_1);
            }
            const n = chat != null && !chat.trusted && chat.isSenderSuspicious === true && o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled();
            if (n) {
                e = Ne;
            } else if (videoUrl != null && t) {
                const imageUrl = t.get("eurl") ?? o("WAWebProfilePicThumbGetters").getImg(t) ?? null;
                const Component = r("WAWebVideoAvatarContent.react");
                e = <Component alt={alt} imageUrl={imageUrl} onLoad={onLoad} shape={shape} videoUrl={videoUrl}/>;
            } else {
                if (t) {
                    if (d === v.High) {
                        e = <T profilePicThumb={t} defaultIcon={Ne} loader={loader} onLoad={onLoad} alt={alt} shape={shape} id={id_1}/>;
                    } else {
                        e = <D profilePicThumb={t} defaultIcon={Ne} loader={loader} onLoad={onLoad} alt={alt} loadingAnimation={loadingAnimation} shape={shape} id={id_1}/>;
                    }
                } else {
                    e = Ne;
                }
            }
            return <div {...babelHelpers.extends({
                "data-testid": testId,
                ref: _eRef,
                "data-tab": tabOrder
            }, $e, De, {
                onClick,
                children: [
                    e,
                    !r("gkx")("26258") && (typeof size !== "number" || size >= $) && C ? <C id={id_1}/> : null
                ]
            })}/>;
        };
        const Fe = useMemo(function() {
            if (!Q) {
                return false;
            }
            const e = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(id_1);
            const t = o("WAWebProfilePicThumbGetters").getMaybeImg(e);
            if (t != null && t !== "") {
                y.add(t);
                return true;
            }
            return false;
        }, [
            id_1,
            Q
        ]);
        const Oe = (!r("WAWebEnvironment").isWindows || waitIdle === true) && !Fe;
        const Component = r("WAWebIdleComponent.react");
        const Be = Oe ? <Component id={id_1} onComplex={AeComponent} waitIdle={waitIdle}><div {...babelHelpers.extends({
            ref: _eRef
        }, $e, De, {
            onClick,
            children: Ne
        })}/></Component> : AeComponent();
        if (Se) {
            return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(L.wrapper, Le), {
                children: [
                    <div className="x10l6tqk x1ey2m1c xtijo5x x1vz4e29 x1kx422t">{t_secondaryAvatar}</div>,
                    <div className="x10l6tqk x13vifvy x1o0tod x1vz4e29 x1kx422t x1c9tyrk xeusxvb x1pahc9y x1ertn4p xy9pznf">{Be}</div>
                ]
            })}/>;
        }
        if (t.emojiBadge != null && o("WAWebUserPrefsMeUser").isMeAccount(id_1)) {
            return <div className="x1n2onr6" aria-label={s._("Profile picture, text status emoji set")}><div className="x10l6tqk xhu3bip x48lskh x16uhe5s x9f619 xw4jnvo x1qx5ct2 x47corl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1h3rtpe">{t.emojiBadge}</div>{Be}</div>;
        }
        const We = chat?.contact?.businessProfile;
        const qe = We != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(We);
        const Ue = he && o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled();
        const shouldShowBizAiDataSharingIcon = ie && qe && Ue;
        const shouldShowEphemeralIcon = A(ephemeralIcon, chat);
        const shouldShowAIGroupIcon = aiGroupIcon === "conversation-header" && F(chat);
        const shouldShowAdsDataSharingIcon = enableAdsDataSharingIcon === true && chat != null && o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(chat);
        const shouldShowHiddenSubgroupIcon = hiddenSubgroupIcon != null && checkmarkIcon == null && Te;
        if (shouldShowBizAiDataSharingIcon || shouldShowEphemeralIcon === true || checkmarkIcon || shouldShowAdsDataSharingIcon || shouldShowHiddenSubgroupIcon || groupAgentIndicator != null || shouldShowAIGroupIcon) {
            const iconScheme = ephemeralIcon ?? checkmarkIcon ?? hiddenSubgroupIcon;
            return <div className="x1n2onr6" aria-hidden="true"><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(L.badge, h.padding1, iconScheme === "chat-list" && !B && L.chatList, iconScheme === "chat-list" && B && L.chatListHoveredOrActive, iconScheme === "conversation-header" && L.conversationHeader, iconScheme === "subgroup-join-modal" && L.subgroupJoinModal, shouldShowAdsDataSharingIcon && L.adsDataSharingIconBackground), {
                children: <M groupAgentIndicator={groupAgentIndicator} iconScheme={iconScheme} shouldShowEphemeralIcon={shouldShowEphemeralIcon} shouldShowHiddenSubgroupIcon={shouldShowHiddenSubgroupIcon} shouldShowAdsDataSharingIcon={shouldShowAdsDataSharingIcon} shouldShowBizAiDataSharingIcon={shouldShowBizAiDataSharingIcon} shouldShowAIGroupIcon={shouldShowAIGroupIcon}/>
            })}/>{Be}</div>;
        }
        return Be;
    }
    NComponent.displayName = `${NComponent.name} [from ${i.id}]`;
    function M(e) {
        const t = o("react-compiler-runtime").c(17);
        const { groupAgentIndicator, iconScheme, shouldShowAdsDataSharingIcon, shouldShowAIGroupIcon, shouldShowBizAiDataSharingIcon, shouldShowEphemeralIcon, shouldShowHiddenSubgroupIcon } = e;
        const m = shouldShowAdsDataSharingIcon === undefined ? false : shouldShowAdsDataSharingIcon;
        const p = shouldShowAIGroupIcon === undefined ? false : shouldShowAIGroupIcon;
        const _ = shouldShowBizAiDataSharingIcon === undefined ? false : shouldShowBizAiDataSharingIcon;
        const f = shouldShowEphemeralIcon === undefined ? false : shouldShowEphemeralIcon;
        const g = shouldShowHiddenSubgroupIcon === undefined ? false : shouldShowHiddenSubgroupIcon;
        const h = iconScheme === "subgroup-join-modal" && L.subgroupJoinModalSvgStyle;
        let y;
        if (t[0] !== h) {
            y = {
                xstyle: L.badgeIconPathSVG,
                iconXstyle: [
                    L.svgSize,
                    L.badgeIconSVG,
                    h
                ]
            };
            t[0] = h;
            t[1] = y;
        } else {
            y = t[1];
        }
        const C = y;
        if (_) {
            let b;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                b = c.jsx(r("WDSIconWdsIcMetaDataDoubleChevron.react"), {
                    iconXstyle: [
                        L.svgSize,
                        L.badgeIconSVG,
                        L.dataSharingUpdatedStyleIcon
                    ],
                    testid: "double-chevron-in-circle"
                });
                t[2] = b;
            } else {
                b = t[2];
            }
            return b;
        }
        if (m) {
            let v;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                v = c.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
                    testid: "single-chevron-in-circle",
                    height: 18,
                    width: 18,
                    iconXstyle: [
                        L.badgeIconSVG,
                        L.dataSharingNewStyleIcon
                    ]
                });
                t[3] = v;
            } else {
                v = t[3];
            }
            return v;
        }
        if (groupAgentIndicator === "muse") {
            let S;
            if (t[4] !== C) {
                S = c.jsx(r("WDSIconWdsIcLogoHatchFilled.react"), babelHelpers.extends({
                    testid: "conversation-header-muse-agent-badge"
                }, C));
                t[4] = C;
                t[5] = S;
            } else {
                S = t[5];
            }
            return S;
        }
        if (groupAgentIndicator === "aiAgents") {
            let R;
            if (t[6] !== C) {
                R = c.jsx(r("WDSIconWdsIc3PAiBotFilled.react"), babelHelpers.extends({
                    testid: "conversation-header-ai-agents-badge"
                }, C));
                t[6] = C;
                t[7] = R;
            } else {
                R = t[7];
            }
            return R;
        }
        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && p) {
            let E;
            if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                E = c.jsx(r("WAWebMetaAIIcon.react"), {
                    height: 17,
                    width: 17
                });
                t[8] = E;
            } else {
                E = t[8];
            }
            return E;
        }
        if (f === true) {
            let k;
            if (t[9] !== C) {
                k = c.jsx(r("WDSIconWdsIcDisappearingMessages.react"), babelHelpers.extends({
                    testid: "disappearing-messages-refreshed"
                }, C));
                t[9] = C;
                t[10] = k;
            } else {
                k = t[10];
            }
            return k;
        }
        if (g) {
            let I;
            if (t[11] !== C) {
                I = c.jsx(r("WDSIconIcVisibilityOff.react"), babelHelpers.extends({}, C));
                t[11] = C;
                t[12] = I;
            } else {
                I = t[12];
            }
            return I;
        }
        if (o("WAWebMiscGatingUtils").isBlueEnabled()) {
            let T;
            if (t[13] !== C) {
                T = c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), babelHelpers.extends({
                    testid: "psa-verified-blue"
                }, C, {
                    viewBox: o("WAWebVerifiedBlueStyles.stylex").VERIFIED_BLUE_FIXED_BOX_VIEWBOX,
                    xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
                }));
                t[13] = C;
                t[14] = T;
            } else {
                T = t[14];
            }
            return T;
        }
        let D;
        if (t[15] !== C) {
            D = c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), babelHelpers.extends({
                testid: "psa-verified"
            }, C, {
                xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
            }));
            t[15] = C;
            t[16] = D;
        } else {
            D = t[16];
        }
        return D;
    }
    function W5Component(t) {
        const n = o("react-compiler-runtime").c(59);
        const { authorColor, groupType, id, quoted, shape, theme, xstyle } = t;
        const p = o("useWAWebDefaultProfileColors").useDefaultProfileColors(id);
        const { background, foreground } = p;
        const g = o("useWAWebGroupColors").useGroupsColorStyle(authorColor ?? 1, "color");
        const h = id.isBot() && o("WAWebMetaAiThreadChat").isMetaAiThreadChat(id);
        const y = foreground ?? L.primaryColor;
        let C;
        if (n[0] !== background || n[1] !== y || n[2] !== xstyle) {
            C = [
                L.svgSize,
                L.circleIconRefreshed,
                L.profilePictureOutlineRefreshed,
                background,
                y,
                xstyle
            ];
            n[0] = background;
            n[1] = y;
            n[2] = xstyle;
            n[3] = C;
        } else {
            C = n[3];
        }
        let b;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                height: 40,
                width: 40,
                x: -8,
                y: -8
            };
            n[4] = b;
        } else {
            b = n[4];
        }
        let v;
        if (n[5] !== C) {
            v = c.jsx(r("WDSIconIcPersonFilled.react"), {
                iconXstyle: C,
                "aria-hidden": true,
                height: 212,
                testid: "default-contact-refreshed",
                viewBox: b,
                width: 212
            });
            n[5] = C;
            n[6] = v;
        } else {
            v = n[6];
        }
        let E = v;
        if (r("WAWebWid").isUser(id) && !r("WAWebWid").isPSA(id) && !id.isSupportAgentBot() && !h && quoted) {
            let I;
            if (n[7] !== xstyle) {
                I = [
                    L.svgSize,
                    xstyle
                ];
                n[7] = xstyle;
                n[8] = I;
            } else {
                I = n[8];
            }
            let T;
            if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
                T = {
                    primary: L.primaryFill,
                    background: L.backgroundFill
                };
                n[9] = T;
            } else {
                T = n[9];
            }
            let D;
            if (n[10] !== I) {
                D = c.jsx(o("WAWebDefaultUserSquareIcon.react").DefaultUserSquareIcon, {
                    iconXstyle: I,
                    "aria-hidden": true,
                    innerStyles: T
                });
                n[10] = I;
                n[11] = D;
            } else {
                D = n[11];
            }
            E = D;
        } else if (r("WAWebWid").isGroup(id)) {
            if (groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                let x;
                if (n[12] !== xstyle) {
                    x = c.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), {
                        directional: true,
                        iconXstyle: [
                            L.svgSize,
                            L.announcementSpeaker,
                            xstyle
                        ],
                        "aria-hidden": true
                    });
                    n[12] = xstyle;
                    n[13] = x;
                } else {
                    x = n[13];
                }
                E = x;
            } else if (groupType === o("WAWebGroupType").GroupType.COMMUNITY || shape === S.Squircle) {
                let $;
                if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
                    $ = {
                        className: "x1n2onr6 xh8yej3 x5yr21d x1f2iure"
                    };
                    n[14] = $;
                } else {
                    $ = n[14];
                }
                let P;
                if (n[15] !== background) {
                    P = (e || (e = r("stylex"))).props(L.squircleIconBackground, background);
                    n[15] = background;
                    n[16] = P;
                } else {
                    P = n[16];
                }
                const N = foreground ?? L.primaryColor;
                let M;
                if (n[17] !== N || n[18] !== xstyle) {
                    M = c.jsx(r("WDSIconWdsIcCommunitiesFilled.react"), {
                        iconXstyle: [
                            L.svgSize,
                            N,
                            xstyle
                        ],
                        "aria-hidden": true,
                        height: 212,
                        testid: "default-community-refreshed",
                        viewBox: k,
                        width: 212
                    });
                    n[17] = N;
                    n[18] = xstyle;
                    n[19] = M;
                } else {
                    M = n[19];
                }
                let w;
                if (n[20] !== P || n[21] !== M) {
                    w = <div {...babelHelpers.extends({}, P, {
                        children: M
                    })}/>;
                    n[20] = P;
                    n[21] = M;
                    n[22] = w;
                } else {
                    w = n[22];
                }
                let A;
                if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
                    A = c.jsx(r("WAWebSquircleStroke.react"), {});
                    n[23] = A;
                } else {
                    A = n[23];
                }
                let F;
                if (n[24] !== w) {
                    F = <div {...babelHelpers.extends({}, $, {
                        children: [
                            w,
                            A
                        ]
                    })}/>;
                    n[24] = w;
                    n[25] = F;
                } else {
                    F = n[25];
                }
                E = F;
            } else if (groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) {
                let O;
                if (n[26] === Symbol.for("react.memo_cache_sentinel")) {
                    O = c.jsx(o("WAWebCommunityGeneralChatImage.react").CommunityGeneralChatImage, {});
                    n[26] = O;
                } else {
                    O = n[26];
                }
                E = O;
            } else {
                const B = foreground ?? L.primaryColor;
                let W;
                if (n[27] !== background || n[28] !== B || n[29] !== xstyle) {
                    W = [
                        L.svgSize,
                        L.circleIconRefreshed,
                        L.profilePictureOutlineRefreshed,
                        background,
                        B,
                        xstyle
                    ];
                    n[27] = background;
                    n[28] = B;
                    n[29] = xstyle;
                    n[30] = W;
                } else {
                    W = n[30];
                }
                let q;
                if (n[31] === Symbol.for("react.memo_cache_sentinel")) {
                    q = {
                        height: 40,
                        width: 40,
                        x: -8,
                        y: -8
                    };
                    n[31] = q;
                } else {
                    q = n[31];
                }
                let U;
                if (n[32] !== W) {
                    U = c.jsx(r("WDSIconIcGroupFilled.react"), {
                        iconXstyle: W,
                        "aria-hidden": true,
                        height: 212,
                        testid: "default-group-refreshed",
                        viewBox: q,
                        width: 212
                    });
                    n[32] = W;
                    n[33] = U;
                } else {
                    U = n[33];
                }
                E = U;
            }
        } else if (r("WAWebWid").isBroadcast(id)) {
            let V;
            if (n[34] !== xstyle) {
                V = (e || (e = r("stylex"))).props(L.svgSize, L.circleIconRefreshed, L.profilePictureOutlineRefreshed, L.broadcastIconContainer, xstyle);
                n[34] = xstyle;
                n[35] = V;
            } else {
                V = n[35];
            }
            let H;
            if (n[36] === Symbol.for("react.memo_cache_sentinel")) {
                H = c.jsx(r("WDSIconWdsIcBroadcastMessageFill.react"), {
                    xstyle: L.broadcastIconOuter,
                    iconXstyle: L.svgSize,
                    "aria-hidden": true
                });
                n[36] = H;
            } else {
                H = n[36];
            }
            let G;
            if (n[37] !== V) {
                G = <div {...babelHelpers.extends({}, V, {
                    children: H
                })}/>;
                n[37] = V;
                n[38] = G;
            } else {
                G = n[38];
            }
            E = G;
        } else if (r("WAWebWid").isPSA(id) || id.isSupportAgentBot()) {
            let z;
            if (n[39] !== xstyle) {
                z = c.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, {
                    iconXstyle: [
                        L.svgSize,
                        L.avatarDefaultPSA,
                        xstyle
                    ],
                    "aria-hidden": true
                });
                n[39] = xstyle;
                n[40] = z;
            } else {
                z = n[40];
            }
            E = z;
        } else if (h) {
            let j;
            if (n[41] === Symbol.for("react.memo_cache_sentinel")) {
                j = "xh8yej3 x5yr21d x1c9tyrk xeusxvb x1pahc9y x1ertn4p";
                n[41] = j;
            } else {
                j = n[41];
            }
            let K;
            if (n[42] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = r("WAWebImg.react");
                K = <Component alt="" className={j} draggable={false} src={o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL()} testid="default-meta-ai-thread"/>;
                n[42] = K;
            } else {
                K = n[42];
            }
            E = K;
        } else if (r("WAWebWid").isNewsletter(id)) {
            let Q;
            if (n[43] !== xstyle) {
                Q = [
                    L.svgSize,
                    L.newsletter,
                    xstyle
                ];
                n[43] = xstyle;
                n[44] = Q;
            } else {
                Q = n[44];
            }
            let X;
            if (n[45] === Symbol.for("react.memo_cache_sentinel")) {
                X = {
                    primary: L.primaryFill,
                    background: L.backgroundFill
                };
                n[45] = X;
            } else {
                X = n[45];
            }
            let Y;
            if (n[46] !== Q) {
                Y = c.jsx(o("WAWebDefaultNewsletterIcon.react").DefaultNewsletterIcon, {
                    iconXstyle: Q,
                    "aria-hidden": true,
                    innerStyles: X
                });
                n[46] = Q;
                n[47] = Y;
            } else {
                Y = n[47];
            }
            E = Y;
        }
        let J;
        if (n[48] !== theme) {
            J = ({
                0: {
                    className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d"
                },
                4: {
                    className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d xfimr68 x1jpgh95"
                },
                2: {
                    className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw"
                },
                6: {
                    className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xfimr68 x1jpgh95 xgd8bvy x1fgtraw"
                },
                1: {
                    className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xh8yej3 x5yr21d x1n2onr6 x1lliihq"
                },
                5: {
                    className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xh8yej3 x5yr21d xfimr68 x1jpgh95 x1n2onr6 x1lliihq"
                },
                3: {
                    className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1n2onr6 x1lliihq"
                },
                7: {
                    className: "x13vifvy x1o0tod x6s0dn4 xl56j7k xfimr68 x1jpgh95 xgd8bvy x1fgtraw x1n2onr6 x1lliihq"
                }
            })[(theme === R.Status) << 2 | (theme === R.MediaHub) << 1 | (theme === R.GroupStatus) << 0];
            n[48] = theme;
            n[49] = J;
        } else {
            J = n[49];
        }
        let Z;
        if (n[50] !== E || n[51] !== J) {
            Z = <div {...babelHelpers.extends({}, J, {
                key: "default"
            })}>{E}</div>;
            n[50] = E;
            n[51] = J;
            n[52] = Z;
        } else {
            Z = n[52];
        }
        let ee = Z;
        if (theme === R.GroupChatProfilePicture) {
            let te;
            if (n[53] === Symbol.for("react.memo_cache_sentinel")) {
                te = {
                    className: "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d"
                };
                n[53] = te;
            } else {
                te = n[53];
            }
            let ne;
            if (n[54] !== xstyle) {
                ne = [
                    L.svgSize,
                    xstyle
                ];
                n[54] = xstyle;
                n[55] = ne;
            } else {
                ne = n[55];
            }
            let re;
            if (n[56] !== g || n[57] !== ne) {
                re = <div {...babelHelpers.extends({}, te, {
                    key: "default"
                })}>{c.jsx(o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon, {
                    iconXstyle: ne,
                    xstyle: g
                })}</div>;
                n[56] = g;
                n[57] = ne;
                n[58] = re;
            } else {
                re = n[58];
            }
            ee = re;
        }
        return ee;
    }
    function A(ephemeralIcon, chat) {
        return !!(ephemeralIcon != null && chat && o("WAWebChatEphemerality").isEphemeralSettingOn(chat) && !o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForChat(chat));
    }
    function F(chat) {
        return o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && chat?.groupMetadata?.isOpenBotGroup === true;
    }
    l.DetailImageSize = b;
    l.DetailImageQuality = v;
    l.DetailImageShape = S;
    l.DefaultIconThemeType = R;
    l.DEFAULT_AVATAR_GLYPH_VIEW_BOX = k;
    l.DetailImageCommon = I;
    l.getSize = P;
    l.DetailImage = NComponent;
    l.ImageIcon = M;
    l.DefaultIcon = W5Component;
}, 226);