__d("WASmaxInProfilePictureEnums", [
    "WAJids"
], function(t, n, r, o, a, i, l) {
    const e = {
        cover: "cover",
        image: "image",
        preview: "preview"
    };
    const s = {
        cover: "cover",
        picture: "picture"
    };
    const u = {
        false: "false",
        true: "true"
    };
    const c = {
        image: "image",
        preview: "preview"
    };
    const d = {
        lid: "lid",
        pn: "pn"
    };
    const m = {
        validators: [
            o("WAJids").validateGroupJid,
            o("WAJids").validateUserJid
        ],
        typeName: "GroupJid|UserJid"
    };
    l.ENUM_COVER_IMAGE_PREVIEW = e;
    l.ENUM_COVER_PICTURE = s;
    l.ENUM_FALSE_TRUE = u;
    l.ENUM_IMAGE_PREVIEW = c;
    l.ENUM_LID_PN = d;
    l.GROUPJID_USERJID = m;
}, 98);