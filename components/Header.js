import Link from 'next/link';
 
const linkStyle = {
  marginRight: 15
};

// const [isOpen, setIsOpen] = useState(false);
  const Header = () => (
    <div>
       
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
  
  export default Header;