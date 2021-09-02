function result(){
    var Name = document.getElementById('Name').value;
    var a = parseInt( document.getElementById('english').value);
    var b = parseInt( document.getElementById('urdu').value);
    var c = parseInt( document.getElementById('math').value);
    var d = parseInt( document.getElementById('physics').value);
    var e = parseInt( document.getElementById('chemistry').value);
    var f = parseInt( document.getElementById('biology').value);
    var tatal = document.getElementById('total')
    if(a>100 || b>100||c>100||d>100||e>100||f>100)
    {
        alert("please enter Valid Number")
    }
    
    else
    {
        var result = a+b+c+d+e+f;
        total.innerHTML += `${Name} your total Marks are:- ${result}`
        var per = result/600*100;
        document.getElementById('per').innerHTML=`your percentage is:- ${per}% <hr>`;
        if(per<50)
        {
            
            document.getElementById('grade').innerHTML = `<span style = "background-color:red">No Grade</span> <hr>`;
            document.getElementById('remarks').innerHTML = `<span style = "color:red">TRY AGAIN!! <br>You are Fail  <br>Next Time</span>`;
        }
        else if(per>50 && per<60)
        {
            document.getElementById('grade').innerHTML = `<span style = "background-color:yellow">Grade :- D</span> <hr>`;
            document.getElementById('remarks').innerHTML = `<span style ="color:green">Congratulations..!!<br>You are Pass <br>Work Hard</span> `;
        }
        else if(per>60 && per<70)
        {
            document.getElementById('grade').innerHTML = `<span style = "background-color:yellow">Grade :- C</span> <hr> `;
            document.getElementById('remarks').innerHTML = `<span style ="color:green">Congratulations..!!<br>You are Pass <br> Work Hard</span> `;
        }
        else if(per>70 && per<80)
        {
            document.getElementById('grade').innerHTML = `<span style = "background-color:green">Grade :- B</span> <hr>`;
            document.getElementById('remarks').innerHTML = `<span style ="color:green">Congratulations..!!<br>You are Pass</span><br>Keep It up`;
        }
        else if(per>80 && per<90)
        {
            document.getElementById('grade').innerHTML = `<span style = "background-color:green">>Grade :- A</span> <hr>`;
            document.getElementById('remarks').innerHTML = `<span style ="color:green">Congratulations...!!!<br>You are Pass <br> Very Good <br> Keep it up</span>`;
        }
        else
        {
            document.getElementById('grade').innerHTML = `<span style = "background-color:green">Grade :- A+</span> <hr>`;
            document.getElementById('remarks').innerHTML = `Congratulations..!!<hr> you are pass`;
        }
    }

}