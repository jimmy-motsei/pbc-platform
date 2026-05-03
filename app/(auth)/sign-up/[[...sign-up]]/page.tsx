import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        variables: {
          colorPrimary: "#CC0000",
          colorBackground: "#141414",
          colorInputBackground: "#0d0d0d",
          colorInputText: "#F2F2ED",
          colorText: "#F2F2ED",
          colorTextSecondary: "#666666",
          borderRadius: "2px",
          fontFamily: "DM Sans, sans-serif",
        },
        elements: {
          card: { border: "1px solid #242424", boxShadow: "none" },
          headerTitle: { fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", letterSpacing: "0.04em" },
          formButtonPrimary: { fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.15em", fontSize: "12px" },
        },
      }}
    />
  );
}
