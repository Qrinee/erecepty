// components/layout/ProgressHeader.tsx
interface ProgressHeaderProps {
  currentStep: 1 | 2 | 3;
}

export default function ProgressHeader({ currentStep }: ProgressHeaderProps) {
  const steps = [
    { number: 1, label: 'Dodaj leki' },
    { number: 2, label: 'Wywiad' },
    { number: 3, label: 'Opłać' },
  ];

  return (
    <div className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-blue-600">
          KROK {currentStep} Z 3
        </p>

        <h1 className="text-xl font-semibold text-gray-900">
          {currentStep === 1 && 'Dodaj leki'}
          {currentStep === 2 && 'Wywiad medyczny'}
          {currentStep === 3 && 'Podsumowanie i płatność'}
        </h1>

        {/* Progress bar */}
        <div className="mt-3 flex items-center gap-2">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center gap-2">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step.number < currentStep ? 'bg-green-600 text-white' : ''}
                  ${step.number === currentStep ? 'bg-blue-600 text-white' : ''}
                  ${step.number > currentStep ? 'bg-gray-200 text-gray-500' : ''}
                `}
              >
                {step.number < currentStep ? '✓' : step.number}
              </div>
              {step.number < 3 && (
                <div
                  className={`
                    w-12 h-1 rounded
                    ${step.number < currentStep ? 'bg-green-600' : 'bg-gray-200'}
                  `}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step labels */}
        <div className="mt-2 flex gap-16">
          {steps.map((step) => (
            <span
              key={step.number}
              className={`
                text-sm
                ${step.number <= currentStep ? 'text-gray-900 font-medium' : 'text-gray-400'}
              `}
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
