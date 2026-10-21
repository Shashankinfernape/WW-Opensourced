__d("WAWebMediaDocumentUtils", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebCmd",
    "WAWebDocStateControls.react",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebFilenameManager",
    "WAWebFrontendMsgGetters",
    "WAWebHarmfulFileSenderRelationshipResolver",
    "WAWebHarmfulFileWarningGate",
    "WAWebHarmfulFileWarningModal.react",
    "WAWebHtmlViewerGatingUtils",
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebShowMediaNotReadableModal",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "cr:11804",
    "cr:7565",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebListener",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    const M = N || (N = o("react"));
    const w = N;
    const { useCallback, useEffect, useState } = w;
    const B = 100 * 1024 * 1024;
    const W = 100;
    function q(e) {
        const t = o("WAWebFilenameManager").getDefaultName(e);
        o("WAWebToastManager").ToastManager.open(M.jsx(o("WAWebToast.react").Toast, {
            msg: s._("\"{name}\" downloaded.", [
                s._param("name", t)
            ])
        }));
    }
    function U(e) {
        const t = o("WAWebFilenameManager").getDefaultName(e);
        o("WAWebToastManager").ToastManager.open(M.jsx(o("WAWebToast.react").Toast, {
            msg: s._("\"{name}\" opening.", [
                s._param("name", t)
            ])
        }));
    }
    function V(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    function useH(e) {
        const n = o("react-compiler-runtime").c(11);
        const r = useState(false);
        const a = r[0];
        const i = r[1];
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(e, l);
        const u = s[0];
        const c = o("useWAWebMediaDataValues").useOptionalMediaDataValues(u, [
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getFilehash
        ]) ?? [
            null,
            null
        ];
        const d = c[0];
        const m = c[1];
        let p;
        if (n[1] !== m || n[2] !== d) {
            p = function() {
                if (!(m == null || d !== o("WAWebMediaTypes").MediaDataStage.INIT)) {
                    o("WAWebMediaStore").LruMediaStore.has(m).then((e)=>i(e)).catch(G);
                }
            };
            n[1] = m;
            n[2] = d;
            n[3] = p;
        } else {
            p = n[3];
        }
        const _ = p;
        let f;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                "change:filehash",
                "change:mediaStage"
            ];
            n[4] = f;
        } else {
            f = n[4];
        }
        let g;
        if (n[5] !== _ || n[6] !== u?.mediaStage) {
            g = function() {
                if (u?.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT) {
                    i(null);
                }
                _();
            };
            n[5] = _;
            n[6] = u?.mediaStage;
            n[7] = g;
        } else {
            g = n[7];
        }
        o("useWAWebListener").useListener(u, f, g);
        let h;
        let y;
        if (n[8] !== _) {
            h = function() {
                _();
            };
            y = [
                _
            ];
            n[8] = _;
            n[9] = h;
            n[10] = y;
        } else {
            h = n[9];
            y = n[10];
        }
        useEffect(h, y);
        return a;
    }
    function G(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[useIsFileInCacheState] Failed to get file from cache"
        ]))).catching(r("getErrorSafe")(t));
    }
    function useZ(e) {
        const r = useState(null);
        const a = r[0];
        const i = r[1];
        const l = o("useWAWebMsgValues").useMsgValues(e, [
            o("WAWebFrontendMsgGetters").getMediaData
        ]);
        const s = l[0];
        const p = o("useWAWebMediaDataValues").useOptionalMediaDataValues(s, [
            o("WAWebMediaDataGetters").getFilehash
        ]) ?? [
            null
        ];
        const _ = p[0];
        const f = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (n("cr:7565") == null) {
                i(null);
                return;
            }
            if (s == null) {
                i(null);
                return;
            }
            if (_ == null) {
                i(null);
                return;
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[useIsFileSavedOnFileSystem] checking fs ",
                " hash=",
                ""
            ])), e.toString(), _);
            const t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t == null) {
                i(null);
                return;
            }
            try {
                const r = yield n("cr:7565").isMediaFileSaved(t);
                i(r);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[useIsFileSavedOnFileSystem] fs check error ",
                    ": ",
                    ""
                ])), e.toString(), error);
                i(null);
            }
        }), [
            s,
            e,
            _
        ]);
        o("useWAWebListener").useListener(s, "change:filehash", function() {
            f();
        });
        o("useWAWebListener").useListener(s, "mediaFileSavedOnFileSystem", function() {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[useIsFileSavedOnFileSystem] file saved event ",
                ""
            ])), e.toString());
            i(true);
        });
        o("useWAWebListener").useListener(s, "mediaFileSavingFailed", function() {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[useIsFileSavedOnFileSystem] file saving failed event ",
                ""
            ])), e.toString());
            i(false);
        });
        useEffect(function() {
            f();
        }, [
            f,
            e
        ]);
        return a;
    }
    function JComponent(e, t = {}) {
        const a = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
        const i = useH(e);
        const l = useZ(e);
        const u = o("useWAWebMsgValues").useMsgValues(e, [
            o("WAWebMsgGetters").getIsVcardOverMmsDocument,
            o("WAWebMsgGetters").getIsFailed,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getMediaData,
            o("WAWebMsgGetters").getT,
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getMimetype,
            o("WAWebMsgGetters").getVcardFormattedName,
            o("WAWebMsgGetters").getFilename,
            o("WAWebMsgGetters").getCaption,
            o("WAWebMsgGetters").getVcardList
        ]);
        const isVcardOverMmsDocument = u[0];
        const d = u[1];
        const outgoingMsg = u[2];
        const N = u[3];
        const t_1 = u[4];
        const A = u[5];
        const mimetype = u[6];
        const vcardFormattedName = u[7];
        const filename = u[8];
        const caption = u[9];
        const vcardList = u[10];
        const Q = o("useWAWebMediaDataValues").useMediaDataValues(N, [
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getFilename,
            o("WAWebMediaDataGetters").getSize,
            o("WAWebMediaDataGetters").getFilehash,
            o("WAWebMediaDataGetters").getLoadedSize,
            o("WAWebMediaDataGetters").getMimetype
        ]);
        const X = Q[0];
        const Y = Q[1];
        const J = Q[2];
        const Z = Q[3];
        const ee = Q[4];
        const te = Q[5];
        const ne = o("WAWebFilenameManager").getDefaultName({
            caption,
            filename,
            isVcardOverMmsDocument,
            mimetype,
            t: t_1,
            type: A,
            vcardFormattedName,
            vcardList
        });
        const re = function(n) {
            V(n);
            const t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t != null) {
                o("WAWebModalManager").ModalManager.open(M.jsx(r("WAWebMediaMissingModal.react"), {
                    msg: t
                }));
            }
        };
        const oe = function(n) {
            V(n);
            o("WAWebMsgCollection").MsgCollection.get(e)?.cancelDownload();
        };
        const ae = function(n) {
            V(n);
            o("WAWebMsgCollection").MsgCollection.get(e)?.cancelUpload();
        };
        const ie = function(n) {
            V(n);
            const t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t != null) {
                t.resumeUpload().catch((e)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resume document upload"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("document-resume-upload-failed");
                });
            }
        };
        const le = function(n) {
            V(n);
            const t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t != null) {
                t.resumeRemoteUpload().catch((e)=>{
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resume remote document upload"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("document-resume-remote-upload-failed");
                });
            }
        };
        const se = (()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(a) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMediaAsync] start ",
                    " stage=",
                    " size=",
                    ""
                ])), e.toString(), X, J || "unknown");
                V(a);
                const s = o("WAWebMsgCollection").MsgCollection.get(e);
                if (s != null) {
                    if (n("cr:7565") != null && l === true) {
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[downloadMediaAsync] file in fs ",
                            ""
                        ])), e.toString());
                    } else {
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[downloadMediaAsync] downloading ",
                            " expensive=",
                            ""
                        ])), e.toString(), J <= B);
                        try {
                            if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(te)) {
                                if (n("cr:11804") != null) {
                                    n("cr:11804").maybePreloadWebTPIframeForPDFs(undefined, {
                                        source: "pdfPreviewClick",
                                        force: true
                                    });
                                }
                            }
                            yield s.downloadMedia({
                                downloadEvenIfExpensive: J <= B,
                                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_CLICK,
                                isUserInitiated: true
                            });
                            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] Media download completed for msg ",
                                ""
                            ])), e.toString());
                        } catch (error) {
                            o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] Failed to download media for msg ",
                                ": ",
                                ""
                            ])), e.toString(), error);
                        }
                    }
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Processing mediaStage ",
                        " for msg ",
                        ""
                    ])), X, e.toString());
                    if (o("WAWebHarmfulFileWarningGate").shouldOpenHarmfulFileWarningModal(s)) {
                        const senderRelationship = o("WAWebHarmfulFileSenderRelationshipResolver").resolveHarmfulFileSenderRelationship(s);
                        const d = yield new (P || (P = n("Promise")))(function(e) {
                            const Component = r("WAWebHarmfulFileWarningModal.react");
                            o("WAWebModalManager").ModalManager.open(<Component learnMoreUrl={o("WAWebHarmfulFileWarningGate").getHarmfulFileLearnMoreUrl()} onCancel={function() {
                                o("WAWebModalManager").closeModalManager();
                                e(false);
                            }} onOpen={function() {
                                o("WAWebModalManager").closeModalManager();
                                e(true);
                            }} senderRelationship={senderRelationship}/>);
                        });
                        if (!d) {
                            return;
                        }
                        o("WAWebHarmfulFileWarningGate").markUserAcceptedHarmfulFileWarning(s);
                    }
                    if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(te)) {
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[downloadMediaAsync] opening WebTP PDF viewer ",
                            ""
                        ])), e.toString());
                        o("WAWebCmd").Cmd.mediaViewerModal({
                            msg: s,
                            getZoomNode: t.getZoomNode,
                            shouldShowAllMedia: false
                        });
                        return;
                    }
                    switch(X){
                        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                            if (isVcardOverMmsDocument !== true) {
                                if (t.forceDownload === true) {
                                    o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                        "[downloadMediaAsync] Force download for msg ",
                                        ""
                                    ])), e.toString());
                                    q(s);
                                    yield o("WAWebFileSaver").FileSaver.downloadAsync({
                                        msg: s
                                    });
                                    break;
                                }
                                const m = n("cr:7565") != null && (l === true || i === true);
                                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                    "[downloadMediaAsync] file check ",
                                    " canOpen=",
                                    ""
                                ])), e.toString(), m);
                                if (n("cr:7565") && m === true) {
                                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                                        "[downloadMediaAsync] Opening existing file for msg ",
                                        ""
                                    ])), e.toString());
                                    U(s);
                                    yield n("cr:7565").openMediaFile(s);
                                } else if (n("cr:7565") && m === false) {
                                    o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                                        "[downloadMediaAsync] saving to Windows fs ",
                                        ""
                                    ])), e.toString());
                                    q(s);
                                    yield n("cr:7565").saveMediaFile(s);
                                } else if (o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(te, e.remote)) {
                                    o("WAWebCmd").Cmd.mediaViewerModal({
                                        msg: s,
                                        getZoomNode: t.getZoomNode,
                                        shouldShowAllMedia: false
                                    });
                                } else {
                                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                        "[downloadMediaAsync] Using FileSaver to download for msg ",
                                        ""
                                    ])), e.toString());
                                    q(s);
                                    yield o("WAWebFileSaver").FileSaver.downloadAsync({
                                        msg: s
                                    });
                                }
                            }
                            break;
                        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                "[downloadMediaAsync] Media missing, showing modal for msg ",
                                ""
                            ])), e.toString());
                            re();
                            break;
                        case o("WAWebMediaTypes").MediaDataStage.INIT:
                            if (isVcardOverMmsDocument !== true && n("cr:7565") != null && l === true) {
                                o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                                    "[downloadMediaAsync] Opening existing file for msg ",
                                    ""
                                ])), e.toString());
                                U(s);
                                yield n("cr:7565").openMediaFile(s);
                            } else {
                                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                                    "[downloadMediaAsync] INIT state, awaiting download ",
                                    ""
                                ])), e.toString());
                            }
                            break;
                        default:
                    }
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadMediaAsync] Completed processing for msg ",
                        ""
                    ])), e.toString());
                }
            });
            return function(t) {
                return a.apply(this, arguments);
            };
        })();
        const ue = function(n) {
            se(n).catch((t)=>{
                o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[downloadMedia] Failed to download media for msg ",
                    ""
                ])), e.toString()).catching(r("getErrorSafe")(t));
            });
        };
        let ce = null;
        const de = {
            onClick: r("WAWebNoop")
        };
        const me = l === true || X === o("WAWebMediaTypes").MediaDataStage.RESOLVED || X === o("WAWebMediaTypes").MediaDataStage.INIT && (a ? i !== false : i === true);
        const pe = ()=>{
            if (t.forceDownload === true) {
                return s._("Download \"{name}\"", [
                    s._param("name", ne)
                ]);
            }
            if (me && r("WAWebEnvironment").isWindows) {
                return s._("Open \"{name}\"", [
                    s._param("name", ne)
                ]);
            }
            if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(te) || o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(te, e.remote)) {
                return s._("View \"{name}\"", [
                    s._param("name", ne)
                ]);
            }
            return s._("Download \"{name}\"", [
                s._param("name", ne)
            ]);
        };
        const Component = o("WAWebDocStateControls.react").Download;
        switch(X){
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
            case o("WAWebMediaTypes").MediaDataStage.INIT:
                de.onClick = ue;
                de.title = pe();
                ce = !me && !r("WAWebEnvironment").isWindows && !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(te) && !o("WAWebHtmlViewerGatingUtils").isHtmlViewerEnabledForMimeType(te, e.remote) ? <Component onClick={ue}/> : null;
                break;
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                ce = a ? M.jsx(o("WAWebDocStateControls.react").Pending, {
                    canCancel: false,
                    outgoingMsg,
                    value: W
                }) : M.jsx(o("WAWebDocStateControls.react").Pending, {
                    outgoingMsg
                });
                break;
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
                {
                    const _e = X === o("WAWebMediaTypes").MediaDataStage.FETCHING ? oe : ae;
                    const Component = o("WAWebDocStateControls.react").Pending;
                    ce = <Component canCancel onClick={_e} outgoingMsg={outgoingMsg} value={ee != null && J != null && J > 0 ? Math.ceil(ee / J * 100) : undefined}/>;
                    de.onClick = _e;
                    break;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                ce = M.jsx(o("WAWebDocStateControls.react").Upload, {});
                de.onClick = ie;
                break;
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                ce = M.jsx(o("WAWebDocStateControls.react").Upload, {});
                de.onClick = le;
                break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
                break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
                de.onClick = r("WAWebShowMediaNotReadableModal");
                break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                de.onClick = re;
                break;
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
                ce = d ? null : M.jsx(o("WAWebDocStateControls.react").Pending, {
                    outgoingMsg
                });
                break;
            default:
                ce = M.jsx(o("WAWebDocStateControls.react").Pending, {
                    outgoingMsg
                });
        }
        return [
            de,
            ce
        ];
    }
    l.displayDownloadingToast = q;
    l.displayFileOpeningToast = U;
    l.useIsFileInCacheState = useH;
    l.useIsFileSavedOnFileSystem = useZ;
    l.useMediaAction = JComponent;
}, 226);