__d("WAWebSettingsStepIcon.react", [
    "WAWebSettingsConst",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcBrightnessMedium.react",
    "WDSIconIcBugReport.react",
    "WDSIconIcComputer.react",
    "WDSIconIcDescription.react",
    "WDSIconIcDownload.react",
    "WDSIconIcHelp.react",
    "WDSIconIcInfo.react",
    "WDSIconIcKey.react",
    "WDSIconIcKeyboard.react",
    "WDSIconIcLock.react",
    "WDSIconIcLogout.react",
    "WDSIconIcMessageReport.react",
    "WDSIconIcNotifications.react",
    "WDSIconIcPalette.react",
    "WDSIconIcSecurity.react",
    "WDSIconIcSmartToy.react",
    "WDSIconIcStore.react",
    "WDSIconIcSwitchAccount.react",
    "WDSIconIcSync.react",
    "WDSIconIcSyncAlt.react",
    "WDSIconIcVideocam.react",
    "WDSIconIcWallpaper.react",
    "WDSIconIcWarning.react",
    "WDSIconWdsIc3PAiBot.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcCurrencyReal.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_setting = e.setting;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "xhslqc4"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_setting) {
            a = <div {...babelHelpers.extends({}, r, {
                children: <C4 setting={e_setting}/>
            })}/>;
            t[1] = e_setting;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function C4(e) {
        const t = o("react-compiler-runtime").c(28);
        const e_setting = e.setting;
        switch(e_setting){
            case o("WAWebSettingsConst").SettingsSteps.BusinessTools:
                {
                    let a;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        a = s.jsx(r("WDSIconIcStore.react"), {});
                        t[0] = a;
                    } else {
                        a = t[0];
                    }
                    return a;
                }
            case o("WAWebSettingsConst").SettingsSteps.DataSharing:
                {
                    let i;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        i = s.jsx(r("WDSIconIcSyncAlt.react"), {
                            testid: "transfer-refreshed",
                            height: 24,
                            width: 24
                        });
                        t[1] = i;
                    } else {
                        i = t[1];
                    }
                    return i;
                }
            case o("WAWebSettingsConst").SettingsSteps.Notifications:
                {
                    let l;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        l = s.jsx(r("WDSIconIcNotifications.react"), {});
                        t[2] = l;
                    } else {
                        l = t[2];
                    }
                    return l;
                }
            case o("WAWebSettingsConst").SettingsSteps.PaymentsHome:
                {
                    let u;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        u = s.jsx(r("WDSIconWdsIcCurrencyReal.react"), {});
                        t[3] = u;
                    } else {
                        u = t[3];
                    }
                    return u;
                }
            case o("WAWebSettingsConst").SettingsSteps.PrivacySettings:
                {
                    let c;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        c = s.jsx(r("WDSIconIcLock.react"), {});
                        t[4] = c;
                    } else {
                        c = t[4];
                    }
                    return c;
                }
            case o("WAWebSettingsConst").SettingsSteps.Security:
                {
                    let d;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        d = s.jsx(r("WDSIconIcSecurity.react"), {});
                        t[5] = d;
                    } else {
                        d = t[5];
                    }
                    return d;
                }
            case o("WAWebSettingsConst").SettingsSteps.Wallpaper:
                {
                    let m;
                    if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                        m = s.jsx(r("WDSIconIcWallpaper.react"), {});
                        t[6] = m;
                    } else {
                        m = t[6];
                    }
                    return m;
                }
            case o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload:
                {
                    let p;
                    if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                        p = s.jsx(r("WDSIconIcDownload.react"), {
                            width: 24,
                            height: 24
                        });
                        t[7] = p;
                    } else {
                        p = t[7];
                    }
                    return p;
                }
            case o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings:
                {
                    let _;
                    if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                        _ = s.jsx(r("WDSIconIcDescription.react"), {});
                        t[8] = _;
                    } else {
                        _ = t[8];
                    }
                    return _;
                }
            case o("WAWebSettingsConst").SettingsSteps.Help:
                {
                    let f;
                    if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                        f = s.jsx(r("WDSIconIcHelp.react"), {});
                        t[9] = f;
                    } else {
                        f = t[9];
                    }
                    return f;
                }
            case o("WAWebSettingsConst").SettingsSteps.Bugnub:
                {
                    let g;
                    if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
                        g = s.jsx(r("WDSIconIcBugReport.react"), {});
                        t[10] = g;
                    } else {
                        g = t[10];
                    }
                    return g;
                }
            case o("WAWebSettingsConst").SettingsSteps.DownloadLogs:
                {
                    let h;
                    if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
                        h = s.jsx(r("WDSIconIcDownload.react"), {
                            width: 24,
                            height: 24
                        });
                        t[11] = h;
                    } else {
                        h = t[11];
                    }
                    return h;
                }
            case o("WAWebSettingsConst").SettingsSteps.Developer:
            case o("WAWebSettingsConst").SettingsSteps.DeveloperABProps:
            case o("WAWebSettingsConst").SettingsSteps.DeveloperGroupABProps:
            case o("WAWebSettingsConst").SettingsSteps.DeveloperInfraSettings:
            case o("WAWebSettingsConst").SettingsSteps.DeveloperWWWSettings:
            case o("WAWebSettingsConst").SettingsSteps.DeveloperLabyrinthDebug:
                {
                    let y;
                    if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
                        y = s.jsx(r("WDSIconIcSmartToy.react"), {
                            height: 24,
                            width: 24
                        });
                        t[12] = y;
                    } else {
                        y = t[12];
                    }
                    return y;
                }
            case o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts:
                {
                    let C;
                    if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
                        C = s.jsx(r("WDSIconIcKeyboard.react"), {});
                        t[13] = C;
                    } else {
                        C = t[13];
                    }
                    return C;
                }
            case o("WAWebSettingsConst").SettingsSteps.Theme:
                {
                    let b;
                    if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                        b = s.jsx(r("WDSIconIcBrightnessMedium.react"), {});
                        t[14] = b;
                    } else {
                        b = t[14];
                    }
                    return b;
                }
            case o("WAWebSettingsConst").SettingsSteps.Logout:
                {
                    let v;
                    if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
                        v = s.jsx(r("WDSIconIcLogout.react"), {
                            colorName: "secondaryNegative"
                        });
                        t[15] = v;
                    } else {
                        v = t[15];
                    }
                    return v;
                }
            case o("WAWebSettingsConst").SettingsSteps.NewsletterReports:
                {
                    let S;
                    if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
                        S = s.jsx(r("WDSIconIcMessageReport.react"), {
                            testid: "message-report-refreshed"
                        });
                        t[16] = S;
                    } else {
                        S = t[16];
                    }
                    return S;
                }
            case o("WAWebSettingsConst").SettingsSteps.Account:
                {
                    let R;
                    if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
                        R = s.jsx(r("WDSIconIcKey.react"), {});
                        t[17] = R;
                    } else {
                        R = t[17];
                    }
                    return R;
                }
            case o("WAWebSettingsConst").SettingsSteps.Profile:
                {
                    let L;
                    if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
                        L = s.jsx(r("WDSIconIcAccountCircle.react"), {});
                        t[18] = L;
                    } else {
                        L = t[18];
                    }
                    return L;
                }
            case o("WAWebSettingsConst").SettingsSteps.Chats:
                {
                    let E;
                    if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
                        E = s.jsx(r("WDSIconWdsIcChat.react"), {});
                        t[19] = E;
                    } else {
                        E = t[19];
                    }
                    return E;
                }
            case o("WAWebSettingsConst").SettingsSteps.Appearance:
                {
                    let k;
                    if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
                        k = s.jsx(r("WDSIconIcPalette.react"), {});
                        t[20] = k;
                    } else {
                        k = t[20];
                    }
                    return k;
                }
            case o("WAWebSettingsConst").SettingsSteps.DeleteAccount:
                {
                    let I;
                    if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
                        I = s.jsx(r("WDSIconIcInfo.react"), {
                            testid: "info-refreshed"
                        });
                        t[21] = I;
                    } else {
                        I = t[21];
                    }
                    return I;
                }
            case o("WAWebSettingsConst").SettingsSteps.Lists:
                {
                    let T;
                    if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
                        T = s.jsx(r("WDSIconIcSwitchAccount.react"), {
                            testid: "list-people"
                        });
                        t[22] = T;
                    } else {
                        T = t[22];
                    }
                    return T;
                }
            case o("WAWebSettingsConst").SettingsSteps.Agents:
                {
                    let D;
                    if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
                        D = s.jsx(r("WDSIconWdsIc3PAiBot.react"), {});
                        t[23] = D;
                    } else {
                        D = t[23];
                    }
                    return D;
                }
            case o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings:
                {
                    let x;
                    if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
                        x = s.jsx(r("WDSIconIcComputer.react"), {
                            height: 24,
                            width: 24
                        });
                        t[24] = x;
                    } else {
                        x = t[24];
                    }
                    return x;
                }
            case o("WAWebSettingsConst").SettingsSteps.WinDevicesSettings:
                {
                    let $;
                    if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
                        $ = s.jsx(r("WDSIconIcVideocam.react"), {
                            height: 24,
                            width: 24
                        });
                        t[25] = $;
                    } else {
                        $ = t[25];
                    }
                    return $;
                }
            case o("WAWebSettingsConst").SettingsSteps.HistorySyncPaused:
                {
                    let P;
                    if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
                        P = s.jsx(r("WDSIconIcWarning.react"), {
                            colorName: "secondaryWarning"
                        });
                        t[26] = P;
                    } else {
                        P = t[26];
                    }
                    return P;
                }
            case o("WAWebSettingsConst").SettingsSteps.HistorySyncInProgress:
                {
                    let N;
                    if (t[27] === Symbol.for("react.memo_cache_sentinel")) {
                        N = s.jsx(r("WDSIconIcSync.react"), {
                            height: 24,
                            width: 24
                        });
                        t[27] = N;
                    } else {
                        N = t[27];
                    }
                    return N;
                }
            default:
                return null;
        }
    }
    l.default = u;
}, 98);