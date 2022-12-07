import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM2vs16jtBU-9q6NyJ49kuVYZvFvEZGYM",
  authDomain: "perichonreact.firebaseapp.com",
  projectId: "perichonreact",
  storageBucket: "perichonreact.appspot.com",
  messagingSenderId: "145859336469",
  appId: "1:145859336469:web:7b202fe768d7cc366ef11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 0. Inicializamos Firestore
const DB = getFirestore(app);

//1. Traer todos los documentos
export default async function getItems() {
  //1.A Referenciamos nuestra colección
  const colectionProductsRef = collection(DB, "products");
  //1.B Solicitamos todos los documentos de la colección
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//1. Traer todos los documentos
export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(10));

  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//2. Traer un documento por ID
export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

//3. Traer todos los  documentos según categoria
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//4. Enviar la orden a Firebase
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}


//Funcion para subir datos a firebase
/*export async function exportArrayToFirestore() {
  const products = [
    {
      id: 1,
      title: "Trapo Gris M",
      price: 161,
      stock: 12000,
      category: "trapos",
      imgurl: "/imgs/products/1.Trapo Gris M.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.",
    },
    {
      id: 2,
      title: "Trapo Blanco M",
      price: 161,
      stock: 12000,
      category: "trapos",
      imgurl: "/imgs/products/2.Trapo Blanco M.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.",
    },
    {
      id: 3,
      title: "Trapo Gris G",
      price: 161,
      stock: 12000,
      category: "trapos",
      imgurl: "/imgs/products/3.Trapo Gris G.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 4,
      title: "Trapo Blanco G",
      price: 161,
      stock: 12000,
      category: "trapos",
      imgurl: "/imgs/products/4.Trapo Blanco G.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 5,
      title: "Franela",
      price: 161,
      stock: 12000,
      category: "franela",
      imgurl: "/imgs/products/5.Franela.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 6,
      title: "Rejilla Tejida",
      price: 161,
      stock: 12000,
      category: "rejilla",
      imgurl: "/imgs/products/6.Rejilla Tejida.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 7,
      title: "Rejilla Doble",
      price: 161,
      stock: 12000,
      category: "rejilla",
      imgurl: "/imgs/products/7.Rejilla Doble.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 8,
      title: "Rejilla Lavacoche",
      price: 161,
      stock: 12000,
      category: "rejilla",
      imgurl: "/imgs/products/8.Rejilla Lavacoche.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 9,
      title: "Paño Multiuso x1",
      price: 161,
      stock: 12000,
      category: "paño",
      imgurl: "/imgs/products/9.Paño multiuso x1.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.",  
    },
    {
      id: 10,
      title: "Paño Multiuso x3",
      price: 161,
      stock: 12000,
      category: "paño",
      imgurl: "/imgs/products/10.Paño multiuso x3.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 11,
      title: "Paño para piso",
      price: 161,
      stock: 12000,
      category: "paño",
      imgurl: "/imgs/products/1.Trapo Gris M.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },
    {
      id: 12,
      title: "Trapo Costurado",
      price: 87,
      stock: 12000,
      category: "trapo",
      imgurl: "/imgs/products/1.Trapo Gris M.png",
      measures: "55 x 50 cm. (Tamaño Estándar)",
      color:"Gris",
      presentation:"Fardi de 120 unidades",
      features1: "100% Puro Algodón",
      features2:"Máxima Absorción",
      features3:"Doble refuerzo central, mayor durabilidad.", 
    },  
  ];

  const collectionRef = collection(DB, "products");
  for (let item of products) {
    item.index = item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    console.log("Documento creado, id:", docOrder.id);
  }
}*/
