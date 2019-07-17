//======================
// 버블 정렬 함수
//======================
function bubble(arr)
{
  try
    {
      let cnt = 1;

      //회전
     while(cnt < (arr.length))
     {
         console.log(cnt + "회전 버블");

        let cnt2 = 0;

       //버블
        while (cnt2 < (arr.length - cnt))
          {
              console.log(arr[cnt2] + " : " + arr[cnt2 + 1] + " " + (arr[cnt2] > arr[cnt2 + 1]));
              if(arr[cnt2] > arr[cnt2 + 1])
                {
                  let tmp = arr[cnt2];
                  arr[cnt2] = arr[cnt2 + 1];
                  arr[cnt2 + 1] = tmp;
                }

            cnt2++;

          }

        cnt++;

       }


      return arr;
    }
  catch(ex)
    {
      console.error(ex.message);
    }

}//bubble



console.log(bubble([1,4,66,5,24,6]));
