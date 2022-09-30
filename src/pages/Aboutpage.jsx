import { Link, Route, Routes } from "react-router-dom";

const Aboutpage = () => {
  return (
    <div>
      <h1>Aboute us</h1>
      <ul>
        <li>
          <Link to="contacts"> Our Contacts</Link>
        </li>
        <li>
          <Link to="team">Our Team</Link>
        </li>
      </ul>

      <Routes>
        <Route path="contacts" element={<p> contact</p>} />
        <Route path="team" element={<p> Team</p>} />
      </Routes>
    </div>
  );
};

export { Aboutpage };
