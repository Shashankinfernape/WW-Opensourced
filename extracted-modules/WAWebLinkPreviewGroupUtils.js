__d("WAWebLinkPreviewGroupUtils", [
    "fbt",
    "WAWebChatCollection",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebLinkPreviewUtils",
    "WAWebMediaDataUtils",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "bx"
], function(t, n, r, o, a, i, l, s) {
    const e = r("bx").getURL(r("bx")("9583"));
    const u = 100;
    const c = s._("Group chat invite").toString();
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ code, resolveProfilePicUrl, url }) {
            if (code == null) {
                return null;
            }
            let c;
            let d;
            let m;
            try {
                const f = r("WAWebGroupMetadataCollection").filter((e)=>e.inviteCode === code);
                if (f == null || f.length < 1) {
                    return null;
                }
                c = f[0];
                m = o("WAWebChatCollection").ChatCollection.get(c.id);
                d = resolveProfilePicUrl(m?.contact?.profilePicThumb);
            } catch (e) {
                return null;
            }
            let imageFormatOptions = 0.75;
            if (d == null || d === "") {
                if (o("WAWebGroupMetadataGetters").getGroupType(c) === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) {
                    d = o("WAWebCommunityGeneralChatImage.react").GeneralChatPlaceholderFullUrl;
                } else {
                    d = e;
                }
                imageFormatOptions = 1;
            }
            const h = [
                {
                    width: u,
                    height: u,
                    imageFormat: "image/jpeg",
                    imageFormatOptions
                }
            ];
            const y = yield o("WAWebMediaDataUtils").getResizedThumbData(d, h);
            const C = y != null && y.length > 0 ? y[0] : undefined;
            const b = c.getParentGroupChat()?.formattedTitle;
            let v;
            if (o("WAWebGroupMetadataGetters").getGroupType(c) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) {
                v = b;
            } else {
                v = p(o("WAWebGroupMetadataGetters").getGroupType(c), b);
            }
            const S = o("WAWebLinkPreviewUtils").genLinkPreview({
                url,
                linkDetails: {
                    title: m?.formattedTitle,
                    description: v,
                    richPreviewType: o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE,
                    doNotPlayInline: true,
                    inviteGrpType: o("WAWebGroupMetadataGetters").getGroupType(c),
                    isLoading: false
                },
                linkThumbnail: {
                    thumbnail: C?.dataUrl,
                    thumbnailHeight: C?.height,
                    thumbnailWidth: C?.width
                }
            });
            return S;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        if (e === o("WAWebGroupType").GroupType.COMMUNITY) {
            return s._("Community invite").toString();
        }
        if (e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && t != null) {
            return s._("Group in \"{community}\"", [
                s._param("community", t)
            ]).toString();
        }
        if (e === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            return s._("Announcements").toString();
        }
        return c;
    }
    l.GROUP_INVITE_DEFAULT_DESCRIPTION = c;
    l.getGroupInviteLinkPreview = d;
    l.getInviteLinkDescription = p;
}, 226);