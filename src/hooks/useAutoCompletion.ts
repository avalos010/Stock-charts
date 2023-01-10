import { useQuery } from "@tanstack/react-query";
import { getAutoComplete } from "../api";

export function useAutoCompletion(query: string) {
  return useQuery(
    ["autoComplete", query],
    async () => {
      return getAutoComplete(query);
    },
    {
      enabled: !!query,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      staleTime: 6000,
    }
  );
}
