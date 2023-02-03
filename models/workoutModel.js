
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(

    {

        title: {
            type: String,
            unique: true,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        load: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
)

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports = WorkoutModel;