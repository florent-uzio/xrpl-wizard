import { Action } from "./actions"
import { Button } from "./ui"

export const WizardHeader = () => {
  return (
    <div className="flex gap-4">
      <Action />
      <Button>JavaScript</Button>
      <Button>TypeScript</Button>
      <Button>Java</Button>
      <Button>Python</Button>
    </div>
  )
}
