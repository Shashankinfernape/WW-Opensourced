__d("WAWebDeleteRevokeMsgFlow.react", [
    "fbt",
    "$InternalEnum",
    "WAArrayUtils",
    "WATimeUtils",
    "WAWebButton.react",
    "WAWebChatGetters",
    "WAWebCheckBox.react",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDeleteNewsletterMsgModal.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebEnforcementActionLogging",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebName.react",
    "WAWebRevokeMetricUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebListener",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = n("$InternalEnum").Mirrored([
        "DeleteRevoke",
        "RevokeConfirm"
    ]);
    function p(e) {
        const t = o("react-compiler-runtime").c(73);
        const { chat, chats, commentList, fromChannelAlerts, isMsgVisible, msgList, onDelete, onEnd, theme, toastPosition } = e;
        const E = o("useWAWebFlow").useFlow(m.DeleteRevoke);
        const K = E[0];
        const flow = E[1];
        const D = r("useWAWebToggle")(true);
        const clearMedia = D[0];
        const onToggleClearMedia = D[1];
        const P = o("WAWebDrawerManagerContext").useDrawerManagerContext("right");
        let revokable;
        if (t[0] !== commentList || t[1] !== msgList) {
            if (commentList != null && commentList.length > 0) {
                revokable = b(commentList);
            } else {
                revokable = b(msgList);
            }
            t[0] = commentList;
            t[1] = msgList;
            t[2] = revokable;
        } else {
            revokable = t[2];
        }
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", C);
        let M;
        if (t[3] !== msgList) {
            M = o("WAArrayUtils").groupBy(msgList, y);
            t[3] = msgList;
            t[4] = M;
        } else {
            M = t[4];
        }
        const w = M;
        let A;
        if (t[5] !== commentList) {
            A = commentList ?? [];
            t[5] = commentList;
            t[6] = A;
        } else {
            A = t[6];
        }
        let F;
        if (t[7] !== A) {
            F = o("WAArrayUtils").groupBy(A, h);
            t[7] = A;
            t[8] = F;
        } else {
            F = t[8];
        }
        const O = F;
        let B;
        if (t[9] !== chat || t[10] !== chats) {
            B = chats ?? [
                chat
            ];
            t[9] = chat;
            t[10] = chats;
            t[11] = B;
        } else {
            B = t[11];
        }
        let W;
        if (t[12] !== B) {
            const q = B.filter(Boolean);
            W = q.some(g);
            t[12] = B;
            t[13] = W;
        } else {
            W = t[13];
        }
        const U = W;
        let V;
        if (t[14] !== clearMedia || t[15] !== O || t[16] !== flow || t[17] !== isMsgVisible || t[18] !== w || t[19] !== onDelete || t[20] !== onEnd || t[21] !== P || t[22] !== theme || t[23] !== toastPosition) {
            V = function() {
                w.forEach((e, t)=>{
                    if (e.length > 0) {
                        o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
                            type: "message",
                            list: e
                        }, clearMedia, null, toastPosition, theme);
                        const r = P.existsDrawer() ?? false;
                        if (r && isMsgVisible) {
                            e.forEach((e)=>{
                                if (isMsgVisible(e.id, true)) {
                                    o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                                }
                            });
                        }
                    }
                });
                O.forEach((e, t)=>{
                    if (e != null && e.length > 0) {
                        o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
                            type: "addon",
                            list: e
                        }, clearMedia, null, toastPosition, theme);
                    }
                });
                onDelete?.();
                onEnd?.();
                flow.end();
            };
            t[14] = clearMedia;
            t[15] = O;
            t[16] = flow;
            t[17] = isMsgVisible;
            t[18] = w;
            t[19] = onDelete;
            t[20] = onEnd;
            t[21] = P;
            t[22] = theme;
            t[23] = toastPosition;
            t[24] = V;
        } else {
            V = t[24];
        }
        const onDelete_1 = V;
        let G;
        if (t[25] !== clearMedia || t[26] !== O || t[27] !== flow || t[28] !== w || t[29] !== onEnd || t[30] !== revokable.admin || t[31] !== toastPosition) {
            G = function() {
                if (r("WAWebEnforcementActionLogging").isSessionStarted()) {
                    r("WAWebEnforcementActionLogging").logDeleteUpdateConfirmClick();
                }
                w.forEach((e, t)=>{
                    if (revokable.admin > 0) {
                        o("WAWebRevokeMetricUtils").UiRevokeActionHelper.revokeConfirmed();
                    }
                    if (e.length > 0) {
                        o("WAWebCmd").Cmd.sendRevokeMsgs(t, {
                            type: "message",
                            list: e
                        }, {
                            clearMedia,
                            toastPosition
                        });
                    }
                });
                O.forEach((e, t)=>{
                    if (e != null && e.length > 0) {
                        o("WAWebCmd").Cmd.sendRevokeMsgs(t, {
                            type: "addon",
                            list: e
                        }, {
                            clearMedia,
                            toastPosition
                        });
                    }
                });
                onEnd?.();
                flow.end();
            };
            t[25] = clearMedia;
            t[26] = O;
            t[27] = flow;
            t[28] = w;
            t[29] = onEnd;
            t[30] = revokable.admin;
            t[31] = toastPosition;
            t[32] = G;
        } else {
            G = t[32];
        }
        const z = G;
        let j;
        if (t[33] !== flow || t[34] !== z || t[35] !== U || t[36] !== revokable.admin || t[37] !== revokable.sender) {
            j = function() {
                if (revokable.admin === 0 && revokable.sender > 0) {
                    o("WAWebRevokeMetricUtils").UiRevokeActionHelper.senderRevoke();
                } else if (revokable.admin > 0 && revokable.sender === 0) {
                    o("WAWebRevokeMetricUtils").UiRevokeActionHelper.adminRevoke();
                } else {
                    o("WAWebRevokeMetricUtils").UiRevokeActionHelper.adminAndSenderRevoke();
                }
                if (revokable.admin > 0 && !U) {
                    flow.push(m.RevokeConfirm);
                } else {
                    z();
                }
            };
            t[33] = flow;
            t[34] = z;
            t[35] = U;
            t[36] = revokable.admin;
            t[37] = revokable.sender;
            t[38] = j;
        } else {
            j = t[38];
        }
        const onRevoke = j;
        let Q;
        if (t[39] !== flow) {
            Q = function() {
                o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession();
                flow.end();
            };
            t[39] = flow;
            t[40] = Q;
        } else {
            Q = t[40];
        }
        const X = Q;
        const T_step = flow.step;
        if (T_step) {
            let J;
            if (t[41] !== clearMedia || t[42] !== commentList || t[43] !== flow.end || t[44] !== onDelete_1 || t[45] !== onRevoke || t[46] !== msgList || t[47] !== revokable || t[48] !== theme || t[49] !== onToggleClearMedia) {
                J = commentList != null && commentList.length > 0 ? <R commentList={commentList} revokable={revokable} onDelete={onDelete_1} onRevoke={onRevoke} onCancel={flow.end} theme={theme}/> : <L msgList={msgList} revokable={revokable} clearMedia={clearMedia} onDelete={onDelete_1} onRevoke={onRevoke} onCancel={flow.end} onToggleClearMedia={onToggleClearMedia} theme={theme}/>;
                t[41] = clearMedia;
                t[42] = commentList;
                t[43] = flow.end;
                t[44] = onDelete_1;
                t[45] = onRevoke;
                t[46] = msgList;
                t[47] = revokable;
                t[48] = theme;
                t[49] = onToggleClearMedia;
                t[50] = J;
            } else {
                J = t[50];
            }
            const Z = J;
            let ee;
            e: switch(T_step){
                case m.DeleteRevoke:
                    {
                        let te;
                        if (t[51] !== Z || t[52] !== flow.end || t[53] !== fromChannelAlerts || t[54] !== onRevoke || t[55] !== U || t[56] !== msgList) {
                            const Component = r("WAWebDeleteNewsletterMsgModal.react");
                            te = U ? <Component msgList={msgList} onRevoke={onRevoke} onCancel={flow.end} fromChannelAlerts={fromChannelAlerts}/> : Z;
                            t[51] = Z;
                            t[52] = flow.end;
                            t[53] = fromChannelAlerts;
                            t[54] = onRevoke;
                            t[55] = U;
                            t[56] = msgList;
                            t[57] = te;
                        } else {
                            te = t[57];
                        }
                        ee = te;
                        break e;
                    }
                case m.RevokeConfirm:
                    {
                        let ne;
                        let re;
                        if (t[58] !== commentList || t[59] !== msgList) {
                            re = Symbol.for("react.early_return_sentinel");
                            t: {
                                let oe;
                                if (commentList != null && commentList.length > 0) {
                                    oe = commentList.filter(f)[0];
                                } else {
                                    oe = msgList.filter(_)[0];
                                }
                                const ae = o("WAWebMsgGetters").getSender(oe);
                                if (ae == null) {
                                    re = undefined;
                                    break t;
                                }
                                ne = o("WAWebContactCollection").ContactCollection.assertGet(ae);
                            }
                            t[58] = commentList;
                            t[59] = msgList;
                            t[60] = ne;
                            t[61] = re;
                        } else {
                            ne = t[60];
                            re = t[61];
                        }
                        if (re !== Symbol.for("react.early_return_sentinel")) {
                            return re;
                        }
                        const ie = ne;
                        let le;
                        if (t[62] !== flow) {
                            le = function() {
                                return flow.pop();
                            };
                            t[62] = flow;
                            t[63] = le;
                        } else {
                            le = t[63];
                        }
                        let se;
                        if (t[64] !== ie || t[65] !== z || t[66] !== le) {
                            se = <I onConfirm={z} onCancel={le} contact={ie}/>;
                            t[64] = ie;
                            t[65] = z;
                            t[66] = le;
                            t[67] = se;
                        } else {
                            se = t[67];
                        }
                        ee = se;
                    }
            }
            let ue;
            if (t[68] !== K || t[69] !== ee || t[70] !== flow || t[71] !== X) {
                ue = <K requestDismiss={X} flow={flow}>{ee}</K>;
                t[68] = K;
                t[69] = ee;
                t[70] = flow;
                t[71] = X;
                t[72] = ue;
            } else {
                ue = t[72];
            }
            return ue;
        }
    }
    function _(e) {
        return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
    }
    function f(e) {
        return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
    }
    function g(e) {
        if (e != null) {
            return o("WAWebChatGetters").getIsNewsletter(e);
        }
        return false;
    }
    function h(e) {
        return o("WAWebFrontendMsgGetters").getChat(e);
    }
    function y(e) {
        return o("WAWebFrontendMsgGetters").getChat(e);
    }
    function C() {
        r("WAWebEnforcementActionLogging").logDismissModalClick();
    }
    function b(e) {
        return e.reduce((acc, item)=>{
            const n = o("WAWebMsgActionCapability").canSenderRevokeMsg(item);
            const r = o("WAWebMsgActionCapability").canAdminRevokeMsg(item);
            const a = o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(item);
            const sender = acc.sender + (n || a ? 1 : 0);
            const admin = acc.admin + (r && !a ? 1 : 0);
            const s = n || r || a;
            const canRevoke = acc.canRevoke && s && admin <= 1;
            const revokeDurations = [].concat(acc.revokeDurations, [
                o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(item)
            ]);
            return {
                sender,
                admin,
                canRevoke,
                revokeDurations
            };
        }, {
            sender: 0,
            admin: 0,
            canRevoke: true,
            revokeDurations: []
        });
    }
    const v = (revokable, commentList)=>{
        let e;
        if (revokable.canRevoke && revokable.admin > 0) {
            const r = commentList.filter((e)=>o("WAWebMsgActionCapability").canAdminRevokeMsg(e))[0];
            const a = o("WAWebMsgGetters").getSender(r);
            if (a == null) {
                return;
            }
            const i = o("WAWebContactCollection").ContactCollection.assertGet(a);
            e = s._("Delete message from {name}?", [
                s._param("name", d.jsx(o("WAWebName.react").ContactName, {
                    contact: i
                }))
            ]);
        } else {
            e = s._("_j{\"*\":\"Delete messages?\",\"_1\":\"Delete message?\"}", [
                s._plural(commentList.length)
            ]);
        }
        return e;
    };
    const S = ({ onCancel, onDelete, onRevoke, revokable, theme })=>{
        let u = null;
        let c = null;
        const m = theme === "mediaHub" ? "negative-destructive" : "primary";
        const Component = o("WAWebButton.react").Button;
        const p = <Component key={2} testid="popup-controls-delete" type={revokable.canRevoke ? "secondary" : m} onClick={onDelete}>{s._("Delete for me")}</Component>;
        const Component_1 = o("WAWebButton.react").Button;
        const _ = <Component_1 key={0} type="secondary" onClick={onCancel}>{r("WAWebFbtCommon")("Cancel")}</Component_1>;
        if (revokable.canRevoke) {
            const Component = o("WAWebButton.react").Button;
            u = <Component key={1} testid="popup-controls-revoke" type="secondary" onClick={onRevoke}>{s._("Delete for everyone")}</Component>;
        }
        if (u) {
            const Component = o("WAWebButton.react").ButtonGroup;
            c = <Component direction="vertical" align="end">{u}{p}{_}</Component>;
        } else {
            const Component = o("WAWebButton.react").ButtonGroup;
            c = <Component direction="horizontal">{_}{p}</Component>;
        }
        return c;
    };
    function R(t) {
        const n = o("react-compiler-runtime").c(22);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        const i = r;
        const { commentList, onCancel, onDelete, onRevoke, revokable, theme } = i;
        let _;
        if (n[3] !== commentList || n[4] !== revokable) {
            _ = v(revokable, commentList);
            n[3] = commentList;
            n[4] = revokable;
            n[5] = _;
        } else {
            _ = n[5];
        }
        const f = _;
        let g;
        if (n[6] !== onCancel || n[7] !== onDelete || n[8] !== onRevoke || n[9] !== revokable || n[10] !== theme) {
            g = S({
                onCancel,
                onDelete,
                onRevoke,
                revokable,
                theme
            });
            n[6] = onCancel;
            n[7] = onDelete;
            n[8] = onRevoke;
            n[9] = revokable;
            n[10] = theme;
            n[11] = g;
        } else {
            g = n[11];
        }
        const h = g;
        let y;
        if (n[12] !== onCancel) {
            y = {
                escape: onCancel
            };
            n[12] = onCancel;
            n[13] = y;
        } else {
            y = n[13];
        }
        const C = y;
        let b;
        if (n[14] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                surface: "delete-message",
                viewName: "delete-revoke-msg"
            };
            n[14] = b;
        } else {
            b = n[14];
        }
        let R;
        if (n[15] !== f || n[16] !== h) {
            R = d.jsx(o("WAWebModal.react").Modal, {
                actions: h,
                title: f,
                tsNavigationData: b
            });
            n[15] = f;
            n[16] = h;
            n[17] = R;
        } else {
            R = n[17];
        }
        let L;
        if (n[18] !== C || n[19] !== a || n[20] !== R) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            L = <Component ref={a} handlers={C}>{R}</Component>;
            n[18] = C;
            n[19] = a;
            n[20] = R;
            n[21] = L;
        } else {
            L = n[21];
        }
        return L;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(42);
        let n;
        let r;
        if (t[0] !== e) {
            r = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        const a = n;
        const { clearMedia, msgList, onCancel, onDelete, onRevoke, onToggleClearMedia, revokable, theme } = a;
        let h;
        let y;
        if (t[3] !== onToggleClearMedia) {
            y = function() {
                onToggleClearMedia();
            };
            t[3] = onToggleClearMedia;
            t[4] = y;
        } else {
            y = t[4];
        }
        const C = y;
        if (msgList.some(k)) {
            let b;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                b = s._("Delete file from your phone");
                t[5] = b;
            } else {
                b = t[5];
            }
            const v = b;
            let R;
            if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                R = {
                    className: "x78zum5 x1f6kntn xo5v014 x14z9mp x14vqqas x18d9i69"
                };
                t[6] = R;
            } else {
                R = t[6];
            }
            let L;
            if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                L = {
                    className: "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x1sa5p1d x1uuroth x19991ni x1d8287x xwji4o3"
                };
                t[7] = L;
            } else {
                L = t[7];
            }
            let I;
            if (t[8] !== clearMedia || t[9] !== C) {
                const Component = o("WAWebCheckBox.react").CheckBox;
                I = <div {...babelHelpers.extends({
                    "data-testid": "menu-icon-revoke-message"
                }, L, {
                    children: <Component ariaLabel={v} onChange={C} checked={clearMedia}/>
                })}/>;
                t[8] = clearMedia;
                t[9] = C;
                t[10] = I;
            } else {
                I = t[10];
            }
            let T;
            if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
                T = {
                    className: "x1iyjqo2 xs83m0k xdl72j9 xc26acl x19991ni x1d8287x xwji4o3"
                };
                t[11] = T;
            } else {
                T = t[11];
            }
            let D;
            if (t[12] !== C) {
                D = <div {...babelHelpers.extends({}, T, {
                    onClick: C,
                    children: v
                })}/>;
                t[12] = C;
                t[13] = D;
            } else {
                D = t[13];
            }
            let x;
            if (t[14] !== I || t[15] !== D) {
                x = <div {...babelHelpers.extends({}, R, {
                    key: 0
                })}>{I}{D}</div>;
                t[14] = I;
                t[15] = D;
                t[16] = x;
            } else {
                x = t[16];
            }
            h = x;
        }
        let $;
        if (revokable.canRevoke && revokable.admin > 0) {
            let P;
            let N;
            if (t[17] !== msgList) {
                N = Symbol.for("react.early_return_sentinel");
                e: {
                    const M = msgList.filter(E)[0];
                    const w = o("WAWebMsgGetters").getSender(M);
                    if (w == null) {
                        N = undefined;
                        break e;
                    }
                    P = o("WAWebContactCollection").ContactCollection.assertGet(w);
                }
                t[17] = msgList;
                t[18] = P;
                t[19] = N;
            } else {
                P = t[18];
                N = t[19];
            }
            if (N !== Symbol.for("react.early_return_sentinel")) {
                return N;
            }
            const A = P;
            let F;
            if (t[20] !== A) {
                F = s._("Delete message from {name}?", [
                    s._param("name", d.jsx(o("WAWebName.react").ContactName, {
                        contact: A
                    }))
                ]);
                t[20] = A;
                t[21] = F;
            } else {
                F = t[21];
            }
            $ = F;
        } else if (msgList.length === 1 && o("WAWebMsgGetters").getIsEdited(msgList[0]) && o("WAWebMsgGetters").getIsFailed(msgList[0])) {
            let O;
            if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
                O = s._("Your edited message was not sent. You can always delete the message.");
                t[22] = O;
            } else {
                O = t[22];
            }
            $ = O;
        } else {
            let B;
            if (t[23] !== msgList.length) {
                B = s._("_j{\"*\":\"Delete messages?\",\"_1\":\"Delete message?\"}", [
                    s._plural(msgList.length)
                ]);
                t[23] = msgList.length;
                t[24] = B;
            } else {
                B = t[24];
            }
            $ = B;
        }
        let W;
        if (t[25] !== onCancel || t[26] !== onDelete || t[27] !== onRevoke || t[28] !== revokable || t[29] !== theme) {
            W = S({
                onCancel,
                onDelete,
                onRevoke,
                revokable,
                theme
            });
            t[25] = onCancel;
            t[26] = onDelete;
            t[27] = onRevoke;
            t[28] = revokable;
            t[29] = theme;
            t[30] = W;
        } else {
            W = t[30];
        }
        const q = W;
        let U;
        if (t[31] !== onCancel) {
            U = {
                escape: onCancel
            };
            t[31] = onCancel;
            t[32] = U;
        } else {
            U = t[32];
        }
        const V = U;
        let H;
        if (t[33] === Symbol.for("react.memo_cache_sentinel")) {
            H = {
                surface: "delete-message",
                viewName: "delete-revoke-msg"
            };
            t[33] = H;
        } else {
            H = t[33];
        }
        let G;
        if (t[34] !== $ || t[35] !== q || t[36] !== h) {
            const Component = o("WAWebModal.react").Modal;
            G = <Component actions={q} title={$} tsNavigationData={H}>{h}</Component>;
            t[34] = $;
            t[35] = q;
            t[36] = h;
            t[37] = G;
        } else {
            G = t[37];
        }
        let z;
        if (t[38] !== V || t[39] !== r || t[40] !== G) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            z = <Component ref={r} handlers={V}>{G}</Component>;
            t[38] = V;
            t[39] = r;
            t[40] = G;
            t[41] = z;
        } else {
            z = t[41];
        }
        return z;
    }
    function E(e) {
        return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
    }
    function k(e) {
        return o("WAWebFrontendMsgGetters").getAsMms(e) && e.type !== o("WAWebMsgType").MSG_TYPE.STICKER;
    }
    function I({ contact, onCancel, onConfirm, ref }) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "delete-message",
            viewName: "revoke-confirm"
        }} ref={ref} okText={s._("Delete for everyone")} onOK={onConfirm} okButtonType="solid-warning" cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={onCancel}>{s._("As an admin, you are deleting {name}'s message for everyone in this chat. They will see that you deleted the message.", [
            s._param("name", d.jsx(o("WAWebName.react").ContactName, {
                contact
            }))
        ])}</Component>;
    }
    I.displayName = `${I.name} [from ${i.id}]`;
    l.default = p;
}, 226);