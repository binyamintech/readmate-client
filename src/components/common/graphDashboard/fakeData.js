const dataSrcInit = {
    label: "",
    data: [3, 5, 33, 70, 10, 40],
    borderColor: "pink",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  };
  
const focusData = {
    label: "",
    data: [40, 7, 22, 30, 7, 40],
    borderColor: "yellow",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  };
const readingData = {
    label: "",
    data: [10, 5, 17, 30, 2, 40],
    borderColor: "red",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  };
const assesmentsData = {
    label: "",
    data: [3, 5, 33, 70, 10, 40],
    borderColor: "pink",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  };

const lastWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'],
      today = ['6:00','10:00','14:00','18:00','22:00'],
      twoWeeks = ['SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT'],
      month = ['Week1','Week2','Week3','Week4'];

  const fakeData= {dataSrcInit,assesmentsData,readingData,focusData,today,twoWeeks,lastWeek,month}
  export default fakeData