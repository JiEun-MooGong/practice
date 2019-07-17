//======================
// 버블 정렬 함수
//======================
function bubble(arr)
{
  try
    {
      //회전
      for(let iLoop = 1; iLoop < arr.length; iLoop++)
        {
          console.log(iLoop + "회전 버블");

          //버블
          for(let iLoop2 = 0; iLoop2 < arr.length - iLoop; iLoop2++)
            {
              //비교
              console.log(arr[iLoop2] + " : " + arr[iLoop2 + 1] + " " + (arr[iLoop2] > arr[iLoop2 + 1]));
              if(arr[iLoop2] > arr[iLoop2 + 1])
                {
                  let tmp = arr[iLoop2];
                  arr[iLoop2] = arr[iLoop2 + 1];
                  arr[iLoop2 + 1] = tmp;
                }
            }
        }

      return arr;
    }
  catch(ex)
    {
      console.error(ex.message);
    }

}//bubble



console.log(bubble([1,4,66,5,24,6]));
