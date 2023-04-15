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