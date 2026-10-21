__d("WAWebSMBDataSharingSettingAction", [
    "Promise",
    "WALogger",
    "WAWebCTWADataSharingModel",
    "WAWebCommonCTWADataSharing",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = r("requireDeferred")("WAWebCTWABizDataSharingJob").__setRef("WAWebSMBDataSharingSettingAction");
    function c() {
        const e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        if (e) {
            return (s || (s = n("Promise"))).resolve(e);
        }
        return o("WAWebCommonCTWADataSharing").fetchDataSharingSettingAndUpdateModel();
    }
    function d(t, n) {
        return u.load().then((e)=>e.setCtwaBizDataSharingSettingJob(t, n)).then((e)=>{
            if (e == null) {
                return null;
            }
            const a = e.version ?? n ?? null;
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(e.value, a);
            return {
                value: e.value,
                version: a
            };
        }).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ctwa] setSMBDataSharingSettingAction failed"
            ])));
            return null;
        });
    }
    l.getSMBDataSharingSettingAction = c;
    l.setSMBDataSharingSettingAction = d;
}, 98);