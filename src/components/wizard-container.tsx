type WizardContainerProps = {
  children: React.ReactNode
}

export const WizardContainer = ({ children }: WizardContainerProps) => {
  return <div className="container mx-auto p-4">{children}</div>
}
