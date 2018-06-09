var count=[];
var flag=0;
var styleflag=0;
var tbldiv=document.createElement('div');
    var tbl=document.createElement('table');
var person = {
    firstName:null,
    lastName:null,
    age:null,
    tel:null,
    nationalid:null,
    Email:null,
};
function styleset(){
    tbldiv.id="divtbl";
    tbl.id="txttable"
    tbldiv.style.marginTop="10px"
    tbldiv.style.marginLeft="10px"
    tbldiv.style.marginRight="10px"
    tbldiv.style.cssFloat="right"
    tbldiv.style.width="50%"
    tbl.style.border="1";
    tbl.style.borderStyle="dotted"
    tbl.style.backgroundColor="lightblue"
    Save(tbldiv,tbl)
} 
function Save(){
checker();
    if(count.length<5 && styleflag==0)
    {   
        person.firstName=document.getElementById('txtname').value;
        person.age=document.getElementById('txtage').value;
        person.lastName=document.getElementById('txtfamily').value;
        person.tel=document.getElementById('txttel').value;
        person.nationalid=document.getElementById('txtnationalid').value;
        person.Email=document.getElementById('txtemail').value;
        count.push(person);
        var getp=Object.getOwnPropertyNames(person);
        var getv=Object.values(person);
        if(flag==0)
        {
        var row=document.createElement('tr');
        for (j=0;j<6;j++)
        {   
            var col=document.createElement('td');
            col.innerHTML=getp[j];
            row.appendChild(col)
        }
        flag=1;
        tbl.appendChild(row);
        } 
        for (i=0;i<count.length;i++)
          {     
               var row=document.createElement('tr');
              for (j=0;j<6;j++)
              {  
                  var col=document.createElement('td');
                  col.id=getp[j];
                  col.innerHTML=getv[j];
                  col.style.padding="36px";
                  col.style.marginTop="0px"
                  row.appendChild(col)
                  console.log(count.length)
              }
          }
          tbl.appendChild(row);
          tbldiv.appendChild(tbl);
          document.body.appendChild(tbldiv);
    }
    else if(count.length>=5)
       alert("maximum number riched");
    else
        alert("fill all the fields!")
}
function checker(){
    var b= document.getElementsByTagName('input');
    for (z=0;z<6;z++){
        if (b[z].value=="")
          styleflag=1;
    } 
    var c=0;
    for (z=0;z<6;z++){
        if (b[z].value!="")
          c++;
    }   
    if(c==6)
       styleflag=0;
}
