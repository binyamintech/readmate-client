
export default function Days() {
    const todayDate = new Date().toISOString().slice(0, 10);
    const date1 = new Date("06/15/2022");
    const date2 = new Date(todayDate);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    const daysArr = [];
    for(let i = 1; i < days; i++) daysArr.push(i);   
    
    return daysArr;
}