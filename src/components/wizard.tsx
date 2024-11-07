import { WizardHeader } from "./wizard-header"
import { WizardLeftPanel } from "./wizard-left-panel"
import { WizardRightPanel } from "./wizard-right-panel"

export const Wizard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Top */}
      <WizardHeader />

      <div className="flex w-full gap-2">
        {/* Left side */}
        <div className="w-4/12">
          <WizardLeftPanel />
        </div>
        {/* Right side */}
        <div className="w-8/12">
          <WizardRightPanel />
        </div>
      </div>
    </div>
  )
}
