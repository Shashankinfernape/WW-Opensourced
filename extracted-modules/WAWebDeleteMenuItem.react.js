__d("WAWebDeleteMenuItem.react", [
    "fbt",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFrontendChatGetters",
    "WAWebGroupIntegrityUtils",
    "WAWebMiscGatingUtils",
    "WAWebSuspendedGroupUtils",
    "WDSIconIcDelete.react",
    "WDSIconIcLogout.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_memo = e.memo;
    function d(e) {
        const t = o("react-compiler-runtime").c(14);
        const { chat, disabled, onDeleteOrExit } = e;
        let l;
        if (t[0] !== chat) {
            l = function() {
                o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(chat);
            };
            t[0] = chat;
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = l;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebChatGetters").getIsReadOnly,
                o("WAWebFrontendChatGetters").getKind
            ];
            t[2] = d;
        } else {
            d = t[2];
        }
        const m = o("useWAWebChatValues").useChatValues(chat.id, d);
        const p = m[0];
        const _ = m[1];
        let f;
        let g = onDeleteOrExit;
        let h = r("WDSIconIcDelete.react");
        if (_ != null) {
            e: switch(_){
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                    {
                        if (p) {
                            let y;
                            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                                y = s._("Delete group");
                                t[3] = y;
                            } else {
                                y = t[3];
                            }
                            f = y;
                        } else if (!o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat) && o("WAWebChatGroupUtils").isSuspendedGroup(chat) && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
                            let C;
                            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                                C = s._("Exit group and delete");
                                t[4] = C;
                            } else {
                                C = t[4];
                            }
                            f = C;
                            g = c;
                        } else {
                            let b;
                            if (t[5] !== chat) {
                                b = o("WAWebGroupIntegrityUtils").getLeaveGroupString(chat);
                                t[5] = chat;
                                t[6] = b;
                            } else {
                                b = t[6];
                            }
                            f = b;
                            h = r("WDSIconIcLogout.react");
                        }
                        break e;
                    }
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                    {
                        let v;
                        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                            v = s._("Delete audience");
                            t[7] = v;
                        } else {
                            v = t[7];
                        }
                        f = v;
                        break e;
                    }
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                    {
                        let S;
                        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                            S = s._("Delete chat");
                            t[8] = S;
                        } else {
                            S = t[8];
                        }
                        f = S;
                        break e;
                    }
                default:
            }
        }
        let R;
        if (t[9] !== h || t[10] !== disabled || t[11] !== g || t[12] !== f) {
            const Component = r("WDSMenuItem.react");
            R = <Component Icon={h} title={f} onPress={g} testid="mi-delete" disabled={disabled} destructive/>;
            t[9] = h;
            t[10] = disabled;
            t[11] = g;
            t[12] = f;
            t[13] = R;
        } else {
            R = t[13];
        }
        return R;
    }
    const m = e_memo(d);
    l.default = m;
}, 226);