__d("WAWebMessageViewOnce.react", [
    "fbt",
    "WALogger",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDataGetters",
    "WAWebMediaTypes",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMessageViewOncePendingCancel",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebText.react",
    "WAWebViewOnceDownloadIcon.react",
    "WAWebViewOnceState",
    "WAWebViewOnceSunset.react",
    "WDSButton.react",
    "WDSIconIcUpload.react",
    "WDSIconWdsIcEphemeral.react",
    "WDSIconWdsIcViewOnce.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useImperativeHandle, useMemo } = p;
    const g = 170;
    const h = 4;
    const y = 24;
    const C = {
        statusIcon: {
            color: "xhslqc4",
            height: "xxk0z11",
            $$css: true
        },
        statusDone: {
            color: "x18cpw0e",
            $$css: true
        },
        accentIconSvg: {
            color: "x1v5yvga",
            $$css: true
        },
        nonSpinnerIcon: {
            display: "x1rg5ohu",
            minWidth: "xnei2rj",
            marginTop: "xdj266r",
            marginInlineEnd: "x7g7pl8",
            marginBottom: "xat24cr",
            marginInlineStart: "x3n7f7h",
            $$css: true
        },
        nonSpinnerIconSvg: {
            width: "xvy4d1p",
            height: "xxk0z11",
            $$css: true
        },
        labelContainer: {
            minWidth: "xek95gm",
            $$css: true
        },
        labelText: {
            userSelect: "x87ps6o",
            $$css: true
        },
        labelActive: {
            color: "xhslqc4",
            $$css: true
        },
        labelInactive: {
            fontStyle: "x1k4tb9n",
            color: "xhslqc4",
            $$css: true
        },
        labelRetry: {
            fontWeight: "xk50ysn",
            color: "xhslqc4",
            $$css: true
        },
        dialogTitle: {
            marginBottom: "xefnzgg",
            $$css: true
        }
    };
    function b(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    function VComponent(t, msgKey) {
        const a = o("react-compiler-runtime").c(73);
        let i;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getType,
                l.getAck,
                l.getT,
                l.getIsSentByMe
            ];
            a[0] = i;
        } else {
            i = a[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const c = u[0];
        const d = u[1];
        const p = u[2];
        const _ = u[3];
        let f;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebMediaDataGetters").getMediaStage
            ];
            a[1] = f;
        } else {
            f = a[1];
        }
        const g = o("useWAWebMediaDataValues").useMediaDataValues(t, f);
        const h = g[0];
        let v;
        e: {
            const L = c === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE;
            let E;
            t: switch(c){
                case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
                    {
                        let k;
                        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
                            k = s._("Photo");
                            a[2] = k;
                        } else {
                            k = a[2];
                        }
                        E = k;
                        break t;
                    }
                case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
                    {
                        let I;
                        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
                            I = s._("Video");
                            a[3] = I;
                        } else {
                            I = a[3];
                        }
                        E = I;
                        break t;
                    }
                case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
                    {
                        let T;
                        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
                            T = s._("Voice message");
                            a[4] = T;
                        } else {
                            T = a[4];
                        }
                        E = T;
                    }
            }
            if (o("WAWebViewOnceState").isViewedFor(d)) {
                let D;
                if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
                    D = {
                        type: "complete",
                        icon: m.jsx(r("WDSIconWdsIcEphemeral.react"), {
                            width: y,
                            height: y,
                            xstyle: C.nonSpinnerIcon,
                            iconXstyle: C.nonSpinnerIconSvg
                        }),
                        label: s._("Opened"),
                        labelStyle: C.labelInactive
                    };
                    a[5] = D;
                } else {
                    D = a[5];
                }
                v = D;
                break e;
            } else if (o("WAWebViewOnceState").isExpiredFor(d, p) && !_) {
                let x;
                if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
                    x = m.jsx(r("WDSIconWdsIcViewOnce.react"), {
                        xstyle: C.nonSpinnerIcon,
                        iconXstyle: [
                            C.accentIconSvg,
                            C.nonSpinnerIconSvg
                        ]
                    });
                    a[6] = x;
                } else {
                    x = a[6];
                }
                let $;
                if (a[7] !== L || a[8] !== msgKey) {
                    $ = function() {
                        const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                        if (e != null) {
                            const t = o("WAWebFrontendContactGetters").getDisplayName(o("WAWebFrontendMsgGetters").getSenderObj(e));
                            const r = L ? s._("Photo expired") : s._("Video expired");
                            const a = L ? s._("This view once photo has expired. Please ask {name} to re-send it.", [
                                s._param("name", t)
                            ]) : s._("This view once video has expired. Please ask {name} to re-send it.", [
                                s._param("name", t)
                            ]);
                            const Component = o("WAWebText.react").WAWebTextLarge;
                            const Component_1 = o("WAWebText.react").WAWebTextMuted;
                            const Component_2 = o("WAWebFlex.react").FlexColumn;
                            const Component_3 = o("WAWebConfirmPopup.react").ConfirmPopup;
                            o("WAWebModalManager").ModalManager.open(<Component_3 tsNavigationData={{
                                surface: "unknown",
                                viewName: "view-once"
                            }} onOK={o("WAWebModalManager").closeModalManager}><Component_2><Component xstyle={C.dialogTitle}>{r}</Component><Component_1>{a}</Component_1></Component_2></Component_3>);
                        }
                    };
                    a[7] = L;
                    a[8] = msgKey;
                    a[9] = $;
                } else {
                    $ = a[9];
                }
                let P;
                if (a[10] !== E || a[11] !== $) {
                    P = {
                        type: "unviewed",
                        icon: x,
                        handleClick: $,
                        label: E
                    };
                    a[10] = E;
                    a[11] = $;
                    a[12] = P;
                } else {
                    P = a[12];
                }
                v = P;
                break e;
            }
            switch(h){
                case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
                    {
                        if (_) {
                            let N;
                            if (a[13] === Symbol.for("react.memo_cache_sentinel")) {
                                N = m.jsx(r("WDSIconWdsIcViewOnce.react"), {
                                    xstyle: C.nonSpinnerIcon,
                                    iconXstyle: C.nonSpinnerIconSvg
                                });
                                a[13] = N;
                            } else {
                                N = a[13];
                            }
                            let M;
                            if (a[14] !== E) {
                                M = {
                                    type: "complete",
                                    icon: N,
                                    label: E,
                                    labelStyle: C.labelActive
                                };
                                a[14] = E;
                                a[15] = M;
                            } else {
                                M = a[15];
                            }
                            v = M;
                            break e;
                        }
                        let w;
                        if (a[16] !== msgKey) {
                            w = function() {
                                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                                if (e != null) {
                                    o("WAWebCmd").Cmd.mediaViewerModal({
                                        msg: e
                                    });
                                }
                            };
                            a[16] = msgKey;
                            a[17] = w;
                        } else {
                            w = a[17];
                        }
                        const A = w;
                        let F;
                        if (a[18] === Symbol.for("react.memo_cache_sentinel")) {
                            F = m.jsx(r("WDSIconWdsIcViewOnce.react"), {
                                xstyle: C.nonSpinnerIcon,
                                iconXstyle: [
                                    C.accentIconSvg,
                                    C.nonSpinnerIconSvg
                                ]
                            });
                            a[18] = F;
                        } else {
                            F = a[18];
                        }
                        let O;
                        if (a[19] !== A || a[20] !== E) {
                            O = {
                                type: "unviewed",
                                icon: F,
                                handleClick: A,
                                label: E
                            };
                            a[19] = A;
                            a[20] = E;
                            a[21] = O;
                        } else {
                            O = a[21];
                        }
                        v = O;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.FETCHING:
                    {
                        if (_) {
                            let B;
                            if (a[22] === Symbol.for("react.memo_cache_sentinel")) {
                                B = m.jsx(r("WDSIconWdsIcViewOnce.react"), {
                                    xstyle: C.nonSpinnerIcon,
                                    iconXstyle: C.nonSpinnerIconSvg
                                });
                                a[22] = B;
                            } else {
                                B = a[22];
                            }
                            let W;
                            if (a[23] !== E) {
                                W = {
                                    type: "complete",
                                    icon: B,
                                    label: E,
                                    labelStyle: C.labelActive
                                };
                                a[23] = E;
                                a[24] = W;
                            } else {
                                W = a[24];
                            }
                            v = W;
                            break e;
                        }
                        let q;
                        if (a[25] !== msgKey) {
                            q = function(t) {
                                b(t);
                                o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelDownload();
                            };
                            a[25] = msgKey;
                            a[26] = q;
                        } else {
                            q = a[26];
                        }
                        const U = q;
                        let V;
                        if (a[27] === Symbol.for("react.memo_cache_sentinel")) {
                            V = m.jsx(r("WAWebMessageViewOncePendingCancel"), {});
                            a[27] = V;
                        } else {
                            V = a[27];
                        }
                        let H;
                        if (a[28] !== U || a[29] !== E) {
                            H = {
                                type: "unviewed",
                                icon: V,
                                handleClick: U,
                                label: E
                            };
                            a[28] = U;
                            a[29] = E;
                            a[30] = H;
                        } else {
                            H = a[30];
                        }
                        v = H;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                    {
                        let G;
                        if (a[31] !== msgKey) {
                            G = function(t) {
                                b(t);
                                o("WAWebMsgCollection").MsgCollection.get(msgKey)?.forceDownloadMediaEvenIfExpensive();
                            };
                            a[31] = msgKey;
                            a[32] = G;
                        } else {
                            G = a[32];
                        }
                        const z = G;
                        let j;
                        if (a[33] === Symbol.for("react.memo_cache_sentinel")) {
                            j = m.jsx(o("WAWebViewOnceDownloadIcon.react").ViewOnceDownloadIcon, {
                                xstyle: C.nonSpinnerIcon,
                                iconXstyle: [
                                    C.accentIconSvg,
                                    C.nonSpinnerIconSvg
                                ]
                            });
                            a[33] = j;
                        } else {
                            j = a[33];
                        }
                        let K;
                        if (a[34] !== z || a[35] !== E) {
                            K = {
                                type: "unviewed",
                                icon: j,
                                handleClick: z,
                                label: E
                            };
                            a[34] = z;
                            a[35] = E;
                            a[36] = K;
                        } else {
                            K = a[36];
                        }
                        v = K;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
                case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
                    {
                        let Q;
                        if (a[37] !== msgKey) {
                            Q = function(t) {
                                b(t);
                                o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelUpload();
                            };
                            a[37] = msgKey;
                            a[38] = Q;
                        } else {
                            Q = a[38];
                        }
                        const X = Q;
                        let Y;
                        if (a[39] !== X) {
                            const Component = r("WAWebMessageViewOncePendingCancel");
                            Y = <Component onClick={X}/>;
                            a[39] = X;
                            a[40] = Y;
                        } else {
                            Y = a[40];
                        }
                        let J;
                        if (a[41] !== E || a[42] !== Y) {
                            J = {
                                type: "complete",
                                icon: Y,
                                label: E,
                                labelStyle: C.labelActive
                            };
                            a[41] = E;
                            a[42] = Y;
                            a[43] = J;
                        } else {
                            J = a[43];
                        }
                        v = J;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                    {
                        let Z;
                        if (a[44] !== msgKey) {
                            Z = function(t) {
                                b(t);
                                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                                if (e != null) {
                                    e.resumeUpload().catch(R);
                                }
                            };
                            a[44] = msgKey;
                            a[45] = Z;
                        } else {
                            Z = a[45];
                        }
                        const ee = Z;
                        let te;
                        if (a[46] === Symbol.for("react.memo_cache_sentinel")) {
                            te = s._("Retry");
                            a[46] = te;
                        } else {
                            te = a[46];
                        }
                        let ne;
                        if (a[47] !== ee) {
                            const Component = r("WDSButton.react");
                            ne = <Component xstyle={C.nonSpinnerIcon} Icon={r("WDSIconIcUpload.react")} onPress={ee} variant="borderless" aria-label={te}/>;
                            a[47] = ee;
                            a[48] = ne;
                        } else {
                            ne = a[48];
                        }
                        let re;
                        if (a[49] === Symbol.for("react.memo_cache_sentinel")) {
                            re = s._("Retry");
                            a[49] = re;
                        } else {
                            re = a[49];
                        }
                        let oe;
                        if (a[50] !== ne) {
                            oe = {
                                type: "complete",
                                icon: ne,
                                label: re,
                                labelStyle: C.labelRetry
                            };
                            a[50] = ne;
                            a[51] = oe;
                        } else {
                            oe = a[51];
                        }
                        v = oe;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                    {
                        let ae;
                        if (a[52] !== msgKey) {
                            ae = function(t) {
                                b(t);
                                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                                if (e != null) {
                                    e.resumeRemoteUpload().catch(S);
                                }
                            };
                            a[52] = msgKey;
                            a[53] = ae;
                        } else {
                            ae = a[53];
                        }
                        const ie = ae;
                        let le;
                        if (a[54] === Symbol.for("react.memo_cache_sentinel")) {
                            le = s._("Retry");
                            a[54] = le;
                        } else {
                            le = a[54];
                        }
                        let se;
                        if (a[55] !== ie) {
                            const Component = r("WDSButton.react");
                            se = <Component xstyle={C.nonSpinnerIcon} Icon={r("WDSIconIcUpload.react")} onPress={ie} variant="borderless" aria-label={le}/>;
                            a[55] = ie;
                            a[56] = se;
                        } else {
                            se = a[56];
                        }
                        let ue;
                        if (a[57] === Symbol.for("react.memo_cache_sentinel")) {
                            ue = s._("Retry");
                            a[57] = ue;
                        } else {
                            ue = a[57];
                        }
                        let ce;
                        if (a[58] !== se) {
                            ce = {
                                type: "complete",
                                icon: se,
                                label: ue,
                                labelStyle: C.labelRetry
                            };
                            a[58] = se;
                            a[59] = ce;
                        } else {
                            ce = a[59];
                        }
                        v = ce;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.SENDING:
                    {
                        let de;
                        if (a[60] === Symbol.for("react.memo_cache_sentinel")) {
                            de = m.jsx(r("WAWebMessageViewOncePendingCancel"), {});
                            a[60] = de;
                        } else {
                            de = a[60];
                        }
                        let me;
                        if (a[61] !== E) {
                            me = {
                                type: "complete",
                                icon: de,
                                label: E,
                                labelStyle: C.labelActive
                            };
                            a[61] = E;
                            a[62] = me;
                        } else {
                            me = a[62];
                        }
                        v = me;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                    {
                        let pe;
                        if (a[63] === Symbol.for("react.memo_cache_sentinel")) {
                            pe = {
                                type: "complete",
                                icon: m.jsx(r("WDSIconWdsIcEphemeral.react"), {
                                    width: y,
                                    height: y,
                                    xstyle: C.nonSpinnerIcon,
                                    iconXstyle: C.nonSpinnerIconSvg
                                }),
                                label: s._("Expired"),
                                labelStyle: C.labelInactive
                            };
                            a[63] = pe;
                        } else {
                            pe = a[63];
                        }
                        v = pe;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
                case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
                case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
                    {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Unsupported/too large/not readable view once media message"
                        ]))).sendLogs("view-once-hook-error");
                        let _e;
                        if (a[64] === Symbol.for("react.memo_cache_sentinel")) {
                            _e = m.jsx(r("WDSIconWdsIcEphemeral.react"), {
                                width: y,
                                height: y,
                                xstyle: C.nonSpinnerIcon,
                                iconXstyle: C.nonSpinnerIconSvg
                            });
                            a[64] = _e;
                        } else {
                            _e = a[64];
                        }
                        let fe;
                        if (a[65] !== E) {
                            fe = {
                                type: "complete",
                                icon: _e,
                                label: E,
                                labelStyle: C.labelActive
                            };
                            a[65] = E;
                            a[66] = fe;
                        } else {
                            fe = a[66];
                        }
                        v = fe;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.INIT:
                case o("WAWebMediaTypes").MediaDataStage.PREPARING:
                case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                case o("WAWebMediaTypes").MediaDataStage.EXISTS:
                    if (!_) {
                        let ge;
                        if (a[67] === Symbol.for("react.memo_cache_sentinel")) {
                            ge = m.jsx(r("WAWebMessageViewOncePendingCancel"), {});
                            a[67] = ge;
                        } else {
                            ge = a[67];
                        }
                        let he;
                        if (a[68] !== E) {
                            he = {
                                type: "unviewed",
                                icon: ge,
                                handleClick: b,
                                label: E
                            };
                            a[68] = E;
                            a[69] = he;
                        } else {
                            he = a[69];
                        }
                        v = he;
                        break e;
                    }
                case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
                case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
                    {
                        let ye;
                        if (a[70] === Symbol.for("react.memo_cache_sentinel")) {
                            ye = m.jsx(r("WDSIconWdsIcViewOnce.react"), {
                                xstyle: C.nonSpinnerIcon,
                                iconXstyle: C.nonSpinnerIconSvg
                            });
                            a[70] = ye;
                        } else {
                            ye = a[70];
                        }
                        let Ce;
                        if (a[71] !== E) {
                            Ce = {
                                type: "complete",
                                icon: ye,
                                label: E,
                                labelStyle: C.labelActive
                            };
                            a[71] = E;
                            a[72] = Ce;
                        } else {
                            Ce = a[72];
                        }
                        v = Ce;
                        break e;
                    }
            }
            v = undefined;
        }
        return v;
    }
    function S(e) {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to resume remote view once upload"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("viewonce-resume-remote-upload-failed");
    }
    function R(e) {
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to resume view once upload"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("resume-upload-failed");
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(45);
        const { displayAuthor, displayType, msgKey, quotedMsg, ref, trusted } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebMsgGetters").getType,
                o("WAWebMsgGetters").getAck,
                o("WAWebMsgGetters").getT,
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            t[0] = d;
        } else {
            d = t[0];
        }
        const p = o("useWAWebMsgValues").useMsgValues(msgKey, d);
        const f = p[0];
        const g = p[1];
        const h = p[2];
        const y = p[3];
        const b = VComponent(y, msgKey);
        let S;
        if (t[1] !== g || t[2] !== h) {
            S = o("WAWebViewOnceState").getViewOnceStatusFor(g, h);
            t[1] = g;
            t[2] = h;
            t[3] = S;
        } else {
            S = t[3];
        }
        const R = S;
        let L;
        if (t[4] !== trusted || t[5] !== b) {
            L = function() {
                return {
                    handleKeyActivation: function(t) {
                        if (trusted && b.handleClick != null) {
                            b.handleClick(t);
                        }
                    }
                };
            };
            t[4] = trusted;
            t[5] = b;
            t[6] = L;
        } else {
            L = t[6];
        }
        useImperativeHandle(ref, L);
        let E;
        e: switch(f){
            case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
                {
                    let k;
                    if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                        k = s._("View once photo");
                        t[7] = k;
                    } else {
                        k = t[7];
                    }
                    E = k;
                    break e;
                }
            case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
                {
                    let I;
                    if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                        I = s._("View once video");
                        t[8] = I;
                    } else {
                        I = t[8];
                    }
                    E = I;
                    break e;
                }
            case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
                {
                    let T;
                    if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                        T = s._("View once voice message");
                        t[9] = T;
                    } else {
                        T = t[9];
                    }
                    E = T;
                }
        }
        let D;
        if (b.type === "complete") {
            const { icon, label, labelStyle } = b;
            let N;
            if (t[10] !== E || t[11] !== label || t[12] !== R) {
                N = R === "unviewed" ? E : [
                    label,
                    E
                ].join(" - ");
                t[10] = E;
                t[11] = label;
                t[12] = R;
                t[13] = N;
            } else {
                N = t[13];
            }
            const M = N;
            let w;
            if (t[14] !== quotedMsg) {
                w = quotedMsg != null ? <div className="x1198e8h x1lxpwgx xzueoph xw01apr">{quotedMsg}</div> : null;
                t[14] = quotedMsg;
                t[15] = w;
            } else {
                w = t[15];
            }
            const A = R === "viewed" && C.statusDone;
            let F;
            if (t[16] !== A) {
                F = [
                    C.statusIcon,
                    A
                ];
                t[16] = A;
                t[17] = F;
            } else {
                F = t[17];
            }
            let O;
            if (t[18] !== icon || t[19] !== F) {
                const Component = r("WAWebFlexItem.react");
                O = <Component xstyle={F} grow={0}>{icon}</Component>;
                t[18] = icon;
                t[19] = F;
                t[20] = O;
            } else {
                O = t[20];
            }
            let B;
            if (t[21] !== labelStyle) {
                B = [
                    labelStyle,
                    C.labelText
                ];
                t[21] = labelStyle;
                t[22] = B;
            } else {
                B = t[22];
            }
            let W;
            if (t[23] !== label || t[24] !== msgKey || t[25] !== B) {
                const Component = r("WAWebMessageSpacerText.react");
                const Component_1 = r("WAWebFlexItem.react");
                W = <Component_1 grow={1}><Component xstyle={B} msgKey={msgKey}>{label}</Component></Component_1>;
                t[23] = label;
                t[24] = msgKey;
                t[25] = B;
                t[26] = W;
            } else {
                W = t[26];
            }
            let q;
            if (t[27] !== M || t[28] !== W || t[29] !== O) {
                const Component = o("WAWebFlex.react").FlexRow;
                q = <Component align="center" xstyle={C.labelContainer} testid="view-once-complete" aria-label={M}>{O}{W}</Component>;
                t[27] = M;
                t[28] = W;
                t[29] = O;
                t[30] = q;
            } else {
                q = t[30];
            }
            let U;
            if (t[31] !== displayAuthor || t[32] !== displayType || t[33] !== msgKey || t[34] !== q || t[35] !== w) {
                const Component = r("WAWebMessageTextBubble.react");
                U = <Component msgKey={msgKey} displayAuthor={displayAuthor} displayType={displayType}>{w}{q}</Component>;
                t[31] = displayAuthor;
                t[32] = displayType;
                t[33] = msgKey;
                t[34] = q;
                t[35] = w;
                t[36] = U;
            } else {
                U = t[36];
            }
            D = U;
        } else {
            let V;
            if (t[37] !== displayType || t[38] !== msgKey) {
                V = m.jsx(r("WAWebViewOnceSunset.react"), {
                    msgKey,
                    displayType
                });
                t[37] = displayType;
                t[38] = msgKey;
                t[39] = V;
            } else {
                V = t[39];
            }
            D = V;
        }
        let H;
        if (t[40] !== b.type) {
            H = ({
                0: {},
                1: {
                    className: "x9f619 x1iorvi4 x11lfxj5 xjkvuk6 x135b78x"
                }
            })[(b.type === "unviewed") << 0];
            t[40] = b.type;
            t[41] = H;
        } else {
            H = t[41];
        }
        let G;
        if (t[42] !== D || t[43] !== H) {
            G = <div {...babelHelpers.extends({}, H, {
                children: D
            })}/>;
            t[42] = D;
            t[43] = H;
            t[44] = G;
        } else {
            G = t[44];
        }
        return G;
    }
    l.default = L;
}, 226);