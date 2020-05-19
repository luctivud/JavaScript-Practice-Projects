function easyHTTP() {
    this.http = new XMLHttpRequest();
}
easyHTTP.prototype.getPost = function (url) {
    var _this = this;
    this.http.open('GET', url, true);
    this.http.onload = function () {
        var output;
        if (_this.http.status === 200) {
            output = (JSON.parse(_this.http.responseText));
        }
        // output.forEach(arr => {
        //   if(arr.id === 5){
        //     let val = arr;
        //     console.log(val);
        //   }
        // });
        var val = '';
        output.forEach(function (arr) {
            val += "\n      <li>" + arr.body + "</li>\n      ";
        });
        document.querySelector('.display').innerHTML = val;
    };
    this.http.send();
};
