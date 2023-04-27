const express = require("express")
const { Tournament } = require("../model")
const router = express.Router()

router.post("/createTournament", async (req, res) => {
  const { organizer, title, description, type, prizePool  } = req.body

  const newTournament = new Tournament({
    organizer,
    title,
    description,
    type,
    prizePool
  })

  const result = await newTournament.save()

  if(result) {
    res.status(200).send({ message: result })
  } else {
    res.status(200).send({ message: "Error Create Tournament" })
  }
  
})

router.post("/updateTournament", async (req, res) => {
})

router.post("/deleteTournament", async (req, res) => {
  const { _id } = req.query

  const result = await Tournament.deleteOne({_id})

  if(result) {
    res.status(200).send({ message: result })
  } else {
    res.status(200).send({ message: "Error Delete Tournament" })
  }
  
})

router.post("/joinTournament", async (req, res) => {
  const { _id, user_id } = req.query

  const result = await Tournament.findOneAndUpdate({_id},{participants:{user_id}})

  if(result) {
    res.status(200).send({ message: "Tournament Joined" })
  } else {
    res.status(200).send({ message: "Error Joined Tournament" })
  }
})

router.post("/leaveTournament", async (req, res) => {
  const { _id, user_id } = req.query

  const result = await Tournament.updateOne({_id},{$pull:{participants:{user_id}}})

  if(result) {
    res.status(200).send({ message: "Tournament Leaved" })
  } else {
    res.status(200).send({ message: "Error Leave Tournament" })
  }
})

router.get("/getTournaments", async (req, res) => {
  const result = await Tournament.find({})

  if(result) {
    res.status(200).send({ message: result })
  } else {
    res.status(200).send({ message: "Error Get Tournament" })
  }
})