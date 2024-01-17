import Account from "@/components/admin/account";
import CompanyTable from "@/components/admin/home/company_table";
import SearchItem from "@/components/admin/home/search_item";
import Sidebar from "@/components/admin/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Account />
        <div className="p-10 ">
          <SearchItem />
          <CompanyTable />
        </div>
        {/* <Pagination /> */}
      </div>
    </div>
  );
}