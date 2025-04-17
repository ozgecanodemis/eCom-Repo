import { useState } from "react";
import { Grid, List } from "lucide-react";

export default function FilterBar() {
    const [view, setView] = useState("grid");

    return (
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6  bg-white shadow-sm">

            {/* Sonuç Sayısı */}
            <div className="text-sm font-medium text-gray-700">
                Showing all 12 results
            </div>

            {/* Görünüm Seçici */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Views:</span>
                <button
                    onClick={() => setView("grid")}
                    className={`p-2 rounded border ${view === "grid" ? "bg-gray-900 text-white" : "bg-white text-gray-600"} transition`}
                >
                    <Grid size={16} />
                </button>
                <button
                    onClick={() => setView("list")}
                    className={`p-2 rounded border ${view === "list" ? "bg-gray-900 text-white" : "bg-white text-gray-600"} transition`}
                >
                    <List size={16} />
                </button>
            </div>

            {/* Sıralama ve Filtre */}
            <div className="flex items-center gap-3">
                <select className="text-sm  bg-[#F9F9F9] px-3 py-1.5 text-secondTextColor h-[50px] w-[141px] font-bold">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
                <div className="mt-6 lg:mt-0">
                    <button className="bg-[#23A6F0] text-textColorWhite px-6 py-2 h-[50px] w-[94px] rounded hover:opacity-90 transition">
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
}
