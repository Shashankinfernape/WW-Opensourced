__d("WAWebLinkDeviceQrcode.react", [
    "fbt",
    "CometPlaceholder.react",
    "Promise",
    "SecurePostMessage",
    "WALogger",
    "WAWebAppRootInteractionContext.react",
    "WAWebAutoLogoutGating",
    "WAWebBackendEventBus",
    "WAWebConnModel",
    "WAWebConnectionIcon.react",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebLinkDeviceQrcodeLayout.react",
    "WAWebNetworkStatus",
    "WAWebQRCode.react",
    "WAWebQrCodeWaLogo.react",
    "WAWebSocketConstants",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMultiDevice",
    "WDSIconIcRefresh.react",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "cr:1064",
    "deferredLoadComponent",
    "gkx",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebRenderCallbacks"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useCallback: _, useEffect: f, useRef: g, useState: h } = p;
    const y = r("requireDeferred")("WABase64").__setRef("WAWebLinkDeviceQrcode.react");
    const C = r("requireDeferred")("WAWebAdvSignatureApi").__setRef("WAWebLinkDeviceQrcode.react");
    const b = r("requireDeferred")("WAWebCmd").__setRef("WAWebLinkDeviceQrcode.react");
    const v = r("requireDeferred")("WAWebCompanionRegClientUtils").__setRef("WAWebLinkDeviceQrcode.react");
    const S = r("requireDeferred")("WAWebNativeCameraQRLinkedDeviceUtils").__setRef("WAWebLinkDeviceQrcode.react");
    const R = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("WAWebLinkDeviceQrcode.react");
    const L = r("requireDeferred")("WAWebSignalStoreApi").__setRef("WAWebLinkDeviceQrcode.react");
    const E = r("requireDeferred")("WAWebUserPrefsInfoStore").__setRef("WAWebLinkDeviceQrcode.react");
    const k = r("requireDeferred")("WAWebWamQrCodeCount").__setRef("WAWebLinkDeviceQrcode.react");
    const I = {
        paddingInline30: {
            paddingInlineStart: "x162tt16",
            paddingInlineEnd: "x5zjp28",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        marginBottom10: {
            marginBottom: "xyorhqc",
            $$css: true
        }
    };
    const T = r("deferredLoadComponent")(r("requireDeferred")("WAWebVelocityTransitionGroup").__setRef("WAWebLinkDeviceQrcode.react"));
    const D = "https://faq.whatsapp.com/r/ld";
    const x = "https://wa.me/settings/linked_devices#";
    const $ = 228;
    const P = {
        qrCodeWarning: {
            backgroundColor: "x1c2u55m",
            color: "x10e1pyi",
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            insetInlineEnd: "xtijo5x",
            left: null,
            right: null,
            bottom: "x1ey2m1c",
            borderStartStartRadius: "x1rgw4pv",
            borderStartEndRadius: "x1vjm0to",
            borderEndEndRadius: "xnqoqkk",
            borderEndStartRadius: "x16lu3ki",
            zIndex: "x11uqc5h",
            height: "x1m3v4wt",
            width: "x1oysuqx",
            $$css: true
        },
        qrCodeOfflineWarning: {
            cursor: "x1ypdohk",
            $$css: true
        },
        qrCodeWarningIcon: {
            color: "x10e1pyi",
            $$css: true
        },
        qrCodeWarningThemed: {
            backgroundColor: "x1od0jb8",
            color: "x14ug900",
            $$css: true
        },
        qrCodeWarningIconThemed: {
            color: "x14ug900",
            $$css: true
        }
    };
    function N({ apiCmd: t, autoLogoutEnabled: a, children: i, enabedAlternateDeviceLinking: l, onAutoLogoutToggle: s, onClickLinkWithPhoneNumber: u, theme: c }) {
        const d = h(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE);
        const p = d[0];
        const g = d[1];
        const y = h(!r("WAWebNetworkStatus").online);
        const C = y[0];
        const b = y[1];
        const v = h(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED);
        const S = v[0];
        const L = v[1];
        const E = function() {
            if (o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE) {
                R.onReady(function(e) {
                    return e.companionDeviceLinkingScreenQpl.qrCodeExpired();
                });
            }
            g(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE);
            b(!r("WAWebNetworkStatus").online);
            if (o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED) {
                R.onReady(function(e) {
                    return e.companionDeviceLinkingScreenQpl.qrCodeInitialised();
                });
            }
            L(o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED);
            if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && o("WAWebBackendEventBus").BackendEventBus.socketState === o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED) {
                r("SecurePostMessage").sendMessageForCurrentOrigin(self.parent, "QR_CODE_LOADED_FOR_AUTO_LOGOUT");
            }
        };
        o("useWAWebListener").useListener(o("WAWebBackendEventBus").BackendEventBus, "set_socket_state", E);
        o("useWAWebListener").useListener(r("WAWebNetworkStatus"), "change:online", E);
        const k = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
            manualHold: true,
            shouldUseNavigationAsInteraction: true,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_DEVICE_LINKING_PHONE
        });
        const { startInteraction: I, stopInteraction: T } = k;
        const D = _(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (u != null) {
                I();
                yield u();
            }
        }), [
            u,
            I
        ]);
        f(function() {
            R.onReady(function(e) {
                return e.companionDeviceLinkingScreenQpl.initialize(t);
            });
            if (n("cr:1064") != null) {
                n("cr:1064").initialize();
            }
        }, []);
        let x;
        if (C) {
            x = <W1 onLoadingComplete={T} theme={c}/>;
        } else if (p) {
            x = <A onLoadingComplete={T} theme={c}/>;
        } else if (S) {
            x = <M onLoadingComplete={T} theme={c}/>;
        } else {
            x = m.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {
                theme: c
            });
        }
        if (a && !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
            x = m.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {
                theme: c
            });
        }
        const Component = o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout;
        return <Component apiCmd={t} autoLogoutEnabled={a} enabedAlternateDeviceLinking={l} onAutoLogoutToggle={s} onClickLinkWithPhoneNumber={u != null ? D : null} theme={c}>{x}</Component>;
    }
    N.displayName = `${N.name} [from ${i.id}]`;
    function M({ children: a, onLoadingComplete: i, theme: l }) {
        const d = a;
        const p = g(null);
        const I = h(false);
        const P = I[0];
        const N = I[1];
        const M = h(null);
        const w = M[0];
        const A = M[1];
        const F = h(null);
        const O = F[0];
        const B = F[1];
        const W = r("useWAWebDebouncedCallback")(function() {
            N(true);
        }, 100);
        const q = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (r("WAWebEnvironment").getIsShowroom()) {
                    return "showroom";
                }
                if (!o("WAWebConnModel").Conn.connected) {
                    const t = o("WAWebConnModel").Conn.ref;
                    const a = yield (c || (c = n("Promise"))).all([
                        L.load(),
                        E.load(),
                        C.load(),
                        y.load(),
                        v.load(),
                        S.load()
                    ]);
                    const i = a[0].waSignalStore;
                    const l = a[1].waNoiseInfo;
                    const s = a[2].getADVSecretKey;
                    const d = a[3].encodeB64;
                    const m = a[4].DEVICE_PLATFORM;
                    const p = a[5].isNativeCameraQRLinkedDeviceTest;
                    const _ = yield i.getRegistrationInfo();
                    const f = yield l.get();
                    if (!f || !_) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("Empty noiseInfo or empty regInfo");
                        return null;
                    }
                    const g = d(f.staticKeyPair.pubKey);
                    const h = d(_.identityKeyPair.pubKey);
                    let b;
                    try {
                        b = yield s();
                    } catch (e) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "QR code render failed: ",
                            ""
                        ])), e).sendLogs("qr-code-page-adv-secret-key-failed");
                        return null;
                    }
                    let R = `${t},${g},${h},${b},${m}`;
                    if (p()) {
                        R = x + R;
                    } else if (r("justknobx")._("770")) {
                        R += `,${D}`;
                    }
                    return R;
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const U = _(function() {
            q().then((e)=>{
                if (!(e == null || e === "")) {
                    A(e);
                    k.onReady(function(e) {
                        e.inc();
                    });
                    i();
                }
            });
        }, [
            A,
            i
        ]);
        const V = _(function(e) {
            if (w != null && e != null) {
                e.removeAttribute("title");
            }
        }, [
            w
        ]);
        o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:ref", function() {
            U();
            R.onReady(function(e) {
                return e.companionDeviceLinkingScreenQpl.qrCodeRefreshed();
            });
        });
        o("useWAWebListener").useListener(o("WAWebUserPrefsMultiDevice").advSecretEventEmitter, "change", function() {
            U();
            R.onReady(function(e) {
                return e.companionDeviceLinkingScreenQpl.qrCodeRegRefreshed();
            });
        });
        f(function() {
            if (w != null) {
                const e = p.current;
                if (e != null) {
                    const t = e.querySelectorAll("canvas, img");
                    const n = d != null ? "0.04" : "1";
                    const r = "opacity 0.5s cubic-bezier(0.1, 0.82, 0.25, 1)";
                    t.forEach((e)=>{
                        if (e instanceof HTMLElement) {
                            e.style.opacity = n;
                            e.style.transition = r;
                        }
                    });
                }
            }
        }, [
            d,
            w
        ]);
        r("useWAWebRenderCallbacks")({
            onMount: function() {
                U();
                b.onReady(function(e) {
                    return e.Cmd.onInitialLoadReadyFromBridge();
                });
            },
            onUnmount: function() {
                k.onReady(function(e) {
                    e.reset();
                });
            }
        });
        const H = function() {
            if (P) {
                N(false);
            }
            W();
        };
        const G = function(t) {
            W.cancel();
            N(false);
        };
        const z = function(t) {
            t.stopPropagation();
            t.preventDefault();
            q().then((e)=>{
                if (e != null) {
                    B(e);
                }
            });
        };
        const j = function() {
            if (O != null) {
                const e = document.createElement("textarea");
                e.value = O;
                e.style.position = "fixed";
                e.style.opacity = "0";
                if (document.body) {
                    document.body.appendChild(e);
                    e.select();
                    document.execCommand("copy");
                    document.body.removeChild(e);
                }
            }
            B(null);
        };
        let K = null;
        let Q = null;
        if (!r("gkx")("26258")) {
            K = z;
            if (O != null) {
                Q = <div role="button" tabIndex={0} data-testid="link-device-qr-data-overlay" onClick={j} onKeyDown={function(t) {
                    if (t.key === "Escape") {
                        B(null);
                    } else if (t.key === "Enter" || t.key === " ") {
                        t.preventDefault();
                        j();
                    }
                }} style={{
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.9)",
                    color: "white",
                    padding: 12,
                    zIndex: 200,
                    cursor: "pointer",
                    overflow: "auto",
                    overflowWrap: "break-word",
                    wordBreak: "break-all",
                    fontSize: 10,
                    lineHeight: "14px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    userSelect: "text"
                }}>{O}</div>;
            }
        }
        if (w == null) {
            return m.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {
                theme: l
            });
        }
        const Component = r("WAWebQRCode.react");
        return <Component ariaLabel={s._("Scan this QR code to link a device").toString()} data={w} size={$} colorDark="#122e31" onChange={V}>{function(t) {
            const Component = r("CometPlaceholder.react");
            return <div {...babelHelpers.extends({
                ref: function(n) {
                    t.current = n ?? null;
                    p.current = n ?? null;
                },
                "data-testid": "link-device-qr-code"
            }, {
                0: {
                    className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8"
                },
                2: {
                    className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xvxx97b x1028phh x1es37l9 xq7a5ml x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l xyi3aci xwf5gio x1p453bz x1suzm8a"
                },
                1: {
                    className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xjfk50j"
                },
                3: {
                    className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xvxx97b x1028phh x1es37l9 xq7a5ml x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l xyi3aci xwf5gio x1p453bz x1suzm8a xjfk50j"
                }
            }[!!(l === "wds" || r("WAWebEnvironment").isWindows) << 1 | !!(P && d == null) << 0], {
                "data-ref": w,
                onContextMenu: K,
                onMouseMove: H,
                onMouseLeave: G,
                children: [
                    <Component fallback={d ?? null} name="WAWebVelocityTransitionGroup"><T transitionName="scale">{d}</T></Component>,
                    <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x10l6tqk xwa60dl xbudbmw xhtitgo x1fu8urw x1peatla x11lhmoz x87ps6o x1hc1fzr x7gkmsb"
                        },
                        1: {
                            className: "x10l6tqk xwa60dl xbudbmw xhtitgo x1fu8urw x1peatla x11lhmoz x87ps6o x7gkmsb x1vak9w0"
                        }
                    }[!!d << 0], {
                        children: m.jsx(r("WAWebQrCodeWaLogo.react"), {})
                    })}/>,
                    Q
                ]
            })}/>;
        }}</Component>;
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function W1(e) {
        const t = o("react-compiler-runtime").c(14);
        const { onLoadingComplete: n, theme: a } = e;
        const i = a === "wds" && P.qrCodeWarningThemed;
        let l;
        if (t[0] !== i) {
            l = [
                P.qrCodeWarning,
                i,
                P.qrCodeOfflineWarning,
                o("WDSMargins.stylex").wdsMargins.marginAuto,
                I.paddingInline30
            ];
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = a === "wds" && P.qrCodeWarningIconThemed;
        let c;
        if (t[2] !== u) {
            const Component = o("WAWebFlex.react").FlexItem;
            c = <Component xstyle={I.marginBottom10}>{m.jsx(o("WAWebConnectionIcon.react").ConnectionIcon, {
                width: 48,
                height: 48,
                iconXstyle: [
                    P.qrCodeWarningIcon,
                    u
                ]
            })}</Component>;
            t[2] = u;
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            d = <Component justify="center" align="center">{s._("No internet connection")}</Component>;
            t[4] = d;
        } else {
            d = t[4];
        }
        let p;
        if (t[5] !== c) {
            const Component = o("WAWebFlex.react").FlexColumn;
            p = <Component align="center" justify="center">{c}{d}</Component>;
            t[5] = c;
            t[6] = p;
        } else {
            p = t[6];
        }
        let _;
        if (t[7] !== l || t[8] !== p) {
            const Component = r("WAWebUnstyledButton.react");
            _ = <Component key="offline" testid="link_device_qr_offline_refresh_button" xstyle={l} onClick={B}>{p}</Component>;
            t[7] = l;
            t[8] = p;
            t[9] = _;
        } else {
            _ = t[9];
        }
        let f;
        if (t[10] !== n || t[11] !== _ || t[12] !== a) {
            f = <M onLoadingComplete={n} theme={a}>{_}</M>;
            t[10] = n;
            t[11] = _;
            t[12] = a;
            t[13] = f;
        } else {
            f = t[13];
        }
        return f;
    }
    function A(e) {
        const t = o("react-compiler-runtime").c(14);
        const { onLoadingComplete: n, theme: a } = e;
        const i = F;
        const l = a === "wds" && P.qrCodeWarningThemed;
        let u;
        if (t[0] !== l) {
            u = [
                P.qrCodeWarning,
                l,
                o("WDSMargins.stylex").wdsMargins.marginAuto,
                I.paddingInline30
            ];
            t[0] = l;
            t[1] = u;
        } else {
            u = t[1];
        }
        const c = a === "wds" && P.qrCodeWarningIconThemed;
        let d;
        if (t[2] !== c) {
            const Component = o("WAWebFlex.react").FlexItem;
            d = <Component xstyle={I.marginBottom10}>{m.jsx(r("WDSIconIcRefresh.react"), {
                height: 48,
                width: 48,
                testid: "refresh-large",
                iconXstyle: [
                    P.qrCodeWarningIcon,
                    c
                ]
            })}</Component>;
            t[2] = c;
            t[3] = d;
        } else {
            d = t[3];
        }
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            p = <Component>{s._("Select to reload QR code")}</Component>;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] !== d) {
            const Component = o("WAWebFlex.react").FlexColumn;
            _ = <Component align="center" justify="center">{d}{p}</Component>;
            t[5] = d;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== u || t[8] !== _) {
            const Component = r("WAWebUnstyledButton.react");
            f = <Component key="expiry" testid="link_device_qr_expired_refresh_button" xstyle={u} onClick={i}>{_}</Component>;
            t[7] = u;
            t[8] = _;
            t[9] = f;
        } else {
            f = t[9];
        }
        let g;
        if (t[10] !== n || t[11] !== f || t[12] !== a) {
            g = <M onLoadingComplete={n} theme={a}>{f}</M>;
            t[10] = n;
            t[11] = f;
            t[12] = a;
            t[13] = g;
        } else {
            g = t[13];
        }
        return g;
    }
    function F() {
        R.onReady(O);
        o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
    }
    function O(e) {
        return e.companionDeviceLinkingScreenQpl.qrCodeReloaded();
    }
    function B() {
        o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
    }
    l.default = N;
}, 226);