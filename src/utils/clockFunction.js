export const clockFunction = (prevAngle, clockNumber) => {
    console.log(prevAngle);
    let previtemIcon=0;
    let counter2=10;
      for(let i=30; i<=90; i+=30){
        if((prevAngle -i)%360 === 0){
           previtemIcon = counter2;
           if(clockNumber < counter2 && clockNumber<counter2-6){
           const diffAngle = ((clockNumber+12) - (previtemIcon))*30;
           return (prevAngle+diffAngle)
           }else{
          const diffAngle = ((clockNumber) - (previtemIcon))*30;
           return (prevAngle+diffAngle)
           }
        }
        counter2++;
      }
    let counter1=7;
      for(let i=300; i<=360; i+=30){
        if((prevAngle -i)%360 === 0){
           previtemIcon = counter1;
           if(clockNumber < counter1 && clockNumber<counter1-6){
           const diffAngle = ((clockNumber+12) - (previtemIcon))*30;
           return (prevAngle+diffAngle)
           }else{
          const diffAngle = ((clockNumber) - (previtemIcon))*30;
           return (prevAngle+diffAngle)
           }
        }
        counter1++;
      }
      let counter3=1;
      for(let i=120; i<=270; i+=30){
        if((prevAngle -i)%360 === 0){
           previtemIcon = counter3;
           if(clockNumber > counter3+6){
           const diffAngle = ((clockNumber) - (previtemIcon+12))*30;
           return (prevAngle+diffAngle)
           }else{
          const diffAngle = ((clockNumber) - (previtemIcon))*30;
           return (prevAngle+diffAngle)
           }
        }
        counter3++;
      }
}

