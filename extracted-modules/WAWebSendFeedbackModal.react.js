__d("WAWebSendFeedbackModal.react", [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebBugReportSessionWamEvent",
    "WAWebClickableLink.react",
    "WAWebClientServerJoinKeyGenerator",
    "WAWebConfirmPopup.react",
    "WAWebContactFormWrapper.react",
    "WAWebCrashlog",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebLoggerDebugInfo",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebScreenshotUpload.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportBugReportSubmitMutation",
    "WAWebText.react",
    "WAWebTextLineClamp.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumBugReportFlowAction",
    "WAWebWamEnumSupportAiEventType",
    "WDSIllustrationWdsPictoSuccessCelebrationTick.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useRef, useState } = d;
    const maxLength = 5000;
    const g = 10;
    const h = {
        feedbackField: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderBottomWidth: "xv7zg05",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "xhl97hz x1vtqnfi",
            $$css: true
        },
        buttonGroup: {
            marginTop: "x1sy10c2",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        }
    };
    const y = n("$InternalEnum").Mirrored([
        "FORM",
        "SUCCESS"
    ]);
    const C = {
        titleContainer: {
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    function useB(bugReportingEntryPoint, clientServerJoinKey) {
        const n = o("react-compiler-runtime").c(4);
        let r;
        let a;
        if (n[0] !== bugReportingEntryPoint || n[1] !== clientServerJoinKey) {
            r = function() {
                new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                    bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.BUG_REPORT_FORM_IMPRESSION,
                    bugReportingEntryPoint,
                    clientServerJoinKey
                }).commit();
            };
            a = [
                bugReportingEntryPoint,
                clientServerJoinKey
            ];
            n[0] = bugReportingEntryPoint;
            n[1] = clientServerJoinKey;
            n[2] = r;
            n[3] = a;
        } else {
            r = n[2];
            a = n[3];
        }
        useEffect(r, a);
    }
    function V8Component({ bugReportingEntryPoint, clientServerJoinKey, onCancel, onComplete, onSubmit }) {
        useB(bugReportingEntryPoint, clientServerJoinKey);
        const y = useState("");
        const C = y[0];
        const v = y[1];
        const S = useState({
            state: "none",
            mediaFiles: []
        });
        const mediaState = S[0];
        const onChangeState = S[1];
        const E = useState(false);
        const k = E[0];
        const onUploadStateChange = E[1];
        const $ = useState(false);
        const P = $[0];
        const N = $[1];
        const M = useState(false);
        const w = M[0];
        const A = M[1];
        const F = useState(false);
        const O = F[0];
        const B = F[1];
        const WRef = useRef(null);
        useEffect(function() {
            if (w) {
                new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                    bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.ERROR_VIEW_IMPRESSION,
                    bugReportingEntryPoint,
                    clientServerJoinKey
                }).commit();
                o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Submission error occurred. Please try again.")
                }));
            }
        }, [
            bugReportingEntryPoint,
            clientServerJoinKey,
            w
        ]);
        const q = s._("Send feedback");
        const U = function({ text }) {
            v(text);
            B(j(text));
        };
        const V = (t)=>{
            const e = new Uint8Array(t);
            return btoa(String.fromCharCode(...Array.from(e)));
        };
        const H = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                    bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMIT_CLICK,
                    bugReportMediaCount: mediaState.mediaFiles.length,
                    bugReportingEntryPoint,
                    clientServerJoinKey
                }).commit();
                try {
                    N(true);
                    A(false);
                    const debug_info_json = JSON.stringify((yield o("WAWebLoggerDebugInfo").getDebugInfo({
                        supportTag: "FeedbackSubmission",
                        convertFields: true,
                        addUserAgentDetails: true
                    })), null, 2);
                    const device_log_handle = yield o("WAWebCrashlog").upload({
                        reason: o("WAWebCrashlog").USER_REPORT,
                        immediate: false,
                        isHighPri: true,
                        logType: o("WAWebCrashlog").LogType.SUPPORT
                    });
                    new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                        bugReportFlowAction: device_log_handle != null ? o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_SUCCESSFUL : o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.DEVICE_LOG_UPLOAD_FAILED,
                        bugReportingEntryPoint,
                        clientServerJoinKey
                    }).commit();
                    const l = yield o("WAWebSupportBugReportSubmitMutation").submitBugReportGraphQL({
                        description: C,
                        debug_info_json,
                        device_log_handle,
                        title: "User Feedback",
                        category: null,
                        client_server_join_key: clientServerJoinKey,
                        media: mediaState.mediaFiles.map((e)=>({
                                cipher_key: V(e.encKey),
                                element_value: e.url,
                                iv: V(e.iv),
                                type: e.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO ? "VIDEO" : "IMAGE",
                                file_name: e.filename
                            }))
                    });
                    if (l.success === true) {
                        new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                            bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_SUCCESSFUL,
                            bugReportMediaCount: mediaState.mediaFiles.length,
                            bugReportingEntryPoint,
                            clientServerJoinKey
                        }).commit();
                        onSubmit?.(C);
                        onComplete();
                    } else {
                        new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                            bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
                            bugReportMediaCount: mediaState.mediaFiles.length,
                            bugReportErrorMessage: l.error_message ?? "unknown",
                            bugReportingEntryPoint,
                            clientServerJoinKey
                        }).commit();
                        A(true);
                        N(false);
                    }
                } catch (error) {
                    const c = r("getErrorSafe")(error);
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "feedback submission failed: ",
                        ""
                    ])), error).catching(c).sendLogs("feedback-fail");
                    new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                        bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUBMISSION_FAILED,
                        bugReportMediaCount: mediaState.mediaFiles.length,
                        bugReportErrorMessage: c.message || JSON.stringify(c),
                        bugReportingEntryPoint,
                        clientServerJoinKey
                    }).commit();
                    A(true);
                    N(false);
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const G = function() {
            new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.CANCEL_CLICK,
                bugReportingEntryPoint,
                clientServerJoinKey
            }).commit();
            onCancel?.();
            o("WAWebModalManager").ModalManager.close();
        };
        const z = s._("Describe the technical issue or suggestion...");
        var j = (text)=>{
            if (text == null) {
                return false;
            }
            return text.trim().length >= g;
        };
        const Component = r("WAWebClickableLink.react");
        const Component_1 = r("WAWebClickableLink.react");
        const Component_2 = o("WAWebText.react").WAWebTextSmall;
        const Component_3 = o("WAWebRichTextField.react").RichTextField;
        const Component_4 = o("WAWebScreenshotUpload.react").WAWebScreenshotUpload;
        const Component_5 = o("WAWebFlex.react").FlexItem;
        const Component_6 = r("WAWebClickableLink.react");
        const Component_7 = o("WAWebText.react").WAWebTextSmall;
        const Component_8 = o("WAWebFlex.react").FlexColumn;
        const Component_9 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_9 title={q} okText={s._("Send")} onOK={H} onCancel={G} okDisabled={!O || P || k} okSpinner={P} buttonGroupStyle={h.buttonGroup} testid="send-feedback-modal" tsNavigationData={{
            surface: "unknown",
            viewName: "send-feedback"
        }}><Component_8 align="stretch"><Component_2 marginBottom={20}>{s._("For other issues like spam or scams, you can get help from the {help_center_link}, or {contact_us_link}.", [
            s._param("help_center_link", <Component onClick={T}>{s._("Help Centre")}</Component>),
            s._param("contact_us_link", <Component_1 onClick={D}>{s._("contact us")}</Component_1>)
        ])}</Component_2><Component_3 testid="send-feedback-modal-input" maxLength={maxLength} onChange={U} inputPlaceholder={z} ariaLabel={z} ref={WRef} value={C} minVisibleLines={3} maxVisibleLines={7} multiline enterIsNewLine hideSpacer hideFloatingLabel theme="gray-background" containerXstyle={h.feedbackField} contextMsg={O ? null : s._("Describe with at least {FEEDBACK_MIN_DESC_LENGTH} characters", [
            s._param("FEEDBACK_MIN_DESC_LENGTH", g)
        ])}/><Component_5 marginBottom={16}><Component_4 mediaState={mediaState} onChangeState={onChangeState} onUploadStateChange={onUploadStateChange}/></Component_5><Component_7>{s._("By sending, you allow WhatsApp to review related technical info to help address your feedback.")} <Component_6 onClick={x}>{s._("Learn more")}</Component_6></Component_7></Component_8></Component_9>;
    }
    V8Component.displayName = `${V8Component.name} [from ${i.id}]`;
    function useS(bugReportingEntryPoint, clientServerJoinKey) {
        const n = o("react-compiler-runtime").c(4);
        let r;
        let a;
        if (n[0] !== bugReportingEntryPoint || n[1] !== clientServerJoinKey) {
            r = function() {
                new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({
                    bugReportFlowAction: o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.SUCCESS_VIEW_IMPRESSION,
                    bugReportingEntryPoint,
                    clientServerJoinKey
                }).commit();
            };
            a = [
                bugReportingEntryPoint,
                clientServerJoinKey
            ];
            n[0] = bugReportingEntryPoint;
            n[1] = clientServerJoinKey;
            n[2] = r;
            n[3] = a;
        } else {
            r = n[2];
            a = n[3];
        }
        useEffect(r, a);
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(10);
        const { bugReportingEntryPoint, clientServerJoinKey, onCancel } = e;
        useS(bugReportingEntryPoint, clientServerJoinKey);
        let l;
        if (t[0] !== onCancel) {
            l = function() {
                onCancel();
            };
            t[0] = onCancel;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        let d;
        let m;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                surface: "unknown",
                viewName: "send-feedback"
            };
            m = s._("Done");
            t[2] = d;
            t[3] = m;
        } else {
            d = t[2];
            m = t[3];
        }
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            p = <Component marginBottom={16} align="center" justify="center">{c.jsx(r("WDSIllustrationWdsPictoSuccessCelebrationTick.react"), {
                testid: "wds-picto-sucess-celebration-tick"
            })}</Component>;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = r("WAWebTextLineClamp.react");
            const Component_2 = o("WAWebFlex.react").FlexItem;
            _ = <Component_2 marginBottom={24} xstyle={C.titleContainer}><Component_1 maxLines={3}><Component type="Headline1" colorName="contentDefault" textAlign="center">{s._("Thanks for your feedback")}</Component></Component_1></Component_2>;
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexItem;
            f = <Component_1 testid="feedback-success-text" marginBottom={16}><Component type="Body2" colorName="contentDeemphasized" textAlign="center">{s._("It helps make WhatsApp better for everyone. While we don't share updates on your feedback, it tells us what to improve next.")}</Component></Component_1>;
            t[6] = f;
        } else {
            f = t[6];
        }
        let g;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebClickableLink.react");
            const Component_1 = r("WAWebClickableLink.react");
            const Component_2 = r("WDSText.react");
            const Component_3 = o("WAWebFlex.react").FlexItem;
            const Component_4 = o("WAWebFlex.react").FlexColumn;
            g = <Component_4 align="center">{p}{_}{f}<Component_3 testid="feedback-success-help-text"><Component_2 type="Body2" colorName="contentDeemphasized" textAlign="center">{s._("Need more help? Visit the {help_center_link} or {contact_us_link}", [
                s._param("help_center_link", <Component onClick={E}>Help Center</Component>),
                s._param("contact_us_link", <Component_1 onClick={L}>contact us</Component_1>)
            ])}</Component_2></Component_3></Component_4>;
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== u) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            h = <Component testid="send-feedback-success-modal" tsNavigationData={d} okText={m} onOK={u}>{g}</Component>;
            t[8] = u;
            t[9] = h;
        } else {
            h = t[9];
        }
        return h;
    }
    function L() {
        if (o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED
            }).commit();
        }
        o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebContactFormWrapper.react"), {}));
    }
    function E() {
        o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/");
    }
    function k(e) {
        const t = o("react-compiler-runtime").c(12);
        const { bugReportingEntryPoint, onCancel, onSubmit } = e;
        const i = useState(y.FORM);
        const l = i[0];
        const s = i[1];
        const u = useState(I);
        const clientServerJoinKey = u[0];
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = function() {
                s(y.SUCCESS);
            };
            t[0] = m;
        } else {
            m = t[0];
        }
        const onComplete = m;
        let f;
        if (t[1] !== onCancel) {
            f = function() {
                onCancel?.();
                o("WAWebModalManager").ModalManager.close();
            };
            t[1] = onCancel;
            t[2] = f;
        } else {
            f = t[2];
        }
        const g = f;
        if (l === y.FORM) {
            let h;
            if (t[3] !== bugReportingEntryPoint || t[4] !== clientServerJoinKey || t[5] !== g || t[6] !== onSubmit) {
                h = <V8Component bugReportingEntryPoint={bugReportingEntryPoint} clientServerJoinKey={clientServerJoinKey} onCancel={g} onComplete={onComplete} onSubmit={onSubmit}/>;
                t[3] = bugReportingEntryPoint;
                t[4] = clientServerJoinKey;
                t[5] = g;
                t[6] = onSubmit;
                t[7] = h;
            } else {
                h = t[7];
            }
            return h;
        }
        if (l === y.SUCCESS) {
            let C;
            if (t[8] !== bugReportingEntryPoint || t[9] !== clientServerJoinKey || t[10] !== g) {
                C = <R bugReportingEntryPoint={bugReportingEntryPoint} clientServerJoinKey={clientServerJoinKey} onCancel={g}/>;
                t[8] = bugReportingEntryPoint;
                t[9] = clientServerJoinKey;
                t[10] = g;
                t[11] = C;
            } else {
                C = t[11];
            }
            return C;
        }
        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${l}`);
    }
    function I() {
        return o("WAWebClientServerJoinKeyGenerator").generateClientServerJoinKey();
    }
    function T() {
        o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/");
    }
    function D() {
        if (o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED
            }).commit();
        }
        o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebContactFormWrapper.react"), {}));
    }
    function x() {
        o("WAWebExternalLink.react").openExternalLink("https://faq.whatsapp.com/1040401477781770");
    }
    l.default = k;
}, 226);