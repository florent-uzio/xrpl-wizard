import { XrplAction } from "../shared"

export type WizardProviderContext = {
  language: string
  action: XrplAction
}

export type WizardProviderProps = {
  children: React.ReactNode
}
