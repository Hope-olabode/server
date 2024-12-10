const  mongoose  = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: { type: String},
  country: { type: String},
  church: { type: String },
  duration: { type: String },
  people_reached: { type: String },
  contacts_received: { type: String },
  bible_study_sessions: { type: String },
  bible_study_attendants: { type: String },
  unique_bible_study_attendants: { type: String },
  newcomers: { type: String },
  bible_reading_and_meditation: { type: String },
  prayer: { type: String },
  morning_service_attendance: { type: String },
  regular_service_attendance: { type: String },
  sermons_or_bible_study_listened_to: { type: String },
  articles_written: { type: String },
  exercise: { type: String },
  daily_reflection: { type: String },
  thanksgiving: { type: String },
  repentance_or_struggles: { type: String },
  prayer_requests: { type: String },
  overall_reflection_on_the_day: { type: String },
  three_things_must_do_tomorrow: { type: String },
  date: { type: String },
  email: { type: String },
}, { timestamps: true }
);



const FormModel = mongoose.model("forms", FormSchema)

module.exports = FormModel;