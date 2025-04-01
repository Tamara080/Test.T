//გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
let t=87; m=65
console.log(t+m);

//გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks, დაბეჭდეთ student ის სახელი
let student={ firstName:"Tamar",
    lastName:"Kurtsikidze",
    age:24,
    email:"kurtsikidzetako@gmail.com",
    marks:[9,9,9,10,8]
} 
console.log(student.firstName);
//გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
let m=45, n=23
if(m>n){m+n
    console.log(m+n)}
    else {console.log(n)
};
//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
let studentName="Tamar"
switch(studentName){
    case "Tamar":
        console.log("Rise and Shine, Tamar!")
    break;
case "Irakli":
    console.log("Rise and Shine, Irakli!")} ;
//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)
let salary=1500, bonus;
if(salary>=2000){
    bonus=0;
} else if(salary<2000){ bonus=salary*0.1;
    console.log(bonus) };

//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
 
let a=23, b=a/2, c=a+b;
console.log(c); 
//გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.

let phones=["iphone", "samsung", "pixel", "huawei", "xiaomi"];
console.log(phones);

//დაბეჭდეთ phones მასივის ბოლო პირველი და ბოლო ელემენტი ( ცალ-ცალკე console.log ეგში)

 console.log(phones[0]);
 console.log(phones[4]);