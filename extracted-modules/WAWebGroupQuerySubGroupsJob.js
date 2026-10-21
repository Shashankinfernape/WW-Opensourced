__d("WAWebGroupQuerySubGroupsJob", [
    "Promise",
    "WALogger",
    "WASmaxGroupsGetLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ anyJoinedSubgroupId, parentGroupId, subgroupId }) {
            const l = yield o("WASmaxGroupsGetLinkedGroupRPC").sendGetLinkedGroupRPC({
                iqTo: o("WAWebWidToJid").widToGroupJid(parentGroupId),
                queryLinkedType: "sub_group",
                queryLinkedJid: o("WAWebWidToJid").widToGroupJid(subgroupId),
                optionalSubGroupMixinArgs: anyJoinedSubgroupId ? {
                    anySubGroupJid: o("WAWebWidToJid").widToGroupJid(anyJoinedSubgroupId)
                } : null
            });
            e: {
                const c = l;
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.name === "GetLinkedGroupResponseSuccess" && "value" in c) {
                    const d = c.value;
                    const m = d.linkedGroupLinkedGroupInfoMixin;
                    const { groupDescriptionGroupInfoDescriptionMixin, groupGroupInfoAttributesMixin } = m;
                    const creation = groupGroupInfoAttributesMixin.creation;
                    const g = groupGroupInfoAttributesMixin.namedSubjectOrUnnamedSubjectFallbackMixinGroup.value.subject;
                    const { sO, sT: subjectTime, subjectOwnerIdentityMixin } = groupGroupInfoAttributesMixin;
                    const { groupMembershipApprovalMode, groupMembershipApprovalRequest, groupParticipant, groupSize, groupSuspended, hasGroupAdminRequestRequired, hasGroupHiddenGroup, jid } = m;
                    const T = groupDescriptionGroupInfoDescriptionMixin != null && o("WAWebGroupsQueryApi").extractDescriptionSmax(groupDescriptionGroupInfoDescriptionMixin);
                    const D = babelHelpers.extends({
                        id: o("WAWebJidToWid").groupJidToWid(jid),
                        creation,
                        subjectTime,
                        participants: o("WAWebGroupsQueryApi").extractGroupParticipantsSmax(groupParticipant),
                        size: groupSize,
                        adminRequestRequired: hasGroupAdminRequestRequired,
                        membershipApprovalRequest: groupMembershipApprovalRequest != null && groupMembershipApprovalRequest.error !== "304",
                        membershipApprovalMode: groupMembershipApprovalMode?.state === "on",
                        suspended: groupSuspended != null,
                        hiddenSubgroup: hasGroupHiddenGroup
                    }, T);
                    const x = o("WAWebGroupsQueryApi").parseGroupCreatorSmax(d.linkedGroupLinkedGroupInfoMixin.groupGroupInfoAttributesMixin);
                    const { creator, creatorCountryCode, creatorPn, creatorUsername } = x;
                    if (creator != null) {
                        D.owner = creator;
                        if (creatorUsername != null) {
                            D.creatorUsername = creatorUsername;
                        }
                        if (creatorCountryCode != null) {
                            D.creatorCountryCode = creatorCountryCode;
                        }
                        if (creatorPn != null) {
                            D.creatorPn = creatorPn;
                        }
                    }
                    if (g != null) {
                        D.subject = g;
                    }
                    const w = o("WAWebGroupsQueryApi").parseSubjectOwnerSmax(sO, subjectOwnerIdentityMixin);
                    const { subjectOwner, subjectOwnerPn, subjectOwnerUsername } = w;
                    if (subjectOwner != null) {
                        D.subjectOwner = subjectOwner;
                        if (subjectOwnerUsername != null) {
                            D.subjectOwnerUsername = subjectOwnerUsername;
                        }
                        if (subjectOwnerPn != null) {
                            D.subjectOwnerPn = subjectOwnerPn;
                        }
                    }
                    return D;
                    break e;
                }
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.name === "GetLinkedGroupResponseClientError" && "value" in c) {
                    const B = c.value;
                    const W = B.errorGetLinkedGroupClientErrors.value;
                    const { code, text } = W;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "joinSubgroup failed: ",
                        ""
                    ])), l.name);
                    return (u || (u = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                    break e;
                }
                if ((typeof c === "object" && c !== null || typeof c === "function") && c.name === "GetLinkedGroupResponseServerError" && "value" in c) {
                    const V = c.value;
                    const H = V.errorServerErrors.value;
                    const { code, text } = H;
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "joinSubgroup failed: ",
                        ""
                    ])), l.name);
                    return (u || (u = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c}`);
            }
        });
        return d.apply(this, arguments);
    }
    l.querySubgroup = c;
}, 98);