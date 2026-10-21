__d("WAWebExternalLink.react", [
    "$InternalEnum",
    "WALogger",
    "WAUnicodeUtils",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMuseCtaLinkOverride",
    "WAWebURLUtils",
    "WDSFocusStateStyles",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        "href"
    ];
    const c = [
        "className",
        "dataTab",
        "dir",
        "rel",
        "target"
    ];
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { memo: f, useRef: g } = _;
    const h = /\u2066|\u2067|\u2068|\u2069|\u202A|\u202B|\u202C|\u202D|\u202E/g;
    const y = 64;
    const C = 32;
    const b = {
        hoverUnderline: {
            fontWeight: "x1xlr1w8",
            ":hover_textDecoration": "xt0b8zv",
            ":focus-visible_textDecoration": "xbvygy2",
            ":focus-visible_color": "x17f7hit",
            ":focus-visible_backgroundColor": "xp30eni",
            ":focus-visible_textUnderlineOffset": "xhmieyt",
            $$css: true
        }
    };
    function v(e) {
        const t = o("react-compiler-runtime").c(28);
        const n = g();
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    n.current?.click();
                }
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        const { "aria-label": l, children: s, className: u, "data-tab": c, href: m, isLongTemplateUrl: _, onClick: f, tabIndex: h, testid: v, xstyle: R } = e;
        let L;
        if (t[1] !== u || t[2] !== R) {
            L = o("WAWebClassnames").classnamesConvertMeToStylexPlease(u, (d || (d = r("stylex")))(b.hoverUnderline, R));
            t[1] = u;
            t[2] = R;
            t[3] = L;
        } else {
            L = t[3];
        }
        const E = L;
        if (_) {
            let k;
            if (t[4] !== m) {
                k = o("WAUnicodeUtils").substring(m, 0, y);
                t[4] = m;
                t[5] = k;
            } else {
                k = t[5];
            }
            let I;
            if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                I = <span>…</span>;
                t[6] = I;
            } else {
                I = t[6];
            }
            const T = m.length - C;
            let D;
            if (t[7] !== m || t[8] !== T) {
                D = o("WAUnicodeUtils").substring(m, T, m.length);
                t[7] = m;
                t[8] = T;
                t[9] = D;
            } else {
                D = t[9];
            }
            let x;
            if (t[10] !== l || t[11] !== E || t[12] !== c || t[13] !== m || t[14] !== f || t[15] !== k || t[16] !== D || t[17] !== h) {
                x = <S ref={n} className={E} href={m} onClick={f} onKeyDown={i} data-tab={c} tabIndex={h} aria-label={l}>{k}{I}{D}</S>;
                t[10] = l;
                t[11] = E;
                t[12] = c;
                t[13] = m;
                t[14] = f;
                t[15] = k;
                t[16] = D;
                t[17] = h;
                t[18] = x;
            } else {
                x = t[18];
            }
            return x;
        }
        let $;
        if (t[19] !== l || t[20] !== s || t[21] !== E || t[22] !== c || t[23] !== m || t[24] !== f || t[25] !== h || t[26] !== v) {
            $ = <S ref={n} className={E} href={m} onClick={f} onKeyDown={i} data-testid={v} data-tab={c} tabIndex={h} aria-label={l}>{s}</S>;
            t[19] = l;
            t[20] = s;
            t[21] = E;
            t[22] = c;
            t[23] = m;
            t[24] = f;
            t[25] = h;
            t[26] = v;
            t[27] = $;
        } else {
            $ = t[27];
        }
        return $;
    }
    function S(t) {
        const n = t.href;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const { className: i, dataTab: l, dir: s, rel: m, target: _ } = a;
        const f = babelHelpers.objectWithoutPropertiesLoose(a, c);
        if (!r("isStringNullOrEmpty")(n) && !F.includes(n) && !r("WAWebURLUtils").hasValidUrlScheme(n)) {
            if (n.toLowerCase().startsWith("javascript:")) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Bad url: ",
                    ""
                ])), n).sendLogs("URL error");
            }
            return null;
        }
        const g = n != null ? n.replaceAll(h, "") : null;
        return <a {...babelHelpers.extends({
            tabIndex: l != null ? 0 : void 0,
            "data-tab": l,
            href: g,
            target: "_blank",
            rel: "noopener noreferrer",
            dir: "ltr",
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(i, (d || (d = r("stylex")))(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus))
        }, f)}/>;
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    const R = f(v);
    const L = {
        qr_slim_banner: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=qr_slim_banner",
        qr_large_banner: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=qr_large_banner",
        link_device_banner_3: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=link_device_banner",
        intro_panel: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=intro_panel",
        chatlist_toastbar: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=chatlist_toastbar",
        search_results_toastbar: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=search_results_toastbar",
        call_btn_modal_2: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=call_btn_modal",
        chatlist_dropdown_menu: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=chatlist_dropdown_menu",
        missed_call_modal_2: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=missed_call_modal",
        microphone_settings: "ms-settings:privacy-microphone"
    };
    const E = {
        qr_slim_banner: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=qr_slim_banner",
        qr_large_banner: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=qr_large_banner",
        link_device_banner_3: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=a0269b",
        intro_panel: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=68a40a",
        chatlist_toastbar: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=dea681",
        search_results_toastbar: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=586f03",
        call_btn_modal_2: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=1f9c76",
        chatlist_dropdown_menu: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=cc3981",
        missed_call_modal_2: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=5721b2"
    };
    const k = {
        notification_settings: "ms-settings:notifications",
        microphone_settings: "ms-settings:privacy-microphone",
        startup_apps: "ms-settings:startupapps",
        windows_update: "ms-settings:windowsupdate",
        privacy_webcam: "ms-settings:privacy-webcam"
    };
    const I = {
        notification_settings: "x-apple.systempreferences:com.apple.preference.notifications"
    };
    const T = {
        qr_slim_banner: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_qr_slim_banner&mt=8",
        qr_large_banner: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_qr_large_banner&mt=8",
        link_device_banner_3: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_linking_screen_refresh&mt=8",
        intro_panel: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_empty_state&mt=8",
        chatlist_toastbar: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_chat_overflow&mt=8",
        search_results_toastbar: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_search&mt=8",
        call_btn_modal_2: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_call_button&mt=8",
        chatlist_dropdown_menu: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_chat_inbox&mt=8",
        missed_call_modal_2: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_missed_call&mt=8"
    };
    const D = {
        touchscreen_overlay: "https://play.google.com/store/apps/details?id=com.whatsapp&referrer=utm_source%3Dwhatsapp_web%26utm_campaign%3Dweb2android_touchscreen_overlay"
    };
    const x = {
        touchscreen_overlay: "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2ios_touchscreen_overlay&mt=8"
    };
    const $ = "munki://detail-WhatsAppCatalyst.html";
    const P = "https://dev-web.whatsapp.com/desktop/mac_native/release/";
    const N = "https://web.whatsapp.com/desktop/mac_native/release?configuration=Release";
    const M = "https://web.whatsapp.com";
    const w = "whatsapp://send/";
    const A = "https://web.whatsapp.com/desktop/mac_native/release/?configuration=Beta&branch=master";
    var F = [].concat(Object.values(L), Object.values(E), Object.values(k), Object.values(I), Object.values(T), Object.values(D), Object.values(x), [
        $,
        P,
        N,
        M,
        w,
        A
    ]);
    let O = false;
    function B() {
        return O;
    }
    const W = n("$InternalEnum").Mirrored([
        "NEW_TAB",
        "CURRENT_TAB",
        "DEEPLINK_IN_CURRENT_TAB"
    ]);
    function q(e, t) {
        const n = o("WAWebMuseCtaLinkOverride").overrideCtaUrlIfNeeded(e);
        const r = U(n);
        if (r === "") {
            if (n.toLowerCase().startsWith("javascript:")) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Bad url: ",
                    ""
                ])), n).sendLogs("URL error");
            }
            return;
        }
        const a = t ?? {};
        const i = a.allowReferrer;
        const l = i === void 0 ? false : i;
        const u = a.target;
        const c = u === void 0 ? W.NEW_TAB : u;
        const d = a.targetName;
        if (!(d != null && (!l || !/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(d)))) {
            const m = document.createElement("a");
            m.href = r;
            if (d != null) {
                m.target = d;
            } else if (c === W.NEW_TAB) {
                m.target = "_blank";
            } else if (c === W.CURRENT_TAB) {
                m.target = "_self";
            } else if (c === W.DEEPLINK_IN_CURRENT_TAB) {
                O = true;
            }
            if (!l) {
                m.rel = "noopener noreferrer";
            }
            m.style.display = "none";
            if (t?.noApiCmdHandling === true) {
                m.dataset.nohandle = "true";
            }
            if (document.body) {
                document.body.appendChild(m);
            }
            m.click();
            if (document.body) {
                document.body.removeChild(m);
            }
            if (c === W.DEEPLINK_IN_CURRENT_TAB) {
                self.setTimeout(function() {
                    O = false;
                }, 1000);
            }
        }
    }
    function U(e) {
        if (F.includes(e) || r("WAWebURLUtils").hasValidUrlScheme(e)) {
            return e;
        }
        return "";
    }
    l.ExternalLinkEl = S;
    l.ExternalLink = R;
    l.WINDOWS_SIDELOAD_URIS = L;
    l.WINDOWS_SETTINGS_URIS = k;
    l.MAC_SETTINGS_URIS = I;
    l.ANDROID_STORE_URIS = D;
    l.IOS_STORE_URIS = x;
    l.MAC_EXTERNAL_SIDELOAD_URI = N;
    l.MAC_EXTERNAL_SIDELOAD_URI_BETA = A;
    l.isOpeningDeeplinkInCurrentTab = B;
    l.ExternalLinkTarget = W;
    l.openExternalLink = q;
}, 98);