
export default function CompanyTable() {
    return (
        <div className="mt-5 w-full bg-slate-100 relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs font-semibold tracking-wide text-left text-white bg-gray-800 uppercase border-b border-gray-400 ">
                    <tr>
                        <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider">No.</th>
                        <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider">Name</th>
                        <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider">Email</th>
                        <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">1</td>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">John Doe</td>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">john.doe@example.com</td>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">Active</td>
                    </tr>
                    <tr>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">2</td>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">Jane Smith</td>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">jane.smith@example.com</td>
                        <td className="py-4 px-6 border-b text-gray-700 border-gray-200">Inactive</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}