Webcam.set({
   width: 350,
   height: 350,
   image_format: 'jpeg',
   jpeg_quality: 10000000
});

//https://teachablemachine.withgoogle.com/models/mf-9M4yK4/ 


cameraman = document.getElementById("cameraman")
Webcam.attach('#cameraman');;



function prever2() {

   Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML = '<img id="imagem_capturada" src="' + data_uri + '"> '



   })


}

var prev1

var prev2

function fala() {

   var stonks = window.speechSynthesis
   speak1 = "a previsão 1 é:" + prev1
   speak2 = "a previsão 2 é:" + prev2


   var fi = new SpeechSynthesisUtterance(prev1 + prev2)



   stonks.speak(fi)
}


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mf-9M4yK4/model.json ', arrozcozido);



function arrozcozido() {
   console.log("ta serto")


}

function prever() {
img = document.getElementById('imagem_capturada')
classifier.classify(img, gotResult)

}

function gotResult(error, results){

if(error == true){

console.log("deu errado otario")
}
else{results
   
   console.log(results)


prev1 = results[0].label;
prev2 = results[1].label;


document.getElementById("prev1").innerHTML = prev1;
document.getElementById("prev2").innerHTML = prev2;
fala();

if(prev1 == "feliz"){
document.getElementById("prevs1").innerHTML = "&#128522;"



}



if(prev1 == "tsite"){
   document.getElementById("prevs1").innerHTML = "&#128532;"
   
   
   
   }

   if(prev1 == "raiva"){
      document.getElementById("prevs1").innerHTML = "&#128548;"
      
      
      
      }
   

      if(prev2 == "feliz"){
         document.getElementById("prevs2").innerHTML = "&#128522;"
         
         
         
         }
         
         
         
         if(prev2 == "tsite"){
            document.getElementById("prevs2").innerHTML = "&#128532;"
            
            
            
            }
         
            if(prev2 == "raiva"){
               document.getElementById("prevs2").innerHTML = "&#128548;"
               
               
               
               }
















}









}




