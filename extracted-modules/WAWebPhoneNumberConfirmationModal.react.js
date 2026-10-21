__d("WAWebPhoneNumberConfirmationModal.react", [
    "fbt",
    "WACcToIso",
    "WAIsoToCc",
    "WAPhoneFindCC",
    "WAWebConfirmationModal.react",
    "WAWebFlex.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLinkDevicePhoneNumberEntryScreen.react",
    "react",
    "react-compiler-runtime",
    "useWAWebConfirmationActions"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useRef, useState } = c;
    const _ = {
        marginTop10: {
            marginTop: "x1anpbxc",
            $$css: true
        }
    };
    const f = {
        error: {
            color: "x30a034",
            fontSize: "x1nxh6w3",
            $$css: true
        }
    };
    function g(e) {
        const t = o("react-compiler-runtime").c(28);
        const { actions, actionText, actionType, contentText, mePn, onCancel, onCompletion, successText, tsNavigationData } = e;
        const C = r("useWAWebConfirmationActions")(actions, onCompletion, successText);
        const { actionFailure, failureText, isRunningAction, runActions } = C;
        const L = useState(false);
        const shouldDisplayError = L[0];
        const k = L[1];
        let I;
        if (t[0] !== mePn.user) {
            I = function() {
                const e = o("WAPhoneFindCC").findCC(mePn.user);
                return r("WACcToIso")[parseInt(e, 10)];
            };
            t[0] = mePn.user;
            t[1] = I;
        } else {
            I = t[1];
        }
        const T = useState(I);
        const D = T[0];
        const x = T[1];
        const $ = useState("");
        const P = $[0];
        const N = $[1];
        const MRef = useRef(null);
        let w;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            w = function(t, n) {
                k(false);
                x(t);
                N(n);
            };
            t[2] = w;
        } else {
            w = t[2];
        }
        const A = w;
        let F;
        if (t[3] !== mePn.user || t[4] !== P || t[5] !== runActions || t[6] !== D) {
            F = function() {
                if (D != null && o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(r("WAIsoToCc")[D], P)) {
                    const t = `${r("WAIsoToCc")[D]}${P}`;
                    if (t === mePn.user) {
                        runActions();
                        return;
                    }
                }
                k(true);
                MRef.current?.focus();
            };
            t[3] = mePn.user;
            t[4] = P;
            t[5] = runActions;
            t[6] = D;
            t[7] = F;
        } else {
            F = t[7];
        }
        const O = F;
        const B = P === "";
        let W;
        if (t[8] !== O || t[9] !== P || t[10] !== D || t[11] !== shouldDisplayError) {
            const Component = o("WAWebLinkDevicePhoneNumberEntryScreen.react").PhoneNumberSection;
            W = <Component shouldDisplayError={shouldDisplayError} phoneNumberWithoutCountryCode={P} selectedCountryId={D} onSubmit={O} onChangePhoneNumber={A} onChangeSelectedCountry={x} isInsideModal/>;
            t[8] = O;
            t[9] = P;
            t[10] = D;
            t[11] = shouldDisplayError;
            t[12] = W;
        } else {
            W = t[12];
        }
        let q;
        if (t[13] !== shouldDisplayError) {
            const Component = o("WAWebFlex.react").FlexRow;
            q = shouldDisplayError && <Component testid="phone-number-confirmation-modal-number-mismatch" xstyle={[
                _.marginTop10,
                f.error
            ]}>{s._("The phone number you entered doesn't match your account.")}</Component>;
            t[13] = shouldDisplayError;
            t[14] = q;
        } else {
            q = t[14];
        }
        let U;
        if (t[15] !== actionFailure || t[16] !== actionText || t[17] !== actionType || t[18] !== contentText || t[19] !== failureText || t[20] !== O || t[21] !== isRunningAction || t[22] !== onCancel || t[23] !== B || t[24] !== W || t[25] !== q || t[26] !== tsNavigationData) {
            const Component = r("WAWebConfirmationModal.react");
            U = <Component actionFailure={actionFailure} actionText={actionText} actionType={actionType} contentText={contentText} failureText={failureText} isInputEmpty={B} isRunningAction={isRunningAction} onCancel={onCancel} onSubmit={O} testidPrefix="phone-number-confirmation-modal" tsNavigationData={tsNavigationData}>{W}{q}</Component>;
            t[15] = actionFailure;
            t[16] = actionText;
            t[17] = actionType;
            t[18] = contentText;
            t[19] = failureText;
            t[20] = O;
            t[21] = isRunningAction;
            t[22] = onCancel;
            t[23] = B;
            t[24] = W;
            t[25] = q;
            t[26] = tsNavigationData;
            t[27] = U;
        } else {
            U = t[27];
        }
        return U;
    }
    l.default = g;
}, 226);