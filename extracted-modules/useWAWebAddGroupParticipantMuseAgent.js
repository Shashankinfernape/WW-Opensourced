__d("useWAWebAddGroupParticipantMuseAgent", [
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLimitSharingUIUtils",
    "WAWebMuseInitiatorNotice",
    "react",
    "react-compiler-runtime",
    "useWAWebOwnMuseAgentContact"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(9);
        const a = r("useWAWebOwnMuseAgentContact")();
        let i;
        if (n[0] !== e || n[1] !== t || n[2] !== a) {
            i = a == null || !c(e, a) ? t : [
                a
            ].concat(t);
            n[0] = e;
            n[1] = t;
            n[2] = a;
            n[3] = i;
        } else {
            i = n[3];
        }
        const pickerContacts = i;
        const uRef = useRef(false);
        let d;
        if (n[4] !== a) {
            d = function(t, n) {
                if (a == null || !t.selectedItems.includes(a)) {
                    n(t);
                    return;
                }
                if (!uRef.current) {
                    uRef.current = true;
                    o("WAWebMuseInitiatorNotice").confirmMuseInitiatorNotice().then((e)=>{
                        if (e) {
                            n(t);
                        }
                    }).finally(()=>{
                        uRef.current = false;
                    });
                }
            };
            n[4] = a;
            n[5] = d;
        } else {
            d = n[5];
        }
        const confirmWithMuseNotice = d;
        let p;
        if (n[6] !== confirmWithMuseNotice || n[7] !== pickerContacts) {
            p = {
                confirmWithMuseNotice,
                pickerContacts
            };
            n[6] = confirmWithMuseNotice;
            n[7] = pickerContacts;
            n[8] = p;
        } else {
            p = n[8];
        }
        return p;
    }
    function c(e, t) {
        const e_groupMetadata = e.groupMetadata;
        return (e_groupMetadata == null ? undefined : e_groupMetadata.participants.get(t.id)) == null && o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e_groupMetadata) !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && e_groupMetadata?.hasCapi !== true && !o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(e);
    }
    l.default = u;
}, 98);