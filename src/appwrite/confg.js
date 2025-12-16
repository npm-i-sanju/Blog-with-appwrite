import { Client, ID, Databases, Query, Storage } from "appwrite";
import conf from "../conf.js";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUri)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, content, slug, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                title, content, featuredImage, status, userId
            }
            )
        } catch (error) {
            throw error;
        }
    }
    async updatePost({ title, content, slug, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                title, content, featuredImage, status
            }
            )
        } catch (error) {
            throw error;
        }

    }
    async deletePost({ slug }) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite error", error);
            return false;
        }
    }
    async getPosts(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite error", error);
            return false;
        }
    }

    async getAllPosts(queries = [
        Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite error", error);
            return false;
        }
    }
    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite error", error);
            return false;
        }
    }
    async deleteFile (fileId) {
            try {
 await this.bucket.deleteFile(
    conf.appwriteBucketId,
    fileId
)
return true;
            
        } catch (error) {
            console.log("Appwrite error", error);
            return false;
        }
    }
getFilePreview(fileId) {
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}

}
const service = new Service();


export default service;