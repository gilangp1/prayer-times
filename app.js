function success(position){
   console.log(position);
}

function error(){
   alert('posisi tidak dapat diakses');
}

function userLocation(){
   if(!navigator.geolocation){
      alert('geolocation tidak di dukung pada browser ini, coba pada browser lain');
   }
   else{
      navigator.geolocation.getCurrentPosition(success, error);
   }
}

function index(){

   let app        = document.getElementById('app');
   let h3         = document.createElement('h3');
   app.innerHTML  = 'Prayer Times';

   app.appendChild(h3);

   userLocation();
}

index();