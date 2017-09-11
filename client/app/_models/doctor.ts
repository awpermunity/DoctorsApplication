export class Doctor {

    _id?: string;
    name: string;
    speciality: string;
    city: string;
    visit: [{
        date: Date,
        reason: String,
        user: String
    }]
}
