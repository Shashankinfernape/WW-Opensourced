__d("WAWebInAppSignupConfirmationHeader.react", [
    "WAWebInAppSignupConfirmation",
    "WAWebInAppSignupConfirmationHeaderVisual.react",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebReleaseToEventLoop",
    "WAWebSignupCTAExperiment",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebMsgValues",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let i;
            a = [
                (i = o("WAWebMsgGetters")).getInteractivePayload,
                i.getInteractiveType,
                i.getNativeFlowName,
                i.getType
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const u = l[0];
        const m = l[1];
        const _ = l[2];
        const f = l[3];
        const g = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfoFor({
            interactivePayload: u,
            interactiveType: m,
            nativeFlowName: _,
            type: f
        });
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = o("WAWebSignupCTAExperiment").getSignupCTAExperiment();
            t[1] = h;
        } else {
            h = t[1];
        }
        const experiment = h;
        const C = useState(null);
        const profilePicUrl = C[0];
        const v = C[1];
        const S = useState(null);
        const R = S[0];
        const L = S[1];
        const E = r("useWAWebUnmountSignal")();
        let k;
        let I;
        if (t[2] !== E) {
            k = function() {
                const e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                if (e != null) {
                    o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(e).then(p).then((e)=>{
                        if (!E.aborted) {
                            L(e);
                            v(o("WAWebProfilePicThumbGetters").getMaybeImg(e));
                        }
                    }).catch(r("WAWebNoop"));
                }
            };
            I = [
                E
            ];
            t[2] = E;
            t[3] = k;
            t[4] = I;
        } else {
            k = t[3];
            I = t[4];
        }
        useEffect(k, I);
        let T;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            T = function(t) {
                v(o("WAWebProfilePicThumbGetters").getMaybeImg(t));
            };
            t[5] = T;
        } else {
            T = t[5];
        }
        o("useWAWebListener").useListener(R, o("WAWebProfilePicThumbGetters").IMG_ROOT_CHANGE_EVENTS, T);
        if (g == null) {
            return null;
        }
        let onProfilePicError;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            onProfilePicError = function() {
                return v(null);
            };
            t[6] = onProfilePicError;
        } else {
            onProfilePicError = t[6];
        }
        let x;
        if (t[7] !== profilePicUrl) {
            const Component = r("WAWebInAppSignupConfirmationHeaderVisual.react");
            x = <Component experiment={experiment} profilePicUrl={profilePicUrl} onProfilePicError={onProfilePicError}/>;
            t[7] = profilePicUrl;
            t[8] = x;
        } else {
            x = t[8];
        }
        return x;
    }
    function p(e) {
        return o("WAWebReleaseToEventLoop").releaseToEventLoop().then(()=>e);
    }
    l.default = m;
}, 98);