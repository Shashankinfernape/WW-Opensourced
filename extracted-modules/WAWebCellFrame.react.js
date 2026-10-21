__d("WAWebCellFrame.react", [
    "WDSFocusStateStyles",
    "cr:23442",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        chat: {
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            height: "xy75621",
            marginInlineStart: "x1hm9lzh",
            marginInlineEnd: "x1sa5p1d",
            pointerEvents: "x71s49j",
            position: "x1n2onr6",
            $$css: true
        },
        chatInteractive: {
            cursor: "x1ypdohk",
            ":hover_backgroundColor": "x1ubxc9n",
            ":focus_backgroundColor": "xbmkbis",
            $$css: true
        },
        chatInteractiveRefreshed: {
            cursor: "x1ypdohk",
            ":hover_backgroundColor": "x17gydlx",
            ":focus_backgroundColor": "x1jsj9aw",
            $$css: true
        },
        chatActive: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        chatDrag: {
            backgroundColor: "x4wrhlh",
            transitionDuration: "x1wsgiic",
            transitionTimingFunction: "xrix70t",
            $$css: true
        },
        chatIdle: {
            cursor: "xt0e3qv",
            $$css: true
        },
        chatMuted: {
            opacity: "xbyyjgo",
            $$css: true
        },
        chatDisabled: {
            cursor: "x1h6gzvc",
            $$css: true
        },
        chatInteractiveIdle: {
            ":hover_backgroundColor": "xlqxigy",
            ":hover_cursor": "x1wud0mn",
            $$css: true
        },
        chatInteractiveIdleThemeReaction: {
            ":hover_backgroundColor": "x1paxslp",
            ":hover_cursor": "x1wud0mn",
            $$css: true
        },
        chatInteractiveThemeReaction: {
            ":hover_backgroundColor": "x17gydlx",
            $$css: true
        },
        chatInteractiveThemeReactionByOthersActive: {
            ":hover_cursor": "x1wud0mn",
            $$css: true
        },
        chatInteractiveThemePlain: {
            ":hover_backgroundColor": "x1n5bzlp",
            $$css: true
        },
        chatInteractiveThemeRadioButtonRow: {
            ":hover_backgroundColor": "xlqxigy",
            $$css: true
        },
        chatInteractiveThemeListNames: {
            ":hover_backgroundColor": "xlqxigy",
            $$css: true
        },
        chatInteractiveGroupsV4Invite: {
            ":hover_backgroundColor": "x1n5bzlp",
            ":hover_cursor": "x1wud0mn",
            $$css: true
        },
        themeCheckbox: {
            paddingInlineStart: "xsmzqeu",
            $$css: true
        },
        themeChatInfo: {
            height: "x1gb2em4",
            $$css: true
        },
        themeSubgroup: {
            height: "xvt47uu",
            $$css: true
        },
        themeCommunityHome: {
            height: "xpyat2d",
            paddingInlineStart: "xsdj86q",
            $$css: true
        },
        themeIdentity: {
            alignItems: "x6s0dn4",
            height: "xt7dq6l",
            paddingInlineEnd: "x64bnmy",
            $$css: true
        },
        themeListNames: {
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            cursor: "xt0e3qv",
            display: "x3nfvp2",
            height: "xt7dq6l",
            marginBottom: "xzueoph",
            marginTop: "xdj266r",
            marginInlineEnd: "xbelrpt",
            marginInlineStart: "x1lziwak",
            maxWidth: "x7dbjn3",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            verticalAlign: "x16dsc37",
            $$css: true
        },
        themePlain: {
            cursor: "x1sqbtui",
            $$css: true
        },
        themeStatusListModal: {
            backgroundColor: "xjbqb8w",
            height: "x5yr21d",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        themeLabel: {
            height: "xnnlda6",
            $$css: true
        },
        themeLabelRedesigned: {
            height: "xy75621",
            $$css: true
        },
        themeLabelNewList: {
            height: "xt7dq6l",
            minHeight: "xbktkl8",
            $$css: true
        },
        themeListsAssignModal: {
            height: "xnnlda6",
            $$css: true
        },
        themeAddItem: {
            height: "xwzfr38",
            $$css: true
        },
        themeAddOrderItem: {
            height: "xdmi676",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1djpfga",
            paddingInlineEnd: "x1im30kd",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        themeReaction: {
            backgroundColor: "x16w0wmm",
            height: "xdd8jsf",
            paddingInlineEnd: "x14vy60q",
            paddingInlineStart: "xyiysdx",
            $$css: true
        },
        themeReactionActive: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        themeNewsletterReactionByOthers: {
            height: "xsdox4t",
            $$css: true
        },
        themeNewsletterContactReactions: {
            backgroundColor: "x16w0wmm",
            height: "xdd8jsf",
            $$css: true
        },
        themeNewsletterLinkDrawer: {
            backgroundColor: "x1280gxy",
            height: "xdmi676",
            minHeight: "x1qafhyn",
            $$css: true
        },
        groupsV4Invite: {
            backgroundColor: "xjbqb8w",
            cursor: "xt0e3qv",
            height: "xsi6dy0",
            $$css: true
        },
        themeProduct: {
            height: "xjp8j0k",
            $$css: true
        },
        themeCartProduct: {
            height: "xsbjyhr",
            $$css: true
        },
        themeStickerPack: {
            height: "xgu7n3t",
            $$css: true
        },
        themeMedia: {
            height: "xng8ra",
            $$css: true
        },
        themeListButton: {
            height: "xt7dq6l",
            paddingBottom: "x1a8lsjc",
            paddingTop: "x889kno",
            paddingInlineEnd: "xyri2b",
            paddingInlineStart: "x135b78x",
            $$css: true
        },
        themeListMsg: {
            paddingInlineStart: "x1onr9mi",
            $$css: true
        },
        themeArchivePanel: {
            backgroundColor: "xjbqb8w",
            height: "x3ffywh",
            ":hover_backgroundColor": "x1ubxc9n",
            $$css: true
        },
        themeRadioButtonRow: {
            height: "xng8ra",
            paddingInlineStart: "x1onr9mi",
            $$css: true
        },
        themeLinkedAccount: {
            backgroundColor: "xjbqb8w",
            height: "xy2rkmd",
            paddingBottom: "xs9asl8",
            paddingTop: "x1y1aw1k",
            $$css: true
        },
        themeLinkedAccountConsumer: {
            height: "x1mgsydn",
            $$css: true
        },
        themeListNamesActive: {
            backgroundColor: "x1q7yeco",
            $$css: true
        },
        themeProductAddToOrder: {
            cursor: "xt0e3qv",
            height: "xjp8j0k",
            $$css: true
        },
        themeCommunityTabHome: {
            boxSizing: "x9f619",
            $$css: true
        },
        themeCommunityTabViewAll: {
            height: "xng8ra",
            $$css: true
        },
        themeCommunityCreate: {
            height: "x3igimt",
            lineHeight: "xdod15v",
            paddingTop: "x1i80of2",
            paddingBottom: "xzxdvmt",
            paddingInlineStart: "xsdj86q",
            paddingInlineEnd: "x1ekh9h2",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        themeMenuItem: {
            backgroundColor: "xjbqb8w",
            height: "x1vqgdyp",
            paddingInlineStart: "x1c1uobl",
            ":hover_backgroundColor": "x1n5bzlp",
            $$css: true
        },
        themeVoipOngoingCall: {
            backgroundColor: "x1abdmlv",
            $$css: true
        },
        themeVoipOngoingCallIdleHover: {
            ":hover_backgroundColor": "xm38lk9",
            $$css: true
        },
        tallerCellWithLabel: {
            height: "xif8yxe",
            $$css: true
        },
        tallerCellWithTertiary: {
            height: "xif8yxe",
            $$css: true
        },
        tallerCellWithMemberLabel: {
            height: "xif8yxe",
            $$css: true
        },
        adListRow: {
            backgroundColor: "xjbqb8w",
            ":hover_borderBottomColor": "x722v89",
            "::after_display": "x1h1zc6f",
            $$css: true
        },
        unreadMessageTimestampOldAndPostRefreshed: {
            fontWeight: "x1s688f",
            $$css: true
        },
        paddingStart28: {
            paddingInlineStart: "xdylf7x",
            $$css: true
        },
        paddingStart8: {
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        paddingStart16: {
            paddingInlineStart: "xdx6fka",
            $$css: true
        },
        paddingStart12: {
            paddingInlineStart: "x1iw51ew",
            $$css: true
        },
        noInlineMargin: {
            marginInlineStart: "x1lziwak",
            marginInlineEnd: "x14z9mp",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        image: {
            display: "x78zum5",
            $$css: true
        },
        imageThemeProduct: {
            borderTopColor: "x1v8p93f",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "xamhcws",
            $$css: true
        },
        imageThemeCartProduct: {
            borderTopStyle: "x1ejq31n",
            $$css: true
        },
        imageThemeCollectionEdit: {
            borderBottomColor: "x120ee7l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomWidth: "xso031l",
            borderTopStyle: "x1ejq31n",
            marginInlineStart: "xx6jrq6",
            $$css: true
        },
        imageThemeMedia: {
            alignItems: "x6s0dn4",
            $$css: true
        },
        imageThemeProductOutOfStock: {
            opacity: "xbyyjgo",
            $$css: true
        },
        imageThemeCommunityTabSubgroup: {
            paddingInlineEnd: "x1gabggj",
            paddingInlineStart: "x135b78x",
            $$css: true
        },
        imageThemeCommunityTabViewAll: {
            width: "xdc2ju1",
            $$css: true
        },
        imageThemeCommunityTabActivityCell: {
            paddingInlineEnd: "x1gabggj",
            paddingInlineStart: "x135b78x",
            $$css: true
        },
        chatAvatar: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            marginTop: "x1y332i5",
            paddingBottom: "x18d9i69",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1n1b19v",
            paddingInlineStart: "xbmws1g",
            $$css: true
        },
        chatAvatarRefreshed: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            paddingBottom: "x18d9i69",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1pic42t",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        },
        chatAvatarThemeSubgroup: {
            marginTop: "xdj266r",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineEnd: "xyri2b",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        },
        chatAvatarThemeIdentity: {
            paddingTop: "xyamay9",
            paddingBottom: "x1l90r2v",
            paddingInlineStart: "x11ahuha",
            paddingInlineEnd: "xl3akx1",
            $$css: true
        },
        chatAvatarThemeLabel: {
            marginTop: "xdj266r",
            paddingInlineEnd: "xf159sx",
            paddingInlineStart: "x1lyran6",
            $$css: true
        },
        chatAvatarThemeLabelRedesigned: {
            paddingInlineEnd: "x64bnmy",
            paddingInlineStart: "xf7dkkf",
            $$css: true
        },
        chatAvatarThemeListsAssignModal: {
            paddingInlineEnd: "x1xnnf8n",
            paddingInlineStart: "x106a9eq",
            $$css: true
        },
        chatAvatarThemeListNames: {
            marginInlineEnd: "x1xegmmw",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        chatAvatarThemeReaction: {
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        chatAvatarThemeLabelNewList: {
            paddingInlineStart: "xf7dkkf",
            $$css: true
        },
        chatAvatarThemeMenuItem: {
            paddingInlineEnd: "x2vl965",
            paddingInlineStart: "x106a9eq",
            $$css: true
        },
        chatAvatarTallerCellWithTertiary: {
            alignSelf: "xamitd3",
            marginTop: "xdj266r",
            $$css: true
        },
        chatAvatarGroupsV4Invite: {
            paddingInlineStart: "xwn43p0",
            $$css: true
        },
        chatAvatarThemeListButton: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineEnd: "x1n1b19v",
            paddingInlineStart: "x1iwz3mf",
            $$css: true
        },
        chatAvatarThemeArchivePanel: {
            marginTop: "xdj266r",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineEnd: "x1q3ajuy",
            paddingInlineStart: "xbmws1g",
            $$css: true
        },
        chatAvatarThemeLinkedAccount: {
            marginTop: "xdj266r",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineEnd: "x1a4sjiy",
            paddingInlineStart: "x110972j",
            $$css: true
        },
        chatAvatarThemeLinkedAccountConsumer: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineEnd: "x1ekh9h2",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        chatAvatarThemeCheckboxDisabled: {
            opacity: "xti2d7y",
            $$css: true
        },
        chatBody: {
            display: "x78zum5",
            flexBasis: "xdl72j9",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            justifyContent: "xl56j7k",
            minWidth: "xeuugli",
            paddingInlineEnd: "x1n1b19v",
            $$css: true
        },
        chatBodyThemeMessage: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineEnd: "x1dxu0v2",
            paddingInlineStart: "xc6nx8r",
            $$css: true
        },
        chatBodyThemeSearch: {
            paddingInlineStart: "xc6nx8r",
            $$css: true
        },
        chatBodyThemeChatInfo: {
            paddingInlineEnd: "xziim83",
            $$css: true
        },
        chatBodyThemeSubgroup: {
            marginInlineStart: "xxz9a3q",
            paddingInlineEnd: "xziim83",
            $$css: true
        },
        chatBodyThemeCommunityHome: {
            paddingInlineEnd: "xziim83",
            $$css: true
        },
        chatBodyThemeIdentity: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        chatBodyThemeListNames: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        chatBodyThemeAddItem: {
            fontWeight: "x1s688f",
            paddingInlineStart: "xwn43p0",
            $$css: true
        },
        chatBodyThemeAddItemPlaceholder: {
            paddingInlineStart: "x1gx403c",
            $$css: true
        },
        chatBodyThemeLabel: {
            paddingInlineEnd: "x1wmf1g4",
            $$css: true
        },
        chatBodyThemeNewLabel: {
            paddingInlineEnd: "xgws4yx",
            $$css: true
        },
        chatBodyThemeLabelNewList: {
            paddingInlineEnd: "x64bnmy",
            $$css: true
        },
        chatBodyThemeListsAssignModal: {
            paddingInlineEnd: "xjfo4ez",
            $$css: true
        },
        chatBodyGroupsV4Invite: {
            paddingInlineEnd: "x9ix0oo",
            $$css: true
        },
        chatBodyThemeStickerPack: {
            paddingTop: "xyamay9",
            paddingBottom: "x1l90r2v",
            $$css: true
        },
        chatBodyThemeLinkedAccount: {
            marginTop: "x1ok221b",
            $$css: true
        },
        chatBodyThemeLinkedAccountConsumer: {
            marginTop: "xdj266r",
            $$css: true
        },
        chatBodyThemeMenuItem: {
            width: "xh8yej3",
            $$css: true
        },
        adsListChatBody: {
            borderTopStyle: "x1ejq31n",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            justifyContent: "xl56j7k",
            $$css: true
        },
        chatTitle: {
            color: "x14ug900",
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            fontSize: "x1jchvi3",
            fontWeight: "x1fcty0u",
            lineHeight: "xdod15v",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            overflowWrap: "x1mzt3pk",
            textAlign: "x1yc453h",
            $$css: true
        },
        chatTitleUnread: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        chatTitleUnreadRegular: {
            fontWeight: "xo1l8bm",
            $$css: true
        },
        chatTitleThemeSearch: {
            display: "x1s85apg",
            $$css: true
        },
        chatTitleThemeCommunityHome: {
            fontSize: "x1c3i2sq",
            marginBottom: "xzueoph",
            $$css: true
        },
        chatTitleThemeStatusListModal: {
            color: "x17t9dm2",
            $$css: true
        },
        chatTitleThemeIdentity: {
            fontSize: "xlm9qay",
            lineHeight: "xgif2c7",
            $$css: true
        },
        chatTitleThemeReaction: {
            display: "x1lliihq",
            fontSize: "x6prxxf",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        chatTitleThemeListNames: {
            color: "x14ug900",
            fontSize: "x1rcfd0n",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        chatTitleThemeAddOrderItem: {
            color: "x1ph7ams",
            fontSize: "x1jchvi3",
            fontWeight: "xo1l8bm",
            lineHeight: "x1o2sk6j",
            $$css: true
        },
        chatTitleThemeMedia: {
            color: "x14ug900",
            fontSize: "x1f6kntn",
            fontWeight: "xk50ysn",
            lineHeight: "x1fc57z9",
            $$css: true
        },
        chatTitleTallerCellWithLabel: {
            marginTop: "x1gslohp",
            $$css: true
        },
        chatTitleTallerCellWithMemberLabel: {
            marginTop: "x1gslohp",
            $$css: true
        },
        chatTitleThemeCommunityTabViewAll: {
            color: "xo1mcw5",
            $$css: true
        },
        chatTitleThemeMenuItem: {
            fontSize: "x1f6kntn",
            $$css: true
        },
        chatTitleMember: {
            color: "xpw2u0k",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        chatTitleDisabled: {
            color: "xpw2u0k",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        chatTitleThemeCheckboxDisabled: {
            fontWeight: "x1fcty0u",
            opacity: "xti2d7y",
            $$css: true
        },
        chatTitlePrimaryLimitedWidth: {
            maxWidth: "xq8v1hd",
            $$css: true
        },
        chatTitleProductIdle: {
            color: "xhslqc4",
            $$css: true
        },
        chatTitleThemeLinkedAccountConsumer: {
            color: "xbiwxsu",
            paddingTop: "x1nn3v0j",
            $$css: true
        },
        chatSecondary: {
            alignItems: "x6s0dn4",
            color: "xhslqc4",
            display: "x78zum5",
            fontSize: "x1nxh6w3",
            lineHeight: "x1fc57z9",
            marginTop: "xr9ek0c",
            minHeight: "xisnujt",
            $$css: true
        },
        chatSecondaryUnread: {
            color: "xhslqc4",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        chatSecondaryActive: {
            color: "xhslqc4",
            $$css: true
        },
        chatSecondaryThemeReaction: {
            color: "xhslqc4",
            fontSize: "x1pg5gke",
            lineHeight: "x1d3mw78",
            $$css: true
        },
        chatSecondaryThemeReactionActive: {
            color: "xhslqc4",
            $$css: true
        },
        chatSecondaryThemeStatusListModal: {
            color: "x88nbbm",
            $$css: true
        },
        chatSecondaryThemeSubgroupNew: {
            color: "xo1mcw5",
            $$css: true
        },
        chatSecondaryThemeCommunityTabHomeNew: {
            color: "xo1mcw5",
            $$css: true
        },
        chatSecondaryTallerCellWithLabel: {
            marginTop: "x1gslohp",
            $$css: true
        },
        chatSecondaryTallerCellWithTertiary: {
            marginTop: "xr9ek0c",
            $$css: true
        },
        chatSecondaryTallerCellWithMemberLabel: {
            marginTop: "x1gslohp",
            $$css: true
        },
        chatSecondaryThemeCartProduct: {
            marginTop: "x14vqqas",
            $$css: true
        },
        chatSecondaryThemeListNames: {
            display: "x1s85apg",
            $$css: true
        },
        chatSecondaryMember: {
            color: "xpw2u0k",
            fontStyle: "x1k4tb9n",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        chatSecondaryDisabled: {
            color: "xpw2u0k",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        chatSecondaryThemeCheckboxDisabled: {
            fontWeight: "x1fcty0u",
            opacity: "xti2d7y",
            $$css: true
        },
        chatSecondaryThemeAddItemPlaceholder: {
            backgroundColor: "x1kpc9vs",
            borderStartStartRadius: "x1fqc64z",
            borderStartEndRadius: "xs83zq4",
            borderEndEndRadius: "xt6ovg4",
            borderEndStartRadius: "x1ru8ea5",
            display: "x1lliihq",
            height: "x1qx5ct2",
            marginTop: "x1ok221b",
            width: "xo5x3gg",
            $$css: true
        },
        chatSecondaryThemeLinkedAccountConsumer: {
            marginTop: "x7r5mf7",
            $$css: true
        },
        chatSecondaryProductIdle: {
            color: "xhslqc4",
            $$css: true
        },
        chatSecondaryProductOutOfStock: {
            opacity: "x3onkmb",
            $$css: true
        },
        chatTitleProductOutOfStock: {
            opacity: "x3onkmb",
            $$css: true
        },
        chatStatus: {
            backgroundColor: "xjbqb8w",
            flexGrow: "x1iyjqo2",
            fontSize: "x1f6kntn",
            fontWeight: "x1fcty0u",
            lineHeight: "x1fc57z9",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textAlign: "x1yc453h",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        chatStatusUnread: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        chatStatusUnreadRegular: {
            fontWeight: "xo1l8bm",
            $$css: true
        },
        chatStatusThemeIdentity: {
            fontSize: "x6prxxf",
            lineHeight: "x19v9tvf",
            $$css: true
        },
        chatStatusThemeReaction: {
            fontSize: "x1pg5gke",
            $$css: true
        },
        chatStatusThemeReactionByMe: {
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            $$css: true
        },
        chatStatusThemeMedia: {
            fontSize: "x1nxh6w3",
            $$css: true
        },
        chatStatusThemeSelectDropdownItem: {
            textOverflow: "x1n0xbq2",
            whiteSpace: "x17rilz2",
            $$css: true
        },
        chatStatusThemeCommunityTabActivityCell: {
            maxHeight: "xmz0i5r",
            whiteSpace: "xeaf4i8",
            $$css: true
        },
        chatStatusThemeCommunityCreate: {
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            whiteSpace: "xeaf4i8",
            $$css: true
        },
        chatStatusThemeListMsg: {
            maxHeight: "x18wx58x",
            whiteSpace: "xq9mrsl",
            $$css: true
        },
        chatMeta: {
            color: "xhslqc4",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            fontSize: "x1pg5gke",
            lineHeight: "x1fc57z9",
            marginInlineStart: "xdzw4kq",
            maxWidth: "x193iq5w",
            $$css: true
        },
        chatMetaInMain: {
            lineHeight: "x1xxsxie",
            marginTop: "x7r5mf7",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        chatMetaUnread: {
            color: "x1v5yvga",
            $$css: true
        },
        chatMetaThemeSearch: {
            marginInlineStart: "x1lziwak",
            marginInlineEnd: "x14z9mp",
            $$css: true
        },
        chatMetaThemeDrawerList: {
            marginTop: "xdj266r",
            $$css: true
        },
        chatMetaThemeRadioButtonRow: {
            marginTop: "xdj266r",
            $$css: true
        },
        chatMetaTallerCellWithLabel: {
            height: "x1qx5ct2",
            textOverflow: "xbrixnn",
            $$css: true
        },
        chatMetaTallerCellWithMemberLabel: {
            height: "x1qx5ct2",
            textOverflow: "xbrixnn",
            $$css: true
        },
        chatDetails: {
            alignItems: "x6s0dn4",
            alignSelf: "xamitd3",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexBasis: "xdl72j9",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            height: "x5yr21d",
            paddingInlineEnd: "x1hwfens",
            $$css: true
        },
        chatDetailsThemeReaction: {
            fontSize: "x579bpy",
            paddingInlineEnd: "xf159sx",
            width: "x1td3qas",
            $$css: true
        },
        chatDetailsThemeListNames: {
            color: "x14ug900",
            fontSize: "x1rcfd0n",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        chatDetailsThemeListNamesPadding: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        chatDetailsThemeCartProduct: {
            paddingInlineEnd: "xv54qhq",
            $$css: true
        },
        chatDetailsThemeSelectDropdownItem: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        chatDetailsThemeArchivePanel: {
            flexDirection: "x1q0g3np",
            $$css: true
        },
        chatDetailsThemeLinkedAccount: {
            flexDirection: "x1q0g3np",
            $$css: true
        },
        extendSecondaryEllipsis: {
            display: "x104kibb",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            WebkitBoxOrient: "x1ua5tub",
            WebkitLineClamp: "x1h7i4cw",
            whiteSpace: "xq9mrsl",
            $$css: true
        }
    };
    function m(t) {
        const a = o("react-compiler-runtime").c(138);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const u = i;
        const { active, activeStyleType, ariaColIndex, ariaLabel, checkbox, className, containerRole, customImage, detail, disabled, dragging, extendSecondaryEllipsis, focusable, focusid, handleKeyboardClick, idle, image, isMuted, label, onClick, onContextMenu, onMouseDown, onMouseEnter, onMouseLeave, onMouseOver, primary, primaryDetail, role, secondary, secondaryDetail, tabIndex, tabOrder, tertiary, testid, theme, unreadStyle } = u;
        const K = activeStyleType === undefined ? "DEFAULT" : activeStyleType;
        const Q = ariaColIndex === undefined ? 2 : ariaColIndex;
        const X = checkbox === undefined ? false : checkbox;
        const Y = customImage === undefined ? false : customImage;
        const J = extendSecondaryEllipsis === undefined ? false : extendSecondaryEllipsis;
        const Z = focusable === undefined ? false : focusable;
        const ee = role === undefined ? "gridcell" : role;
        const te = !!(disabled !== true && theme !== "disabled" && (onClick || onMouseDown || onMouseEnter || onMouseOver));
        const ne = r("useWAWebStaticButtonA11y")(onClick);
        const re = ne[0];
        const oe = ne[1];
        const ae = n("cr:23442")();
        const ie = ae[0];
        const le = ae[1];
        const se = r("useMergeRefs")(l, re, ie);
        const ue = Z && te && active == null || handleKeyboardClick === true;
        const ce = theme !== "voip-ongoing-call" && (le === true || active === true);
        const de = ce && (K === "DEFAULT" || K === "BOTH");
        const me = ce && (K === "BORDER" || K === "BOTH");
        const pe = theme === "reaction-by-others" || theme === "reaction-by-me" || theme === "newsletter-reaction-by-others" || theme === "newsletter-reaction-by-me";
        const _e = theme === "product" || theme === "product-out-of-stock" || theme === "product-of-collection" || theme === "collection-header" || theme === "collection-edit" || theme === "ads-list";
        const fe = theme === "drawer-list" || theme === "chat-info" || theme === "subgroup" || theme === "subgroup-new" || theme === "quick-replies-drawer-item";
        const ge = theme === "label-selection" || theme === "label-selection-redesigned" || theme === "label-selection-new-label" || theme === "create-new-list-consumer" || theme === "create-new-list-smb";
        const he = theme === "list-names" || theme === "list-names-no-delete";
        const ye = X || theme === "chat-checkbox" || theme === "chat-checkbox-no-delete" || theme === "cell-message-checkbox" || theme === "chat-checkbox-disabled";
        const Ce = theme === "group-modal" || theme === "chat-checkbox-no-delete";
        const be = theme === "disabled" || theme === "disabled-no-border";
        const ve = theme === "linked-account" || theme === "linked-account-consumer";
        let Se;
        if (a[3] !== me || a[4] !== de || a[5] !== dragging || a[6] !== idle || a[7] !== ye || a[8] !== be || a[9] !== te || a[10] !== ge || a[11] !== ve || a[12] !== he || a[13] !== isMuted || a[14] !== _e || a[15] !== pe || a[16] !== label || a[17] !== i.image || a[18] !== i.tallerCellWithMemberLabel || a[19] !== tertiary || a[20] !== theme) {
            Se = (s || (s = r("stylex")))(d.chat, theme === "voip-ongoing-call" && d.themeVoipOngoingCall, me && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, te && theme !== "refresh" && d.chatInteractive, te && theme === "refresh" && d.chatInteractiveRefreshed, ye && d.themeCheckbox, theme === "chat-info" && d.themeChatInfo, (theme === "subgroup" || theme === "subgroup-new") && d.themeSubgroup, theme === "community-home" && d.themeCommunityHome, theme === "identity" && d.themeIdentity, he && d.themeListNames, theme === "plain" && d.themePlain, theme === "status-list-modal" && d.themeStatusListModal, ge && d.themeLabel, (theme === "label-selection-redesigned" || theme === "label-selection-new-label") && d.themeLabelRedesigned, (theme === "create-new-list-smb" || theme === "create-new-list-consumer") && d.themeLabelNewList, theme === "add-item" && d.themeAddItem, theme === "add-order-item" && d.themeAddOrderItem, theme === "groups_v4_invite" && d.groupsV4Invite, (_e || theme === "order-product") && d.themeProduct, theme === "cart-product" && d.themeCartProduct, theme === "sticker-pack" && d.themeStickerPack, theme === "media" && d.themeMedia, theme === "list-button-compact" && d.themeListButton, theme === "list-msg" && d.themeListMsg, theme === "archive-panel" && d.themeArchivePanel, theme === "radio-button-row" && d.themeRadioButtonRow, pe && d.themeReaction, theme === "newsletter-reaction-by-others" && d.themeNewsletterReactionByOthers, theme === "newsletter-reaction-by-contact" && d.themeNewsletterContactReactions, theme === "newsletter-link-cell" && d.themeNewsletterLinkDrawer, be && d.chatDisabled, ve && d.themeLinkedAccount, theme === "linked-account-consumer" && d.themeLinkedAccountConsumer, (theme === "community-tab-home" || theme === "community-tab-home-new") && d.themeCommunityTabHome, theme === "view-all" && d.themeCommunityTabViewAll, theme === "community-create" && d.themeCommunityCreate, theme === "menu-item" && d.themeMenuItem, theme === "lists-assign-modal" && d.themeListsAssignModal, theme === "product-add-to-order" && d.themeProductAddToOrder, label != null && d.tallerCellWithLabel, tertiary != null && d.tallerCellWithTertiary, i.tallerCellWithMemberLabel === true && d.tallerCellWithMemberLabel, idle === true && d.chatIdle, isMuted === true && d.chatMuted, de && d.chatActive, dragging === true && d.chatDrag, pe && de && d.themeReactionActive, he && de && d.themeListNamesActive, te && idle === true && d.chatInteractiveIdle, te && idle === true && pe && d.chatInteractiveIdleThemeReaction, te && theme === "voip-ongoing-call" && idle === true && d.themeVoipOngoingCallIdleHover, te && pe && d.chatInteractiveThemeReaction, te && theme === "reaction-by-others" && de && d.chatInteractiveThemeReactionByOthersActive, te && theme === "plain" && d.chatInteractiveThemePlain, te && theme === "radio-button-row" && d.chatInteractiveThemeRadioButtonRow, te && he && d.chatInteractiveThemeListNames, te && theme === "groups_v4_invite" && d.chatInteractiveGroupsV4Invite, theme === "label-selection-new-label" && !i.image && d.paddingStart28, theme === "create-new-list-consumer" && !i.image && d.paddingStart8, (theme === "label-selection-redesigned" || theme === "label-selection") && !i.image && d.paddingStart16, (theme === "label-list-no-border" || theme === "label-list") && !i.image && d.paddingStart12, theme === "ads-list" && d.adListRow, (theme === "create-new-list-smb" || theme === "create-new-list-consumer") && d.noInlineMargin);
            a[3] = me;
            a[4] = de;
            a[5] = dragging;
            a[6] = idle;
            a[7] = ye;
            a[8] = be;
            a[9] = te;
            a[10] = ge;
            a[11] = ve;
            a[12] = he;
            a[13] = isMuted;
            a[14] = _e;
            a[15] = pe;
            a[16] = label;
            a[17] = i.image;
            a[18] = i.tallerCellWithMemberLabel;
            a[19] = tertiary;
            a[20] = theme;
            a[21] = Se;
        } else {
            Se = a[21];
        }
        const Re = Se;
        const Le = className != null && className !== "" ? `${Re} ${className}` : Re;
        let Ee;
        if (image) {
            let ke;
            if (a[22] !== Y || a[23] !== image || a[24] !== ge || a[25] !== ve || a[26] !== he || a[27] !== pe || a[28] !== tertiary || a[29] !== theme) {
                ke = Y ? image : <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(theme === "refresh" || theme === "chat-info" ? d.chatAvatarRefreshed : d.chatAvatar, (theme === "subgroup" || theme === "subgroup-new") && d.chatAvatarThemeSubgroup, theme === "identity" && d.chatAvatarThemeIdentity, ge && d.chatAvatarThemeLabel, (theme === "label-selection-redesigned" || theme === "label-selection-new-label") && d.chatAvatarThemeLabelRedesigned, theme === "lists-assign-modal" && d.chatAvatarThemeListsAssignModal, he && d.chatAvatarThemeListNames, pe && d.chatAvatarThemeReaction, (theme === "create-new-list-smb" || theme === "create-new-list-consumer") && d.chatAvatarThemeLabelNewList, theme === "menu-item" && d.chatAvatarThemeMenuItem, tertiary != null && d.chatAvatarTallerCellWithTertiary, theme === "groups_v4_invite" && d.chatAvatarGroupsV4Invite, theme === "list-button-compact" && d.chatAvatarThemeListButton, theme === "archive-panel" && d.chatAvatarThemeArchivePanel, ve && d.chatAvatarThemeLinkedAccount, theme === "linked-account-consumer" && d.chatAvatarThemeLinkedAccountConsumer, theme === "chat-checkbox-disabled" && d.chatAvatarThemeCheckboxDisabled), {
                    children: image
                })}/>;
                a[22] = Y;
                a[23] = image;
                a[24] = ge;
                a[25] = ve;
                a[26] = he;
                a[27] = pe;
                a[28] = tertiary;
                a[29] = theme;
                a[30] = ke;
            } else {
                ke = a[30];
            }
            Ee = ke;
        }
        let Ie;
        if (a[31] === Symbol.for("react.memo_cache_sentinel")) {
            Ie = [
                "product",
                "product-out-of-stock",
                "product-of-collection",
                "sticker-pack"
            ];
            a[31] = Ie;
        } else {
            Ie = a[31];
        }
        const Te = Ie;
        let De;
        if (primaryDetail != null) {
            const xe = theme == null || !Te.includes(theme);
            let $e;
            if (a[32] !== fe || a[33] !== label || a[34] !== i.tallerCellWithMemberLabel || a[35] !== xe || a[36] !== theme || a[37] !== unreadStyle) {
                $e = (s || (s = r("stylex"))).props(xe && d.chatMeta, xe && label == null && d.chatMetaInMain, xe && unreadStyle === true && d.chatMetaUnread, unreadStyle === true && d.unreadMessageTimestampOldAndPostRefreshed, xe && theme === "chat-search" && d.chatMetaThemeSearch, xe && fe && d.chatMetaThemeDrawerList, xe && theme === "radio-button-row" && d.chatMetaThemeRadioButtonRow, xe && label != null && d.chatMetaTallerCellWithLabel, xe && i.tallerCellWithMemberLabel === true && d.chatMetaTallerCellWithMemberLabel);
                a[32] = fe;
                a[33] = label;
                a[34] = i.tallerCellWithMemberLabel;
                a[35] = xe;
                a[36] = theme;
                a[37] = unreadStyle;
                a[38] = $e;
            } else {
                $e = a[38];
            }
            let Pe;
            if (a[39] !== primaryDetail || a[40] !== $e) {
                Pe = <div {...babelHelpers.extends({}, $e, {
                    "data-testid": "cell-frame-primary-detail",
                    children: primaryDetail
                })}/>;
                a[39] = primaryDetail;
                a[40] = $e;
                a[41] = Pe;
            } else {
                Pe = a[41];
            }
            De = Pe;
        }
        let Ne;
        let Me;
        if (secondary != null) {
            let we;
            if (a[42] !== secondaryDetail || a[43] !== theme) {
                we = secondaryDetail != null ? <div {...babelHelpers.extends({
                    role: "gridcell",
                    "aria-colindex": 1
                }, {
                    0: {
                        className: "xhslqc4 x1c4vz4f x2lah0s x1pg5gke x1fc57z9 xdzw4kq x193iq5w"
                    },
                    1: {
                        className: "xhslqc4 x1c4vz4f x2lah0s x1pg5gke x1fc57z9 xdzw4kq x193iq5w x135pmgq"
                    }
                }[(theme === "product-of-collection") << 0], {
                    children: secondaryDetail
                })}/> : null;
                a[42] = secondaryDetail;
                a[43] = theme;
                a[44] = we;
            } else {
                we = a[44];
            }
            Me = we;
            let Ae;
            if (a[45] !== de || a[46] !== idle || a[47] !== be || a[48] !== he || a[49] !== Ce || a[50] !== pe || a[51] !== label || a[52] !== i.tallerCellWithMemberLabel || a[53] !== tertiary || a[54] !== theme || a[55] !== unreadStyle) {
                Ae = (s || (s = r("stylex"))).props(d.chatSecondary, unreadStyle === true && d.chatSecondaryUnread, de && d.chatSecondaryActive, pe && d.chatSecondaryThemeReaction, pe && de && d.chatSecondaryThemeReactionActive, theme === "status-list-modal" && d.chatSecondaryThemeStatusListModal, theme === "subgroup-new" && d.chatSecondaryThemeSubgroupNew, theme === "community-tab-home-new" && d.chatSecondaryThemeCommunityTabHomeNew, label != null && d.chatSecondaryTallerCellWithLabel, tertiary != null && d.chatSecondaryTallerCellWithTertiary, i.tallerCellWithMemberLabel === true && d.chatSecondaryTallerCellWithMemberLabel, theme === "cart-product" && d.chatSecondaryThemeCartProduct, he && d.chatSecondaryThemeListNames, theme === "add-item-placeholder" && d.chatSecondaryThemeAddItemPlaceholder, theme === "linked-account-consumer" && d.chatSecondaryThemeLinkedAccountConsumer, Ce && d.chatSecondaryMember, be && d.chatSecondaryDisabled, theme === "chat-checkbox-disabled" && d.chatSecondaryThemeCheckboxDisabled, (theme === "product" || theme === "product-out-of-stock") && idle === true && d.chatSecondaryProductIdle, theme === "product-out-of-stock" && d.chatSecondaryProductOutOfStock);
                a[45] = de;
                a[46] = idle;
                a[47] = be;
                a[48] = he;
                a[49] = Ce;
                a[50] = pe;
                a[51] = label;
                a[52] = i.tallerCellWithMemberLabel;
                a[53] = tertiary;
                a[54] = theme;
                a[55] = unreadStyle;
                a[56] = Ae;
            } else {
                Ae = a[56];
            }
            let Fe;
            if (a[57] !== J || a[58] !== pe || a[59] !== theme || a[60] !== unreadStyle) {
                Fe = (s || (s = r("stylex"))).props(d.chatStatus, unreadStyle === true && d.chatStatusUnread, d.chatStatusUnreadRegular, J && d.extendSecondaryEllipsis, theme === "identity" && d.chatStatusThemeIdentity, pe && d.chatStatusThemeReaction, theme === "reaction-by-me" && d.chatStatusThemeReactionByMe, theme === "media" && d.chatStatusThemeMedia, theme === "select-dropdown-item" && d.chatStatusThemeSelectDropdownItem, theme === "community-tab-activity-cell" && d.chatStatusThemeCommunityTabActivityCell, theme === "community-create" && d.chatStatusThemeCommunityCreate, theme === "list-msg" && d.chatStatusThemeListMsg);
                a[57] = J;
                a[58] = pe;
                a[59] = theme;
                a[60] = unreadStyle;
                a[61] = Fe;
            } else {
                Fe = a[61];
            }
            let Oe;
            if (a[62] !== secondary || a[63] !== Fe) {
                Oe = <div {...babelHelpers.extends({}, Fe, {
                    children: secondary
                })}/>;
                a[62] = secondary;
                a[63] = Fe;
                a[64] = Oe;
            } else {
                Oe = a[64];
            }
            const Be = label == null && Me;
            let We;
            if (a[65] !== Ae || a[66] !== Oe || a[67] !== Be) {
                We = <div {...babelHelpers.extends({}, Ae, {
                    "data-testid": "cell-frame-secondary",
                    children: [
                        Oe,
                        Be
                    ]
                })}/>;
                a[65] = Ae;
                a[66] = Oe;
                a[67] = Be;
                a[68] = We;
            } else {
                We = a[68];
            }
            Ne = We;
        }
        let qe;
        if (a[69] !== tertiary) {
            qe = tertiary != null ? <div className="x6s0dn4 x78zum5 x1gxa6cn" data-testid="cell-frame-tertiary">{tertiary}</div> : null;
            a[69] = tertiary;
            a[70] = qe;
        } else {
            qe = a[70];
        }
        const Ue = qe;
        let Ve;
        if (a[71] !== detail || a[72] !== ve || a[73] !== he || a[74] !== pe || a[75] !== theme) {
            Ve = detail != null ? <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(d.chatBody, d.chatDetails, pe && d.chatDetailsThemeReaction, he && d.chatDetailsThemeListNames, he && d.chatDetailsThemeListNamesPadding, theme === "cart-product" && d.chatDetailsThemeCartProduct, theme === "select-dropdown-item" && d.chatDetailsThemeSelectDropdownItem, theme === "archive-panel" && d.chatDetailsThemeArchivePanel, ve && d.chatDetailsThemeLinkedAccount), {
                children: detail
            })}/> : null;
            a[71] = detail;
            a[72] = ve;
            a[73] = he;
            a[74] = pe;
            a[75] = theme;
            a[76] = Ve;
        } else {
            Ve = a[76];
        }
        const He = Ve;
        const Ge = testid ?? "cell-frame-container";
        const ze = ariaLabel != null && ariaLabel !== "" ? ariaLabel : undefined;
        const je = ue && oe;
        let Ke;
        if (a[77] !== _e || a[78] !== theme) {
            Ke = (s || (s = r("stylex"))).props(d.image, (_e || theme === "order-product") && d.imageThemeProduct, theme === "cart-product" && d.imageThemeCartProduct, theme === "collection-edit" && d.imageThemeCollectionEdit, theme === "media" && d.imageThemeMedia, theme === "product-out-of-stock" && d.imageThemeProductOutOfStock, theme === "community-tab-subgroup" && d.imageThemeCommunityTabSubgroup, theme === "view-all" && d.imageThemeCommunityTabViewAll, theme === "community-tab-activity-cell" && d.imageThemeCommunityTabActivityCell);
            a[77] = _e;
            a[78] = theme;
            a[79] = Ke;
        } else {
            Ke = a[79];
        }
        let Qe;
        if (a[80] !== Ee || a[81] !== Ke) {
            Qe = <div {...babelHelpers.extends({}, Ke, {
                children: Ee
            })}/>;
            a[80] = Ee;
            a[81] = Ke;
            a[82] = Qe;
        } else {
            Qe = a[82];
        }
        let Xe;
        if (a[83] !== ge || a[84] !== ve || a[85] !== he || a[86] !== theme) {
            Xe = (s || (s = r("stylex"))).props(d.chatBody, (theme === "cell-message" || theme === "cell-message-checkbox") && d.chatBodyThemeMessage, theme === "chat-search" && d.chatBodyThemeSearch, theme === "chat-info" && d.chatBodyThemeChatInfo, (theme === "subgroup" || theme === "subgroup-new") && d.chatBodyThemeSubgroup, theme === "community-home" && d.chatBodyThemeCommunityHome, theme === "identity" && d.chatBodyThemeIdentity, he && d.chatBodyThemeListNames, theme === "add-item" && d.chatBodyThemeAddItem, theme === "add-item-placeholder" && d.chatBodyThemeAddItemPlaceholder, ge && d.chatBodyThemeLabel, theme === "label-selection-new-label" && d.chatBodyThemeNewLabel, (theme === "create-new-list-smb" || theme === "create-new-list-consumer") && d.chatBodyThemeLabelNewList, theme === "lists-assign-modal" && d.chatBodyThemeListsAssignModal, theme === "groups_v4_invite" && d.chatBodyGroupsV4Invite, theme === "sticker-pack" && d.chatBodyThemeStickerPack, ve && d.chatBodyThemeLinkedAccount, theme === "linked-account-consumer" && d.chatBodyThemeLinkedAccountConsumer, theme === "menu-item" && d.chatBodyThemeMenuItem, theme === "ads-list" && d.adsListChatBody);
            a[83] = ge;
            a[84] = ve;
            a[85] = he;
            a[86] = theme;
            a[87] = Xe;
        } else {
            Xe = a[87];
        }
        let Ye;
        if (a[88] !== label || a[89] !== De) {
            Ye = label != null && <div className="x6s0dn4 xhslqc4 x78zum5 x1f6kntn xd4r4e8 x1gslohp xvrgn94 x1yc453h" data-testid="cell-frame-label">{label}{De}</div>;
            a[88] = label;
            a[89] = De;
            a[90] = Ye;
        } else {
            Ye = a[90];
        }
        let Je;
        if (a[91] !== theme) {
            Je = ({
                0: {
                    className: "x6s0dn4 x78zum5 xggjnk3 x1yc453h"
                },
                2: {
                    className: "x6s0dn4 x78zum5 xggjnk3 x1yc453h xaw7rza"
                },
                1: {
                    className: "x6s0dn4 xggjnk3 x1yc453h x1kpc9vs x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5 x1lliihq x1qx5ct2 x1oysuqx"
                },
                3: {
                    className: "x6s0dn4 xggjnk3 x1yc453h xaw7rza x1kpc9vs x1fqc64z xs83zq4 xt6ovg4 x1ru8ea5 x1lliihq x1qx5ct2 x1oysuqx"
                }
            })[(theme === "list-names-no-delete") << 1 | (theme === "add-item-placeholder") << 0];
            a[91] = theme;
            a[92] = Je;
        } else {
            Je = a[92];
        }
        let Ze;
        if (a[93] !== idle || a[94] !== be || a[95] !== he || a[96] !== Ce || a[97] !== pe || a[98] !== label || a[99] !== i.tallerCellWithMemberLabel || a[100] !== theme || a[101] !== unreadStyle) {
            Ze = (s || (s = r("stylex"))).props(d.chatTitle, unreadStyle === true && d.chatTitleUnread, d.chatTitleUnreadRegular, theme === "chat-search" && d.chatTitleThemeSearch, theme === "community-home" && d.chatTitleThemeCommunityHome, theme === "status-list-modal" && d.chatTitleThemeStatusListModal, theme === "identity" && d.chatTitleThemeIdentity, pe && d.chatTitleThemeReaction, he && d.chatTitleThemeListNames, theme === "add-order-item" && d.chatTitleThemeAddOrderItem, theme === "media" && d.chatTitleThemeMedia, label != null && d.chatTitleTallerCellWithLabel, i.tallerCellWithMemberLabel === true && d.chatTitleTallerCellWithMemberLabel, theme === "view-all" && d.chatTitleThemeCommunityTabViewAll, theme === "menu-item" && d.chatTitleThemeMenuItem, theme === "label-list-no-border" && d.chatTitlePrimaryLimitedWidth, theme === "linked-account-consumer" && d.chatTitleThemeLinkedAccountConsumer, (theme === "product" || theme === "product-out-of-stock") && idle === true && d.chatTitleProductIdle, theme === "product-out-of-stock" && d.chatTitleProductOutOfStock, Ce && d.chatTitleMember, be && d.chatTitleDisabled, theme === "chat-checkbox-disabled" && d.chatTitleThemeCheckboxDisabled);
            a[93] = idle;
            a[94] = be;
            a[95] = he;
            a[96] = Ce;
            a[97] = pe;
            a[98] = label;
            a[99] = i.tallerCellWithMemberLabel;
            a[100] = theme;
            a[101] = unreadStyle;
            a[102] = Ze;
        } else {
            Ze = a[102];
        }
        const et = label != null && Me;
        let tt;
        if (a[103] !== primary || a[104] !== Ze || a[105] !== et) {
            tt = <div {...babelHelpers.extends({}, Ze, {
                "data-testid": "cell-frame-title",
                children: [
                    primary,
                    et
                ]
            })}/>;
            a[103] = primary;
            a[104] = Ze;
            a[105] = et;
            a[106] = tt;
        } else {
            tt = a[106];
        }
        const nt = label == null && De;
        let rt;
        if (a[107] !== Q || a[108] !== ee || a[109] !== Je || a[110] !== tt || a[111] !== nt) {
            rt = <div {...babelHelpers.extends({
                role: ee,
                "aria-colindex": Q
            }, Je, {
                children: [
                    tt,
                    nt
                ]
            })}/>;
            a[107] = Q;
            a[108] = ee;
            a[109] = Je;
            a[110] = tt;
            a[111] = nt;
            a[112] = rt;
        } else {
            rt = a[112];
        }
        let ot;
        if (a[113] !== Ne || a[114] !== Xe || a[115] !== Ye || a[116] !== rt || a[117] !== Ue) {
            ot = <div {...babelHelpers.extends({}, Xe, {
                children: [
                    Ye,
                    rt,
                    Ne,
                    Ue
                ]
            })}/>;
            a[113] = Ne;
            a[114] = Xe;
            a[115] = Ye;
            a[116] = rt;
            a[117] = Ue;
            a[118] = ot;
        } else {
            ot = a[118];
        }
        let at;
        if (a[119] !== He || a[120] !== Le || a[121] !== containerRole || a[122] !== focusid || a[123] !== se || a[124] !== onClick || a[125] !== onContextMenu || a[126] !== onMouseDown || a[127] !== onMouseEnter || a[128] !== onMouseLeave || a[129] !== onMouseOver || a[130] !== Ge || a[131] !== ze || a[132] !== je || a[133] !== Qe || a[134] !== ot || a[135] !== tabIndex || a[136] !== tabOrder) {
            at = <div {...babelHelpers.extends({
                "data-tab": tabOrder,
                ref: se,
                tabIndex,
                "data-testid": Ge,
                "data-focusid": focusid,
                className: Le,
                onClick,
                onMouseDown,
                onMouseEnter,
                onMouseOver,
                onMouseLeave,
                onContextMenu,
                role: containerRole,
                "aria-label": ze
            }, je, {
                children: [
                    Qe,
                    ot,
                    He
                ]
            })}/>;
            a[119] = He;
            a[120] = Le;
            a[121] = containerRole;
            a[122] = focusid;
            a[123] = se;
            a[124] = onClick;
            a[125] = onContextMenu;
            a[126] = onMouseDown;
            a[127] = onMouseEnter;
            a[128] = onMouseLeave;
            a[129] = onMouseOver;
            a[130] = Ge;
            a[131] = ze;
            a[132] = je;
            a[133] = Qe;
            a[134] = ot;
            a[135] = tabIndex;
            a[136] = tabOrder;
            a[137] = at;
        } else {
            at = a[137];
        }
        return at;
    }
    l.default = m;
}, 98);