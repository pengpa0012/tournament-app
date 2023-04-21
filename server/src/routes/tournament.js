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
  
})

router.post("/joinTournament", async (req, res) => {
  
})

router.get("/getTournaments", async (req, res) => {
  
})