import { useLocation } from "react-router-dom";

const query = new URLSearchParams(useLocation().search);
const search = query.get("search");

// ✅ PLACE 1 (Decode yaha)
const decodedSearch = decodeURIComponent(search || "");

return (
  <div>

    {/* ✅ PLACE 2 (UI me use yaha) */}
    <h2>Results for: {decodedSearch}</h2>

  </div>
);