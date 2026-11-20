export type StorageType =
    | "localStorage"
    | "sessionStorage"
    | "indexedDB";

const DB_NAME = "AppStorage";
const STORE_NAME = "data";

// Open IndexedDB
function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = () => {
            const db = request.result;

            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Execute IndexedDB operations
async function executeDB<T>(
    mode: IDBTransactionMode,
    action: (store: IDBObjectStore) => IDBRequest<T>
): Promise<T> {
    const db = await openDB();

    try {
        return await new Promise<T>((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, mode);
            const store = transaction.objectStore(STORE_NAME);
            const request = action(store);

            transaction.oncomplete = () => resolve(request.result);
            transaction.onabort = () => reject(transaction.error);
            transaction.onerror = () => reject(transaction.error);
        });
    } finally {
        db.close();
    }
}

// GET STORAGE
export async function getStorage<T>(
    key: string,
    defaultValue: T,
    type: StorageType = "localStorage"
): Promise<T> {
    if (typeof window === "undefined") return defaultValue;

    if (type === "indexedDB") {
        const data = await executeDB(
            "readonly",
            (store) => store.get(key)
        );

        return data === undefined ? defaultValue : data;
    }

    const data = window[type].getItem(key);

    return data === null ? defaultValue : JSON.parse(data);
}

// SET STORAGE
export async function setStorage<T>(
    key: string,
    value: T,
    type: StorageType = "localStorage"
): Promise<void> {
    if (typeof window === "undefined") return;

    if (type === "indexedDB") {
        await executeDB(
            "readwrite",
            (store) => store.put(value, key)
        );

        return;
    }

    window[type].setItem(key, JSON.stringify(value));
}

// REMOVE STORAGE
export async function removeStorage(
    key: string,
    type: StorageType = "localStorage"
): Promise<void> {
    if (typeof window === "undefined") return;

    if (type === "indexedDB") {
        await executeDB(
            "readwrite",
            (store) => store.delete(key)
        );

        return;
    }

    window[type].removeItem(key);
}