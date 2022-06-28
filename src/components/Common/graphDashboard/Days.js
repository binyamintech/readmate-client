import React from 'react'

export default function Days() {
    const todayDate = new Date().toISOString().slice(0, 10);
    const date1 = new Date("06/01/2022");
    const date2 = new Date(todayDate);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const days = Difference_In_Time / (1000 * 3600 * 24);
    
    return Math.floor(days);
}