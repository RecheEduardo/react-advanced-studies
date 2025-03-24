import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ReactNode } from 'react'
// import './style.css'


const Navbar: React.FC = () => {
  return (
    <nav>
        <Link to="/">Estudos de React</Link>
        <ul>
            <CustomLink to="/pokedex">Pokedex</CustomLink>
            <CustomLink to="/copytext">Copiar Texto</CustomLink>
        </ul>
    </nav>
  )
}

interface CustomLinkProps {
    to: string;
    children: ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isMatched = useMatch({path: resolvedPath.pathname, end:true});

    return(
        <li className={isMatched? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar