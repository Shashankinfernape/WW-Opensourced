__d("WAWebUnifiedResponseBubble.react", [
    "fbt",
    "JSResource",
    "MarkedMobileFlavorPlugin",
    "WALogger",
    "WAWebBloksEntryPointLoadable",
    "WAWebBotBaseGating",
    "WAWebBotConnectorActionCard.react",
    "WAWebBotFileCard.react",
    "WAWebBotPostCard.react",
    "WAWebBotSecureCredentialRequestCard.react",
    "WAWebBotSecureCredentialRequestUtils",
    "WAWebBotShoppingItemCard.react",
    "WAWebBotSpaceCard.react",
    "WAWebBotTaskCard.react",
    "WAWebBotTaskDetailDrawerLoadable",
    "WAWebBotTypes",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebCarouselNavigationButton",
    "WAWebChevronButton.react",
    "WAWebCometComposedTextV2URParserLoadable",
    "WAWebCopyPasteCopyable.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebHatchBrowserTaskCard.react",
    "WAWebHatchBrowserTaskMessageData",
    "WAWebHatchBrowserViewerOpener",
    "WAWebHatchConnectorsFlowLoadable",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchSpaceCardOpenTarget",
    "WAWebHatchUrl",
    "WAWebImagineURImage.react",
    "WAWebImagineVideoGenerating.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMessageCropping",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebModelStorageUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNullFunc",
    "WAWebPipConst",
    "WAWebPipSharedVideoPlayer.react",
    "WAWebQuotaUpsellBubble.react",
    "WAWebResolveUnifiedResponseImagineMedia",
    "WAWebThemeContext",
    "WAWebUnifiedResponseCitationRenderers.react",
    "WAWebUnifiedResponseContentDrawerLoadable",
    "WAWebUnifiedResponseStrikethroughRule",
    "WAWebUnifiedResponseUtils",
    "WAWebUseBotMessageUpdateScrolling",
    "WDSFocusStateStyles",
    "WDSInteractionTokens.stylex",
    "WDSSpinner.react",
    "WDSText.react",
    "WDSVars.stylex",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebForwardedRichResponseMedia",
    "useWAWebMsgValues",
    "useWAWebRichResponseMediaUrl",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useCallback, useLayoutEffect, useMemo, useRef, useState } = _;
    const b = r("JSResource")("WAWebHatchBrowserTaskTombstoneVisibility").__setRef("WAWebUnifiedResponseBubble.react");
    const v = [];
    let S = false;
    let R = null;
    function L(e) {
        v.push(e);
        if (!S) {
            S = true;
            let t = R;
            if (t == null) {
                t = E(true);
                R = t;
            }
            t.then((e)=>{
                k(e);
                S = false;
            }, (e)=>{
                R = null;
                S = false;
                v.splice(0);
                I(e);
            });
        }
    }
    function E(e) {
        return b.load().catch((t)=>{
            if (e) {
                return E(false);
            }
            throw t;
        });
    }
    function k(e) {
        for(let t = v.shift(); t != null;){
            try {
                t(e);
            } catch (error) {
                I(error);
            }
            t = v.shift();
        }
    }
    function I(t) {
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-browser-task/tombstone-visibility-failed"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("hatch-browser-task-tombstone-visibility-failed");
    }
    const T = new WeakMap;
    const D = new WeakMap;
    const x = new WeakMap;
    let $ = 1;
    const P = {
        connectorActionCardBubble: {
            paddingInlineEnd: "x1gabggj",
            paddingInlineStart: "xaso8d8",
            paddingTop: "x123j3cw",
            $$css: true
        },
        secureCredentialRequestCardBubble: {
            paddingInlineEnd: "x1gabggj",
            paddingInlineStart: "xaso8d8",
            paddingTop: "x123j3cw",
            $$css: true
        },
        browserTaskCardBubble: {
            paddingInlineEnd: "x1gabggj",
            paddingInlineStart: "xaso8d8",
            paddingTop: "x123j3cw",
            $$css: true
        },
        spaceCardBubble: {
            paddingInlineEnd: "x1gabggj",
            paddingInlineStart: "xaso8d8",
            paddingTop: "x123j3cw",
            $$css: true
        },
        container: {
            borderStartStartRadius: "xbjudin",
            borderStartEndRadius: "xnlwouz",
            borderEndEndRadius: "xpp8er5",
            borderEndStartRadius: "xs9wviy",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            color: "xhslqc4",
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x1iw51ew",
            $$css: true
        },
        imagineContainer: {
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        },
        imagineContainerHeight: function(t) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        imagineLoading: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            $$css: true
        }
    };
    const N = 32;
    const M = {
        citationBackgroundColor: o("WDSVars.stylex").WDSColors["--WDS-surface-elevated-emphasized"],
        citationLinkListHoverBackgroundColor: `rgba(${o("WDSVars.stylex").WDSColors["--WDS-surface-highlight-RGB"]}, ${o("WDSInteractionTokens.stylex").WDSInteractionTokens.hoveredStateLayerOpacity})`,
        citationListLinkBorderRadius: o("WDSVars.stylex").WDSVars.spacingSingle,
        citationListLinkPadding: o("WDSVars.stylex").WDSVars.spacingDouble,
        dividerColor: o("WDSVars.stylex").WDSColors["--WDS-lines-divider"],
        primaryIcon: o("WDSVars.stylex").WDSVars["--WDS-content-default"],
        secondaryIcon: o("WDSVars.stylex").WDSVars["--WDS-content-deemphasized"],
        tableBorderColor: o("WDSVars.stylex").WDSVars["--WDS-lines-divider"],
        tableCellPaddingBottom: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableCellPaddingInlineEnd: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableCellPaddingInlineStart: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableCellPaddingTop: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableContainerBorderRadius: o("WDSVars.stylex").WDSVars.borderRadiusSingle,
        tableHeaderBackgroundColor: o("WDSVars.stylex").WDSVars["--WDS-surface-emphasized"],
        tableHeaderPaddingBottom: o("WDSVars.stylex").WDSVars.spacingSinglePlus,
        tableHeaderPaddingInlineEnd: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableHeaderPaddingInlineStart: o("WDSVars.stylex").WDSVars.spacingSingle,
        tableHeaderPaddingTop: o("WDSVars.stylex").WDSVars.spacingSinglePlus
    };
    const light = {
        x73z65k: "x1pa9wj6 x73z65k",
        $$css: true
    };
    const dark = {
        x73z65k: "x1pa9wj6 x73z65k",
        $$css: true
    };
    function F(e) {
        const t = o("react-compiler-runtime").c(5);
        const { children, tag } = e;
        let i;
        if (t[0] !== tag) {
            i = tag === "h1" ? "LargeTitle1" : tag === "h2" ? "LargeTitle2" : tag === "h3" ? "Headline1" : tag === "h4" ? "Headline2" : tag === "h5" ? "Body1Emphasized" : tag === "h6" ? "Body1" : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${tag}`);
            })();
            t[0] = tag;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let s;
        if (t[2] !== children || t[3] !== l) {
            const Component = r("WDSText.react");
            s = <Component colorName="contentDefault" type={l}>{children}</Component>;
            t[2] = children;
            t[3] = l;
            t[4] = s;
        } else {
            s = t[4];
        }
        return s;
    }
    const O = 9 / 16;
    const B = o("WAWebMessageCropping").IMAGINE_UR_WIDTH - 6;
    function WComponent(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_mediaUrl = e.mediaUrl;
        const a = useState(null);
        const i = a[0];
        const onAspectRatio = a[1];
        let s;
        if (t[0] !== e_mediaUrl) {
            s = {
                videoUrl: e_mediaUrl,
                previewUrl: ""
            };
            t[0] = e_mediaUrl;
            t[1] = s;
        } else {
            s = t[1];
        }
        const ogVideoInfo = s;
        const c = i ?? O;
        const m = B / c;
        let _;
        if (t[2] !== m) {
            _ = (d || (d = r("stylex"))).props(P.imagineContainer, P.imagineContainerHeight(m));
            t[2] = m;
            t[3] = _;
        } else {
            _ = t[3];
        }
        let f;
        if (t[4] !== ogVideoInfo) {
            const Component = o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer;
            f = <Component type={o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER} ogVideoInfo={ogVideoInfo} startTime={null} autoPlay={false} noPip onAspectRatio={onAspectRatio}/>;
            t[4] = ogVideoInfo;
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] !== _ || t[7] !== f) {
            g = <div {...babelHelpers.extends({}, _, {
                children: f
            })}/>;
            t[6] = _;
            t[7] = f;
            t[8] = g;
        } else {
            g = t[8];
        }
        return g;
    }
    function Q1Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const { imagineType, mediaUrl, msgId, msgTimestamp } = e;
        const u = o("WAWebUnifiedResponseUtils").isAnimateImagineType(imagineType);
        if (mediaUrl == null || mediaUrl === "") {
            if (u) {
                let c;
                if (t[0] !== msgId) {
                    c = p.jsx(r("WAWebImagineVideoGenerating.react"), {
                        msgId
                    });
                    t[0] = msgId;
                    t[1] = c;
                } else {
                    c = t[1];
                }
                return c;
            }
            let d;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = o("WAWebFlex.react").FlexRow;
                d = <Component align="center" xstyle={P.container}>{s._("No media found")}</Component>;
                t[2] = d;
            } else {
                d = t[2];
            }
            return d;
        }
        if (u) {
            let m;
            if (t[3] !== mediaUrl) {
                m = <WComponent mediaUrl={mediaUrl}/>;
                t[3] = mediaUrl;
                t[4] = m;
            } else {
                m = t[4];
            }
            return m;
        }
        let _;
        if (t[5] !== mediaUrl || t[6] !== msgTimestamp) {
            _ = p.jsx(r("WAWebImagineURImage.react"), {
                mediaUrl,
                msgTimestamp
            });
            t[5] = mediaUrl;
            t[6] = msgTimestamp;
            t[7] = _;
        } else {
            _ = t[7];
        }
        return _;
    }
    function U(e) {
        const t = o("react-compiler-runtime").c(6);
        const { descriptor, downloadOrigin, imagineType, msgId, msgTimestamp } = e;
        const u = r("useWAWebRichResponseMediaUrl")(descriptor, downloadOrigin);
        const { hasSettled, url } = u;
        if (url == null && !hasSettled) {
            let m;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                m = <V/>;
                t[0] = m;
            } else {
                m = t[0];
            }
            return m;
        }
        let _;
        if (t[1] !== imagineType || t[2] !== msgId || t[3] !== msgTimestamp || t[4] !== url) {
            _ = <Q1Component imagineType={imagineType} mediaUrl={url} msgId={msgId} msgTimestamp={msgTimestamp}/>;
            t[1] = imagineType;
            t[2] = msgId;
            t[3] = msgTimestamp;
            t[4] = url;
            t[5] = _;
        } else {
            _ = t[5];
        }
        return _;
    }
    function V() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = (d || (d = r("stylex"))).props(P.imagineLoading, P.imagineContainerHeight(o("WAWebMessageCropping").IMAGINE_UR_WIDTH));
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebCopyPasteCopyable.react").CopyableSpan;
            n = <div {...babelHelpers.extends({
                "data-testid": "bot_forwarded_imagine_loading",
                role: "status"
            }, t, {
                children: [
                    <Component plainText=""><span className="xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s">{s._("Loading media")}</span></Component>,
                    p.jsx(r("WDSSpinner.react"), {
                        size: N
                    })
                ]
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function HComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            t = <Component align="center" xstyle={P.container}>{s._("Part of this response isn't supported on this device yet. View the full response on your phone.")}</Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    const G = new Set([
        o("WAWebBotTypes").BotMsgEditType.FIRST,
        o("WAWebBotTypes").BotMsgEditType.INNER,
        o("WAWebBotTypes").BotMsgEditType.LAST
    ]);
    function ZComponent(e) {
        const t = o("react-compiler-runtime").c(136);
        const { displayAuthor, displayType, errorFallback, jarvisItemRenderer, msgKey, unifiedResponse } = e;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let _;
            let f;
            m = [
                (_ = o("WAWebMsgGetters")).getBotEditType,
                _.getT,
                (f = o("WAWebFrontendMsgGetters")).getDir,
                _.getType,
                _.getSubtype,
                f.getRowId,
                f.getUnifiedResponseRawData,
                f.getBotSignatureVerificationMetadata,
                _.getLatestEditMsgKey,
                f.getLatestEditSenderTimestampMs
            ];
            t[0] = m;
        } else {
            m = t[0];
        }
        const h = o("useWAWebMsgValues").useMsgValues(msgKey, m);
        const b = h[0];
        const msgTimestamp = h[1];
        const S = h[2];
        const R = h[3];
        const subtype = h[4];
        const rowId = h[5];
        const unifiedResponseRawData = h[6];
        const botSignatureVerificationMetadata = h[7];
        const T = h[8];
        const D = h[9];
        let x;
        if (t[1] !== msgKey) {
            x = msgKey.toString();
            t[1] = msgKey;
            t[2] = x;
        } else {
            x = t[2];
        }
        let latestEditMsgKey;
        if (t[3] !== T) {
            latestEditMsgKey = T?.toString();
            t[3] = T;
            t[4] = latestEditMsgKey;
        } else {
            latestEditMsgKey = t[4];
        }
        const latestEditSenderTimestampMs = D ?? undefined;
        let M;
        if (t[5] !== botSignatureVerificationMetadata || t[6] !== rowId || t[7] !== subtype || t[8] !== x || t[9] !== latestEditMsgKey || t[10] !== latestEditSenderTimestampMs || t[11] !== R || t[12] !== unifiedResponseRawData) {
            M = {
                id: x,
                type: R,
                subtype,
                rowId,
                unifiedResponseRawData,
                botSignatureVerificationMetadata,
                latestEditMsgKey,
                latestEditSenderTimestampMs
            };
            t[5] = botSignatureVerificationMetadata;
            t[6] = rowId;
            t[7] = subtype;
            t[8] = x;
            t[9] = latestEditMsgKey;
            t[10] = latestEditSenderTimestampMs;
            t[11] = R;
            t[12] = unifiedResponseRawData;
            t[13] = M;
        } else {
            M = t[13];
        }
        const F = M;
        const O = b === o("WAWebBotTypes").BotMsgEditType.FIRST || b === o("WAWebBotTypes").BotMsgEditType.INNER;
        const B = useState(O);
        const W = B[0];
        o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(msgKey);
        const z = r("useWAWebUnmountSignal")();
        const ae = o("WAWebThemeContext").useIsDarkTheme();
        const ie = r("useWAWebForwardedRichResponseMedia")(msgKey, unifiedResponse);
        const { descriptorByCdnUrl, downloadOrigin, isForwardedMessage, isResolvingDescriptors } = ie;
        let ye;
        if (t[14] !== unifiedResponse) {
            ye = o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(unifiedResponse) && o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled();
            t[14] = unifiedResponse;
            t[15] = ye;
        } else {
            ye = t[15];
        }
        const Ce = ye;
        let be;
        if (t[16] !== displayType || t[17] !== msgKey) {
            be = p.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey,
                displayType
            });
            t[16] = displayType;
            t[17] = msgKey;
            t[18] = be;
        } else {
            be = t[18];
        }
        const ve = be;
        let Se;
        if (t[19] !== ve || t[20] !== msgKey.remote || t[21] !== unifiedResponse) {
            Se = le(msgKey.remote, unifiedResponse, ve);
            t[19] = ve;
            t[20] = msgKey.remote;
            t[21] = unifiedResponse;
            t[22] = Se;
        } else {
            Se = t[22];
        }
        const Re = Se;
        let Le;
        if (t[23] !== ve || t[24] !== msgKey || t[25] !== Re || t[26] !== unifiedResponse) {
            Le = re(msgKey.remote, msgKey.toString(), unifiedResponse, Re == null ? ve : null);
            t[23] = ve;
            t[24] = msgKey;
            t[25] = Re;
            t[26] = unifiedResponse;
            t[27] = Le;
        } else {
            Le = t[27];
        }
        const Ee = Le;
        const Ee_renderer = Ee.renderer;
        let Ie;
        if (t[28] !== unifiedResponse) {
            Ie = o("WAWebUnifiedResponseUtils").highestVersionBrowserTasks(unifiedResponse);
            t[28] = unifiedResponse;
            t[29] = Ie;
        } else {
            Ie = t[29];
        }
        const Te = Ie;
        let De;
        if (t[30] !== Te) {
            De = o("WAWebUnifiedResponseUtils").stripEmbeddedScreens(Te);
            t[30] = Te;
            t[31] = De;
        } else {
            De = t[31];
        }
        const xmsgGenAiUnifiedResponse = De;
        let $e;
        if (t[32] !== Ee_renderer || t[33] !== Ce || t[34] !== Re || t[35] !== xmsgGenAiUnifiedResponse) {
            $e = Ee_renderer == null && Re == null && !Ce ? o("WAWebUnifiedResponseUtils").trailingBrowserTaskId(xmsgGenAiUnifiedResponse) : null;
            t[32] = Ee_renderer;
            t[33] = Ce;
            t[34] = Re;
            t[35] = xmsgGenAiUnifiedResponse;
            t[36] = $e;
        } else {
            $e = t[36];
        }
        const Pe = $e;
        let Ne;
        if (t[37] !== Pe || t[38] !== unifiedResponse) {
            Ne = Pe != null && o("WAWebUnifiedResponseUtils").isSoleBrowserTaskCardResponse(unifiedResponse);
            t[37] = Pe;
            t[38] = unifiedResponse;
            t[39] = Ne;
        } else {
            Ne = t[39];
        }
        const Me = Ne;
        const we = Me ? Pe : null;
        let Ae;
        if (t[40] !== unifiedResponse) {
            Ae = o("WAWebUnifiedResponseUtils").isSoleSpaceCardResponse(unifiedResponse);
            t[40] = unifiedResponse;
            t[41] = Ae;
        } else {
            Ae = t[41];
        }
        const Fe = Ae;
        const hideMeta = Ce || we != null || Ee.hasInlineMeta || Re != null;
        const BeRef = useRef(null);
        if (BeRef.current == null) {
            let We;
            if (t[42] === Symbol.for("react.memo_cache_sentinel")) {
                We = new (o("WAWebUnifiedResponseUtils")).UnifiedResponseQPLLogger;
                We.markerStart({
                    string: {
                        component_name: "WAWebUnifiedResponseBubble"
                    }
                });
                t[42] = We;
            } else {
                We = t[42];
            }
            BeRef.current = We;
        }
        let qe;
        let Ue;
        if (t[43] === Symbol.for("react.memo_cache_sentinel")) {
            qe = function() {
                BeRef.current?.markerEnd(2);
            };
            Ue = [];
            t[43] = qe;
            t[44] = Ue;
        } else {
            qe = t[43];
            Ue = t[44];
        }
        useLayoutEffect(qe, Ue);
        let Ve;
        let He;
        if (t[45] !== msgKey || t[46] !== Pe) {
            Ve = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (Pe != null && e != null) {
                    me(e);
                }
                return ne;
            };
            He = [
                Pe,
                msgKey
            ];
            t[45] = msgKey;
            t[46] = Pe;
            t[47] = Ve;
            t[48] = He;
        } else {
            Ve = t[47];
            He = t[48];
        }
        useLayoutEffect(Ve, He);
        let Ge;
        if (t[49] === Symbol.for("react.memo_cache_sentinel")) {
            Ge = {
                nextButton: TeComponent,
                prevButton: EeComponent
            };
            t[49] = Ge;
        } else {
            Ge = t[49];
        }
        const hScrollRenderers = Ge;
        const renderer = Z;
        let Ke;
        if (t[50] === Symbol.for("react.memo_cache_sentinel")) {
            Ke = o("WAWebUnifiedResponseCitationRenderers.react").getUnifiedResponseCitationRenderers();
            t[50] = Ke;
        } else {
            Ke = t[50];
        }
        let browserTaskNodeRenderer;
        if (t[51] !== F || t[52] !== isForwardedMessage || t[53] !== O || t[54] !== ve || t[55] !== we || t[56] !== msgKey || t[57] !== unifiedResponse || t[58] !== z) {
            browserTaskNodeRenderer = function(t) {
                const e = o("WAWebHatchFrontendGating").isHatchBrowserEnabled(msgKey.remote);
                const n = e && !isForwardedMessage && !O;
                const tombstoneReportingKey = se(unifiedResponse, n);
                const i = _e(F, t.browserTaskId);
                return p.jsx(r("WAWebHatchBrowserTaskCard.react"), babelHelpers.extends({}, t, {
                    canOpen: e,
                    isBrowserEnabled: e,
                    isForwarded: isForwardedMessage,
                    isStreaming: O,
                    metaSlot: t.browserTaskId === we ? ve : undefined,
                    occurrence: ue(unifiedResponse, t),
                    onAcceptedTask: function(t, n) {
                        return i({
                            kind: "canonical",
                            task: t
                        }, n);
                    },
                    onOpen: function() {
                        return o("WAWebHatchBrowserViewerOpener").openHatchBrowserViewer(t.browserTaskId, msgKey.remote, z, function(e) {
                            return i({
                                kind: "stop"
                            }, e);
                        });
                    },
                    onTombstoneChange: function(n, r) {
                        const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                        if (e == null) {
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "hatch-browser/tombstone-change-skipped-message-gone"
                            ])));
                            return;
                        }
                        de(e, t, unifiedResponse, tombstoneReportingKey, n, r);
                    },
                    tombstoneReportingKey
                }));
            };
            t[51] = F;
            t[52] = isForwardedMessage;
            t[53] = O;
            t[54] = ve;
            t[55] = we;
            t[56] = msgKey;
            t[57] = unifiedResponse;
            t[58] = z;
            t[59] = browserTaskNodeRenderer;
        } else {
            browserTaskNodeRenderer = t[59];
        }
        let imagineNodeRenderer;
        if (t[60] !== descriptorByCdnUrl || t[61] !== downloadOrigin || t[62] !== isForwardedMessage || t[63] !== isResolvingDescriptors || t[64] !== msgKey || t[65] !== msgTimestamp) {
            imagineNodeRenderer = function({ imagineType, mediaUrl }) {
                const r = o("WAWebResolveUnifiedResponseImagineMedia").resolveUnifiedResponseImagineMedia({
                    descriptorByCdnUrl,
                    imagineType,
                    isForwardedMessage,
                    mediaUrl
                });
                if (r.isUnsupported) {
                    return <HComponent/>;
                }
                if (r.descriptor != null) {
                    return <U descriptor={r.descriptor} downloadOrigin={downloadOrigin} imagineType={imagineType} msgId={msgKey} msgTimestamp={msgTimestamp}/>;
                }
                if (isResolvingDescriptors) {
                    return <V/>;
                }
                return <Q1Component imagineType={imagineType} mediaUrl={r.mediaUrl} msgId={msgKey} msgTimestamp={msgTimestamp}/>;
            };
            t[60] = descriptorByCdnUrl;
            t[61] = downloadOrigin;
            t[62] = isForwardedMessage;
            t[63] = isResolvingDescriptors;
            t[64] = msgKey;
            t[65] = msgTimestamp;
            t[66] = imagineNodeRenderer;
        } else {
            imagineNodeRenderer = t[66];
        }
        let contentViewRenderer;
        if (t[67] === Symbol.for("react.memo_cache_sentinel")) {
            contentViewRenderer = {
                contentTriggerTextValues: {
                    citations: s._("See details")
                },
                renderer
            };
            t[67] = contentViewRenderer;
        } else {
            contentViewRenderer = t[67];
        }
        const connectorActionCardNodeRenderer = Ee_renderer ?? o("WAWebNullFunc").returnNull;
        let fileNodeRenderer;
        if (t[68] !== isForwardedMessage || t[69] !== jarvisItemRenderer) {
            fileNodeRenderer = jarvisItemRenderer != null ? function(e) {
                return jarvisItemRenderer(e.url);
            } : function(e) {
                return p.jsx(r("WAWebBotFileCard.react"), babelHelpers.extends({}, e, {
                    isForwardedMessage
                }));
            };
            t[68] = isForwardedMessage;
            t[69] = jarvisItemRenderer;
            t[70] = fileNodeRenderer;
        } else {
            fileNodeRenderer = t[70];
        }
        let quotaUpsellNodeRenderer;
        if (t[71] !== Ce || t[72] !== ve || t[73] !== msgKey || t[74] !== Re || t[75] !== unifiedResponse) {
            quotaUpsellNodeRenderer = Ce ? function(e) {
                return p.jsx(r("WAWebQuotaUpsellBubble.react"), babelHelpers.extends({}, e, {
                    benefitType: o("WAWebUnifiedResponseUtils").getQuotaUpsellBenefitType(unifiedResponse),
                    msgId: msgKey.toString(),
                    metaSlot: Re == null ? ve : null
                }));
            } : undefined;
            t[71] = Ce;
            t[72] = ve;
            t[73] = msgKey;
            t[74] = Re;
            t[75] = unifiedResponse;
            t[76] = quotaUpsellNodeRenderer;
        } else {
            quotaUpsellNodeRenderer = t[76];
        }
        let foABloksNodeRenderer;
        if (t[77] !== ae) {
            foABloksNodeRenderer = o("WAWebBotUnifiedResponseGating").isFoABloksNodeRendererEnabled() ? function({ data, type, uuid }) {
                return p.jsx(o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable, {
                    componentData: data,
                    componentType: type,
                    theme: ae ? "dark" : "light",
                    uuid
                });
            } : undefined;
            t[77] = ae;
            t[78] = foABloksNodeRenderer;
        } else {
            foABloksNodeRenderer = t[78];
        }
        let reelNodeRenderer;
        if (t[79] !== msgKey) {
            reelNodeRenderer = function({ avatarUrl, creator, reelsUrl, thumbnailUrl }) {
                return p.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
                    displayType: o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
                    msgKey,
                    reelItem: {
                        profileIconUrl: avatarUrl,
                        thumbnailUrl,
                        title: creator,
                        videoUrl: reelsUrl
                    },
                    theme: "bot_plugin_link"
                });
            };
            t[79] = msgKey;
            t[80] = reelNodeRenderer;
        } else {
            reelNodeRenderer = t[80];
        }
        let progressStatusRenderer;
        if (t[81] === Symbol.for("react.memo_cache_sentinel")) {
            progressStatusRenderer = {
                shimmerColor: `color-mix(in srgb, ${o("WDSVars.stylex").WDSVars["--WDS-content-default"]} 15%, transparent)`,
                textColor: o("WDSVars.stylex").WDSVars["--WDS-content-default"]
            };
            t[81] = progressStatusRenderer;
        } else {
            progressStatusRenderer = t[81];
        }
        let secureCredentialRequestNodeRenderer;
        if (t[82] !== Re) {
            secureCredentialRequestNodeRenderer = Re ?? Q;
            t[82] = Re;
            t[83] = secureCredentialRequestNodeRenderer;
        } else {
            secureCredentialRequestNodeRenderer = t[83];
        }
        let spaceCardNodeRenderer;
        if (t[84] !== downloadOrigin || t[85] !== isForwardedMessage || t[86] !== msgKey.remote) {
            spaceCardNodeRenderer = fe(msgKey.remote, isForwardedMessage, downloadOrigin);
            t[84] = downloadOrigin;
            t[85] = isForwardedMessage;
            t[86] = msgKey.remote;
            t[87] = spaceCardNodeRenderer;
        } else {
            spaceCardNodeRenderer = t[87];
        }
        let tableOverflowConfig;
        if (t[88] === Symbol.for("react.memo_cache_sentinel")) {
            tableOverflowConfig = {
                overflowCellCount: 4,
                overflowCellSize: 150
            };
            t[88] = tableOverflowConfig;
        } else {
            tableOverflowConfig = t[88];
        }
        let lt;
        if (t[89] !== browserTaskNodeRenderer || t[90] !== imagineNodeRenderer || t[91] !== connectorActionCardNodeRenderer || t[92] !== fileNodeRenderer || t[93] !== quotaUpsellNodeRenderer || t[94] !== foABloksNodeRenderer || t[95] !== reelNodeRenderer || t[96] !== secureCredentialRequestNodeRenderer || t[97] !== spaceCardNodeRenderer) {
            lt = babelHelpers.extends({}, Ke, {
                browserTaskNodeRenderer,
                focusRingXStyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                headingNodeRenderer,
                hScrollRenderers,
                imagineNodeRenderer,
                contentViewRenderer,
                connectorActionCardNodeRenderer,
                fileNodeRenderer,
                postNodeRenderer,
                productItemCardNodeRenderer,
                quotaUpsellNodeRenderer,
                foABloksNodeRenderer,
                reelNodeRenderer,
                progressStatusRenderer,
                secureCredentialRequestNodeRenderer,
                spaceCardNodeRenderer,
                tableOverflowConfig,
                taskNodeRenderer,
                unsupportedTypeNodeRenderer
            });
            t[89] = browserTaskNodeRenderer;
            t[90] = imagineNodeRenderer;
            t[91] = connectorActionCardNodeRenderer;
            t[92] = fileNodeRenderer;
            t[93] = quotaUpsellNodeRenderer;
            t[94] = foABloksNodeRenderer;
            t[95] = reelNodeRenderer;
            t[96] = secureCredentialRequestNodeRenderer;
            t[97] = spaceCardNodeRenderer;
            t[98] = lt;
        } else {
            lt = t[98];
        }
        const renderers = lt;
        let plugins;
        let rules;
        if (t[99] === Symbol.for("react.memo_cache_sentinel")) {
            plugins = {
                strong: o("MarkedMobileFlavorPlugin").strong
            };
            rules = {
                inline: {
                    del: o("WAWebUnifiedResponseStrikethroughRule").STRIKETHROUGH_DEL_RULE
                }
            };
            t[99] = plugins;
            t[100] = rules;
        } else {
            plugins = t[99];
            rules = t[100];
        }
        let dt;
        if (t[101] !== O) {
            dt = {
                isOptimistic: O,
                plugins,
                rules
            };
            t[101] = O;
            t[102] = dt;
        } else {
            dt = t[102];
        }
        const markedTokenizeOptions = dt;
        const streamingState = W && b != null && G.has(b) ? "STREAMING" : null;
        const useFixedWidth = Ee_renderer != null || Re != null || Me || Fe;
        const ft = Re != null && P.secureCredentialRequestCardBubble;
        const gt = Me && P.browserTaskCardBubble;
        const ht = Fe && P.spaceCardBubble;
        let yt;
        if (t[103] !== Ee.bubbleXstyle || t[104] !== ft || t[105] !== gt || t[106] !== ht) {
            yt = [
                Ee.bubbleXstyle,
                ft,
                gt,
                ht
            ];
            t[103] = Ee.bubbleXstyle;
            t[104] = ft;
            t[105] = gt;
            t[106] = ht;
            t[107] = yt;
        } else {
            yt = t[107];
        }
        const spacer = !hideMeta;
        let bt;
        if (t[108] === Symbol.for("react.memo_cache_sentinel")) {
            bt = "x178xkhk xiz2v2z xd53t3 x1sbyv9i x9kql8n x1ldr7nx";
            t[108] = bt;
        } else {
            bt = t[108];
        }
        const dir = S ?? "auto";
        const onClickCapture = o("WAWebBotUtils").isHatchBot(msgKey.remote) ? oe : undefined;
        const displayMode = ae ? "dark" : "light";
        const hideSecureCredentialStandInText = Re != null;
        let logging;
        if (t[109] === Symbol.for("react.memo_cache_sentinel")) {
            logging = {
                searchResultSourceMismatch: true
            };
            t[109] = logging;
        } else {
            logging = t[109];
        }
        let themeOverrides;
        if (t[110] === Symbol.for("react.memo_cache_sentinel")) {
            themeOverrides = {
                light,
                dark
            };
            t[110] = themeOverrides;
        } else {
            themeOverrides = t[110];
        }
        let It;
        if (t[111] !== errorFallback || t[112] !== O || t[113] !== markedTokenizeOptions || t[114] !== renderers || t[115] !== streamingState || t[116] !== displayMode || t[117] !== hideSecureCredentialStandInText || t[118] !== xmsgGenAiUnifiedResponse) {
            It = p.jsx(o("WAWebCometComposedTextV2URParserLoadable").CometComposedTextV2URParserLoadable, {
                displayMode,
                errorFallback,
                hideSecureCredentialStandInText,
                isStreaming: O,
                logging,
                markedTokenizeOptions,
                xmsgGenAiUnifiedResponse,
                themeOverrides,
                streamingState,
                renderers
            });
            t[111] = errorFallback;
            t[112] = O;
            t[113] = markedTokenizeOptions;
            t[114] = renderers;
            t[115] = streamingState;
            t[116] = displayMode;
            t[117] = hideSecureCredentialStandInText;
            t[118] = xmsgGenAiUnifiedResponse;
            t[119] = It;
        } else {
            It = t[119];
        }
        let Tt;
        if (t[120] !== dir || t[121] !== onClickCapture || t[122] !== It) {
            Tt = <div className={`${bt} ${o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS}`} dir={dir} onClickCapture={onClickCapture}>{It}</div>;
            t[120] = dir;
            t[121] = onClickCapture;
            t[122] = It;
            t[123] = Tt;
        } else {
            Tt = t[123];
        }
        let Dt;
        if (t[124] !== msgKey || t[125] !== spacer || t[126] !== Tt) {
            const Component = r("WAWebMessageSpacerText.react");
            Dt = <Component msgKey={msgKey} spacer={spacer}>{Tt}</Component>;
            t[124] = msgKey;
            t[125] = spacer;
            t[126] = Tt;
            t[127] = Dt;
        } else {
            Dt = t[127];
        }
        let xt;
        if (t[128] !== displayAuthor || t[129] !== displayType || t[130] !== hideMeta || t[131] !== msgKey || t[132] !== useFixedWidth || t[133] !== yt || t[134] !== Dt) {
            const Component = r("WAWebMessageTextBubble.react");
            xt = <Component msgKey={msgKey} displayAuthor={displayAuthor} displayType={displayType} hideMeta={hideMeta} useFixedWidth={useFixedWidth} xstyle={yt}>{Dt}</Component>;
            t[128] = displayAuthor;
            t[129] = displayType;
            t[130] = hideMeta;
            t[131] = msgKey;
            t[132] = useFixedWidth;
            t[133] = yt;
            t[134] = Dt;
            t[135] = xt;
        } else {
            xt = t[135];
        }
        return xt;
    }
    function unsupportedTypeNodeRenderer() {
        return <HComponent/>;
    }
    unsupportedTypeNodeRenderer.displayName = `${unsupportedTypeNodeRenderer.name} [from ${i.id}]`;
    function taskNodeRenderer(e) {
        return p.jsx(r("WAWebBotTaskCard.react"), babelHelpers.extends({}, e, {
            onPress: function() {
                return AeComponent(e);
            }
        }));
    }
    taskNodeRenderer.displayName = `${taskNodeRenderer.name} [from ${i.id}]`;
    function Q() {
        return null;
    }
    function productItemCardNodeRenderer(e) {
        return p.jsx(r("WAWebBotShoppingItemCard.react"), babelHelpers.extends({}, e));
    }
    productItemCardNodeRenderer.displayName = `${productItemCardNodeRenderer.name} [from ${i.id}]`;
    function postNodeRenderer(e) {
        return p.jsx(r("WAWebBotPostCard.react"), babelHelpers.extends({}, e));
    }
    postNodeRenderer.displayName = `${postNodeRenderer.name} [from ${i.id}]`;
    function headingNodeRenderer({ children, tag }) {
        return <F tag={tag}>{children}</F>;
    }
    headingNodeRenderer.displayName = `${headingNodeRenderer.name} [from ${i.id}]`;
    function Z(contentView) {
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(p.jsx(o("WAWebUnifiedResponseContentDrawerLoadable").WAWebUnifiedResponseContentDrawerLoadable, {
            contentView
        }));
    }
    function EeComponent(e) {
        const Component = o("WAWebCarouselNavigationButton").CarouselNavigationButton;
        return <Component buttonType={o("WAWebChevronButton.react").ButtonType.Prev} displayType={o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel} onButtonClick={e}/>;
    }
    EeComponent.displayName = `${EeComponent.name} [from ${i.id}]`;
    function TeComponent(e) {
        const Component = o("WAWebCarouselNavigationButton").CarouselNavigationButton;
        return <Component buttonType={o("WAWebChevronButton.react").ButtonType.Next} displayType={o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel} onButtonClick={e}/>;
    }
    TeComponent.displayName = `${TeComponent.name} [from ${i.id}]`;
    function ne() {}
    function re(remote, t, unifiedResponse, r) {
        const a = o("WAWebUnifiedResponseUtils").hasMultipleConnectorActionCards(unifiedResponse);
        const renderer = ie(remote, t, unifiedResponse, r, a);
        const hasInlineMeta = renderer != null && !a;
        return {
            bubbleXstyle: hasInlineMeta ? P.connectorActionCardBubble : null,
            hasInlineMeta,
            renderer
        };
    }
    function oe(e) {
        const n = e.target instanceof Element ? e.target.closest("a") : null;
        const a = o("WAWebHatchUrl").getHatchConnectLinkConnectorId(n?.getAttribute("href"));
        if (!(n == null || a == null || r("WAWebHatchLinkedStatusManager").isUnlinked() || !o("WAWebHatchFrontendGating").isHatchConnectorsEnabled())) {
            e.preventDefault();
            e.stopPropagation();
            o("WAWebHatchConnectorsFlowLoadable").openHatchConnectorDrawer(a, (n.textContent ?? "").trim() || a);
        }
    }
    function AeComponent(e) {
        const Component = o("WAWebBotTaskDetailDrawerLoadable").WAWebBotTaskDetailDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component onClose={o("WAWebDrawerManager").closeDrawerRight} task={e}/>);
    }
    function ie(e, t, n, r, a) {
        if (!o("WAWebBotUtils").isHatchBot(e) || !o("WAWebUnifiedResponseUtils").unifiedResponseHasConnectorActionCard(n) || !o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()) {
            return null;
        }
        if (a) {
            return function(e) {
                return p.jsx(o("WAWebBotConnectorActionCard.react").WAWebBotConnectorActionCardRow, babelHelpers.extends({}, e, {
                    msgKey: t
                }));
            };
        }
        return function(e) {
            return p.jsx(o("WAWebBotConnectorActionCard.react").WAWebBotConnectorActionCard, babelHelpers.extends({}, e, {
                metaSlot: r,
                msgKey: t
            }));
        };
    }
    function le(e, t, n) {
        if (!o("WAWebBotUtils").isHatchBot(e) || !o("WAWebBotSecureCredentialRequestUtils").isLoneTopLevelLoginRequest(t) || !o("WAWebHatchFrontendGating").isHatchSecureCredentialsEnabled()) {
            return null;
        }
        return function(e) {
            return p.jsx(o("WAWebBotSecureCredentialRequestCard.react").WAWebBotSecureCredentialRequestCard, babelHelpers.extends({}, e, {
                metaSlot: n
            }));
        };
    }
    function se(e, t) {
        if (t) {
            return ce(e);
        }
        return null;
    }
    function ue(e, t) {
        let n = T.get(e);
        if (n == null) {
            n = new Map;
            T.set(e, n);
        }
        const r = n.get(t.browserTaskId);
        if (r != null) {
            return r;
        }
        const o = {
            browserTaskId: t.browserTaskId
        };
        n.set(t.browserTaskId, o);
        return o;
    }
    function ce(e) {
        const t = D.get(e);
        if (t != null) {
            return t;
        }
        const n = String($++);
        D.set(e, n);
        return n;
    }
    function de(e, t, n, r, o, a) {
        const i = me(e);
        if (!(i < 0)) {
            L(function({ updateBrowserTaskTombstoneVisibility }) {
                if (!(x.get(e) !== i || o && e.unifiedResponse !== n)) {
                    updateBrowserTaskTombstoneVisibility(e, t, n, r, o, a);
                }
            });
        }
    }
    function me(e) {
        const t = x.get(e);
        if (t != null) {
            return t;
        }
        let n = 0;
        x.set(e, n);
        const r = function() {
            if (n >= 0) {
                x.set(e, ++n);
            }
        };
        e.on("change:botEditType", r);
        e.on("change:isForwarded", r);
        e.on("change:unifiedResponse", r);
        e.on("remove", function() {
            n = -1;
            x.set(e, n);
        });
        return n;
    }
    const pe = r("JSResource")("WAWebHatchBrowserTaskMessagePersistence").__setRef("WAWebUnifiedResponseBubble.react");
    function _e(e, browserTaskId) {
        return function(r, a) {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(r.kind === "canonical" && o("WAWebHatchBrowserTaskMessageData").browserTaskMessageTerminalState(r.task) == null)) {
                    const n = o("WAWebModelStorageUtils").getStorage();
                    const i = o("WAWebHatchBrowserTaskMessageData").messageIdentity(e);
                    const l = ((e)=>{
                        if ((typeof e === "object" && e !== null || typeof e === "function") && e.kind === "canonical" && "task" in e) {
                            const t = e.task;
                            return {
                                kind: "canonical",
                                task: babelHelpers.extends({}, t)
                            };
                        }
                        return {
                            kind: "stop"
                        };
                    })(r);
                    const s = yield pe.load();
                    if (!(o("WAWebModelStorageUtils").getStorage() !== n || !a() || i !== o("WAWebHatchBrowserTaskMessageData").messageIdentity(e))) {
                        yield s.persistBrowserTaskMessage(e, browserTaskId, l, function() {
                            return o("WAWebModelStorageUtils").getStorage() === n && a();
                        });
                    }
                }
            })().catch(()=>o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-browser/task-message-persistence-failed"
                ]))));
        };
    }
    function fe(e, t, n) {
        const a = o("WAWebBotUtils").isHatchBot(e);
        const canLoadMedia = a && !t;
        return function(e) {
            return p.jsx(r("WAWebBotSpaceCard.react"), babelHelpers.extends({}, e, {
                canLoadMedia,
                downloadOrigin: n,
                openTarget: o("WAWebHatchSpaceCardOpenTarget").getHatchSpaceCardOpenTarget({
                    canOpen: e.canOpen,
                    displayName: e.displayName,
                    shareUrl: e.shareUrl,
                    slug: e.slug,
                    source: e.source,
                    sourceUrl: e.sourceUrl,
                    status: e.status
                }, a)
            }));
        };
    }
    l.WAWebHatchBrowserTaskTombstoneVisibilityResource = b;
    l.WAWebUnifiedResponseBubble = ZComponent;
    l.getConnectorActionCardNodeRenderer = ie;
    l.getSecureCredentialRequestNodeRenderer = le;
    l.getBrowserTaskTombstoneReportingKey = se;
    l.getBrowserTaskOccurrence = ue;
    l.updateBrowserTaskTombstoneVisibility = de;
    l.getTombstoneVisibilityAdmissionEpoch = me;
    l.getSpaceCardNodeRenderer = fe;
}, 226);