__d("WAWebHeaderLabelRendering", [
    "fbt",
    "WAWebActions",
    "WAWebChatGetters",
    "WAWebDropdown.react",
    "WAWebEnvironment",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLabelChatHeaderButton.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebLabelsDropdown.react",
    "WAWebListIcon.react",
    "WAWebListIconStacked.react",
    "WAWebMenuBar.react",
    "WAWebMobilePlatforms",
    "WAWebTabOrder",
    "WDSIconIcSwitchAccount.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, onRequestReopen, pendingNewListId) {
        const Component = r("WAWebLabelsDropdown.react");
        return {
            menu: <Component chat={e} onRequestReopen={onRequestReopen} pendingNewListId={pendingNewListId}/>,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            dirX: r("WAWebL10N").isRTL() ? o("WAWebDropdown.react").DirX.RIGHT : o("WAWebDropdown.react").DirX.LEFT,
            dirY: o("WAWebDropdown.react").DirY.BOTTOM,
            offsetY: 5,
            offsetX: 0
        };
    }
    function d(e) {
        const t = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata);
        return t === o("WAWebGroupType").GroupType.COMMUNITY || t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || t === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(12);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebChatGetters").getLabels
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e_chat.id, a);
        const l = i[0];
        let s;
        if (t[1] !== l) {
            s = l ?? [];
            t[1] = l;
            t[2] = s;
        } else {
            s = t[2];
        }
        let u;
        if (t[3] !== s) {
            u = s.map(p);
            t[3] = s;
            t[4] = u;
        } else {
            u = t[4];
        }
        let c;
        let d;
        if (t[5] !== l) {
            c = function() {
                return _(l);
            };
            d = [
                l
            ];
            t[5] = l;
            t[6] = c;
            t[7] = d;
        } else {
            c = t[6];
            d = t[7];
        }
        const m = r("useWAWebEventTargetValue")(o("WAWebLabelCollection").LabelCollection, u, c, d);
        let g;
        if (t[8] !== e_chat || t[9] !== m || t[10] !== l) {
            g = FComponent(e_chat, l, m);
            t[8] = e_chat;
            t[9] = m;
            t[10] = l;
            t[11] = g;
        } else {
            g = t[11];
        }
        return g;
    }
    function p(e) {
        return `label_updated_${e}`;
    }
    function _(e) {
        return (e ?? []).map((e)=>{
            const t = o("WAWebLabelCollection").LabelCollection.get(e);
            if (t != null) {
                return o("WAWebLabelGetters").getHexColor(t);
            }
        });
    }
    function FComponent(e, t, n) {
        if (!o("WAWebMobilePlatforms").isSMB() || r("WAWebEnvironment").isGuest || !e.canSend || o("WAWebChatGetters").getIsBroadcast(e) || r("WAWebEnvironment").isWindows && d(e) || e.id.isAiHub()) {
            return null;
        }
        const a = r("WAWebEnvironment").isWindows || d(e) ? <div className="x150mmf0">{u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
            testid: "labels-button",
            icon: (()=>{
                const o = t ?? e.labels;
                if (!o || o.length === 0) {
                    return u.jsx(r("WDSIconIcSwitchAccount.react"), {
                        testid: "list-people"
                    });
                }
                if (o.length === 1) {
                    const color = n?.[0];
                    return <div className="x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p">{u.jsx(r("WAWebListIcon.react"), {
                        color,
                        size: 16
                    })}</div>;
                }
                return <div className="x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p">{u.jsx(r("WAWebListIconStacked.react"), {
                    labelIds: o,
                    size: 16
                })}</div>;
            })(),
            title: s._("Lists"),
            dropdownMenu: c(e)
        })}</div> : u.jsx(o("WAWebLabelChatHeaderButton.react").LabelChatHeaderButton, {
            chat: e
        });
        const Component = r("WDSTooltip.react");
        return <Component label={s._("Add to list")} shortcut={o("WAWebActions").Action.LABEL_CHAT}>{a}</Component>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.createLabelsDropdownMenu = c;
    l.isCommunityRelatedChat = d;
    l.WAWebHeaderLabelButton = m;
}, 226);