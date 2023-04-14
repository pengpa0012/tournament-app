const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['participant', 'organizer'],
    default: "participant",
    required: true
  }
})

const tournamentUserSchema = new mongoose.Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  totalTournamentsJoined: {
    type: Number,
  },
  totalTournammentsOrganized: {
    type: Number
  },
  Stats: {
    win: {
      type: Number
    },
    lose: {
      type: Number
    },
    withdraw: {
      type: Number
    }
  }
})

const tournamentSchema = new mongoose.Schema({
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  prizePool: {
    type: Number,
    required: true
  },
  participants: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  rounds: [{
    roundNumber: {
      type: Number
    },
    matches: [{
      matchNumber: Number,
      players: [
        { 
          playerId: {
            type: Schema.Types.ObjectId,
            ref: "User"
          },
          score: Number
        },
        { 
          playerId: {
            type: Schema.Types.ObjectId,
            ref: "User"
          },
          score: Number 
        }
      ],
      winner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }, 
      isCompleted: Boolean 
    }]
  }],
})