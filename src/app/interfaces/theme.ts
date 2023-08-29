import { UserId } from "./user-id";

export interface Theme {
  "_id": string;
  "subscribers": string[];
  "posts": string[];
  "themeName": string;
  "userId": UserId;
  "created_at": string;
  "updatedAt": string;
  "__v": number;
}


