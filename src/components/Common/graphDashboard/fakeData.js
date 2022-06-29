const dataSrcInit = {
    last: 80,
    data: [3, 5, 33, 70, 10, 40],
  };
  
const assessmentsData = {
      last: 80,
      data: [3,5,33,70,10,40],
    };
const readingData = {
        last: 8,
        data: [10,5,30,,,,,,,,33,6,12,2,40],
      };
const focusData = {
    last: 50,
    data: [40,7,40,22,33,11,9],
  };

const fakeUser1 = {
  firstName: 'Joe',
  assesments: [{date:'02/05/2022', score:70}, {date:'08/05/2022', score:30}, {date:'15/05/2022', score:90}],
  reading: [{date:'02/05/2022', score:70}, {date:'08/05/2022', score:30}, {date:'15/05/2022', score:90}],
  focus: [{date:'02/05/2022', score:70}, {date:'08/05/2022', score:30}, {date:'15/05/2022', score:90}]

}



const todayDate = new Date().toISOString().slice(0, 10);
const date1 = new Date("06/10/2022");
const date2 = new Date(todayDate);
const Difference_In_Time = date2.getTime() - date1.getTime();
const days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
const daysArr = [];
const ddd = new Date();
for(let i = 1; i < days; i++) {
  ddd.setDate(date1.getDate()+1);
  daysArr.push(ddd.toISOString().slice(0, 10));  
}
const fakeData= {dataSrcInit,assessmentsData,readingData,focusData,daysArr, fakeUser1}
export default fakeData