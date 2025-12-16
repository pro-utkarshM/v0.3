

export const appConfig = {
  name: "Nerdy Network",
  appDomain: "nerdynet.co",
  url: "https://app.nerdynet.co",
  logo: "https://app.nerdynet.co/logo.png",
  logoSquare: "https://app.nerdynet.co/favicon.ico",
  tagline: "Connecting nerds.",
  description:
    "A platform for nerds to connect, collaborate, and share knowledge.",
  authors: [
    { name: "Kanak Kholwal", url: "https://kanakkholwal.eu.org" },
    { name: "NITH", url: "https://nith.ac.in" },
  ],
  githubRepo: "https://github.com/nerdynetwork/nerdynetwork-platform",
  socials: {
    twitter: "https://twitter.com/nerdynetworkco",
    linkedin: "https://linkedin.com/in/nerdynetworkco",
    instagram: "https://instagram.com/nerdynetworkco",
    github: "https://github.com/nerdynetwork"
  },
  // sender email
  senderEmail: `platform@nerdynet.co`,
  sender: `Nerdy Network Platform <platform@nerdynet.co>`,
  contact:"https://forms.gle/hRwNKJouXpaPSJBv9",
  
} as const;

export const SERVER_IDENTITY = process.env.SERVER_IDENTITY;

export const SMTP_HOST = process.env.SMTP_HOST;
export const MAIL_EMAIL = process.env.MAIL_EMAIL;
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;



export const SMTP_SETTINGS = {
  host: SMTP_HOST || "smtp-relay.brevo.com", // "smtp.gmail.com", //replace with your email provider
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: MAIL_EMAIL,
    pass: MAIL_PASSWORD,
  },
}
