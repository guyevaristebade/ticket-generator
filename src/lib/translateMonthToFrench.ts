export default function translateMonthToFrench(dateString : string): string {
    const monthsMap: { [key in 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December']: string } = {
        January: "Janvier",
        February: "Février",
        March: "Mars",
        April: "Avril",
        May: "Mai",
        June: "Juin",
        July: "Juillet",
        August: "Août",
        September: "Septembre",
        October: "Octobre",
        November: "Novembre",
        December: "Décembre",
    };

    // Extraire les parties de la date
    const parts = dateString.split(" ");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    // Traduire le mois
    const translatedMonth : string = monthsMap[month as keyof typeof monthsMap];

    // Retourner la date avec le mois traduit
    return `${day} ${translatedMonth} ${year}`;
}