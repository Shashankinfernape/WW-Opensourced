__d("WAWebContactImage.react", [
    "WAWebChatSearchQuery",
    "WAWebDetailImage.react",
    "WAWebStatusChatlistRing.react",
    "WAWebStatusProfilePhotoRingWrapper.react",
    "WAWebWamEnumStatusRowSection",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(10);
        const { contact, ephemeralIcon, loadPicture, searchQuery, secondaryAvatar, showStatusRingAroundProfilePhoto, size, waitIdle } = e;
        const loadPicture_1 = loadPicture === undefined ? true : loadPicture;
        if (showStatusRingAroundProfilePhoto === true) {
            let _;
            if (t[0] !== contact || t[1] !== searchQuery) {
                _ = o("WAWebChatSearchQuery").isSearchResult(searchQuery) ? s.jsx(r("WAWebStatusChatlistRing.react"), {
                    contact,
                    rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH,
                    rowIndex: 0
                }) : s.jsx(r("WAWebStatusProfilePhotoRingWrapper.react"), {
                    contact,
                    hideWhenNoUnreadStatuses: false,
                    rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.GROUP_PARTICIPANT,
                    rowIndex: 0
                });
                t[0] = contact;
                t[1] = searchQuery;
                t[2] = _;
            } else {
                _ = t[2];
            }
            return _;
        }
        let f;
        if (t[3] !== contact.id || t[4] !== ephemeralIcon || t[5] !== loadPicture_1 || t[6] !== secondaryAvatar || t[7] !== size || t[8] !== waitIdle) {
            f = s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: contact.id,
                size,
                ephemeralIcon,
                waitIdle,
                loadPicture: loadPicture_1,
                secondaryAvatar
            });
            t[3] = contact.id;
            t[4] = ephemeralIcon;
            t[5] = loadPicture_1;
            t[6] = secondaryAvatar;
            t[7] = size;
            t[8] = waitIdle;
            t[9] = f;
        } else {
            f = t[9];
        }
        return f;
    }
    l.default = u;
}, 98);