__d("WAWebMediaDocumentBubbleActions.react", [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentUtils",
    "WAWebMediaTypes",
    "WAWebMessageBubbleActions.react",
    "WAWebMsgCollection",
    "WAWebNoop",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "cr:219",
    "cr:7565",
    "getErrorSafe",
    "react",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
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
    const P = $ || ($ = o("react"));
    function N(t) {
        let a;
        const t_msgKey = t.msgKey;
        const l = o("WAWebMediaDocumentUtils").useIsFileInCacheState(t_msgKey);
        const $ = o("WAWebMediaDocumentUtils").useIsFileSavedOnFileSystem(t_msgKey);
        const N = o("useWAWebMsgValues").useMsgValues(t_msgKey, [
            o("WAWebFrontendMsgGetters").getMediaData
        ]);
        const M = N[0];
        const w = o("useWAWebMediaDataValues").useMediaDataValues(M, [
            (a = o("WAWebMediaDataGetters")).getMediaStage,
            a.getFilehash,
            a.getFilename,
            a.getMimetype
        ]);
        const A = w[0];
        const F = w[1];
        const O = w[2];
        const B = w[3];
        const W = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMediaDocumentBubbleActions] handleViewButtonClick triggered for msg: ",
                ", filename: ",
                ""
            ])), t_msgKey.toString(), O || "null");
            const t = o("WAWebMsgCollection").MsgCollection.get(t_msgKey);
            if (t != null) {
                o("WAWebCmd").Cmd.mediaViewerModal({
                    msg: t,
                    shouldShowAllMedia: false
                });
            }
        };
        const q = function() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMediaDocumentBubbleActions] handleOpenButtonClick triggered for msg: ",
                ", filename: ",
                ""
            ])), t_msgKey.toString(), O || "null");
            if (n("cr:7565") == null) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] WindowsMediaFilesHelpers is null for handleOpenButtonClick, msg: ",
                    ""
                ])), t_msgKey.toString());
                return;
            }
            const e = o("WAWebMsgCollection").MsgCollection.get(t_msgKey);
            if (e != null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Displaying file opening toast and initiating file open for msg: ",
                    ""
                ])), t_msgKey.toString());
                o("WAWebMediaDocumentUtils").displayFileOpeningToast(e);
                n("cr:7565").openMediaFile(e).then(()=>{
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Successfully opened media file for msg: ",
                        ""
                    ])), t_msgKey.toString());
                }).catch((e)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Failed to open media file for msg ",
                        ""
                    ])), t_msgKey.toString()).catching(r("getErrorSafe")(e));
                });
            }
        };
        const U = function() {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMediaDocumentBubbleActions] handleSaveAsButtonClick triggered for msg: ",
                ", filename: ",
                ""
            ])), t_msgKey.toString(), O || "null");
            try {
                const e = o("WAWebMsgCollection").MsgCollection.get(t_msgKey);
                if (e == null || (n("cr:219") == null ? undefined : n("cr:219").trySaveAs(e)) === true) {
                    return;
                }
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Initiating FileSaver download for msg: ",
                    ""
                ])), t_msgKey.toString());
                o("WAWebFileSaver").FileSaver.initDownload(e);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Successfully initiated save as for msg: ",
                    ""
                ])), t_msgKey.toString());
            } catch (error) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Failed to initiate save as for msg ",
                    ""
                ])), t_msgKey.toString()).catching(r("getErrorSafe")(error));
            }
        };
        const V = function() {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMediaDocumentBubbleActions] handleDownloadButtonClick triggered for msg: ",
                ", filename: ",
                ""
            ])), t_msgKey.toString(), O || "null");
            if (n("cr:7565") == null) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] WindowsMediaFilesHelpers is null for handleDownloadButtonClick, msg: ",
                    ""
                ])), t_msgKey.toString());
                return;
            }
            const e = o("WAWebMsgCollection").MsgCollection.get(t_msgKey);
            if (e != null) {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Initiating file save for msg: ",
                    ""
                ])), t_msgKey.toString());
                n("cr:7565").saveMediaFile(e, true).then(()=>{
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Successfully downloaded/saved media file for msg: ",
                        ""
                    ])), t_msgKey.toString());
                    o("WAWebMediaDocumentUtils").displayDownloadingToast(e);
                }).catch((e)=>{
                    const t = r("getErrorSafe")(e);
                    if (t.name === o("WAAbortError").ABORT_ERROR) {
                        o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAWebMediaDocumentBubbleActions] Download cancelled by user for msg: ",
                            ""
                        ])), t_msgKey.toString());
                        return;
                    }
                    o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Failed to download/save media file for msg ",
                        ""
                    ])), t_msgKey.toString()).catching(t);
                    o("WAWebToastManager").ToastManager.open(P.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Couldn't download. Check your connection and try again.")
                    }));
                });
            }
        };
        const H = ()=>{
            if (r("WAWebEnvironment").isWindows) {
                if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(B)) {
                    if (A === o("WAWebMediaTypes").MediaDataStage.SENDING || A === o("WAWebMediaTypes").MediaDataStage.UPLOADING) {
                        o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAWebMediaDocumentBubbleActions] Returning Uploading action for PDF msg: ",
                            " (stage: ",
                            ")"
                        ])), t_msgKey.toString(), A);
                        return [
                            {
                                label: s._("Uploading..."),
                                onClick: r("WAWebNoop"),
                                disabled: true
                            }
                        ];
                    }
                    o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Returning View/Save As actions for PDF msg: ",
                        " (WebTP viewer enabled)"
                    ])), t_msgKey.toString());
                    return [
                        {
                            label: s._("View"),
                            onClick: W
                        },
                        {
                            label: s._("Save as..."),
                            onClick: U
                        }
                    ];
                }
                if ($ === true || A === o("WAWebMediaTypes").MediaDataStage.RESOLVED || A === o("WAWebMediaTypes").MediaDataStage.INIT && l === true) {
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Returning Open/Save As actions for msg: ",
                        " (file resolved or cached)"
                    ])), t_msgKey.toString());
                    return [
                        {
                            label: s._("Open"),
                            onClick: q
                        },
                        {
                            label: s._("Save as..."),
                            onClick: U
                        }
                    ];
                }
                if (A === o("WAWebMediaTypes").MediaDataStage.DECRYPTING || A === o("WAWebMediaTypes").MediaDataStage.FETCHING) {
                    o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Returning Downloading action for msg: ",
                        " (stage: ",
                        ")"
                    ])), t_msgKey.toString(), A);
                    return [
                        {
                            label: s._("Downloading..."),
                            onClick: r("WAWebNoop"),
                            disabled: true
                        }
                    ];
                }
                if (A === o("WAWebMediaTypes").MediaDataStage.SENDING || A === o("WAWebMediaTypes").MediaDataStage.UPLOADING) {
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Returning Uploading action for msg: ",
                        " (stage: ",
                        ")"
                    ])), t_msgKey.toString(), A);
                    return [
                        {
                            label: s._("Uploading..."),
                            onClick: r("WAWebNoop"),
                            disabled: true
                        }
                    ];
                }
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Returning Download action for msg: ",
                    " (default case, stage: ",
                    ")"
                ])), t_msgKey.toString(), A);
                return [
                    {
                        label: s._("Download"),
                        onClick: V
                    }
                ];
            }
            return [];
        };
        if (!r("WAWebEnvironment").isWindows || n("cr:7565") == null) {
            return null;
        }
        const G = H();
        o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
            "[WAWebMediaDocumentBubbleActions] Rendering BubbleActions component for msg: ",
            " with ",
            " action(s)"
        ])), t_msgKey.toString(), G.length);
        return P.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: G,
            theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.MEDIA_DOCUMENT
        });
    }
    N.displayName = `${N.name} [from ${i.id}]`;
    l.default = N;
}, 226);