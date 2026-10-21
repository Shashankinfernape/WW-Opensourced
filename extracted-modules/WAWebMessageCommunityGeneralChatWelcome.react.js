__d("WAWebMessageCommunityGeneralChatWelcome.react", [
    "fbt",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebFormatParticipantNames",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebWamEnumAddMembersEntrypointType",
    "WDSPaddings.stylex",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    function m(t) {
        const a = o("react-compiler-runtime").c(38);
        const { author, subgroupChat, templateParams } = t;
        const m = templateParams[0];
        const p = templateParams[1];
        if (subgroupChat.groupMetadata?.parentGroup == null) {
            let _;
            if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
                _ = (e || (e = r("stylex"))).props(d.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingHor12);
                a[0] = _;
            } else {
                _ = a[0];
            }
            let f;
            if (a[1] !== subgroupChat.formattedTitle) {
                f = o("WAWebMessageCommunityGeneralChatWelcomeTitle.react").communityGeneralChatWelcomeTitle(subgroupChat.formattedTitle);
                a[1] = subgroupChat.formattedTitle;
                a[2] = f;
            } else {
                f = a[2];
            }
            let g;
            if (a[3] !== f) {
                g = <div {...babelHelpers.extends({}, _, {
                    children: f
                })}/>;
                a[3] = f;
                a[4] = g;
            } else {
                g = a[4];
            }
            return g;
        }
        const parentGroup = subgroupChat.groupMetadata.parentGroup;
        let y;
        let C;
        let b;
        if (a[5] !== p || a[6] !== parentGroup || a[7] !== subgroupChat.formattedTitle) {
            const S = o("WAWebChatCollection").ChatCollection.get(parentGroup);
            y = S?.formattedTitle;
            C = p ?? subgroupChat?.formattedTitle;
            b = S?.iAmAdmin() ?? false;
            a[5] = p;
            a[6] = parentGroup;
            a[7] = subgroupChat.formattedTitle;
            a[8] = y;
            a[9] = C;
            a[10] = b;
        } else {
            y = a[8];
            C = a[9];
            b = a[10];
        }
        const R = b;
        let L;
        if (a[11] !== R || a[12] !== parentGroup || a[13] !== y || a[14] !== subgroupChat) {
            L = function() {
                if (R) {
                    if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
                        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
                        return;
                    }
                    o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
                        groupMetadata: r("nullthrows")(subgroupChat.groupMetadata),
                        chat: subgroupChat,
                        communityName: y,
                        entryPoint: o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.COMMUNITY_CONTEXT_CARD,
                        reopenAddGroupFlowCallback: L
                    });
                } else {
                    o("WAWebCmd").Cmd.openCommunityTabbedInfo(parentGroup);
                }
            };
            a[11] = R;
            a[12] = parentGroup;
            a[13] = y;
            a[14] = subgroupChat;
            a[15] = L;
        } else {
            L = a[15];
        }
        let E;
        e: switch(m){
            case "created":
                {
                    let k;
                    if (a[16] === Symbol.for("react.memo_cache_sentinel")) {
                        k = !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && s._("Any new community members will automatically be added here");
                        a[16] = k;
                    } else {
                        k = a[16];
                    }
                    E = k;
                    break e;
                }
            case "subtype-general_chat_add":
                {
                    let I;
                    if (a[17] === Symbol.for("react.memo_cache_sentinel")) {
                        I = !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && s._("You were added to this group when you joined the community");
                        a[17] = I;
                    } else {
                        I = a[17];
                    }
                    E = I;
                    break e;
                }
            case "accept":
            case "":
            case null:
                {
                    let T;
                    if (a[18] !== author) {
                        T = o("WAWebFormatParticipantNames").getFormattedNames(author);
                        a[18] = author;
                        a[19] = T;
                    } else {
                        T = a[19];
                    }
                    const D = T;
                    if (D != null && D !== "") {
                        let x;
                        if (a[20] !== D) {
                            x = s._("{admin_name} added you", [
                                s._param("admin_name", D)
                            ]);
                            a[20] = D;
                            a[21] = x;
                        } else {
                            x = a[21];
                        }
                        E = x;
                    } else {
                        let $;
                        if (a[22] === Symbol.for("react.memo_cache_sentinel")) {
                            $ = s._("You joined this group");
                            a[22] = $;
                        } else {
                            $ = a[22];
                        }
                        E = $;
                    }
                    break e;
                }
            case "invite":
            case "linked_group_join":
            default:
                {
                    let P;
                    if (a[23] === Symbol.for("react.memo_cache_sentinel")) {
                        P = s._("You joined this group");
                        a[23] = P;
                    } else {
                        P = a[23];
                    }
                    E = P;
                }
        }
        let N;
        if (a[24] === Symbol.for("react.memo_cache_sentinel")) {
            N = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() ? s._("All community members can join and use this chat to message each other.") : s._("All community members can use this chat to talk with each other");
            a[24] = N;
        } else {
            N = a[24];
        }
        const M = N;
        let w;
        if (a[25] !== E) {
            w = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && !E ? <>{M}</> : c.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
                items: [
                    <>{E}</>,
                    <>{M}</>
                ]
            });
            a[25] = E;
            a[26] = w;
        } else {
            w = a[26];
        }
        const A = w;
        let F;
        if (a[27] !== R) {
            F = R ? s._("Add members") : s._("Explore the community");
            a[27] = R;
            a[28] = F;
        } else {
            F = a[28];
        }
        const O = F;
        const subgroupChat_id = subgroupChat.id;
        let W;
        if (a[29] !== C) {
            W = o("WAWebMessageCommunityGeneralChatWelcomeTitle.react").communityGeneralChatWelcomeTitle(C);
            a[29] = C;
            a[30] = W;
        } else {
            W = a[30];
        }
        let q;
        if (a[31] !== A || a[32] !== O || a[33] !== L || a[34] !== parentGroup || a[35] !== subgroupChat.id || a[36] !== W) {
            const Component = o("WAWebMessageCommunityCard.react").MessageCommunityCard;
            q = <Component communityId={parentGroup} subgroupId={subgroupChat_id} title={W} body={A} footer={O} onFooterClick={L}/>;
            a[31] = A;
            a[32] = O;
            a[33] = L;
            a[34] = parentGroup;
            a[35] = subgroupChat.id;
            a[36] = W;
            a[37] = q;
        } else {
            q = a[37];
        }
        return q;
    }
    l.default = m;
}, 226);