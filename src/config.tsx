import { AnswersHeadlessProvider } from "@yext/answers-headless-react";

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: "60489ac339293c9bbe64f0c7007cdfe9",
  experienceKey: "BestBuy1",
  locale: "en",
  sessionTrackingEnabled: true,
  verticalKey: "products",
  endpoints: {
    universalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
  }
};
