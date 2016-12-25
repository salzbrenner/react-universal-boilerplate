import React from 'react';
import { Link } from 'react-router';

// class Nav extends Component {
//   render() {
//     return (
//       <div className="nav">
//         <div className="nav__inner">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

const Nav = () => (
  <div className="nav">
    <div className="nav__inner">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
