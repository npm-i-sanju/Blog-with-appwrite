const conf = {
    appwrite: String(import.meta.env.VITE_APPWRITE_URI),
    project: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    database: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collection: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};


export default conf;