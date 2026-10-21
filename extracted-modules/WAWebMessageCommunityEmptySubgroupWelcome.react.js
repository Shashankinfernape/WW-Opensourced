__d("WAWebMessageCommunityEmptySubgroupWelcome.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatCollection",
    "WAWebCommunitySubgroupImage.react",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebExistingGroupPermissionsDrawerLoadable",
    "WAWebFlex.react",
    "WAWebGroupInviteLinkDrawerLoadable",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumAddMembersEntrypointType",
    "WDSIconIcLink.react",
    "WDSIconIcPersonAdd.react",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        button: {
            display: "x78zum5",
            width: "xh8yej3",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            $$css: true
        },
        tealLighterColor: {
            color: "x1v5yvga",
            $$css: true
        },
        marginTop8: {
            marginTop: "x1380le5",
            $$css: true
        },
        marginBottom4: {
            marginBottom: "x4tpdpg",
            $$css: true
        },
        marginVert20: {
            marginTop: "x1nmyh1g",
            marginBottom: "xdqhqc9",
            $$css: true
        },
        marginEnd8: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function d(e) {
        const n = o("react-compiler-runtime").c(40);
        const { subgroupChat, templateParams } = e;
        const l = templateParams[0];
        const d = templateParams[1];
        const m = templateParams[2];
        const p = templateParams[3];
        const _ = templateParams[4];
        let f;
        if (n[0] !== l) {
            f = o("WAWebChatCollection").ChatCollection.get(l);
            n[0] = l;
            n[1] = f;
        } else {
            f = n[1];
        }
        const g = f;
        const h = g?.formattedTitle ?? d;
        const y = m ?? subgroupChat.formattedTitle;
        const C = p === "true";
        const b = _ === "true";
        let v;
        if (n[2] !== subgroupChat.groupMetadata) {
            v = o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(subgroupChat.groupMetadata);
            n[2] = subgroupChat.groupMetadata;
            n[3] = v;
        } else {
            v = n[3];
        }
        const S = v;
        let R;
        if (n[4] !== g || n[5] !== subgroupChat.id) {
            const Component = o("WAWebFlex.react").FlexRow;
            R = g ? <Component align="center" justify="center">{u.jsx(r("WAWebCommunitySubgroupImage.react"), {
                chatId: subgroupChat.id,
                parentGroupChatId: g.id,
                size: 49
            })}</Component> : null;
            n[4] = g;
            n[5] = subgroupChat.id;
            n[6] = R;
        } else {
            R = n[6];
        }
        const L = R;
        let E;
        if (n[7] !== h || n[8] !== subgroupChat) {
            E = function() {
                if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
                    return;
                }
                const reopenAddGroupFlowCallback = function() {
                    return E();
                };
                o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
                    groupMetadata: r("nullthrows")(subgroupChat.groupMetadata),
                    chat: subgroupChat,
                    communityName: h,
                    entryPoint: o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.COMMUNITY_EMPTY_SUBGROUP,
                    reopenAddGroupFlowCallback
                });
            };
            n[7] = h;
            n[8] = subgroupChat;
            n[9] = E;
        } else {
            E = n[9];
        }
        let k;
        if (n[10] !== subgroupChat) {
            k = function() {
                const Component = o("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={subgroupChat} groupMetadata={r("nullthrows")(subgroupChat.groupMetadata)} onBack={o("WAWebDrawerManager").closeDrawerRight} onGroupSettings={function() {
                    const Component = o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable;
                    return o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "existing_group_permissions",
                        chat: subgroupChat,
                        groupMetadata: r("nullthrows")(subgroupChat.groupMetadata)
                    } : <Component chat={subgroupChat} groupMetadata={r("nullthrows")(subgroupChat.groupMetadata)} onClose={o("WAWebDrawerManager").closeDrawerRight}/>);
                }}/>);
            };
            n[10] = subgroupChat;
            n[11] = k;
        } else {
            k = n[11];
        }
        const I = k;
        let T;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            T = s._("It was added to the community");
            n[12] = T;
        } else {
            T = n[12];
        }
        let D = T;
        if (h) {
            if (b === true) {
                let x;
                if (n[13] !== h) {
                    x = s._("It was added to the community \"{community_name}\". Only people in the community who have been invited can see and join this group.", [
                        s._param("community_name", h)
                    ]);
                    n[13] = h;
                    n[14] = x;
                } else {
                    x = n[14];
                }
                D = x;
            } else {
                let $;
                if (n[15] !== C || n[16] !== h) {
                    $ = C === true ? s._("It was added to the community \"{community_name}\". Anyone in the community can request to join this group.", [
                        s._param("community_name", h)
                    ]) : s._("It was added to the community \"{community_name}\". Anyone in the community can join this group.", [
                        s._param("community_name", h)
                    ]);
                    n[15] = C;
                    n[16] = h;
                    n[17] = $;
                } else {
                    $ = n[17];
                }
                D = $;
            }
        }
        let P;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            P = {
                className: "x1iw51ew xde1mab x1xrf6ya xscbp6u xso031l x1q0q8m5 x120ee7l"
            };
            n[18] = P;
        } else {
            P = n[18];
        }
        let N;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            N = [
                c.marginTop8,
                c.marginBottom4
            ];
            n[19] = N;
        } else {
            N = n[19];
        }
        let M;
        if (n[20] !== y) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            M = <Component_1 xstyle={N} justify="center"><Component color="primary" weight="medium">{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: s._("You created the group: {subgroup_name}", [
                    s._param("subgroup_name", y)
                ])
            })}</Component></Component_1>;
            n[20] = y;
            n[21] = M;
        } else {
            M = n[21];
        }
        let w;
        if (n[22] !== D) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            w = <Component_1 justify="center"><Component>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: D
            })}</Component></Component_1>;
            n[22] = D;
            n[23] = w;
        } else {
            w = n[23];
        }
        let A;
        if (n[24] !== L || n[25] !== M || n[26] !== w) {
            A = <div {...babelHelpers.extends({}, P, {
                children: [
                    L,
                    M,
                    w
                ]
            })}/>;
            n[24] = L;
            n[25] = M;
            n[26] = w;
            n[27] = A;
        } else {
            A = n[27];
        }
        let F;
        if (n[28] === Symbol.for("react.memo_cache_sentinel")) {
            F = [
                c.button,
                c.marginVert20
            ];
            n[28] = F;
        } else {
            F = n[28];
        }
        let O;
        let B;
        if (n[29] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            O = <Component align="center" justify="end" xstyle={c.marginEnd8}>{u.jsx(r("WDSIconIcPersonAdd.react"), {
                iconXstyle: c.tealLighterColor,
                height: 20
            })}</Component>;
            B = <span className="x1v5yvga xeuugli x1u7k74 x1f6kntn">{s._("Add members")}</span>;
            n[29] = O;
            n[30] = B;
        } else {
            O = n[29];
            B = n[30];
        }
        let W;
        if (n[31] !== E) {
            const Component = r("WAWebUnstyledButton.react");
            W = <Component onClick={E} xstyle={F}>{O}{B}</Component>;
            n[31] = E;
            n[32] = W;
        } else {
            W = n[32];
        }
        let q;
        if (n[33] !== S || n[34] !== I) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = r("WAWebUnstyledButton.react");
            q = !S && <Component_1 onClick={I} xstyle={[
                c.button,
                c.marginVert20
            ]}><Component align="center" justify="end" xstyle={c.marginEnd8}>{u.jsx(r("WDSIconIcLink.react"), {
                testid: "ic-link",
                iconXstyle: c.tealLighterColor,
                height: 20
            })}</Component><span className="x1v5yvga xeuugli x1u7k74 x1f6kntn">{s._("Invite to group via link")}</span></Component_1>;
            n[33] = S;
            n[34] = I;
            n[35] = q;
        } else {
            q = n[35];
        }
        let U;
        if (n[36] !== A || n[37] !== W || n[38] !== q) {
            U = <>{A}{W}{q}</>;
            n[36] = A;
            n[37] = W;
            n[38] = q;
            n[39] = U;
        } else {
            U = n[39];
        }
        return U;
    }
    l.default = d;
}, 226);