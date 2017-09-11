export interface Doctor {
  id: number;
  name: string;
  spec: string;
  city: string;
  visit: [{
    date: Date,
    reason: String,
    user: String
  }]
}