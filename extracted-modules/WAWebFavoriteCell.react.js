__d("WAWebFavoriteCell.react", [
    "WAWebBoolFunc",
    "WAWebCallButtonsSurface",
    "WAWebChatCell.react",
    "WAWebChatCollection",
    "WAWebChatlessFavoriteCallButtonsLoadable",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFlexBox.react",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebName.react",
    "WAWebShouldShowCallButtons",
    "WAWebVoipCallButtonsLoadable",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        if (!o("WAWebVoipGatingUtils").isCallingEnabled() || !o("WAWebShouldShowCallButtons").shouldShowCallButtons(e)) {
            return null;
        }
        const Component = o("WAWebFlexBox.react").FlexRow;
        return <Component>{s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
            chat: e,
            surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
            callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.FAVORITES,
            lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
        })}</Component>;
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    function c(e, t, contact, wid) {
        if (e) {
            return null;
        }
        if (t != null) {
            return u(t);
        }
        if (o("WAWebVoipGatingUtils").isCallingEnabled() && contact != null && wid.isUser() && o("WAWebShouldShowCallButtons").canCallContact(contact)) {
            return s.jsx(o("WAWebChatlessFavoriteCallButtonsLoadable").WAWebChatlessFavoriteCallButtonsLoadable, {
                wid
            });
        }
        return null;
    }
    function d(e, contact) {
        const n = contact ?? e?.contact;
        const showMessageYourselfName = n != null && o("WAWebContactGetters").getIsMe(n);
        if (e != null) {
            return s.jsx(o("WAWebName.react").Name, {
                chat: e,
                titlify: true,
                ellipsify: true,
                showMessageYourselfName
            });
        }
        if (contact != null) {
            return s.jsx(o("WAWebName.react").Name, {
                contact,
                titlify: true,
                ellipsify: true,
                showMessageYourselfName
            });
        }
        return null;
    }
    function m(e, t, n) {
        if (e != null) {
            const a = o("WAWebKeyboardTabUtils").getTabbableElements(e, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
            const i = t ? [
                e
            ].concat(a) : a;
            const l = e.ownerDocument.activeElement;
            const s = i.findIndex((e)=>e === l);
            const u = s + n;
            if (!(s === -1 || u < 0 || u >= i.length)) {
                r("WAWebFocusTracer").focus(i[u]);
            }
        }
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(38);
        const { active, disableHover, favoriteItem, isEditing, onClick, photoSize, testid } = e;
        const idle = disableHover === undefined ? false : disableHover;
        const h = isEditing === undefined ? false : isEditing;
        const y = photoSize === undefined ? 49 : photoSize;
        const { chat, contact, wid } = favoriteItem;
        let S;
        if (t[0] !== wid) {
            S = wid.toString();
            t[0] = wid;
            t[1] = S;
        } else {
            S = t[1];
        }
        const R = r("useWAWebActiveSelection")(active, S);
        const L = R[0];
        const E = R[1];
        const k = _;
        let I;
        if (t[2] !== onClick) {
            I = function({ target }) {
                if (!(target instanceof Element && target.closest("button") != null)) {
                    if (onClick) {
                        onClick();
                    }
                }
            };
            t[2] = onClick;
            t[3] = I;
        } else {
            I = t[3];
        }
        const T = I;
        let right;
        let x;
        if (t[4] !== E || t[5] !== L) {
            right = function() {
                return m(L.current, E, r("WAWebL10N").isRTL() ? -1 : 1);
            };
            x = function() {
                return m(L.current, E, r("WAWebL10N").isRTL() ? 1 : -1);
            };
            t[4] = E;
            t[5] = L;
            t[6] = right;
            t[7] = x;
        } else {
            right = t[6];
            x = t[7];
        }
        let $;
        if (t[8] !== T || t[9] !== right || t[10] !== x) {
            $ = {
                enter: T,
                space: T,
                right,
                left: x
            };
            t[8] = T;
            t[9] = right;
            t[10] = x;
            t[11] = $;
        } else {
            $ = t[11];
        }
        const P = $;
        let N;
        if (t[12] !== chat || t[13] !== wid) {
            N = chat ?? o("WAWebChatCollection").ChatCollection.getLatestChatForWid(wid);
            t[12] = chat;
            t[13] = wid;
            t[14] = N;
        } else {
            N = t[14];
        }
        const M = N;
        let w;
        if (t[15] !== contact || t[16] !== h || t[17] !== M || t[18] !== wid) {
            w = c(h, M, contact, wid);
            t[15] = contact;
            t[16] = h;
            t[17] = M;
            t[18] = wid;
            t[19] = w;
        } else {
            w = t[19];
        }
        const A = w;
        let F;
        if (t[20] !== y || t[21] !== wid) {
            F = s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: wid,
                size: y
            });
            t[20] = y;
            t[21] = wid;
            t[22] = F;
        } else {
            F = t[22];
        }
        let O;
        if (t[23] !== contact || t[24] !== M) {
            O = d(M, contact);
            t[23] = contact;
            t[24] = M;
            t[25] = O;
        } else {
            O = t[25];
        }
        let B;
        if (t[26] !== A || t[27] !== idle || t[28] !== T || t[29] !== E || t[30] !== F || t[31] !== O || t[32] !== testid) {
            const Component = r("WAWebChatCell.react");
            B = <Component contextEnabled={o("WAWebBoolFunc").returnFalse} active={E} idle={idle} image={F} primary={O} secondary={null} detail={A} onClick={T} testid={testid}/>;
            t[26] = A;
            t[27] = idle;
            t[28] = T;
            t[29] = E;
            t[30] = F;
            t[31] = O;
            t[32] = testid;
            t[33] = B;
        } else {
            B = t[33];
        }
        let W;
        if (t[34] !== P || t[35] !== L || t[36] !== B) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            W = <Component handlers={P} onFocus={k} ref={L}>{B}</Component>;
            t[34] = P;
            t[35] = L;
            t[36] = B;
            t[37] = W;
        } else {
            W = t[37];
        }
        return W;
    }
    function _(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    l.default = p;
}, 98);