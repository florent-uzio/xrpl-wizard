import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export const Action = () => {
  const [action, setAction] = useState<string | null>(null)
  const handleActionChange = (value: string) => {
    setAction(value)
  }

  console.log(action)

  return (
    <Select onValueChange={handleActionChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an action" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Payment</SelectLabel>
          <SelectItem value="payment">Send Payment</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
