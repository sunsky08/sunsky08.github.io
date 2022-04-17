
function coreCount()
{
	var cores=0;
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			cores+=count;
	}
  if (cores<=40)
	alert("您的得分是 "+cores+"，你的水果属性偏向于桃子")
  if (cores <= 80 && cores >= 50)
	alert("您的得分是 "+cores+"，你的水果属性偏向于葡萄")
  if (cores <= 120 && cores >= 90)
  alert("您的得分是 "+cores+"，你的水果属性偏向于西瓜")
  if (cores <= 160 && cores >= 130)
  alert("您的得分是 "+cores+"，你的水果属性偏向于山竹")
}
