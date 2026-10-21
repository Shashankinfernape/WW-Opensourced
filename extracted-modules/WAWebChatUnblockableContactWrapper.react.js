__d("WAWebChatUnblockableContactWrapper.react", [
    "fbt",
    "WAWebBlockContactAction",
    "WAWebChatContact.react",
    "WAWebContactGetters",
    "WAWebDropdownItem.react",
    "WAWebFrontendContactGetters",
    "WAWebNoop",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const D6 = o("WAWebChatContact.react").ContactFactory();
    function m(e) {
        const t = o("react-compiler-runtime").c(34);
        const { active, allowBlockedContacts, checked, contact, customSecondaryText, disabled, ephemeralIcon, hideYouSuffix, onSelect, role, theme } = e;
        const C = disabled === undefined ? false : disabled;
        const hideYouSuffix_1 = hideYouSuffix === undefined ? false : hideYouSuffix;
        const v = e_useState(null);
        const S = v[0];
        const R = v[1];
        let L;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let E;
            L = [
                (E = o("WAWebContactGetters")).getId,
                E.getIsGroup,
                o("WAWebFrontendContactGetters").getIsContactBlocked,
                o("WAWebFrontendContactGetters").getPendingAction,
                E.getShortName,
                E.getName,
                E.getIsMe
            ];
            t[0] = L;
        } else {
            L = t[0];
        }
        const k = o("useWAWebContactValues").useContactValues(contact.id, L);
        const I = k[0];
        const T = k[2];
        const D = k[4];
        const x = k[5];
        const $ = k[6];
        let P;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            P = function() {
                R(null);
            };
            t[1] = P;
        } else {
            P = t[1];
        }
        const N = P;
        let M;
        if (t[2] !== contact) {
            M = function() {
                N();
                contact.addPendingAction(o("WAWebBlockContactAction").unblockContact(contact)).catch(r("WAWebNoop"));
            };
            t[2] = contact;
            t[3] = M;
        } else {
            M = t[3];
        }
        const w = M;
        let A;
        if (t[4] !== I || t[5] !== x || t[6] !== D || t[7] !== w) {
            A = function(t) {
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                const e = [
                    <Component key="unblock" testid="unblock-contact-in-multi-select" action={w}>{s._("Unblock {contact} and allow messages", [
                        s._param("contact", D || x)
                    ])}</Component>
                ];
                R({
                    contactId: I.toString(),
                    menu: e,
                    event: t.event
                });
            };
            t[4] = I;
            t[5] = x;
            t[6] = D;
            t[7] = w;
            t[8] = A;
        } else {
            A = t[8];
        }
        const F = A;
        let O;
        if (t[9] !== allowBlockedContacts || t[10] !== S || t[11] !== C || t[12] !== T || t[13] !== onSelect || t[14] !== F) {
            O = function(event) {
                if (!C) {
                    if (allowBlockedContacts) {
                        onSelect();
                        return;
                    }
                    if (S) {
                        N();
                        return;
                    } else if (T) {
                        F({
                            event
                        });
                        return;
                    }
                    onSelect();
                }
            };
            t[9] = allowBlockedContacts;
            t[10] = S;
            t[11] = C;
            t[12] = T;
            t[13] = onSelect;
            t[14] = F;
            t[15] = O;
        } else {
            O = t[15];
        }
        const B = O;
        let W;
        if (S) {
            let q;
            if (t[16] !== S) {
                const Component = o("WAWebUimUie.react").UIE;
                q = <Component displayName="ChatContextMenu" escapable popable dismissOnWindowResize>{u.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: S
                })}</Component>;
                t[16] = S;
                t[17] = q;
            } else {
                q = t[17];
            }
            W = q;
        }
        let U = customSecondaryText !== "" ? customSecondaryText : null;
        if (T && !allowBlockedContacts) {
            let V;
            if (t[18] !== C) {
                V = C ? s._("Blocked") : s._("Blocked. Click to unblock");
                t[18] = C;
                t[19] = V;
            } else {
                V = t[19];
            }
            U = V;
        }
        let H = "chat-checkbox";
        if (C || T && !allowBlockedContacts) {
            H = theme === "multi-select-chat-list" ? "chat-checkbox-disabled" : "chat-checkbox-no-delete";
        }
        const G = C ? null : B;
        let z;
        if (t[20] !== active || t[21] !== checked || t[22] !== contact || t[23] !== H || t[24] !== ephemeralIcon || t[25] !== hideYouSuffix_1 || t[26] !== $ || t[27] !== role || t[28] !== U || t[29] !== G) {
            z = <D6 theme={H} active={active} contact={contact} onClick={G} secondary={U} waitIdle ephemeralIcon={ephemeralIcon} hideStatus={$} showMessageYourselfName={$} hideYouSuffix={hideYouSuffix_1} truncateName role={role} checked={checked}/>;
            t[20] = active;
            t[21] = checked;
            t[22] = contact;
            t[23] = H;
            t[24] = ephemeralIcon;
            t[25] = hideYouSuffix_1;
            t[26] = $;
            t[27] = role;
            t[28] = U;
            t[29] = G;
            t[30] = z;
        } else {
            z = t[30];
        }
        let j;
        if (t[31] !== z || t[32] !== W) {
            j = <span aria-hidden>{z}{W}</span>;
            t[31] = z;
            t[32] = W;
            t[33] = j;
        } else {
            j = t[33];
        }
        return j;
    }
    l.default = m;
}, 226);