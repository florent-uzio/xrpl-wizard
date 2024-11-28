import { useState } from "react"
import { contextFactory } from "../helpers"
import { SdkLanguage, XrplAction } from "../shared"
import { WizardProviderContext, WizardProviderProps } from "./wizard-provider.types"

// Create WizardProvider
// export const WizardContext = createContext<WizardProviderContext | undefined>(undefined)

const [WizardContext, useWizardContext] = contextFactory<WizardProviderContext>({
  hook: "useXRPLContext",
  provider: "XRPLProvider",
})

export const WizardProvider = ({ children }: WizardProviderProps) => {
  const [language, setLanguage] = useState<SdkLanguage>(SdkLanguage.TypeScript)
  const [action, setAction] = useState<XrplAction>(XrplAction.Payment)

  return <WizardContext.Provider value={{ language, action }}>{children}</WizardContext.Provider>
}

export { useWizardContext, WizardContext }
