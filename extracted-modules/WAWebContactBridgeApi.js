__d("WAWebContactBridgeApi", [
    "Promise",
    "WAWebApiContact",
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebBizUpdateVerifiedInfoAction",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactMutator",
    "WAWebFrontendContactGetters",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        updatePushname: (s = o("WAWebContactMutator")).updatePushname,
        updateContactExternalUserState: s.updateContactExternalUserState,
        bulkUpdatePhoneNumberJids: s.bulkUpdatePhoneNumberJids,
        bulkUpdateLidContactState: s.bulkUpdateLidContactState,
        updateDisappearingMode: s.updateDisappearingMode,
        updateTextStatus: s.updateTextStatus,
        updateContactWithVerifiedName: function({ contactId, verifiedNameInfo }) {
            const r = o("WAWebJidToWid").userJidToUserWid(contactId);
            const a = o("WAWebContactCollection").ContactCollection.gadd(r);
            o("WAWebBizUpdateContactsWithVerifiedNamesAction").updateContactsWithVerifiedNames([
                babelHelpers.extends({}, verifiedNameInfo, {
                    id: r
                })
            ], [
                a
            ]);
        },
        bulkAddContactToCollection: function({ contacts }) {
            const n = {
                merge: true
            };
            contacts.forEach((e)=>{
                const t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
                o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, e, {
                    id: t
                }), n);
                const r = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
                if (r) {
                    o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, e, {
                        id: r
                    }), n);
                }
            });
        },
        updateBusinessInfo: s.updateBusinessInfo,
        queryAndUpdateContactPropertiesOnNewChat: function({ contactInfoId, requestOrigin }) {
            return o("WAWebBizUpdateVerifiedInfoAction").queryAndUpdateContactPropertiesOnNewChat(o("WAWebWidFactory").createWid(contactInfoId), requestOrigin);
        },
        bulkUpdateUsernames: s.bulkUpdateUsernames,
        bulkUpdateContactPushnames: s.bulkUpdateContactPushnames,
        updateContactAdvAccountType: s.updateContactAdvAccountType,
        getFilteredContacts: s.getFilteredContacts,
        updateUsernameKey: s.updateUsernameKey,
        propagateIdentityFieldsToLidContact: s.propagateIdentityFieldsToLidContact,
        updateContactsStatusMute: function({ groupStatusMuteUpdates, newsletterStatusMuteUpdates, userStatusMuteUpdates }) {
            const a = userStatusMuteUpdates.concat(groupStatusMuteUpdates).concat(newsletterStatusMuteUpdates).map((e)=>{
                const t = o("WAWebWidFactory").createWid(e.id);
                const n = o("WAWebContactCollection").ContactCollection.get(t);
                return {
                    id: t,
                    pushname: n?.pushname || "",
                    type: n?.type || "out",
                    name: n?.name,
                    statusMute: e.statusMute === true
                };
            });
            o("WAWebContactCollection").ContactCollection.add(a, {
                merge: true
            });
        },
        getFrequentContacts: function({ count, includeVoipCallableOnly }) {
            const l = 5;
            const s = o("WAWebChatCollection").ChatCollection.getModelsArray();
            const u = s.filter((e)=>{
                if (e.id.isRegularUser()) {
                    return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                }
                return false;
            });
            const c = [];
            const d = u.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebContactCollection").ContactCollection.get(e.id);
                    if (t != null) {
                        c.push(e);
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            return (e || (e = n("Promise"))).all(d).then(()=>{
                const e = c.sort((e, t)=>(t.t ?? 0) - (e.t ?? 0)).slice(0, l);
                return r("compactMap")(e, function(e) {
                    const n = o("WAWebContactCollection").ContactCollection.get(e.id);
                    if (n == null) {
                        return null;
                    }
                    const r = o("WAWebLidMigrationUtils").toLid(n.id);
                    return r?.toString() ?? null;
                });
            });
        },
        getFrequentChatsForSharing: function() {
            const t = o("WAWebChatCollection").ChatCollection.getModelsArray();
            const r = [];
            for (const a of t){
                const i = a.id.isGroup();
                const l = a.id.isRegularUser();
                if (!(!l && !i)) {
                    if (l) {
                        const s = o("WAWebContactCollection").ContactCollection.get(a.id);
                        if (s == null) {
                            continue;
                        }
                    }
                    r.push(a);
                }
            }
            const u = r.filter((e)=>e.pin != null).sort((e, t)=>(t.pin ?? 0) - (e.pin ?? 0));
            const c = r.filter((e)=>e.pin == null).sort((e, t)=>(t.t ?? 0) - (e.t ?? 0));
            const d = [].concat(u, c);
            const m = [];
            for (const p of d){
                const h = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(p.id);
                const imgUrl = o("WAWebProfilePicThumbGetters").getMaybeImg(h) ?? null;
                if (p.id.isGroup()) {
                    m.push({
                        lid: p.id.toString(),
                        name: p.formattedTitle ?? p.groupMetadata?.subject ?? "",
                        contactType: "group",
                        imgUrl
                    });
                    continue;
                }
                const S = o("WAWebContactCollection").ContactCollection.get(p.id);
                if (S != null) {
                    const R = o("WAWebLidMigrationUtils").toLid(S.id);
                    if (R != null) {
                        const lid = R.toString();
                        const E = o("WAWebLidMigrationUtils").toPn(p.id) ?? S.phoneNumber;
                        const k = (E != null ? o("WAWebContactCollection").ContactCollection.get(E) : null) ?? S;
                        const I = o("WAWebUserPrefsMeUser").isMeAccount(p.id);
                        let contactType = "personal";
                        if (I) {
                            contactType = "me";
                        } else if (k.isEnterprise) {
                            contactType = "enterprise";
                        } else if (k.isSmb) {
                            contactType = "smb";
                        } else if (k.isBusiness) {
                            contactType = "business";
                        }
                        m.push({
                            lid,
                            name: o("WAWebFrontendContactGetters").getFormattedUser(k) || S.pushname || S.name || "",
                            contactType,
                            imgUrl
                        });
                    }
                }
            }
            return (e || (e = n("Promise"))).resolve(m);
        },
        setContactsNotMyUsernameContacts: function({ usernameContactIdsToRemove }) {
            const n = {
                merge: true
            };
            usernameContactIdsToRemove.forEach((e)=>{
                const t = o("WAWebWidFactory").createUserLidOrThrow(e);
                const r = o("WAWebContactCollection").ContactCollection.get(t);
                const phoneNumber = r?.phoneNumber || o("WAWebLidMigrationUtils").toPn(t);
                const i = {
                    id: t,
                    type: "out",
                    name: undefined,
                    shortName: undefined,
                    username: r?.username,
                    phoneNumber,
                    isAddressBookContact: 0,
                    isContactSyncCompleted: 0,
                    syncToAddressbook: false,
                    isUsernameContact: false
                };
                o("WAWebContactCollection").ContactCollection.add(i, n);
                const l = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t));
                if (l) {
                    o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, i, {
                        id: l
                    }), n);
                }
            });
        }
    };
    l.ContactBridgeApi = u;
}, 98);