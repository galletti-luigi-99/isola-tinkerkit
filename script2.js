  var firebaseConfig = {
    apiKey: "AIzaSyBWVxNSzSgA6EWC7c0zRhidXcCfFrsFlwU",
    authDomain: "tinkerkit-web-5e00d.firebaseapp.com",
    databaseURL: "https://tinkerkit-web-5e00d-default-rtdb.firebaseio.com",
    projectId: "tinkerkit-web-5e00d",
    storageBucket: "tinkerkit-web-5e00d.appspot.com",
    messagingSenderId: "939658469354",
    appId: "1:939658469354:web:9c9cc56e080fa1768d1c93",
    measurementId: "G-PRCWZBMP5X"
  };
  firebase.initializeApp(firebaseConfig);
  
  var slider6 = document.getElementById("slider6");
  var slider5 = document.getElementById("slider5");
  var slider4 = document.getElementById("slider4");
  var slider3 = document.getElementById("slider3");
  var slider2 = document.getElementById("slider2");
  var slider1 = document.getElementById("slider1");

  var output6 = document.getElementById("output6");
  var output5 = document.getElementById("output5");
  var output4 = document.getElementById("output4");
  var output3 = document.getElementById("output3");
  var output2 = document.getElementById("output2");
  var output1 = document.getElementById("output1");

  const funzione = document.getElementById("ledf");
  const allarme = document.getElementById("leda");
  const appreso = document.getElementById("ledp");
  const ok = document.getElementById("ledo");

  var start;
  var apprendo;
  var reset;
  var allarmi;
  var fermo;
  var emer;
  var progapp=0;
  var emergency=0; 

  const finestra = document.getElementById("finestra");
  const finestra2 = document.getElementById("finestra2");
  finestra.innerHTML=""  
  finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: null; border: 1px solid null; background-color: null; opacity: 1;'
  finestra2.innerHTML=""
  finestra2.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: null; border: 1px solid null; background-color: null; opacity: 1;'

  output6.innerHTML=slider6.value;
  output5.innerHTML=slider5.value;
  output4.innerHTML=slider4.value;
  output3.innerHTML=slider3.value;
  output2.innerHTML=slider2.value;
  output1.innerHTML=slider1.value;

var database = firebase.database();
database.ref().on("value", function(snap){      
    slider6.value=snap.val().gripper;
    output6.innerHTML = snap.val().gripper;

    slider5.value=snap.val().rotation;
    output5.innerHTML = snap.val().rotation;

    slider4.value=snap.val().vertical;
    output4.innerHTML = snap.val().vertical;

    slider3.value=snap.val().elbow;
    output3.innerHTML = snap.val().elbow;

    slider2.value=snap.val().shoulder;
    output2.innerHTML = snap.val().shoulder;

    slider1.value=snap.val().base;
    output1.innerHTML = snap.val().base;

    start.value=snap.val().start;
    apprendo.value=snap.val().apprendo;
    reset.value=snap.val().reset;
    emer.value=snap.val().emer;
    fermo.value=snap.val().fermo;
});

