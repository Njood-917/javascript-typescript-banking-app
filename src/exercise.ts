//type script

//how to write the type for var:

// let fName : string = "njood";
// let numStudent:number = 21;
// let isValid:boolean = true;

// //defined the type  : type or interface

// type Student ={
//     name :string;
//     id :number;
// }


// // where you put the type of object
// const student:{name:string; id:number} = {
//     name:"layan",
//     id:1
// };
// type Address ={
//     street:string,
//     suite:string,
//     city:string,
//     zipCode:string,
// };

// type UserName = {
//     firstName:string,
//     age:number,
//     address:Address
   
// };
// const userName: UserName = {
//     firstName: "Andrea",
//     age: 5,
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipCode: "92998-3874",
//     },
//   };

//   //array

//   let numList:number[]=[1,2,3,4];
//   let nameList:string [] =["nora", "leen"];


// type Product ={
//     id:number;
//     title:string;
//     price:number;
//     description:string;
//     category:string;
//     image:string;
//     rating:{
//         rate:number;
//         count:number;
//     }

// }

// // let idArray :number [] = [1,2,3,4,5,6];
// // let titleArray :string []=[];
// // let priceArray :number []= [];
// // let descriptionArray :string[]=[];

// type ProductList=Product[];

// const productList:ProductList =[
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men’s clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: {
//         rate: 3.9,
//         count: 120,
//       },
//     },
//     {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men’s clothing",
//       image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       rating: {
//         rate: 4.1,
//         count: 259,
//       },
//     },
//     {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men’s clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       rating: {
//         rate: 4.7,
//         count: 500,
//       },
//     },
//     {
//       id: 4,
//       title: "Mens Casual Slim Fit",
//       price: 15.99,
//       description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       category: "men’s clothing",
//       image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       rating: {
//         rate: 2.1,
//         count: 430,
//       },
//     },
//     {
//       id: 5,
//       title:
//         "John Hardy Women’s Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//       price: 695,
//       description:
//         "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean’s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       rating: {
//         rate: 4.6,
//         count: 400,
//       },
//     },
//     {
//       id: 6,
//       title: "Solid Gold Petite Micropave ",
//       price: 168,
//       description:
//         "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       rating: {
//         rate: 3.9,
//         count: 70,
//       },
//     },
//   ];
// type Translations= {
//         official:string;
//         common:string;

// }
// type country={
//     name:{
//         common:string;
//         official:string;
//    nativeName:{
//     fra: {
//         official: string;
//         common: string;
//       }
//     }
// }
//      tld:string;
//      cca2:string;
//      ccn3:string;
//      cca3:string;
//      independent:boolean;
//      status:string;
//      unMember:boolean;
//      region:string;
//      subregion:string;

//     translations:{
//         ara:Translations;
//         bre:Translations;
//         ces:Translations;
//         cym:Translations;
//         est:Translations;
//         fin:Translations;
//         fra:Translations;
//         hrv:Translations;
//         hun:Translations;
//         ita:Translations;
//         jpn:Translations;
//         kor:Translations;
//         nld:Translations;
//         per:Translations;
//         pol:Translations;
//         por:Translations;
//         rus:Translations;
//         slk:Translations;
//         spa:Translations;
//         swe:Translations;
//         tur:Translations;
//         urd:Translations;
//         zho:Translations;

//     }

//     latlng:number;
//     landlocked:boolean;
//     area:number;
//     flag:string;
//     maps:{
//         googleMaps:string;
//         openStreetMaps:string;

//     }
//     population:number;

// }


// const countryList= [
//     {
//       name: {
//         common: "French Polynesia",
//         official: "French Polynesia",
//         nativeName: {
//           fra: {
//             official: "Polynésie française",
//             common: "Polynésie française",
//           },
//         },
//       },
//       tld: [".pf"],
//       cca2: "PF",
//       ccn3: "258",
//       cca3: "PYF",
//       independent: false,
//       status: "officially-assigned",
//       unMember: false,
  
//       region: "Oceania",
//       subregion: "Polynesia",
  
//       translations: {
//         ara: {
//           official: "بولينزيا الفرنسية",
//           common: "بولينزيا الفرنسية",
//         },
//         bre: {
//           official: "Polinezia C'hall",
//           common: "Polinezia C'hall",
//         },
//         ces: {
//           official: "Francouzská Polynésie",
//           common: "Francouzská Polynésie",
//         },
//         cym: {
//           official: "French Polynesia",
//           common: "French Polynesia",
//         },
//         deu: {
//           official: "Französisch-Polynesien",
//           common: "Französisch-Polynesien",
//         },
//         est: {
//           official: "Prantsuse Polüneesia",
//           common: "Prantsuse Polüneesia",
//         },
//         fin: {
//           official: "Ranskan Polynesia",
//           common: "Ranskan Polynesia",
//         },
//         fra: {
//           official: "Polynésie française",
//           common: "Polynésie française",
//         },
//         hrv: {
//           official: "Francuska Polinezija",
//           common: "Francuska Polinezija",
//         },
//         hun: {
//           official: "Francia Polinézia",
//           common: "Francia Polinézia",
//         },
//         ita: {
//           official: "Polinesia Francese",
//           common: "Polinesia Francese",
//         },
//         jpn: {
//           official: "フランス領ポリネシア",
//           common: "フランス領ポリネシア",
//         },
//         kor: {
//           official: "프랑스령 폴리네시아",
//           common: "프랑스령 폴리네시아",
//         },
//         nld: {
//           official: "Frans-Polynesië",
//           common: "Frans-Polynesië",
//         },
//         per: {
//           official: "پُلی‌نِزی فرانسه",
//           common: "پُلی‌نِزی فرانسه",
//         },
//         pol: {
//           official: "Polinezja Francuska",
//           common: "Polinezja Francuska",
//         },
//         por: {
//           official: "Polinésia Francesa",
//           common: "Polinésia Francesa",
//         },
//         rus: {
//           official: "Французская Полинезия",
//           common: "Французская Полинезия",
//         },
//         slk: {
//           official: "Francúzska Polynézia",
//           common: "Francúzska Polynézia",
//         },
//         spa: {
//           official: "Polinesia francés",
//           common: "Polinesia Francesa",
//         },
//         srp: {
//           official: "Француска Полинезија",
//           common: "Француска Полинезија",
//         },
//         swe: {
//           official: "Franska Polynesien",
//           common: "Franska Polynesien",
//         },
//         tur: {
//           official: "Fransız Polinezyası",
//           common: "Fransız Polinezyası",
//         },
//         urd: {
//           official: "فرانسیسی پولینیشیا",
//           common: "فرانسیسی پولینیشیا",
//         },
//         zho: {
//           official: "法属波利尼西亚",
//           common: "法属波利尼西亚",
//         },
//       },
//       latlng: [17.6797, 149.4068],
//       landlocked: false,
//       area: 4167,
  
//       flag: "🇵🇫",
//       maps: {
//         googleMaps: "https://goo.gl/maps/xgg6BQTRyeQg4e1m6",
//         openStreetMaps: "https://www.openstreetmap.org/relation/3412620",
//       },
//       population: 280904,
//     },
//   ];



// to tell the machine the answer just number

// function addNumber (a:number,b:number):number{

//     return  a + b;
// }
// // function name
// console.log(addNumber(5,10));

// function sayHello (name:string){
//     return name;
// }

// const arr = [1,2,3,4];

// function checkThisarray (arr){
//     for (var i=0 ; i<arr.length; i++){
//         if (arr[i] > 2){
//             return true ;
//         }else {
//             return false ;

//         }
//     }
// }
//     console.log(checkThisarray(arr));





























