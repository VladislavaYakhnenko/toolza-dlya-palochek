import {db} from "@/firebase";


export default class Firestore {
    #db: Firestore;

    constructor() {
        this.db = db;
    }
}
