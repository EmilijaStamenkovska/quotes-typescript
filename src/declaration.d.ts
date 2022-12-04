declare module "*.jpg";
declare module "*.module.css";

interface Quote {
    sentence: string;
    character: {
        name: string;
        slug: string;
        house: {
            name: string;
            slug: string;
        }
    }
};