__d("WAWebSetPropertyGroupAction", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseEach",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebGroupConstants",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupModifyInfoJob",
    "WAWebLimitSharingUIUtils",
    "WAWebMexUpdateGroupPropertyJob",
    "WAWebMiscErrors",
    "WAWebSchemaGroupMetadata",
    "WAWebSendForAdminReviewUtils",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = {
        announcement: "announce",
        restrict: "restrict",
        no_frequently_forwarded: "noFrequentlyForwarded",
        ephemeral: "ephemeralDuration",
        membership_approval_mode: "membershipApprovalMode",
        report_to_admin_mode: "reportToAdminMode",
        allow_non_admin_sub_group_creation: "allowNonAdminSubGroupCreation",
        member_add_mode: "memberAddMode",
        member_link_mode: "memberLinkMode",
        member_share_group_history_mode: "memberShareGroupHistoryMode"
    };
    function _(settingType, t) {
        if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL) {
            return t;
        }
        if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE) {
            if (t === 1) {
                return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
            }
            return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        }
        if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE) {
            if (t === 1) {
                return o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
            }
            return o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK;
        }
        if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE) {
            if (t === 1) {
                return o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE;
            }
            return o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ADMIN_SHARE;
        }
        return t === 1;
    }
    function f(e, t, n) {
        return b({
            chat: o("WAWebStateUtils").unproxy(e),
            settingType: t,
            value: n
        });
    }
    function g(e, t, n) {
        return b({
            chat: o("WAWebStateUtils").unproxy(e),
            openToast,
            settingType: t,
            value: n
        });
    }
    function h(e, t) {
        let r;
        const a = {
            [(r = o("WAWebGroupConstants")).GROUP_SETTING_TYPE.ANNOUNCEMENT]: {
                on: [
                    s._("Allowing all members to send messages to this group"),
                    s._("You allowed all members to send messages to this group")
                ],
                off: [
                    s._("Allowing only admins to send messages to this group"),
                    s._("You allowed only admins to send messages to this group")
                ]
            },
            [r.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE]: {
                on: [
                    s._("Allowing reports to admin in this chat"),
                    s._("You turned on reports to admin in this chat")
                ],
                off: [
                    s._("Disabling reports to admin in this chat"),
                    s._("You turned off reports to admin in this chat")
                ]
            },
            [r.GROUP_SETTING_TYPE.RESTRICT]: {
                on: [
                    s._("Allowing all members to change this group's info"),
                    s._("You allowed all members to change this group's info")
                ],
                off: [
                    s._("Allowing only admins to change this group's info"),
                    s._("You allowed only admins to change this group's info")
                ]
            },
            [r.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED]: {
                on: [
                    s._("Blocking members from sending messages that have been forwarded many times to this group"),
                    s._("You blocked members from sending messages that have been forwarded many times to this group")
                ],
                off: [
                    s._("Allowing members to send messages that have been forwarded many times to this group"),
                    s._("You allowed members to send messages that have been forwarded many times to this group")
                ]
            },
            [r.GROUP_SETTING_TYPE.EPHEMERAL]: {
                on: [
                    s._("Turning on disappearing messages in this chat"),
                    s._("You turned on disappearing messages in this chat")
                ],
                off: [
                    s._("Turning off disappearing messages in this chat"),
                    s._("You turned off disappearing messages in this chat")
                ]
            },
            [r.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE]: {
                on: [
                    s._("Turning on membership approval mode in this chat"),
                    s._("You turned on membership approval mode in this chat")
                ],
                off: [
                    s._("Turning off membership approval mode in this chat"),
                    s._("You turned off membership approval mode in this chat")
                ]
            },
            [r.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION]: {
                on: [
                    s._("Allowing all community members to add groups in this community"),
                    s._("You allowed all community members to add groups in this community")
                ],
                off: [
                    s._("Allowing only community admins to add groups"),
                    s._("You allowed only community admins to add groups in this community")
                ]
            },
            [r.GROUP_SETTING_TYPE.MEMBER_ADD_MODE]: {
                on: [
                    s._("Allowing all members to add others to this group"),
                    s._("You allowed all members to add others to this group")
                ],
                off: [
                    s._("Allowing only admins to add others to this group"),
                    s._("You allowed only admins to add others to this group")
                ]
            },
            [r.GROUP_SETTING_TYPE.MEMBER_LINK_MODE]: {
                on: [
                    s._("Allowing all members to share invite links to this group"),
                    s._("You allowed all members to share invite links to this group")
                ],
                off: [
                    s._("Allowing only admins to share invite links to this group"),
                    s._("You allowed only admins to share invite links to this group")
                ]
            },
            [r.GROUP_SETTING_TYPE.LIMIT_SHARING]: o("WAWebLimitSharingUIUtils").getLimitSharingGroupUpdateActionStrings(),
            [r.GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE]: {
                on: [
                    s._("Allowing all members to send message history to new members in this group"),
                    s._("You allowed all members to send message history to new members in this group")
                ],
                off: [
                    s._("Allowing only admins to send message history to new members in this group"),
                    s._("You allowed only admins to send message history to new members in this group")
                ]
            }
        };
        return a[e][t];
    }
    function y(chat, settingType, n) {
        if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE && chat.isCAG()) {
            return C(n);
        }
        return h(settingType, n);
    }
    function C(e) {
        if (e === "on") {
            return [
                s._("Allowing everyone to add other members"),
                s._("Everyone can add other members")
            ];
        }
        return [
            s._("Allowing only community admins to add other members"),
            s._("Only community admins can add other members")
        ];
    }
    function b(t) {
        let r;
        let a;
        const { chat, openToast } = t;
        const d = openToast === undefined ? v : openToast;
        const { settingType, toastId } = t;
        const h = toastId === undefined ? o("WAWebActionToast.react").genId() : toastId;
        const t_value = t.value;
        if (!settingType) {
            return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL && !((r = chat.groupMetadata) != null && r.canSetEphemeralSetting())) {
            return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        let S = false;
        if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL) {
            S = true;
        }
        if ((settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING || settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE) && chat.isCAGAdmin()) {
            S = true;
        }
        if (!S && !((a = chat.groupMetadata) != null && a.canSetGroupProperty())) {
            return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const actionText = s._("Try again.");
        const L = (t = true)=>new (o("WAWebActionToast.react")).ActionType(s._("Group setting could not be changed"), t ? {
                actionText,
                actionHandler: function() {
                    return b({
                        chat,
                        settingType,
                        toastId: h,
                        value: t_value
                    });
                }
            } : undefined);
        const E = settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT || settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT || settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED ? 1 : 0;
        const k = t_value === E ? "off" : "on";
        const I = y(chat, settingType, k);
        const T = I[0];
        const D = I[1];
        const x = new (o("WAWebActionToast.react")).ActionType(T);
        const $ = ()=>{
            if (settingType !== o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING) {
                chat.groupMetadata?.set(p[settingType], _(settingType, t_value));
            }
            if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE && !t_value) {
                o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(chat);
            }
            if (settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION) {
                const t = t_value === 0 ? o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SELECT_COMMUNITY_ADMINS_CAN_ADD_GROUPS : o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SELECT_EVERYONE_CAN_ADD_GROUPS;
                new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                    action: t,
                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_SETTINGS,
                    chat
                }).commit();
            }
            return new (o("WAWebActionToast.react")).ActionType(D);
        };
        const P = (n, r, a = true)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error while setting property ",
                ""
            ])), settingType);
            return L(a);
        };
        const N = (t)=>{
            const e = o("WAPromiseEach").promiseEach(t, function(e) {
                return o("WAWebMexUpdateGroupPropertyJob").mexUpdateGroupPropertyJob(chat.id.toString(), e);
            });
            return {
                action: e,
                pendingAction: e.then((e)=>$()).catch((e)=>{
                    let t = true;
                    let e_code = e.code;
                    if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                        e_code = e.status;
                        if (e.status === 403 || e.status === 405 || e.status === 429) {
                            t = false;
                        }
                    }
                    return P(e_code, e.message, t);
                })
            };
        };
        const M = ()=>{
            const e = o("WAWebGroupModifyInfoJob").setGroupProperty(chat.id, settingType, t_value);
            return {
                action: e,
                pendingAction: e.then((e)=>{
                    switch(e?.name){
                        case "SetPropertyResponseSuccess":
                            return $();
                        case "SetPropertyResponseClientError":
                            {
                                const t = e.value.errorSetPropertyClientErrors.value;
                                const { code, text } = t;
                                return P(code, text);
                            }
                        case "SetPropertyResponseServerError":
                            {
                                const o = e.value.errorServerErrors.value;
                                const { code, text } = o;
                                return P(code, text);
                            }
                    }
                }, (e)=>{
                    const value = e.value.errorServerErrors.value;
                    const { code, text } = value;
                    return P(code, text);
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                    if (e.status === 404) {
                        return new (o("WAWebActionToast.react")).ActionType(`${s._("Group setting could not be changed").toString()} ${s._("This group has ended.").toString()}`);
                    }
                })).catch((e)=>{
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while setting property"
                    ])));
                    return L();
                })
            };
        };
        let w;
        switch(settingType){
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                w = N([
                    {
                        allow_non_admin_sub_group_creation: t_value === 1
                    }
                ]);
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING:
                w = N([
                    {
                        limit_sharing: {
                            limit_sharing_enabled: t_value === 1,
                            limit_sharing_trigger: "CHAT_SETTING"
                        }
                    }
                ]);
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
                {
                    const F = [
                        {
                            member_add_mode: t_value === 1 ? "ALL_MEMBER_ADD" : "ADMIN_ADD"
                        }
                    ];
                    if (t_value === 0 && !chat.isCAG() && chat.groupMetadata?.memberLinkMode !== o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK) {
                        F.push({
                            member_link_mode: "ADMIN_LINK"
                        });
                    }
                    w = N(F);
                    break;
                }
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE:
                w = N([
                    {
                        member_link_mode: t_value === 1 ? "ALL_MEMBER_LINK" : "ADMIN_LINK"
                    }
                ]);
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE:
                w = N([
                    {
                        member_share_group_history_mode: t_value === 1 ? "ALL_MEMBER_SHARE" : "ADMIN_SHARE"
                    }
                ]);
                break;
        }
        if (!w) {
            w = M();
        }
        const O = w;
        const { action, pendingAction } = O;
        d(m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: h,
            initialAction: x,
            pendingAction
        }));
        return action;
    }
    function v(e) {
        o("WAWebToastManager").ToastManager.open(e);
    }
    function openToast(e) {}
    l.setGroupProperty = f;
    l.setGroupPropertyWithoutToast = g;
    l.getActionString = h;
}, 226);