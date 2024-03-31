export class GenericResponse<T> {
    success: boolean;
    message: string;
    data: T | null; 

    constructor(success: boolean, message: string, data: T) {
        this.success = success
        this.message = message
        this.data = data || null
    }
}

