import React,{useState} from "react";

function Searchbar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searched, setSearched] = useState("");

  // List of topics (could be from API)
  const topicList = [
    "Men T-Shirts",
    "Men Jeans",
    "Women Dresses",
    "Women Handbags",
    "Kids Dresses",
    "Bedsheet",
    "Pillo Cover Set",
    "Lahenga set",
    "Sari",
    "Naughty",
    "Blouse",
    "churidar Set",
    "Women Top"
  ];

  // When user types
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions (case insensitive)
    if (value.trim() !== "") {
      const filtered = topicList.filter((topic) =>
        topic.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // When user clicks a suggestion
  const handleSelect = (item) => {
    setQuery(item);
    setSearched(item); // store the searched topic
    setSuggestions([]); // close dropdown
  };

    return(
        <form className="search-bar"><i class="bi bi-search"></i>
            <input type="text" placeholder="Search Your Fashion. . . . ."
                value={query}
                onChange={handleChange}
                onFocus={() => query && setSuggestions(
                topicList.filter((topic) =>
                topic.toLowerCase().includes(query.toLowerCase())
              )
            )}/>
                {/* Show suggestions only if available */}
          {suggestions.length > 0 && (
            <div className="dropdown-searchbar">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleSelect(item)}
                >
                  <i className="bi bi-search"></i> {item}
                </div>
              ))}
            </div>
          )}
        </form>
      );
    }
export default Searchbar;