export const stringToDate = (dateString: string):Date => {
    const dateParts = dateString
    .split('/')
    .map((v:string):number =>
    {
        return parseInt(v);
    });
    return new Date(dateParts[2],dateParts[1]-1,dateParts[0]);
}