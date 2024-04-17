import { error } from 'console'
import * as nodemailer from 'nodemailer'
const Sendmail = async (Maildetails: any,callback: (arg0: any) => void)=>{
    try{
        const transporter=nodemailer.createTransport({
            port:465,
            service:'Gmail',
            host:'smtp.gmail.com',
            secure:true,
            auth:{
                user:'bishalbhattrai117@gmail.com',
                pass:'rarl ahqt vttc gnth'
            }
        })
        const info = await transporter.sendMail(Maildetails)
        callback(info)
    }
    catch{
        console.log(error)
    }
}
export default Sendmail;