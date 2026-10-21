__d("WAWebGuidePopup.react", [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebButton.react",
    "WAWebConfirmPopup.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum",
    "WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum",
    "WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum",
    "WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum",
    "WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum",
    "WAWebL10NGetSystemLocale",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNotificationConstants",
    "WAWebUA",
    "WAWebVoipPopoutModalManager",
    "WDSIconIcArrowBack.react",
    "WDSIconIcLock.react",
    "WDSIconIcPageInfo.react",
    "WDSText.react",
    "err",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        iconAllow: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x1useyqa",
            height: "xsdox4t",
            color: "x17t9dm2",
            backgroundColor: "xice4io",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        iconTopCenter: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "xbudbmw",
            left: null,
            marginInlineStart: "xwqyzqf",
            transform: "x1iffjtl",
            $$css: true
        },
        iconTopLeft: {
            position: "x10l6tqk",
            top: "xxk6nc9",
            left: "xu96u03",
            $$css: true
        },
        iconTopLeftLtr: {
            transform: "x1158fpu",
            $$css: true
        },
        iconTopLeftRtl: {
            transform: "x1rr8tx7",
            $$css: true
        }
    };
    const p = {
        NOTIFICATIONS: "NOTIFICATIONS",
        BACKGROUND_SYNC: "BACKGROUND_SYNC",
        CAMERA_FAIL: "CAMERA_FAIL",
        CAMERA_MISSING: "CAMERA_MISSING",
        MIC_FAIL: "MIC_FAIL",
        MIC_MISSING: "MIC_MISSING",
        CAMERA_AND_MIC_FAIL: "CAMERA_AND_MIC_FAIL",
        CAMERA_AND_MIC_MISSING: "CAMERA_AND_MIC_MISSING",
        CAMERA_UNAVAILABLE: "CAMERA_UNAVAILABLE",
        MIC_UNAVAILABLE: "MIC_UNAVAILABLE",
        CAMERA_AND_MIC_UNAVAILABLE: "CAMERA_AND_MIC_UNAVAILABLE",
        CAMERA_BLOCKED_BY_SYSTEM: "CAMERA_BLOCKED_BY_SYSTEM",
        MIC_BLOCKED_BY_SYSTEM: "MIC_BLOCKED_BY_SYSTEM",
        CAMERA_AND_MIC_BLOCKED_BY_SYSTEM: "CAMERA_AND_MIC_BLOCKED_BY_SYSTEM",
        CAMERA: "CAMERA",
        MIC: "MIC",
        CAMERA_AND_MIC: "CAMERA_AND_MIC",
        POPUPS_BLOCKED: "POPUPS_BLOCKED",
        SCREEN_SHARE_FAIL: "SCREEN_SHARE_FAIL",
        VIDEO_UPGRADE_FAIL: "VIDEO_UPGRADE_FAIL"
    };
    const _ = {
        VOICE_MESSAGES: "VOICE_MESSAGES",
        VOIP: "VOIP",
        VOIP_ACTIVE: "VOIP_ACTIVE"
    };
    const f = {
        PHOTO_CAPTURE: "PHOTO_CAPTURE",
        VOIP: "VOIP",
        VOIP_VIDEO_UPGRADE: "VOIP_VIDEO_UPGRADE"
    };
    const g = {
        VOIP: "VOIP"
    };
    const h = babelHelpers.extends({}, _, f, g, {
        NOTIFICATION: "NOTIFICATION"
    });
    function Y4Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_children = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x1rg5ohu xk50ysn"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_children) {
            a = <strong {...babelHelpers.extends({}, r, {
                children: e_children
            })}/>;
            t[1] = e_children;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    const C = n("$InternalEnum")({
        GUIDE_ALLOW: "guide-allow",
        GUIDE_UNBLOCK: "guide-unblock",
        GUIDE_NONE: "guide-none"
    });
    function b(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i_type = i.type;
        const c = i_type === undefined ? C.GUIDE_NONE : i_type;
        const { onCancel, onConfirm } = i;
        const f = onConfirm === undefined ? o("WAWebModalManager").closeModalManager : onConfirm;
        const { messaging, enableNewBannerLogic } = i;
        const y = messaging === "NOTIFICATIONS" && (enableNewBannerLogic ?? o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled"));
        const isNewLogicForDisabledNotifications = y && window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_DENIED;
        if (c === C.GUIDE_ALLOW) {
            const S = o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME || o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.FIREFOX || o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE;
            const L = o("WAWebL10NGetSystemLocale").isSystemLocaleRTL();
            const E = L ? "rtl" : "ltr";
            const Component = o("WAWebButton.react").Button;
            const Component_1 = o("WAWebModal.react").Modal;
            return <Component_1 type={o("WAWebModal.react").ModalTheme.Guide} tsNavigationData={{
                surface: "guide-popup",
                viewName: "guide-allow"
            }}><div {...babelHelpers.extends({}, {
                0: {
                    className: "x1n2onr6 x2vfze8 x2b8uid"
                },
                1: {
                    className: "x1n2onr6 x889kno x7xyrnr"
                }
            }[!!S << 0], {
                children: [
                    !r("WAWebEnvironment").isWindows && <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(m.iconAllow, S ? m.iconTopLeft : m.iconTopCenter, S && (L ? m.iconTopLeftRtl : m.iconTopLeftLtr)), {
                        children: d.jsx(r("WDSIconIcArrowBack.react"), {
                            directional: true,
                            overrideDirection: S ? E : null
                        })
                    })}/>,
                    <div className="x1u7kmwd x1q74xe4 x1iikomf xggjnk3 xqrpoby"><V1Component messaging={messaging} colorName="persistentAlwaysWhite"/></div>,
                    <div className="x1iikomf x1fc57z9 xat24cr x1jchvi3 xp5xpl3"><RComponent messaging={messaging} featureSurface={i.featureSurface} isNewLogicForDisabledNotifications={isNewLogicForDisabledNotifications} colorName="persistentAlwaysWhite" hideReloadHint={i.hideReloadHint === true}/></div>,
                    <div className="xqui205"><Component onClick={f} type="primary">{r("WAWebFbtCommon")("OK")}</Component></div>
                ]
            })}/></Component_1>;
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component ref={t_ref} tsNavigationData={{
            surface: "guide-popup",
            viewName: "guide"
        }} title=<V1Component messaging={messaging} colorName="contentDefault"/> onOK={f} okText={r("WAWebFbtCommon")("OK")} onCancel={onCancel} cancelText={onCancel ? s._("Learn more") : undefined}><div className="xieb3on x1f6kntn x1iikomf x1fc57z9"><RComponent messaging={messaging} featureSurface={i.featureSurface} isNewLogicForDisabledNotifications={isNewLogicForDisabledNotifications} colorName="contentDeemphasized" hideReloadHint={i.hideReloadHint === true}/></div></Component>;
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function V1Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { colorName, messaging } = e;
        let i;
        if (t[0] !== messaging) {
            i = messaging === "BACKGROUND_SYNC" || messaging === "NOTIFICATIONS" ? s._("Allow notifications") : messaging === "CAMERA" || messaging === "CAMERA_FAIL" || messaging === "CAMERA_BLOCKED_BY_SYSTEM" ? s._("Allow camera") : messaging === "CAMERA_MISSING" ? s._("Camera not found") : messaging === "MIC_MISSING" ? s._("Microphone not found") : messaging === "MIC_FAIL" || messaging === "MIC" || messaging === "MIC_BLOCKED_BY_SYSTEM" ? s._("Allow microphone") : messaging === "CAMERA_AND_MIC_FAIL" || messaging === "CAMERA_AND_MIC" || messaging === "CAMERA_AND_MIC_BLOCKED_BY_SYSTEM" ? s._("Allow camera and microphone") : messaging === "CAMERA_AND_MIC_MISSING" ? s._("Camera or microphone not found") : messaging === "CAMERA_UNAVAILABLE" ? s._("Camera unavailable") : messaging === "MIC_UNAVAILABLE" ? s._("Microphone unavailable") : messaging === "CAMERA_AND_MIC_UNAVAILABLE" ? s._("Camera or microphone unavailable") : messaging === "POPUPS_BLOCKED" ? s._("Allow pop-ups") : messaging === "SCREEN_SHARE_FAIL" ? s._("Allow access to share your screen") : messaging === "VIDEO_UPGRADE_FAIL" ? s._("Couldn't switch to video") : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${messaging}`);
            })();
            t[0] = messaging;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== colorName || t[3] !== i) {
            const Component = r("WDSText.react");
            l = <Component colorName={colorName} type="Headline2">{i}</Component>;
            t[2] = colorName;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function S(e, t = false) {
        if (t) {
            return null;
        }
        const n = e === h.VOIP_ACTIVE || e === h.VOIP_VIDEO_UPGRADE;
        if (n) {
            return s._("If you've already updated your permission settings, reload WhatsApp Web and rejoin the call for the change to take effect.");
        }
        return s._("If you've already updated your permission settings, reload WhatsApp Web for the change to take effect.");
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function RComponent(e) {
        const t = o("react-compiler-runtime").c(76);
        const { colorName, featureSurface, hideReloadHint, isNewLogicForDisabledNotifications, messaging } = e;
        const browser = o("WAWebUA").UA.browser;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = <div className="x6s0dn4 xl56j7k x3nfvp2 xxymvpz xlup9mm x1kky2od xg5evlq xup1sw1 x1tiyuxx x1uc92m x1nbhmlj x181vq82 xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh">{d.jsx(r("WDSIconIcPageInfo.react"), {
                height: 16,
                width: 16
            })}</div>;
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = m;
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = <div className="x7a106z xl56j7k x3nfvp2 x16dsc37 xxk0z11 xvy4d1p x1sbwfh8 x16q7b9a">{d.jsx(r("WDSIconIcLock.react"), {
                height: 20,
                width: 20
            })}</div>;
            t[1] = h;
        } else {
            h = t[1];
        }
        const C = h;
        const b = browser === "edge" ? C : browser === "chrome" ? p : browser === "opera" ? C : browser === "firefox" ? p : null;
        let v;
        e: switch(messaging){
            case "NOTIFICATIONS":
                {
                    if (isNewLogicForDisabledNotifications && b != null) {
                        let R;
                        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                            R = s._("Click the{browser_permissions_icon}icon next to the address bar and toggle {=m3} on.", [
                                s._param("browser_permissions_icon", b),
                                s._implicitParam("=m3", <Y4Component>{s._("Notifications")}</Y4Component>)
                            ]);
                            t[2] = R;
                        } else {
                            R = t[2];
                        }
                        let E;
                        if (t[3] !== colorName) {
                            const Component = r("WDSText.react");
                            E = <Component type="Body1" colorName={colorName}>{R}</Component>;
                            t[3] = colorName;
                            t[4] = E;
                        } else {
                            E = t[4];
                        }
                        v = E;
                        break e;
                    }
                    let k;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        k = browser === "firefox" ? s._("To get notifications for new messages and calls, select Allow from the prompt below the URL bar.") : s._("To get notifications for new messages and calls, click Allow above.");
                        t[5] = k;
                    } else {
                        k = t[5];
                    }
                    v = k;
                    break e;
                }
            case "BACKGROUND_SYNC":
                {
                    let I;
                    if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                        I = browser === "firefox" ? s._("To allow notifications for background sync, select Allow from the prompt below the URL bar.") : s._("To allow notifications for background sync, click Allow above.");
                        t[6] = I;
                    } else {
                        I = t[6];
                    }
                    v = I;
                    break e;
                }
            case "CAMERA_FAIL":
                {
                    if (!(featureSurface in f)) {
                        throw r("err")(`CAMERA_FAIL: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let T;
                        if (t[7] !== featureSurface) {
                            let D;
                            const Component = o("WAWebExternalLink.react").ExternalLink;
                            T = (D = s._enum(featureSurface, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._("_j{\"PHOTO_CAPTURE\":\"To take photos, WhatsApp needs access to your computer's camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.\",\"VOIP\":\"To make calls, WhatsApp needs access to your computer's camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.\",\"VOIP_VIDEO_UPGRADE\":\"To share your video, WhatsApp needs access to your computer's camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.\"}", [
                                D,
                                s._implicitParam("=m5", <Component href={o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam}>{s._("_j{\"PHOTO_CAPTURE\":\"here\",\"VOIP\":\"here\",\"VOIP_VIDEO_UPGRADE\":\"here\"}", [
                                    D
                                ])}</Component>)
                            ]));
                            t[7] = featureSurface;
                            t[8] = T;
                        } else {
                            T = t[8];
                        }
                        v = T;
                        break e;
                    }
                    let x;
                    if (t[9] !== featureSurface) {
                        let $;
                        x = browser === "safari" ? s._("_j{\"PHOTO_CAPTURE\":\"To take photos, WhatsApp needs access to your computer's camera. Open your browser's Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow.\",\"VOIP\":\"To make calls, WhatsApp needs access to your computer's camera. Open your browser's Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow.\",\"VOIP_VIDEO_UPGRADE\":\"To share your video, WhatsApp needs access to your computer's camera. Open your browser's Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"))
                        ]) : ($ = s._enum(featureSurface, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._("_j{\"PHOTO_CAPTURE\":\"To take photos, WhatsApp needs access to your computer's camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.\",\"VOIP\":\"To make calls, WhatsApp needs access to your computer's camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.\",\"VOIP_VIDEO_UPGRADE\":\"To share your video, WhatsApp needs access to your computer's camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.\"}", [
                            $,
                            s._param("browser_permissions_icon", b),
                            s._implicitParam("=m6", <Y4Component>{s._("_j{\"PHOTO_CAPTURE\":\"Camera\",\"VOIP\":\"Camera\",\"VOIP_VIDEO_UPGRADE\":\"Camera\"}", [
                                $
                            ])}</Y4Component>)
                        ]));
                        t[9] = featureSurface;
                        t[10] = x;
                    } else {
                        x = t[10];
                    }
                    let P;
                    if (t[11] !== featureSurface || t[12] !== hideReloadHint) {
                        P = S(featureSurface, hideReloadHint);
                        t[11] = featureSurface;
                        t[12] = hideReloadHint;
                        t[13] = P;
                    } else {
                        P = t[13];
                    }
                    let N;
                    if (t[14] !== x || t[15] !== P) {
                        N = <>{x} {P}</>;
                        t[14] = x;
                        t[15] = P;
                        t[16] = N;
                    } else {
                        N = t[16];
                    }
                    v = N;
                    break e;
                }
            case "CAMERA_MISSING":
                {
                    if (!(featureSurface in f)) {
                        throw r("err")(`CAMERA_MISSING: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let M;
                        if (t[17] !== featureSurface) {
                            M = s._("_j{\"PHOTO_CAPTURE\":\"You can't take a photo because it looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your computer.\",\"VOIP\":\"You can't make a call because it looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your computer.\",\"VOIP_VIDEO_UPGRADE\":\"You can't share your video because it looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your computer.\"}", [
                                s._enum(featureSurface, r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"))
                            ]);
                            t[17] = featureSurface;
                            t[18] = M;
                        } else {
                            M = t[18];
                        }
                        v = M;
                        break e;
                    }
                    let w;
                    if (t[19] !== featureSurface) {
                        w = s._("_j{\"PHOTO_CAPTURE\":\"You can't take a photo because it looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your browser.\",\"VOIP\":\"You can't make a call because it looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your browser.\",\"VOIP_VIDEO_UPGRADE\":\"You can't share your video because it looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your browser.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"))
                        ]);
                        t[19] = featureSurface;
                        t[20] = w;
                    } else {
                        w = t[20];
                    }
                    v = w;
                    break e;
                }
            case "MIC_FAIL":
                {
                    if (!(featureSurface in _)) {
                        throw r("err")(`MIC_FAIL: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let A;
                        if (t[21] !== featureSurface) {
                            let F;
                            const Component = o("WAWebExternalLink.react").ExternalLink;
                            A = (F = s._enum(featureSurface, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum")), s._("_j{\"VOICE_MESSAGES\":\"To record voice messages, WhatsApp needs access to your computer's microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings.\",\"VOIP\":\"To make calls, WhatsApp needs access to your computer's microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings.\",\"VOIP_ACTIVE\":\"To continue this call, WhatsApp needs access to your computer's microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings.\"}", [
                                F,
                                s._implicitParam("=m5", <Component href="ms-settings:privacy-microphone">{s._("_j{\"VOICE_MESSAGES\":\"here\",\"VOIP\":\"here\",\"VOIP_ACTIVE\":\"here\"}", [
                                    F
                                ])}</Component>)
                            ]));
                            t[21] = featureSurface;
                            t[22] = A;
                        } else {
                            A = t[22];
                        }
                        v = A;
                        break e;
                    }
                    let O;
                    if (t[23] !== featureSurface) {
                        let B;
                        O = browser === "safari" ? s._("_j{\"VOICE_MESSAGES\":\"To record voice messages, WhatsApp needs access to your computer's microphone. Open your browser's Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow.\",\"VOIP\":\"To make calls, WhatsApp needs access to your computer's microphone. Open your browser's Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow.\",\"VOIP_ACTIVE\":\"To continue this call, WhatsApp needs access to your computer's microphone. Open your browser's Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))
                        ]) : (B = s._enum(featureSurface, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum")), s._("_j{\"VOICE_MESSAGES\":\"To record voice messages, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.\",\"VOIP\":\"To make calls, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.\",\"VOIP_ACTIVE\":\"To continue this call, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.\"}", [
                            B,
                            s._param("browser_permissions_icon", b),
                            s._implicitParam("=m6", <Y4Component>{s._("_j{\"VOICE_MESSAGES\":\"Microphone\",\"VOIP\":\"Microphone\",\"VOIP_ACTIVE\":\"Microphone\"}", [
                                B
                            ])}</Y4Component>)
                        ]));
                        t[23] = featureSurface;
                        t[24] = O;
                    } else {
                        O = t[24];
                    }
                    let W;
                    if (t[25] !== featureSurface || t[26] !== hideReloadHint) {
                        W = S(featureSurface, hideReloadHint);
                        t[25] = featureSurface;
                        t[26] = hideReloadHint;
                        t[27] = W;
                    } else {
                        W = t[27];
                    }
                    let q;
                    if (t[28] !== O || t[29] !== W) {
                        q = <>{O} {W}</>;
                        t[28] = O;
                        t[29] = W;
                        t[30] = q;
                    } else {
                        q = t[30];
                    }
                    v = q;
                    break e;
                }
            case "MIC_MISSING":
                {
                    if (!(featureSurface in _)) {
                        throw r("err")(`MIC_MISSING: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let U;
                        if (t[31] !== featureSurface) {
                            U = s._("_j{\"VOICE_MESSAGES\":\"You can't record a voice message because it looks like your computer doesn't have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows.\",\"VOIP\":\"You can't make a call because it looks like your computer doesn't have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows.\",\"VOIP_ACTIVE\":\"You can't continue this call because it looks like your computer doesn't have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows.\"}", [
                                s._enum(featureSurface, r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"))
                            ]);
                            t[31] = featureSurface;
                            t[32] = U;
                        } else {
                            U = t[32];
                        }
                        v = U;
                        break e;
                    }
                    let V;
                    if (t[33] !== featureSurface) {
                        V = s._("_j{\"VOICE_MESSAGES\":\"You can't record a voice message because it looks like your computer doesn't have a microphone. Try connecting one, or if you have one connected, try restarting your browser.\",\"VOIP\":\"You can't make a call because it looks like your computer doesn't have a microphone. Try connecting one, or if you have one connected, try restarting your browser.\",\"VOIP_ACTIVE\":\"You can't continue this call because it looks like your computer doesn't have a microphone. Try connecting one, or if you have one connected, try restarting your browser.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"))
                        ]);
                        t[33] = featureSurface;
                        t[34] = V;
                    } else {
                        V = t[34];
                    }
                    v = V;
                    break e;
                }
            case "CAMERA_AND_MIC_FAIL":
                {
                    if (!(featureSurface in g)) {
                        throw r("err")(`CAMERA_AND_MIC_FAIL: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let H;
                        if (t[35] !== featureSurface) {
                            let G;
                            const Component = o("WAWebExternalLink.react").ExternalLink;
                            H = (G = s._enum(featureSurface, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._("_j{\"VOIP\":\"To make calls, WhatsApp needs access to your computer's camera and microphone. Please go to your privacy settings and allow camera and microphone access for this app. Click {=m5} to open the settings.\"}", [
                                G,
                                s._implicitParam("=m5", <Component href="ms-settings:privacy-microphone">{s._("_j{\"VOIP\":\"here\"}", [
                                    G
                                ])}</Component>)
                            ]));
                            t[35] = featureSurface;
                            t[36] = H;
                        } else {
                            H = t[36];
                        }
                        v = H;
                        break e;
                    }
                    let z;
                    if (t[37] !== featureSurface) {
                        let j;
                        z = browser === "safari" ? s._("_j{\"VOIP\":\"To make calls, WhatsApp needs access to your computer's camera and microphone. Open your browser's Preferences \\u2192 Websites and change Camera and Microphone settings for web.whatsapp.com to \\\"Allow\\\".\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum"))
                        ]) : (j = s._enum(featureSurface, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._("_j{\"VOIP\":\"To make calls, WhatsApp needs access to your camera and microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} and {=m8} on.\"}", [
                            j,
                            s._param("browser_permissions_icon", b),
                            s._implicitParam("=m6", <Y4Component>{s._("_j{\"VOIP\":\"Camera\"}", [
                                j
                            ])}</Y4Component>),
                            s._implicitParam("=m8", <Y4Component>{s._("_j{\"VOIP\":\"Microphone\"}", [
                                j
                            ])}</Y4Component>)
                        ]));
                        t[37] = featureSurface;
                        t[38] = z;
                    } else {
                        z = t[38];
                    }
                    let K;
                    if (t[39] !== featureSurface || t[40] !== hideReloadHint) {
                        K = S(featureSurface, hideReloadHint);
                        t[39] = featureSurface;
                        t[40] = hideReloadHint;
                        t[41] = K;
                    } else {
                        K = t[41];
                    }
                    let Q;
                    if (t[42] !== z || t[43] !== K) {
                        Q = <>{z} {K}</>;
                        t[42] = z;
                        t[43] = K;
                        t[44] = Q;
                    } else {
                        Q = t[44];
                    }
                    v = Q;
                    break e;
                }
            case "CAMERA_AND_MIC_MISSING":
                {
                    if (!(featureSurface in g)) {
                        throw r("err")(`MIC_MISSING: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let X;
                        if (t[45] !== featureSurface) {
                            X = s._("_j{\"VOIP\":\"You can't make a call because it looks like your computer doesn't have a camera or microphone. Try connecting one, or if you have one connected, try restarting WhatsApp for Windows.\"}", [
                                s._enum(featureSurface, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum"))
                            ]);
                            t[45] = featureSurface;
                            t[46] = X;
                        } else {
                            X = t[46];
                        }
                        v = X;
                        break e;
                    }
                    let Y;
                    if (t[47] !== featureSurface) {
                        Y = s._("_j{\"VOIP\":\"You can't make a call because it looks like your computer doesn't have a camera or microphone. Try connecting one, or if you have one connected, try restarting your browser.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum"))
                        ]);
                        t[47] = featureSurface;
                        t[48] = Y;
                    } else {
                        Y = t[48];
                    }
                    v = Y;
                    break e;
                }
            case "CAMERA_UNAVAILABLE":
                {
                    let J;
                    if (t[49] === Symbol.for("react.memo_cache_sentinel")) {
                        J = s._("Your camera may be in use by another app. Close it and try again.");
                        t[49] = J;
                    } else {
                        J = t[49];
                    }
                    v = J;
                    break e;
                }
            case "MIC_UNAVAILABLE":
                {
                    let Z;
                    if (t[50] === Symbol.for("react.memo_cache_sentinel")) {
                        Z = s._("Your microphone may be in use by another app. Close it and try again.");
                        t[50] = Z;
                    } else {
                        Z = t[50];
                    }
                    v = Z;
                    break e;
                }
            case "CAMERA_AND_MIC_UNAVAILABLE":
                {
                    let ee;
                    if (t[51] === Symbol.for("react.memo_cache_sentinel")) {
                        ee = s._("Your camera or microphone may be in use by another app. Close it and try again.");
                        t[51] = ee;
                    } else {
                        ee = t[51];
                    }
                    v = ee;
                    break e;
                }
            case "CAMERA_BLOCKED_BY_SYSTEM":
                {
                    let te;
                    if (t[52] !== featureSurface) {
                        te = L("camera", featureSurface);
                        t[52] = featureSurface;
                        t[53] = te;
                    } else {
                        te = t[53];
                    }
                    v = te;
                    break e;
                }
            case "MIC_BLOCKED_BY_SYSTEM":
                {
                    let ne;
                    if (t[54] !== featureSurface) {
                        ne = L("microphone", featureSurface);
                        t[54] = featureSurface;
                        t[55] = ne;
                    } else {
                        ne = t[55];
                    }
                    v = ne;
                    break e;
                }
            case "CAMERA_AND_MIC_BLOCKED_BY_SYSTEM":
                {
                    let re;
                    if (t[56] !== featureSurface) {
                        re = L("camera_and_microphone", featureSurface);
                        t[56] = featureSurface;
                        t[57] = re;
                    } else {
                        re = t[57];
                    }
                    v = re;
                    break e;
                }
            case "CAMERA":
                {
                    if (!(featureSurface in f)) {
                        throw r("err")(`CAMERA: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let oe;
                        if (t[58] !== featureSurface) {
                            let ae;
                            const Component = o("WAWebExternalLink.react").ExternalLink;
                            oe = (ae = s._enum(featureSurface, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum")), s._("_j{\"PHOTO_CAPTURE\":\"To take photos, WhatsApp needs access to your computer's camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.\",\"VOIP\":\"To make calls, WhatsApp needs access to your computer's camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.\",\"VOIP_VIDEO_UPGRADE\":\"To share your video, WhatsApp needs access to your computer's camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.\"}", [
                                ae,
                                s._implicitParam("=m5", <Component href={o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam}>{s._("_j{\"PHOTO_CAPTURE\":\"here\",\"VOIP\":\"here\",\"VOIP_VIDEO_UPGRADE\":\"here\"}", [
                                    ae
                                ])}</Component>)
                            ]));
                            t[58] = featureSurface;
                            t[59] = oe;
                        } else {
                            oe = t[59];
                        }
                        v = oe;
                        break e;
                    }
                    let ie;
                    if (t[60] !== featureSurface) {
                        ie = s._("_j{\"PHOTO_CAPTURE\":\"To take photos, click Allow above to give WhatsApp access to your computer's camera.\",\"VOIP\":\"To make calls, click Allow above to give WhatsApp access to your computer's camera.\",\"VOIP_VIDEO_UPGRADE\":\"To share your video, click Allow above to give WhatsApp access to your computer's camera.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"))
                        ]);
                        t[60] = featureSurface;
                        t[61] = ie;
                    } else {
                        ie = t[61];
                    }
                    v = ie;
                    break e;
                }
            case "MIC":
                {
                    if (!(featureSurface in _)) {
                        throw r("err")(`MIC: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let le;
                        if (t[62] !== featureSurface) {
                            le = s._("_j{\"VOICE_MESSAGES\":\"To record voice messages, click \\\"Yes\\\" to let WhatsApp access your computer's microphone.\",\"VOIP\":\"To make calls, click \\\"Yes\\\" to let WhatsApp access your computer's microphone.\",\"VOIP_ACTIVE\":\"To continue this call, click \\\"Yes\\\" to let WhatsApp access your computer's microphone.\"}", [
                                s._enum(featureSurface, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))
                            ]);
                            t[62] = featureSurface;
                            t[63] = le;
                        } else {
                            le = t[63];
                        }
                        v = le;
                        break e;
                    }
                    let se;
                    if (t[64] !== featureSurface) {
                        se = s._("_j{\"VOICE_MESSAGES\":\"To record voice messages, click Allow above to give WhatsApp access to your computer's microphone.\",\"VOIP\":\"To make calls, click Allow above to give WhatsApp access to your computer's microphone.\",\"VOIP_ACTIVE\":\"To continue this call, click Allow above to give WhatsApp access to your computer's microphone.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"))
                        ]);
                        t[64] = featureSurface;
                        t[65] = se;
                    } else {
                        se = t[65];
                    }
                    v = se;
                    break e;
                }
            case "CAMERA_AND_MIC":
                {
                    if (!(featureSurface in g)) {
                        throw r("err")(`CAMERA_AND_MIC: Invalid feature surface: ${featureSurface}`);
                    }
                    if (r("WAWebEnvironment").isWindows) {
                        let ue;
                        if (t[66] !== featureSurface) {
                            let ce;
                            const Component = o("WAWebExternalLink.react").ExternalLink;
                            ue = (ce = s._enum(featureSurface, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum")), s._("_j{\"VOIP\":\"To make calls, WhatsApp needs access to your computer's camera and microphone. Please go to your privacy settings and allow camera and microphone access for this app. Click {=m5} to open the settings.\"}", [
                                ce,
                                s._implicitParam("=m5", <Component href={o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS.privacy_webcam}>{s._("_j{\"VOIP\":\"here\"}", [
                                    ce
                                ])}</Component>)
                            ]));
                            t[66] = featureSurface;
                            t[67] = ue;
                        } else {
                            ue = t[67];
                        }
                        v = ue;
                        break e;
                    }
                    let de;
                    if (t[68] !== featureSurface) {
                        de = s._("_j{\"VOIP\":\"To make calls, click \\\"Allow\\\" above to give WhatsApp access to your computer's camera and microphone.\"}", [
                            s._enum(featureSurface, r("WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum"))
                        ]);
                        t[68] = featureSurface;
                        t[69] = de;
                    } else {
                        de = t[69];
                    }
                    v = de;
                    break e;
                }
            case "POPUPS_BLOCKED":
                {
                    let me;
                    if (t[70] === Symbol.for("react.memo_cache_sentinel")) {
                        me = browser === "safari" ? s._("To open calls in a separate window, allow pop-ups for this site in your browser's preferences → websites → pop-up windows.") : s._("To open calls in a separate window, allow pop-ups for this site in your browser settings.");
                        t[70] = me;
                    } else {
                        me = t[70];
                    }
                    v = me;
                    break e;
                }
            case "SCREEN_SHARE_FAIL":
                {
                    let pe;
                    if (t[71] === Symbol.for("react.memo_cache_sentinel")) {
                        pe = browser === "safari" ? s._("To share your screen, allow WhatsApp access to screen sharing in Safari settings. In the menu bar, navigate to Safari → Settings → Websites → Screen Sharing and allow WhatsApp. You can also try restarting Safari.") : s._("To share your screen, allow WhatsApp access to screen sharing in your browser settings.");
                        t[71] = pe;
                    } else {
                        pe = t[71];
                    }
                    v = pe;
                    break e;
                }
            case "VIDEO_UPGRADE_FAIL":
                {
                    let _e;
                    if (t[72] === Symbol.for("react.memo_cache_sentinel")) {
                        _e = s._("Something went wrong while switching to video. Please try again.");
                        t[72] = _e;
                    } else {
                        _e = t[72];
                    }
                    v = _e;
                    break e;
                }
            default:
                throw r("err")(`Invalid messaging type: ${messaging}`);
        }
        let fe;
        if (t[73] !== colorName || t[74] !== v) {
            const Component = r("WDSText.react");
            fe = <Component colorName={colorName} type="Body2">{v}</Component>;
            t[73] = colorName;
            t[74] = v;
            t[75] = fe;
        } else {
            fe = t[75];
        }
        return fe;
    }
    function L(e, t) {
        return ((n)=>{
            if (n === "mac") {
                return s._("_j{\"camera\":\"Your Mac's privacy settings are blocking your browser. Open System Settings \\u2192 Privacy & Security, allow your browser under Camera, and then restart it.\",\"microphone\":\"Your Mac's privacy settings are blocking your browser. Open System Settings \\u2192 Privacy & Security, allow your browser under Microphone, and then restart it.\",\"camera_and_microphone\":\"Your Mac's privacy settings are blocking your browser. Open System Settings \\u2192 Privacy & Security, allow your browser under both Camera and Microphone, and then restart it.\"}", [
                    s._enum(e, {
                        camera: "Camera",
                        microphone: "Microphone",
                        camera_and_microphone: "both Camera and Microphone"
                    })
                ]);
            }
            if (n === "windows") {
                return <>{s._("_j{\"camera\":\"Your computer's privacy settings are blocking your browser. Open Settings \\u2192 Privacy & security, and under Camera, turn on access, including for desktop apps.\",\"microphone\":\"Your computer's privacy settings are blocking your browser. Open Settings \\u2192 Privacy & security, and under Microphone, turn on access, including for desktop apps.\",\"camera_and_microphone\":\"Your computer's privacy settings are blocking your browser. Open Settings \\u2192 Privacy & security, and under both Camera and Microphone, turn on access, including for desktop apps.\"}", [
                    s._enum(e, {
                        camera: "Camera",
                        microphone: "Microphone",
                        camera_and_microphone: "both Camera and Microphone"
                    })
                ])} {S(t)}</>;
            }
            if (n === "other") {
                return <>{s._("_j{\"camera\":\"Your device's settings are blocking your browser from using the camera. Check your browser's permissions in your device settings.\",\"microphone\":\"Your device's settings are blocking your browser from using the microphone. Check your browser's permissions in your device settings.\",\"camera_and_microphone\":\"Your device's settings are blocking your browser from using the camera and microphone. Check your browser's permissions in your device settings.\"}", [
                    s._enum(e, {
                        camera: "camera",
                        microphone: "microphone",
                        camera_and_microphone: "camera and microphone"
                    })
                ])} {S(t)}</>;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
        })(E());
    }
    L.displayName = `${L.name} [from ${i.id}]`;
    function E() {
        if (o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) {
            return "mac";
        }
        if (o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS) {
            return "windows";
        }
        return "other";
    }
    function k() {
        o("WAWebModalManager").ModalManager.close();
        o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close();
    }
    function I() {
        switch(o("WAWebUA").UA.browser){
            case o("WAWebUA").BROWSER_TYPE.CHROME:
                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationChromeFaqUrl());
            case o("WAWebUA").BROWSER_TYPE.FIREFOX:
                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationFirefoxFaqUrl());
            case o("WAWebUA").BROWSER_TYPE.SAFARI:
                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationSafariFaqUrl());
            case o("WAWebUA").BROWSER_TYPE.OPERA:
                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationOperaFaqUrl());
            case o("WAWebUA").BROWSER_TYPE.EDGE:
                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationEdgeFaqUrl());
            default:
                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNotificationChromeFaqUrl());
        }
    }
    l.Messaging = p;
    l.MicrophoneFeatureSurface = _;
    l.CameraFeatureSurface = f;
    l.CameraAndMicrophoneFeatureSurface = g;
    l.FeatureSurface = h;
    l.GuidePopupType = C;
    l.GuidePopup = b;
    l.guideConfirm = k;
    l.notificationGuideLearnMore = I;
}, 226);