__d("WAWebMedia", [
    "WAWebCheckMediaExistence",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadStatusThumbnail",
    "WAWebDownloadVideoThumbnail",
    "WAWebManuallySetMedia",
    "WAWebMediaCancelDownloadMsg",
    "WAWebMediaCancelUploadMsg",
    "WAWebMediaDownloadMsg",
    "WAWebMediaMetadata",
    "WAWebMediaMsgRegistration",
    "WAWebMediaProduct",
    "WAWebMediaResumeUploadMsg",
    "WAWebMediaStickers",
    "WAWebMediaVideoStreaming",
    "WAWebPrepRawMedia"
], function(t, n, r, o, a, i) {
    const downloadVideoThumbnail = importNamespace("WAWebDownloadVideoThumbnail").downloadVideoThumbnail;
    const checkMediaExistence = importNamespace("WAWebCheckMediaExistence").checkMediaExistence;
    const downloadMsg = importNamespace("WAWebMediaDownloadMsg").downloadMsg;
    const downloadProgressiveJpegThumbnail = importNamespace("WAWebDownloadProgressiveJpegThumbnail").downloadProgressiveJpegThumbnail;
    const downloadStatusThumbnail = importNamespace("WAWebDownloadStatusThumbnail").downloadStatusThumbnail;
    const manuallySetMedia = importNamespace("WAWebManuallySetMedia").manuallySetMedia;
    const prepRawMedia = importNamespace("WAWebPrepRawMedia").prepRawMedia;
    const resumeUploadMsg = importNamespace("WAWebMediaResumeUploadMsg").resumeUploadMsg;
    Object.keys(importNamespace("WAWebMediaCancelDownloadMsg")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("WAWebMediaCancelDownloadMsg")[e];
        }
    });
    Object.keys(importNamespace("WAWebMediaCancelUploadMsg")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("WAWebMediaCancelUploadMsg")[e];
        }
    });
    Object.keys(importNamespace("WAWebMediaMetadata")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("WAWebMediaMetadata")[e];
        }
    });
    Object.keys(importNamespace("WAWebMediaMsgRegistration")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("WAWebMediaMsgRegistration")[e];
        }
    });
    Object.keys(importNamespace("WAWebMediaProduct")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("WAWebMediaProduct")[e];
        }
    });
    Object.keys(importNamespace("WAWebMediaStickers")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("WAWebMediaStickers")[e];
        }
    });
    Object.keys(importNamespace("WAWebMediaVideoStreaming")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("WAWebMediaVideoStreaming")[e];
        }
    });
    i.downloadVideoThumbnail = downloadVideoThumbnail;
    i.checkMediaExistence = checkMediaExistence;
    i.downloadMsg = downloadMsg;
    i.downloadProgressiveJpegThumbnail = downloadProgressiveJpegThumbnail;
    i.downloadStatusThumbnail = downloadStatusThumbnail;
    i.manuallySetMedia = manuallySetMedia;
    i.prepRawMedia = prepRawMedia;
    i.resumeUploadMsg = resumeUploadMsg;
}, 66);