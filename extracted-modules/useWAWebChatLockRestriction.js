__d("useWAWebChatLockRestriction", [
    "WAWebChatLockCodeModal.react",
    "WAWebChatLockUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef, useState } = s;
    const m = new Set;
    function p() {
        return m.size > 0;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(28);
        const { condition, entryPoint, id, landingSurface, onPromptFailure, onPromptSuccess, unlockEntryPoint } = e;
        let f;
        let g;
        if (t[0] !== condition) {
            if (condition === "always") {
                g = true;
                let h;
                if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                    h = o("WAWebChatLockUtils").lockedChatsAreAccessible();
                    t[3] = h;
                } else {
                    h = t[3];
                }
                f = h;
            } else {
                if (condition === "bypass") {
                    g = false;
                    f = true;
                } else {
                    g = condition.isLocked;
                    f = o("WAWebChatLockUtils").chatIsAccessible(condition);
                }
            }
            t[0] = condition;
            t[1] = f;
            t[2] = g;
        } else {
            f = t[1];
            g = t[2];
        }
        const y = useState(f);
        const C = y[0];
        const b = y[1];
        const vRef = useRef(false);
        let S;
        if (t[4] !== entryPoint || t[5] !== C || t[6] !== landingSurface || t[7] !== onPromptFailure || t[8] !== onPromptSuccess || t[9] !== g || t[10] !== unlockEntryPoint) {
            S = function() {
                if (g && !C && !vRef.current) {
                    vRef.current = true;
                    o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
                        unlockAppOnSuccess: true,
                        entryPoint,
                        landingSurface,
                        unlockEntryPoint
                    }).then((e)=>{
                        b(e);
                        if (e) {
                            if (onPromptSuccess != null) {
                                onPromptSuccess();
                            }
                        } else if (onPromptFailure != null) {
                            onPromptFailure();
                        }
                    });
                }
            };
            t[4] = entryPoint;
            t[5] = C;
            t[6] = landingSurface;
            t[7] = onPromptFailure;
            t[8] = onPromptSuccess;
            t[9] = g;
            t[10] = unlockEntryPoint;
            t[11] = S;
        } else {
            S = t[11];
        }
        let R;
        if (t[12] !== entryPoint || t[13] !== C || t[14] !== landingSurface || t[15] !== onPromptFailure || t[16] !== onPromptSuccess || t[17] !== g || t[18] !== unlockEntryPoint) {
            R = [
                C,
                g,
                onPromptSuccess,
                onPromptFailure,
                entryPoint,
                landingSurface,
                unlockEntryPoint
            ];
            t[12] = entryPoint;
            t[13] = C;
            t[14] = landingSurface;
            t[15] = onPromptFailure;
            t[16] = onPromptSuccess;
            t[17] = g;
            t[18] = unlockEntryPoint;
            t[19] = R;
        } else {
            R = t[19];
        }
        useEffect(S, R);
        let L;
        if (t[20] !== id || t[21] !== C || t[22] !== g) {
            L = function() {
                if (g && C) {
                    m.add(id);
                }
                return function() {
                    if (g && C) {
                        m.delete(id);
                        if (!p()) {
                            o("WAWebChatLockUtils").lockChats();
                        }
                    }
                };
            };
            t[20] = id;
            t[21] = C;
            t[22] = g;
            t[23] = L;
        } else {
            L = t[23];
        }
        let E;
        if (t[24] !== id || t[25] !== C || t[26] !== g) {
            E = [
                C,
                g,
                id
            ];
            t[24] = id;
            t[25] = C;
            t[26] = g;
            t[27] = E;
        } else {
            E = t[27];
        }
        useEffect(L, E);
        return C;
    }
    l.chatLockComponentIsMounted = p;
    l.useChatLockRestriction = _;
}, 98);