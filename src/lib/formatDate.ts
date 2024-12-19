import moment from "moment";

const formatDate = (date : Date): string => {
    return moment(date).format("DD MMMM YYYY");
};

export default formatDate;