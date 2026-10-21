__d("WAWebRemoveLinkJoinedMembersModal.react", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebChatContact.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebGroupLinkJoinUtils",
    "WAWebLinkJoinedMembersUtils",
    "WAWebMembersRemovedAlert.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebSpinner.react",
    "WAWebWamEnumGroupBulkRemovalAction",
    "WAWebWidFactory",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useMemo, useState } = d;
    const F2 = o("WAWebChatContact.react").ContactFactory();
    function G2Component(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_contact = e.contact;
        let r;
        if (t[0] !== e_contact) {
            r = <F2 contact={e_contact} theme="drawer-list" showNotifyName waitIdle idle/>;
            t[0] = e_contact;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function H7Component(e) {
        const t = o("react-compiler-runtime").c(44);
        const { chat, groupMetadata, messageTimestamp } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [];
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = useState(l);
        const d = u[0];
        const p = u[1];
        const f = useState(true);
        const g = f[0];
        const h = f[1];
        let C;
        let v;
        if (t[1] !== chat.id || t[2] !== groupMetadata.participants || t[3] !== messageTimestamp) {
            C = function() {
                b(chat.id, groupMetadata.participants, messageTimestamp).then(p).finally(()=>h(false));
            };
            v = [
                chat.id,
                groupMetadata.participants,
                messageTimestamp
            ];
            t[1] = chat.id;
            t[2] = groupMetadata.participants;
            t[3] = messageTimestamp;
            t[4] = C;
            t[5] = v;
        } else {
            C = t[4];
            v = t[5];
        }
        useEffect(C, v);
        let S;
        if (t[6] !== chat || t[7] !== groupMetadata) {
            S = function() {
                o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(chat, groupMetadata);
            };
            t[6] = chat;
            t[7] = groupMetadata;
            t[8] = S;
        } else {
            S = t[8];
        }
        const R = S;
        let L;
        if (t[9] !== chat || t[10] !== d) {
            L = function() {
                o("WAWebLinkJoinedMembersUtils").logGroupBulkRemovalWamEvent(o("WAWebWamEnumGroupBulkRemovalAction").GROUP_BULK_REMOVAL_ACTION.TAP_REMOVE_BUTTON, chat.id, d.length);
                if (d.length > 0) {
                    o("WAWebModifyParticipantsGroupAction").removeParticipants(chat, d);
                }
                o("WAWebModalManager").closeModalManager();
            };
            t[9] = chat;
            t[10] = d;
            t[11] = L;
        } else {
            L = t[11];
        }
        const E = L;
        const d_length = d.length;
        let I;
        e: {
            if (messageTimestamp == null) {
                I = null;
                break e;
            }
            let T;
            if (t[12] !== messageTimestamp) {
                const D = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(messageTimestamp);
                const { endTime, startTime } = D;
                T = o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(startTime, endTime);
                t[12] = messageTimestamp;
                t[13] = T;
            } else {
                T = t[13];
            }
            I = T;
        }
        const P = I;
        let N;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                surface: "unknown",
                viewName: "remove-link-joined-members"
            };
            t[14] = N;
        } else {
            N = t[14];
        }
        let M;
        let w;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            M = <Component type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} title={s._("Remove members")} onCancel={o("WAWebModalManager").closeModalManager}/>;
            w = {
                className: "xdx6fka xvtqlqk x16ovd2e x12xbjc7 x2b8uid"
            };
            t[15] = M;
            t[16] = w;
        } else {
            M = t[15];
            w = t[16];
        }
        let A;
        if (t[17] !== P) {
            const Component = r("WDSText.react");
            A = <Component type="Body2" colorName="contentDeemphasized">{P != null ? s._("These members joined using a group link on {timeRange}.", [
                s._param("timeRange", P)
            ]) : s._("These members joined using a group link.")}</Component>;
            t[17] = P;
            t[18] = A;
        } else {
            A = t[18];
        }
        let F;
        let O;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            F = {
                className: "xav9cv8"
            };
            O = {
                className: "x1ypdohk"
            };
            t[19] = F;
            t[20] = O;
        } else {
            F = t[19];
            O = t[20];
        }
        let B;
        if (t[21] !== R) {
            B = function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    R();
                }
            };
            t[21] = R;
            t[22] = B;
        } else {
            B = t[22];
        }
        let W;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            W = <Component type="Body2" colorName="accent">{s._("Manage link permissions")}</Component>;
            t[23] = W;
        } else {
            W = t[23];
        }
        let q;
        if (t[24] !== R || t[25] !== B) {
            q = <div {...babelHelpers.extends({}, F, {
                children: <span {...babelHelpers.extends({}, O, {
                    onClick: R,
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: B,
                    children: W
                })}/>
            })}/>;
            t[24] = R;
            t[25] = B;
            t[26] = q;
        } else {
            q = t[26];
        }
        let U;
        if (t[27] !== A || t[28] !== q) {
            U = <div {...babelHelpers.extends({}, w, {
                children: [
                    A,
                    q
                ]
            })}/>;
            t[27] = A;
            t[28] = q;
            t[29] = U;
        } else {
            U = t[29];
        }
        let V;
        if (t[30] !== g || t[31] !== d) {
            const Component = r("WAWebDrawerBody.react");
            V = <Component>{g ? <div className="x78zum5 xl56j7k x6s0dn4 x1iyjqo2">{c.jsx(o("WAWebSpinner.react").Spinner, {})}</div> : <div className="x1iyjqo2 x1odjw0f">{d.map(y)}</div>}</Component>;
            t[30] = g;
            t[31] = d;
            t[32] = V;
        } else {
            V = t[32];
        }
        let H;
        if (t[33] === Symbol.for("react.memo_cache_sentinel")) {
            H = {
                className: "xdx6fka xvtqlqk x1p57kb1 xvpt6g3 x178xt8z x13fuv20 xx42vgk"
            };
            t[33] = H;
        } else {
            H = t[33];
        }
        let G;
        if (t[34] !== d_length) {
            G = s._("_j{\"*\":\"Remove {number} members\",\"_1\":\"Remove 1 member\"}", [
                s._plural(d_length, "number")
            ]);
            t[34] = d_length;
            t[35] = G;
        } else {
            G = t[35];
        }
        const z = g || d_length === 0;
        let j;
        if (t[36] !== E || t[37] !== G || t[38] !== z) {
            const Component = r("WDSButton.react");
            j = <div {...babelHelpers.extends({}, H, {
                children: <Component label={G} onPress={E} disabled={z} type="destructive" variant="filled" widthMode="flexible" testid="remove-members-button"/>
            })}/>;
            t[36] = E;
            t[37] = G;
            t[38] = z;
            t[39] = j;
        } else {
            j = t[39];
        }
        let K;
        if (t[40] !== U || t[41] !== V || t[42] !== j) {
            const Component = r("WAWebDrawer.react");
            const Component_1 = o("WAWebModal.react").Modal;
            K = <Component_1 type={o("WAWebModal.react").ModalTheme.Tower} onOverlayClick={o("WAWebModalManager").closeModalManager}><Component testid="remove-link-joined-members-modal" tsNavigationData={N}>{M}{U}{V}{j}</Component></Component_1>;
            t[40] = U;
            t[41] = V;
            t[42] = j;
            t[43] = K;
        } else {
            K = t[43];
        }
        return K;
    }
    function y(e) {
        return <G2Component key={e.id.toString()} contact={e.contact}/>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C(t, r, messageTimestamp) {
        const i = (()=>{
            const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const n = yield o("WAWebLinkJoinedMembersUtils").fetchRemainingParticipants(t, r, messageTimestamp);
                    if (n.length === 0) {
                        o("WAWebMembersRemovedAlert.react").openMembersRemovedAlert(t, r, messageTimestamp);
                        return;
                    }
                    o("WAWebModalManager").ModalManager.open(<H7Component chat={t} groupMetadata={r} messageTimestamp={messageTimestamp}/>);
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[openRemoveLinkJoinedMembersModal] fetch failed: ",
                        ""
                    ])), error);
                }
            });
            return function() {
                return i.apply(this, arguments);
            };
        })();
        i();
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = n != null ? o("WATimeUtils").castToUnixTime(n - o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_WINDOW_SECS) : undefined;
            const a = n != null ? o("WATimeUtils").castToUnixTime(n + o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_COOLDOWN_SECS) : undefined;
            const i = yield o("WAWebGroupLinkJoinUtils").getParticipantsJoinedViaLink(e.toString(), r, a);
            const l = [];
            for (const s of i){
                const u = t.get(o("WAWebWidFactory").createWid(s));
                if (u != null) {
                    l.push(u);
                }
            }
            return l;
        });
        return v.apply(this, arguments);
    }
    l.openRemoveLinkJoinedMembersModal = C;
}, 226);