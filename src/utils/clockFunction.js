export const clockFunction = (prevAngle, clockNumber) => {
    console.log(prevAngle);
    let previtemIcon;
    if((prevAngle -30)%360 === 0) {
      previtemIcon = 10;
      if(clockNumber >0 && clockNumber <5){
        const diffAngle = ((clockNumber+12) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }else{
        const diffAngle = ((clockNumber) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }
    }else if((prevAngle -60)%360 === 0){
      previtemIcon = 11;
      if(clockNumber >0 && clockNumber <6){
        const diffAngle = ((clockNumber+12) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }else{
        const diffAngle = ((clockNumber) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }
    }else if((prevAngle -90)%360  === 0){
      previtemIcon = 12;
      if(clockNumber >0 && clockNumber <7){
        const diffAngle = ((clockNumber+12) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }else{
        const diffAngle = ((clockNumber) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }
    }else if((prevAngle-360)%360 === 0 ){
      previtemIcon = 9;
      if(clockNumber >0 && clockNumber <4){
        const diffAngle = ((clockNumber+12) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }else{
        const diffAngle = ((clockNumber) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }
    }else if((prevAngle-330)%360 === 0){
      previtemIcon = 8;
      if(clockNumber >0 && clockNumber <3){
        const diffAngle = ((clockNumber+12) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }else{
        const diffAngle = ((clockNumber) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }
    }else if((prevAngle-300)%360 === 0){
      previtemIcon = 7;
      if(clockNumber >0 && clockNumber <2){
        const diffAngle = ((clockNumber+12) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }else{
        const diffAngle = ((clockNumber) - previtemIcon)*30;
        return (prevAngle+diffAngle)
      }
    }
    else{
      let c=1;
      for(let i=120; i<=270; i+=30){
        if((prevAngle -i)%360 === 0){
           previtemIcon = c;
           if(clockNumber > c+6){
           const diffAngle = ((clockNumber) - (previtemIcon+12))*30;
           return (prevAngle+diffAngle)
           }else{
          const diffAngle = ((clockNumber) - (previtemIcon))*30;
           return (prevAngle+diffAngle)
           }
        }
        c++;
      }
    }
}

