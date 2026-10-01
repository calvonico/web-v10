import imgTeengo from "../img/work/teengo-500x500.png";
import imgDonation from "../img/work/donapp-500x500.png";
import imgVenmo from "../img/work/venmo-500x500.png";
import imgDespegar from "../img/work/despegar-500x500.png";

// size controls how many grid cells a card spans in the Work bento layout.
// "large" -> 2x2, "wide" -> 2x1, "small" -> 1x1 (default when omitted).
// Projects without an `image` yet render an initials placeholder instead
// (see the `color` field) until real artwork is added.
export const projects = [
  {
    name: "Wallet App",
    client: "TeenGo",
    description: "UX/UI redesign of a digital wallet for teenagers",
    discipline: "UX/UI",
    image: imgTeengo,
    url: "/work/wallet-app",
    size: "large",
    featured: true,
  },
  {
    name: "NGO Donation App",
    client: "DonApp",
    description: "UX/UI design of an app for donation",
    discipline: "UX/UI",
    image: imgDonation,
    url: "/work/ngo-donation-app",
    size: "wide",
    featured: true,
  },
  {
    name: "Venmo",
    client: "PayPal",
    description: "Graphic and email marketing assets",
    discipline: "Graphic Design",
    image: imgVenmo,
    url: "/work/venmo",
    size: "small",
    featured: true,
  },
  {
    name: "Despegar",
    client: "Despegar",
    description: "Marketing graphic assets",
    discipline: "Graphic Design",
    image: imgDespegar,
    url: "/work/despegar",
    size: "small",
  },
  {
    name: "Grupo Axo",
    client: "Grupo Axo",
    description: "Social media, video and email assets for fashion retail brands",
    discipline: "Graphic Design",
    url: "/work/grupo-axo",
    size: "wide",
    color: "from-rose-500 to-orange-400",
  },
  {
    name: "Cashi",
    client: "Cashi",
    description: "Email marketing design and A/B testing for a digital wallet",
    discipline: "Graphic Design",
    url: "/work/cashi",
    size: "small",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Wally",
    client: "Wally",
    description: "UI design for a new business line in an international payments app",
    discipline: "UX/UI",
    url: "/work/wally",
    size: "small",
    color: "from-sky-500 to-indigo-400",
  },
  {
    name: "Ingram",
    client: "Ingram",
    description: "Digital and communication assets for a global tech distributor",
    discipline: "Graphic Design",
    url: "/work/ingram",
    size: "small",
    color: "from-fuchsia-500 to-purple-400",
  },
];
