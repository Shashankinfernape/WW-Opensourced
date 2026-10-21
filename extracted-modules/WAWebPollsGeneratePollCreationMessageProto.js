__d("WAWebPollsGeneratePollCreationMessageProto", [
    "WAWebPollCreationUtils",
    "WAWebPollsProtoUtils",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json, msgContext }) {
        const i = json.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE;
        const l = msgContext === "quoted" ? {
            name: json.pollName,
            options: []
        } : {
            name: json.pollName,
            options: json.pollOptions.map(({ hash, name })=>{
                if (i) {
                    return {
                        optionName: name,
                        optionHash: hash
                    };
                }
                return {
                    optionName: name
                };
            }),
            selectableOptionsCount: json.pollSelectableOptionsCount,
            pollContentType: o("WAWebPollCreationUtils").getPollContentTypeAsE2EValue(json.pollContentType),
            pollType: o("WAWebPollCreationUtils").getPollTypeAsE2EValue(json.pollType),
            correctAnswer: s(json.pollOptions, json.correctOptionIndex),
            endTime: json.pollEndTime ?? undefined,
            hideParticipantName: json.pollHideVoterNames === true ? true : undefined
        };
        if (contextInfo != null) {
            l.contextInfo = contextInfo;
        }
        o("WAWebPollsProtoUtils").validatePollCreationMessage(l);
        if (i) {
            o("WAWebPollsProtoUtils").validatePhotoPollCreationMessage(l);
        }
        if (json.isSentCagPollCreation) {
            return {
                pollCreationMessageV2: l
            };
        }
        if (json.pollEndTime != null || json.pollHideVoterNames === true) {
            return {
                pollCreationMessageV6: l
            };
        }
        if (json.pollSelectableOptionsCount === 1 || json.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE) {
            return {
                pollCreationMessageV3: l
            };
        }
        return {
            pollCreationMessage: l
        };
    }
    function s(pollOptions, correctOptionIndex) {
        if (!(correctOptionIndex == null || pollOptions == null)) {
            const n = r("nullthrows")(pollOptions.find((e)=>e.localId === correctOptionIndex), `Quiz correctOptionIndex ${correctOptionIndex} matches no poll option`);
            return {
                optionHash: n.hash,
                optionName: n.name
            };
        }
    }
    l.default = e;
}, 98);