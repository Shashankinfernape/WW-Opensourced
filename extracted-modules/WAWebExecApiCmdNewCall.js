__d("WAWebExecApiCmdNewCall", [
    "WALogger",
    "WAWebCmd",
    "WAWebCoreActionsODS",
    "WAWebDialerPadFlowLoadable",
    "WAWebDrawerManager",
    "WAWebExecApiCmdHelpers",
    "WAWebKeyboardTabUtils",
    "WAWebLidMigrationUtils",
    "WAWebNavBarTypes",
    "WAWebQueryExistsJob",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipOutgoingCallConsent",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(t) {
        const n = t?.lid;
        const a = t?.phone;
        const i = t?.video === true;
        const fromDefaultProtocol = t?.fromDefaultProtocol;
        if (r("isStringNullOrEmpty")(n)) {
            if (r("isStringNullOrEmpty")(a)) {
                o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Calls);
                o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(d.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
                    entryPoint: "calls_tab"
                }), {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            } else {
                const c = a.trim().replace(/\D/g, "");
                if (c.length === 0) {
                    o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                    return;
                }
                const m = `+${c}`;
                let _;
                try {
                    _ = o("WAWebWidFactory").createUserWidOrThrow(`${c}@c.us`);
                } catch (e) {
                    o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                    return;
                }
                p({
                    fromDefaultProtocol,
                    isVideo: i,
                    lookup: function() {
                        return o("WAWebQueryExistsJob").queryPhoneExists(m);
                    },
                    peerWid: _
                }).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Default protocol call via phone failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("default-protocol-call-phone-failed");
                    o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                });
            }
        } else {
            let u;
            try {
                u = o("WAWebWidFactory").createUserLidOrThrow(n);
            } catch (e) {
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                return;
            }
            p({
                fromDefaultProtocol,
                isVideo: i,
                lookup: function() {
                    return o("WAWebQueryExistsJob").queryWidExists(u);
                },
                peerWid: u
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Default protocol call via LID failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("default-protocol-call-lid-failed");
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
            });
        }
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ fromDefaultProtocol, isVideo, lookup, peerWid }) {
            if (!o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(peerWid, "before_ask")) {
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, true);
                return;
            }
            if (!(yield o("WAWebVoipOutgoingCallConsent").confirmDeepLinkCall(peerWid, isVideo))) {
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, true);
                return;
            }
            if (!o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(peerWid, "after_ask")) {
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, true);
                return;
            }
            o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Calls);
            o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
            const i = yield lookup();
            if (i == null) {
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                return;
            }
            if (!f(peerWid, i.wid)) {
                o("WAWebCoreActionsODS").logDeepLinkCallPeerMismatch();
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "New call deep link: lookup resolved a different peer than the one confirmed"
                ]))).sendLogs("new-call-deep-link-peer-mismatch");
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                return;
            }
            if (!o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(i.wid, "after_ask")) {
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, true);
                return;
            }
            yield o("WAWebVoipStartCall").startWAWebVoipCall(i.wid, isVideo, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_PHONE_NUMBER_DEEPLINK, 0, null, {
                entryTrust: "user_gesture"
            });
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, true);
        });
        return _.apply(this, arguments);
    }
    function f(peerWid, wid) {
        if (peerWid.equals(wid)) {
            return true;
        }
        const n = o("WAWebLidMigrationUtils").toLid(peerWid);
        return n == null || n.equals(wid);
    }
    l.handleNewCallDeeplink = m;
}, 98);