import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    isPublished: boolean;
    tags: Array<string>;
    publishedAt: bigint;
    readTime: string;
    excerpt: string;
    category: string;
}
export type SubmitResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface ContactMessage {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface ProfileImage {
    key: string;
    url: string;
    updatedAt: bigint;
}
export type CreateBlogResult = {
    __kind__: "ok";
    ok: BlogPost;
} | {
    __kind__: "err";
    err: string;
};
export interface backendInterface {
    createBlog(title: string, excerpt: string, content: string, category: string, tags: Array<string>, readTime: string): Promise<CreateBlogResult>;
    deleteBlog(id: bigint): Promise<boolean>;
    getBlog(id: bigint): Promise<BlogPost | null>;
    getBlogs(): Promise<Array<BlogPost>>;
    getContacts(): Promise<Array<ContactMessage>>;
    getProfileImage(): Promise<ProfileImage | null>;
    setProfileImage(key: string, url: string): Promise<ProfileImage>;
    submitContact(name: string, email: string, message: string): Promise<SubmitResult>;
}
