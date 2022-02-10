export const getFormattedDate = (sDate) => {
    if (sDate === undefined) {
        return '';
    }
    let date = new Date(sDate);
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return (new Intl.DateTimeFormat('en-US', options).format(date)
    );
}