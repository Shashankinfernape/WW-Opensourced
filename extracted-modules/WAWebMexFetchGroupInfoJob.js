__d("WAWebMexFetchGroupInfoJob", [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebLimitSharingGatingUtils",
    "WAWebMexClient",
    "WAWebMexFetchGroupInfoJobAcp2Query.graphql",
    "WAWebMexFetchGroupInfoJobQuery.graphql",
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
    const c = "XWA2CommunityGroup";
    const d = "XWA2CommunityDefaultSubGroup";
    const m = "XWA2CommunitySubGroup";
    const p = "LID";
    const _ = e !== void 0 ? e : e = n("WAWebMexFetchGroupInfoJobQuery.graphql");
    const f = s !== void 0 ? s : s = n("WAWebMexFetchGroupInfoJobAcp2Query.graphql");
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupId: t, participantsPhash: r, queryContext: a }) {
            return o("WAWebNewsletterRpcUtils").runWithBackoff(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = {
                    id: t,
                    query_context: a,
                    include_username: o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
                    participants_phash: r
                };
                const n = o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled() ? yield o("WAWebMexClient").fetchQuery(f, e) : yield o("WAWebMexClient").fetchQuery(_, e);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][GROUP] fetched get group info for ",
                    ""
                ])), t).tags("GQL", "MEX");
                return n;
            }));
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupId: t, participantsPhash: n, queryContext: r }) {
            const o = S(r);
            const a = yield g({
                groupId: t,
                queryContext: o,
                participantsPhash: n
            });
            if (a != null) {
                return b(a);
            }
        });
        return C.apply(this, arguments);
    }
    function b({ xwa2_group_query_by_id: O }) {
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
        const ee = Z == null || Z === p;
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
            const Me = {
                groupInfo: babelHelpers.extends({
                    id: o("WAWebWidFactory").createWid(W),
                    owner: U?.id != null ? o("WAWebWidFactory").createWid(U?.id) : void 0,
                    creatorPn: V != null ? o("WAWebWidFactory").createWid(V) : void 0,
                    creatorUsername: H,
                    subject: se.value,
                    creation: Number(q),
                    participants: L(me, j),
                    subjectTime: Number(se?.creation_time),
                    subjectOwner: se?.creator?.id != null ? o("WAWebWidFactory").createWid(se?.creator?.id) : void 0,
                    subjectOwnerPn: ue != null ? o("WAWebWidFactory").createWid(ue) : void 0,
                    subjectOwnerUsername: ce,
                    allowNonAdminSubGroupCreation: Q ?? false,
                    generalChatAutoAddDisabled: Ne === m && ge != null ? ge : false,
                    restrict: te === true,
                    announce: Ne === d || X === true,
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
                    memberAddMode: R(ne)
                }, Ne !== d && Ne !== c ? {
                    memberLinkMode: o("WAWebGroupMemberLinkMode").getMemberLinkModeFromMexType(re),
                    memberShareGroupHistoryMode: o("WAWebGroupHistoryShareMode").getMemberShareGroupHistoryModeFromMexType(oe)
                } : void 0, {
                    suspended: le === v.SUSPENDED,
                    suspendAppealStatus: o("WAWebSuspendAppealStatusType").toSuspendAppealStatus(Se),
                    suspendAppealUpdateTime: Re ?? null,
                    terminated: le === v.TERMINATED ? true : void 0,
                    isLidAddressingMode: ee,
                    reportToAdminMode: K ?? false,
                    isParentGroupClosed: pe === true,
                    isParentGroup: Ne === c,
                    parentGroup: he != null ? o("WAWebWidFactory").createWid(he) : void 0,
                    generalSubgroup: _e === true,
                    defaultSubgroup: Ne === d,
                    parentGroupSubject: Ne === m || Ne === d ? null : void 0,
                    numSubgroups: 0,
                    membershipApprovalRequest: O.membership_approval_request === true,
                    growthLockType: fe === true ? "invite" : void 0,
                    hasCapi: ye === true,
                    hiddenSubgroup: Ce ?? void 0,
                    groupSafetyCheck: be ?? void 0,
                    limitSharingEnabled: ve?.limit_sharing_enabled ?? void 0,
                    acp2Enabled: o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled() && (Pe = ve?.limit_companion_sharing_enabled) != null ? Pe : void 0,
                    hasIncompleteParticipantInformation: Le
                }),
                participantPhashMatch: me
            };
            return Me;
        }
    }
    var v = {
        ACTIVE: "ACTIVE",
        TERMINATED: "NON_EXISTENT",
        SUSPENDED: "SUSPENDED"
    };
    function S(e) {
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
    function R(e) {
        switch(e){
            case "ADMIN_ADD":
                return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
            case "ALL_MEMBER_ADD":
                return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
            default:
                return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        }
    }
    function L(e, t) {
        if (e) {
            return [];
        }
        if (t == null) {
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing participants in group info participant response");
        }
        const n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        const r = o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled();
        const a = t.map(({ group_history_sent: i, join_time: l, node: s, role: u })=>{
            let c;
            let d;
            let m;
            if (s.id == null) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "missing id in group info participant response");
            }
            c = o("WAWebWidFactory").createWid(s.id);
            if (s.lid != null) {
                d = o("WAWebWidFactory").createWid(s.lid);
            }
            if (s.pn != null) {
                m = o("WAWebWidFactory").createWid(s.pn);
            }
            return {
                id: c,
                lid: d,
                phoneNumber: m ?? null,
                displayName: s.display_name ?? null,
                isAdmin: u === "ADMIN_MEMBER" || u === "SUPERADMIN_MEMBER",
                isSuperAdmin: u === "SUPERADMIN_MEMBER",
                username: n ? s.username_info?.username : null,
                joinTime: r && l != null ? l : null,
                groupHistorySentState: r ? o("WAWebGroupHistoryPostJoinTypes").groupHistorySentToState(i) : void 0
            };
        });
        return a;
    }
    l.mexGetGroupInfo = y;
}, 98);