__d("WAWebGroupGetProfilePicsJob", [
    "WALogger",
    "WASmaxGroupsGetGroupProfilePicturesRPC",
    "WAWebBackendErrors",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = Object.freeze({
        IMAGE: "image",
        PREVIEW: "preview"
    });
    const u = Object.freeze({
        BLOB: "blob",
        URL: "url"
    });
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { subgroupHintId, type = s.PREVIEW, query = u.URL }) {
            const d = {
                profilePictureTypeMixinArgs: {
                    pictureType: type
                },
                profilePictureQueryMixinArgs: {
                    pictureQuery: query
                }
            };
            const pictureArgs = e.map(({ groupId, isParentGroup = false, photoId })=>{
                const parentOrSubGroupMixinGroupArgs = isParentGroup ? {
                    parentGroup: {
                        anyParentGroupJid: o("WAWebWidToJid").widToGroupJid(groupId)
                    }
                } : {
                    subGroup: {
                        anySubGroupJid: o("WAWebWidToJid").widToGroupJid(groupId)
                    }
                };
                return babelHelpers.extends({
                    parentOrSubGroupMixinGroupArgs,
                    profilePictureIdMixinArgs: photoId != null ? {
                        pictureId: photoId
                    } : undefined
                }, d);
            });
            const _ = yield o("WASmaxGroupsGetGroupProfilePicturesRPC").sendGetGroupProfilePicturesRPC({
                pictureArgs,
                subGroupHintMixinArgs: subgroupHintId ? {
                    anyLinkedGroupsMembershipHint: o("WAWebWidToJid").widToGroupJid(subgroupHintId)
                } : undefined,
                baseGetGroupOrServerMixinGroupArgs: {
                    baseGetGroup: {
                        iqTo: o("WAWebWidToJid").widToGroupJid(t)
                    }
                }
            });
            e: {
                const f = _;
                if ((typeof f === "object" && f !== null || typeof f === "function") && f.name === "GetGroupProfilePicturesResponseSuccessGroupPictures" && "value" in f) {
                    const g = f.value;
                    const h = g.picturesPicture.map((e)=>{
                        let t;
                        if (e.parentOrSubGroupMixinGroup.name === "SubGroup") {
                            t = o("WAWebWidFactory").createWid(e.parentOrSubGroupMixinGroup.value.subGroupJid);
                        } else {
                            t = o("WAWebWidFactory").createWid(e.parentOrSubGroupMixinGroup.value.parentGroupJid);
                        }
                        switch(e.getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup.name){
                            case "GetGroupProfilePicturesSuccessProfilePictureResponse":
                                {
                                    const a = e.getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup.value;
                                    return {
                                        id: t,
                                        tag: a.id,
                                        eurl: a.profilePictureUrlOrBlobResponseMixinGroup?.value.url,
                                        directPath: a.profilePictureUrlOrBlobResponseMixinGroup?.value.directPath,
                                        type: a.type,
                                        updatePicture: true
                                    };
                                }
                            case "GetGroupProfilePicturesPartialProfilePictureResponse":
                                {
                                    let updatePicture = false;
                                    if (e.getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup.value.pictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup?.name === "PictureNotFound") {
                                        updatePicture = true;
                                    }
                                    return {
                                        id: t,
                                        tag: null,
                                        eurl: null,
                                        directPath: null,
                                        type: null,
                                        updatePicture
                                    };
                                }
                        }
                    });
                    return h;
                }
                if ((typeof f === "object" && f !== null || typeof f === "function") && f.name === "GetGroupProfilePicturesResponseClientError" && "value" in f) {
                    const y = f.value;
                    const C = y.errorGetGroupProfilePictureClientErrors.value.code;
                    const b = y.errorGetGroupProfilePictureClientErrors.value.text;
                    return m(C, b);
                }
                if ((typeof f === "object" && f !== null || typeof f === "function") && f.name === "GetGroupProfilePicturesResponseServerError" && "value" in f) {
                    const v = f.value;
                    const S = v.errorServerErrors.value.code;
                    const R = v.errorServerErrors.value.text;
                    return m(S, R);
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${f}`);
            }
        });
        return d.apply(this, arguments);
    }
    function m(t, n) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "getGroupProfilePics failed: ",
            ":",
            ""
        ])), t, n).tags("non-sad").sendLogs("pictures-error", {
            sampling: 0.01
        });
        return Promise.reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(t), n));
    }
    l.ProfilePicsTypeEnum = s;
    l.ProfilePicsQueryEnum = u;
    l.getProfilePics = c;
}, 98);