slider6.oninput = function() {
    output6.innerHTML = this.value;
    var firebaseRef = firebase.database().ref().child("gripper");
    firebaseRef.set(slider6.value);
    } 
    
    slider5.oninput = function() {
    output5.innerHTML = this.value;
    var firebaseRef = firebase.database().ref().child("rotation");
    firebaseRef.set(slider5.value);
    } 
    
    slider4.oninput = function() {
    output4.innerHTML = this.value;
    var firebaseRef = firebase.database().ref().child("vertical");
    firebaseRef.set(slider4.value);
    } 
    
    slider3.oninput = function() {
    output3.innerHTML = this.value;
    var firebaseRef = firebase.database().ref().child("elbow");
    firebaseRef.set(slider3.value);
    } 
    
    slider2.oninput = function() {
    output2.innerHTML = this.value;
    var firebaseRef = firebase.database().ref().child("shoulder");
    firebaseRef.set(slider2.value);
    } 
    
    slider1.oninput = function() {
    output1.innerHTML = this.value;
    var firebaseRef = firebase.database().ref().child("base");
    firebaseRef.set(slider1.value);
    } 
    
      function gripper_piu_1(){
        if (output6.innerHTML<180){
        output6.innerHTML = ++slider6.value;
        var firebaseRef = firebase.database().ref().child("gripper");
        firebaseRef.set(slider6.value); 
      }
      }
      
      function gripper_meno_1(){
        if (output6.innerHTML>0){
            output6.innerHTML = --slider6.value;
            var firebaseRef = firebase.database().ref().child("gripper");
            firebaseRef.set(slider6.value); 
      }
      }
    
      function wrist_rotation_piu_1(){
        if (output5.innerHTML<180){
            output5.innerHTML = ++slider5.value;
            var firebaseRef = firebase.database().ref().child("rotation");
            firebaseRef.set(slider5.value); 
      }
      }
      
      function wrist_rotation_meno_1(){
        if (output5.innerHTML>0){
            output5.innerHTML = --slider5.value;
            var firebaseRef = firebase.database().ref().child("rotation");
            firebaseRef.set(slider5.value); 
      }
      }
    
      function wrist_vertical_piu_1(){
        if (output4.innerHTML<180){
            output4.innerHTML = ++slider4.value;
            var firebaseRef = firebase.database().ref().child("vertical");
            firebaseRef.set(slider4.value); 
      }
      }
      
      function wrist_vertical_meno_1(){
        if (output4.innerHTML>0){
            output4.innerHTML = --slider4.value;
            var firebaseRef = firebase.database().ref().child("vertical");
            firebaseRef.set(slider4.value); 
      }
      }
      
      function elbow_piu_1(){
        if (output3.innerHTML<180){
            output3.innerHTML = ++slider3.value;
            var firebaseRef = firebase.database().ref().child("elbow");
            firebaseRef.set(slider3.value); 
      }
      }
      
      function elbow_meno_1(){
        if (output3.innerHTML>0){
            output3.innerHTML = --slider3.value;
            var firebaseRef = firebase.database().ref().child("elbow");
            firebaseRef.set(slider3.value); 
      }
      }
      
      function shoulder_piu_1(){
        if (output2.innerHTML<180){
            output2.innerHTML = ++slider2.value;
            var firebaseRef = firebase.database().ref().child("shoulder");
            firebaseRef.set(slider2.value); 
      }
      }
      
      function shoulder_meno_1(){
        if (output2.innerHTML>0){
            output2.innerHTML = --slider2.value;
            var firebaseRef = firebase.database().ref().child("shoulder");
            firebaseRef.set(slider2.value); 
      }
      }
      
      function base_piu_1(){
        if (output1.innerHTML<180){
            output1.innerHTML = ++slider1.value;
            var firebaseRef = firebase.database().ref().child("base");
            firebaseRef.set(slider1.value); 
      }
      }
      
      function base_meno_1(){
        if (output1.innerHTML>0){
            output1.innerHTML = --slider1.value;
            var firebaseRef = firebase.database().ref().child("base");
            firebaseRef.set(slider1.value); 
      }
      }

      if (emergency==0){
        ok
        ok.classList.remove("led-grey");
        ok.classList.add("led-green"); 
      }
      
      function reset_posizione_robot(){
      if(emergency==0){
      progapp=0;
      output6.innerHTML = 10;
      slider6.value = 10;
      var firebaseRef = firebase.database().ref().child("gripper");
      firebaseRef.set(slider6.value);
      output5.innerHTML = 90;
      slider5.value = 90;
      var firebaseRef = firebase.database().ref().child("rotation");
      firebaseRef.set(slider5.value);
      output4.innerHTML = 180;
      slider4.value = 180;
      var firebaseRef = firebase.database().ref().child("vertical");
      firebaseRef.set(slider4.value);
      output3.innerHTML = 180;
      slider3.value = 180;
      var firebaseRef = firebase.database().ref().child("elbow");
      firebaseRef.set(slider3.value);
      output2.innerHTML = 45;
      slider2.value = 45;
      var firebaseRef = firebase.database().ref().child("shoulder");
      firebaseRef.set(slider2.value);
      output1.innerHTML = 0;
      slider1.value = 0;
      var firebaseRef = firebase.database().ref().child("base");
      firebaseRef.set(slider1.value);
      funzione
      funzione.classList.remove("led-yellow");
      funzione.classList.add("led-grey");
      appreso
      appreso.classList.remove("led-blu");
      appreso.classList.add("led-grey");
      finestra.innerHTML=""
      finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: null; border: 1px solid null; background-color: null; opacity: 1;'
      finestra2.innerHTML=""
      finestra2.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: null; border: 1px solid null; background-color: null; opacity: 1;'
    }
  }

    function start_programma(){
      if(allarme.classList.contains("led-grey")&progapp==1){
      funzione
      funzione.classList.remove("led-grey");
      funzione.classList.add("led-yellow");
      ok
      ok.classList.remove("led-grey");
      ok.classList.add("led-green");
      finestra.innerHTML=""
      finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: null; border: 1px solid null; background-color: null; opacity: 1;'
      if (start==1){
        start=0;
        var firebaseRef = firebase.database().ref().child("start");
        firebaseRef.set(start);
      }
        else{
        start=1;
        var firebaseRef = firebase.database().ref().child("start");
        firebaseRef.set(start);
      }
    }
    else {
      if(progapp==0){
      finestra.innerHTML="nessun programma appreso"
      finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #8a0000; border: 1px solid #8a0000; background-color: #e58f8f; opacity: 1;'
      }
    }  
    }
    function reset_allarmi(){
        emergency=0;
        finestra.innerHTML="robot ok"
        finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #208a00; border: 1px solid #208a00; background-color: #9ae58f; opacity: 1;'
        finestra2.innerHTML=""
        finestra2.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: null; border: 1px solid null; background-color: null; opacity: 1;'
        allarme
        allarme.classList.remove("led-red");
        allarme.classList.add("led-grey");
        ok
        ok.classList.remove("led-grey");
        ok.classList.add("led-green");
        if (reset==1){
          reset=0;
          var firebaseRef = firebase.database().ref().child("reset");
          firebaseRef.set(reset);
        }
          else{
          reset=1;
          var firebaseRef = firebase.database().ref().child("reset");
          firebaseRef.set(reset);
        }
      }   

    function stop_programma(){
      funzione
      funzione.classList.remove("led-yellow");
      funzione.classList.add("led-grey");
      if (fermo==1){
        fermo=0;
        var firebaseRef = firebase.database().ref().child("stop");
        firebaseRef.set(fermo);
      }
        else{
        fermo=1;
        var firebaseRef = firebase.database().ref().child("stop");
        firebaseRef.set(fermo);
      }
    }

    function emergenza(elem){
      emergency=1;
      finestra.innerHTML="robot in emergenza"
      finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #8a0000; border: 1px solid #8a0000; background-color: #e58f8f; opacity: 1;'
      finestra2.innerHTML=""
      finestra2.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: null; border: 1px solid null; background-color: null; opacity: 1;'
      allarme
      allarme.classList.remove("led-grey");
      allarme.classList.add("led-red");
      funzione
      funzione.classList.remove("led-yellow");
      funzione.classList.add("led-grey");
      ok
      ok.classList.remove("led-green");
      ok.classList.add("led-grey");
      if (emer==1){
        emer=0;
        var firebaseRef = firebase.database().ref().child("emergenza");
        firebaseRef.set(emer);
      }
        else{
          emer=1;
        var firebaseRef = firebase.database().ref().child("emergenza");
        firebaseRef.set(emer);
      }
    }

    function apprendimento(){
      if(progapp==1){
        finestra.innerHTML="programma già in memoria per nuovo"
        finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #8a0000; border: 1px solid #8a0000; background-color: #e58f8f; opacity: 1;'
        finestra2.innerHTML="programma ripristinare il robot"
        finestra2.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #8a0000; border: 1px solid #8a0000; background-color: #e58f8f; opacity: 1;'
      }
      if(progapp==0&emergency==0){
        progapp=1;
        appreso
        appreso.classList.remove("led-grey");
        appreso.classList.add("led-blu");
        finestra.innerHTML="programma appreso"
        finestra.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #208a00; border: 1px solid #208a00; background-color: #9ae58f; opacity: 1;'
      }  
      if (apprendo==1){
        apprendo=0;
        var firebaseRef = firebase.database().ref().child("apprendimento");
        firebaseRef.set(apprendo);
      }
        else{
        apprendo=1;
        var firebaseRef = firebase.database().ref().child("apprendimento");
        firebaseRef.set(apprendo);
      } 
    }