__d("WAWebMexFetchGroupInfoIncludBotsJob", [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebLimitSharingGatingUtils",
    "WAWebMexClient",
    "WAWebMexFetchGroupInfoIncludBotsJobAcp2Query.graphql",
    "WAWebMexFetchGroupInfoIncludBotsJobQuery.graphql",
    "WAWebMexGetTypename",
    "WAWebNewsletterRpcUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = "XWA2CommunityGroup";
    const m = "XWA2CommunityDefaultSubGroup";
    const p = "XWA2CommunitySubGroup";
    const _ = "LID";
    const f = e !== void 0 ? e : e = n("WAWebMexFetchGroupInfoIncludBotsJobQuery.graphql");
    const g = s !== void 0 ? s : s = n("WAWebMexFetchGroupInfoIncludBotsJobAcp2Query.graphql");
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupId: t, participantsPhash: r, queryContext: a }) {
            return o("WAWebNewsletterRpcUtils").runWithBackoff(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = {
                    id: t,
                    query_context: a,
                    include_username: o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
                    participants_phash: r
                };
                const n = o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled() ? yield o("WAWebMexClient").fetchQuery(g, e) : yield o("WAWebMexClient").fetchQuery(f, e);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][GROUP] fetched get group info for ",
                    ""
                ])), t).tags("GQL", "MEX");
                return n;
            }));
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupId: t, participantsPhash: n, queryContext: r }) {
            const o = R(r);
            const a = yield h({
                groupId: t,
                queryContext: o,
                participantsPhash: n
            });
            if (a != null) {
                return v(a);
            }
        });
        return b.apply(this, arguments);
    }
    function v({ xwa2_group_query_by_id: O }) {
        if (O == null) {
            return null;
        }
        const B = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        const { id: W, creation_time: q, creator: U } = O;
        const V = O.creator?.pn;
        const H = B ? O.creator?.username_info?.username : null;
        const G = O.description;
        const z = B ? O.description?.creator?.username_info?.username : null;
        const j = O.participants?.edges;
        const K = O.properties?.allow_admin_reports;
        const Q = O.properties?.allow_non_admin_sub_group_creation;
        const X = O.properties?.announcement;
        const Y = O.properties?.ephemeral?.expiration_time_in_sec;
        const J = Y != null && o("WAWebAfterReadUtils").isAfterReadEnabled() && o("WAWebAfterReadUtils").isAfterReadDuration(Y);
        const Z = O.properties?.lid_migration_state?.addressing_mode;
        const ee = Z == null || Z === _;
        const te = O.properties?.locked;
        const ne = O.properties?.member_add_mode;
        const re = O.properties?.member_link_mode;
        const oe = O.properties?.member_share_group_history_mode;
        const ae = O.properties?.membership_approval_mode_enabled;
        const ie = O.properties?.support;
        const { state: le, subject: se } = O;
        const ue = O.subject?.creator?.pn;
        const ce = B ? O.subject?.creator?.username_info?.username : null;
        const de = O.total_participants_count;
        const me = O.participants?.participants_phash_match === true;
        const pe = O.properties?.closed_by_membership_approval_mode;
        const _e = O.properties?.general_chat;
        const fe = O?.properties?.growth_locked2?.locked;
        const ge = O?.properties?.auto_add_disabled;
        const he = O?.properties?.parent_group_jid;
        const ye = O?.properties?.capi;
        const Ce = O?.properties?.hidden_group;
        const be = O?.properties?.group_safety_check;
        const ve = O?.properties?.limit_sharing;
        const Se = O?.properties?.appeal_status;
        const Re = O?.properties?.appeal_update_time;
        const Le = O?.missing_participant_identification === true;
        if (W != null && q != null && se?.value != null) {
            let Pe;
            const Ne = o("WAWebMexGetTypename").getTypename(O);
            const Me = E(me, j);
            const { isOpenBotGroup: we, isTeeBotGroup: Ae, participantsInfo: Fe } = Me;
            const Oe = {
                groupInfo: babelHelpers.extends({
                    id: o("WAWebWidFactory").createWid(W),
                    owner: U?.id != null ? o("WAWebWidFactory").createWid(U?.id) : void 0,
                    creatorPn: V != null ? o("WAWebWidFactory").createWid(V) : void 0,
                    creatorUsername: H,
                    subject: se.value,
                    creation: Number(q),
                    participants: Fe,
                    subjectTime: Number(se?.creation_time),
                    subjectOwner: se?.creator?.id != null ? o("WAWebWidFactory").createWid(se?.creator?.id) : void 0,
                    subjectOwnerPn: ue != null ? o("WAWebWidFactory").createWid(ue) : void 0,
                    subjectOwnerUsername: ce,
                    allowNonAdminSubGroupCreation: Q ?? false,
                    generalChatAutoAddDisabled: Ne === p && ge != null ? ge : false,
                    restrict: te === true,
                    announce: Ne === m || X === true,
                    support: ie ?? false,
                    desc: G?.value ?? void 0,
                    descId: G?.id ?? void 0,
                    descOwner: G?.creator?.id != null ? o("WAWebWidFactory").createWid(G?.creator?.id) : void 0,
                    descOwnerUsername: z,
                    descTime: G?.creation_time != null ? Number(G?.creation_time) : void 0,
                    size: de,
                    noFrequentlyForwarded: false,
                    ephemeralDuration: J ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration() : Y ?? void 0,
                    afterReadDuration: J ? Y : void 0,
                    membershipApprovalMode: ae ?? false,
                    memberAddMode: L(ne)
                }, Ne !== m && Ne !== d ? {
                    memberLinkMode: o("WAWebGroupMemberLinkMode").getMemberLinkModeFromMexType(re),
                    memberShareGroupHistoryMode: o("WAWebGroupHistoryShareMode").getMemberShareGroupHistoryModeFromMexType(oe)
                } : void 0, {
                    suspended: le === S.SUSPENDED,
                    suspendAppealStatus: o("WAWebSuspendAppealStatusType").toSuspendAppealStatus(Se),
                    suspendAppealUpdateTime: Re ?? null,
                    terminated: le === S.TERMINATED ? true : void 0,
                    isLidAddressingMode: ee,
                    reportToAdminMode: K ?? false,
                    isParentGroupClosed: pe === true,
                    isParentGroup: Ne === d,
                    parentGroup: he != null ? o("WAWebWidFactory").createWid(he) : void 0,
                    generalSubgroup: _e === true,
                    defaultSubgroup: Ne === m,
                    parentGroupSubject: Ne === p || Ne === m ? null : void 0,
                    numSubgroups: 0,
                    membershipApprovalRequest: O.membership_approval_request === true,
                    growthLockType: fe === true ? "invite" : void 0,
                    hasCapi: ye === true,
                    hiddenSubgroup: Ce ?? void 0,
                    groupSafetyCheck: be ?? void 0,
                    limitSharingEnabled: ve?.limit_sharing_enabled ?? void 0,
                    acp2Enabled: o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled() && (Pe = ve?.limit_companion_sharing_enabled) != null ? Pe : void 0,
                    hasIncompleteParticipantInformation: Le,
                    isOpenBotGroup: we ?? void 0,
                    isTeeBotGroup: Ae ?? void 0
                }),
                participantPhashMatch: me
            };
            return Oe;
        }
    }
    var S = {
        ACTIVE: "ACTIVE",
        TERMINATED: "NON_EXISTENT",
        SUSPENDED: "SUSPENDED"
    };
    function R(e) {
        if (e === "interactive" || e === "enter_group_info") {
            return "INTERACTIVE";
        }
        if (e === "missing_participant_identification") {
            return "MISSING_PARTICIPANT_IDENTIFICATION";
        }
        if (e === void 0 || e === "out_of_sync_update") {
            return "UNKNOWN";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function L(e) {
        switch(e){
            case "ADMIN_ADD":
                return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
            case "ALL_MEMBER_ADD":
                return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
            default:
                return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        }
    }
    function E(e, t) {
        if (e) {
            return {
                participantsInfo: [],
                isOpenBotGroup: void 0,
                isTeeBotGroup: void 0
            };
        }
        if (t == null) {
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing participants in group info participant response");
        }
        const n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        const r = o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled();
        const a = [];
        let i = false;
        let l = false;
        const s = [];
        t.forEach(({ group_history_sent: c, join_time: d, node: m, participant: p, role: _ })=>{
            let f = false;
            const g = p ?? m;
            if (g == null) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing participant or node in group info participant response");
            }
            let h;
            let y;
            let C;
            if (g.id != null) {
                h = o("WAWebWidFactory").createWid(g.id);
                if (g.lid != null) {
                    y = o("WAWebWidFactory").createWid(g.lid);
                }
                if (g.pn != null) {
                    C = o("WAWebWidFactory").createWid(g.pn);
                }
            } else if (g.jid != null) {
                h = o("WAWebWidFactory").createWid(g.jid);
                if (h.isBot()) {
                    if (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(h)) {
                        f = true;
                        i = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled();
                    } else if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(h)) {
                        l = true;
                    }
                }
            } else {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing id or jid in group info participant response");
            }
            const b = {
                id: h,
                lid: y,
                phoneNumber: C ?? null,
                displayName: g.display_name ?? null,
                isAdmin: _ === "ADMIN_MEMBER" || _ === "SUPERADMIN_MEMBER",
                isSuperAdmin: _ === "SUPERADMIN_MEMBER",
                username: n ? g.username_info?.username : null,
                joinTime: r && d != null ? d : null,
                groupHistorySentState: r ? o("WAWebGroupHistoryPostJoinTypes").groupHistorySentToState(c) : void 0
            };
            if (!f || o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled()) {
                a.push(b);
            } else if (s.length < 3) {
                s.push(h.toString());
            }
        });
        if (s.length > 0) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][GROUP] skipped ",
                " bot participants => ",
                ""
            ])), s.length, s);
        }
        return {
            participantsInfo: a,
            isOpenBotGroup: i,
            isTeeBotGroup: l
        };
    }
    l.mexGetGroupInfoIncludBots = C;
}, 98);