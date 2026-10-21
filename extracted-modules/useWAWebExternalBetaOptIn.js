__d("useWAWebExternalBetaOptIn", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebBuildType",
    "WAWebCmd",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellUtils",
    "WAWebEnvironment",
    "WAWebExternalBetaEvents",
    "WAWebExternalBetaOptInAction",
    "WAWebModalSingleActionOpener",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "cr:9565",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let u;
    let c;
    let d;
    const useState = (d || (d = o("react"))).useState;
    const p = n("cr:9565") ?? {};
    const p_getWindowsBuildType = p.getWindowsBuildType;
    function f() {
        const e = useState(function() {
            if (p_getWindowsBuildType) {
                return p_getWindowsBuildType() === o("WAWebBuildType").BuildType.BETA;
            }
            return o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
        });
        const t = e[0];
        const r = e[1];
        const a = function() {
            if (!p_getWindowsBuildType) {
                r(o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb());
            }
        };
        o("useWAWebListener").useListener(o("WAWebExternalBetaEvents").WAWebExternalBetaEvents, "external_beta_events:opt_in_status_changed", a);
        const i = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!p_getWindowsBuildType) {
                    r(!t);
                    try {
                        yield o("WAWebExternalBetaOptInAction").setOptInBetaAction(!t);
                    } catch (error) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Web Beta: Error while opting in: ",
                            ""
                        ])), error).sendLogs("web beta failed to change opt-in status");
                        o("WAWebModalSingleActionOpener").openSingleActionModal({
                            body: s._("Something went wrong while joining the beta. Please try again.")
                        });
                    }
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        return [
            t,
            i
        ];
    }
    function g() {
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "on_ab_props_update_from_bridge", h);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
            const t = o("WAWebABProps").getABPropConfigValue("external_beta_can_join");
            if (e && !t) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "useExternalBetaOptIn: AB prop does not allow user to join beta. Leaving beta..."
                ])));
                yield o("WAWebExternalBetaOptInAction").setOptInBetaAction(false);
            }
        });
        return y.apply(this, arguments);
    }
    function C() {
        const e = o("react-compiler-runtime").c(1);
        const t = f();
        const n = t[0];
        const a = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck();
        const i = o("useWAWebABPropConfigValue").useABPropConfigValue("web_mac_beta_upsell");
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
            e[0] = l;
        } else {
            l = e[0];
        }
        const s = l;
        let u = false;
        if (i) {
            u = r("WAWebEnvironment").isWeb && n && s === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS && a;
        }
        return u;
    }
    l.useExternalBetaOptIn = f;
    l.useExternalBetaValidator = g;
    l.useMacBetaUpsellOnWeb = C;
}, 226);