

    export interface Result {
        id: string;
        active: boolean;
        name: string;
        dateOfBirth: string;
    }

    export interface Data {
        result: Result[];
    }

    export interface UpdateDb {
        active: boolean;
        name: string;
    }




