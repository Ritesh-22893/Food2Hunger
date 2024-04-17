

export class AppError extends Error{
    status:string;
    isOperotion:boolean;
    constructor(public StatusCode:number=500, public message:string){
        super(message)
        this.status=`${StatusCode}`.startsWith('4')?'tail':'error'
        this.isOperotion=true
        Error.captureStackTrace(this, this.constructor)
    }
}