__d("WAWebModal.react", [
    "$InternalEnum",
    "WAWebCopyPasteCopyableArea.react",
    "WAWebDragAndDrop.react",
    "WAWebL10NFbtTypeUtils",
    "WAWebModalFitViewportContext",
    "WAWebModalManager",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext: m, useId: p, useRef: _ } = d;
    const f = n("$InternalEnum").Mirrored([
        "Box",
        "BoxLarge",
        "Flex",
        "Guide",
        "Tower",
        "Auto",
        "AutoWrap",
        "Invite",
        "InviteNew",
        "ColumnButtons",
        "Multiline",
        "Upgrade",
        "Promote",
        "CommandPalette",
        "CommandPaletteV2",
        "QuickReplies",
        "StatusViewerList",
        "LinkPopup",
        "StatusReport",
        "ChatAssignment",
        "TowerLarge",
        "HistorySyncProgress",
        "MessageEdit",
        "ForwardMediaWithCaption",
        "MessageActionsModal",
        "DataSharing",
        "UpdatedDataSharing",
        "DeleteNewsletter",
        "Small",
        "ListsAssignModal",
        "LabelList",
        "LabelEdit",
        "LabelChooseColor",
        "Comments",
        "BotNut",
        "EventCreation",
        "AdAccountRecovery",
        "MusicAttribution",
        "BusinessHours",
        "BusinessCategories",
        "BusinessProfile",
        "MediaHub",
        "GroupSafetyCheck",
        "ReachoutTimelock",
        "AddOrUpdatePix",
        "IndividualNewChatMessageCapped",
        "CDS",
        "Questions",
        "GalaxyFlowResponsePopup",
        "BusinessBroadcastUploadModal",
        "PaymentsFlow",
        "PaymentsConfirmDialog",
        "BizToolsAdCreationNux",
        "BizToolsAdCreationEmailOnboarding",
        "BizToolsAdCreationSuccess",
        "BillingWizardDialog",
        "PdfEdit",
        "PdfEditError",
        "HardRefresh",
        "EditAbout",
        "ChannelCreation",
        "ExportChat",
        "AiContentInfo",
        "BizBroadcastProDownloadRecipients",
        "BizBroadcastProConfirmDialog",
        "BizBroadcastProMediumDialog",
        "BizBroadcastVerifyOnPhone",
        "CustomerManagerImportModal",
        "CustomerManagerImportMappingModal",
        "CustomerManagerEducationModal"
    ]);
    const g = {
        height: "x16ye13r",
        width: "x5lhr3w",
        $$css: true
    };
    const h = {
        overlay: {
            position: "xixxii4",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            boxSizing: "x9f619",
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        },
        backdrop: {
            zIndex: "xjhb59c",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            backgroundColor: "x1honnu5",
            $$css: true
        },
        backdropRefreshed: {
            backgroundColor: "x1honnu5",
            $$css: true
        },
        backdropMediaHub: {
            zIndex: "xtsfpqs",
            $$css: true
        },
        popupFitViewport: {
            width: "x1qifv8a",
            maxWidth: "x65f84u",
            $$css: true
        },
        popupVoipPopoutWindowFix: {
            maxWidth: "x16xn7b0",
            maxHeight: "x1bwycvy",
            $$css: true
        },
        popup: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            flexDirection: "xdt5ytf",
            width: "xvue9z",
            paddingTop: "x1xy6bms",
            paddingInlineEnd: "x64bnmy",
            paddingBottom: "xx6bls6",
            paddingInlineStart: "x13jy36j",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundColor: "x16w0wmm",
            borderStartStartRadius: "xrlxcrs",
            borderStartEndRadius: "x7g1fbw",
            borderEndEndRadius: "xxl59ln",
            borderEndStartRadius: "xmw6rta",
            boxShadow: "x1shw4ur",
            $$css: true
        },
        statusViewerDimensions: function(t, n) {
            return [
                g,
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? void 0;
                    })(`${n}px`),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? void 0;
                    })(`${t}px`)
                }
            ];
        },
        popupMaterial: {
            borderStartStartRadius: "x1xn7y0n",
            borderStartEndRadius: "x1uxb8k9",
            borderEndEndRadius: "x1vmbcc8",
            borderEndStartRadius: "x16xm01d",
            boxShadow: "xs2e80n",
            $$css: true
        },
        popupSmall: {
            width: "x1l2rt3b",
            $$css: true
        },
        popupChannelCreation: {
            position: "x1n2onr6",
            width: "x1fwfoet",
            height: "xrlp1an",
            paddingTop: "xexx8yu",
            $$css: true
        },
        popupAutoWrap: {
            minWidth: "x1htk8sl",
            width: "x14atkfc",
            $$css: true
        },
        popupAutoWrapContents: {
            maxWidth: "x1m189uc",
            minWidth: "xgqtt45",
            $$css: true
        },
        popupBody: {
            position: "x1n2onr6",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1l7klhg",
            overflowWrap: "x1mzt3pk",
            whiteSpace: "xeaf4i8",
            $$css: true
        },
        popupTitle: {
            marginBottom: "xdqhqc9",
            fontSize: "x1603h9y",
            fontWeight: "xo1l8bm",
            lineHeight: "x132q4wb",
            textAlign: "x1yc453h",
            $$css: true
        },
        backdropCover: {
            backgroundColor: "x14zpict",
            $$css: true
        },
        showOverStatus: {
            zIndex: "xc9l9hb",
            $$css: true
        },
        popupContents: {
            fontSize: "x12lqup9",
            lineHeight: "x1o1kx08",
            $$css: true
        },
        popupBox: {
            position: "x1n2onr6",
            width: "xvue9z",
            height: "x1egiwwb",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupBoxLarge: {
            position: "x1n2onr6",
            width: "x1qfffx7",
            height: "xjr88my",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupFlex: {
            width: "x14atkfc",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            backgroundColor: "x16w0wmm",
            $$css: true
        },
        popupAuto: {
            width: "x14atkfc",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            transform: "x15j3iad",
            $$css: true
        },
        popupAutoTitle: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        popupAutoBody: {
            position: "x1uhb9sk",
            $$css: true
        },
        popupAutoContents: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupAutoControls: {
            paddingTop: "x889kno",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "xs9asl8",
            paddingInlineStart: "xaso8d8",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupFlexInvite: {
            height: "x1ad3yod",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            backgroundColor: "x16w0wmm",
            $$css: true
        },
        popupFlexInviteNew: {
            width: "xr6pica",
            paddingTop: "x1p5oq8j",
            paddingInlineEnd: "x194u5oj",
            paddingBottom: "x84yb8i",
            paddingInlineStart: "x1mfogq2",
            $$css: true
        },
        popupFlexInviteNewControls: {
            paddingTop: "x1p57kb1",
            justifyContent: "xl56j7k",
            $$css: true
        },
        popupFlexUpgradeControls: {
            paddingTop: "x10lzpyj",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "xaso8d8",
            $$css: true
        },
        popupFlexControls: {
            paddingTop: "x123j3cw",
            paddingInlineEnd: "xfo0vy5",
            paddingBottom: "x156go17",
            paddingInlineStart: "x1lyran6",
            $$css: true
        },
        popupTower: {
            position: "x1n2onr6",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1l7klhg",
            width: "xs8rnei",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            marginTop: "x1coevs8",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xui9b5u",
            marginInlineStart: "x1lziwak",
            "@media screen and (min-height: 1000px)_marginTop": "xg3pqpk",
            "@media screen and (min-height: 1000px)_marginInlineEnd": "xusj4dd",
            "@media screen and (min-height: 1000px)_marginBottom": "x1a6k631",
            "@media screen and (min-height: 1000px)_marginInlineStart": "x1fwmvtr",
            "@media screen and (max-height: 700px)_marginTop": "x1n7bigs",
            "@media screen and (max-height: 700px)_marginInlineEnd": "x6ln8mz",
            "@media screen and (max-height: 700px)_marginBottom": "x12v3509",
            "@media screen and (max-height: 700px)_marginInlineStart": "xf35npv",
            $$css: true
        },
        popupTowerLarge: {
            width: "x1qfffx7",
            $$css: true
        },
        popupControls: {
            display: "x78zum5",
            flexWrap: "x8hhl5t",
            justifyContent: "x13a6bvl",
            paddingTop: "x13crsa5",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "xaso8d8",
            textAlign: "xp4054r",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        popupGuideBackdrop: {
            backgroundColor: "xglhzf2",
            $$css: true
        },
        popupGuidePopup: {
            width: "x14atkfc",
            maxWidth: "x65f84u",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            backgroundColor: "xjbqb8w",
            boxShadow: "x1gnnqk1",
            $$css: true
        },
        popupColumnButtonsControls: {
            flexDirection: "xdt5ytf",
            flexWrap: "x1a02dak",
            alignItems: "xuk3077",
            $$css: true
        },
        popupMultilineContents: {
            whiteSpace: "x1fj9vlw",
            $$css: true
        },
        popupStatusViewerList: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupGalaxyFlowResponse: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupGalaxyFlowResponseControls: {
            paddingTop: "xyamay9",
            paddingInlineEnd: "xv54qhq",
            paddingBottom: "x1l90r2v",
            paddingInlineStart: "xf7dkkf",
            $$css: true
        },
        popupPromote: {
            width: "x3p9ev8",
            $$css: true
        },
        popupPromoteControls: {
            justifyContent: "xl56j7k",
            textAlign: "x2b8uid",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupForwardMediaWithCaption: {
            width: "x1l895tw",
            $$css: true
        },
        popupForwardMediaWithCaptionControls: {
            textAlign: "x2b8uid",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupMessageActionsModal: {
            width: "x1l2rt3b",
            $$css: true
        },
        popupMessageActionsModalControls: {
            textAlign: "x2b8uid",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupCommandPalette: {
            position: "xixxii4",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            width: "x3p9ev8",
            maxHeight: "x179dxpb",
            top: "x15nb5xm",
            borderStartStartRadius: "xd0qcmr",
            borderStartEndRadius: "xsh6knr",
            borderEndEndRadius: "x1n13l81",
            borderEndStartRadius: "xv8lwpf",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            backgroundColor: null,
            $$css: true
        },
        popupCommandPaletteV2: {
            width: "xvue9z",
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        },
        popupQuickReplies: {
            width: "xvue9z",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            transform: "x15j3iad",
            $$css: true
        },
        popupQuickRepliesTitle: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        popupQuickRepliesBody: {
            position: "x1uhb9sk",
            $$css: true
        },
        popupQuickRepliesContents: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xx281p9",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x67w97k",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupQuickRepliesControls: {
            paddingTop: "xyamay9",
            paddingInlineEnd: "xx281p9",
            paddingBottom: "xx6bls6",
            paddingInlineStart: "x67w97k",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupChatAssignment: {
            width: "x1l2rt3b",
            $$css: true
        },
        popupHistorySyncProgress: {
            width: "x1l2rt3b",
            $$css: true
        },
        popupDataSharing: {
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            width: "x1l2rt3b",
            $$css: true
        },
        popupUpdatedDataSharing: {
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            width: "xbstwhj",
            $$css: true
        },
        popupMessageEdit: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            position: "x1n2onr6",
            width: "x1c4ky7w",
            maxHeight: "x179dxpb",
            $$css: true
        },
        popupMessageEditBody: {
            minHeight: "x2lwn1j",
            $$css: true
        },
        popupMessageEditContents: {
            height: "x5yr21d",
            $$css: true
        },
        popupDeleteNewsletter: {
            width: "x1l2rt3b",
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            $$css: true
        },
        popupDeleteNewsletterBody: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            $$css: true
        },
        popupDeleteNewsletterContents: {
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        popupListsAssignModal: {
            width: "x3p9ev8",
            paddingTop: "x889kno",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x1c1uobl",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupListsAssignModalTitle: {
            paddingTop: "xz9dl7a",
            paddingInlineStart: "x162tt16",
            paddingBottom: "xx6bls6",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        popupListsAssignModalContents: {
            maxHeight: "xubnuyq",
            overflowY: "x1odjw0f",
            $$css: true
        },
        popupListsAssignModalControls: {
            paddingTop: "x1cnzs8",
            paddingInlineEnd: "xv54qhq",
            paddingBottom: "xx6bls6",
            paddingInlineStart: "x106a9eq",
            $$css: true
        },
        popupLabelList: {
            width: "x1l2rt3b",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupLabelListControls: {
            paddingTop: "x1p5oq8j",
            paddingBottom: "xwxc41k",
            paddingInlineEnd: "xv54qhq",
            $$css: true
        },
        popupLabelListContents: {
            maxHeight: "xubnuyq",
            overflowY: "x1odjw0f",
            $$css: true
        },
        popupLabelEdit: {
            width: "x1l2rt3b",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            transform: "x15j3iad",
            $$css: true
        },
        popupLabelEditTitle: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        popupLabelEditControls: {
            paddingTop: "x1h678fw",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xv6tirj",
            paddingInlineStart: "xdx6fka",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupLabelEditContents: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupLabelChooseColor: {
            width: "x14atkfc",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            transform: "x15j3iad",
            $$css: true
        },
        popupLabelChooseColorTitle: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        popupLabelChooseColorControls: {
            paddingTop: "x1h678fw",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xv6tirj",
            paddingInlineStart: "xdx6fka",
            $$css: true
        },
        popupComments: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            maxHeight: "x12f24lm",
            backgroundColor: "xntdpzj",
            $$css: true
        },
        popupQuestions: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            minHeight: "x1xybu8v",
            maxHeight: "x12f24lm",
            width: "x1c4ky7w",
            $$css: true
        },
        popupBotNut: {
            width: "xht4xr3",
            $$css: true
        },
        popupEventCreation: {
            width: "x1peuizl",
            maxHeight: "xqbnct6",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupAdAccountRecovery: {
            width: "x14rvwrp",
            $$css: true
        },
        popupBusinessHoursControls: {
            paddingTop: "x1h678fw",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xv6tirj",
            paddingInlineStart: "xdx6fka",
            $$css: true
        },
        popupBusinessCategoriesControls: {
            paddingTop: "xyinxu5",
            paddingInlineEnd: "xv54qhq",
            paddingBottom: "xx6bls6",
            paddingInlineStart: "xf7dkkf",
            $$css: true
        },
        popupBusinessProfile: {
            maxHeight: "x9c89tr",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupBusinessProfileTitle: {
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x1iw51ew",
            marginTop: "xdj266r",
            marginBottom: "xat24cr",
            marginInlineEnd: "x1trhqq4",
            marginInlineStart: "x18xomjl",
            $$css: true
        },
        popupBusinessProfileBody: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            maxHeight: "xmz0i5r",
            minHeight: "x2lwn1j",
            $$css: true
        },
        popupBusinessProfileContents: {
            flexGrow: "x1iyjqo2",
            overflowY: "x1odjw0f",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        popupBusinessProfileControls: {
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "x1h678fw",
            paddingBottom: "xv6tirj",
            rowGap: "x1b8z93w",
            $$css: true
        },
        popupMediaHub: {
            position: "x1n2onr6",
            maxWidth: "x15o75uv",
            width: "x8fmnwm",
            minWidth: "xu9qebc",
            minHeight: "x5mc7k8",
            maxHeight: "xjd8us4",
            height: "xkdlbmv",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupMediaHubContents: {
            minHeight: "x5mc7k8",
            maxHeight: "xjd8us4",
            height: "x1id935b",
            $$css: true
        },
        popupFlexGroupSafetyCheckCenterControls: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        popupReachoutTimelock: {
            width: "x3p9ev8",
            $$css: true
        },
        popupIndividualNewChatMessageCapped: {
            width: "xvue9z",
            $$css: true
        },
        popupAddOrUpdatePix: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            width: "xtm0smt",
            height: "xt7dq6l",
            $$css: true
        },
        popupPaymentsFlow: {
            width: "xr6pica",
            height: "xt7dq6l",
            $$css: true
        },
        popupPaymentsConfirmDialog: {
            backgroundColor: "x1od0jb8",
            width: "x1l2rt3b",
            $$css: true
        },
        popupCDS: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            height: "xt7dq6l",
            $$css: true
        },
        popupBBUpload: {
            boxSizing: "x1afcbsf",
            $$css: true
        },
        popupCustomerManagerImport: {
            backgroundColor: "x1od0jb8",
            boxSizing: "x1afcbsf",
            $$css: true
        },
        popupCustomerManagerImportMapping: {
            maxWidth: "x1qogbu8",
            paddingTop: "xl7twdi",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            width: "xbqi55i",
            $$css: true
        },
        popupCustomerManagerEducation: {
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            maxWidth: "x1qogbu8",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            width: "x1jhqe9f",
            $$css: true
        },
        popupBizToolsAdCreationNux: {
            width: "x1n2tayp",
            height: "x1shxdc5",
            paddingTop: "x1xrf6ya",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        popupBizToolsAdCreationNuxControls: {
            rowGap: "x1b8z93w",
            paddingTop: "x1cnzs8",
            paddingBottom: "xx6bls6",
            $$css: true
        },
        popupBizToolsAdCreationEmailOnboarding: {
            width: "x4onevt",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupBizToolsAdCreationSuccess: {
            width: "x1n2tayp",
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            $$css: true
        },
        popupBizToolsAdCreationSuccessControls: {
            paddingTop: "x14a8spa",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        popupBillingWizard: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            maxHeight: "xqbnct6",
            width: "xw3w31c",
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "xv6tirj",
            paddingInlineStart: "x1c1uobl",
            overflowY: "x1odjw0f",
            $$css: true
        },
        popupPdfEdit: {
            backgroundColor: "x1od0jb8",
            width: "x1l2rt3b",
            height: "xpdbtf9",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupPdfEditError: {
            backgroundColor: "x1od0jb8",
            width: "x1l2rt3b",
            minHeight: "x9l5fec",
            maxHeight: "x1p6zaud",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        hardRefreshDialog: {
            width: "x1l2rt3b",
            height: "x1m3v4wt",
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            $$css: true
        },
        hardRefreshDialogControls: {
            paddingTop: "x1p57kb1",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        popupEditAbout: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            maxHeight: "xqbnct6",
            $$css: true
        },
        popupEditAboutBody: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            minHeight: "x2lwn1j",
            maxHeight: "xmz0i5r",
            $$css: true
        },
        popupBizBroadcastProDownloadRecipients: {
            width: "x1czfd9k",
            maxWidth: "x193iq5w",
            maxHeight: "xmz0i5r",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        popupBizBroadcastProConfirmDialog: {
            width: "xdtcc9p",
            paddingTop: "xl7twdi",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            paddingLeft: null,
            paddingRight: null,
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            boxShadow: "x1hdfv4t",
            $$css: true
        },
        popupBizBroadcastProConfirmDialogTitle: {
            marginBottom: "x1ua1l7f",
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        popupBizBroadcastProConfirmDialogContents: {
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        popupBizBroadcastProConfirmDialogControls: {
            paddingTop: "xl7twdi",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        popupBizBroadcastProMediumDialog: {
            width: "x3qjwna",
            maxHeight: "xmz0i5r",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            boxShadow: "x1hdfv4t",
            $$css: true
        },
        popupBizBroadcastVerifyOnPhone: {
            width: "x1peuizl",
            maxWidth: "x193iq5w",
            maxHeight: "xmz0i5r",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        popupEditAboutContents: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            minHeight: "x2lwn1j",
            $$css: true
        }
    };
    const y = {
        hidden: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        visible: {
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            $$css: true
        }
    };
    function C(t) {
        const u = t.ref;
        const d = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { onDragChange: g, onDrop: C, overflow: b } = d;
        const v = b === void 0 ? "hidden" : b;
        const S = m(r("WAWebVoipUiPopoutWindowContext"));
        const R = S.isDocPip || S.isContextInPopoutWindow;
        const L = m(r("WAWebModalFitViewportContext"));
        const E = d.fitToViewport ?? L;
        const k = _(null);
        const I = _(null);
        const T = _();
        const D = p();
        const x = function(t) {
            k.current?.onDragOver(t);
        };
        const $ = function(t) {
            k.current?.onDragStart(t);
        };
        const P = function(t) {
            k.current?.onDragEnd(t);
        };
        const N = d.type === f.StatusViewerList && d.dimensions ? h.statusViewerDimensions(d.dimensions.width, d.dimensions.height) : null;
        const M = [
            h.popup,
            y[v],
            h.popupMaterial,
            R && h.popupVoipPopoutWindowFix
        ];
        const w = [
            h.overlay,
            h.backdrop,
            h.backdropRefreshed,
            d.type === f.MediaHub && h.backdropMediaHub
        ];
        if (d.cover === true) {
            w.push(h.backdropCover);
        }
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(d.tsNavigationData ?? {
            surface: "unknown"
        });
        let A;
        let F;
        let O;
        let B;
        if (d.type != null) {
            switch(d.type){
                case f.Invite:
                    {
                        M.push(h.popupFlexInvite);
                        break;
                    }
                case f.InviteNew:
                    {
                        M.push(h.popupFlexInviteNew);
                        B = h.popupFlexInviteNewControls;
                        break;
                    }
                case f.Upgrade:
                    {
                        B = h.popupFlexUpgradeControls;
                        break;
                    }
                case f.Box:
                    {
                        M.push(h.popupBox);
                        break;
                    }
                case f.BoxLarge:
                    {
                        M.push(h.popupBoxLarge);
                        break;
                    }
                case f.Flex:
                    {
                        M.push(h.popupFlex);
                        B = h.popupFlexControls;
                        break;
                    }
                case f.Tower:
                    {
                        M.push(h.popupTower);
                        break;
                    }
                case f.TowerLarge:
                    {
                        M.push(h.popupTower, h.popupTowerLarge);
                        break;
                    }
                case f.Auto:
                    {
                        M.push(h.popupAuto);
                        A = h.popupAutoTitle;
                        F = h.popupAutoBody;
                        O = h.popupAutoContents;
                        B = h.popupAutoControls;
                        break;
                    }
                case f.ColumnButtons:
                    {
                        B = h.popupColumnButtonsControls;
                        break;
                    }
                case f.Multiline:
                    {
                        O = h.popupMultilineContents;
                        break;
                    }
                case f.StatusViewerList:
                    {
                        M.push(h.popupStatusViewerList);
                        w.push(h.showOverStatus);
                        break;
                    }
                case f.Promote:
                case f.BotNut:
                    {
                        M.push(h.popupPromote);
                        if (d.type === f.BotNut) {
                            M.push(h.popupBotNut);
                        }
                        B = h.popupPromoteControls;
                        break;
                    }
                case f.CommandPalette:
                    {
                        M.push(h.popupCommandPalette);
                        break;
                    }
                case f.CommandPaletteV2:
                    {
                        M.push(h.popupCommandPalette);
                        M.push(h.popupCommandPaletteV2);
                        break;
                    }
                case f.QuickReplies:
                    {
                        M.push(h.popupQuickReplies);
                        A = h.popupQuickRepliesTitle;
                        F = h.popupQuickRepliesBody;
                        O = h.popupQuickRepliesContents;
                        B = h.popupQuickRepliesControls;
                        break;
                    }
                case f.ChatAssignment:
                    {
                        M.push(h.popupChatAssignment);
                        break;
                    }
                case f.HistorySyncProgress:
                    {
                        M.push(h.popupHistorySyncProgress);
                        break;
                    }
                case f.DataSharing:
                    {
                        M.push(h.popupDataSharing);
                        break;
                    }
                case f.UpdatedDataSharing:
                    {
                        M.push(h.popupUpdatedDataSharing);
                        break;
                    }
                case f.GalaxyFlowResponsePopup:
                    {
                        M.push(h.popupGalaxyFlowResponse);
                        B = h.popupGalaxyFlowResponseControls;
                        break;
                    }
                case f.MessageEdit:
                    {
                        M.push(h.popupMessageEdit);
                        F = h.popupMessageEditBody;
                        O = h.popupMessageEditContents;
                        break;
                    }
                case f.Guide:
                    {
                        M.push(h.popupGuidePopup);
                        w.push(h.popupGuideBackdrop);
                        break;
                    }
                case f.StatusReport:
                    {
                        w.push(h.showOverStatus);
                        break;
                    }
                case f.MusicAttribution:
                    {
                        w.push(h.showOverStatus);
                        break;
                    }
                case f.LinkPopup:
                    {
                        w.push(h.showOverStatus);
                        break;
                    }
                case f.AiContentInfo:
                    {
                        w.push(h.showOverStatus);
                        break;
                    }
                case f.ListsAssignModal:
                    {
                        M.push(h.popupListsAssignModal);
                        A = h.popupListsAssignModalTitle;
                        O = h.popupListsAssignModalContents;
                        B = h.popupListsAssignModalControls;
                        break;
                    }
                case f.LabelList:
                    {
                        M.push(h.popupLabelList);
                        O = h.popupLabelListContents;
                        B = h.popupLabelListControls;
                        break;
                    }
                case f.LabelEdit:
                    {
                        M.push(h.popupLabelEdit);
                        A = h.popupLabelEditTitle;
                        B = h.popupLabelEditControls;
                        O = h.popupLabelEditContents;
                        break;
                    }
                case f.LabelChooseColor:
                    {
                        M.push(h.popupLabelChooseColor);
                        A = h.popupLabelChooseColorTitle;
                        B = h.popupLabelChooseColorControls;
                        break;
                    }
                case f.ForwardMediaWithCaption:
                    {
                        M.push(h.popupForwardMediaWithCaption);
                        B = h.popupForwardMediaWithCaptionControls;
                        break;
                    }
                case f.MessageActionsModal:
                    {
                        M.push(h.popupMessageActionsModal);
                        B = h.popupMessageActionsModalControls;
                        break;
                    }
                case f.DeleteNewsletter:
                    {
                        M.push(h.popupDeleteNewsletter);
                        F = h.popupDeleteNewsletterBody;
                        O = h.popupDeleteNewsletterContents;
                        break;
                    }
                case f.Questions:
                    {
                        M.push(h.popupQuestions);
                        break;
                    }
                case f.Comments:
                    {
                        M.push(h.popupComments);
                        break;
                    }
                case f.EventCreation:
                    {
                        M.push(h.popupEventCreation);
                        break;
                    }
                case f.Small:
                    {
                        M.push(h.popupSmall);
                        break;
                    }
                case f.ChannelCreation:
                    {
                        M.push(h.popupChannelCreation);
                        break;
                    }
                case f.ExportChat:
                    break;
                case f.AutoWrap:
                    {
                        M.push(h.popupAutoWrap);
                        O = h.popupAutoWrapContents;
                        break;
                    }
                case f.AdAccountRecovery:
                    {
                        M.push(h.popupAdAccountRecovery);
                        break;
                    }
                case f.BusinessHours:
                    {
                        M.push(h.popupAuto);
                        A = h.popupAutoTitle;
                        F = h.popupAutoBody;
                        O = h.popupAutoContents;
                        B = h.popupBusinessHoursControls;
                        break;
                    }
                case f.BusinessCategories:
                    {
                        M.push(h.popupAuto);
                        A = h.popupAutoTitle;
                        F = h.popupAutoBody;
                        O = h.popupAutoContents;
                        B = h.popupBusinessCategoriesControls;
                        break;
                    }
                case f.BusinessProfile:
                    {
                        M.push(h.popupBusinessProfile);
                        A = h.popupBusinessProfileTitle;
                        F = h.popupBusinessProfileBody;
                        O = h.popupBusinessProfileContents;
                        B = h.popupBusinessProfileControls;
                        break;
                    }
                case f.MediaHub:
                    {
                        M.push(h.popupMediaHub);
                        O = h.popupMediaHubContents;
                        break;
                    }
                case f.GroupSafetyCheck:
                    {
                        B = h.popupFlexGroupSafetyCheckCenterControls;
                        break;
                    }
                case f.ReachoutTimelock:
                    {
                        M.push(h.popupReachoutTimelock);
                        break;
                    }
                case f.IndividualNewChatMessageCapped:
                    {
                        M.push(h.popupIndividualNewChatMessageCapped);
                        break;
                    }
                case f.AddOrUpdatePix:
                    {
                        M.push(h.popupAddOrUpdatePix);
                        break;
                    }
                case f.CDS:
                    {
                        M.push(h.popupCDS);
                        break;
                    }
                case f.BusinessBroadcastUploadModal:
                    {
                        M.push(h.popupBBUpload);
                        break;
                    }
                case f.CustomerManagerImportModal:
                    {
                        M.push(h.popupCustomerManagerImport);
                        break;
                    }
                case f.CustomerManagerImportMappingModal:
                    {
                        M.push(h.popupCustomerManagerImportMapping);
                        break;
                    }
                case f.CustomerManagerEducationModal:
                    {
                        M.push(h.popupCustomerManagerEducation);
                        break;
                    }
                case f.PaymentsFlow:
                    {
                        M.push(h.popupPaymentsFlow);
                        break;
                    }
                case f.PaymentsConfirmDialog:
                    {
                        M.push(h.popupPaymentsConfirmDialog);
                        break;
                    }
                case f.BizToolsAdCreationNux:
                    {
                        M.push(h.popupBizToolsAdCreationNux);
                        B = h.popupBizToolsAdCreationNuxControls;
                        break;
                    }
                case f.BizToolsAdCreationEmailOnboarding:
                    {
                        M.push(h.popupBizToolsAdCreationEmailOnboarding);
                        break;
                    }
                case f.BizToolsAdCreationSuccess:
                    {
                        M.push(h.popupBizToolsAdCreationSuccess);
                        B = h.popupBizToolsAdCreationSuccessControls;
                        break;
                    }
                case f.BillingWizardDialog:
                    {
                        M.push(h.popupBillingWizard);
                        break;
                    }
                case f.PdfEdit:
                    {
                        M.push(h.popupPdfEdit);
                        break;
                    }
                case f.PdfEditError:
                    {
                        M.push(h.popupPdfEditError);
                        break;
                    }
                case f.HardRefresh:
                    {
                        M.push(h.hardRefreshDialog);
                        B = h.hardRefreshDialogControls;
                        break;
                    }
                case f.BizBroadcastProDownloadRecipients:
                    {
                        M.push(h.popupBizBroadcastProDownloadRecipients);
                        break;
                    }
                case f.BizBroadcastProConfirmDialog:
                    {
                        M.push(h.popupBizBroadcastProConfirmDialog);
                        A = h.popupBizBroadcastProConfirmDialogTitle;
                        O = h.popupBizBroadcastProConfirmDialogContents;
                        B = h.popupBizBroadcastProConfirmDialogControls;
                        break;
                    }
                case f.BizBroadcastProMediumDialog:
                    {
                        M.push(h.popupBizBroadcastProMediumDialog);
                        break;
                    }
                case f.BizBroadcastVerifyOnPhone:
                    {
                        M.push(h.popupBizBroadcastVerifyOnPhone);
                        break;
                    }
                case f.EditAbout:
                    {
                        M.push(h.popupEditAbout);
                        F = h.popupEditAboutBody;
                        O = h.popupEditAboutContents;
                        break;
                    }
            }
        }
        if (E) {
            M.push(h.popupFitViewport);
        }
        const W = d.actions != null ? <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(h.popupControls, B, d.controlsStyle), {
            children: d.actions
        })}/> : null;
        const q = d.title != null ? <h1 id={D} data-testid="popup-title" className={(s || (s = r("stylex")))(h.popupTitle, A)}>{d.title}</h1> : null;
        const U = function(t) {
            T.current = t.target;
        };
        const V = function(t) {
            if (!(t.target !== I.current || T.current !== I.current)) {
                if (R) {
                    if (d.onOverlayClick != null) {
                        d.onOverlayClick(t);
                    }
                    o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close();
                } else if (d.onOverlayClick) {
                    if (d.onOverlayClick != null) {
                        d.onOverlayClick(t);
                    }
                } else {
                    o("WAWebModalManager").ModalManager.getRef(function(e) {
                        if (e != null && e.contains(I.current)) {
                            o("WAWebModalManager").ModalManager.close();
                        }
                    });
                }
            }
        };
        const H = function(t) {
            if (o("WAWebL10NFbtTypeUtils").isStringOrFbt(t)) {
                return t.toString();
            }
            return "";
        };
        const G = `${H(d.title)} ${H(d.children)}`.trim();
        const z = d.ariaLabel ?? (G || void 0);
        const j = d.title != null ? D : void 0;
        const K = d.title == null ? z : void 0;
        const Q = <div {...babelHelpers.extends({
            ref: I,
            onClick: V,
            onMouseDown: U
        }, {
            0: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x1otje77 x1jn0hjm x1us19tq x1t137rt"
            },
            4: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k x1t137rt xh8yej3 x5yr21d xaaagfd x1t4djm1"
            },
            2: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x1otje77 x1us19tq x1t137rt xt7dq6l"
            },
            6: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k x1t137rt xh8yej3 xaaagfd x1t4djm1 xt7dq6l"
            },
            1: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x1jn0hjm x1us19tq x1t137rt xeuugli"
            },
            5: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k x1t137rt xh8yej3 x5yr21d x1t4djm1 xeuugli"
            },
            3: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x1us19tq x1t137rt xt7dq6l xeuugli"
            },
            7: {
                className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k x1t137rt xh8yej3 x1t4djm1 xt7dq6l xeuugli"
            }
        }[!!R << 2 | (d.type === f.EditAbout || d.autoHeight === true) << 1 | !!E << 0], {
            tabIndex: -1,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": j,
            "aria-label": K,
            children: <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(M, d.popupStyle, N), {
                "data-animate-modal-popup": true,
                ref: d.contentRef,
                "data-testid": d.testid ?? "confirm-popup",
                children: <div {...babelHelpers.extends({}, s.props(h.popupBody, F), {
                    "data-animate-modal-body": true,
                    children: [
                        q,
                        <div {...babelHelpers.extends({
                            "data-testid": "popup-contents"
                        }, s.props(h.popupContents, O), {
                            children: d.children
                        })}/>,
                        W
                    ]
                })}/>
            })}/>
        })}/>;
        const Component = r("WAWebDragAndDrop.react");
        const Component_1 = r("WAWebCopyPasteCopyableArea.react");
        return <Component_1 xstyle={w} onDragOver={x} onDragStart={$} onDragEnd={P} ref={u} data-animate-modal-backdrop>{C && <Component ref={k} disableFromWithin onDragChange={g} onDrop={C}/>}{Q}</Component_1>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.ModalTheme = f;
    l.Modal = C;
}, 98);