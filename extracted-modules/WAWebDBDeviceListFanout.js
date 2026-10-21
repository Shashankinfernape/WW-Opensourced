__d("WAWebDBDeviceListFanout", [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWidSetToIncludeHostedInFanoutOneToOneChatOnly, shouldMergeAltDevices = false, wids }) {
            const l = yield o("WAWebApiDeviceList").getDeviceIds(wids, shouldMergeAltDevices);
            const s = new Map;
            const u = [];
            l.forEach((e, t)=>{
                if (e) {
                    const r = e.devices;
                    r.forEach((t)=>{
                        const r = t.id === 99 || t.isHosted === true;
                        let a = false;
                        if (chatWidSetToIncludeHostedInFanoutOneToOneChatOnly != null) {
                            a = chatWidSetToIncludeHostedInFanoutOneToOneChatOnly?.isUser() === true;
                        }
                        if (!(r && !a)) {
                            const i = o("WAWebWidFactory").createDeviceWidFromDeviceListPk(e.id, t.id, t.isHosted);
                            if (!o("WAWebUserPrefsMeUser").isMeDevice(i)) {
                                s.set(i.toString(), i);
                            }
                        }
                    });
                } else {
                    const a = o("WAWebWidFactory").asUserWidOrThrow(wids[t]);
                    if (u.length < 3) {
                        u.push(a.toString());
                    }
                    if (!o("WAWebUserPrefsMeUser").isMeAccount(a)) {
                        s.set(a.toString(), a);
                    }
                }
            });
            if (u.length > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getFanOutList] no device for ",
                    " wids => primary ",
                    ""
                ])), u.length, u).tags("messaging");
            }
            return Array.from(s.values());
        });
        return u.apply(this, arguments);
    }
    l.getFanOutList = s;
}, 98);