window.onload = function(){
    var weight = document.getElementById("weight");
    var height_feet = document.getElementById("height_feet");
    var height_inch = document.getElementById("height_inch");
    var clear = document.getElementById("clear");
    var calc = document.getElementById("calculate");

    calc.onclick = function(){
        weight = parseFloat(weight.value);
        height_feet = parseFloat(height_feet.value);
        height_inch = parseFloat(height_inch.value);

        h1 = (height_feet * 12) + height_inch;
        h2 = h1 * (0.0254);
        bmi = (weight) / (h2)**2;

        var msg = "";
        if(bmi < 16.0){
            msg = "Severely Underweight.";
        }else if(16.0 <= bmi && bmi <= 18.4){
            msg = "Underweight.";
        }else if(18.5 <= bmi && bmi <= 24.9){
            msg = "Normal.";
        }else if(25.0 <= bmi && bmi <= 29.9){
            msg = "Overweight.";
        }else if(30.0 <= bmi && bmi <= 34.9){
            msg = "Moderetely Obese.";
        }else if(35.0 <= bmi && bmi <= 39.9){
            msg = "Severely Obese.";
        }else if(bmi > 40){
            msg = "Morbidly Obese.";
        }

        document.getElementById("output").innerHTML = `Your BMI score is ${bmi.toFixed(1)},
        and according to your BMI score, you are ${msg}`;
    }

    clear.onclick = function(){
        location.reload();
    }
}