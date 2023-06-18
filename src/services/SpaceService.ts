import ICollectionService from "@/interfaces/ICollectionService";
import IFirestoreService from "@/interfaces/IFirestoreService";
import FirestoreService from "@/services/FirestoreService";

export default class SpaceService implements ICollectionService{
    static collectionName = "spaces";
    #firestoreService: IFirestoreService;

    constructor() {
        this.#firestoreService = new FirestoreService(this);
    }

    getCollectionName(): string {
        return SpaceService.collectionName;
    }

    async getAllSpaces() {
        return await this.#firestoreService.getAllDocsFromCollection();
    }
}
