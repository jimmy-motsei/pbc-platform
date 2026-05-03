import { SignUp } from "@clerk/nextjs";

const clerkAppearance = {
  variables: {
    colorPrimary:                "#CC0000",
    colorBackground:             "#1a1a1a",
    colorInputBackground:        "#0d0d0d",
    colorInputText:              "#F2F2ED",
    colorText:                   "#F2F2ED",
    colorTextSecondary:          "#999999",
    colorTextOnPrimaryBackground:"#ffffff",
    colorNeutral:                "#F2F2ED",
    colorDanger:                 "#FF4444",
    borderRadius:                "2px",
    fontFamily:                  "DM Sans, sans-serif",
    fontSize:                    "14px",
  },
  elements: {
    card: {
      background:   "#1a1a1a",
      border:       "1px solid #333333",
      boxShadow:    "0 0 40px rgba(0,0,0,0.6)",
      padding:      "32px",
    },
    headerTitle: {
      color:        "#F2F2ED",
      fontFamily:   "'Bebas Neue', sans-serif",
      fontSize:     "28px",
      letterSpacing:"0.04em",
    },
    headerSubtitle: {
      color: "#999999",
    },
    socialButtonsBlockButton: {
      background:   "#242424",
      border:       "1px solid #333333",
      color:        "#F2F2ED",
    },
    socialButtonsBlockButtonText: {
      color: "#F2F2ED",
    },
    dividerLine: {
      background: "#333333",
    },
    dividerText: {
      color: "#666666",
    },
    formFieldLabel: {
      color: "#999999",
    },
    formFieldInput: {
      background:  "#0d0d0d",
      border:      "1px solid #333333",
      color:       "#F2F2ED",
    },
    formButtonPrimary: {
      background:    "#CC0000",
      fontFamily:    "'IBM Plex Mono', monospace",
      letterSpacing: "0.12em",
      fontSize:      "12px",
    },
    footerActionLink: {
      color: "#CC0000",
    },
  },
};

export default function SignUpPage() {
  return <SignUp appearance={clerkAppearance} />;
}
