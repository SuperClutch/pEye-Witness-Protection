console.log("refresh");


setTimeout(function(){
  var element = document.getElementById('SubmitButton');

  // element.click(); // this will trigger the click event

  element.onclick = function(){
    // console.log('Button Pressed.');
    // setTimeout(function(){
    alert("New .env File Created!, pEyeWitnessProtection requires a reboot to use the newly entered data. Please restart after selecting 'Ok!'.")
    // }, 3000)


      // for (var i = 0; i < 10000; i++) {
      //   console.log(i);
      //   if (i === 9999) {
      //     process.exit(1);
      //
      //   }
      // }

  };
}, 3000)
