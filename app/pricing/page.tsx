export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Basic profile',
        'Connect with up to 100 users',
        'Share posts and photos',
        'Basic support'
      ]
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      features: [
        'Everything in Free',
        'Connect with unlimited users',
        'Advanced analytics',
        'Priority support',
        'Custom profile themes'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        'API access',
        'Advanced security features'
      ]
    }
  ]

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Choose the plan that's right for you</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 border rounded-lg ${
                plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-tl-lg">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-600">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-md font-semibold ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 