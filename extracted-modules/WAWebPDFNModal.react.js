__d("WAWebPDFNModal.react", [
    "WAWebEmptyState.react",
    "WAWebHttpErrors",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPDFNCommonUtils",
    "WAWebPDFNErrorModals.react",
    "WAWebPDFNLogging",
    "WAWebPDFNMetaModalLoadable",
    "WAWebPDFNTypes",
    "WAWebPDFNWhatsAppModal.react",
    "WAWebSetUserDisclosureStageAction",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeEvent",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebDisclosureShownTracking",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useRef, useState } = u;
    function _({ modalManagerType = "modal", noticeType = o("WAWebPDFNCommonUtils").PdfnNoticeType.Blocking, onAcceptError, onCancel, onLoadError, pdfnId, runIfTosAccepted, theme = o("WAWebPDFNCommonUtils").PdfnTheme.WhatsApp, verifyTosAccepted }) {
        const S = useState(verifyTosAccepted());
        const R = S[0];
        const L = S[1];
        const E = useState(!R);
        const k = E[0];
        const I = E[1];
        const T = useState();
        const pdfnNotice = T[0];
        const x = T[1];
        const $ = useState(false);
        const P = $[0];
        const N = $[1];
        const M = useState();
        const w = M[0];
        const A = M[1];
        const FRef = useRef(false);
        const ORef = useRef(false);
        const B = ()=>{
            if (modalManagerType === "support") {
                o("WAWebModalManager").ModalManager.closeSupportModal();
            } else {
                o("WAWebModalManager").ModalManager.close();
            }
        };
        const W = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = pdfnNotice?.privacyDisclosureModal?.primaryButton?.action === "OK" ? o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK : o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED;
                try {
                    FRef.current = true;
                    yield o("WAWebSetUserDisclosureStageAction").updateUserDisclosureStateAction(pdfnId, t, {
                        disclosureContentVersion: pdfnNotice?.policyVersion
                    });
                    L(true);
                } catch (e) {
                    onAcceptError?.();
                    if (noticeType === o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking) {
                        B();
                    }
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const q = useCallback(function(e) {
            ORef.current = true;
            A(e);
            N(true);
            onLoadError?.();
        }, [
            onLoadError
        ]);
        const U = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebPDFNLogging").logUserNoticeEvent({
                    noticeId: pdfnId,
                    noticeContentVersion: pdfnNotice?.policyVersion,
                    noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.PDFN_DISMISSED,
                    noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE.PDFN_DISCLOSURE
                });
                B();
                onCancel?.();
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, modalManagerType === "support" ? "close_support" : "close_modal", function() {
            if (!ORef.current) {
                if (noticeType === o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking) {
                    if (!FRef.current) {
                        W();
                    }
                    runIfTosAccepted();
                }
            }
        });
        useEffect(function() {
            if (!R) {
                const e = new AbortController;
                o("WAWebTos").TosManager.populateTosManagerNewsletterIds();
                const t = (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        try {
                            const t = yield o("WAWebUserDisclosureCollection").UserDisclosureCollection.find(pdfnId.toString());
                            if (e.signal.aborted) {
                                return;
                            }
                            if (t != null) {
                                x(t);
                            } else {
                                q(s.jsx(o("WAWebPDFNErrorModals.react").ServerErrorModal, {}));
                            }
                        } catch (error) {
                            q(error instanceof o("WAWebHttpErrors").HttpNetworkError ? s.jsx(o("WAWebPDFNErrorModals.react").InternetErrorModal, {}) : s.jsx(o("WAWebPDFNErrorModals.react").ServerErrorModal, {}));
                        } finally{
                            I(false);
                        }
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                })();
                t();
                return function() {
                    return e.abort();
                };
            }
        }, []);
        const V = r("useWAWebDisclosureShownTracking")({
            noticeId: pdfnId.toString(),
            disclosureContentVersion: pdfnNotice?.policyVersion,
            ready: pdfnNotice != null
        });
        if (!k && P) {
            return w;
        }
        if (k) {
            const Component = o("WAWebModal.react").Modal;
            return <Component>{s.jsx(o("WAWebEmptyState.react").Loading, {})}</Component>;
        }
        if (R) {
            B();
            runIfTosAccepted();
            return null;
        }
        const H = noticeType === o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking ? W : U;
        return <div ref={V}><F2Component pdfnNotice={pdfnNotice} handleCancel={function() {
            H();
        }} handleOk={function() {
            W();
        }} theme={theme}/></div>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function F2Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { handleCancel, handleOk, pdfnNotice, theme } = e;
        const u = theme === undefined ? o("WAWebPDFNCommonUtils").PdfnTheme.WhatsApp : theme;
        let c;
        if (t[0] !== handleCancel || t[1] !== handleOk || t[2] !== pdfnNotice || t[3] !== u) {
            const Component = o("WAWebPDFNMetaModalLoadable").WAWebPDFNMetaModalLoadable;
            c = u === o("WAWebPDFNCommonUtils").PdfnTheme.WhatsApp ? s.jsx(r("WAWebPDFNWhatsAppModal.react"), {
                pdfnNotice,
                handleCancel,
                handleOk
            }) : <Component pdfnNotice={pdfnNotice} onAccept={handleOk} onCancel={handleCancel}/>;
            t[0] = handleCancel;
            t[1] = handleOk;
            t[2] = pdfnNotice;
            t[3] = u;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    l.default = _;
}, 98);