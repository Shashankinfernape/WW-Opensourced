__d("WAWebGroupIncompatibleDeviceAddPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager} testid="group_incompatible_device_add_popup">{s._("Can't add to this group. A group member uses an older version of WhatsApp or AI agents aren't available in their country.")}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);