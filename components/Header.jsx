import Link from 'next/link';

 function Header() {
     return <header>
             <h1>ねくすと・じぇいえす事始め!20230227</h1>
             <menu>Menu：
                 <Link href="/">トップ</Link>｜
                 <Link href="/other">別ページ</Link>
             </menu>
       </header>;
   }
 
   export default Header;