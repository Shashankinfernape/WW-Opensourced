__d("WAWebVoipOutgoingCallConsent", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebBlocklistCollection",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCoreActionsODS",
    "WAWebLidMigrationUtils",
    "WAWebVoipCallBlockedModals",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "WAWebWidToJid",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const okInputGuardMs = 500;
    function _(e, t) {
        const n = t === "before_ask" ? o("WAWebCoreActionsODS").logDeepLinkCallNotAllowed : o("WAWebCoreActionsODS").logDeepLinkCallRefusedAfterAsk;
        if (r("WAWebCallCollection").activeCall != null) {
            n();
            o("WAWebVoipCallBlockedModals").showEndCurrentCallToast();
            return false;
        }
        if (f(e)) {
            n();
            return false;
        }
        return true;
    }
    function f(e) {
        if (o("WAWebBlocklistCollection").BlocklistCollection.get(e) != null) {
            return true;
        }
        const t = o("WAWebLidMigrationUtils").toLid(e);
        return t != null && o("WAWebBlocklistCollection").BlocklistCollection.get(t) != null;
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            o("WAWebCoreActionsODS").logDeepLinkCallConfirmShown();
            try {
                const a = yield v(t);
                const i = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                    okInputGuardMs,
                    onOkInputGuarded: o("WAWebCoreActionsODS").logDeepLinkCallConfirmGuardSwallowed,
                    okIcon: r(n ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"),
                    okText: n ? s._("Video call") : s._("Voice call"),
                    children: BComponent(a),
                    title: C(a, n)
                });
                if (i) {
                    o("WAWebCoreActionsODS").logDeepLinkCallConfirmAccepted();
                } else {
                    o("WAWebCoreActionsODS").logDeepLinkCallConfirmDeclined();
                }
                return i;
            } catch (error) {
                o("WAWebCoreActionsODS").logDeepLinkCallConfirmDeclined();
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: deep-link call confirmation did not resolve"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("deep-link-call-confirm-failed");
                return false;
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t, r) {
        if (e === "user_gesture") {
            return (c || (c = n("Promise"))).resolve(true);
        }
        return g(t, r);
    }
    function C({ title }, t) {
        if (t) {
            return s._("Start a WhatsApp video call with {name}?", [
                s._param("name", title)
            ]);
        }
        return s._("Start a WhatsApp call with {name}?", [
            s._param("name", title)
        ]);
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function BComponent(e) {
        if (e.name == null || e.number == null) {
            return null;
        }
        const Component = r("WDSText.react");
        return <Component type="Body2" colorName="contentDeemphasized" textAlign="center" testid="voip_deeplink_confirm_peer_number">{e.number}</Component>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const number = R(e);
            if (number == null) {
                return {
                    name: null,
                    number: null,
                    title: o("WAWebWidFormat").getUnknownUserOrNumber()
                };
            }
            const n = yield L(e);
            return {
                name: n,
                number,
                title: n ?? number
            };
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        if (e.isLid()) {
            const t = o("WAWebApiContact").getPnIfLidIsLatestMapping(o("WAWebWidFactory").asUserLidOrThrow(e));
            if (t != null) {
                return o("WAWebWidFormat").widToFormattedUser(t);
            }
            return null;
        }
        if (e.isRegularUserPn() && !e.isHosted()) {
            return o("WAWebWidFormat").widToFormattedUser(e);
        }
        return null;
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.isLid() ? o("WAWebLidMigrationUtils").toPn(e) : o("WAWebLidMigrationUtils").toLid(e);
            const r = t != null && !t.equals(e) ? [
                e,
                t
            ] : [
                e
            ];
            const a = yield (c || (c = n("Promise"))).all(r.map(k));
            const i = a.find((e)=>e != null);
            if (i != null && !r.some((e)=>T(e, i))) {
                return i;
            }
            return null;
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebContactCollection").ContactCollection.get(e);
            if (t == null) {
                return null;
            }
            const n = o("WAWebContactGetters").getName(t);
            if (n == null || n === "") {
                return null;
            }
            try {
                const a = o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(e));
                if (yield o("WAWebApiContact").isAddressBookContact(a)) {
                    return n;
                }
                return null;
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: deep-link call could not read address-book membership"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("deep-link-call-address-book-read-failed");
                return null;
            }
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        const n = o("WAWebContactCollection").ContactCollection.get(e);
        return n != null && t === o("WAWebContactGetters").getVerifiedName(n);
    }
    l.canStartDeepLinkCall = _;
    l.confirmDeepLinkCall = g;
    l.hasOutgoingCallConsent = y;
}, 226);