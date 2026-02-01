import dotenv from 'dotenv'
dotenv.config()
const port=process.env.PORT || 3000;
const ATLAS_DB_URL=process.env.ATLAS_DB_URL;
const NODE_ENV=process.env.NODE_ENV||"development";
export{
    port,
    ATLAS_DB_URL,
    NODE_ENV
}