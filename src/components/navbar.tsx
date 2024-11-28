import { Text } from "@/shared/components/text"
import { Wand } from "lucide-react"

export const Navbar = () => {
  return (
    <div className="p-2 bg-white w-full">
      <Text size="2xl">
        <div className="flex align">
          <Wand />
          XRP Ledger Wizard
        </div>
      </Text>
    </div>
  )
}
