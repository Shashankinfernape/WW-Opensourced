__d("WAWebUsyncDevice", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    const e = 2;
    function s(e) {
        e.assertTag("devices");
        const n = e.maybeChild("error");
        if (n) {
            return {
                errorCode: n.attrInt("code"),
                errorText: n.attrString("text")
            };
        }
        const r = e.maybeChild("key-index-list");
        const o = e.maybeChild("device-list");
        const a = r == null ? null : {
            ts: r.attrTime("ts"),
            signedKeyIndexBytes: r.hasContent() ? r.contentBytes() : null,
            expectedTs: r.maybeAttrTime("expected_ts") ?? undefined
        };
        const deviceList = o?.mapChildrenWithTag("device", function(e) {
            const t = {
                id: e.attrInt("id"),
                keyIndex: e.maybeAttrInt("key-index")
            };
            if (e.hasAttr("is_hosted") && e.attrString("is_hosted") === "true") {
                t.isHosted = true;
            }
            return t;
        });
        return {
            deviceList,
            keyIndex: a
        };
    }
    class u {
        getName() {
            return "devices";
        }
        getQueryElement() {
            return o("WAWap").wap("devices", {
                version: o("WAWap").CUSTOM_STRING(String(e))
            });
        }
        getUserElement(t) {
            const e = t.getDeviceHash();
            const n = t.getTs();
            const r = t.getExpectedTs();
            if (e == null && n == null && r == null) {
                return null;
            }
            return o("WAWap").wap("devices", {
                device_hash: e != null ? o("WAWap").CUSTOM_STRING(e) : o("WAWap").DROP_ATTR,
                ts: n != null ? o("WAWap").INT(n) : o("WAWap").DROP_ATTR,
                expected_ts: r != null ? o("WAWap").INT(r) : o("WAWap").DROP_ATTR
            });
        }
    }
    l.deviceParser = s;
    l.USyncDeviceProtocol = u;
}, 98);