import { useGetCurrenciesTable } from "./api/hooks/useGetCurrenciesTable";
import { Header } from "./components/Header";
import { MainTable } from "./components/Table/MainTable";
import { useTableConfig } from "./hooks/useTableConfig";

function App() {
  const { columnConfig } = useTableConfig();

  const { data } = useGetCurrenciesTable({
    onErrorCallback: () => console.log("error"),
  });

  return (
    <>
      <Header />
      <MainTable columnConfig={columnConfig} tableData={data?.rates ?? []} />
    </>
  );
}

export default App;
