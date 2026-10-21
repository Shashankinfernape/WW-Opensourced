__d("WAWebGroupsModal.react", [
    "fbt",
    "Promise",
    "WAPromiseDelays",
    "WAWebBoolFunc",
    "WAWebChat.react",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebEmptyState.react",
    "WAWebGroupMetadataCollection",
    "WAWebL10NAccentFold",
    "WAWebModalsListModal.react",
    "WAWebNoop",
    "WAWebPhoneNumberSearch",
    "WAWebSingleSelection",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useState } = m;
    const F1 = o("WAWebChat.react").ChatFactory();
    const G2 = o("WAWebModalsListModal.react").ListModalFactory();
    function H1Component(e) {
        const t = o("react-compiler-runtime").c(13);
        const { active, chat, mode, onClick, showSpeakerForCag, subtitle, type } = e;
        let c;
        let m;
        const p = typeof subtitle !== "boolean";
        if (p) {
            c = subtitle;
            m = "group-modal";
        }
        let _;
        if (t[0] !== chat || t[1] !== p || t[2] !== onClick || t[3] !== type) {
            _ = function() {
                if (!p) {
                    if (type === "subgroup_switcher") {
                        new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                            action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
                            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV_SHEET,
                            chat
                        }).commit();
                    }
                    onClick.call(null, chat);
                }
            };
            t[0] = chat;
            t[1] = p;
            t[2] = onClick;
            t[3] = type;
            t[4] = _;
        } else {
            _ = t[4];
        }
        const g = _;
        let h;
        if (t[5] !== active || t[6] !== chat || t[7] !== g || t[8] !== mode || t[9] !== c || t[10] !== showSpeakerForCag || t[11] !== m) {
            h = <F1 chat={chat} mode={mode} active={active} secondary={c} noContext theme={m} onClick={g} overrideCommunityAnnouncementGroupName hiddenSubgroupIcon="chat-list" showSpeakerForCag={showSpeakerForCag} hideTertiaryRow/>;
            t[5] = active;
            t[6] = chat;
            t[7] = g;
            t[8] = mode;
            t[9] = c;
            t[10] = showSpeakerForCag;
            t[11] = m;
            t[12] = h;
        } else {
            h = t[12];
        }
        return h;
    }
    function YComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const l = s._("Groups");
        const { onCancel, chats, filter } = i;
        const y = filter === undefined ? o("WAWebBoolFunc").returnTrue : filter;
        const { onGroup, mode } = i;
        const mode_1 = mode === undefined ? o("WAWebChat.react").Mode.INFO : mode;
        const i_title = i.title;
        const R = i_title === undefined ? l : i_title;
        const { firstRow, lastRow, hideSearchBar } = i;
        const I = hideSearchBar === undefined ? false : hideSearchBar;
        const { showSpeakerForCag, rotateList } = i;
        const rotateList_1 = rotateList === undefined ? false : rotateList;
        const { tsNavigationData, type } = i;
        const N = r("useLazyRef")(function() {
            return new (r("WAWebSingleSelection"))([], function(e) {
                return e.toString();
            });
        });
        const M = useState(true);
        const w = M[0];
        const A = M[1];
        const F = useState(undefined);
        const O = F[0];
        const B = F[1];
        useEffect(function() {
            o("WAPromiseDelays").delayMs(300).then(()=>(u || (u = n("Promise"))).all(chats.reduce((acc, chat)=>{
                    let n;
                    if ((n = chat.groupMetadata) != null && n.stale) {
                        acc.push(chat.groupMetadata.id);
                    }
                    return acc;
                }, []).map((e)=>r("WAWebGroupMetadataCollection").update(e).catch(r("WAWebNoop"))))).finally(()=>A(false));
        }, []);
        const W = function(t, n) {
            if (y(n.chat) === true) {
                onGroup(n.chat);
            }
        };
        const q = ()=>{
            let e = [];
            if (w) {
                return e;
            }
            const t = o("WAWebL10NAccentFold").accentFold(O);
            const n = o("WAWebPhoneNumberSearch").numberSearch(t);
            const r = chats.filter((e)=>y(e) && (!t || e.contact.searchMatchExact(t, n)));
            N.current.init(r.filter((e)=>y(e) === true).map((e)=>e.id));
            e = r.map((e)=>({
                    chat: e,
                    itemKey: e.id.toString()
                }));
            return e;
        };
        const U = r("useWAWebDebouncedCallback")(B, 100);
        const emptyState = w ? d.jsx(o("WAWebEmptyState.react").Loading, {}) : d.jsx(o("WAWebEmptyState.react").SearchGroups, {});
        return <G2 title={R} data={q()} tsNavigationData={tsNavigationData} renderItem={function({ chat }) {
            return <H1Component chat={chat} subtitle={y(chat)} active={N.current} onClick={onGroup} mode={mode_1} showSpeakerForCag={showSpeakerForCag} type={type}/>;
        }} emptyState={emptyState} selection={N.current} rotateList={rotateList_1} onCancel={onCancel} onSearch={I ? undefined : U} onSelect={W} ref={t_ref} searchPlaceholder={s._("Search groups")} firstRows={[
            firstRow
        ]} lastRow={lastRow}/>;
    }
    YComponent.displayName = `${YComponent.name} [from ${i.id}]`;
    l.default = YComponent;
}, 226);