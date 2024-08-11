import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyC3mUgsZPz_l2yPJB8IjWWdMKkC0jITkqM",
 authDomain: "inventorymanager-de526.firebaseapp.com",
 projectId: "inventorymanager-de526",
 storageBucket: "inventorymanager-de526.appspot.com",
 messagingSenderId: "879164950122",
 appId: "1:879164950122:web:54e94d08ee752e2ce8ac13"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };