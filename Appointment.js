
import mongoose from "mongoose";
export default mongoose.model("Appointment", new mongoose.Schema({
  type: { type: String, default: "appointment" },
  patient_name: String,
  patient_age: Number,
  patient_phone: String,
  patient_email: String,
  surgery_type: String,
  preferred_date: String,
  time_slot: String,
  priority: String,
  doctor_id: String,
  doctor_name: String,
  doctor_specialty: String,
  hospital_name: String,
  district: String,
  status: String,
  stage: String,
  payment_method: String,
  payment_status: String,
  amount_paid: Number,
  created_at: String
}));
