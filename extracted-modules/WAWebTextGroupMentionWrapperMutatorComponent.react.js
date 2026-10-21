__d("WAWebTextGroupMentionWrapperMutatorComponent.react", [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataContext",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const u_useContext = u.useContext;
    function m(t) {
        const l = o("react-compiler-runtime").c(9);
        const s = u_useContext(r("WAWebGroupMetadataContext"));
        let u;
        if (l[0] !== t) {
            u = function() {
                const t_fromChatWid = t.fromChatWid;
                if (t_fromChatWid) {
                    new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                        action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SUBGROUP_MENTION_CLICK,
                        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                        chat: o("WAWebChatCollection").ChatCollection.get(t_fromChatWid)
                    }).commit();
                }
                const a = r("WAWebUnjoinedSubgroupMetadataCollection").get(t.groupJid);
                if (a) {
                    o("WAWebCmd").Cmd.openCommunitySubgroupJoinModal(a, "group_mention");
                    return;
                }
                const i = r("WAWebGroupMetadataCollection").get(t.groupJid);
                if (i) {
                    o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "groupMentionWrapper").then(({ chat })=>{
                        o("WAWebCmd").Cmd.openChatBottom({
                            chat,
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Mention
                        }).then((e)=>{
                            if (e) {
                                new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                                    action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
                                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                                    chat: o("WAWebChatCollection").ChatCollection.get(t.groupJid)
                                }).commit();
                            }
                        });
                    }).catch(p);
                } else {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "No local model found for given group mention JID"
                    ])));
                }
            };
            l[0] = t;
            l[1] = u;
        } else {
            u = l[1];
        }
        const m = u;
        const _ = t.theme?.quoted ?? false;
        const f = r("WAWebGroupMetadataCollection").get(s?.parentGroup ?? "");
        const g = f != null ? f.joinedSubgroups.some((e)=>e.toString() === t.groupJid) || f.unjoinedSubgroups.some((e)=>e.toString() === t.groupJid) : false;
        const h = t.clickable === true && g === true && _ === false;
        const y = h ? m : undefined;
        let C;
        if (l[2] !== y || l[3] !== t.groupJid || l[4] !== t.groupSubject || l[5] !== t.lastMessage || l[6] !== t.selectable || l[7] !== t.theme) {
            const Component = r("WAWebMentionMutatorComponentBase.react");
            C = <Component text={t.groupSubject} jid={t.groupJid} theme={t.theme} selectable={t.selectable} lastMessage={t.lastMessage} onClick={y}/>;
            l[2] = y;
            l[3] = t.groupJid;
            l[4] = t.groupSubject;
            l[5] = t.lastMessage;
            l[6] = t.selectable;
            l[7] = t.theme;
            l[8] = C;
        } else {
            C = l[8];
        }
        return C;
    }
    function p(e) {
        return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[groupMention] findChat failed, gmd exists"
        ])));
    }
    l.default = m;
}, 98);