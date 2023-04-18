import { GiCrossedSwords, GiOrganigram, GiMoneyStack } from "react-icons/gi";
import { BsPeopleFill, BsListCheck } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineLeaderboard } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { TbTournament } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";

export const tabs = () => {
  return [
    {
      icon: <AiOutlineUnorderedList size={24} style={{ marginRight: 10 }} />,
      title: "All Tournaments",
      route: "/"
    },
    {
      icon: <MdOutlineLeaderboard size={24} style={{ marginRight: 10 }} />,
      title: "Player Leaderboards",
      route: "/player-leaderboards"
    },
    {
      icon: <VscOrganization size={24} style={{ marginRight: 10 }} />,
      title: "Organizers",
      route: "/organizers"
    }
  ]
}

export const tournamentTabs = () => {
  return [
    {
      icon: <TbTournament size={24} style={{ marginRight: 10 }} />,
      title: "Bracket",
    },
    {
      icon: <BsListCheck size={24} style={{ marginRight: 10 }} />,
      title: "Rules"
    },
    {
      icon: <HiUsers size={24} style={{ marginRight: 10 }} />,
      title: "Participants"
    }
  ]
}

export const tableHeader = () => {
  return [
    {
      icon: <GiCrossedSwords size={24} style={{ marginRight: 10 }} />,
      title: "Tournament"
    },
    {
      icon: <GiOrganigram size={24} style={{ marginRight: 10 }} />,
      title: "Organizer"
    },
    {
      icon: <BsPeopleFill size={24} style={{ marginRight: 10 }} />,
      title: "Participants"
    },
    {
      icon: <GiMoneyStack size={24} style={{ marginRight: 10}} />,
      title: "Prize Pool"
    }
  ]
}

export const playerLeaderboardsContent = [
  {
    rank: "1st",
    name: "Peng",
    victories: 12324
  },
  {
    rank: "2nd",
    name: "Miracle-",
    victories: 634
  },
  {
    rank: "3rd",
    name: "AME",
    victories: 612
  },
  {
    rank: "4th",
    name: "Arteezy",
    victories: 430
  },
  {
    rank: "5th",
    name: "Gorgc",
    victories: 332
  },
]