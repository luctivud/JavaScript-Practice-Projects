function easyHTTP(){
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.getPost = function (url){
  this.http.open('GET',url,true);
  this.http.onload = ()=>{
    let output;
    if(this.http.status === 200){
      output = (JSON.parse(this.http.responseText));
    }
    // output.forEach(arr => {
    //   if(arr.id === 5){
    //     let val = arr;
    //     console.log(val);
    //   }
    // });
    let val='';
    output.forEach(arr => {
      val+=`
      <li>${arr.body}</li>
      `
    });
    document.querySelector('.display').innerHTML = val;
  }
  this.http.send();
}
