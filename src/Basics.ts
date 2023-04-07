// ///Very basics about type
// let dammn: number = 23; //You need to define Type with each variable you use or consider it as a good practice tbh
// //Sometimes dammn might give error when .js and .ts file is opened at the same time. Its a bug of vs code

// console.log("Simple stuff: ",dammn);


// //types and interfaces
//     type User = {           //type alias 
//         name: string;
//         roll_N: number;
//         class?: number;
//     };


//     interface yolo{
//         name:string,
//         roll_N:number
//     }

//     interface admin extends yolo{
//         class ?: number
//     }

//     const UserObj:User = {
//         name:"Pranshu",
//         roll_N:12
//     }

//     function tomato(parameter: User): number {      //Here defining type to the return type of function also
//     //   return(parameter.class);          //Now here you will use the use of union type alias as class has the type of union 
//     return(parameter.roll_N);
//     }

//     tomato(UserObj);


//  // Type with primmitive template kind of 
//     function add(a: any, b: any): any {         //type is any not template or generic kind of thing 
//         return a+b;
//     }
    
//     console.log("Adding two any type values: ",add(1,2));


//    //Generics
//     function value<T>(a:Array<T>, b:Array<T>):Array<T>{
//         console.log("Telling that the input is going to be a array of unknown type: ",a.length);
//         return a;
//     }



//    //Generics Real world example
//     interface Product {
//         id: number;
//         name: string;
//         price: number;
//       }
      
//       function filterProducts<T>(products: T[], criteria: (product: T) => boolean): T[] {
//         return products.filter(criteria);
//       }
      
//       const products: Product[] = [
//         { id: 1, name: 'Product A', price: 10 },
//         { id: 2, name: 'Product B', price: 20 },
//         { id: 3, name: 'Product C', price: 30 },
//         { id: 4, name: 'Product D', price: 25 },
    
//       ];
      
//       const filteredProducts = filterProducts(products, product => product.price >= 20 && product.price <= 30);
      
//       console.log("Real Usage of Generic: Filetered Products = ",filteredProducts);


//    //Understanding template/generics in depth
//     interface Hasshit{
//         age: number;
//     }
//     function holo<T extends Hasshit>(parameter:T):T{        //Here We are telling that T generic will have a property named by hasshit and we need to pass the alredy made type like the made interface above
//         console.log("\nGeneric who knows a specific property upcoming : ",parameter.age);
//         return parameter;
//     }

//     const bo:Hasshit = {
//         age:13
//     }

//     holo(bo);



// // (some issue will sort out later) Using generics for fetching data as a template 
//     interface IPost {
//         name: string;
//         id: number;
//         description: string;
//     }
    
//     interface IUser {
//         id: number;
//         name: string;
//         age: number;
//     }
    
//     const fetchPostData = async (path: string): Promise<IPost[]> => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${path}`);
//         return response.json();
//     };
    
//     const fetchUsersData = async (path: string): Promise<IUser[]> => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${path}`);
//         return response.json();
//     };
    
//     const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${path}`);
//         return response.json();
//     }
    
//     (async () => {      //immediately invoked function expression
//         // const posts = await fetchPostData('/posts');
//         const posts = await fetchData<IPost[]>('/ditto');
//         console.log(posts[0].name);
//     })();


interface st_typing{
    name: string,
    rn : number,
}

function work(parameter:st_typing):st_typing{
    console.log(parameter.rn, parameter.name);
    return parameter;
}

const obj = {
    name: "Hey",
    rn : 183,
    subjects : 123
}

work(obj);

    