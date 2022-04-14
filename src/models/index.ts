export interface User {
    id: {
        value: string;
    }
    name: {
        first: string;
        last: string;
    };
    email: string;
    dob: {
        age: number;
    };
    cell: string;
    thumbnail: string;
    picture: {
        large: string;
        medium: string;
    }
    location:{
        city: string;
        state?: string;
    }
}