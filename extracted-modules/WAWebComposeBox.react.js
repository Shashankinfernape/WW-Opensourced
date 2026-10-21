__d("WAWebComposeBox.react", [
    "fbt",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiPrepareCtwaContextSend",
    "WAWebAppContext.react",
    "WAWebAskMetaAiQuotedMediaSend",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiSmartComposerAccentFrame.react",
    "WAWebBizAiSmartComposerGating",
    "WAWebBizAiSmartComposerPendingCoachingStore",
    "WAWebBizAiSmartComposerStatusPlaceholder.react",
    "WAWebBizAiSmartComposerWrapperLoadable",
    "WAWebBizQueryCtwaContextBridge",
    "WAWebBlocklistCollection",
    "WAWebBotBaseGating",
    "WAWebBotCommandSuggestions.react",
    "WAWebBotGating",
    "WAWebBotProfileGetters",
    "WAWebBotSuggestions.react",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebBusinessProfileUtils",
    "WAWebChatGetters",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebCmd",
    "WAWebCodeFormatMutator",
    "WAWebComposeBoxActions",
    "WAWebComposeBoxPopupPanels.react",
    "WAWebComposeBoxUtils",
    "WAWebComposeBoxWWAIWrapperLoadable",
    "WAWebComposeConstants",
    "WAWebConversationSpamUtils",
    "WAWebCopyPasteCopyableArea.react",
    "WAWebCryptoRandomMediaKey",
    "WAWebDrawerManager",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiPickerPlugin",
    "WAWebErrorBoundary.react",
    "WAWebFilePicker.react",
    "WAWebFileUtils",
    "WAWebFrontendChatGetters",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebHatchCommandPickerPlugin.react",
    "WAWebHatchGating",
    "WAWebIsScheduledMessagesAvailableForChat",
    "WAWebKeyboardHotKeys.react",
    "WAWebLexicalUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebLinkPreviewChatAction",
    "WAWebLinkPreviewEligibility",
    "WAWebLinkify",
    "WAWebMaybeGetAiThreadInfo",
    "WAWebMediaConstants",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMentionPickerPlugin",
    "WAWebMessageComposer.react",
    "WAWebMetaAiOpenGroupNux",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebNoop",
    "WAWebPaymentLink",
    "WAWebPaymentLinkWamLogger",
    "WAWebPrepareMessageSendingAction",
    "WAWebPresenceChatAction",
    "WAWebProtobufsE2E.pb",
    "WAWebPttComposerRecordingSession",
    "WAWebPttMessageUserJourneyLogger",
    "WAWebQuestions.flow",
    "WAWebQuickReplyGatingUtils",
    "WAWebQuickReplyPickerPlugin",
    "WAWebQuoteLineUtils",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebReconnectUtil",
    "WAWebRecordingSessionStateEnum",
    "WAWebResolveSupportedMediaTypes",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebScheduledMsgActionLogger",
    "WAWebSendScheduledMsgAction",
    "WAWebSendStickerAction",
    "WAWebSendTextMsgChatAction",
    "WAWebSpoilerGating",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebSuggestionsPanelContainer.react",
    "WAWebTabOrder",
    "WAWebTextSizeUtils",
    "WAWebThemeContext",
    "WAWebThreadsViewAutoQuoteContext",
    "WAWebThreadsViewComposeQuotedMsgContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUseBusinessProfile.react",
    "WAWebUseHatchCommandsFetch",
    "WAWebUseShouldShowBotSuggestions",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumWebcStickerMakerEventNameType",
    "WAWebWebcStickerMakerEventsWamEvent",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "cr:5993",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useForceUpdate",
    "useLazyRef",
    "useWAWebAreSmartComposerAiModesAvailable",
    "useWAWebBizAiSmartComposerSendReport",
    "useWAWebBusinessProfileValues",
    "useWAWebCancelPttWhileAgentActive",
    "useWAWebChatPreferenceValues",
    "useWAWebChatValues",
    "useWAWebClearQuotedMsgWhileAgentActive",
    "useWAWebComposeBoxActionListeners",
    "useWAWebDebouncedCallback",
    "useWAWebIsKeyboardUser",
    "useWAWebIsSmartComposerShellEnabled",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebOptionalBotProfileValues",
    "useWAWebSetModelValue",
    "useWAWebStableCallback",
    "useWAWebTextMessageUserJourneyLogger"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = [
        "ref"
    ];
    let h;
    let y;
    const C = y || (y = o("react"));
    const b = y;
    const { useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } = b;
    const D = /^https?:\/\/media\.giphy\.com\/media\/([a-zA-Z0-9]+)/;
    const x = 1;
    const $ = 8;
    const P = 15;
    function N(e, t) {
        return e.length === t.length && e.every((e, n)=>e.url === t[n].url);
    }
    function M(text) {
        return (o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes") ? o("WAWebQuoteLineUtils").removeTrailingEmptyQuoteLines(text) : text).trim();
    }
    const w = {
        blockCompose: {
            position: "x1n2onr6",
            zIndex: "xhtitgo",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            alignItems: "xuk3077",
            maxWidth: "x193iq5w",
            minHeight: "x122xwht",
            backgroundColor: "xhjsbib",
            $$css: true
        },
        blockComposeRefresh: {
            backgroundColor: "xjbqb8w",
            minHeight: "x1wiwyrm",
            maxWidth: "xquzyny",
            $$css: true
        },
        footer: {
            position: "x1n2onr6",
            zIndex: "xhtitgo",
            boxSizing: "x9f619",
            flex: "x1okw0bk",
            order: "xo1ph6p",
            width: "xh8yej3",
            minHeight: "x122xwht",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        footerRefresh: {
            minHeight: "x1wiwyrm",
            $$css: true
        },
        footerCollapsed: {
            minHeight: "x2lwn1j",
            $$css: true
        },
        botSuggestions: {
            marginTop: "x4fdtkf",
            $$css: true
        },
        footerDarkThreePanel: {
            borderInlineEndWidth: "x1lun4ml",
            borderInlineEndStyle: "x18b5jzi",
            borderInlineEndColor: "xbogo7e",
            $$css: true
        },
        blockComposeCollapsed: {
            display: "x1s85apg",
            $$css: true
        },
        richTextRefresh: {
            caretColor: "xjdcl3y",
            $$css: true
        }
    };
    function AComponent(t) {
        "use no forget";
        const t_ref = t.ref;
        const O = babelHelpers.objectWithoutPropertiesLoose(t, g);
        const O_canShowSpamPanel = O.canShowSpamPanel;
        const W = O_canShowSpamPanel === undefined ? false : O_canShowSpamPanel;
        const { chat, isEmbeddedPreview } = O;
        const V = isEmbeddedPreview === undefined ? false : isEmbeddedPreview;
        const { onComposeHeightChange, onPageUpDown, onSend, questionType, threadId } = O;
        const maxVisibleLines = o("WAWebABProps").getABPropConfigValue("wa_web_composer_height_increase_enabled") ? P : $;
        const X = useContext(r("WAWebThreadsViewAutoQuoteContext"));
        const Y = r("useForceUpdate")();
        const J = o("useWAWebChatValues").useChatValues(O.chat.id, [
            o("WAWebChatGetters").getId,
            o("WAWebFrontendChatGetters").getTrusted,
            o("WAWebFrontendChatGetters").getComposeQuotedMsg,
            o("WAWebChatGetters").getIsPSA,
            o("WAWebChatGetters").getIsGroup,
            o("WAWebFrontendChatGetters").getPttRecordingSession,
            o("WAWebFrontendChatGetters").getShouldAppearInList,
            o("WAWebFrontendChatGetters").getPresence,
            o("WAWebFrontendChatGetters").getContact,
            o("WAWebFrontendChatGetters").getAttachMediaContents,
            o("WAWebFrontendChatGetters").getQuotedMsgAdminGroupJid,
            o("WAWebFrontendChatGetters").getQuotedMsgAdminGroupSubject,
            o("WAWebFrontendChatGetters").getQuotedMsgAdminParentGroupJid,
            o("WAWebFrontendChatGetters").getComposeQuotedMsgRemoteJid,
            o("WAWebChatGetters").getIsAutoMuted,
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebChatGetters").getIsBroadcast,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getIsCAG
        ]);
        const Z = J[0];
        const ee = J[1];
        const te = J[2];
        const ne = J[3];
        const re = J[4];
        const oe = J[5];
        const ae = J[6];
        const ie = J[7];
        const le = J[8];
        const se = J[9];
        const quotedMsgAdminGroupJid = J[10];
        const quotedMsgAdminGroupSubject = J[11];
        const quotedMsgAdminParentGroupJid = J[12];
        const me = J[13];
        const pe = J[14];
        const _e = J[15];
        const fe = J[16];
        const ge = J[17];
        const isQuestion = questionType === o("WAWebQuestions.flow").QuestionType.Question;
        const O_questionReplyQuotedMessage = O.questionReplyQuotedMessage;
        const Ce = o("useWAWebSetModelValue").useSetModelValue(chat, "composeQuotedMsg");
        const be = useContext(r("WAWebThreadsViewComposeQuotedMsgContext"));
        const ve = be?.quotedMsg ?? te;
        const Se = be?.setQuotedMsg ?? Ce;
        const Re = o("useWAWebSetModelValue").useSetModelValue(chat, "quotedMsgAdminGroupJid");
        const Le = o("useWAWebSetModelValue").useSetModelValue(chat, "composeQuotedMsgRemoteJid");
        const Ee = o("useWAWebSetModelValue").useSetModelValue(chat, "pttRecordingSession");
        const ke = o("useWAWebChatPreferenceValues").useChatPreferenceValues(r("WAWebChatPreferenceCollection").getDefault().id, [
            o("WAWebChatPreferenceGetters").getSpellcheck,
            o("WAWebChatPreferenceGetters").getTransformTextEmoji,
            o("WAWebChatPreferenceGetters").getEnterIsSend
        ]);
        const Ie = ke[0];
        const transformTextEmoji = ke[1];
        const De = ke[2];
        const xe = useMemo(function() {
            return chat.getComposeContents();
        }, [
            chat
        ]);
        const $e = useState(null);
        const Pe = $e[0];
        const Ne = $e[1];
        const MeRef = useRef(xe?.omittedURL);
        const we = useState(null);
        const Ae = we[0];
        const Fe = we[1];
        const Oe = useState(false);
        const Be = Oe[0];
        const We = Oe[1];
        const qe = useState(o("WAWebPaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED);
        const Ue = qe[0];
        const Ve = qe[1];
        const HeRef = useRef(xe?.omittedURL);
        const GeRef = useRef(xe?.text || "");
        const ze = useState([]);
        const links = ze[0];
        const Ke = ze[1];
        const Qe = ()=>{
            const e = o("WAWebCodeFormatMutator").removeCodeBlocks(GeRef.current);
            const t = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            const n = o("WAWebLinkify").findLinks(e, true, t);
            Ke(function(e) {
                if (N(e, n)) {
                    return e;
                }
                return n;
            });
            return o("WAWebLinkPreviewEligibility").findFirstPreviewEligibleWebLink({
                getShouldHideSpoilers: o("WAWebSpoilerGating").isSpoilerSenderEnabled,
                sender: t,
                text: GeRef.current
            });
        };
        const Xe = r("useWAWebIsKeyboardUser")();
        const Xe_isKeyboardUser = Xe.isKeyboardUser;
        const Je = o("WAWebThemeContext").useIsDarkTheme();
        const Ze = o("WAWebAppContext.react").useAppContext();
        const Ze_rightDrawerOpen = Ze.rightDrawerOpen;
        const tt = useState(null);
        const nt = tt[0];
        const rt = tt[1];
        const ot = ()=>Z.isBot() || nt != null;
        const at = o("WAWebBotGating").isBizBot3pAvailable() || o("WAWebBotBaseGating").isBizBot1pEnabled() ? Z : null;
        const it = o("WAWebUseBusinessProfile.react").useBusinessProfile(at);
        const lt = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(at, [
            o("WAWebBusinessProfileGetters").getCommands,
            o("WAWebBusinessProfileGetters").getPrompts,
            o("WAWebBusinessProfileGetters").getIsBizBot1p
        ]) ?? [
            null,
            null,
            null
        ];
        const st = lt[0];
        const ut = lt[1];
        const ct = lt[2];
        const metaBotId = nt ?? Z;
        const mt = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(metaBotId, [
            o("WAWebBotProfileGetters").getCommands
        ]);
        const pt = mt[0];
        const highlightedBotCommands = st || o("WAWebBotBaseGating").isBotEnabled() && pt || null;
        const ftRef = useRef([]);
        const gt = r("useLazyRef")(function() {
            return new AbortController;
        });
        const ht = useState(false);
        const yt = ht[0];
        const Ct = ht[1];
        const bt = o("WAWebUseShouldShowBotSuggestions").useShouldShowBotSuggestions(O.chat, ut, O.threadId);
        o("WAWebUseHatchCommandsFetch").useHatchCommandsFetch(chat.id);
        const getCurrentComposeContent = r("useWAWebStableCallback")(function() {
            return chat.getComposeContents();
        });
        const StRef = useRef(false);
        const Rt = r("useWAWebTextMessageUserJourneyLogger")(chat.id, (getCurrentComposeContent()?.text?.length ?? 0) > 0);
        const { handleCloseForUJLogging, handleMsgSentForUJLogging, handleTextMsgChangeForUJLogging } = Rt;
        useEffect(function() {
            return function() {
                handleCloseForUJLogging(ve != null);
                if (chat.pttRecordingSession != null) {
                    o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.draftSaved(chat.id, ve != null);
                }
            };
        }, []);
        const It = ()=>{
            ftRef.current = [];
            gt.current.abort();
            gt.current = new AbortController;
            if (yt) {
                Ct(false);
            }
        };
        const omitLinkPreview = function(t = o("WAWebUim").DismissReason.UIM_INTERACTION) {
            We(true);
            Dt(t);
        };
        var Dt = (t = o("WAWebUim").DismissReason.UIM_INTERACTION)=>{
            if (t !== o("WAWebUim").DismissReason.LIFECYCLE) {
                It();
                if (Ae) {
                    HeRef.current = MeRef.current;
                    Fe(null);
                }
            }
        };
        const xt = ()=>{
            MeRef.current = null;
            We(false);
            Ve(o("WAWebPaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED);
            Dt();
        };
        const $t = (a, i)=>{
            if (a.data.thumbnailDirectPath !== undefined) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: using an existing thumbnail mms"
                ])));
                const t = o("WAWebComposeBoxUtils").getCachedPreview(a);
                Fe(function(e) {
                    if (e?.url !== a.url) {
                        return e;
                    }
                    return t;
                });
                return (h || (h = n("Promise"))).resolve();
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: uploading new thumbnail mms"
            ])));
            const thumbnailHQ = a.data.thumbnailHQ;
            if (thumbnailHQ == null || thumbnailHQ === "") {
                return (h || (h = n("Promise"))).resolve();
            }
            return r("WAWebMediaOpaqueData").createFromBase64Jpeg(thumbnailHQ).then((e)=>r("WAWebMediaUploadMmsThumbnail")({
                    thumbnail: e,
                    mediaType: _e ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK : o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
                    mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
                    uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(chat),
                    fileOrigin: null,
                    forwardedFromWeb: false,
                    signal: i,
                    timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                    isViewOnce: false
                })).then((e)=>{
                const e_mediaEntry = e.mediaEntry;
                if (e_mediaEntry) {
                    Fe(function(n) {
                        if (n?.url !== a.url) {
                            return n;
                        }
                        const r = {
                            mediaKey: e_mediaEntry.mediaKey,
                            mediaKeyTimestamp: e_mediaEntry.mediaKeyTimestamp,
                            thumbnailDirectPath: e_mediaEntry.directPath,
                            thumbnailSha256: e.filehash,
                            thumbnailEncSha256: e_mediaEntry.encFilehash
                        };
                        const o = babelHelpers.extends({}, a, {
                            data: babelHelpers.extends({}, a.data, r)
                        });
                        return o;
                    });
                }
            }).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((e)=>{
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Full preview upload has failed: "
                ])));
            });
        };
        const Pt = useState(!!GeRef.current);
        const Nt = Pt[0];
        const Mt = Pt[1];
        const wt = useState(xe?.ctwaContextLinkData);
        const ctwaContextLinkData = wt[0];
        const Ft = wt[1];
        const OtRef = useRef(null);
        const BtRef = useRef(null);
        const WtRef = useRef(null);
        const qtRef = useRef(null);
        const UtRef = useRef(null);
        const VtRef = useRef(null);
        const HtRef = useRef(null);
        const GtRef = useRef(false);
        const ztRef = useRef(false);
        const jtRef = useRef(null);
        const KtRef = useRef(null);
        const Qt = r("useWAWebStableCallback")(function() {
            if (!Nt || ctwaContextLinkData) {
                xt();
                return;
            }
            const e = Qe();
            if (!e) {
                xt();
                return;
            }
            const e_url = e.url;
            if (!(MeRef.current !== "" && MeRef.current === e_url)) {
                MeRef.current = e_url;
                HeRef.current = null;
                const n = gt.current.signal;
                let a = null;
                if (o("WAWebPaymentLink").shouldDetectInComposer()) {
                    a = o("WAWebPaymentLink").getPSP(e_url);
                }
                const i = a != null ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE;
                const l = o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, i, true, {
                    psp: a
                });
                Fe(l);
                Ve(o("WAWebPaymentLinkWamLogger").LinkPreviewStatus.STARTED);
                const s = o("WAWebLinkPreviewChatAction").getLinkPreview(e, chat).then((t)=>{
                    if (n.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    if (t && MeRef.current === t.url && t.data && (t.data.title || t.data.description)) {
                        Fe(t);
                        return $t(t, n).finally(()=>{
                            Ve(o("WAWebPaymentLinkWamLogger").LinkPreviewStatus.COMPLETED);
                        });
                    }
                    if (l != null) {
                        Fe(o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, i, false, {
                            psp: a
                        }));
                    }
                });
                ftRef.current.push(s);
                s.catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").Unmount, r("WAWebNoop"))).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
            }
        });
        const Xt = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(Qt);
        });
        const YtRef = useRef({
            text: "",
            parsableText: "",
            data: {}
        });
        const Jt = useState();
        const richTextInputRef = Jt[0];
        const en = Jt[1];
        const tn = useState(chat.pttRecordingSession);
        const nn = tn[0];
        const rn = tn[1];
        const on = useState(chat.pttRecordingSession != null);
        const pttComposerActive = on[0];
        const ln = on[1];
        const sn = useState(null);
        const un = sn[0];
        const cn = sn[1];
        const dn = useState(function() {
            const GeRef_current = GeRef.current;
            if (GeRef_current.trim().length === 0) {
                return 0;
            }
            return GeRef_current.trim().split(/\s+/).length;
        });
        const wordCount = dn[0];
        const pn = dn[1];
        const getComposeText = useCallback(function() {
            return GeRef.current;
        }, []);
        const onWillOpenTray = useCallback(function() {
            cn(null);
        }, []);
        const gn = useState(null);
        const fabSlot = gn[0];
        const yn = gn[1];
        const Cn = useState(null);
        const pillSlot = Cn[0];
        const vn = Cn[1];
        const Sn = useState(null);
        const cardSlot = Sn[0];
        const Ln = Sn[1];
        const En = useState(null);
        const statusSlot = En[0];
        const In = En[1];
        const Tn = useState(null);
        const stopSlot = Tn[0];
        const xn = Tn[1];
        const $n = r("useWAWebIsSmartComposerShellEnabled")() && o("WAWebBizAiSmartComposerGating").shouldUseSmartComposerShellForChat(chat);
        const Pn = $n && !V;
        const areAiModesAvailable = r("useWAWebAreSmartComposerAiModesAvailable")(Z, Pn);
        const Mn = o("WAWebBizAiSmartComposerWrapperLoadable").useWAWebBizAiSmartComposerWrapperReady(Pn);
        const wn = o("WAWebBizAiAgentStatusUtils").useShouldShowAiAgentBlockBar(Z) && $n;
        const An = r("useWAWebStableCallback")(function() {
            o("WAWebBizAiSmartComposerPendingCoachingStore").discardPendingCoachingSnapshot(Z);
        });
        const Fn = r("useWAWebBizAiSmartComposerSendReport")(Z, Nt, Pn);
        const onInsert = r("useWAWebStableCallback")(function(e) {
            if (richTextInputRef?.editor == null) {
                return false;
            }
            richTextInputRef.selectAll();
            richTextInputRef.replaceSelection(e);
            return true;
        });
        const onAcceptSuggestion = r("useWAWebStableCallback")(function(e) {
            if (!wn) {
                onInsert(e);
            }
        });
        const ariaActiveDescendents = "";
        const qn = useState(xe?.ctwaContext);
        const ctwaContextData = qn[0];
        const Vn = qn[1];
        const Hn = useState(function() {
            return o("WAWebConversationSpamUtils").shouldShowSpamPanel(chat);
        });
        const Gn = Hn[0];
        const zn = Hn[1];
        const onClickNotSpam = function() {
            zn(false);
            o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(chat);
        };
        const onClickDismissSpam = function() {
            zn(false);
        };
        const Qn = useState({
            handleOnce: [],
            handleMultiple: []
        });
        const Xn = Qn[0];
        const Yn = Qn[1];
        o("useWAWebListener").useListener(o("WAWebBlocklistCollection").BlocklistCollection, [
            "add",
            "remove",
            "reset"
        ], Y);
        const Jn = function() {
            const GeRef_current = GeRef.current;
            const n = chat.getComposeContents();
            if (!(n == null && GeRef_current.trim() === "") && n?.text?.trim() !== GeRef_current.trim()) {
                const r = {
                    text: GeRef_current,
                    timestamp: o("WATimeUtils").unixTime()
                };
                const a = HeRef.current;
                if (a != null) {
                    r.omittedURL = a;
                }
                if (ctwaContextData != null) {
                    r.ctwaContext = ctwaContextData;
                }
                if (ctwaContextLinkData != null) {
                    r.ctwaContextLinkData = ctwaContextLinkData;
                }
                chat.setComposeContents(r);
            }
        };
        const Zn = (t)=>{
            Jn();
            xt();
            const t_sourceUrl = t.sourceUrl;
            if (t_sourceUrl != null && t_sourceUrl !== "") {
                o("WAWebBizQueryCtwaContextBridge").fetchCtwaContextData(t).then((e)=>{
                    Vn(e);
                    Jn();
                }).catch((e)=>{
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to retrieve CTWA context data, error: ",
                        ""
                    ])), e);
                });
            }
        };
        useEffect(function() {
            Xt.current.debounceAndCap(50, 50);
            if (ctwaContextLinkData && (!ctwaContextData || ctwaContextData.sourceUrl !== ctwaContextLinkData.sourceUrl)) {
                Vn(null);
                Zn(ctwaContextLinkData);
            }
            o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.setHasDraft(chat.pttRecordingSession != null);
        }, []);
        r("useWAWebOnUnmount")(function() {
            Xt.current.cancel();
            gt.current.abort();
            jtRef.current?.cancel();
            Jn();
        });
        const erRef = useRef(threadId);
        useEffect(function() {
            const erRef_current = erRef.current;
            erRef.current = threadId;
            if (erRef_current !== threadId) {
                Se(null);
            }
        }, [
            Se,
            threadId
        ]);
        const tr = r("useWAWebDebouncedCallback")(Jn, 200);
        const nr = ()=>{
            const e = GeRef.current.trim().length > 0;
            return e;
        };
        const rr = (t)=>{
            if (wn) {
                const e = stopSlot?.querySelector("button");
                if (e instanceof HTMLElement) {
                    e.focus();
                }
                return;
            }
            richTextInputRef?.focus();
        };
        const or = function(t, n) {
            if (!(wn || richTextInputRef == null)) {
                richTextInputRef.replaceSelection(t, n);
            }
        };
        const onPaste = function(t, n) {
            if (t === " " && !nr()) {
                return o("WAWebCmd").Cmd.scrollMessages();
            }
            rr(true);
            or(t, n);
        };
        const ir = (t)=>{
            if (!wn) {
                const bot3pMediaInputAuthorized = o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(chat);
                if (Z.isBot() && !o("WAWebBotUtils").isBotChannelFBID(Z) && !Z.isSupportAgentBot() && !o("WAWebBotGating").isMediaInputEnabledForAssistantBotChat(Z) && !bot3pMediaInputAuthorized) {
                    o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("This action is not supported.")
                    }));
                    return false;
                }
                const n = r("justknobx")._("4552");
                const a = t.filter((e)=>{
                    const t = o("WAWebFileUtils").typeFromMimetype(e.type);
                    if (t === o("WAWebFileUtils").FILETYPE.DOCUMENT) {
                        return n;
                    }
                    return t === o("WAWebFileUtils").FILETYPE.IMAGE || t === o("WAWebFileUtils").FILETYPE.VIDEO || t === o("WAWebFileUtils").FILETYPE.AUDIO;
                });
                if (a.length > 0) {
                    An();
                    tr.flush();
                    o("WAWebCmd").Cmd.attachMediaDrawer({
                        chat,
                        threadId,
                        attachments: a.map((e)=>({
                                file: e
                            })),
                        bot3pMediaInputAuthorized,
                        fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.PASTE,
                        initCaption: getCurrentComposeContent(),
                        onComplete: Er
                    });
                }
                return true;
            }
        };
        const onPasteFiles = function(t) {
            ir(t);
        };
        const onRoutedPaste = function(t) {
            if (!wn) {
                rr(true);
                if (richTextInputRef != null) {
                    richTextInputRef.paste(t);
                }
            }
        };
        const ur = useState(false);
        const openedFromMenu = ur[0];
        const dr = ur[1];
        const onToggleQuickReplies = function() {
            if (!wn) {
                if (o("WAWebQuickReplyGatingUtils").isQuickReplyComposerEntryPointEnabled(chat)) {
                    dr(true);
                }
                if (richTextInputRef != null) {
                    richTextInputRef.replaceSelection("/");
                }
            }
        };
        const pr = ()=>{
            richTextInputRef?.reset();
        };
        const _r = ()=>{
            richTextInputRef?.reset(o("WAWebLexicalUtils").TEXT_SEND_CLEAR_UPDATE_TAG);
        };
        const fr = r("useWAWebStableCallback")(function() {
            rr();
        });
        const gr = function() {
            o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(true);
        };
        const hr = function() {
            o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(false);
        };
        const yrRef = useRef(null);
        const CrRef = useRef(null);
        const onCtwaContextLinkData = function(t) {
            Ft(t);
            Vn(null);
            Zn(t);
        };
        const onSendingLogAttributes = function(t) {
            Yn(function({ handleMultiple, handleOnce }) {
                return {
                    handleOnce: t.handleOnce ? handleOnce.concat(t.handleOnce) : handleOnce,
                    handleMultiple: t.handleMultiple ? handleOnce.concat(t.handleMultiple) : handleMultiple
                };
            });
        };
        const omitCtwa = function() {
            Ft(null);
            Vn(null);
            Jn();
            Xt.current.onOrBefore(1);
        };
        const Rr = ()=>{
            BtRef.current?.activate();
            rr(false);
        };
        const Lr = function(t) {
            t.stopPropagation();
            onPageUpDown(t);
            jtRef.current?.debounce(0);
        };
        var Er = r("useWAWebStableCallback")(function(e, { initCaptionUsed: t_initCaptionUsed } = {}) {
            if (e && t_initCaptionUsed) {
                o("WAWebBizAiSmartComposerPendingCoachingStore").discardPendingCoachingSnapshot(chat.id);
                pr();
            }
            if (e) {
                omitCtwa();
            }
        });
        const flushSaveComposeContentDebounced = r("useWAWebStableCallback")(function() {
            tr.flush();
        });
        const onExpressionPanelClose = function() {
            cn(null);
            fr();
        };
        const Tr = (gifUrl, filename, attribution, accessibilityLabel)=>{
            An();
            const e = o("WAWebComposeBoxUtils").fetchGif({
                accessibilityLabel,
                attribution,
                filename,
                gifUrl
            });
            tr.flush();
            if (isQuestion || O_questionReplyQuotedMessage) {
                o("WAWebModalManager").ModalManager.close();
            }
            o("WAWebCmd").Cmd.attachMediaDrawer({
                chat,
                threadId,
                attachments: [
                    e
                ],
                bot3pMediaInputAuthorized: o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(chat),
                initCaption: getCurrentComposeContent(),
                fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_GIF_INAPP,
                onComplete: function(t, n) {
                    Er(t, n);
                    if (t) {
                        onExpressionPanelClose();
                    }
                },
                isQuestion,
                questionReplyQuotedMessage: O_questionReplyQuotedMessage
            });
            e.catch(r("WAWebNoop"));
            return e;
        };
        const Dr = function(t, n, r) {
            if (!wn) {
                Tr(t, t, n, r);
            }
        };
        const xr = (t, n, r)=>{
            if (!wn) {
                An();
                const e = ve ?? X;
                const a = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(ctwaContextLinkData, ctwaContextData);
                const i = {
                    stickerSendOrigin: n,
                    quotedMsg: e,
                    ctwaContext: a,
                    threadId
                };
                if (r === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub) {
                    i.isWamoSub = true;
                }
                o("WAWebSendStickerAction").sendStickerToChat(chat, t, i);
                Se(null);
                omitCtwa();
            }
        };
        const $r = function(t, n, r) {
            if (t.isCreateButton) {
                An();
                new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({
                    stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP
                }).commit();
                VtRef.current?.open();
                return;
            }
            if (_e && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(ge) && r?.target && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
                const a = function(r) {
                    xr(t, n, r);
                };
                Ne({
                    popupAnchorEl: r.target,
                    handleSelect: a
                });
            } else {
                xr(t, n);
            }
        };
        const handlePanelsStickerFromStore = function(t, n, r) {
            if (r === true) {
                xr(t, n, o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub);
            } else {
                xr(t, n);
            }
        };
        const Nr = function() {
            if (re) {
                o("WAWebMetaAiOpenGroupNux").maybeShowGroupAgentNuxes(o("WAWebStateUtils").unproxy(chat));
            }
        };
        const Mr = (parsableText, n = false)=>{
            const GeRef_current = GeRef.current;
            const r = nr();
            GeRef.current = parsableText;
            const a = nr();
            o("WAWebBizAiSmartComposerPendingCoachingStore").maybeDiscardPendingCoachingSnapshotForComposerChange(Z, GeRef_current, parsableText, n);
            const i = parsableText.trim().length === 0 ? 0 : parsableText.trim().split(/\s+/).length;
            pn(i);
            if (a !== r) {
                window.setTimeout(function() {
                    o("WAWebComposeBoxActions").ComposeBoxActions.setHasText(a);
                }, 0);
                Mt(a);
            }
            if (a) {
                ie.subscribe();
                o("WAWebPresenceChatAction").markComposing(chat, YtRef.current.data.mentionedJidList);
                o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
            } else {
                o("WAWebPresenceChatAction").markPaused(chat);
            }
            const l = Qe();
            if (!l && MeRef.current || l && l.url !== MeRef.current) {
                xt();
            }
            if (GtRef.current) {
                Xt.current.onOrBefore(1);
            } else {
                Xt.current.debounce(o("WAWebABProps").getABPropConfigValue("web_link_preview_debounce_period_ms"));
            }
            GtRef.current = false;
            tr();
            if (!Gn && parsableText && !ee) {
                zn(true);
            }
            const data = YtRef.current.data;
            rt(o("WAWebSendTextMsgChatAction").getInvokedBotWid(chat, data.mentionedJidList));
            if (StRef.current) {
                StRef.current = false;
            } else {
                handleTextMsgChangeForUJLogging(a, ve != null);
            }
        };
        const startRecording = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                let e;
                if (chat.pttRecordingSession != null) {
                    e = chat.pttRecordingSession;
                } else {
                    e = o("WAWebPttComposerRecordingSession").createRecordingSession({
                        chat: o("WAWebStateUtils").unproxy(chat)
                    });
                    e.on("change:recordingState", function() {
                        const e_recordingState = e.recordingState;
                        if (chat.pttRecordingSession === e && (e_recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR || e_recordingState === o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED)) {
                            Ee(null);
                        }
                    });
                }
                rn(e);
                ln(false);
                o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.start(chat.id, ve != null);
                let t;
                try {
                    t = yield e.start();
                } finally{
                    const n = t ? e : null;
                    Ee(n);
                    rn(n);
                    ln(n != null);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const onExpressionPanelChange = function(t) {
            cn(t);
            if (t != null) {
                o("WAWebUserPrefsGeneral").setLastComposeBoxExpressionPanel(t);
            }
        };
        const onFiles = function(t) {
            const e = t.getFiles();
            return ir(e);
        };
        const onTextPaste = function(t) {
            const e = D.exec(t);
            if (e) {
                const n = `https://media.giphy.com/media/${e[1]}/200w.mp4`;
                Tr(n, t, o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY).catch(()=>{
                    o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                    rr(true);
                    richTextInputRef?.replaceSelection(t);
                    o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Couldn't add item")
                    }));
                });
                return true;
            }
            GtRef.current = true;
            return false;
        };
        const getComposeBlockWidth = function() {
            if (qtRef.current) {
                return qtRef.current.offsetWidth - x;
            }
            return 0;
        };
        const handleInputFocus = function(t) {
            let e;
            const t_target = t.target;
            if (!(t_target instanceof HTMLElement && (e = CrRef.current) != null && e.contains(t_target))) {
                if (t_target instanceof HTMLElement && t_target === richTextInputRef?.editor?.getRootElement()) {
                    Rr();
                }
                if (!re && Nt) {
                    zn(true);
                }
            }
        };
        const qr = (t)=>{
            o("WAWebReconnectUtil").reconnect();
            const n = M(YtRef.current.text);
            const data = YtRef.current.data;
            if (!(n.length === 0 && !ctwaContextLinkData)) {
                if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(chat, data.mentionedJidList)) {
                    o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(chat);
                    return;
                }
                It();
                const i = ve ?? X;
                const l = Ae?.data;
                const paymentLinkMetadata = o("WAWebPaymentLink").getPaymentLinkMessageMetadata(l, o("WAWebCodeFormatMutator").removeCodeBlocks(n));
                const u = data.mentionedJidList || [];
                const c = data.groupMentions || [];
                const d = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(ctwaContextLinkData, ctwaContextData);
                const _ = ztRef.current;
                cn(null);
                Mt(false);
                Fe(null);
                yrRef.current?.close();
                if (_) {
                    const f = o("WAWebStateUtils").unproxy(chat);
                    if (f.urlText) {
                        f.urlText = undefined;
                    }
                }
                const g = threadId != null ? {
                    threadIds: [
                        threadId
                    ],
                    aiThreadInfo: o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(chat, threadId)
                } : {};
                const h = babelHelpers.extends({
                    linkPreview: l,
                    quotedMsg: i,
                    mentionedJidList: u,
                    groupMentions: c,
                    quotedMsgAdminGroupJid,
                    quotedMsgAdminGroupSubject,
                    quotedMsgAdminParentGroupJid,
                    ctwaContext: d,
                    isQuestion,
                    questionReplyQuotedMessage: O_questionReplyQuotedMessage
                }, g, {
                    maybeNonJidMentioned: KtRef.current != null && KtRef.current > 0
                });
                if (_e) {
                    if (t === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
                        h.isWamoSub = true;
                    }
                    o("WAWebNewsletterSendMsgAction").sendNewsletterTextMsg(chat, n, h);
                } else {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "sendTextAction inside WAWebComposeBox"
                    ])));
                    const y = o("WAWebAskMetaAiQuotedMediaSend").sendAskMetaAiAwareTextMsg(chat, n, babelHelpers.extends({}, h, {
                        botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable() && st && o("WAWebLexicalUtils").hasBotCommand(richTextInputRef?.editor) ? o("WAWebBotTypes").BotMsgBodyType.COMMAND : null,
                        paymentLinkMetadata
                    }));
                    y.catch((e)=>{
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "sendAskMetaAiAwareTextMsg failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("send-text-msg");
                    });
                    Fn(n, y);
                    omitCtwa();
                    Xn.handleOnce.forEach((e)=>e?.());
                    Xn.handleMultiple.forEach((e)=>e?.());
                    Yn({
                        handleMultiple: Xn.handleMultiple,
                        handleOnce: []
                    });
                }
                if (o("WAWebPaymentLinkWamLogger").shouldLogSendEvent()) {
                    const C = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                    const b = o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(C));
                    o("WAWebPaymentLinkWamLogger").genLogSendEventIfPaymentLink(o("WAWebCodeFormatMutator").removeCodeBlocks(n), Be, Ae, Ue, b, chat, paymentLinkMetadata).catch(r("WAWebNoop"));
                }
                ztRef.current = false;
                KtRef.current = null;
                Se(null);
                Re(null);
                Le(null);
                chat.setComposeContents({});
                _r();
            }
        };
        const Ur = function() {
            if (!wn) {
                if (_e && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(ge) && OtRef.current && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
                    const e = function(t) {
                        qr(t);
                    };
                    Ne({
                        popupAnchorEl: OtRef.current,
                        handleSelect: e
                    });
                } else {
                    qr();
                }
                onSend?.();
                o("WAWebCmd").Cmd.chatMessageSent(chat);
                StRef.current = true;
                handleMsgSentForUJLogging(ve != null);
                if (ve != null) {
                    o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageSent(chat.id);
                }
            }
        };
        const onSetTextContent = r("useWAWebStableCallback")(function(e) {
            if (!(wn || richTextInputRef == null)) {
                richTextInputRef.setTextContent(e);
            }
        });
        const handleTab = function(t) {
            if (un) {
                UtRef.current?.restoreFocus(true);
                o("WAWebStopEvent").stopEvent(t);
            }
        };
        const handleMetaUpDebounced = r("useWAWebDebouncedCallback")(function(e) {
            if (!nr()) {
                o("WAWebComposeBoxUtils").editLastMessage(chat, e);
            }
        }, 200, {
            trailing: true
        });
        const closePttComposer = r("useWAWebStableCallback")(function() {
            rn(null);
            ln(false);
            fr();
        });
        r("useWAWebCancelPttWhileAgentActive")(chat, wn, closePttComposer);
        const jr = r("useWAWebStableCallback")(function() {
            Se(null);
        });
        r("useWAWebClearQuotedMsgWhileAgentActive")(chat, wn, ve != null, jr);
        const KrRef = useRef(wn);
        useLayoutEffect(function() {
            const KrRef_current = KrRef.current;
            KrRef.current = wn;
            if (KrRef_current && !wn && (document.activeElement === document.body || stopSlot?.contains(document.activeElement) === true)) {
                fr();
            }
        }, [
            wn,
            fr,
            stopSlot
        ]);
        const onPttSend = function() {
            onSend?.();
            o("WAWebCmd").Cmd.chatMessageSent(chat);
        };
        const Xr = function(t) {
            if (!wn && t) {
                t.stopPropagation();
                const e = t.target.files == null ? [] : Array.from(t.target.files);
                if (e.length) {
                    An();
                    new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({
                        stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED
                    }).commit();
                    o("WAWebCmd").Cmd.attachMediaDrawer({
                        chat,
                        threadId,
                        attachments: e.map((e)=>({
                                file: e,
                                stickerMaker: true
                            })),
                        bot3pMediaInputAuthorized: o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(chat),
                        fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
                        sendAsSticker: true
                    });
                }
            }
        };
        const onSetNonJidMentions = function(t) {
            KtRef.current = (KtRef.current ?? 0) | t;
        };
        r("useWAWebComposeBoxActionListeners")(chat, {
            onFocus: fr,
            onPaste,
            onPasteFiles,
            onRoutedPaste,
            onSend: Ur,
            onToggleQuickReplies,
            onCtwaContextLinkData,
            onSendingLogAttributes,
            onSetTextContent,
            onSetNonJidMentions
        });
        const composerFontSize = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().composerFontSize;
        const groupMetadata = o("WAWebStateUtils").unproxy(chat).groupMetadata;
        const onPromptSelect = function(t) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "handlePromptSelect inside WAWebComposeBox"
            ])));
            let aiThreadInfo;
            if (threadId != null) {
                aiThreadInfo = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(chat, threadId);
            }
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(chat, t, {
                botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable() ? o("WAWebBotTypes").BotMsgBodyType.PROMPT : null,
                threadIds: threadId ? [
                    threadId
                ] : undefined,
                aiThreadInfo
            });
        };
        const to = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
            chat,
            questionType
        });
        const no = o("WAWebComposeBoxUtils").getComposeBoxAriaLabelText(chat);
        const Component = r("WAWebQuickReplyPickerPlugin");
        const Component_1 = r("WAWebRichTextInput.react");
        const ro = <Component_1 ref={en} onFocus={gr} onBlur={hr} onClick={Nr} placeholder={to} ariaLabel={no} ariaActiveDescendents={ariaActiveDescendents} textXstyle={composerFontSize} xstyle={w.richTextRefresh} testid="conversation-compose-box-input" editorName="compose-box" initialText={getCurrentComposeContent()?.text} readOnly={nn != null || wn} maxLength={o("WAWebComposeConstants").MAX_TXT_MSG_SIZE} maxVisibleLines={maxVisibleLines} minVisibleLines={1} spellCheck={Ie} enterIsNewLine={!De} multiline focusOnMount={!Xe_isKeyboardUser} tabOrder={o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_INPUT} onChange={function(t, n, r) {
            YtRef.current = t;
            Mr(t.parsableText, r?.has(o("WAWebLexicalUtils").TEXT_SEND_CLEAR_UPDATE_TAG) === true);
        }} onEnter={Ur} onFiles={onFiles} onTextPaste={onTextPaste} onMaxPasteExceeded={o("WAWebComposeBoxUtils").handleMaxPasteExceeded}>{C.jsx(r("WAWebRichTextInputPlugins.react"), {
            groupMetadata,
            transformTextEmoji,
            textFormatEnabled: true,
            spoilerEnabled: o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
            bulletPointsEnabled: true,
            numberedListEnabled: true,
            inlineCodeEnabled: true,
            blockQuoteEnabled: true,
            internLinksEnabled: true,
            phoneNumbersEnabled: false,
            linksEnabled: true,
            multilineQuotesEnabled: o("WAWebABProps").getABPropConfigValue("expanded_formatting_multiline_quotes"),
            textFormatShortcutsEnabled: true,
            floatingToolbarEnabled: true,
            highlightedBotCommands
        })}{C.jsx(r("WAWebEmojiPickerPlugin"), {})}{C.jsx(r("WAWebMentionPickerPlugin"), {
            chat: o("WAWebStateUtils").unproxy(chat),
            elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(chat),
            source: "chat-composer"
        })}{o("WAWebHatchGating").isHatchCommandsEnabled() && o("WAWebBotUtils").isHatchBot(chat.id) && C.jsx(r("WAWebHatchCommandPickerPlugin.react"), {
            chatId: chat.id
        })}{!wn && o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(chat) && richTextInputRef?.editor && <Component composerAnchorRef={OtRef} editor={richTextInputRef.editor} onPickerClose={function() {
            return dr(false);
        }} onQuickReplySelect={An} openedFromMenu={openedFromMenu}/>}</Component_1>;
        let oo;
        const ao = richTextInputRef?.editor;
        if (ao != null) {
            oo = <>{(o("WAWebBotBaseGating").isBizBot3pEnabled() && it || o("WAWebBotBaseGating").isBotEnabled() && pt) && C.jsx(o("WAWebBotCommandSuggestions.react").BotCommandSuggestions, {
                kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
                editor: ao,
                businessProfile: it && o("WAWebStateUtils").unproxy(it),
                metaBotId
            })}{r("gkx")("16539") && n("cr:5993") ? C.jsx(n("cr:5993"), {
                kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
                editor: ao
            }) : null}</>;
        }
        useImperativeHandle(t_ref, function() {
            return {
                discardPendingCoachingForAlternateSendFlow: An,
                flushSaveComposeContentDebounced,
                getCurrentComposeContent,
                updateTextAfterMediaDrawerClose: Er
            };
        }, [
            flushSaveComposeContentDebounced,
            getCurrentComposeContent,
            An,
            Er
        ]);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "start_ptt_recording", function() {
            if (!pttComposerActive && !wn) {
                An();
                startRecording();
            }
        });
        let io = null;
        if (bt) {
            const Component = r("WAWebBotSuggestions.react");
            io = <Component id={Z} onPromptSelect={onPromptSelect}/>;
        }
        const lo = {
            chat,
            pttComposerActive,
            isMessageToBot: ot(),
            getCurrentComposeContent,
            richTextInputRef,
            updateTextAfterMediaDrawerClose: Er,
            inputHotkeyRef: HtRef,
            handleTab,
            handleMetaUpDebounced,
            handleInputFocus,
            input: ro,
            expressionsPanelWrapperRef: CrRef,
            expressionsPanelPickerRef: yrRef,
            replaceInputSelection: or,
            handlePanelsSticker: $r,
            handlePanelsStickerFromStore,
            handlePanelsGif: Dr,
            hasTextState: Nt,
            handleSendText: Ur,
            onAlternateSendFlowStart: An,
            recordingSession: nn,
            startRecording,
            threadId,
            wwaiButton: <div ref={yn} className="x78zum5 xpvyfi4"/>,
            smartComposer: Pn ? {
                agentActive: wn,
                card: <div ref={Ln} data-testid="biz_ai_smart_composer_card_slot" className="x78zum5 xdt5ytf"/>,
                frame: C.jsx(r("WAWebBizAiSmartComposerAccentFrame.react"), {
                    isActive: wn
                }),
                modePill: <div ref={vn} data-testid="biz_ai_smart_composer_mode_pill_slot" className="x78zum5 xamitd3"/>,
                status: Mn ? <div ref={In} data-testid="biz_ai_smart_composer_status_slot" className="x78zum5 x6s0dn4 x1iyjqo2 xeuugli"/> : <div className="x78zum5 x6s0dn4 x1iyjqo2 xeuugli">{C.jsx(r("WAWebBizAiSmartComposerStatusPlaceholder.react"), {})}</div>,
                stop: <div ref={xn} data-testid="biz_ai_smart_composer_stop_slot" className="x78zum5 x6s0dn4"/>
            } : null
        };
        const so = r("useWAWebStableCallback")(function(e) {
            if (!wn) {
                o("WAWebReconnectUtil").reconnect();
                const n = M(YtRef.current.text);
                const a = YtRef.current.data;
                if (n.length !== 0) {
                    if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(chat, a.mentionedJidList)) {
                        o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(chat);
                        return;
                    }
                    An();
                    It();
                    const i = ve ?? X;
                    const l = Ae?.data;
                    const s = a.mentionedJidList || [];
                    const u = a.groupMentions || [];
                    const c = threadId != null ? {
                        threadIds: [
                            threadId
                        ],
                        aiThreadInfo: o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(chat, threadId)
                    } : {};
                    cn(null);
                    Mt(false);
                    Fe(null);
                    yrRef.current?.close();
                    o("WAWebScheduledMsgActionLogger").logScheduledMsgTapScheduleForChat(chat, {
                        scheduledTimestampS: e,
                        toScheduledCount: 1
                    });
                    const d = o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat({
                        chat,
                        options: babelHelpers.extends({
                            linkPreview: l,
                            quotedMsg: i,
                            mentionedJidList: s,
                            groupMentions: u,
                            quotedMsgAdminGroupJid,
                            quotedMsgAdminGroupSubject,
                            quotedMsgAdminParentGroupJid
                        }, c, {
                            maybeNonJidMentioned: KtRef.current != null && KtRef.current > 0
                        }),
                        scheduledTimestampS: e,
                        text: n
                    });
                    d.catch((e)=>{
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "sendScheduledTextMsgToChat failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("send-scheduled-msg");
                    });
                    Fn(n, d);
                    ztRef.current = false;
                    KtRef.current = null;
                    Se(null);
                    Re(null);
                    Le(null);
                    chat.setComposeContents({});
                    _r();
                }
            }
        });
        const onScheduleSend = o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMessagesAvailableForChat(chat) ? so : undefined;
        const co = o("WAWebComposeBoxPopupPanels.react").useComposePopupPanels(UtRef, {
            chat,
            linkPreviewData: Ae?.data,
            links,
            ctwaContextLinkData,
            ctwaContextData,
            restoreFocus: fr,
            selectedExpressionPanel: wn ? null : un,
            getComposeBlockWidth,
            onComposeHeightChange,
            omitLinkPreview,
            omitCtwa,
            onEmoji: or,
            onGif: Dr,
            onExpressionPanelChange,
            onSticker: $r,
            onExpressionPanelClose,
            showSpamPanel: W && Gn,
            onClickNotSpam,
            onClickDismissSpam,
            questionReplyQuotedMessage: O.questionReplyQuotedMessage,
            questionType
        });
        const { PopupPanels, hasTopPanels, hideComposer } = co;
        const fo = C.jsx(r("WAWebMessageComposer.react"), babelHelpers.extends({}, lo, {
            ref: OtRef,
            hasTopPanel: hasTopPanels,
            closePttComposer,
            onPttSend,
            questionType,
            questionReplyQuotedMessage: O.questionReplyQuotedMessage,
            threadId,
            onScheduleSend
        }));
        const Component_2 = r("WAWebVelocityTransitionGroup");
        const Component_3 = r("WAWebComposeBoxWWAIWrapperLoadable");
        const Component_4 = o("WAWebBizAiSmartComposerWrapperLoadable").WAWebBizAiSmartComposerWrapperLoadable;
        const Component_5 = r("WAWebCopyPasteCopyableArea.react");
        const Component_6 = r("WAWebFilePicker.react");
        const Component_7 = r("WAWebNewsletterWamoSubMessageTypePopup.react");
        const Component_8 = o("WAWebKeyboardHotKeys.react").HotKeys;
        const Component_9 = o("WAWebUimUie.react").UIE;
        const Component_10 = o("WAWebErrorBoundary.react").ErrorBoundary;
        return <Component_10 name="compose-box" type="fatal"><Component_9 displayName="ComposeBox" ref={BtRef} uimState={o("WAWebUim").UIMState.PASSIVE} requestFocus={Xe_isKeyboardUser ? null : fr}><Component_8 component="footer" tabIndex={null} handlers={{
            pagedown: Lr,
            pageup: Lr
        }} xstyle={[
            w.footer,
            bt && w.botSuggestions,
            Je && Ze_rightDrawerOpen && w.footerDarkThreePanel,
            w.footerRefresh,
            hideComposer && w.footerCollapsed
        ]} style={hideComposer ? {
            "--height-pane-footer": "0px"
        } : undefined} ref={WtRef}>{!hideComposer && io}<Component_5 canCut xstyle={[
            w.blockCompose,
            [
                w.blockComposeRefresh,
                o("WDSMargins.stylex").wdsMargins.marginHorAuto
            ],
            hideComposer && w.blockComposeCollapsed,
            false
        ]} ref={qtRef}>{!hideComposer && <div data-testid="compose-box" className="x1n2onr6 x98rzlu xh8yej3 xeuugli x1gg8mnh"><Component_2 transitionName="messageComposer">{fo}</Component_2><Component_3 chatId={Z.toString()} isBot={Z.isBot()} wordCount={wordCount} getComposeText={getComposeText} fabSlot={fabSlot} onAcceptSuggestion={onAcceptSuggestion} onWillOpenTray={onWillOpenTray}/>{Pn && <Component_4 cardSlot={cardSlot} chatId={Z} hasComposerText={Nt} areAiModesAvailable={areAiModesAvailable} onInsert={onInsert} pillSlot={pillSlot} statusSlot={statusSlot} stopSlot={stopSlot}/>}</div>}</Component_5>{PopupPanels}{!hideComposer && <><Component_6 ref={VtRef} mimes={o("WAWebMimeTypes").IMAGE_MIMES} onChange={Xr} multiple={false}/>{oo}{Pe != null && <Component_7 handleSelect={Pe.handleSelect} popupAnchorEl={Pe.popupAnchorEl} onDismiss={function() {
            return Ne(null);
        }}/>}</>}</Component_8></Component_9></Component_10>;
    }
    AComponent.displayName = `${AComponent.name} [from ${i.id}]`;
    const F = AComponent;
    function O(e) {
        const t = o("react-compiler-runtime").c(3);
        const { chat, handleFocus } = e;
        let a;
        if (t[0] !== chat.id) {
            a = chat.id.toString();
            t[0] = chat.id;
            t[1] = a;
        } else {
            a = t[1];
        }
        o("useWAWebListener").useListener(o("WAWebComposeBoxActions").ComposeBoxActions, `focus_${a}`, handleFocus);
        o("useWAWebListener").useListener(o("WAWebComposeBoxActions").ComposeBoxActions, "focus", handleFocus);
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = C.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "PlaceholderComposeBox"
            });
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.ComposeBox = F;
    l.PlaceholderComposeBox = O;
}, 226);