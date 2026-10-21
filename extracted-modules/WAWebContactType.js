__d("WAWebContactType", [], function(t, n, r, o, a, i) {
    const e = {
        NONE: 0,
        CUSTOMER: 1,
        COLLEAGUE: 2,
        VENDOR: 3,
        PERSONAL: 4
    };
    function l(t) {
        switch(t){
            case 0:
                return e.NONE;
            case 1:
                return e.CUSTOMER;
            case 2:
                return e.COLLEAGUE;
            case 3:
                return e.VENDOR;
            case 4:
                return e.PERSONAL;
            default:
                return e.NONE;
        }
    }
    i.ContactType = e;
    i.getContactTypeFromNumber = l;
}, 66);