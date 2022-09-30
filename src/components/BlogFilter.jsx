import { useState } from "react";

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSeacrh] = useState(postQuery);
  const [checked, setChecked] = useState(latest);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const qwery = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};
    if (qwery.length) params.post = qwery;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearchParams(e.target.value)}
        />
        <label style={{ padding: "0 1rem" }}>
          {" "}
          New Only
          <input
            type="checkbox"
            name="latest"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default BlogFilter;
