__d("WAWebGetProfilePicJob", [
    "Promise",
    "WAJids",
    "WALogger",
    "WASmaxProfilePictureGetRPC",
    "WAWebBackendErrors",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            if (t.isStatus() || t.isBroadcast()) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getProfilePic failed with an invalid WID: ",
                    ""
                ])), t.toString()).verbose();
                return (s || (s = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(401, `getProfilePic failed with an invalid WID: ${t.toString()}`));
            }
            const { commonGid, invite, photoId, preview } = r;
            const c = preview === undefined ? true : preview;
            const r_tcToken = r.tcToken;
            const _ = yield o("WASmaxProfilePictureGetRPC").sendGetRPC({
                iqTarget: o("WAWebWidToJid").widToChatJid(t),
                pictureType: c ? "preview" : "image",
                pictureId: photoId != null ? String(photoId) : undefined,
                pictureQuery: "url",
                pictureInvite: invite,
                tCTokenMixinArgs: d(r_tcToken),
                pictureCommonGid: m(commonGid)
            });
            switch(_.name){
                case "GetResponseSuccessPictureURL":
                    {
                        const f = _.value;
                        const { pictureDirectPath, pictureHash, pictureId, pictureType, pictureUrl } = f;
                        return {
                            tag: pictureId,
                            type: pictureType,
                            eurl: pictureUrl,
                            directPath: pictureDirectPath,
                            filehash: pictureHash
                        };
                    }
                case "GetResponseError":
                    {
                        const v = _.value.errorProfilePictureGetErrors.value;
                        return (s || (s = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(v.code), v.text));
                    }
                case "GetResponseSuccessAvatarURLs":
                case "GetResponseSuccessNoData":
                case "GetResponseSuccessPictureBlob":
                    return (s || (s = n("Promise"))).reject(_.value.type);
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        let t;
        if (e != null) {
            t = {
                privacyTokenContentsMixinArgs: {
                    anyElementValue: new Uint8Array(e)
                }
            };
        }
        return t;
    }
    function m(commonGid) {
        if (commonGid != null) {
            return o("WAJids").toGroupJid(commonGid.toString());
        }
        return null;
    }
    l.getProfilePic = u;
}, 98);