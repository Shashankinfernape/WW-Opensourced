__d("WAWebWamMessageUtils", [
    "WALogger",
    "WAWebMsgType",
    "WAWebVcardParsingUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        const r = [];
        const a = t.type === o("WAWebMsgType").MSG_TYPE.VCARD;
        const i = t.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD;
        if (a) {
            r.push(t.body);
        } else if (i) {
            r.push(...(t.vcardList ?? []).map((e)=>e.vcard));
        }
        let s = 0;
        let u = 0;
        let c = 0;
        let d = 0;
        r.filter(Boolean).forEach((e)=>{
            const t = o("WAWebVcardParsingUtils").parseVcard(e);
            const n = o("WAWebVcardParsingUtils").vcardLidWid(t) != null;
            const r = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(t).length > 0;
            if (n && r) {
                c++;
            } else if (n) {
                u++;
            } else if (r) {
                s++;
            } else {
                d++;
            }
        });
        if (d > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[message-",
                "] ",
                " vcards with no PN or LID found"
            ])), n, d).sendLogs("vcard-no-pn-or-lid", {
                sampling: 0.1
            });
        }
        if (a || i) {
            return {
                pnOnlyVcardCount: s,
                lidOnlyVcardCount: u,
                pnAndLidVcardCount: c
            };
        }
        return null;
    }
    l.getVcardMsgWamData = s;
}, 98);