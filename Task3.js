//დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
/*function sum(m,n) {
    if (m>n) { return m;}
    else if (m<n) {return n;}
    else return 0;
} console.log (sum(8,11));*/
//დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
/*function calculateSum(t,b) {return t+b};
console.log(calculateSum(6,9));*/
//დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
/*() => "Tamar Kurtsikidze"; console.log("Tamar Kurtsikidze");*/
//დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
/*function fullName(firstName,lastName) {return firstName +  " " + lastName};
console.log(fullName("Tamar", "Kurtsikidze"));*/
//Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
/*function multiply(n) { let number=1; for (let i=1; i<=n; i++) {number *=i;} return number};
console.log(multiply(8)); */
//დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 
/*let student ={firstName: "Tamar",
    lastName: "Kurtsikidze",
    age:24,
    scoresRate:[4,7,5,3,2],
    fullName: function() {return this.firstName +" " + this.lastName;}
}
console.log(student.fullName());*/
//Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
/*let student = {firstName: "Tamar",
    lastName: "Kurtsikidze",
    age:24,
    scoresRate:[4,7,5,3,2],
    totalscore: function() { sum=0;
        for (i=0; i<this.scoresRate.length; i++){sum += this.scoresRate[i];}
    return sum;} }
    {console.log(student.totalscore())}*/
//დაბეჭდეთ სტუდენტის სახელი და ასაკი
let student ={firstName: "Tamar",
    lastName: "Kurtsikidze",
    age:24,
    scoresRate:[4,7,5,3,2],
    fullInfo: function() {return this.firstName +" " + this.lastName + " " + this.age}
}
console.log(student.fullInfo())