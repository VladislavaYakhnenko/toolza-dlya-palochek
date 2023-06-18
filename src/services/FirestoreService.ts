import {db} from "@/firebase";
import { collection, doc, getFirestore, limit, orderBy, query, getDocs } from 'firebase/firestore'
import ICollectionService from "@/interfaces/ICollectionService";

export default class FirestoreService {
    #instanceOfCollectionService: ICollectionService;

    constructor(instanceOfCollectionService: ICollectionService) {
        this.#instanceOfCollectionService = instanceOfCollectionService;
    }

    #snapshotToData(snapshot: any) {
        let docs = [];
        snapshot.forEach((doc: any) => {
            docs.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return docs;
    }

    async getAllDocsFromCollection() {
        const q = query(collection(db, this.#instanceOfCollectionService.getCollectionName()), orderBy("name", "asc"));
        const querySnapshot = await getDocs(q);
        return this.#snapshotToData(querySnapshot);
    }
}
