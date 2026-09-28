export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

export type PaymentTabId = "upi" | "card" | "netbanking" | "wallets" | "cod";

export const paymentTabs: { id: PaymentTabId; label: string; icon: string }[] = [
  { id: "upi", label: "UPI", icon: "/icons/checkout/icon-checkout-tab-upi.svg" },
  { id: "card", label: "Credit / Debit Card", icon: "/icons/checkout/icon-checkout-tab-card.svg" },
  { id: "netbanking", label: "Net Banking", icon: "/icons/checkout/icon-checkout-tab-netbanking.svg" },
  { id: "wallets", label: "Wallets", icon: "/icons/checkout/icon-checkout-tab-wallets.svg" },
  { id: "cod", label: "Cash on Delivery", icon: "/icons/checkout/icon-checkout-tab-cod.svg" },
];

export const upiApps = [
  { id: "gpay", label: "Google Pay", letter: "G", bg: "#4285f4" },
  { id: "phonepe", label: "PhonePe", letter: "Ph", bg: "#5f259f" },
  { id: "paytm", label: "Paytm", letter: "P", bg: "#002970" },
  { id: "bhim", label: "BHIM", letter: "B", bg: "#004b9b" },
];
