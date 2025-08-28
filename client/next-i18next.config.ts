import type { UserConfig } from "next-i18next";

const nextI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  react: { useSuspense: false },
};

export default nextI18NextConfig;
