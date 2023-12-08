import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Subscribers = () => {
    const subscribers = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Dashboard | Subscribers</title>
            </Helmet>
            <h1 className="text-center text-4xl text-green-600 mb-6">Subscribers</h1>
            

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Serial
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subscribers.map((subscriber, idx) => (
                                <tr key={subscriber._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {idx + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {subscriber.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {subscriber.email}
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Subscribers;