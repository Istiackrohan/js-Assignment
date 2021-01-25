// 1st assignment

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var met = kilometerToMeter(5.26);
console.log(met)

// 2nd assignment

function budgetCalculator(watch, phone, laptop){
    var prices = [50, 100, 500];
    for(var i = 0; i < prices.length; i++){
        watch = watch*prices[0];
        phone = phone*prices[1];
        laptop = laptop*prices[2];
        var total = watch + phone + laptop;
        break;
    }
    return total;
}

var result = budgetCalculator(5,5,5);
console.log(result)

//3rd assignment

function hotelCost(stayed){
    var bill = 0;
    if(stayed <= 10){
        bill = stayed*100;
    }
    else if(stayed <= 20){
        var tenDays = 10*100;
        var remaining = stayed - 10;
        var twentyDays = remaining*80;
        bill = twentyDays + tenDays;
    }
    else{
        var tenDays = 10*100;
        var twentyDays = 10*80;
        var remaining = stayed - 20;
        var moreDays = remaining*50;
        bill = tenDays + twentyDays + moreDays;
    }
    return bill;
}
var totalCost = hotelCost(25);
console.log(totalCost)

//4th assignment


function megaFriend(array){
    var length = 0;
    var longest = "";
    for (let i = 0; i < array.length; i++) {
        if(length<array[i].length){
            length = array[i].length;
            longest = array[i];
        } 
    }
    return longest;
}
var name = megaFriend(["Abul","babul","kabul","dhabul","Numerisattar","pagol","chagol","goru","vera"]);
console.log(name)