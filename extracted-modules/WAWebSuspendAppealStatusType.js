__d("WAWebSuspendAppealStatusType", [], function(t, n, r, o, a, i) {
    function e(e) {
        return ((e)=>{
            switch(e){
                case "IN_REVIEW":
                    return "IN_REVIEW";
                case "APPROVED":
                    return "APPROVED";
                case "REJECTED":
                    return "REJECTED";
                default:
                    return null;
            }
        })(e?.toUpperCase());
    }
    i.toSuspendAppealStatus = e;
}, 66);