__d("WAWebGroupsQueryApi", [
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebAsISOCountryCode",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebJidToWid",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (!e) {
            return null;
        }
        const { bodyElementValue: t, id: n, participant: r, participantIdentityMixin: a, t: i } = e;
        const l = {
            desc: t,
            descId: n,
            descOwner: r != null ? o("WAWebJidToWid").userJidToUserWid(r) : void 0,
            descTime: o("WATimeUtils").castToUnixTime(i)
        };
        const s = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        if (s) {
            l.descOwnerUsername = a?.participantUsernameMixin?.participantUsername;
        }
        const c = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled();
        if (c) {
            const m = a?.participantPNMixin?.participantPn;
            l.descOwnerPn = m != null ? o("WAWebJidToWid").userJidToUserWid(m) : void 0;
        }
        return l;
    }
    function s(e) {
        if (!e) {
            return null;
        }
        const t = e.expiration;
        const n = o("WAWebAfterReadUtils").isAfterReadEnabled() && o("WAWebAfterReadUtils").isAfterReadDuration(t);
        if (n) {
            return {
                ephemeralDuration: o("WAWebAfterReadUtils").getAfterReadFallbackDuration(),
                afterReadDuration: t
            };
        }
        return {
            ephemeralDuration: t
        };
    }
    function u(e) {
        if (e == null) {
            return null;
        }
        const { expiration: t, type: n } = e;
        return {
            growthLockExpiration: t,
            growthLockType: n
        };
    }
    function c(e) {
        if (e == null) {
            return null;
        }
        return {
            parentGroup: o("WAWebJidToWid").groupJidToWid(e.jid),
            parentGroupSubject: e.subject
        };
    }
    function d(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "PhoneNumber" && "value" in e) {
                const t = e.value;
                return o("WAWebJidToWid").userJidToUserWid(t.phoneNumber);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "PhoneNumberAndUsernameAtt" && "value" in e) {
                const n = e.value;
                return o("WAWebJidToWid").userJidToUserWid(n.phoneNumber);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "UsernameAtt") {
                return null;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(e);
    }
    function m(e) {
        if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            return null;
        }
        switch(e.name){
            case "UsernameAtt":
            case "PhoneNumberAndUsernameAtt":
                return e.value.username;
            default:
                e.name;
                return null;
        }
    }
    function p(e) {
        const t = o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled();
        return e.map((e)=>{
            let n;
            let r;
            if (e.groupInfoParticipantMixins.name === "GroupInfoParticipantAdmin") {
                const a = e.groupInfoParticipantMixins.value.type;
                n = true;
                r = a === "superadmin";
            } else {
                e.groupInfoParticipantMixins.name;
                n = false;
                r = false;
            }
            const i = e.groupInfoParticipantMixins.value;
            const { groupHistorySent: l, joinTime: s, participantMixins: u } = i;
            const c = t ? s : void 0;
            const p = t ? o("WAWebGroupHistoryPostJoinTypes").groupHistorySentToState(l) : void 0;
            if (u.name === "ParticipantWithJid") {
                return {
                    isAdmin: n,
                    isSuperAdmin: r,
                    joinTime: c,
                    groupHistorySentState: p,
                    id: o("WAWebJidToWid").userJidToUserWid(u.value.jid)
                };
            }
            if (u.name === "ParticipantWithJidAndDisplayName") {
                return {
                    isAdmin: n,
                    isSuperAdmin: r,
                    joinTime: c,
                    groupHistorySentState: p,
                    id: o("WAWebJidToWid").userJidToUserWid(u.value.jid),
                    displayName: u.value.displayName
                };
            }
            if (u.name === "ParticipantWithJidLidAndDisplayName") {
                return {
                    isAdmin: n,
                    isSuperAdmin: r,
                    joinTime: c,
                    groupHistorySentState: p,
                    id: o("WAWebJidToWid").userJidToUserWid(u.value.jid),
                    lid: o("WAWebJidToWid").userJidToUserWid(u.value.lid),
                    displayName: u.value.displayName
                };
            }
            if (u.name === "ParticipantWithJidAndLid") {
                return {
                    isAdmin: n,
                    isSuperAdmin: r,
                    joinTime: c,
                    groupHistorySentState: p,
                    id: o("WAWebJidToWid").userJidToUserWid(u.value.jid),
                    lid: o("WAWebJidToWid").userJidToUserWid(u.value.lid)
                };
            }
            if (u.name === "ParticipantWithJidAndIdentity") {
                return {
                    isAdmin: n,
                    isSuperAdmin: r,
                    joinTime: c,
                    groupHistorySentState: p,
                    id: o("WAWebJidToWid").userJidToUserWid(u.value.jid),
                    phoneNumber: d(u.value.identityTypes),
                    username: m(u.value.identityTypes)
                };
            }
            u.name;
            return {
                isAdmin: n,
                isSuperAdmin: r,
                joinTime: c,
                groupHistorySentState: p,
                id: o("WAWebJidToWid").userJidToUserWid(u.value.jid),
                lid: null,
                displayName: u.value.displayName,
                phoneNumber: d(u.value.identityTypes),
                username: m(u.value.identityTypes)
            };
        });
    }
    function _({ creator: t, groupCreatorIdentityMixin: n }) {
        let r;
        let a;
        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            r = n?.groupCreatorUsernameMixin?.creatorUsername;
            a = n?.groupCreatorCountryCodeMixin?.creatorCountryCode;
        }
        const s = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled();
        let u;
        if (s) {
            u = n?.groupCreatorPhoneNumberMixin?.creatorPn;
        }
        return {
            creator: t != null ? o("WAWebJidToWid").userJidToUserWid(t) : void 0,
            creatorUsername: r,
            creatorCountryCode: a != null ? o("WAWebAsISOCountryCode").asISOCountryCode(a) : null,
            creatorPn: u != null ? o("WAWebJidToWid").userJidToUserWid(u) : void 0
        };
    }
    function f(e, t) {
        if (e == null) {
            return {
                subjectOwner: void 0,
                subjectOwnerUsername: void 0,
                subjectOwnerPn: void 0
            };
        }
        const r = o("WAWebJidToWid").userJidToUserWid(e);
        const a = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? t?.subjectOwnerUsernameMixin?.sOUsername : void 0;
        const i = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled();
        let l;
        if (i) {
            const u = t?.subjectOwnerPhoneNumberMixin?.sOPn;
            l = u != null ? o("WAWebJidToWid").userJidToUserWid(u) : void 0;
        }
        return {
            subjectOwner: r,
            subjectOwnerUsername: a,
            subjectOwnerPn: l
        };
    }
    function g(t) {
        const { appealStatus: g, appealUpdateTime: h, creation: y, description: C, descriptionGroupInfoDescriptionMixin: b, ephemeral: v, groupAddressingModeMixin: S, groupMemberAddModeMixin: R, groupMemberShareGroupHistoryModeMixin: L, growthLocked: E, hasAllowAdminReports: k, hasAllowNonAdminSubGroupCreation: I, hasAnnouncement: T, hasAutoAddDisabled: D, hasCapi: x, hasDefaultSubGroup: $, hasGeneralChat: P, hasLocked: N, hasMissingParticipantIdentification: M, hasNoFrequentlyForwarded: w, hasSupport: A, id: F, linkedParent: O, membershipApprovalMode: B, membershipApprovalRequest: W, namedSubjectOrUnnamedSubjectFallbackMixinGroup: q, parent: U, participant: V, size: H, sO: G, sT: z, subjectOwnerIdentityMixin: j, suspended: K } = t;
        if (F == null) {
            throw r("err")("parseGroupSmax: invalid group id");
        }
        const Q = q?.value.subject;
        if (Q == null) {
            throw r("err")("parseGroupSmax: invalid group subject");
        }
        const X = V != null ? p(V) : [];
        const Y = B?.membershipApprovalGroupJoinModeEnabledMixin?.state ?? B?.state;
        const J = o("WAWebSchemaGroupMetadata").MemberAddMode.cast(R?.memberAddModeMemberAddModes?.value.elementValue);
        const Z = o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.cast(L?.memberShareGroupHistoryModeMemberShareGroupHistoryModes?.value.elementValue);
        const ee = C?.groupInfoDescriptionMixin ?? b;
        const te = _(t);
        const { creator: ne, creatorCountryCode: re, creatorPn: oe, creatorUsername: ae } = te;
        const ie = f(G, j);
        const { subjectOwner: le, subjectOwnerPn: se, subjectOwnerUsername: ue } = ie;
        const ce = babelHelpers.extends({
            id: o("WAWebWidFactory").createWid(`${F}@g.us`),
            owner: ne,
            creatorPn: oe,
            creatorUsername: ae,
            creatorCountryCode: re,
            creation: y,
            restrict: !!N,
            announce: !!T,
            noFrequentlyForwarded: !!w,
            support: A,
            suspended: K != null,
            suspendAppealStatus: o("WAWebSuspendAppealStatusType").toSuspendAppealStatus(g?.type),
            suspendAppealUpdateTime: h?.value != null ? h.value : null,
            isParentGroup: U != null,
            numSubgroups: U?.numSubGroups,
            participants: X,
            isParentGroupClosed: U?.parentGroupDefaultMembershipApprovalModeMixin?.defaultMembershipApprovalMode === "request_required",
            defaultSubgroup: $,
            generalSubgroup: P,
            membershipApprovalMode: Y === "on",
            reportToAdminMode: k,
            membershipApprovalRequest: W,
            isLidAddressingMode: S?.addressingMode == null || S?.addressingMode === "lid",
            memberAddMode: J,
            memberShareGroupHistoryMode: Z,
            allowNonAdminSubGroupCreation: I
        }, ee && e(ee), v && s(v), u(E), c(O), {
            subject: Q,
            subjectTime: z,
            subjectOwner: le,
            subjectOwnerUsername: ue,
            subjectOwnerPn: se,
            size: H,
            generalChatAutoAddDisabled: !!D,
            hasCapi: x,
            hasIncompleteParticipantInformation: M === true
        });
        return ce;
    }
    function h(e) {
        const t = e.maybeChild("linked_parent");
        const n = t?.maybeAttrGroupJid("jid");
        if (n == null) {
            return null;
        }
        return {
            parentGroup: o("WAWebJidToWid").groupJidToWid(n),
            parentGroupSubject: t?.maybeAttrString("subject")
        };
    }
    l.extractDescriptionSmax = e;
    l.extractUsernameFromIdentityTypes = m;
    l.extractGroupParticipantsSmax = p;
    l.parseGroupCreatorSmax = _;
    l.parseSubjectOwnerSmax = f;
    l.parseGroupSmax = g;
    l.extractLinkedParent = h;
}, 98);