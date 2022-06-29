const dataSrcInit = {
    count: 80,
    data: [3, 5, 33, 70, 10, 40],
  };
  
const assesmentsData = {
      count: 80,
      data: [3,5,33,70,10,40],
    };
const readingData = {
        count: 8,
        data: [10,5,30,,,,,,,,33,6,12,2,40],
      };
const focusData = {
    count: 50,
    data: [40,7,40,22,33,11,9],
  };

const get = [{date: '10/2/2022', grade: 90}, {'2/2/2022':30}]

const fakeUser = {
  id: 1234,
  userName: 'Joe',
  assesments: {
    wpm: 70,
    firstDate: '06/10/2022',
    data: []
  }

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
const fakeData= {dataSrcInit,assesmentsData,readingData,focusData,daysArr}
export default fakeData