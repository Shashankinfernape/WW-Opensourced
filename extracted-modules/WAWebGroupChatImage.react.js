__d("WAWebGroupChatImage.react", [
    "WAWebChatCollection",
    "WAWebCommunitySubgroupImage.react",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebStackedCirclesImage.react",
    "WAWebTextSizeUtils",
    "WDSProfilePhoto.react",
    "react",
    "react-compiler-runtime",
    "useWAWebDefaultProfileColors",
    "useWAWebEventTargetValue",
    "useWAWebGroupMetadataValues",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const l = o("react-compiler-runtime").c(22);
        const { chat, isHovered, regularChatImage, selection, showCommunityInfo, showSpeakerForCag, size, theme } = e;
        const isHovered_1 = isHovered === undefined ? false : isHovered;
        const b = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(chat.groupMetadata?.id, [
            o("WAWebGroupMetadataGetters").getGroupType
        ]) ?? [];
        const v = b[0];
        const S = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(chat.groupMetadata?.id, [
            o("WAWebFrontendGroupMetadataGetters").getTerminated,
            o("WAWebFrontendGroupMetadataGetters").getParentGroup
        ]) ?? [];
        const R = S[1];
        const L = v === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || v === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP || v === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        let E;
        if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                "add",
                "remove"
            ];
            l[0] = E;
        } else {
            E = l[0];
        }
        let k;
        if (l[1] !== chat.groupMetadata) {
            k = function() {
                return chat.groupMetadata?.getParentGroupChat();
            };
            l[1] = chat.groupMetadata;
            l[2] = k;
        } else {
            k = l[2];
        }
        let I;
        if (l[3] !== R) {
            I = [
                R
            ];
            l[3] = R;
            l[4] = I;
        } else {
            I = l[4];
        }
        const parentGroupChat = r("useWAWebEventTargetValue")(o("WAWebChatCollection").ChatCollection, E, k, I);
        if (L && parentGroupChat) {
            if (v === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                if (showSpeakerForCag === true) {
                    let D;
                    if (l[5] !== parentGroupChat.id || l[6] !== theme) {
                        D = <D4 colorId={parentGroupChat.id} theme={theme}/>;
                        l[5] = parentGroupChat.id;
                        l[6] = theme;
                        l[7] = D;
                    } else {
                        D = l[7];
                    }
                    return D;
                }
                let x;
                if (l[8] !== parentGroupChat || l[9] !== theme) {
                    x = <M3 parentGroupChat={parentGroupChat} theme={theme}/>;
                    l[8] = parentGroupChat;
                    l[9] = theme;
                    l[10] = x;
                } else {
                    x = l[10];
                }
                return x;
            }
            if (showCommunityInfo && theme === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST) {
                let $;
                if (l[11] !== size) {
                    $ = size ?? o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize;
                    l[11] = size;
                    l[12] = $;
                } else {
                    $ = l[12];
                }
                let P;
                if (l[13] !== chat.id || l[14] !== isHovered_1 || l[15] !== parentGroupChat.id || l[16] !== selection || l[17] !== $) {
                    P = s.jsx(r("WAWebCommunitySubgroupImage.react"), {
                        chatId: chat.id,
                        parentGroupChatId: parentGroupChat.id,
                        selection,
                        isHovered: isHovered_1,
                        size: $
                    });
                    l[13] = chat.id;
                    l[14] = isHovered_1;
                    l[15] = parentGroupChat.id;
                    l[16] = selection;
                    l[17] = $;
                    l[18] = P;
                } else {
                    P = l[18];
                }
                return P;
            }
        } else if (L) {
            let N;
            if (l[19] !== chat.id || l[20] !== theme) {
                N = <D4 colorId={chat.id} theme={theme}/>;
                l[19] = chat.id;
                l[20] = theme;
                l[21] = N;
            } else {
                N = l[21];
            }
            return N;
        }
        return regularChatImage;
    }
    function c(theme) {
        if (theme === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER) {
            return "small";
        }
        return "medium";
    }
    function D4(e) {
        const t = o("react-compiler-runtime").c(7);
        const { colorId, theme } = e;
        let i;
        if (t[0] !== theme) {
            i = c(theme);
            t[0] = theme;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== colorId) {
            l = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(colorId);
            t[2] = colorId;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] !== i || t[5] !== l) {
            u = s.jsx(r("WDSProfilePhoto.react"), {
                type: "announcement",
                name: "",
                size: i,
                color: l,
                testid: "announcement-speaker",
                isDecorative: true
            });
            t[4] = i;
            t[5] = l;
            t[6] = u;
        } else {
            u = t[6];
        }
        return u;
    }
    function M3(e) {
        const t = o("react-compiler-runtime").c(11);
        const { parentGroupChat, theme } = e;
        let i;
        if (t[0] !== parentGroupChat.id) {
            i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(parentGroupChat.id);
            t[0] = parentGroupChat.id;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            t[2] = u;
        } else {
            u = t[2];
        }
        const d = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(l.id, u);
        const m = d[0];
        let p;
        if (t[3] !== theme) {
            p = c(theme);
            t[3] = theme;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] !== parentGroupChat.id) {
            _ = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(parentGroupChat.id);
            t[5] = parentGroupChat.id;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== m || t[8] !== p || t[9] !== _) {
            f = s.jsx(r("WDSProfilePhoto.react"), {
                type: "community",
                name: "",
                src: m,
                size: p,
                color: _,
                testid: "default-community-refreshed",
                isDecorative: true
            });
            t[7] = m;
            t[8] = p;
            t[9] = _;
            t[10] = f;
        } else {
            f = t[10];
        }
        return f;
    }
    l.default = u;
}, 98);