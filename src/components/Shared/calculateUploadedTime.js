import moment from "moment/moment";

export function calculateUploadedTime(createdAt){
    const currentTime = moment();
    const uploadedTime = moment(createdAt);
    const duration = moment.duration(currentTime.diff(uploadedTime));

    if (duration.asMinutes() < 1) {
        return 'Hace unos segundos';
    } else if (duration.asHours() < 1) {
        return 'Hace ' + Math.floor(duration.asMinutes()) + ' minutos';
    } else if (duration.asDays() < 1) {
        return 'Hace ' + Math.floor(duration.asHours()) + ' horas';
    } else {
        return 'Hace ' + Math.floor(duration.asDays()) + ' días';
    }
}