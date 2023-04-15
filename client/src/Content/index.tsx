import { GiCrossedSwords, GiOrganigram, GiMoneyStack } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineLeaderboard } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

export const tabs = () => {
  return [
    {
      icon: <AiOutlineUnorderedList size={24} style={{ marginRight: 10 }} />,
      title: "All Tournaments"
    },
    {
      icon: <MdOutlineLeaderboard size={24} style={{ marginRight: 10 }} />,
      title: "Player Leaderboards"
    },
    {
      icon: <VscOrganization size={24} style={{ marginRight: 10 }} />,
      title: "Organizers"
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

export const playerLeaderboards = [
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