console.log("hello world");
  document.getElementById('btn-updata-title').
    addEventListener('click',function(){
        // console.log(111);
        const pageTitle = document . getElementById('page-title')
        console.log(pageTitle);
        pageTitle.innerText='Update to the text';
    })
      document.getElementById('btn-login').addEventListener('click',function(){
        // console.log('login button');

        const userIfo=document.getElementById('user-info');
        userIfo.innerText='user logged in successfully';
    })