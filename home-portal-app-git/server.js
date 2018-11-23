// 모듈을 추출합니다.
var express = require('express');
var path = require('path');

//서버를 생성합니다.
var app = express();

var port = 52273;

// // request 이벤트 리스너를 설정합니다.
// app.use(function (request, response, next) {
//     // 변수를 선언합니다.
//     var name = request.query.name;
//     var region = request.query.region;
//
//     //응답합니다.
//     // 아이디 + 지역 등을 이용하고 이 미들웨어를 좀 사용하면 어떨까요??
//     response.send('<h1>'+name+'-'+region+'</h1>');
// });

app.use(express.static(path.join(__dirname, 'home-portal-app')));

// 서버를 실행합니다.
app.listen(port, function(){
    console.log("Server Running at http://127.0.0.1:"+`${port}`);
    console.log("Server Running at http://192.168.1.46:"+`${port}`);
});


