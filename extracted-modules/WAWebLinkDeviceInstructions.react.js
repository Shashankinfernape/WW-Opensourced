__d("WAWebLinkDeviceInstructions.react", [
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructionsList.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        const n = e.codeType;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [];
            t[0] = a;
        } else {
            a = t[0];
        }
        let i = a;
        e: switch(n){
            case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR:
                {
                    let l;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        l = c();
                        t[1] = l;
                    } else {
                        l = t[1];
                    }
                    i = l;
                    break e;
                }
            case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE:
                {
                    let u;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        u = d();
                        t[2] = u;
                    } else {
                        u = t[2];
                    }
                    i = u;
                }
        }
        const m = i;
        const p = String(n);
        let _;
        if (t[3] !== i || t[4] !== p) {
            _ = s.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
                instructions: m,
                instructionSource: p
            });
            t[3] = i;
            t[4] = p;
            t[5] = _;
        } else {
            _ = t[5];
        }
        return _;
    }
    function c() {
        return [
            s.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionPhoneCamera, {}, "step1"),
            s.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionOpenWhatsApp, {}, "step2"),
            s.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionScanCodeAgain, {}, "step3")
        ];
    }
    function d() {
        let e;
        return [
            s.jsx((e = o("WAWebLinkDeviceCommonInstructions.react")).LinkDeviceInstructionOpenWhatsAppOnPhone, {}, "step1"),
            <e.LinkDeviceInstructionNavigateToSettings key="step2"/>,
            <e.LinkDeviceInstructionsTapLinkedDevices key="step3"/>,
            <e.LinkDeviceInstructionsLinkWithPhoneNumberInstead key="step4"/>
        ];
    }
    l.default = u;
}, 98);