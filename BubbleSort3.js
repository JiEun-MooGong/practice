//======================
// 버블 정렬 함수
//======================
function bubble(arr)
{
  try
    {
      let cnt = 0;

      //회전
     do
     {
         console.log(cnt + "회전 버블");

        let cnt2 = 0;
         
        do
          {
            //비교
              console.log(arr[cnt2] + " : " + arr[cnt2 + 1] + " " + (arr[cnt2] > arr[cnt2 + 1]));
              if(arr[cnt2] > arr[cnt2 + 1])
                {
                  let tmp = arr[cnt2];
                  arr[cnt2] = arr[cnt2 + 1];
                  arr[cnt2 + 1] = tmp;
                }

            cnt2++;

          } while (cnt2 < (arr.length - cnt))

        cnt++;

       } while(cnt < (arr.length - 1))


      return arr;
    }
  catch(ex)
    {
      console.error(ex.message);
    }

}//bubble



console.log(bubble([1,4,66,5,24,6]));
