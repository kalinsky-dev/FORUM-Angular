export interface UserId {
  "_id": string,
  "themes": string[];
  "posts": string[];
  "tel": string;
  "email": string;
  "username": string;
  "password": string;
  "created_at": string;
  "updatedAt": string;
  "__v": number;
}

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


