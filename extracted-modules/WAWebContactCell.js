__d("WAWebContactCell", [
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebContactGetters",
    "WAWebContactImage.react",
    "WAWebMobilePlatforms",
    "WAWebName.react",
    "WAWebTextStatusGatingUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const primary = s.jsx(o("WAWebName.react").Name, {
            contact: e,
            showBusinessCheckmark: o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(e),
            showLabelIcon: o("WAWebMobilePlatforms").isSMB(),
            titlify: true,
            ellipsify: true,
            you: true
        });
        let secondary;
        if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            secondary = s.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                contactId: e.id,
                waitIdle: true
            });
        } else {
            secondary = s.jsx(o("WAWebChatStatus").StatusWrapper, {
                id: e.id
            });
        }
        const detailLeft = s.jsx(r("WAWebContactImage.react"), {
            contact: e,
            size: 40
        });
        return {
            primary,
            secondary,
            detailLeft
        };
    }
    l.getContactCellContent = u;
}, 98);