import NavLink from "./navLink/navLink";
import styles from "./links.module.css"

const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Blog",
            path: "/blog",
        },

    ];

    const session = true
    const isAdmin = true


    return (
        <div>
        <div className={styles.links}>
            {links.map((link, index) => (
                <NavLink item ={link} key = {link.title}/>
            ))}{
                session ? (
                    <>

                    {isAdmin && <NavLink item={{ title: "Admin", path:"/admin" }} />}
                            <button className={styles.logout}>Logout</button>
                            </>
                        ) : (
                    <NavLink item = {{title: "Login", path: "/login"}}/>
                )}
        </div>
        </div>
    )
}

export default Links