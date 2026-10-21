__d("WAWebOutContactInviteAction", [
    "fbt",
    "WALogger",
    "WAWebContactlessChatUtils",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebMexCreateInviteCodeJob",
    "WAWebMexGroupStoreAndSendInviteSmsJob",
    "WAWebMexLogServerSentInviteIntentJob",
    "WAWebOutContactInviteConfirmDialog.react",
    "WAWebOutContactInviteFailureDialog.react",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteJourney",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactLoggingUtils",
    "WAWebOutContactServerSentInviteEligibility",
    "WAWebPhoneNumberSearch",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    function f(e, t, n, r, o) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, onSendStart, o) {
            return b({
                entryPoint: t,
                isNewContact: o,
                isOutContactInvite: true,
                name: n,
                onSendStart,
                phoneNumber: e
            });
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n, r) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, canSend) {
            return b({
                canSend,
                entryPoint: t,
                isOutContactInvite: false,
                name: n,
                phoneNumber: e
            });
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        const t = o("WAWebPhoneNumberSearch").stripInvisibleChars(e);
        return o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(t) && (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable() || o("WAWebOutContactServerSentInviteEligibility").isServerSentInviteEligible(t));
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ canSend, entryPoint, isNewContact, isOutContactInvite, name, onSendStart, phoneNumber }) {
            const c = o("WAWebPhoneNumberSearch").stripInvisibleChars(phoneNumber);
            if (!o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(c)) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sendInvite: invalid phone number format"
                ])));
                return false;
            }
            const isServerSentInvite = o("WAWebOutContactServerSentInviteEligibility").isServerSentInviteEligible(c);
            if (!isServerSentInvite && !S(isOutContactInvite)) {
                return false;
            }
            o("WAWebOutContactLoggingUtils").logOutContactInviteIntent({
                entryPoint,
                isServerSentInvite
            });
            const m = name ?? c;
            const p = isServerSentInvite ? yield R(c, entryPoint, m, isNewContact, canSend) : canSend?.() !== false;
            if (p) {
                onSendStart?.();
                if (isServerSentInvite) {
                    return E(c, entryPoint, m, canSend);
                }
                return $(c, entryPoint, undefined, canSend);
            }
            return false;
        });
        return v.apply(this, arguments);
    }
    function S(isOutContactInvite) {
        if (isOutContactInvite) {
            return o("WAWebOutContactInviteGating").isOutContactInviteEnabled();
        }
        return o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable();
    }
    function R(e, t, n, r, o) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
            if (a?.() === false) {
                return false;
            }
            o("WAWebMexLogServerSentInviteIntentJob").mexLogServerSentInviteIntent(e, t.toString());
            const i = yield r === true ? o("WAWebOutContactInviteConfirmDialog.react").waitForOutContactInviteConfirmDialog(n, e, true) : o("WAWebOutContactInviteConfirmDialog.react").waitForOutContactInviteConfirmDialog(n, e);
            return i && a?.() !== false && o("WAWebOutContactServerSentInviteEligibility").isServerSentInviteEligible(e);
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n, r) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            let i;
            try {
                i = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(e, t.toString(), true);
            } catch (error) {
                return I(e, t, String(error), n, undefined, r);
            }
            const l = i?.errorReason != null && i.errorReason !== "" ? i.errorReason : null;
            const u = i != null && (i.code == null || i.code === "") && l == null;
            if (!u) {
                return I(e, t, l ?? (i == null ? "missing server response" : "invite code returned"), n, i?.code, r);
            }
            o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Invite sent")
            }));
            o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                entryPoint: t,
                isServerSentInvite: true,
                validInviteCode: true
            });
            o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
            return true;
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n, r, o, a) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i) {
            if (i?.() === false) {
                return false;
            }
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite] Server-sent invite unsuccessful: ",
                ""
            ])), n).sendLogs("out-contact-server-sent-invite-failed");
            if (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()) {
                return $(e, t, n, i);
            }
            const l = yield D(e, t, a);
            if (i?.() !== false) {
                o("WAWebOutContactInviteFailureDialog.react").showOutContactInviteFailureDialog(r, l);
                o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                    entryPoint: t,
                    inviteCodeError: n,
                    isServerSentInvite: true,
                    validInviteCode: false
                });
                o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
            }
            return false;
        });
        return T.apply(this, arguments);
    }
    function D(e, t, n) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (n != null && n !== "") {
                return o("WAWebOutContactInviteUtils").getInviteUrl(n);
            }
            try {
                const r = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(e, t.toString(), false);
                return o("WAWebOutContactInviteUtils").getInviteUrl(r?.code);
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite] Could not generate recovery invite link: ",
                    ""
                ])), error).sendLogs("out-contact-server-sent-invite-recovery-link-failed");
                return o("WAWebOutContactInviteUtils").getInviteUrl();
            }
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n, r) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            let a;
            let validInviteCode = false;
            let l = n;
            try {
                const u = yield o("WAWebMexCreateInviteCodeJob").mexCreateInviteCode(e, t.toString(), false);
                const c = u?.code;
                if (c != null) {
                    a = o("WAWebOutContactInviteUtils").getInviteMessageTextWithCode(c);
                    validInviteCode = true;
                } else {
                    a = o("WAWebOutContactInviteUtils").getInviteMessageText();
                }
            } catch (error) {
                if (r?.() === false) {
                    return false;
                }
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite] MEX invite failed, fallback: ",
                    ""
                ])), error);
                o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Couldn't generate invite link. Sending with default link.")
                }));
                l = String(error);
                a = o("WAWebOutContactInviteUtils").getInviteMessageText();
            }
            if (r?.() === false) {
                return false;
            }
            o("WAWebOutContactLoggingUtils").logOneToOneInviteContact({
                entryPoint: t,
                inviteCodeError: l,
                validInviteCode
            });
            o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
            const d = encodeURIComponent(a);
            const p = window.open(`sms:+${e}?body=${d}`);
            N(p == null);
            return p != null;
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        if (e) {
            o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Could not open SMS app")
            }));
        }
    }
    function M(e, t, n, r) {
        if (o("WAWebOutContactInviteGating").isOutContactInviteEnabled()) {
            return w(e, t, n, r);
        }
        return false;
    }
    function w(e, groupJid, n, serverSendFailureReason) {
        const validNumbers = e.map((e)=>o("WAWebPhoneNumberSearch").stripInvisibleChars(e)).filter((e)=>o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(e));
        if (validNumbers.length === 0) {
            return false;
        }
        const i = o("WAWebOutContactInviteUtils").getMultiGroupInviteMessageText();
        const l = encodeURIComponent(i);
        const s = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId();
        o("WAWebOutContactLoggingUtils").logMultiGroupInviteContacts({
            entryPoint: n,
            groupJid,
            serverSendFailureReason,
            sessionId: s,
            validNumbers
        });
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
        const u = validNumbers.map((e)=>`+${e}`).join(",");
        const c = window.open(`sms://open?addresses=${u}&body=${l}`);
        N(c == null);
        return c != null;
    }
    function A(e, t, n) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = e.map((e)=>o("WAWebPhoneNumberSearch").stripInvisibleChars(e)).filter((e)=>o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(e));
            if (!o("WAWebGroupServerSentInviteEligibility").isGroupServerSentInviteEligible(r)) {
                return M(r, t, n);
            }
            const a = r[0];
            const i = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId();
            let l = false;
            let u = "unknown server error";
            try {
                const c = yield o("WAWebMexGroupStoreAndSendInviteSmsJob").mexGroupStoreAndSendInviteSms(t, o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(a)).toString(), n.toString());
                l = c.serverSent;
                if (c.errorCode != null) {
                    u = String(c.errorCode);
                }
            } catch (error) {
                u = String(error);
            }
            if (l) {
                o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Invite sent")
                }));
                o("WAWebOutContactLoggingUtils").logGroupInviteContact({
                    entryPoint: n,
                    isServerSentInvite: true,
                    sessionId: i
                });
                o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
                return true;
            }
            return O(r, t, n, i, u);
        });
        return F.apply(this, arguments);
    }
    function O(t, n, r, a, i) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[out-contact-invite] Server-sent group invite unsuccessful: ",
            ""
        ])), i).sendLogs("out-contact-group-server-sent-invite-failed");
        if (o("WAWebOutContactInviteGating").isNativeSmsFallbackAvailable()) {
            return w(t, n, r, i);
        }
        o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Could not send invite")
        }));
        o("WAWebOutContactLoggingUtils").logGroupInviteContact({
            entryPoint: r,
            inviteCodeError: i,
            isServerSentInvite: true,
            sessionId: a
        });
        o("WAWebOutContactInviteJourney").clearOutContactInviteJourney();
        return false;
    }
    l.sendInvite = f;
    l.sendDeactivatedUserInvite = h;
    l.isDeactivatedUserInviteAvailable = C;
    l.sendMultiGroupInvite = M;
    l.sendServerSentGroupInvite = A;
}, 226);