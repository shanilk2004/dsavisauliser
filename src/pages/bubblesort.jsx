import React, { useState } from 'react';
import './bubblesort.css'

const MyVisualizer = () => {
  const [state,setstate]=useState(false);
  const [input,setinput]=useState("");
  const [array,setarray]=useState([]);
  const [idx,setindex]=useState([-1,-1]);
  const [isMoving, setIsMoving] = useState(false);

  const creatarr=()=>{
    const nums= input.split(',').map(num=>parseInt(num.trim())).filter(n=>!isNaN(n));
    setarray(nums);
    setindex([-1,-1]);
  };

  const sleep=(ms) => new Promise(resolve=>setTimeout(resolve,ms));

  const startbubblesort= async()=>{
    let arr=[...array];
    let n=arr.length;

    for(let i=0;i<n;i++){
      for(let j=0;j<n-i-1;j++){
        setindex([j,j+1]);
        await sleep(1000);
        if(arr[j]>arr[j+1]){
          setIsMoving(true);
          await sleep(1000);
          let temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          setarray([...arr]);
          setIsMoving(false);
          await sleep(1000);
        }
      }
    }
    setindex([-1,-1])
  };

  return (
    <div className="array-container">
      {!state && (
        <>
          <input 
          value={input}
          onChange={(e)=>setinput(e.target.value)}
          placeholder='enter the array with , btw'
          />
          <button  onClick={()=>{
            creatarr();
            setstate(true);
          }
          }>create the arr</button>
        </>
      )}
      {state &&(
        <>
          <div className='row'>
            {
              array.map((value,index)=>{
                const isleft=idx[0]===index&&isMoving
                const isright=idx[1]===index&&isMoving

                return(
                  <div
                  key={index}
                  className={`bar ${isleft? 'move-right':''} ${isright? 'move-left':''} ${idx.includes(index)? 'highlight':''}`}>
                    {value}
                  </div>
                );
              })
            }
          </div>
          <button onClick={startbubblesort}>start sort</button>
          <button onClick={()=>setstate(false)}>reset</button>
        </>
      )}
    </div>
  );
};

export default MyVisualizer;