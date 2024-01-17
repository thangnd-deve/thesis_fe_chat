import CompanyTable from "@/components/admin/home/company_table";
import SearchItem from "@/components/admin/home/search_item";
import Sidebar from "@/components/admin/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-10 w-full">
        <SearchItem />
        <CompanyTable />
        {/* <Pagination /> */}
      </div>
    </div>
  );
}