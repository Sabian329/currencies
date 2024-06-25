import { useQuery } from "react-query";
import { currenciesQueries } from "../queries";
import { TABLE_TYPE_ENUM } from "../../types";
import { QUERIES_KEYS } from "..";

const getCurrenciesTable = async () => {
  const { data } = await currenciesQueries.getCurrecniesTable({
    table: TABLE_TYPE_ENUM.A,
  });
  return data && data[0];
};

interface QueryHookTableParams {
  onErrorCallback?: () => void;
  onSuccessCallback?: () => void;
}

export const useGetCurrenciesTable = ({
  onErrorCallback,
  onSuccessCallback,
}: QueryHookTableParams) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QUERIES_KEYS.currenciesTable],
    queryFn: () => getCurrenciesTable(),
    onError: () => onErrorCallback?.(),
    onSuccess: () => onSuccessCallback?.(),
  });
  return { data, isLoading, isError, refetch };
};
