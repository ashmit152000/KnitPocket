import { GoogleIcon, PayPalIcon, PaytmIcon, PhonePeIcon } from "./icons";

export const oauthProviders = [
    { provider: "google", label: "Google", icon: <GoogleIcon /> },
    { provider: "paypal", label: "PayPal", icon: <PayPalIcon /> },
    { provider: "paytm", label: "Paytm", icon: <PaytmIcon /> },
    { provider: "phonepe", label: "PhonePe", icon: <PhonePeIcon /> },
  ];

export function OAuthButton() { 

    return <div className="grid grid-cols-2 gap-3 mb-8 animate-stagger">
        {oauthProviders.map((service) => (
          <button
            key={service.provider}
            type="button"
            onClick={() => handleOAuthLogin(service.provider)}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/60 hover:bg-white/10 py-3 px-3 text-sm text-gray-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_18px_rgba(0,217,255,0.28)] group"
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </span>
            <span className="font-medium">{service.label}</span>
          </button>
        ))}
      </div>}